import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";

import * as cadviewer from "cadviewer";

import ResizeObserver from 'resize-observer-polyfill';



var isObjectAlredySelected = false;   // global variable to control selections
var textLayer1 = "";

/* text style for adding text into Space Objects */
var text_style_arial_11pt_bold = {
        'font-family': "Arial",
        'font-size': "11pt",
        'font-weight': "bold",
        'font-style': "none",
        'margin': 0,
        'cursor': "pointer",
        'text-align': "left",
        'z-index': 1980,
        'opacity': 0.5
      };
  
  /* text style for adding text into Space Objects */
  var text_style_arial_9pt_normal = {
        'font-family': "Arial",
        'font-size': "9pt",
        'font-weight': "normal",
        'font-style': "none",
        'margin': 0,
        'cursor': "pointer",
        'text-align': "left",
        'z-index': 1980,
        'opacity': 1
      };
  
  
  var FontAwesome_9pt_normal = {
        'font-family': "FontAwesome",
        'font-size': "9pt",
        'font-weight': "normal",
        'font-style': "none",
        'margin': 0,
        'cursor': "pointer",
        'text-align': "left",
        'z-index': 1980,
        'opacity': 1
      };
        
  
  /* text style for adding text into Space Objects */
  var text_style_dialog = {
        'font-family': "Dialog",
        'font-size': "9pt",
        'font-weight': "normal",
        'font-style': "italic",
        'margin': 0,
        'cursor': "pointer",
        'text-align': "left",
        'z-index': 1980,
        'opacity': 1
      };
  
  
var selectionType = "none";

/*   Multiple Select Methods   */

var mySpaceArray = new Array();      // custom/user array to keep selected or highlight objects, note this is an array of Objects
var mySpaceArray_doNotTouch = ["120","122"];   // custom array to control spaces that shall not be selectable
var myReturnArray = new Array();



// ALL CALLBACK METHODS FROM CADVIEWER MUST BE DECLARED AS EXPORT METHODS
function cvjs_OnLoadEnd(){
  // generic callback method, called when the drawing is loaded
  // here you fill in your stuff, call DB, set up arrays, etc..
  // this method MUST be retained as a dummy method! - if not implemeted -

  console.log("ONLOADEND!");


  cadviewer.cvjs_resetZoomPan("floorPlan");

  var user_name = "Bob Smith";
  var user_id = "user_1";

  // set a value for redlines
  cadviewer.cvjs_setCurrentStickyNoteValues_NameUserId(user_name, user_id );
  cadviewer.cvjs_setCurrentRedlineValues_NameUserid(user_name, user_id);
  
  //cvjs_dragBackgroundToFront_SVG("floorPlan");					
  //cvjs_initZeroWidthHandling("floorPlan", 3.0);			
  //cvjs_colorAllLayersInDrawing("floorPlan", "#000000");
  //cvjs_supressPopUpModalMode(true);
   textLayer1 =cadviewer.cvjs_clearLayer(textLayer1);

   cadviewer.cvjs_setSpaceObjectsDefaultLayer("floorPlan", "spaceLayer1");


    // Use process handles, if -hlall has been set in conversion to expose AutoCAD DWG Handles
    var processHandles = true;
    if (processHandles){
      cadviewer.cvjs_handleObjectsParceBlocks(false);
      cadviewer.cvjs_handleObjectsParceTextOnly(true);
      cadviewer.cvjs_processHandleObjects();
    }


    try {

      // we need to set the style array properly based on param.seats in tempArray
      console.log("temp_array length - Seats from : "+tempArray.length);

      mySpaceArray = [];
      mySpaceArray.length = 0;
    
      for (var j=0; j<tempArray.length; j++ ){
        var rmid = tempArray[j].space;
        mySpaceArray.push({ "space" : rmid, "attrObj":cadviewer.cvjs_returnSelectedOriginalStyles(rmid) });	   
      }


      // set the hightlight color of objects from the database
      for (var j = 0; j < mySpaceArray.length; j++) {
       cadviewer.cvjs_highlightSpace(mySpaceArray[j].space, highlight_red_borders);

        console.log(mySpaceArray[j].space, mySpaceArray[j].attrObj);

      }
    }
    catch (err2) { console.log("OnLoad End  - space Array highlight: " + err2) }

}


 // callback methods from CADViewer
function cvjs_mouseenter(id :string, handle : string, entity :string){

  console.log("cvjs_mouseenter");
  console.log("Hello: "+cadviewer.cvjs_getTextOnId(id));

	cadviewer.cvjs_mouseenter_handleObjectStyles("#F00", 10.0, 1.0, false, id, handle, "Hello: "+cadviewer.cvjs_getTextOnId(id));


};
function cvjs_mousedown(id :string, handle :string, entity :string){
  console.log("cvjs_mousedown");
};



function cvjs_click(id :string, handle :string, entity :string, path : string, xpos : number, ypos: number){
  
  
  console.log("cvjs_click "+id+"  "+handle+" xpos="+xpos+" ypos="+ypos);

  // NOTE: this is template code to insert a SENSOR with 3 layer states into the drawing at mouse click
  // we abort in the general case, uncomment to use.
  var myvar = false;
  if (myvar) return;   // see above


  // if there is no x,y we simply return
  if (xpos == undefined || ypos == undefined) return;


  // here we use click to insert a FixedSizeObject!!!  SVG as base64 encoded
  if (false){
    
    var loadSpaceImage_Location = "data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmlld0JveD0iLTExMDAgLTIwMCAyMjAwIDIyMDAiCiAgIGhlaWdodD0iMjIwMCIKICAgd2lkdGg9IjIyMDAiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlkPSJzdmcyIgogICB2ZXJzaW9uPSIxLjEiPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTgiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgICAgaWQ9ImRlZnM2IiAvPjxnCiAgICAgaWQ9ImcxMCI+PGcKICAgICAgIGlkPSJnMTIiPjxwYXRoCiAgICAgICAgIGlkPSJwYXRoNzIiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNlMTFhMjI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGQ9Im0gNjQ5LjE0LDAgYyAtNDMyLjc4LC05Mi4xOSAtODY1LjQ5LC05Mi4xOSAtMTI5OC4yOCwwIC0xMjIuMTIsMjYuMDEgLTIxNy4yOCwxMjEuMTcgLTI0My4zLDI0My4zIC05Mi4xOCw0MzIuNzggLTkyLjE4LDg2NS40OSAwLDEyOTguMjggMjYuMDIsMTIyLjEyIDEyMS4xOCwyMTcuMjggMjQzLjMsMjQzLjI5IDQzMi43OSw5Mi4xOSA4NjUuNSw5Mi4xOSAxMjk4LjI4LDAgMTIyLjEzLC0yNi4wMSAyMTcuMjksLTEyMS4xNyAyNDMuMywtMjQzLjI5IDkyLjE5LC00MzIuNzkgOTIuMTksLTg2NS41IDAsLTEyOTguMjggLTI2LjAxLC0xMjIuMTMgLTEyMS4xNywtMjE3LjI5IC0yNDMuMywtMjQzLjMiIC8+PHBhdGgKICAgICAgICAgaWQ9InBhdGg3NCIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgZD0ibSAwLDE0MDcuMzQgYyAtMTguODgsMCAtMzQuMjUsLTE1LjM2IC0zNC4yNSwtMzQuMjUgdiAtNzI0LjggYyAwLC0yMC40MSAtMTAuNTksLTM5LjM2IC0yNy45OCwtNTAuMDUgLTM1LjY4LC0yMS45NSAtNTYuOTksLTU5LjkgLTU2Ljk5LC0xMDEuNDkgMCwtNjUuNzMgNTMuNDksLTExOS4yMiAxMTkuMjIsLTExOS4yMiA2NS43NCwwIDExOS4yMiw1My40OSAxMTkuMjIsMTE5LjIyIDAsNDEuNTkgLTIxLjMxLDc5LjU0IC01Ni45OSwxMDEuNDkgLTE3LjM4LDEwLjY5IC0yNy45NywyOS42NCAtMjcuOTcsNTAuMDUgdiA3MjQuOCBjIDAsMTguODkgLTE1LjM3LDM0LjI1IC0zNC4yNiwzNC4yNSB6IG0gMCwtMTE0Ny4zNCBjIC0xMzAuNTQsMCAtMjM2Ljc0LDEwNi4yMSAtMjM2Ljc0LDIzNi43NSAwLDcxLjE1IDMxLjIyLDEzNi44NSA4NC45NiwxODEuNTMgdiA2OTQuODEgYyAwLDgzLjcgNjguMDksMTUxLjc4IDE1MS43OCwxNTEuNzggODMuNjksMCAxNTEuNzgsLTY4LjA4IDE1MS43OCwtMTUxLjc4IHYgLTY5NC44MSBjIDUzLjc0LC00NC42OCA4NC45NywtMTEwLjM4IDg0Ljk3LC0xODEuNTMgMCwtMTMwLjU0IC0xMDYuMjEsLTIzNi43NSAtMjM2Ljc1LC0yMzYuNzUiIC8+PHBhdGgKICAgICAgICAgaWQ9InBhdGg3NiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgZD0ibSAzODguMTAsMTQ1Ni42NSBjIC0yNi41MSwwIC00OC4wOCwtMjEuNTcgLTQ4LjA4LC00OC4wOCAwLC0yNi41MSAyMS41NywtNDguMDggNDguMDgsLTQ4LjA4IDI2LjUxLDAgNDguMDgsMjEuNTcgNDguMDgsNDguMDggMCwyNi41MSAtMjEuNTcsNDguMDggLTQ4LjA4LDQ4LjA4IHogbSAwLC0yMTMuNjkgYyAtOTEuMzIsMCAtMTY1LjYxLDc0LjI5IC0xNjUuNjEsMTY1LjYxIDAsOTEuMzIgNzQuMjksMTY1LjYxIDE2NS42MSwxNjUuNjEgOTEuMzIsMCAxNjUuNjEsLTc0LjI5IDE2NS42MSwtMTY1LjYxIDAsLTkxLjMyIC03NC4yOSwtMTY1LjYxIC0xNjUuNjEsLTE2NS42MSIgLz4KPC9nPjwvZz48L3N2Zz4="

    var baseobject = "http://localhost:3000/content/customInsertSpaceObjectMenu/images/sensor_c.svg"
    var id = "myID_"+ Math.floor(Math.random() * 10000);
    var type = "sensor";
    var layer = "mylayer";
    cadviewer.cvjs_setImageSpaceObjectParameters(baseobject, id, type, layer);
    // cadviewer.cvjs_setImageSpaceObjectParameters(loadSpaceImage_Location, id, type, layer);
    cadviewer.cvjs_setGlobalSpaceImageObjectScaleFactor(1.0);

    //console.log("cvjs_addFixedSizeImageSpaceObjectXY");
    cadviewer.cvjs_addFixedSizeImageSpaceObjectXY("floorPlan", xpos, ypos)
    //cvjs_addFixedSizeImageSpaceObject("floorPlan");

  // tell to update the Scroll bar 
  //vqUpdateScrollbar(id, handle);
  // window.alert("We have clicked an entity: "+entity.substring(4)+"\r\nThe AutoCAD Handle id: "+handle+"\r\nThe svg id is: "+id+"\r\nHighlight SQL pane entry");
  
  }

};


function cvjs_dblclick(id :string, handle :string, entity :string){
  console.log("cvjs_dblclick");

};
function cvjs_mouseout(id :string, handle :string, entity :string){
  console.log("cvjs_mouseout");

  cadviewer.cvjs_mouseout_handleObjectStyles(id, handle);

};

function cvjs_mouseleave(id :string, handle :string, entity :string){
  console.log("cvjs_mouseleave");

  cadviewer.cvjs_mouseout_handleObjectStyles(id, handle);

};

function cvjs_mouseover(id :string, handle :string, entity :string){
  console.log("cvjs_mouseover");
  console.log("Text on ID: "+cadviewer.cvjs_getTextOnId(id));


};
function cvjs_measurementCallback(){};
function cvjs_CalibrateMeasurementCallback(){};



var myobject;
var myredlineObjects = {};
var mystickynoteObjects = {};
var myredlinestickynoteObjects = {};

// Callback Method on Creation and Delete 
//export function cvjs_graphicalObjectOnChange(type, graphicalObject, spaceID){
function cvjs_graphicalObjectOnChange(type :string, graphicalObject :string, spaceID :string){
	// do something with the graphics object created! 
//	window.alert("CALLBACK: cvjs_graphicalObjectOnChange: "+type+" "+graphicalObject+" "+spaceID+" indexSpace: "+graphicalObject.toLowerCase().indexOf("space"));
	console.log("CALLBACK: cvjs_graphicalObjectOnChange: "+type+" "+graphicalObject+" "+spaceID+" indexSpace: "+graphicalObject.toLowerCase().indexOf("space"));


	if (graphicalObject.toLowerCase().indexOf("space")!==-1){
		myobject = cadviewer.cvjs_returnSpaceObjectID(spaceID);
		console.log("This Object "+myobject.id+" with name "+myobject.name+" has Parent: "+myobject.parent);
	}


	// SPACE OBJECTS

	if (type == 'Create' && graphicalObject.toLowerCase().indexOf("space")>-1 && graphicalObject.toLowerCase().indexOf("circle")==-1){
			
		/**
		 * Return a JSON structure of all content of a given ID: <br>
		* 	var jsonStructure =  	{	"path": path,
		*								"tags": tags, 
		*								"node": node, 
		*								"area": area, 
		*								"outerhtml": outerHTML, 
		*								"occupancy": occupancy, 
		*								"name": name, 
		*								"type": type, 
		*								"id": id, 
		*								"defaultcolor": defaultcolor, 
		*								"highlightcolor": highlightcolor, 
		*								"selectcolor": selectcolor, 
		*								"layer": layer, 
		*								"group": group, 
		*								"linked": linked, 
		*								"attributes": attributes, 
		*								"attributeStatus": attributeStatus, 
		*								"displaySpaceObjects": displaySpaceObjects,
		*								"translate_x": translate_x, 
		*								"translate_y": translate_y, 
		*								"scale_x": scale_x ,
		*								"scale_y": scale_y ,
		*								"rotate": rotate, 
		*								"transform": transform, 
		*								"svgx": svgx, 
		*								"svgy": svgx, 
		*								"dwgx": dwgx, 
		*								"dwgy": dwgy , 
		*                               "customContent" : mycustomcontent,
		*                               "pageNumber" : "",
		*                               "pageName" : "",
		*                               "block" : "",
		*                               "blockAttributeId" : "",
		*                               "blockAttributeCount" : ""
		*                               "clickhandler" : "enable",
		*                               "parent" : "none",
		*                               }
 		* @param {string} spaceID - Id of the Space Object to return
		* @return {Object} jsonSpaceObject - Object with the entire space objects content
		*/

		myobject = cadviewer.cvjs_returnSpaceObjectID(spaceID);
		// I can save this object into my database, and then use command 
		// cvjs_setSpaceObjectDirect(jsonSpaceObject) 
		// when I am recreating the content of the drawing at load
		// for the fun of it, display the SVG geometry of the space:			
		// console.log("This is the SVG: "+myobject.outerhtml);



		// NOTE! - When an object is created, the application programmer can simply give 
		// the object a name matching a database, if needed. 
		/*
		var newName = "ID"+Math.floor(Math.random() * 1000000);
		console.log("OnloadEnd new object created name:"+myobject.name+ " id:"+myobject.id+" new name"+newName)
		cadviewer.cvjs_changeSpaceObjectName(myobject.id, newName)
		*/


	}

	if (type == 'Delete' && graphicalObject.toLowerCase().indexOf("space")>-1 ){
		// remove this entry from my DB

		window.alert("We have deleted: "+spaceID)
	}


	if (type == 'Move' && graphicalObject.toLowerCase().indexOf("space")>-1 ){
		// remove this entry from my DB

		console.log("This object has been moved: "+spaceID)		
		myobject = cadviewer.cvjs_returnSpaceObjectID(spaceID);

	}
	
	// REDLINE & STICKYNOTE OBJECTS


		// REDLINES
		if (type == 'Create' && graphicalObject.toLowerCase().indexOf("redline")>-1 ){
			myredlineObjects = cadviewer.cvjs_returnAllRedlineObjects();   // cadviewer 6
            myredlinestickynoteObjects = cadviewer.cvjs_returnAllRedlineStickyNoteObjects();  //cadviewer 7
			console.log("red: "+JSON.stringify(myredlineObjects));
			// 7.0.15
		}

		if (type == 'Delete' && graphicalObject.toLowerCase().indexOf("redline")>-1 ){		
			myredlineObjects = cadviewer.cvjs_returnAllRedlineObjects();   // cadviewer 6
            myredlinestickynoteObjects = cadviewer.cvjs_returnAllRedlineStickyNoteObjects();  //cadviewer 7
			console.log("red: "+JSON.stringify(myredlineObjects));
		}			

		if (type == 'Create' && graphicalObject.toLowerCase().indexOf("stickynote")>-1){
			myredlineObjects = cadviewer.cvjs_returnAllRedlineObjects();   // cadviewer 6
            myredlinestickynoteObjects = cadviewer.cvjs_returnAllRedlineStickyNoteObjects();  //cadviewer 7
			console.log("note:"+JSON.stringify(mystickynoteObjects));
		}


		if (type == 'Delete' && graphicalObject.toLowerCase().indexOf("stickynote")>-1 ){
			myredlineObjects = cadviewer.cvjs_returnAllRedlineObjects();   // cadviewer 6
            myredlinestickynoteObjects = cadviewer.cvjs_returnAllRedlineStickyNoteObjects();  //cadviewer 7
			console.log("note:"+JSON.stringify(mystickynoteObjects));
		}


		if (type == 'Edit' && graphicalObject.toLowerCase().indexOf("stickynote")>-1 ){
			myredlineObjects = cadviewer.cvjs_returnAllRedlineObjects();   // cadviewer 6
            myredlinestickynoteObjects = cadviewer.cvjs_returnAllRedlineStickyNoteObjects();  //cadviewer 7
			console.log("note:"+JSON.stringify(mystickynoteObjects));
		}

		if (type == 'Move' && graphicalObject.toLowerCase().indexOf("stickynote")>-1 ){
			myredlineObjects = cadviewer.cvjs_returnAllRedlineObjects();   // cadviewer 6
            myredlinestickynoteObjects = cadviewer.cvjs_returnAllRedlineStickyNoteObjects();  //cadviewer 7
			console.log("note:"+JSON.stringify(mystickynoteObjects));
		}

}


function cvjs_Url_callback(){};
function cvjs_loadSpaceImage_UserConfiguration(){};
function cvjs_NoObjectSelected(){};
function cvjs_SVGfileObjectClicked(){};
function cvjs_SVGfileObjectMouseEnter(){};
function cvjs_SVGfileObjectMouseLeave(){};
function cvjs_SVGfileObjectMouseMove(){};
function cvjs_ParseDisplayDataMaps(){};
function cvjs_QuickCountCallback(){};
function cvjs_OnHyperlinkClick(){};
function cvjs_setUpStickyNotesRedlines(){};
function custom_host_parser_PopUpMenu(){};
function cvjs_customHostParser(){};
function drawPathsGeneric(){};
function cvjs_callbackForModalDisplay(){};
function cvjs_populateMyCustomPopUpBody(){};
function cvjs_customModalPopUpBody(){};
function cvjs_NoObjectSelectedStickyNotes(){};
function cvjs_NoObjectSelectedHyperlinks(){};
function cvjs_ObjectSelectedHyperlink(){};
function cvjs_ObjectSelectedStickyNotes(){};
function cvjs_popupTitleClick(roomid :string){};

function cvjs_OnLoadEndRedlines(){
  // generic callback method, called when the redline is loaded
  // here you fill in your stuff, hide specific users and lock specific users
  // this method MUST be retained as a dummy method! - if not implemeted -

  // I am hiding users added to the hide user list
 cadviewer.cvjs_hideAllRedlines_HiddenUsersList();

  // I am freezing users added to the lock user list
 cadviewer.cvjs_lockAllRedlines_LockedUsersList();
}


// generic callback method, tells which FM object has been clicked
function cvjs_change_space(){

}

function cvjs_graphicalObjectCreated(graphicalObject : string){

// do something with the graphics object created!
//		window.alert(graphicalObject);

}

// This method is linked to the save redline icon in the imagemap
function cvjs_saveStickyNotesRedlinesUser(){

// there are two modes, user handling of redlines
// alternatively use the build in redline file manager

cadviewer.cvjs_openRedlineSaveModal("floorPlan");

// custom method startMethodRed to set the name and location of redline to save
// see implementation below
//startMethodRed();
// API call to save stickynotes and redlines
//cadviewer.cvjs_saveStickyNotesRedlines("floorPlan", false, "");
}


// This method is linked to the load redline icon in the imagemap
function cvjs_loadStickyNotesRedlinesUser(){


cadviewer.cvjs_openRedlineLoadModal("floorPlan");

// first the drawing needs to be cleared of stickynotes and redlines
//cvjs_deleteAllStickyNotes();
//cvjs_deleteAllRedlines();

// custom method startMethodRed to set the name and location of redline to load
// see implementation below
//startMethodRed();

// API call to load stickynotes and redlines
//cadviewer.cvjs_loadStickyNotesRedlines("floorPlan", false);
}


function startMethodRed(){

	var v1 = "/content/redlines/v7/"+cadviewer.cvjs_computeDynamicRedlineNamePath()+"all-users.json";
	var v2 = "/content/redlines/v7/"+cadviewer.cvjs_computeDynamicRedlineNamePath()+"all-users.json";

	cadviewer.cvjs_setStickyNoteRedlineUrl(v1);
	cadviewer.cvjs_setStickyNoteSaveRedlineUrl(v2);
}





// Here we are writing a basic public that will be used in the PopUpMenu
// this is template on all the good stuff users can add
function my_own_clickmenu1(){
var id = cadviewer.cvjs_idObjectClicked();
//		var node = cvjs_NodeObjectClicked();
window.alert("Custom menu item 1: Here developers can implement their own methods, the look and feel of the menu is controlled in the settings.  Clicked object ID is: "+id);
}

// Here we are writing a basic public that will be used in the PopUpMenu
// this is template on all the good stuff users can add
function my_own_clickmenu2(){
var id = cadviewer.cvjs_idObjectClicked();
//var node = cvjs_NodeObjectClicked();

window.alert("Custom menu item 2: Here developers can implement their own methods, the look and feel of the menu is controlled in the settings. Clicked object ID is: "+id);
//window.alert("Custom menu item 2: Clicked object Node is: "+node);
}


function cvjs_multiSelectStart() {
  myReturnArray = []
  // mySpaceArray = []  
  // mySpaceCounter = 0  
  cadviewer.cvjs_hideOnlyPop();
//  cadviewer.cvjs_clearDrawing();
  multiSelect = true;
  cadviewer.cvjs_supressPopUpModalMode(true);
  cadviewer.cvjs_supressSingleSpaceHighlight(true);
  cadviewer.cvjs_setMultiSelect(true);

  // 6.4.07
  cadviewer.cvjs_setDisableClickDrag(true);
  
  console.log('cvjs_multiSelectStart - mySpaceArrayGG4', mySpaceArray)
}


function cvjs_multiSelectFinish(){
  // 6.4.07
  cadviewer.cvjs_setDisableClickDrag(false);
  cadviewer.cvjs_hideOnlyPop();
//  cadviewer.cvjs_clearDrawing();
  cadviewer.cvjs_supressPopUpModalMode(false);
  cadviewer.cvjs_supressSingleSpaceHighlight(false);
  var string = "MultiSelect  - Spaces selected: ";
  for (var j=0; j<mySpaceArray.length; j++ ){
  //        string = string + " mySpaceArray["+j+"]="+mySpaceArray[j];
    string = string + " "+mySpaceArray[j];
  }	

  cadviewer.cvjs_exitMultiSelect();

  // NOTE - This is my Custom exit condition for Multiselect  back to Angular
  for (var j=0; j<mySpaceArray.length; j++ ){
    string = string + " "+mySpaceArray[j].space;
    myReturnArray.push({SpaceID: mySpaceArray[j].space, Area: "not computed"} );
  }

  return myReturnArray;
}


function cvjs_ObjectSelected(rmid :string, floorplan_div :string){

console.log("cvjs_ObjectSelected: "+rmid+" cadviewer.cvjs_getMultiSelect() "+cadviewer.cvjs_getMultiSelect());
  try{
    if (!cadviewer.cvjs_getMultiSelect()){       
     // THE CLICKED CALLBACK METHOD WILL ALSO ECHO CONTENT OR TRIGGER ACTION

      return;								
    } 
    // check if the object is cannot be clicked
    for (var i = 0; i < mySpaceArray_doNotTouch.length; i++){
      if ( mySpaceArray_doNotTouch[i] == rmid ){
        // custom response
  
        window.alert("The user defined array mySpaceArray_doNotTouch, tells not to select!");
  
        // if object is in the do not touch object, then return
        return;								
      }
    }


    // here we handle multi-select
    // if room already selected, remove from selection list and let us find the original object style
    var attrObject;	

    
    var selected = cadviewer.cvjs_returnIsSpaceMultipleSelected(rmid, mySpaceArray);
    // we tell isObjectAlredySelected back to the main mouse click event  //6.4.07
    isObjectAlredySelected = selected;


    // console.log("selected : "+selected+"  rmid: "+rmid+" Array, length "+mySpaceArray.length);
    if (selected){
      attrObject = cadviewer.cvjs_returnOriginalStyleAndRemoveSelected(rmid, mySpaceArray);
      console.log("selected branch 1: "+rmid+" attrObject  "+attrObject );

      // cadviewer.cvjs_hideOnlyPop();  // 6.4.07
    }

    
    if (!selected){ // if not selected, add to list
      console.log("Add to list array length: "+mySpaceArray.length+" rmid "+rmid);	
  //		mySpaceArray[mySpaceCounter] = { "space" : rmid, "attrObj": cadviewer.cvjs_returnSelectedOriginalStyles(rmid) };	   

    mySpaceArray.push({ "space" : rmid, "attrObj": cadviewer.cvjs_returnSelectedOriginalStyles(rmid) });	   
    
      // NOTE: We can highlight here, alternatively we choose to do it in the class callback!!!
     //  cadviewer.cvjs_highlightSpace(rmid, highlight_green_borders); 
     cadviewer.cvjs_setLastObj(rmid);

      // cadviewer.cvjs_hideOnlyPop();   6.4.07

    }
    else{ // it is already selected, thereby we display the original color stored in: attrObject   
      // NOTE IMPORTANT TO RESTORE
      cadviewer.cvjs_highlightSpace(rmid, attrObject);
    }
  
  }
  catch (err) {
    console.log("cadviewer.cvjs_ObjectSelected "+rmid+" err:"+err);
  }
}

export function return_myReturnArray(){

  return myReturnArray;

}




function myCustomModalPopUpBody(rmid : any){


  var textcolor = "darkblue";
  var textcolor2 = "black";


  // set custom color on modal   // NOTE, we set to false for standard!!!
  cadviewer.cvjs_styleQTip_color(false, '#3DCD5D', '#293133', '#293133', '#293133', '#293133');
  //textcolor = "#CBCBCB";
  //textcolor2 = "#CBCBCB";


  console.log("click on myCustomPopUpBody: "+rmid+" I now change the pop-up menu:");
  // make your own popup based on callback
  var my_cvjsPopUpBody = "";

  // we make 3 random modals
  var modalnumber = Math.floor(Math.random() * 6.0);

  if (modalnumber == 0){
    // standard modal
    // standard 3 item menu
    //  cvjs_modal_1 sets a suitable size 
    // style=\"background-color: none; color: #CBCBCB;\"
    my_cvjsPopUpBody = "<div  class=\"cvjs_modal_1\" id=\"my_own_clickmenu1()\">Custom<br>Menu 1<br><i class=\'fa fa-undo\'></i></div>";
    my_cvjsPopUpBody += "<div  class=\"cvjs_modal_1\" id=\"my_own_clickmenu2()\">Custom<br>Menu 2<br><i class=\'fa fa-info-circle\'></i></div>";
    my_cvjsPopUpBody += "<div  class=\"cvjs_modal_1\" id=\"cvjs_zoomHere()\">Zoom<br>Here<br><i class=\'fa fa-search-plus cvjs_modal_1\'></i></div>";
  }
  else
  if (modalnumber == 1){
    // column based, but just two click menus
    my_cvjsPopUpBody = "<div class=\"cvjs_modal_1\" id=\"my_own_clickmenu1()\">Custom<br>Menu One<br><i class=\'fa fa-undo\'></i></div>";
    my_cvjsPopUpBody += "<div class=\"cvjs_modal_1\" id=\"cvjs_zoomHere()\">Zoom<br>Here<br><i class=\'fa fa-reply cvjs_modal_1\'></i></div>";
  }
  else
  if (modalnumber >=2){
    // row based content with callback

    var str = " "+rmid;
    my_cvjsPopUpBody = "<div style=\"color: "+textcolor2+"\">";
    my_cvjsPopUpBody += "Element ID: <span style=\"color: "+textcolor+";cursor: pointer;\" id=\"custom_callback1()\" >"+str+"</span><br>";

    var branch = Math.floor(Math.random() * 2.0);

    if (branch == 0){
      str = " Presumed Wall Void";	
      my_cvjsPopUpBody += "Survey: <span style=\"color: "+textcolor+";cursor: pointer;\" id=\"custom_callback2()\" >"+str+"</span><br>";
      str = " Service Alert";
      my_cvjsPopUpBody += "Notice: <span style=\"color: "+textcolor+";cursor: pointer;\" id=\"custom_callback3()\" >"+str+"</span><br>";
    
    }else{
      str = "Presumed Ceiling Void";	
      my_cvjsPopUpBody += "Survey: <span style=\"color: "+textcolor+";cursor: pointer;\" id=\"custom_callback4()\" >"+str+"</span><br>";
      str = "Evaluation Pending";
      my_cvjsPopUpBody += "Notice: <span style=\"color: "+textcolor+";cursor: pointer;\" id=\"custom_callback5()\" >"+str+"</span><br>";

    }
//		my_cvjsPopUpBody += "Status: <a href=\"javascript:custom_callback5()\"><strong>More Info</strong> <i class=\"glyphicon glyphicon-transfer\" id=\"custom_callback5()\"></i></a> ";

    my_cvjsPopUpBody += "Status: <span style=\"color: "+textcolor+";cursor: pointer;\" id=\"custom_callback6()\" >"+"<strong>More Info</strong>"+"   <i class=\'fa fa-reply\'></i></span><br>";
    my_cvjsPopUpBody += "</div>";
  }

  return my_cvjsPopUpBody;
}

function populateMyCustomPopUpBody(rmid :any, node :any){
  console.log(" we actually have a second callback to change content of the the pop-up menu after myCustomPopUpBody (developed originally for Angular2) populateMyCustomPopUpBody: "+rmid+"  "+node);
}





// SAMPLE TO DRAG RECTANGLE if overlapping space objects 

var cvjs_delta_x;
var cvjs_delta_y;
var cvjs_global_scale;
var cvjs_handleGroup;
var cvjs_RubberBand :any = new Object;
var cvjs_firstX :number = 0;
var cvjs_firstY :number= 0;
var cvjs_lastX :number= 0;
var cvjs_lastY :number= 0;
var generic_canvas_flag_first_click_rectangle :boolean = false;
var generic_canvas_flag_rectangle :boolean= false;

var click_rmid :string = "";

// Define interfaces for objects used to communicate between Angular and CADViewer JavaScript API
export interface MultiSelectCallbackArray{
//  id:number;
  SpaceID:string;
  Area:string;
};

var isCADViewerInitializedInAngular = false;
var floorplans_divs_Initialized; 

var tempArray = new Array();
var FileName;
var hatchtype :number = 0;


// connecting to Servlets Server
var ServerBackEndUrl = "http://localhost:8080/cadviewer/";
var ServerLocation = "";


// connecting to PHP Server
var ServerBackEndUrl = "http://localhost/cadviewer/";
var ServerLocation = "";

// Connecting to .NET Server
var ServerBackEndUrl = "http://localhost:53737/";
var ServerLocation = "";


// Connecting to .NET Core server
var ServerUrl = "https://localhost:4200/";
var ServerBackEndUrl = "https://localhost:5001/";
var ServerLocation = "";


// Standard NodeJS Server
var ServerUrl = "http://localhost:4200/";
var ServerBackEndUrl = "http://localhost:3000/";
var ServerLocation = "";




var multiSelect = false;    // flag to control multiselect


var my_test_counter = 0;;


var multipleSelectColor = {
  fill: '#fa8072',
  "fill-opacity": 0.9,
  stroke: '#fa8072',
  'stroke-width': 2.0,
  'stroke-opacity': 1,
  'stroke-linejoin': 'round'
  };
  
var  highlight_red = {
    fill: '#fa8072',
    "fill-opacity": 0.8,
    stroke: '#8B0000',   // #8B0000   #fa8072    // red
    'stroke-width': 2.0, // 
    'stroke-opacity': 1,
    'stroke-linejoin': 'round'
  };
  
  
var  highlight_green = {
    fill: '#32CD32',     // 0dff8a
    "fill-opacity": 0.8,
    stroke: '#228B22',       // 0dff8a green
    'stroke-width': 2.0,
    'stroke-opacity': 1,
    'stroke-linejoin': 'round'
  };
  
  
var  highlight_blue = {
    fill: '#0c8dff',
    'fill-opacity': 0.8,
    stroke: '#003366',           // midnight blue 003366 ,    #0c8dff
    'stroke-width': 2.0,
    'stroke-opacity': 1.0,
    'stroke-linejoin': 'round'
  };
  
  
var  highlight_yellow = {
    fill: '#fafa00',            //  #FFFCBB yellow
    "fill-opacity": 0.8,
    stroke: '#FFD300',    //  orange
    'stroke-width': 2.0,
    'stroke-opacity': 1,
    'stroke-linejoin': 'round'
  };
  
  
var  highlight_purple = {
    fill: '#ff00dd',     
    "fill-opacity": 0.8,
    stroke: '#800080', //  purple          #ff00dd
    'stroke-width': 2.0,
    'stroke-opacity': 1,
    'stroke-linejoin': 'round'
  };
  
  
var  highlight_bordeau_red_borders = {
    fill: '#fff',
    "fill-opacity": 0.01,
    stroke: '#8B0000',   // #8B0000   #fa8072    // red
    'stroke-width': 3.0, // 
    'stroke-opacity': 1,
    'stroke-linejoin': 'round'
  };
  
  
var  highlight_red_borders = {
    fill: '#fff',
    "fill-opacity": 0.01,
    stroke: '#FF0000',   // #8B0000   #fa8072    // red
    'stroke-width': 3.0, // 
    'stroke-opacity': 1,
    'stroke-linejoin': 'round'
  };
  
  
  
var  highlight_green_borders = {
    fill: '#fff',
    "fill-opacity": 0.01,
    stroke: '#228B22',       // 0dff8a green
    'stroke-width': 3.0,
    'stroke-opacity': 1,
    'stroke-linejoin': 'round'
  };
  
var  highlight_blue_borders = {
    fill: '#fff',
    "fill-opacity": 0.01,
    stroke: '#003366',           // midnight blue 003366 ,    #0c8dff
    'stroke-width': 4.0,
    'stroke-opacity': 1.0,
    'stroke-linejoin': 'round'
  };
  
var  highlight_yellow_borders = {
    fill: '#fff',
    "fill-opacity": 0.01,
    stroke: '#FFD300',    //  orange
    'stroke-width': 4.0,
    'stroke-opacity': 1.0,
    'stroke-linejoin': 'round'
  };
  
var  highlight_purple_borders = {
    fill: '#fff',
    "fill-opacity": 0.01,
    stroke: '#800080', //  purple          #ff00dd
    'stroke-width': 4.0,
    'stroke-opacity': 1.0,
    'opacity': 1.0,
    'stroke-linejoin': 'round'
  };
  
  
@Component({
  selector: 'app-cadviewer',
  templateUrl: './cadviewer.component.html',
  styleUrls: ['./cadviewer.component.scss'],
  
})



export class CadviewerComponent implements OnInit {
  


private mouseUp : any = new Object();

private subscription : any = new Object();


private resizeObserver: any = new Object();
private readonly observedElement = document.body;

//resizeObservable$: Observable<Event>;
//resizeSubscription$: Subscription;

/*
mouseupObservable$: Observable<Event>;
mouseupSubscription$: Subscription;

this.mouseupObservable$ = fromEvent(window, 'mouseup');
this.mouseupSubscription$ = this.mouseupObservable$.subscribe(evt => {
    this.cadviewerMouseUp(evt);
});
  */          


  constructor() { 

  }

  ngOnInit(){


    this.resizeObserver = new ResizeObserver(this.resizeCallback);
    this.resizeObserver.observe(this.observedElement);


    const el = document.getElementById('floorPlan')!;

    // Create an Observable that will publish mouse movements
    this.mouseUp = fromEvent<MouseEvent>(el, 'mouseup');
    
    // Subscribe to start listening for mouse-move events
    this.subscription = this.mouseUp.subscribe((evt:any)  => {
      // Log coords of mouse movements
      //console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
    

      this.cadviewerMouseUp(evt);
  
      /*
      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
      if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
      }
      */
  

    });
  
      /*             
//    this.resizeObservable$ = fromEvent(window, 'resize');
//    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
//      window.alert("resize");
    // set maximum CADViewer canvas side
      try{
        cadviewer.cvjs_resizeWindow_position("floorPlan" );
      }catch(err){
        console.log(err);

      }
       // alternatively set a fixed CADViewer canvas size
       //	cadviewer.cvjs_resizeWindow_fixedSize(800, 600, "floorPlan");		
    });
    */


    var params;  // these are from external application

    this.init_CADViewer(params);
  }
 

  ngOnDestroy() {
      this.disconnectResizeObserver();
      this.subscription.unsubscribe();
  }


  private resizeCallback() {
    // console.log("callback called");

      try{
        cadviewer.cvjs_resizeWindow_position("floorPlan" );
      }catch(err){
        console.log(err);
      }
  }

  private disconnectResizeObserver() {
    this.resizeObserver.unobserve(this.observedElement);
    this.resizeObserver.disconnect();
  }





  // THIS is a variable that tells us what type if selection we are doing
  public selectionType = "none";

  // we define an Array instance of an Interface we can use from the callback from MultiSelect
  
  public myMultiSelect:MultiSelectCallbackArray[] = [
    {SpaceID: ' test-Space1', Area: 'none'},
    {SpaceID: ' test-Space2', Area: 'none'},
  ];

  //public myMultiSelect = [];

  /* event handler to fetch activity on CADViewer canvas when mouse has been clicked */
  public cadviewerMouseUp(event :any){

    // NOTE, we only want mouse-clicks inside the CADViewer CANVAS!!!!
    /// DEVELOPER, CODE YOUR OWN STUFF HERE!!!!!!!!!!!!!!!    - this is a basic height check only!
    if (event.y <180) return;

    // we only want to capture mouse events on the CADViewer canvas. 

    console.log(selectionType);

    // Handle action from various cases.
    if (selectionType.indexOf('MultiSelectClick') ==0){
      // do nothing - keep selecting
      // we move into this event handler, to give application programmers the choice to control what is happening
      // and change the highlight settings accordingly
      click_rmid = cadviewer.cvjs_returnSpaceObjectSelected();
      console.log("MultiSelect mouse up : "+click_rmid);
      console.log("Is room already in selectionList : "+isObjectAlredySelected);

      // use click_rmid against DATABASE!

      try{

          if (isObjectAlredySelected){
              // this object is now deselected from the array and the space has been cleared
              // in any case we do not need to highligt it
              console.log("we update database that a deselection has taken place..");

          }
          else{
              // if we have selected a space, let us handle this here, we can choose between various stylinbgs

              my_test_counter++;
              if (my_test_counter>8) 
              my_test_counter = 1;
      
                if (my_test_counter==1)
                  cadviewer.cvjs_highlightSpace(click_rmid, highlight_green_borders); 
                if (my_test_counter==2)
                  cadviewer.cvjs_highlightSpace(click_rmid, highlight_blue_borders); 
                if (my_test_counter==3)
                  cadviewer.cvjs_highlightSpace(click_rmid, highlight_yellow); 
                if (my_test_counter==4)
                  cadviewer.cvjs_highlightSpace(click_rmid, highlight_purple_borders); 

                if (my_test_counter==5)
                  cadviewer.cvjs_hatchSpace(click_rmid, "pattern_45degree_crosshatch_fine", "#550055" , 0.5);
                if (my_test_counter==6)
                  cadviewer.cvjs_hatchSpace(click_rmid, "pattern_45degree_standard", "#AA2200" , 0.5);
                if (my_test_counter==7)
                  cadviewer.cvjs_hatchSpace(click_rmid, "pattern_135degree_wide", "#0055BB" , 0.5);
                if (my_test_counter==8)
                cadviewer.cvjs_hatchSpace(click_rmid, "pattern_90degree_wide", "#220088" , 0.5);
        
        }     
      
      }
      catch(err){
        console.log("this will fire if a do-not-select-space "+err);
      }

      // here we list the current selection array if multiselect
      // console.log("Current Space Selected: "+cadviewer.cvjs_returnSpaceObjectSelected() +" (none if -1)    MultiSelectArray: "+this.return_MySpaceArray());

    }

      console.log("After: selectiontype: "+selectionType);

      if (selectionType.indexOf("MultiSelectDrag") ==0){

        selectionType = "none";
        // we update the selection array
        this.myMultiSelect = return_myReturnArray();
        for (var spc in this.myMultiSelect){
          cadviewer.cvjs_highlightSpace(this.myMultiSelect[spc].SpaceID, highlight_blue_borders); 
        }

      }
    // if we are in window selection, we simply trigger a mySpaceArray refresh        
  };
  
  



  public init_CADViewer(params :any){

/*
      // If CADViewer is on a child/nested component, it will fire off the initialization multiple times, 
      // therefore we clean the component and init array on repeat call to the component 
      if (isCADViewerInitializedInAngular){
          cadviewer.cvjs_emptyMainCanvasInAngular("floorPlan");
      } 
  */    
      cadviewer.cvjs_debugMode(true);


      cadviewer.cvjs_setAllServerPaths_and_Handlers(ServerBackEndUrl, ServerUrl, ServerLocation, "NodeJS", "Angular", "floorPlan","");

              
      try{  // loading from external source
      
        FileName = params.url;
        tempArray = params.Seats;
      
        console.log('tempArray', tempArray)
      
        // param.Seats contains Array with space
        // this must be changes into the proper array structure with the attribute Objec
      
      }catch(err){
      
        //mySpaceArray = [{space: "02.288"},{space: "02.289"},{space: "02.290"}];
        
//        FileName = ServerBackEndUrl+ "/content/drawings/dwg/hq17_2spaces.dwg";	
//        FileName = ServerBackEndUrl+ "/content/drawings/dwg/BRA_Alta Vila_02_CkIn_06082020.dwg";

        FileName = ServerBackEndUrl+ "/content/drawings/dwg/hq17_.dwg";	    


      // PATH and FILE to be loaded, can be in formats DWG, DXF, DWF, SVG , JS, DGN, PCF, JPG, GIF, PNG
      //      FileName = ServerBackEndUrl+ "/content/drawings/dwg/BRA_Alta Vila_02_CkIn_06082020.dwg";
      //      FileName = ServerBackEndUrl+ "/content/drawings/dwg/hq17_2spaces.dwg";	
              
      FileName = ServerBackEndUrl+ "/content/drawings/dwg/hq17_.dwg";	  

  

      }
        


      cadviewer.cvjs_setCallbackMethod("cvjs_OnLoadEnd", cvjs_OnLoadEnd);
      cadviewer.cvjs_setCallbackMethod("cvjs_graphicalObjectOnChange", cvjs_graphicalObjectOnChange);
      cadviewer.cvjs_setCallbackMethod("cvjs_OnLoadEndRedlines", cvjs_OnLoadEndRedlines);
      cadviewer.cvjs_setCallbackMethod("cvjs_ObjectSelected", cvjs_ObjectSelected);
      cadviewer.cvjs_setCallbackMethod("cvjs_measurementCallback", cvjs_measurementCallback);
      cadviewer.cvjs_setCallbackMethod("cvjs_CalibrateMeasurementCallback", cvjs_CalibrateMeasurementCallback);
      cadviewer.cvjs_setCallbackMethod("cvjs_Url_callback", cvjs_Url_callback);
      cadviewer.cvjs_setCallbackMethod("cvjs_loadSpaceImage_UserConfiguration", cvjs_loadSpaceImage_UserConfiguration);
      cadviewer.cvjs_setCallbackMethod("cvjs_NoObjectSelected", cvjs_NoObjectSelected);
      cadviewer.cvjs_setCallbackMethod("cvjs_SVGfileObjectClicked", cvjs_SVGfileObjectClicked);
      cadviewer.cvjs_setCallbackMethod("cvjs_SVGfileObjectMouseEnter", cvjs_SVGfileObjectMouseEnter);
      cadviewer.cvjs_setCallbackMethod("cvjs_SVGfileObjectMouseLeave", cvjs_SVGfileObjectMouseLeave);
      cadviewer.cvjs_setCallbackMethod("cvjs_SVGfileObjectMouseMove", cvjs_SVGfileObjectMouseMove);
      cadviewer.cvjs_setCallbackMethod("cvjs_ParseDisplayDataMaps", cvjs_ParseDisplayDataMaps);
      cadviewer.cvjs_setCallbackMethod("cvjs_QuickCountCallback", cvjs_QuickCountCallback);
      cadviewer.cvjs_setCallbackMethod("cvjs_OnHyperlinkClick", cvjs_OnHyperlinkClick);
      cadviewer.cvjs_setCallbackMethod("cvjs_setUpStickyNotesRedlines", cvjs_setUpStickyNotesRedlines);
      cadviewer.cvjs_setCallbackMethod("custom_host_parser_PopUpMenu", custom_host_parser_PopUpMenu);
      cadviewer.cvjs_setCallbackMethod("cvjs_customHostParser", cvjs_customHostParser);
      cadviewer.cvjs_setCallbackMethod("drawPathsGeneric", drawPathsGeneric );
      cadviewer.cvjs_setCallbackMethod("cvjs_callbackForModalDisplay", cvjs_callbackForModalDisplay);
      cadviewer.cvjs_setCallbackMethod("cvjs_populateMyCustomPopUpBody", cvjs_populateMyCustomPopUpBody);
      cadviewer.cvjs_setCallbackMethod("cvjs_customModalPopUpBody", cvjs_customModalPopUpBody);
      cadviewer.cvjs_setCallbackMethod("cvjs_NoObjectSelectedStickyNotes", cvjs_NoObjectSelectedStickyNotes);
      cadviewer.cvjs_setCallbackMethod("cvjs_NoObjectSelectedHyperlinks", cvjs_NoObjectSelectedHyperlinks);
      cadviewer.cvjs_setCallbackMethod("cvjs_ObjectSelectedHyperlink", cvjs_ObjectSelectedHyperlink);
      cadviewer.cvjs_setCallbackMethod("cvjs_ObjectSelectedStickyNotes", cvjs_ObjectSelectedStickyNotes);
      cadviewer.cvjs_setCallbackMethod("cvjs_saveStickyNotesRedlinesUser", cvjs_saveStickyNotesRedlinesUser);
      cadviewer.cvjs_setCallbackMethod("cvjs_loadStickyNotesRedlinesUser", cvjs_loadStickyNotesRedlinesUser);
      cadviewer.cvjs_setCallbackMethod("my_own_clickmenu1", my_own_clickmenu1);
      cadviewer.cvjs_setCallbackMethod("my_own_clickmenu2", my_own_clickmenu2);
      cadviewer.cvjs_setCallbackMethod("cvjs_popupTitleClick", cvjs_popupTitleClick);
      cadviewer.cvjs_setCallbackMethod("cvjs_mousedown", cvjs_mousedown);
      cadviewer.cvjs_setCallbackMethod("cvjs_click", cvjs_click);
      cadviewer.cvjs_setCallbackMethod("cvjs_dblclick", cvjs_dblclick);
      cadviewer.cvjs_setCallbackMethod("cvjs_mouseout", cvjs_mouseout);
      cadviewer.cvjs_setCallbackMethod("cvjs_mouseover", cvjs_mouseover);
      cadviewer.cvjs_setCallbackMethod("cvjs_mouseleave", cvjs_mouseleave);
      cadviewer.cvjs_setCallbackMethod("cvjs_mouseenter", cvjs_mouseenter);
      cadviewer.cvjs_setCallbackMethod("cvjs_graphicalObjectCreated", cvjs_graphicalObjectCreated);


        // Location of installation folders
        // NOTE: THE LOCATION OF THE ServerLocation/ServerUrl VARIABLES ARE DEFINED IN /cadviewer/app/cv/XXXHandlerSettings.js	
        //	var ServerLocation = 
        //	var ServerUrl =    
     
       cadviewer.cvjs_CADViewerPro(true);
       
       // Pass over the location of the installation, will update the internal paths
       cadviewer.cvjs_setServerLocationURL(ServerLocation, ServerUrl);
       cadviewer.cvjs_PrintToPDFWindowRelativeSize(0.8);
       cadviewer.cvjs_setFileModalEditMode(false);
       cadviewer.cvjs_setCADViewerInterfaceVersion(8);


      //cadviewer.cvjs_setCADViewerSkin("lightgray"); // lightgray, black, deepblue  // method can be omitted, alternative is "deepblue" , "nextcloud"
      cadviewer.cvjs_setCADViewerSkin("black"); // lightgray, black, deepblue  // method can be omitted, alternative is "deepblue" , "nextcloud"
      //		cadviewer.cvjs_setCADViewerSkin("deepblue"); // lightgray, black, deepblue  // method can be omitted, alternative is "deepblue" , "nextcloud"


        
        // For "Merge DWG" / "Merge PDF" commands, set up the email server to send merged DWG files or merged PDF files with redlines/interactive highlight.
        // See php / xampp documentation on how to prepare your server
        cadviewer.cvjs_emailSettings_PDF_publish("From CAD Server", "my_from_address@mydomain.com", "my_cc_address@mydomain.com", "my_reply_to@mydomain.com");
               
        // CHANGE LANGUAGE - DEFAULT IS ENGLISH
    //      cadviewer.cvjs_loadCADViewerLanguage("English", ServerUrl+"/assets/cadviewer/app/cv/cv-pro/language_table/cadviewerProLanguage.xml");
          // set to Angular mode
                        
        cadviewer.cvjs_loadCADViewerLanguage("English", ""); 
        // Available languages:  "English" ; "French, "Korean", "Spanish", "Portuguese", "Chinese-Simplified", "Chinese-Traditional"
        //cadviewer.cvjs_loadCADViewerLanguage("English", "/cadviewer/app/cv/cv-pro/custom_language_table/custom_cadviewerProLanguage.xml");
    
              
          // Set Icon Menu Interface controls. Users can: 
          // 1: Disable all icon interfaces
          //  cadviewer.cvjs_displayAllInterfaceControls(false, "floorPlan");  // disable all icons for user control of interface
    
    
          // 2: Disable either top menu icon menus or navigation menu, or both
    
        //cadviewer.cvjs_displayTopMenuIconBar(false, "floorPlan");  // disable top menu icon bar
        //cadviewer.cvjs_displayTopNavigationBar(false, "floorPlan");  // disable top navigation bar
    
    
        // 3: Users can change the number of top menu icon pages and the content of pages, based on a configuration file in folder /cadviewer/app/cv/cv-pro/menu_config/
        
        cadviewer.cvjs_setTopMenuXML("floorPlan", "cadviewer_full_commands_01.xml", "");  
		    //cadviewer.cvjs_setTopMenuXML("floorPlan", "cadviewer_viewonly_nofileload_01.xml", "/cadviewer/app/cv/cv-pro/menu_config/"); //, "/app/cv/cv-pro/menu_config/");

                  

        // Display Coordinates
        cadviewer.cvjs_DisplayCoordinatesMenu("floorPlan",true);



        // set SpaceObjectsCustomMenu location and json config file,  flag true to display SpaceObject Menu, false to hide
        cadviewer.cvjs_setSpaceObjectsCustomMenu( "/content/customInsertSpaceObjectMenu/", "cadviewercustomspacecommands.json", true);


        // Initialize CADViewer  - needs the div name on the svg element on page that contains CADViewerJS and the location of the
        // main application "app" folder. It can be either absolute or relative
            
        // SETTINGS OF THE COLORS OF SPACES
        var cvjsRoomPolygonBaseAttributes = {
                  fill: '#D3D3D3',   // #FFF   #ffd7f4
                  "fill-opacity": "0.05",   // 0.1
                  stroke: '#CCC',  
                  'stroke-width': 0.25,
                  'stroke-linejoin': 'round',
              };
          
        var cvjsRoomPolygonHighlightAttributes = {
                fill: '#a4d7f4',
                "fill-opacity": "0.5",
                stroke: '#a4d7f4',
                'stroke-width': 0.75
              };
              
        var cvjsRoomPolygonSelectAttributes = {
                fill: '#5BBEF6',
                "fill-opacity": "0.5",
                stroke: '#5BBEF6',
                'stroke-width': 0.75
              };
         
         /** FIXED POP-UP MODAL  **/
         
           // THIS IS THE DESIGN OF THE pop-up MODAL WHEN CLICKING ON SPACES
         
           var my_cvjsPopUpBody = "<div class=\'cvjs_modal_1\' onclick=\'my_own_clickmenu1();\'>Custom<br>Menu 1<br><i class=\'fa fa-undo\'></i></div>";
           my_cvjsPopUpBody += "<div class=\'cvjs_modal_1\' onclick=\'my_own_clickmenu2();\'>Custom<br>Menu 2<br><i class=\'fa fa-info-circle\'></i></div>";
           my_cvjsPopUpBody += "<div class=\'cvjs_modal_1\' onclick=\'custom_zoomHere();\'>Zoom<br>Here<br><i class=\'fa fa-search-plus\'></i></div>";
     
     
     
            
           var my_cvjsPopUpBody = "";           
          //cvjs_setNoModalMode(true);
          cadviewer.cvjs_setCallbackForModalDisplay(true, myCustomModalPopUpBody, populateMyCustomPopUpBody);


           // Initialize CADViewer - needs the div name on the svg element on page that contains CADViewerJS and the location of the
           // And we intialize with the Space Object Custom values
         //  cadviewer.cvjs_InitCADViewer_highLight_popUp_app("floorPlan", ServerUrl+"app/", cvjsRoomPolygonBaseAttributes, cvjsRoomPolygonHighlightAttributes, cvjsRoomPolygonSelectAttributes, my_cvjsPopUpBody);
           cadviewer.cvjs_InitCADViewer_highLight_popUp_app("floorPlan", "/assets/cadviewer/app/", cvjsRoomPolygonBaseAttributes, cvjsRoomPolygonHighlightAttributes, cvjsRoomPolygonSelectAttributes, my_cvjsPopUpBody );
                       
              

           // For AngularJS we need a different setting of images, loading from /assets folder	
           //cadviewer.cvjs_InitCADViewer_app("floorPlan", ServerUrl+"app/", "assets/cadviewer/app/images/");
           //cadviewer.cvjs_InitCADViewer_app("floorPlan", "assets/cadviewer/app/");
           
     
           // set the location to license key, typically the js folder in main app application folder ../app/cv/
          //  cadviewer.cvjs_setLicenseKeyPath("/assets/cadviewer/app/cv/");
           // alternatively, set the key directly, by pasting in the cvKey portion of the cvlicense.js file, note the JSON \" around all entities 	 
           cadviewer.cvjs_setLicenseKeyDirect('{ \"cvKey\": \"00110010 00110010 00110000 00110001 00110010 00110000 00110100 00110001 00110100 00111000 00110001 00110100 00110101 00110001 00110101 00110111 00110001 00110101 00111001 00110001 00110100 00111000 00110001 00110101 00110010 00110001 00110100 00110101 00110001 00110100 00110001 00110001 00110100 00110000 00110001 00111001 00110111 00110010 00110000 00110111 00110010 00110000 00110110 00110010 00110000 00110001 00110010 00110001 00110000 00110010 00110000 00111000 00110010 00110001 00110000 00110010 00110000 00111000 00110010 00110001 00110000 00110010 00110000 00110111 00110001 00111001 00111000 00110010 00110000 00110110 00110010 00110000 00111000 00110010 00110000 00110110 00110010 00110000 00110101 00110010 00110001 00110001 00110010 00110000 00111000 00110010 00110000 00110111 00110010 00110001 00110001 00110010 00110000 00110101 00110010 00110000 00110111 00110001 00111001 00111000 00110001 00110100 00110001 00110001 00110100 00110100 00110001 00110101 00111001 00110001 00110101 00110111 00110001 00110101 00110101 \" }');		 
               
           // Sets the icon interface for viewing, layerhanding, measurement, etc. only
           //cadviewer.cvjs_setIconInterfaceControls_ViewingOnly();
         
           // disable canvas interface.  For developers building their own interface
           // cadviewer.cvjs_setIconInterfaceControls_DisableIcons(true);
         
           // Set the icon interface to include image handling
           // cadviewer.cvjs_setIconInterfaceControls_ImageInsert();
         
           cadviewer.cvjs_allowFileLoadToServer(true);
         
         //		cadviewer.cvjs_setUrl_singleDoubleClick(1);
         //		cadviewer.cvjs_encapsulateUrl_callback(true);
          
           // NOTE BELOW: THESE SETTINGS ARE FOR SERVER CONTROLS FOR UPLOAD OF REDLINES
           
           cadviewer.cvjs_setRedlinesAbsolutePath(ServerBackEndUrl+'/content/redlines/v7/', ServerLocation+'/content/redlines/v7/', false);
           cadviewer.cvjs_setServerFileLocation_AbsolutePaths(ServerLocation+'/content/drawings/dwg/', ServerBackEndUrl+'content/drawings/dwg/',"","");
           cadviewer.cvjs_setSpaceObjectsAbsolutePath(ServerBackEndUrl+'/content/spaceObjects/demoUsers/', ServerLocation+'/content/spaceObjects/demoUsers/');

         
           // NOTE BELOW: THESE SETTINGS ARE FOR SERVER CONTROLS FOR CONVERTING DWG, DXF, DWF files         
           // settings of Converter Path, Controller and Converter Name are done in the XXXHandlerSettings.js files
         
           cadviewer.cvjs_conversion_clearAXconversionParameters();
           cadviewer.cvjs_conversion_addAXconversionParameter("last", "");		 
           cadviewer.cvjs_conversion_addAXconversionParameter("extents", "");		 
     
          cadviewer.cvjs_conversion_addAXconversionParameter("RL", "RM_");		 
          cadviewer.cvjs_conversion_addAXconversionParameter("TL", "RM_TXT");		 
          cadviewer.cvjs_conversion_addAXconversionParameter("LA", "");		 


          cadviewer.cvjs_conversion_addAXconversionParameter("HLALL", "");		 


          // NOTE ABOVE: THESE SETTINGS ARE FOR SERVER CONTROLS FOR CONVERTING DWG, DXF, DWF files
    
           // Load file - needs the svg div name and name and path of file to load
           cadviewer.cvjs_LoadDrawing("floorPlan", FileName );
          
           // set maximum CADViewer canvas side
             cadviewer.cvjs_resizeWindow_position("floorPlan" );
           // alternatively set a fixed CADViewer canvas size
           //	cadviewer.cvjs_resizeWindow_fixedSize(800, 600, "floorPlan");		
     
           isCADViewerInitializedInAngular = true;

     }
     
  public customGetAllSpaceObjects(){

/*
 * Return a JSON structure with  all Space Object content, each entry is of the form: <br>
 * 	SpaceObjects :[  	{	"path":   path, <br>
 *								"tags": tags, <br>
 *								"node": node, <br>
 *								"area": area, <br>
 *								"outerhtml": outerHTML, <br>
 *								"occupancy": occupancy, <br>
 *								"name": name, <br>
 *								"type": type, <br>
 *								"id": id, <br>
 *								"defaultcolor": defaultcolor, <br>
 *								"layer": layer, <br>
 *								"group": group, <br>
 *								"linked": linked, <br>
 *								"attributes": attributes, <br>
 *								"attributeStatus": attributeStatus, <br>
 *								"displaySpaceObjects": displaySpaceObjects, <br>
 *								"translate_x": translate_x, <br>
 *								"translate_y": translate_y, <br>
 *								"scale_x": scale_x ,<br>
 *								"scale_y": scale_y ,<br>
 *								"rotate": rotate, <br>
 *								"transform": transform} <br> ]
 * @param {string} spaceID - Id of the Space Object to return
 * @return {Object} jsonSpaceObject - Object with all space objects content
 */

  //   get json obhect with all spaces processed from drawing
    var allSpaceObjects = cadviewer.cvjs_returnAllSpaceObjects();

//    for (var spc in allSpaceObjects.SpaceObjects){
    for (var i=0; i<allSpaceObjects.length; i++){
      this.myMultiSelect[i] = {SpaceID: allSpaceObjects.SpaceObjects[i].id, Area: allSpaceObjects.SpaceObjects[i].area}
    }

  }

  /* MultiSelect start template implementation */
  public customStartMultiSelect(){

    selectionType = "MultiSelectClick"
    cvjs_multiSelectStart(); // call CADViewer method
  };
  
  
  /* MultiSelect finish template implementation */
  public customFinishMultiSelect(){
    // 
    selectionType = "none";

    window.alert("customFinishMultiSelect");

    this.myMultiSelect = cvjs_multiSelectFinish(); // call CADViewer method
  };
   
  
public customClearSpaces(){
 
  this.myMultiSelect = [];   // clear the multiselect result field
  cadviewer.cvjs_clearSpaceLayer();  // clear the hihglighs
  mySpaceArray.length = 0;  // clear the space array with stored legacy highlights  6.4.07

  textLayer1 = cadviewer.cvjs_clearLayer(textLayer1);


};


// Return the content of mySpaceArray on mouse-click
public return_MySpaceArray() {
  return mySpaceArray;
}

 // Method to drag and fetch spaces
 public cadviewerDragSelectSpaces(){  

  selectionType = "MultiSelectDrag"
  cadviewer.cvjs_executeCustomCanvasMethod_drag(this.select_drag_rect_start, this.select_drag_rect_stop, this.select_drag_rect_move,'')

}

public select_drag_rect_start = function() {

  generic_canvas_flag_first_click_rectangle = true;
  generic_canvas_flag_rectangle = false;

  var tPath_r = "M" + 0 + "," + 0;                                      
  cvjs_RubberBand = cadviewer.cvjs_makeGraphicsObjectOnCanvas('Path', tPath_r).attr({fill: '#ff9999', "fill-opacity": "0.5", stroke: '#ff9999', 'stroke-opacity': "1"});

  console.log("generic_start_method_01");
}

public select_drag_rect_move = function(dx :number,dy :number,x :number,y :number) {

  try{
      if (generic_canvas_flag_first_click_rectangle){
          cadviewer.cvjs_customCanvasMethod_globalScale();        
          if (!generic_canvas_flag_rectangle){
            cvjs_firstX = cadviewer.cvjs_SVG_x(x);
            cvjs_firstY = cadviewer.cvjs_SVG_y(y)
            cvjs_lastX = cvjs_firstX;
            cvjs_lastY = cvjs_firstY;
            generic_canvas_flag_rectangle = true;
          }
          else{
              // we cannot have the mouse directly on top of the rubberband path, then it will not respond
              var mousedelta = 1;
              cvjs_lastX = cadviewer.cvjs_SVG_x(x-mousedelta);
              cvjs_lastY = cadviewer.cvjs_SVG_y(y-mousedelta);
          }	
          
          var tPath_r = "M" + cvjs_firstX + "," + cvjs_firstY;		
          tPath_r += "L" + cvjs_firstX + "," + cvjs_lastY;
          tPath_r += "L" + cvjs_lastX + "," + cvjs_lastY;
          tPath_r += "L" + cvjs_lastX + "," + cvjs_firstY;
          tPath_r += "L" + cvjs_firstX + "," + cvjs_firstY+" Z"; 

          cvjs_RubberBand.attr({'path': tPath_r});
      }
  }
  catch(err){
      console.log(err);
  } 

}


public select_drag_rect_stop = function() {

  cvjs_RubberBand.attr({'path': "M0,0"});
  var mybox;
  var overlap;
  var selected_list = "";

  // reorder x,  if not dragged left to right, top to buttom
  var temp;
  if (cvjs_firstX>cvjs_lastX){
      temp = cvjs_firstX;
      cvjs_firstX = cvjs_lastX;
      cvjs_lastX = temp;
  }
  // reorder y,  if not dragged left to right, top to buttom
  if (cvjs_firstY>cvjs_lastY){
      temp = cvjs_firstY;
      cvjs_firstY = cvjs_lastY;
      cvjs_lastY = temp;
  }

  // get all spaces
  var spaceObjectIds : any = cadviewer.cvjs_getSpaceObjectIdList();

  // make counter for return array
  myReturnArray.length = 0;

  // loop over all spaces
  for (var spc=0; spc<spaceObjectIds.length; spc++){
      // get the bounding box of the space      
      mybox = cadviewer.cvjs_getSpaceObjectBoundingBox(spaceObjectIds[spc]);
      // check if it operlaps with the drag rectangle
      if (mybox == null) continue;

      overlap= cadviewer.cvjs_rect_doOverlap( cvjs_firstX, cvjs_firstY, cvjs_lastX, cvjs_lastY, mybox.x, mybox.y, mybox.x+mybox.width, mybox.y+mybox.height);
      if (overlap) {
        var fullJsonObject = cadviewer.cvjs_returnSpaceObjectID(spaceObjectIds[spc]);

        // check if the object is part of DONOTTOUCH array
        var donottouchflag = false;
        for (var i = 0; i < mySpaceArray_doNotTouch.length; i++){
          if ( mySpaceArray_doNotTouch[i] == fullJsonObject.id ){
            donottouchflag = true;
            i = mySpaceArray_doNotTouch.length;  // we finish the loop
          }
        }
        if (!donottouchflag)
          myReturnArray.push({SpaceID: fullJsonObject.id, Area: fullJsonObject.area} )

//        selected_list+= spaceObjectIds[spc]+";";
      }
  }

//  if (selected_list == "") selected_list = "None";
//  window.alert("Selected Objects: "+selected_list);

  selectionType = "none";
  
  cadviewer.cvjs_removeCustomCanvasMethod();
  console.log("REMOVE: generic_drag_rect_stop");
};
// END - SAMPLE TO DRAG RECTANGLE if overlapping space objects 




// custom Methods from cadviewer.component.ts

public customClearTooltips(){
 
  cadviewer.cvjs_clearAllCustomTooltips()

};


public customColorSpaces(){

// This is the function that illustrates how to color and label stuff

  hatchtype++;
  if (hatchtype > 5) hatchtype=1;
  
  var spaceObjectIds = cadviewer.cvjs_getSpaceObjectIdList();
  
  for (var spc in spaceObjectIds)
  {
  if (hatchtype == 1) cadviewer.cvjs_highlightSpace(spaceObjectIds[spc], highlight_purple);
  if (hatchtype == 2) cadviewer.cvjs_highlightSpace(spaceObjectIds[spc], highlight_blue); 
  if (hatchtype == 3) cadviewer.cvjs_highlightSpace(spaceObjectIds[spc], highlight_red); 
  if (hatchtype == 4) cadviewer.cvjs_highlightSpace(spaceObjectIds[spc], highlight_green); 
  if (hatchtype == 5) cadviewer.cvjs_highlightSpace(spaceObjectIds[spc], highlight_yellow); 	
  }
    
};

public customHatchSpaces(){
    // I am making an API call to the function cadviewer.cvjs_getSpaceObjectIdList()
    // this will give me an array with IDs of all Spaces in the drawing
    var spaceObjectIds = cadviewer.cvjs_getSpaceObjectIdList();
    
    hatchtype++;
    if (hatchtype >4) hatchtype=1;
    
    for (var spc in spaceObjectIds)
    {
    if (hatchtype == 1) cadviewer.cvjs_hatchSpace(spaceObjectIds[spc], "pattern_45degree_crosshatch_fine", "#550055" , 0.5);
    if (hatchtype == 2) cadviewer.cvjs_hatchSpace(spaceObjectIds[spc], "pattern_45degree_standard", "#AA2200" , 0.5);
    if (hatchtype == 3) cadviewer.cvjs_hatchSpace(spaceObjectIds[spc],  "pattern_135degree_wide", "#0055BB" , 0.5);
    if (hatchtype == 4) cadviewer.cvjs_hatchSpace(spaceObjectIds[spc],  "pattern_90degree_wide", "#220088" , 0.5);
      
    }
    
};

public customSpaceBorders(){

// This is the public that illustrates how to color and label stuff
  hatchtype++;
  if (hatchtype > 6) hatchtype=1;
  
  var spaceObjectIds = cadviewer.cvjs_getSpaceObjectIdList();
  
  for (var spc in spaceObjectIds)
  {
  if (hatchtype == 1) cadviewer.cvjs_highlightSpace(spaceObjectIds[spc], highlight_purple_borders);
  if (hatchtype == 2) cadviewer.cvjs_highlightSpace(spaceObjectIds[spc], highlight_blue_borders); 
  if (hatchtype == 3) cadviewer.cvjs_highlightSpace(spaceObjectIds[spc], highlight_red_borders); 
  if (hatchtype == 4) cadviewer.cvjs_highlightSpace(spaceObjectIds[spc], highlight_green_borders); 
  if (hatchtype == 5) cadviewer.cvjs_highlightSpace(spaceObjectIds[spc], highlight_yellow_borders); 	
  if (hatchtype == 6) cadviewer.cvjs_highlightSpace(spaceObjectIds[spc], highlight_bordeau_red_borders); 	
  }
  
  
};

public customTooltips(){

// This is the public that illustrates how set a custom mouse-over label
  // I am setting the mode to custom tool tips
  cadviewer.cvjs_setCustomToolTip(true);
  // I am making an API call to the public cadviewer.cvjs_getSpaceObjectIdList()
  // this will give me an array with IDs of all Spaces in the drawing
  var spaceObjectIds = cadviewer.cvjs_getSpaceObjectIdList();
  var i=0;
  
  for (var spc in spaceObjectIds)
  {
  
  // We randomly set the status
  
  var myObject = cadviewer.cvjs_returnSpaceObjectID(spaceObjectIds[spc]);
  
  if ((i % 3) ==0){
    var textString = new Array("ID: "+spaceObjectIds[spc]+" Type:"+myObject.type, "Linked:"+myObject.linked);
    cadviewer.cvjs_setCustomToolTipValue(spaceObjectIds[spc], textString);
  }
  else{
    if ((i % 3) == 1){
      var textString = new Array('Hi!', 'second line custom tooltip');
      cadviewer.cvjs_setCustomToolTipValue(spaceObjectIds[spc], textString);
    }
    else{
      var textString = new Array("line 1 line 1 line 1 line 1  ", "line 2 line 2 line 2 line 2", "line 3 line 3 line 3 line 3","line4 line4 line 4 line 4");
      cadviewer.cvjs_setCustomToolTipValue(spaceObjectIds[spc], textString);
    }
  }
  i++;
  }
  
};


public customColorLayer(){

  var layer= ((document.getElementById("layerName") as HTMLInputElement).value);
  var hex_color= ((document.getElementById("layerColor") as HTMLInputElement).value);
  cadviewer.cvjs_setLayerColor(layer, hex_color);

}



public customLoadDrawing(){

//  window.alert("hello!"+ myInputString);
  var drawing = ((document.getElementById("drawingName") as HTMLInputElement).value);
  var isformat = (drawing.toLowerCase().indexOf(".dwg")>0 || drawing.toLowerCase().indexOf(".dxf")>0 || drawing.toLowerCase().indexOf(".dwf")>0 || drawing.toLowerCase().indexOf(".pdf")>0);
  window.alert("Drawing format correct: "+isformat + " cadviewer.cvjs_LoadDrawing: "+  cadviewer.cvjs_getServerBackEndUrl() +"/content/drawings/dwg/"+drawing);
  if (drawing!='' &&   isformat)
     cadviewer.cvjs_LoadDrawing("floorPlan",  cadviewer.cvjs_getServerBackEndUrl() +"/content/drawings/dwg/"+drawing);
}


public customHighlightSingleID(){

  var singleid = ((document.getElementById("singleID") as HTMLInputElement).value);
  window.alert("singleid zoom and highlight:"+singleid);
  this.highlight_space_object(singleid, 30);

}

public highlight_space_object(myspace :string, scale : number){

  cadviewer.cvjs_zoomHere_ObjectIdDiv( myspace, scale, "floorPlan");
  cadviewer.cvjs_highlightSpace(myspace, highlight_green);

}



///**
// * Add multiple of text, individually formatted and styled, inside a Space Object
// * @param {string} txtLayer - layer to apply the text
// * @param {string} Id - Id of the graphical object in which to place the text
// * @param {float} leftScale - distance from the left border of Space Object, value between 0 and 1
// * @param {array} textStringArr - Array with the lines of text
// * @param {array} textStyleArr - Array with textstyle of text lines, formattet as a java script object with css style elements, predefined is: text_style_arial_11pt_bold , text_style_arial_9pt_normal, text_style_dialog
// * @param {array} scaleTextArr - Array with relative scale of text lines, value between 0 and 1
// * @param {array} hexColorTextArr - Array of color of text lines in hex form, for example: #AA00AA
// * @param {boolean} clipping - true if clipping of text inside of Space Object, false if text to cross Space Object borders
// * @param {boolean} centering - true if centering of text inside of Space Object, false is default
// */
//
// function cvjs_AddTextOnSpaceObject(txtLayer, Id, leftScale, textStringArr, textStyleArr, scaleTextArr, hexColorTextArr, clipping, centering){




public printModal(){

  cadviewer.cvjs_Print("floorPlan");

}


// Toggle sensor objects

public browstateflag = 0;

public togglesensorstates(){


    this.browstateflag++;

    if  (this.browstateflag == 5) this.browstateflag =1;

    if (this.browstateflag == 1)
        cadviewer.cvjs_showOnlyObjectInAllSpaceObjectGroups("online");  // all

    if (this.browstateflag == 2)
    cadviewer.cvjs_showOnlyObjectInAllSpaceObjectGroups("offline"); // all

    if (this.browstateflag == 3)
    cadviewer.cvjs_showOnlyObjectInAllSpaceObjectGroups("unknow");    // 

    if (this.browstateflag == 4){

        var spaceObjectIds = cadviewer.cvjs_getSpaceObjectIdList();
        var i=0;
        for (var spc in spaceObjectIds) {
            var id = spaceObjectIds[spc];
            if (i % 3 == 0)
            cadviewer.cvjs_showOnlyObjectInSpaceObjectGroup(id, "online", "id");    // loop over and give them different state
            if (i % 3 == 1)
            cadviewer.cvjs_showOnlyObjectInSpaceObjectGroup(id, "offline", "id");
            if (i % 3 == 2)
            cadviewer.cvjs_showOnlyObjectInSpaceObjectGroup(id, "unknow", "id");
            i++;
        }
    }

}



// This is the function that set redlines and notes captured in graphicalObjectOnChange

public getJSONredlinesandnotes(){

  cadviewer.cvjs_setAllRedlineStickyNoteObjects(myredlinestickynoteObjects);

}


// This is the function that illustrates how to label text inside room polygons

public customAddTextToSpaces(){

  // I am making an API call to the function cvjs_getSpaceObjectIdList()
  // this will give me an array with IDs of all Spaces in the drawing
  var spaceObjectIds = cadviewer.cvjs_getSpaceObjectIdList();
  var i=0;

  
  var textString ;
  var textStyles ;
  var scaleText ; 
  var hexColorText; 



  for (var spc in spaceObjectIds)
  {
      //console.log(spaceObjectIds[spc]+" "+i);
  
      if ((i % 3) ==0){
          textString = new Array("Custom \u2728", "settings \u2728", "\u2764\u2728\u267B");
          textStyles = new Array(text_style_arial_9pt_normal, text_style_arial_11pt_bold, text_style_dialog);
          scaleText = new Array(0.15, 0.2, 0.15 );
          hexColorText = new Array("#AB5500", "#66D200", "#0088DF");
  
          // here we clip the roomlables so they are inside the room polygon
          cadviewer.cvjs_AddTextOnSpaceObject(textLayer1, spaceObjectIds[spc],  0.05, textString, textStyles, scaleText, hexColorText, true, false);
  
      }
      else{
          if ((i % 3) == 1){
  
              textString = new Array('Unicode:\uf083\uf185\u2728', 'of custom text');
              textStyles = new Array(FontAwesome_9pt_normal, text_style_dialog);
              scaleText = new Array(0.15, 0.15 );
              hexColorText = new Array("#00D2AA", "#AB0055");
  
              // here we clip the roomlables so they are inside the room polygon            
              cadviewer.cvjs_AddTextOnSpaceObject(textLayer1, spaceObjectIds[spc],  0.1, textString, textStyles, scaleText, hexColorText, true, false);
  
          }
          else{
  
              textString = new Array("\uf028");
              textStyles = new Array(FontAwesome_9pt_normal);
              scaleText = new Array( "0.5" );
              hexColorText = new Array("#AAAAAA");
              //var hexColorText = new Array("#00AADF");
  
              // here we clip the roomlables so they are inside the room polygon, we center object
              cadviewer.cvjs_AddTextOnSpaceObject(textLayer1, spaceObjectIds[spc],  0, textString, textStyles, scaleText, hexColorText, true, true);
          }
      
      }
      i++;
  }

}




}



