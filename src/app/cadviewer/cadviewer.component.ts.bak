import { Component, OnInit, ɵgetComponentViewDefinitionFactory } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";

import * as cadviewer from "cadviewer";


// ALL CALLBACK METHODS FROM CADVIEWER MUST BE DECLARED AS EXPORT METHODS
function cvjs_OnLoadEnd(){
  // generic callback method, called when the drawing is loaded
  // here you fill in your stuff, call DB, set up arrays, etc..
  // this method MUST be retained as a dummy method! - if not implemeted -
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

   cadviewer.cvjs_LayerOff("EC1 Space Names");
   cadviewer.cvjs_LayerOff("EC1 Space Status Descs");
   cadviewer.cvjs_LayerOff("EC1 Space Project");
   cadviewer.cvjs_LayerOff("EC1 Space Function Descs");
   cadviewer.cvjs_LayerOff("EC1 Space Type Descs");
   cadviewer.cvjs_LayerOff("EC1 Tenant Names");
   cadviewer.cvjs_LayerOff("EC1 UDA Design Capacity");
   cadviewer.cvjs_LayerOff("EC1 UDA Is Secured");
   cadviewer.cvjs_LayerOff("EC1 Space Square Footages");
   cadviewer.cvjs_LayerOff("ACC BH AltaVila -2PAV$0$MBN");	

   cadviewer.cvjs_LayerOff("ACC BH AltaVila -2PAV$0$MBN");	


   cadviewer.cvjs_setLayerColor("EC1 Space Numbers", "#FF4500");  // orange red


   /*
    cvjs_multiSelectStart();
    console.log("multi select start");
*/
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
function cvjs_mouseenter(id, handle, entity){};
function cvjs_mousedown(id, handle, entity){};
function cvjs_click(id, handle, entity){};
function cvjs_dblclick(id, handle, entity){};
function cvjs_measurementCallback(){};
function cvjs_CalibrateMeasurementCallback(){};
function cvjs_graphicalObjectOnChange(type, graphicalObject, spaceID){};
function cvjs_Url_callback(){};
function cvjs_loadSpaceImage_UserConfiguration(floorplan_div){};
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
function cvjs_popupTitleClick(roomid){};
function cvjs_mouseout(id, handle, entity){};
function cvjs_mouseleave(id, handle, entity){};
function cvjs_mouseover(id, handle, entity){};

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

function cvjs_graphicalObjectCreated(graphicalObject){

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
//cvjs_saveStickyNotesRedlines("floorPlan");
}


// This method is linked to the load redline icon in the imagemap
function cvjs_loadStickyNotesRedlinesUser(){


cadviewer.cvjs_openRedlineLoadModal("floorPlan");

// first the drawing needs to be cleared of stickynotes and redlines
//cvjs_deleteAllStickyNotes();
//cvjs_deleteAllRedlines();

// custom method startMethodRed to set the name and location of redline to load
// see implementation below
// startMethodRed();

// API call to load stickynotes and redlines
//cvjs_loadStickyNotesRedlines("floorPlan");
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


function cvjs_ObjectSelected(rmid, floorplan_div){

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


var isObjectAlredySelected = false;   // global variable to control selections

var textLayer1;

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
  
  





// SAMPLE TO DRAG RECTANGLE if overlapping space objects 

var cvjs_delta_x;
var cvjs_delta_y;
var cvjs_global_scale;
var cvjs_handleGroup;
var cvjs_RubberBand;
var cvjs_firstX;
var cvjs_firstY;
var cvjs_lastX;
var cvjs_lastY;
var generic_canvas_flag_first_click_rectangle = false;
var generic_canvas_flag_rectangle= false;

var click_rmid;

// Define interfaces for objects used to communicate between Angular and CADViewer JavaScript API
export interface MultiSelectCallbackArray{
//  id:number;
  SpaceID:string;
  Area:string;
};

var isCADViewerInitializedInAngular = false;
var floorplans_divs_Initialized; 

var tempArray;
var FileName;
var hatchtype = 0;


// connecting to Servlets Server
var ServerBackEndUrl = "http://localhost:8080/cadviewer/";
var ServerLocation = "";


// connecting to PHP Server
var ServerBackEndUrl = "http://localhost/cadviewer/";
var ServerLocation = "";

// Connecting to .NET Server
var ServerBackEndUrl = "http://localhost:53737/";
var ServerLocation = "";


// Standard NodeJS Server
var ServerUrl = "http://localhost:4200/";
var ServerBackEndUrl = "http://localhost:3000/";
var ServerLocation = "";



var multiSelect = false;    // flag to control multiselect

/*   Multiple Select Methods   */

var mySpaceArray = [];      // custom/user array to keep selected or highlight objects, note this is an array of Objects
var mySpaceArray_doNotTouch = ["120","122"];   // custom array to control spaces that shall not be selectable
var myReturnArray = [];

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
  styleUrls: ['./cadviewer.component.scss']
})

export class CadviewerComponent implements OnInit {
  
resizeObservable$: Observable<Event>;
resizeSubscription$: Subscription;
mouseupObservable$: Observable<Event>;
mouseupSubscription$: Subscription;


  constructor() { 

  }

  ngOnInit(){

    this.mouseupObservable$ = fromEvent(window, 'mouseup');
    this.mouseupSubscription$ = this.mouseupObservable$.subscribe(evt => {
        this.cadviewerMouseUp(evt);
    });
                
                   
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
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
    
    var params;  // these are from external application

    this.init_CADViewer(params);
  }
 

  ngOnDestroy() {
      this.resizeSubscription$.unsubscribe();
      this.mouseupSubscription$.unsubscribe();
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
  public cadviewerMouseUp(event){

    // NOTE, we only want mouse-clicks inside the CADViewer CANVAS!!!!
    /// DEVELOPER, CODE YOUR OWN STUFF HERE!!!!!!!!!!!!!!!    - this is a basic height check only!
    if (event.y <180) return;

    // we only want to capture mouse events on the CADViewer canvas. 

    console.log(this.selectionType);

    // Handle action from various cases.
    if (this.selectionType.indexOf('MultiSelectClick') ==0){
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
                  cadviewer.cvjs_hatchSpace(click_rmid, "pattern_45degree_crosshatch_fine", "#550055" , "0.5");
                if (my_test_counter==6)
                  cadviewer.cvjs_hatchSpace(click_rmid, "pattern_45degree_standard", "#AA2200" , "0.5");
                if (my_test_counter==7)
                  cadviewer.cvjs_hatchSpace(click_rmid, "pattern_135degree_wide", "#0055BB" , "0.5");
                if (my_test_counter==8)
                cadviewer.cvjs_hatchSpace(click_rmid, "pattern_90degree_wide", "#220088" , "0.5");
        
        }     
      
      }
      catch(err){
        console.log("this will fire if a do-not-select-space "+err);
      }

      // here we list the current selection array if multiselect
      // console.log("Current Space Selected: "+cadviewer.cvjs_returnSpaceObjectSelected() +" (none if -1)    MultiSelectArray: "+this.return_MySpaceArray());

    }

      console.log("After: selectiontype: "+this.selectionType);

      if (this.selectionType.indexOf("MultiSelectDrag") ==0){

        this.selectionType = "none";
        // we update the selection array
        this.myMultiSelect = return_myReturnArray();
        for (var spc in this.myMultiSelect){
          cadviewer.cvjs_highlightSpace(this.myMultiSelect[spc].SpaceID, highlight_blue_borders); 
        }

      }
    // if we are in window selection, we simply trigger a mySpaceArray refresh        
  };
  
  
  public init_CADViewer(params){

      // If CADViewer is on a child/nested component, it will fire off the initialization multiple times, 
      // therefore we clean the component and init array on repeat call to the component 
      if (isCADViewerInitializedInAngular){
          cadviewer.cvjs_emptyMainCanvasInAngular("floorPlan");
      } 
      
      cadviewer.cvjs_debugMode(true);

      cadviewer.cvjs_setServerLocationURL(ServerLocation, ServerUrl);
      cadviewer.cvjs_setServerBackEndUrl(ServerBackEndUrl);      
  
      //cadviewer.cvjs_setHandlerSettings('Angular', "floorPlan");   // standard angular + nodejs


      // USER Controlled - 
      cadviewer.cvjs_setHandlers_FrontEnd('NodeJS', 'Angular','floorPlan');   // user controlled back-end
      //cadviewer.cvjs_setHandlers_FrontEnd('PHP', 'Angular','floorPlan');
      //cadviewer.cvjs_setHandlers_FrontEnd('dotNET', 'Angular','floorPlan');
      //cadviewer.cvjs_setHandlers_FrontEnd('Servlets', 'Angular','floorPlan');


      // PATH and FILE to be loaded, can be in formats DWG, DXF, DWF, SVG , JS, DGN, PCF, JPG, GIF, PNG
//      FileName = ServerBackEndUrl+ "/content/drawings/dwg/BRA_Alta Vila_02_CkIn_06082020.dwg";
//      FileName = ServerBackEndUrl+ "/content/drawings/dwg/hq17_2spaces.dwg";	
        
        FileName = ServerBackEndUrl+ "/content/drawings/dwg/hq17_.dwg";	    

      try{
      
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
        
        // For "Merge DWG" / "Merge PDF" commands, set up the email server to send merged DWG files or merged PDF files with redlines/interactive highlight.
        // See php / xampp documentation on how to prepare your server
        cadviewer.cvjs_emailSettings_PDF_publish("From CAD Server", "my_from_address@mydomain.com", "my_cc_address@mydomain.com", "my_reply_to@mydomain.com");
               
        // CHANGE LANGUAGE - DEFAULT IS ENGLISH
    //      cadviewer.cvjs_loadCADViewerLanguage("English", ServerUrl+"/assets/cadviewer/app/cv/cv-pro/language_table/cadviewerProLanguage.xml");
          // set to Angular mode
                    
        cadviewer.cvjs_loadCADViewerLanguage("English");  // cadviewer.cvjs_loadCADViewerLanguage("English", "/assets/cadviewer/app/cv/cv-pro/language_table/cadviewerProLanguage.xml");
    
          // Available languages:  "English" ; "French, "Korean", "Spanish", "Portuguese", "Chinese-Simplified", "Chinese-Traditional"
              
          // Set Icon Menu Interface controls. Users can: 
          // 1: Disable all icon interfaces
          //  cadviewer.cvjs_displayAllInterfaceControls(false, "floorPlan");  // disable all icons for user control of interface
    
    
          // 2: Disable either top menu icon menus or navigation menu, or both
    
        //cadviewer.cvjs_displayTopMenuIconBar(false, "floorPlan");  // disable top menu icon bar
        //cadviewer.cvjs_displayTopNavigationBar(false, "floorPlan");  // disable top navigation bar
    
    
        // 3: Users can change the number of top menu icon pages and the content of pages, based on a configuration file in folder /cadviewer/app/js/menu_config/
        
        cadviewer.cvjs_setTopMenuXML("floorPlan", "cadviewer_full_commands_01.xml");  // cadviewer.cvjs_setTopMenuXML("floorPlan", "cadviewer_full_commands_01.xml", "/assets/cadviewer/app/cv/cv-pro/menu_config/");
     
             
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
           cadviewer.cvjs_setLicenseKeyDirect('{ \"cvKey\": \"00110010 00110010 00110000 00110010 00110010 00110000 00110010 00110001 00110100 00111000 00110001 00110100 00110101 00110001 00110101 00110111 00110001 00110101 00111001 00110001 00110100 00111000 00110001 00110101 00110010 00110001 00110100 00110101 00110001 00110100 00110001 00110001 00110100 00110000 00110001 00111001 00111000 00110010 00110000 00110110 00110010 00110000 00111000 00110010 00110000 00110110 00110010 00110000 00110111 00110010 00110001 00110001 00110010 00110000 00111000 00110010 00110000 00110011 00110010 00110001 00110001 00110010 00110000 00110101 00110010 00110000 00111000 \" }');		            
               
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
           
           cadviewer.cvjs_setRedlinesAbsolutePath(ServerUrl+'/content/redlines/fileloader_610/', ServerLocation+'/content/redlines/fileloader_610/');
         
           // NOTE ABOVE: THESE SETTINGS ARE FOR SERVER CONTROLS FOR UPLOAD OF REDLINES
         
           // NOTE BELOW: THESE SETTINGS ARE FOR SERVER CONTROLS FOR UPLOAD OF FILES AND FILE MANAGER
         
           // I am setting the full path to the location of the floorplan drawings (typically  /home/myserver/drawings/floorplans/)
           // and the relative location of floorplans drawings relative to my current location
           // as well as the URL to the location of floorplan drawings with username and password if it is protected "" "" if not
         
           // cadviewer.cvjs_setServerFileLocation(ServerLocation+'/content/drawings/dwg/', '../content/drawings/dwg/', ServerUrl+'/content/drawings/dwg/',"","");
           cadviewer.cvjs_setServerFileLocation_AbsolutePaths(ServerLocation+'/content/drawings/dwg/', ServerUrl+'content/drawings/dwg/',"","");
           // NOTE ABOVE: THESE SETTINGS ARE FOR SERVER CONTROLS FOR UPLOAD OF FILES AND FILE MANAGER
           
        
           // NOTE BELOW: THESE SETTINGS ARE FOR SERVER CONTROLS OF SPACE OBJECTS
           // Set the path to folder location of Space Objects
           cadviewer.cvjs_setSpaceObjectsAbsolutePath(ServerUrl+'/content/spaceObjects/demoUsers/', ServerLocation+'/content/spaceObjects/demoUsers/');
           // NOTE ABOVE: THESE SETTINGS ARE FOR SERVER CONTROLS OF SPACE OBJECTS
         
           // NOTE BELOW: THESE SETTINGS ARE FOR SERVER CONTROLS FOR CONVERTING DWG, DXF, DWF files
         
           // settings of Converter Path, Controller and Converter Name are done in the XXXHandlerSettings.js files
         
           cadviewer.cvjs_conversion_clearAXconversionParameters();
           cadviewer.cvjs_conversion_addAXconversionParameter("last", "");		 
     
          cadviewer.cvjs_conversion_addAXconversionParameter("RL", "RM_");		 
           cadviewer.cvjs_conversion_addAXconversionParameter("TL", "RM_TXT");		 
     
          cadviewer.cvjs_conversion_addAXconversionParameter("LA", "");		 
//
//          cadviewer.cvjs_conversion_addAXconversionParameter("RL", "EC1 Space Polygons");		 
//          cadviewer.cvjs_conversion_addAXconversionParameter("TL", "EC1 Space Numbers");		 
      
     //      cadviewer.cvjs_conversion_addAXconversionParameter("last", "");		 
           cadviewer.cvjs_conversion_addAXconversionParameter("fpath", ServerLocation + "/converters/ax2020/windows/fonts/");		 
         
         
           // cadviewer.cvjs_conversion_addAXconversionParameter ("RL", "IDB");
           // cadviewer.cvjs_conversion_addAXconversionParameter ("TL", "IDB_REF");	
    
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

    for (var spc in allSpaceObjects.SpaceObjects){
      this.myMultiSelect[spc] = {SpaceID: allSpaceObjects.SpaceObjects[spc].id, Area: allSpaceObjects.SpaceObjects[spc].area}
    }

  }

  /* MultiSelect start template implementation */
  public customStartMultiSelect(){

    this.selectionType = "MultiSelectClick"
    cvjs_multiSelectStart(); // call CADViewer method
  };
  
  
  /* MultiSelect finish template implementation */
  public customFinishMultiSelect(){
    // 
    this.selectionType = "none";

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

  this.selectionType = "MultiSelectDrag"
  cadviewer.cvjs_executeCustomCanvasMethod_drag(this.select_drag_rect_start, this.select_drag_rect_stop, this.select_drag_rect_move,'')

}

public select_drag_rect_start = function() {

  this.generic_canvas_flag_first_click_rectangle = true;
  this.generic_canvas_flag_rectangle = false;

  var tPath_r = "M" + 0 + "," + 0;                                      
  this.cvjs_RubberBand = cadviewer.cvjs_makeGraphicsObjectOnCanvas('Path', tPath_r).attr({fill: '#ff9999', "fill-opacity": "0.5", stroke: '#ff9999', 'stroke-opacity': "1"});

  console.log("generic_start_method_01");
}

public select_drag_rect_move = function(dx,dy,x,y) {

  try{
      if (this.generic_canvas_flag_first_click_rectangle){
          cadviewer.cvjs_customCanvasMethod_globalScale();        
          if (!this.generic_canvas_flag_rectangle){
            this.cvjs_firstX = cadviewer.cvjs_SVG_x(x);
            this.cvjs_firstY = cadviewer.cvjs_SVG_y(y)
            this.cvjs_lastX = this.cvjs_firstX;
            this.cvjs_lastY = this.cvjs_firstY;
            this.generic_canvas_flag_rectangle = true;
          }
          else{
              // we cannot have the mouse directly on top of the rubberband path, then it will not respond
              var mousedelta = 1;
              this.cvjs_lastX = cadviewer.cvjs_SVG_x(x-mousedelta);
              this.cvjs_lastY = cadviewer.cvjs_SVG_y(y-mousedelta);
          }	
          
          var tPath_r = "M" + this.cvjs_firstX + "," + this.cvjs_firstY;		
          tPath_r += "L" + this.cvjs_firstX + "," + this.cvjs_lastY;
          tPath_r += "L" + this.cvjs_lastX + "," + this.cvjs_lastY;
          tPath_r += "L" + this.cvjs_lastX + "," + this.cvjs_firstY;
          tPath_r += "L" + this.cvjs_firstX + "," + this.cvjs_firstY+" Z"; 

          this.cvjs_RubberBand.attr({'path': tPath_r});
      }
  }
  catch(err){
      console.log(err);
  } 

}


public select_drag_rect_stop = function() {

  this.cvjs_RubberBand.attr({'path': "M0,0"});
  var mybox;
  var overlap;
  var selected_list = "";

  // reorder x,  if not dragged left to right, top to buttom
  var temp;
  if (this.cvjs_firstX>this.cvjs_lastX){
      temp = this.cvjs_firstX;
      this.cvjs_firstX = this.cvjs_lastX;
      this.cvjs_lastX = temp;
  }
  // reorder y,  if not dragged left to right, top to buttom
  if (this.cvjs_firstY>this.cvjs_lastY){
      temp = this.cvjs_firstY;
      this.cvjs_firstY = this.cvjs_lastY;
      this.cvjs_lastY = temp;
  }

  // get all spaces
  var spaceObjectIds = cadviewer.cvjs_getSpaceObjectIdList();

  // make counter for return array
  myReturnArray.length = 0;

  // loop over all spaces
  for (var spc in spaceObjectIds){
      // get the bounding box of the space      
      mybox = cadviewer.cvjs_getSpaceObjectBoundingBox(spaceObjectIds[spc]);
      // check if it operlaps with the drag rectangle
      if (mybox == false) continue;

      overlap= cadviewer.cvjs_rect_doOverlap( this.cvjs_firstX, this.cvjs_firstY, this.cvjs_lastX, this.cvjs_lastY, mybox.x, mybox.y, mybox.x+mybox.width, mybox.y+mybox.height);
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

  this.selectionType = "none";
  
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
    if (hatchtype == 1) cadviewer.cvjs_hatchSpace(spaceObjectIds[spc], "pattern_45degree_crosshatch_fine", "#550055" , "0.5");
    if (hatchtype == 2) cadviewer.cvjs_hatchSpace(spaceObjectIds[spc], "pattern_45degree_standard", "#AA2200" , "0.5");
    if (hatchtype == 3) cadviewer.cvjs_hatchSpace(spaceObjectIds[spc],  "pattern_135degree_wide", "#0055BB" , "0.5");
    if (hatchtype == 4) cadviewer.cvjs_hatchSpace(spaceObjectIds[spc],  "pattern_90degree_wide", "#220088" , "0.5");
      
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

public highlight_space_object(myspace, scale){

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



