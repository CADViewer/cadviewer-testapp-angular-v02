// cadviewer.d.ts
declare module 'cadviewer' {
    export function cvjs_CADViewerPro(cadviewerpro: boolean): void
    export function cvjs_setHandlerSettings(handlerType :string, floorplan_div :string, controllerPath :string): void
    export function cvjs_setAngular(mode :boolean): void
    export function cvjs_setNodeJSserver(mode :boolean): void
    export function cvjs_multipagePDFtoSVG_PhpLoad(mode :boolean): void
    export function cvjs_printToPdf_windowRelativeSize(scale : number): void
    export function cvjs_fileLoadFromSharePointServer(mode :boolean): void
    export function cvjs_setInitMasterBackgroundMode(mode :boolean): void
    export function cvjs_setJSFileOldType(oldtype : boolean): void
    export function cvjs_EnablePrintIcon(floorplan_div :string): void
    export function cvjs_DisablePrintIcon(floorplan_div :string): void
    export function cvjs_encodeURIcallToserver(flag : boolean): void
    export function cvjs_setCustomPDFprintControllerFlag(customPrintAsPDF : boolean): void
    export function cvjs_setCustomPDFprintController(handlerName :string): void
    export function cvjs_setServerHandlersPath(path :string): void
    export function cvjs_setPrintObjectPath(path :string): void
    export function cvjs_setPrintObjectPathAbsolute(pathUrl :string, absolutePathServer :string): void
    export function cvjs_setServerPDFConverterController(handlerName :string): void
    export function cvjs_setGetFileController(handlerName :string): void
    export function cvjs_setReturnPDFparamsController(handlerName :string): void
    export function cvjs_setPrintModal_PrintPDF(printPDFflag :boolean, printAsPDF :boolean): void
    export function cvjs_setPrintModal_printGreyScaleflag(printGreyScaleflag :boolean): void
    export function cvjs_setPrintModal_PrintToScale(printToScaleflag :boolean): void
    export function cvjs_setServerSaveFileHandler(handlerName : string): void
    export function cvjs_setServerCopyFileHandler(handlerName : string): void
    export function cvjs_setServerListDirectoryHandler(handlerName : string): void
    export function cvjs_setServerRedlinesListDirectoryHandler(handlerName : string): void
    export function cvjs_setServerAppendFileHandler(handlerName : string): void
    export function cvjs_setServerDeleteFileHandler(handlerName : string): void
    export function cvjs_setServerSaveFileHandlerPrint(handlerName : string): void
    export function cvjs_setServerAppendFileHandlerPrint(handlerName : string): void
    export function cvjs_setServerDeleteFileHandlerPrint(handlerName : string): void
    export function cvjs_setCustomMergedEmailHandler(handlerName : string): void
    export function cvjs_setServerMergeDWGHandler(handlerName : string): void
    export function cvjs_setServerGetQRCodeController(serverGetQRCodeController :string): void
    export function cvjs_setServerSaveHandlerRedlines(handlerName : string): void
    export function cvjs_setServerLoadHandlerRedlines(handlerName : string): void
    export function cvjs_setServerLoadHandler(handlerName : string): void
    export function cvjs_setPhpUploadPath(handlerName : string): void
    export function cvjs_setUploadControllerPath(handlerName : string): void
    export function cvjs_setUploadHandler(handlerName : string): void
    export function cvjs_setUploadController(handlerName : string): void
    export function cvjs_setPhpPath(handlerName : string): void
    export function cvjs_PageChangeList(floorplan_div :string): void
    export function cvjs_LayerList(floorplan_div :string): void
    export function cvjs_swapLayersInDrawing(floorplan_div :string): void
    export function cvjs_allLayersInDrawingOn(floorplan_div :string): void
    export function cvjs_layerNamefromObjectID(myObjectId  :string): string
    export function cvjs_interactiveLayerOff(floorplan_div :string): void
    export function cvjs_getCurrentMultiPage_FileName(): string
    export function cvjs_currentURL(): string
    export function cvjs_currentHost(): string
    export function cvjs_setDefaultJSPath(path :string): void
    export function cvjs_setInformationModalType(mode :number): void
    export function cvjs_displayInformationModal(floorplan_div :string, textString :string, modalHeight :number, modal_left :number, modal_top :number): void
    export function cvjs_hideInformationModal(floorplan_div :string): void
    export function cvjs_displayInformationModal_Mode(mode :number): void
    export function cvjs_version(): string
    export function cvjs_setBackgroundColor(floorplan_div :string): void
    export function cvjs_setGenericColorFromPicker(pickcolor :string): void
    export function cvjs_setBackgroundColorHex(hex :string, floorplan_div :string): void
    export function cvjs_startSearchText(): void
    export function cvjs_calibrateMeasurement(floorplan_div :string): void
    export function cvjs_Measurement(floorplan_div :string): void
    export function cvjs_getAutoCADColor(hexNumber :string): number
    export function cvjs_get_dwg_scaled_value(n :number, page :number): number
    export function cvjs_get_dwg_x_coord(x :number, page :number): number
    export function cvjs_get_dwg_y_coord(y :number, page :number): number
    export function cvjs_getGlobal_X_fromSVG(x :number): number
    export function cvjs_getSVG_X_fromGlobal(x :number): number
    export function cvjs_getGlobal_Y_fromSVG(y :number): number
    export function cvjs_getSVG_Y_fromGlobal(y :number): number
    export function cvjs_setServerCreateThumb_StickyNote_Controller(controller :string): void
    export function cvjs_setServerSavePrintModeController(controller :string): void
    export function cvjs_setServerSavePrintModeHandler(mode :number): void
    export function cvjs_setServerScreenToPDFController(controller :string): void
    export function cvjs_setServerScreenToPDFHandler(controller :string): void
    export function cvjs_saveScreenAsImage_makeTumbnails(serverPath :string, image_fileName :string, sizeThumb1 :number, thumb1_fileName :string, sizeThumb2 :number, thumb2_fileName: string): void
    export function cvjs_saveScreenAsImage_stickyNoteInfo_makeTumbnails(serverPath :string, image_fileName :string, sizeThumb1 :number, thumb1_fileName :string, sizeThumb2 :number, thumb2_fileName: string): void
    export function cvjs_saveScreenAsImage(serverPath :string, image_fileName :string): void
    export function cvjs_saveScreenAsPDF(pageOrientation :string, pageSize :string, pageResolution :string): void
    export function cvjs_batchConvertDrawingsToPDF_CustomReport(floorPlan :string, drawingFilesArray :any, pageOrientationArray :any, pageSizeArray :any, pageResolutionArray :any, batchFilesToPDF_Controller :string, callbackMethod :any): void
    export function cvjs_setPrintPaperSize(papersize :string): void
    export function cvjs_setPrintResolutionDpi(dpi :number): void
    export function cvjs_setPrintOrientation(orientation :string): void
    export function cvjs_Print(floorplan_div :string): void
    export function cvjs_Conversion_forPrint(floorplan_div :string, originatingContent :string, originatingUsername :string, originatingPassword :string, fileFormat :string): void
    export function cvjs_printCanvasPaperSize(): void
    export function cvjs_removePrintObjectAfterPrint(): void
    export function cvjs_setJavaScriptsAbsoluteFolder(folder :string): void
    export function cvjs_setJavaScriptsJQ_AbsoluteFolder(folder :string): void
    export function cvjs_displayMagnifyingGlass(floorplan_div :string): void
    export function cvjs_firstPage(floorplan_div :string): void
    export function cvjs_lastPage(floorplan_div :string): void
    export function cvjs_nextPage(floorplan_div :string): void
    export function cvjs_changePageByNumber(floorplan_div :string, newpagenumber :number): void
    export function cvjs_previousPage(floorplan_div :string): void
    export function cvjs_setSupressHyperlinkColors(supressflag : boolean): void
    export function cvjs_setUrl_singleDoubleClick(click :number): void
    export function cvjs_encapsulateUrl_callback(flag : boolean): void
    export function cvjs_AllLayersOff(): void
    export function cvjs_LayerOn(layer :string): void
    export function cvjs_LayerOn_AllOff(layer :string): void
    export function cvjs_LayerOff(layer: string): void
    export function cvjs_setPanState(panState :boolean): void
    export function cvjs_windowResize_position(): void
    export function cvjs_resizeWindow_position(floorplan: string): void
    export function cvjs_resizeWindow_fixedSize(): void
    export function cvjs_resizeWindow_fixedSize_location(): void
    export function cvjs_windowResize_position_WidthHeight(): void
    export function cvjs_windowResize_fixedSize(): void
    export function cvjs_InitializeModals(): void
    export function cvjs_initialize_allColorCheckboxes(): void
    export function cvjs_customPrintTextboxOnChange(): void
    export function cvjs_LayerListModalXrefOnChange(): void
    export function cvjs_line_thickness_modal_hide(): void
    export function cvjs_exitLineThicknessModal(): void
    export function cvjs_adjustMinimumLineThickness(): void
    export function cvjs_activateLineThicknessModal(): void
    export function cvjs_interfaceCounterIndex(): void
    export function cvjs_displayAllInterfaceControlsZoomDisk(): void
    export function cvjs_hideAllInterfaceControls(): void
    export function cvjs_setIconInterfaceControls_PageModal(): void
    export function cvjs_setIconInterfaceControls_DisableIcons(): void
    export function cvjs_displayAllInterfaceControls(): void
    export function cvjs_setIconInterfaceControls_ClassicSkin(): void
    export function cvjs_setIconInterfaceControls_ClassicSkin_DevicesSizeOnly(): void
    export function cvjs_setIconInterfaceControls_MimimumDisk(): void
    export function cvjs_setIconInterfaceControls_MimimumDisk_internal(): void
    export function cvjs_setIconInterfaceControls_PanZoomDisk(): void
    export function cvjs_overwriteDefaultDeviceSettings(): void
    export function cvjs_initFloorPlanDivArray(): void
    export function cvjs_InitCADViewer_highLight_popUp_dual_Id(floorplan_div :string, cvjsRoomPolygonBaseAttributes :any, cvjsRoomPolygonHighlightAttributes :any, cvjsRoomPolygonSelectAttributes :any, cvjsPopUpBody :any, cvjsPopUpBody2 :any): void
    export function cvjs_InitCADViewer_highLight_popUp_app(floorplan_div :string, app_folder :string, cvjsRoomPolygonBaseAttributes :any, cvjsRoomPolygonHighlightAttributes :any, cvjsRoomPolygonSelectAttributes :any, cvjsPopUpBody :any): void
    export function cvjs_InitCADViewer_highLight_popUp(floorplan_div :string, cvjsRoomPolygonBaseAttributes :any, cvjsRoomPolygonHighlightAttributes :any, cvjsRoomPolygonSelectAttributes :any, cvjsPopUpBody :any): void
    export function cvjs_InitCADViewer_highLight(floorplan_div :string, cvjsRoomPolygonBaseAttributes :any, cvjsRoomPolygonHighlightAttributes :any, cvjsRoomPolygonSelectAttributes :any): void
    export function cvjs_InitCADViewer_app(floorplan_div :string, app_folder :string, imagePathDirect :string): void
    export function cvjs_InitCADViewer_app_highLight(floorplan_div :string, app_folder :string, cvjsRoomPolygonBaseAttributes :any, cvjsRoomPolygonHighlightAttributes :any, cvjsRoomPolygonSelectAttributes :any): void
    export function cvjs_InitCADViewer_app_highLight_popUp(floorplan_div :string, app_folder :string, cvjsRoomPolygonBaseAttributes :any, cvjsRoomPolygonHighlightAttributes :any, cvjsRoomPolygonSelectAttributes :any, cvjsPopUpBody :any): void
    export function cvjs_InitCADViewer(floorplan_div :string, image_location :string, javascripts_folder :string): void
    export function cvjs_setRelativeScriptsPath(): void
    export function cvjs_setCustomPdfFolder(): void
    export function cvjs_getCurrentPage(): void
    export function cvjs_LoadDrawingPDF_base(): void
    export function cvjs_checkSVGOnServerBeforeLoadFirst(): void
    export function cvjs_checkSVGOnServerBeforeLoad(): void
    export function cvjs_ClearDrawing(): void
    export function cvjs_LoadDrawing(floorplan_div :string, FileName :string): void
    export function cvjs_clearCurrentRedline(): void
    export function cvjs_findMaxRedlineStickyNote(): void
    export function cvjs_findMaxStickyNote(): void
    export function cvjs_setUpVqRedlines_deleteNode_direct(): void
    export function cvjs_setUpStickyNotes_deleteNode_direct(): void
    export function cvjs_setOriginatingFileUsernamePassword(): void
    export function cvjs_restApiController(): void
    export function cvjs_restApiControllerLocation(): void
    export function cvjs_setRestApiControllerLocation(): void
    export function cvjs_setRestApiController(): void
    export function cvjs_restApiConverter(): void
    export function cvjs_restApiConverterVersion(): void
    export function cvjs_setConverter(): void
    export function cvjs_setConverterCredentials(): void
    export function cvjs_Init_ConversionServer(): void
    export function cvjs_setSVG_outputFormatInAXConversions(): void
    export function cvjs_conversion_clearAXconversionParameters(): void
    export function cvjs_conversion_addAXconversionParameter(name :string, value :string): void
    export function cvjs_conversion_setContentType(): void
    export function cvjs_conversion_setContentFormat(): void
    export function cvjs_fileLoad_setContentFormat(): void
    export function cvjs_conversion_setUserLabel(): void
    export function cvjs_conversion_setContentResponse(): void
    export function cvjs_conversion_getContentResponse(): void
    export function cvjs_debugMode(debug :boolean): void
    export function cvjs_setPasswordProtectionServerAccess(): void
    export function cvjs_setServerAccessToServlet(): void
    export function cvjs_setServerAccessToPost(): void
    export function cvjs_LoadDrawing_Conversion(): void
    export function cvjs_LoadDrawing_Conversion_original(): void
    export function cvjs_setFileLoadTimeOut(): void
    export function cvjs_fileLoadTimeOut(): void
    export function cvjs_LoadDrawing_SVG(): void
    export function cvjs_addSVGClickHandler_onLoad(): void
    export function cvjs_addMouseWheelControls(): void
    export function cvjs_zoomWindow(floorplan_div :string): void
    export function cvjs_ZoomWindow(floorplan_div :string): void
    export function cvjs_panRight(): void
    export function cvjs_panUp(): void
    export function cvjs_panDown(): void
    export function cvjs_panLeft(): void
    export function cvjs_zoomExtents(floorplan_div :string): void
    export function cvjs_ZoomExtents(floorplan_div :string): void
    export function cvjs_resetZoomPan(floorplan_div: string): void
    export function cvjs_zoomIn(floorplan_div: string): void
    export function cvjs_ZoomIn(floorplan_div: string): void
    export function cvjs_zoomOut(floorplan_div: string): void
    export function cvjs_ZoomOut(floorplan_div: string): void
    export function cvjs_zoomInOutCustomFactor(floorplan_div :string, customZoomFactor :number): void
    export function cvjs_zoomPositionFactor(): void
    export function cvjs_redrawViewBox(): void
    export function cvjs_LoadTopIconMenuViewing(): void
    export function cvjs_loadCADViewerLanguage(language :string): void
    export function cvjs_setLanguage(): void
    export function cvjs_getLanguages(): void
    export function cvjs_getServerLocation(): void
    export function cvjs_getServerURL(): void
    export function cvjs_returnSpaceObjectSelected(): string
    export function cvjs_setServerBackEndUrl(): void
    export function cvjs_getServerBackEndUrl(): void
    export function cvjs_setServerLocationURL(ServerLocation :string, ServerUrl :string): void
    export function cvjs_setTopMenuXML(floorplan_div :string, xml_config_file :string, xml_config_file_location :string): void
    export function cvjs_setCustomTopMenuXML(): void
    export function cvjs_displayTopMenuIconBar(): void
    export function cvjs_displayTopNavigationBar(): void
    export function cvjs_changePreviousIconPage_TopIconMenu(): void
    export function cvjs_changeNextIconPage_TopIconMenu(): void
    export function cvjs_LoadTopNavigationMenu(): void
    export function cvjs_LoadCoordinatesMenu(): void
    export function cvjs_LoadSpaceObjectsCustomMenu(): void
    export function cvjs_LoadTopIconMenu(): void
    export function cvjs_LoadTopIconMenuXML(): void
    export function cvjs_insertSingleIconImage(): void
    export function cvjs_navigationMenuItemHighlight(): void
    export function cvjs_allowFileLoadToServer(mode :boolean): void
    export function cvjs_setCustomCallbackMethodOnLoadEnd(): void
    export function cvjs_setLooperPosition(): void
    export function cvjs_zoomZeroWidth(): void
    export function cvjs_initZeroWidthHandling(): void
    export function cvjs_rotateForward(): void
    export function cvjs_rotateBackward(): void
    export function cvjs_rotateAngle(): void
    export function cvjs_interactiveSearchText(): void
    export function cvjs_interactiveSearchText_zoomLevel(): void
    export function cvjs_exitSearchTextModal(): void
    export function cvjs_searchText(): void
    export function cvjs_searchTextInstance(): void
    export function cvjs_calibrateMeasurement_RedlinePolyline(): void
    export function cvjs_Measurement_RedlinePolyline(): void
    export function cvjs_closeAreaMeasurement(): void
    export function cvjs_setPrintModalCustomCheckBox(): void
    export function cvjs_setPrintModalCustomCheckBoxFromFile(): void
    export function cvjs_setPrintModalCustomDualTextBox(): void
    export function cvjs_setPrintModalCustomTextBox(): void
    export function cvjs_setPrintModalCustomDualTextBoxFromFile(): void
    export function cvjs_setPrintModalCustomTextBoxFromFile(): void
    export function cvjs_GetURLParameter(): void
    export function cvjs_PrintToPDFWindowRelativeSize(factor :number): void
    export function cvjs_setFileModalEditMode(mode :boolean): void
    export function cvjs_setPrintPaperSizeasSVGObject(): void
    export function cvjs_printPaperSizeasSVGObject(): void
    export function cvjs_superimposeBackgroundDrawing_PrintOutputAtDualTextbox(): void
    export function cvjs_superimposeBackgroundDrawing_PrintOutputAtZoom(): void
    export function cvjs_Settings(): void
    export function cvjs_exitSettingsModal(): void
    export function cvjs_setCurrentLanguage(): void
    export function cvjs_copyMeasurementField(): void
    export function cvjs_spaceObjectsInitSettingsModal(): void
    export function cvjs_exitSpaceObjectsInitSettingsModal(): void
    export function cvjs_continueCreateSpaceObjects(): void
    export function cvjs_spaceObjectsChangeSettingsModal(): void
    export function cvjs_exitSpaceObjectsChangeSettingsModal(): void
    export function cvjs_updateChangeSpaceObjects(): void
    export function cvjs_unlinkChangeSpaceObjects(): void
    export function cvjs_setCustomToolTip(customtooltip :boolean): void
    export function cvjs_showToolTipLocation(): void
    export function cvjs_hideToolTip(): void
    export function cvjs_displayCustomToolTip(): void
    export function cvjs_setCustomToolTipValue(id :string, contentArr :any): void
    export function cvjs_searchReplaceText(): void
    export function cvjs_openHyperlinkInNewWindow(): void
    export function cvjs_getSpaceObjectIdList(): any
    export function cvjs_getSpaceObjectNamesList(): any
    export function cvjs_getSpaceObjectTypefromId(Id :string): string
    export function cvjs_getSpaceObjectNodefromId(Id :string): string
    export function cvjs_getSpaceObjectNamefromId(Id :string): string
    export function cvjs_getSpaceObjectIdfromNode(): void
    export function cvjs_getSpaceObjectNamefromNode(): void
    export function cvjs_getAttributeStatus(): void
    export function cvjs_setAttributeStatus(): void
    export function cvjs_getAttributeFromSpaceObjectNode(): void
    export function cvjs_setAttributeInSpaceObjectNode(): void
    export function cvjs_newLayer(): void
    export function cvjs_newLayerDiv(): void
    export function cvjs_clearLayer(layer: string): string
    export function cvjs_clearLayerDiv(): void
    export function cvjs_clearTextLayer(): void
    export function cvjs_sortLayersInOrder(): void
    export function cvjs_sortLayers_prepend(): void
    export function cvjs_sortLayers_insertAfter(): void
    export function cvjs_AllGroupsOn(): void
    export function cvjs_AllGroupsOff(): void
    export function cvjs_GroupOn(): void
    export function cvjs_GroupOn_OthersOff(): void
    export function cvjs_GroupOn_AllOff(): void
    export function cvjs_GroupOff(): void
    export function cvjs_ApplyPatternOnSpaceObjectId(): void
    export function cvjs_ApplyPatternOnSpaceObjectNode(): void
    export function cvjs_ApplyPatternOnUrl(): void
    export function cvjs__ApplyPatternOnObject_layerSort(): void
    export function cvjs_setUpPattern_45degree_standard(): void
    export function cvjs_setUpPattern_45degree_wide(): void
    export function cvjs_setUpPattern_45degree_fine(): void
    export function cvjs_setUpPattern_90degree_fine(): void
    export function cvjs_setUpPattern_90degree_standard(): void
    export function cvjs_setUpPattern_90degree_wide(): void
    export function cvjs_setUpPattern_135degree_standard(): void
    export function cvjs_setUpPattern_135degree_wide(): void
    export function cvjs_setUpPattern_135degree_fine(): void
    export function cvjs_setUpPattern_0degree_standard(): void
    export function cvjs_setUpPattern_0degree_wide(): void
    export function cvjs_setUpPattern_0degree_fine(): void
    export function cvjs_setUpPattern_45degree_crosshatch_standard(): void
    export function cvjs_setUpPattern_45degree_crosshatch_fine(): void
    export function cvjs_ApplyRelativeLinearGradientStandard2Colors(): void
    export function cvjs_ApplyRelativeLinearGradientStandard3Colors(): void
    export function cvjs_ApplyRelativeLinearGradient(): void
    export function cvjs_ApplyRelativeLinearGradientStandard2ColorsOnSpaceObjectId(): void
    export function cvjs_ApplyRelativeLinearGradientStandard2ColorsOnSpaceObjectNode(): void
    export function cvjs_ApplyRelativeLinearGradientStandard3ColorsOnSpaceObjectId(): void
    export function cvjs_ApplyRelativeLinearGradientStandard3ColorsOnSpaceObjectNode(): void
    export function cvjs_ApplyRelativeLinearGradientOnObject_layerSort(): void
    export function cvjs_ApplyRelativeRadialGradientStandard2Colors(): void
    export function cvjs_ApplyRelativeRadialGradientStandard3Colors(): void
    export function cvjs_ApplyRelativeRadialGradient(): void
    export function cvjs_ApplyRelativeRadialGradientStandard2ColorsOnSpaceObjectId(): void
    export function cvjs_ApplyRelativeRadialGradientStandard2ColorsOnSpaceObjectNode(): void
    export function cvjs_ApplyRelativeRadialGradientStandard3ColorsOnSpaceObjectId(): void
    export function cvjs_ApplyRelativeRadialGradientStandard3ColorsOnSpaceObjectNode(): void
    export function cvjs_ApplyRelativeRadialGradientOnObject_layerSort(): void
    export function cvjs_AddTextOnObject(): void
    export function cvjs_AddTextAndTBorderOnSpaceObject3Lines(): void
    export function cvjs_AddTextAndTBorderOnSpaceObjectId_GlobalHeight(): void
    export function cvjs_AddTextAndTBorderOnSpaceObjectId(): void
    export function cvjs_AddTextAndTBorderOnSpaceObjectNode(): void
    export function cvjs_AddTextAndTBorderOnSpaceObject(): void
    export function cvjs_AddTextOnObjectScaleText(): void
    export function cvjs_setCallbackForModalDisplay(): void
    export function cvjs_setCreationMode(): void
    export function cvjs_setNoModalMode(): void
    export function cvjs_setCustomModalsContent(): void
    export function cvjs_setStickyNoteText(): void
    export function cvjs_setStickyNoteEditText(): void
    export function cvjs_showIconnoteTip(): void
    export function cvjs_showStickynoteTip(): void
    export function cvjs_currentMaxSpaceNodeId(): void
    export function cvjs_currentMaxNodeId(): void
    export function cvjs_addUserIdToHiddenRedlineUsers(): void
    export function cvjs_addUserIdToLockedRedlineUsers(): void
    export function cvjs_clearAllRedlineHiddenUsers(): void
    export function cvjs_clearAllRedlineLockedUsers(): void
    export function cvjs_getRedlineHiddenUsersList(): void
    export function cvjs_getRedlineLockedUsersList(): void
    export function cvjs_getAllRedlines_UserIdList(): void
    export function cvjs_getAllRedlines_TextList(): void
    export function cvjs_hideAllRedlines_ExceptUser(): void
    export function cvjs_lockAllRedlines_ExceptUser(): void
    export function cvjs_hideAllRedlines_ExceptCurrentUser(): void
    export function cvjs_lockAllRedlines_ExceptCurrentUser(): void
    export function cvjs_hideAllRedlines_HiddenUsersList(): void
    export function cvjs_lockAllRedlines_LockedUsersList(): void
    export function cvjs_setCurrentNodeValues(): void
    export function cvjs_setCurrentSpaceObjectNodeValues(): void
    export function cvjs_setCurrentStickyNoteValues(): void
    export function cvjs_setCurrentStickyNoteValues_All(): void
    export function cvjs_setCurrentStickyNoteValues_NameUserId(currentStickyNote_name:string, currentStickyNote_userid:string): void
    export function cvjs_setCurrentStickyNoteValues_NameUserIdDate(): void
    export function cvjs_setCurrentRedlineValues_NameUserid(currentRedline_username :string, currentRedline_userid :string): void
    export function cvjs_setCurrentRedlineValues_Userid(): void
    export function cvjs_setCurrentRedlineValues(): void
    export function cvjs_setCurrentRedlineValues_All(): void
    export function cvjs_setCurrentRedlineValues_ColorStokeWidth(): void
    export function cvjs_setCurrentRedlineValues_Color(): void
    export function cvjs_setCurrentRedlineValues_StokeWidth(): void
    export function cvjs_setCurrentRedlineValues_StrokeWidth(): void
    export function cvjs_setCurrentNodeValuesFromExistingNode(): void
    export function cvjs_overwriteNodeValues(): void
    export function cvjs_addVqRoomsGraphics_newNode_polygon(): void
    export function cvjs_addVqRoomsGraphics_newNode_circle(): void
    export function cvjs_addVqStickyNotesGraphics_newNode(): void
    export function cvjs_addVqRedlinesGraphics_newNode(): void
    export function cvjs_addVqRedlinesGraphics_newNodeFill(): void
    export function cvjs_addVqRedlinesGraphics_newNodeTrans(): void
    export function cvjs_addVqRedlinesGraphics_newNodeText(): void
    export function cvjs_setUpVqRooms_currentNode(): void
    export function cvjs_setUpVqStickyNotes_currentNode_vqIndex(): void
    export function cvjs_setUpVqStickyNotes_currentNode_vqIndex_passedInstance(): void
    export function cvjs_setUpVqStickyNotes_currentNode(): void
    export function cvjs_setUpVqStickyNotes_currentNode_PageChange(): void
    export function cvjs_setUpVqRooms_deleteNode(): void
    export function cvjs_setUpStickyNotes_deleteNode(): void
    export function cvjs_StickyNotes_arrayIndex(): void
    export function cvjs_drawSpaceObject_Circle(): void
    export function cvjs_drawSpaceObject_RedlineCloud(): void
    export function cvjs_addRectangleCustomSpaceObject(): void
    export function cvjs_drawSpaceObject_CustomRectangle(): void
    export function cvjs_drawSpaceObject_Rectangle(): void
    export function cvjs_drawSpaceObject_RedlineRectangle(): void
    export function cvjs_drawSpaceObject_RedlineEllipseCloud(): void
    export function cvjs_drawSpaceObject_RedlineEllipse(): void
    export function cvjs_drawSpaceObject_FilledRedlineRectangle(): void
    export function cvjs_dynamicResizeTextOnSpaceObject(): void
    export function cvjs_dynamicResizeTextOnSpaceObject_Name(): void
    export function cvjs_dynamicResizeTextOnSpaceObject_Id(): void
    export function cvjs_resetTextOnSpaceObject(): void
    export function cvjs_resetTextOnSpaceObject_Name(): void
    export function cvjs_resetTextOnSpaceObject_Id(): void
    export function cvjs_drawSpaceObject_Polygon(): void
    export function cvjs_drawSpaceObject_RedlinePolyline(): void
    export function cvjs_drawSpaceObject_RedlineArrowPolyline(): void
    export function cvjs_drawSpaceObject_RedlineFilledPolygon(): void
    export function cvjs_setUpVqRedlines_currentNode(): void
    export function cvjs_setUpVqRedlines_deleteNode(): void
    export function cvjs_drawSpaceObject_CopyCircle(): void
    export function cvjs_drawStickyNoteDirect(): void
    export function cvjs_setCallbackMeasurement(): void
    export function cvjs_insertRedlineText(): void
    export function cvjs_changeNextIconPage(): void
    export function cvjs_changePreviousIconPage(): void
    export function cvjs_changeToIconPage(): void
    export function cvjs_setIconInterfaceControls_ViewingOnly(): void
    export function cvjs_setIconInterfaceControls_SpaceManagement(): void
    export function cvjs_setIconInterfaceControls_ImageInsert(): void
    export function cvjs_initiateInsertRedlineText(): void
    export function cvjs_insertImageLink(): void
    export function cvjs_setCallbackQuickCount(): void
    export function cvjs_showMeCounts(): void
    export function cvjs_clearQuickCounts(): void
    export function cvjs_quickCount(): void
    export function cvjs_exitQuickCount(): void
    export function cvjs_setSpacePolygonOnLayer(): void
    export function cvjs_findSVGcoordinate_setPolygonOnLayer(): void
    export function cvjs_combineRoomTextlayer(): void
    export function cvjs_getSizeOfLinkedObjects(): void
    export function cvjs_createSpaceLocationArrays(): void
    export function cvjs_createDataMapsHeaders(): void
    export function cvjs_OnLoadEndCompareDrawings(): void
    export function cvjs_setCompareDrawings_LoadSecondDrawingDirect(): void
    export function cvjs_setCompareDrawings_StandardModal(): void
    export function cvjs_compareDrawings_LoadSecondDrawing(): void
    export function cvjs_compareDrawings_ToggleDrawingOverlay(): void
    export function cvjs_compareDrawings_ToggleDrawings(): void
    export function cvjs_exitCompareDrawings(): void
    export function cvjs_setCollaborationSessionName(): void
    export function cvjs_setCollaborationServerUrl(): void
    export function cvjs_setCollaborationServerFolder(): void
    export function cvjs_collab_timer(): void
    export function cvjs_start_collab(): void
    export function cvjs_start_collab_button(): void
    export function cvjs_stop_collab(): void
    export function cvjs_clear_collab_redline(): void
    export function cvjs_make_collab_presenter(): void
    export function cvjs_downloadFile(): void
    export function cvjs_SVGtoOriginal_X_coord(): void
    export function cvjs_SVGtoOriginal_Y_coord(): void
    export function cvjs_InitializeSVGHyperlinkClick(): void
    export function cvjs_colorSingleSVGHyperlink(): void
    export function cvjs_resetSVGHyperlinkColors(): void
    export function cvjs_makeLegendUpperRightDiv(): void
    export function cvjs_makeLegendUpperRight(): void
    export function cvjs_changeText_On_BlockHandle(): void
    export function cvjs_changeText_On_BlockHandleDiv(): void
    export function cvjs_makeStampUpperRightDiv(): void
    export function cvjs_makeStampUpperRight(): void
    export function cvjs_saveStamp(): void
    export function cvjs_saveCustomSVGLayer(): void
    export function cvjs_saveFloorplanAsPDF(): void
    export function cvjs_saveFloorplanAsPDFtoSharePoint(): void
    export function cvjs_saveFloorplanAsSVG(): void
    export function cvjs_mergePDFwithRedlines(): void
    export function cvjs_loadStamp(): void
    export function cvjs_loadCustomSVGLayer(): void
    export function cvjs_LoadDrawingAborted(): void
    export function cvjs_hideNavigationMenu(): void
    export function cvjs_checkRoomHandleDiv(): void
    export function cvjs_checkBlockHandleDiv(): void
    export function cvjs_getStickyNoteInfo(): void
    export function cvjs_saveStickyNoteInfo(): void
    export function cvjs_publishPDF(): void
    export function cvjs_mergeDXFDWG(): void
    export function cvjs_mergeDXFViaButton(): void
    export function cvjs_saveScreenAsMergedDXF(): void
    export function cvjs_publishPDFViaButton(): void
    export function cvjs_saveScreenAsPDF_uploadServer(): void
    export function cvjs_saveScreenAsPDF_email(): void
    export function cvjs_printSavedBitmapToPDF_uploadServer(): void
    export function cvjs_printSavedBitmapToPDF_email(): void
    export function cvjs_printScreenAsPDFwithRedlines(): void
    export function cvjs_initializeFileSelector(): void
    export function cvjs_setModalSingleFileItems(): void
    export function cvjs_initializeAllFileSelectorDivs(): void
    export function cvjs_add_file_object(): void
    export function cvjs_setServerFileLocation(): void
    export function cvjs_setServerFileLocation_AbsolutePaths(myServerPathToFloorplans :string, floorplanUrl :string, username :string, password :string): void
    export function cvjs_exitServerFileLoadModal(): void
    export function cvjs_callServerForDataOverlayProcessing(): void
    export function cvjs_loadFileWithDataOverlays(): void
    export function cvjs_loadBitmapsViaServerPath(): void
    export function cvjs_openFileLoadToServer(): void
    export function cvjs_setFileLoadTrialMode(): void
    export function cvjs_loadServerFileList(): void
    export function cvjs_setRedlinesRelativePath(): void
    export function cvjs_setRedlinesAbsolutePath(path :string,serverPath :string): void
    export function cvjs_openSpaceObjectSaveModal(): void
    export function cvjs_openRedlineSaveModal(floorplan_div : string): void
    export function cvjs_openRedlineLoadModal(floorplan_div : string): void
    export function cvjs_toggleBlackWhite(): void
    export function cvjs_colorAllLayersInDrawing_OriginalColor_SVG(): void
    export function cvjs_colorAllLayersInDrawing_InvertBackground_SVG(): void
    export function cvjs_storeFillColors(): void
    export function cvjs_colorAllLayersInDrawing(): void
    export function cvjs_colorAllLayersInDrawing_InvertBackground(): void
    export function cvjs_setInsertImageObjectsRelativePath(): void
    export function cvjs_setInsertImageObjectsAbsolutePath(): void
    export function cvjs_setInsertImageObjectsAbsolutePath_FileName(): void
    export function cvjs_add_image(): void
    export function cvjs_loadAllImageLinks(): void
    export function cvjs_loadImageObjectTimer(): void
    export function cvjs_addInlineScript(): void
    export function cvjs_saveAllImageLinks(): void
    export function cvjs_clearAllImageLinks(): void
    export function cvjs_loadDrawingsWithSpaceObjects(): void
    export function cvjs_conversion_cleanFilesDirectory(): void
    export function cvjs_setSpaceObjectUserMode(): void
    export function cvjs_addRectangleSpaceObject(): void
    export function cvjs_addRectangleSpaceObjectCore(): void
    export function cvjs_addPolygonSpaceObject(): void
    export function cvjs_addPolygonSpaceObjectCore(): void
    export function cvjs_addCircleSpaceObject(): void
    export function cvjs_addCircleSpaceObjectCore(): void
    export function cvjs_copyCircleSpaceObject(): void
    export function cvjs_clearSpaceObjects(): void
    export function cvjs_deleteSpaceObject(): void
    export function cvjs_changeSpaceObjectDisplayMode(): void
    export function cvjs_change_space(): void
    export function cvjs_displaySpaceObjectsStructure(): void
    export function cvjs_displaySpaceObjectsStructureInternal(): void
    export function cvjs_spaceObjectSettings(): void
    export function cvjs_spaceObjectInputPanel(): void
    export function cvjs_addCircleAccessPointObject(): void
    export function cvjs_setLanguageIndexIncrement(): void
    export function cvjs_setLanguageIndex(): void
    export function cvjs_ajaxPostCallbackVariable_thumbNails(): void
    export function cvjs_emailSettings_PDF_publish(from_name :string, from_mail :string, cc_mail :string, replyto :string): void
    export function cvjs_emailScreenAsPDFwithRedlines(): void
    export function cvjs_dragBackgroundToFront_SVG(): void
    export function cvjs_dragBackgroundToBack_SVG(): void
    export function cvjs_saveAsSVG(): void
    export function cvjs_download_link(): void
    export function cvjs_saveAsSVGOnServer(): void
    export function cvjs_getStickyNotesRedlineXML(): void
    export function cvjs_getCurrentMeasurementUnit(): void
    export function cvjs_getSvgToWorldUnits(): void
    export function cvjs_setCurrentMeasurementUnits(): void
    export function cvjs_resetInitialization_FloorplanDiv(): void
    export function cvjs_setDragBackgroundOnTop(): void
    export function cvjs_setDragBackgroundToBack(): void
    export function cvjs_creation_modal_show(): void
    export function cvjs_creation_modal_hide(): void
    export function cvjs_showCreationModeModal(): void
    export function cvjs_drawEllipseViaButton(): void
    export function cvjs_ellipse_modal_hide(): void
    export function cvjs_drawRedlineEllipseCloud(): void
    export function cvjs_buildFolderTree(): void
    export function cvjs_CleanLayout(): void
    export function cvjs_selectPageFromList(): void
    export function cvjs_custom_jsTreeSelection(): void
    export function cvjs_conversion_setApplicationServiceParameters(): void
    export function cvjs_update_done_edit_location_fields(): void
    export function cvjs_draw_space_object_names_on_spaces(): void
    export function cvjs_connectTextInstances(): void
    export function cvjs_floodfill(): void
    export function cvjs_floodfillWrapper(): void
    export function cvjs_pngForSVG(): void
    export function cvjs_addPinMarker(): void
    export function cvjs_drawSpaceObject_PinMarker(): void
    export function cvjs_PinMarker(): void
    export function cvjs_mergeQR(): void
    export function cvjs_CompareFiles_setFileModalContent(): void
    export function cvjs_createSpaceOutput_JSfile_Legacy(): void
    export function cvjs_createSpaceOutput_JSfile(): void
    export function cvjs_loadSpaceObjectsUser(): void
    export function cvjs_setSpaceObjectsAbsolutePath(path :string, serverPath :string): void
    export function cvjs_setSpaceObjectUrl(): void
    export function cvjs_loadSpaceObjects(): void
    export function cvjs_supressPopUpModalMode(modal_mode :boolean): void
    export function cvjs_supressSingleSpaceHighlight(modal_mode :boolean): void
    export function cvjs_addSpaceObjectDirectXY(): void
    export function cvjs_addFixedSizeCustomSpaceObjectXY(): void
    export function cvjs_moveFixedSizeCustomSpaceObjectXY(): void
    export function cvjs_addFixedSizeCustomSpaceObject(): void
    export function cvjs_drawSpaceObject_FixedSize(): void
    export function cvjs_deleteSpaceImageObject(): void
    export function cvjs_rotateSpaceObject(): void
    export function cvjs_moveSpaceObject(): void
    export function cvjs_resizeSpaceObject(): void
    export function cvjs_resizeSpaceImageObject(): void
    export function cvjs_resizeSpaceImageObject_core(): void
    export function cvjs_addFixedSizeImageSpaceObjectXY(): void
    export function cvjs_addFixedSizeImageSpaceObject_GlobalXY(): void
    export function cvjs_addFixedSizeImageSpaceObject(): void
    export function cvjs_addDragRectangleImageSpaceObject(): void
    export function cvjs_initCADViewerPro_Section02(): void
    export function cvjs_initCADViewerPro_Section03(): void
    export function cvjs_initCADViewerPro_FileLoadModal(): void
    export function cvjs_getStickyNotesRedlineDXF(): void
    export function cvjs_getStickyNotesRedlineJS(): void
    export function cvjs_getStickyNotesRedline(): void
    export function cvjs_saveSpaceObjects(): void
    export function cvjs_saveStickyNotesRedlines(): void
    export function cvjs_drawRedline__Freehand(): void
    export function cvjs_setRedlineColor(): void
    export function cvjs_color_modal_hide(): void
    export function cvjs_setPublishPDF(): void
    export function cvjs_publishPDF_modal_hide(): void
    export function cvjs_setMergeDXF(): void
    export function cvjs_mergeDXF_modal_hide(): void
    export function cvjs_setGenericColor(): void
    export function cvjs_setRedlineThickness(): void
    export function cvjs_setRedlineColorViaButton(): void
    export function cvjs_setRedlineColorFromPicker(): void
    export function cvjs_setRedlineThicknessViaButton(): void
    export function cvjs_drawRedlineRectangle(): void
    export function cvjs_drawRedlineTriangle(): void
    export function cvjs_drawRedlineFilledRectangle(): void
    export function cvjs_drawRedlineCloud(): void
    export function cvjs_drawRedlineEllipse(): void
    export function cvjs_drawRedlinePolyline(): void
    export function cvjs_drawRedlineFilledPolygon(): void
    export function cvjs_drawRedlineArrow(): void
    export function cvjs_drawRedlineText(): void
    export function cvjs_hide_redline_text_modal(): void
    export function cvjs_exitRedlineTextModal(): void
    export function cvjs_setStickyNoteRedlineUrl(): void
    export function cvjs_setStickyNoteSaveRedlineUrl(): void
    export function cvjs_drawRedline_Freehand(): void
    export function cvjs_drawRedline_Freehand_globalColorWidth(): void
    export function cvjs_drawRedline_Freehand_setValues(): void
    export function cvjs_drawStickyNote_setValues(): void
    export function cvjs_drawStickyNote(): void
    export function cvjs_deleteLastRedline(): void
	export function cvjs_undoDeleteLastRedline(): void
    export function cvjs_deleteAllRedlines(): void
    export function cvjs_deleteAllStickyNotes(): void
    export function cvjs_loadStickyNotesRedlines(): void
    export function cvjs_loadStickyNotesRedlinesTimer(): void
    export function cvjs_deleteSingleRedline(): void
    export function cvjs_saveScreenAsImage_UploadSharepointListItem(): void
    export function cvjs_batchConvertDrawingsToPDF(): void
    export function cvjs_batchConvertOnLoadEndCustomMethod(): void
    export function cvjs_clearDrawingSpaceObjects(): void
    export function cvjs_clearDrawing(): void
    export function cvjs_clearDrawingStickyNotes(): void
    export function cvjs_clearDrawingHyperlinks(): void
    export function cvjs_clearDrawingRedlines(): void
    export function cvjs_updateDrawingRedlines(): void
    export function cvjs_clearAllDrawing(): void
    export function cvjs_highlightURL(): void
    export function cvjs_highlightURL_layersort(): void
    export function cvjs_highlightRoomCSS(): void
    export function cvjs_highlightAllSpaceObjects(): void
    export function cvjs_highlightAllRooms_layer(): void
    export function cvjs_highlightSpaceObjectIdDiv(): void
    export function cvjs_highlightSpaceObjectId(): void
    export function cvjs_highlightRoomCSS_layer(): void
    export function cvjs_highlightRoomCSS_layersortDiv(): void
    export function cvjs_highlightRoomCSS_layersort(): void
    export function cvjs_highlightSpaceBorderCSS_layersortDiv(): void
    export function cvjs_highlightSpaceBorderCSS_layersort(): void
    export function cvjs_highlightFixtureCSS_layersort(): void
    export function cvjs_highlightRoomRGB(): void
    export function cvjs_highlightRoomHex(): void
    export function cvjs_highlightRoomByIdHex(): void
    export function cvjs_highlightRoomImmediate(): void
    export function cvjs_highlightRoomImmediateHyperlinks(): void
    export function cvjs_highlightRoomImmediateStickyNotes(): void
    export function cvjs_highlightRoomImmediateNoClearDrawing(): void
    export function cvjs_activateSpaceObjectModal_Id(): void
    export function cvjs_activateSpaceObjectModal_Node(): void
    export function cvjs_mysimple_encode(): void
    export function cvjs_setLicenseKeyPath(licensePath :string): void
    export function cvjs_setLicenseKeyDirect(licensekey :string): void
    export function cvjs_checkLicensePreThenLoad(): void
    export function cvjs_checkLicense(): void
    export function cvjs_LayerListSpaceObject(): void
    export function cvjs_LayerListSpaceClick(): void
    export function cvjs_LayerTypeSpaceClick(): void
    export function cvjs_generateShareFileDrawingList(): void
    export function cvjs_buildShareFileDrawingSelector(): void
    export function cvjs_setQRCodeInsertion(): void
    export function cvjs_setLoadMultipleRedlinesStickyNotes(): void
    export function cvjs_idObjectClicked(): void
    export function cvjs_IdObjectClicked(): void
    export function cvjs_NameObjectClicked(): void
    export function cvjs_NodeObjectClicked(): void
    export function cvjs_StickyNoteClicked(): void
    export function cvjs_resizeWindow_3D(): void
    export function cvjs_hidePop(): void
    export function cvjs_redrawPop(): void
    export function cvjs_pick_space(): void
    export function cvjs_zoomHere(): void      // make zoomHere use the local version 6.4.31
    export function cvjs_zoomHere_ObjectId(): void
    export function cvjs_zoomHere_ObjectIdDiv(rmid :string, factor :number, floorplan_div :string): void
    export function cvjs_zoomHere_Factor(): void
    export function cvjs_zoomHere_Handle(): void
    export function cvjs_directDownloadStickyNotesRedlines(): void
    export function cvjs_clickElem(): void
    export function cvjs_directUploadStickyNotesRedlines(): void
    export function cvjs_change_datamaps(): void
    export function cvjs_hide_image_note(): void
    export function cvjs_delete_image(): void
    export function cvjs_setGlobalSpaceImageObjectScaleFactor(): void
    export function cvjs_setDgnWorkSpace(): void
    export function cvjs_setDgnWorkSpaceServerPath(): void
    export function cvjs_addSingleSpaceObject(): void
    export function cvjs_ObjectBoundingBox_ScreenCoord(): void
    export function cvjs_highlightSpaceObjectDirect(): void
    export function cvjs_clearHighlightSpaceObjectDirect(): void
    export function cvjs_clearAllHighlightSpaceObjectDirect(): void
    export function cvjs_modifySpaceObjectDirectXY(): void
    export function cvjs_coreModifySpaceObjectDirectXY(): void
    export function cvjs_moveSpaceObjectDirectXY(): void
    export function cvjs_getSpaceObjectDirectXYCoord(): void
    export function cvjs_deleteSpaceObjectDirectXY(): void
    export function cvjs_allSpaceObjectsOn(): void
    export function cvjs_allSpaceObjectsOff(): void
    export function cvjs_setSpaceObjectsDefaultLayer(floorplan_div :string, layerName :string): void
    export function cvjs_getSpaceObjectDefaultLayer(): void
    export function cvjs_getLayerForSpaceObject(): void
    export function cvjs_getLayerOnSpaceObject(): void
    export function cvjs_setSpaceObjectOnLayer(): void
    export function cvjs_setSpaceObjectOnOff(): void
    export function cvjs_returnAllSpaceObjectsOnLayer(): any
    export function cvjs_spaceObjectLayerOnOff(): void
    export function cvjs_returnActiveSpaceObjects(): any
    export function cvjs_returnSpaceObjectClicked(): any
    export function cvjs_returnAllSpaceObjects(): any
    export function cvjs_returnSpaceObjectID(spaceID : string): any
    export function cvjs_setSpaceObjectDirect(): void
    export function cvjs_changeSpaceObjectLayer(): void
    export function cvjs_changeSpaceObjectLinkStatus(): void
    export function cvjs_changeSpaceObjectName(): void
    export function cvjs_changeSpaceObjectType(): void
    export function cvjs_changeSpaceObjectID(): void
    export function cvjs_clearAllHighlightHandleObjectStyles(): void
    export function cvjs_removeSingleHighlightHandleObjectStyles(): void
    export function cvjs_HighlightHandleObjectStyles(): void
    export function cvjs_mouseenter_handleObjectStyles(hexColor :string, lineWeightFactor :number, opacity :number, tooltip :boolean, id :string, handle :string, customTooltip :string): void
    export function cvjs_convertOrgToHex(): void
    export function cvjs_rgbToHex(): void
    export function cvjs_getTextOnId( id : string): string
    export function cvjs_mouseout_handleObjectStyles(id :string, handle :string): void
    export function cvjs_highlightSpace(rmid :string, roomstyle :any): void
    export function cvjs_clearSpaceLayer(): void
    export function cvjs_hatchSpace(rmid :string, graphicalPattern :string, colorHex :string, fillOpacity :float): void
    export function cvjs_clearAllCustomTooltips(): void
    export function cvjs_removeSelectedAndReturnOriginalStyle(): void
    export function cvjs_returnOriginalStyleAndRemoveSelected(rmid :string, mySpaceArray :Array): any
    export function cvjs_returnIsSpaceMultipleSelected(rmid :string, spaceArray :Array): boolean
    export function cvjs_addSelectedToOriginalStyles(): void
    export function cvjs_returnSelectedOriginalStyles(rmid: string): any
    export function cvjs_currentSpaceSettings(): void
    export function cvjs_initMultiSelect(): void
    export function cvjs_exitMultiSelect(): void
	export function cvjs_getLengthOfSVGPath(): void
	export function cvjs_emptyMainCanvasInAngular(): void
    export function cvjs_emptyMainCanvas(): void
    export function cvjs_setMultiSelect(multiSelect :boolean): void
    export function cvjs_getMultiSelect(): boolean
    export function cvjs_hideOnlyPop(): void
    export function cvjs_executeCustomCanvasMethod_drag(generic_start_method :any, generic_stop_method :any, generic_move_method :any, generic_init_method :any): void
    export function cvjs_executeCustomCanvasMethod_nodrag(generic_mousemove_method :any, generic_mousedown_method :any, generic_mouseup_method :any,generic_dblclick_method :any, generic_init_method :any): void
    export function cvjs_executeCustomCanvasMethod_click(generic_mousemove_method :any, generic_mousedown_method :any, generic_mouseup_method :any,generic_dblclick_method :any, generic_init_method :any): void
    export function cvjs_customCanvasMethod_globalScale(): void
    export function cvjs_SVG_x( x :number): number
    export function cvjs_SVG_y( y :number): number
    export function cvjs_rect_doOverlap(l1_x :number, l1_y :number, r1_x :number, r1_y :number, l2_x :number, l2_y :number, r2_x :number, r2_y :number): boolean
    export function cvjs_getSpaceObjectBoundingBox(id :string): any
    export function cvjs_addVqRoomsGraphics_newNode(): void
    export function cvjs_createSpaceObjectGroup(): void
    export function cvjs_addGraphicsToSpaceObjectGroup(): void
    export function cvjs_addObjectToSpaceObjectGroup(): void
    export function cvjs_makeGraphicsObjectOnCanvas(objectType :string, graphicsObject :any): any
    export function cvjs_removeCustomCanvasMethod(): void
	export function cvjs_setLastObj(space :string): void
	export function cvjs_sendCustomCanvasToFront(): void
	export function cvjs_sendCustomCanvasToBack(): void
	export function cvjs_makeTextObjectOnCanvas(): void
    export function cvjs_setImageSpaceObjectParameters(): void
    export function cvjs_getSpaceObjectNodeList(): void
    export function cvjs_hideObjectInSpaceObjectGroup(): void
    export function cvjs_showObjectInSpaceObjectGroup(): void
    export function cvjs_showOnlyObjectInSpaceObjectGroup(): void 
    export function cvjs_showOnlyObjectInAllSpaceObjectGroups(): void
	export function cvjs_setDisableClickDrag(flag :boolean): void
    export function cvjs_setInteractiveZoomWidthAdjustment(): void
    export function cvjs_adjustMinimumLineThickness_Value(): void
	export function cvjs_setCallbackMethod(callbackMethodName :string, callbackMethod: any): void
	export function cvjs_AddTextOnSpaceObject(txtLayer :string, Id :string, leftScale :number, textStringArr :any, textStyleArr :any, scaleTextArr :any, hexColorTextArr :any, clipping :boolean, centering :boolean): void
	export function cvjs_setHandlers_FrontEnd(): void
	export function cvjs_setHandleObjectProcessing(): void
	export function cvjs_HighlightHandle(): void
    export function cvjs_setLayerColor(layerName :string, layerHexColor:string): void
    export function cvjs_LoadDrawing_SVG_string(): void
	export function cvjs_searchTextNext(): void
	export function cvjs_setLeafletJS(): void
    export function cvjs_handleObjectsParceBlocks(flag :boolean): void
    export function cvjs_handleObjectsParceTextOnly(flag :boolean): void
    export function cvjs_processHandleObjects(): void
	export function cvjs_LoadTopIconMenuXML_preconfigured(): void
    export function cvjs_overwritePDFOutputParameter(): void
    export function cvjs_regenerateTopIconMenuXML(): void
    export function cvjs_DisplayCoordinatesMenu(): void
    export function cvjs_setAllServerURLsLocation(): void
    export function cvjs_setReturnPathController(): void
    export function cvjs_setAllServerPaths_and_Handlers(ServerBackEndUrl :string, ServerUrl :string, ServerLocation :string, handlerType :string, frontEndType :string, floorplan_div :string): void
    export function cvjs_removeHandleFunc_Generic(): void
    export function cvjs_drawRedlineSingleLine(): void
    export function setllccktrace(): void
    export function cvjs_spaceObjectClickHandlerControlID(): void
    export function cvjs_spaceObjectClickHandlerControlAll(): void
    export function cvjs_addSpaceObject(): void
    export function cvjs_addLayeredSpaceObject(): void
    export function cvjs_createNewJSonSpaceObject(): void
    export function cvjsspace_createNewJSonSpaceObject(): void
    export function cvjsspace_changeSpaceObjectDisplayMode(): void
    export function cvjsspace_addHandleFunc_ResizeDragSpace(): void 
    export function cvjsspace_resizeSpaceImageObject(): void 
    export function cvjsspace_resizeSpaceObject(): void 
    export function cvjsspace_moveSpaceObject(): void 
    export function cvjsspace_rotateSpaceObject(): void 
    export function cvjsspace_displaySpaceObjectsStructure(): void 
    export function cvjsspace_deleteSpaceObject(): void 
    export function cvjsspace_clearSpaceObjects(): void 
    export function cvjsspace_addPolygonSpaceObject(): void 
    export function cvjsspace_addRectangleSpaceObject(): void 
    export function cvjsspace_addCircleSpaceObject(): void 
    export function cvjsspace_copyCircleSpaceObject(): void
    export function cvjs_replaceSpaceObjectPathWithImage(): void
    export function cvjs_loadSpaceObjectsDirect(): void
    export function cvjs_setSpaceObjectsStructureDirect(): void
    export function cvjs_setCustomConversionEndpointExtension(): void
    export function cvjs_extractSVGfromCanvas(): void
    export function cvjs_downloadObjectAsFile(): void
    export function cvjs_setSpaceObjectProcessing(): void
    export function cvjs_returnNonPreprocessedSVG(): void
    export function cvjs_restAPI_getSVGContentData(): void
    export function cvjs_setMouseTouchHandlers_SpaceObject(): void
    export function cvjs_setSpaceObjectsCustomMenu(): void
    export function cvjs_setIconImageSize(): void
    export function cvjs_changeSpaceObjectNode(): void
    export function cvjs_hideSpaceObjectID(): void
    export function cvjs_showSpaceObjectID(): void
    export function cvjs_setCADViewerInterfaceVersion(): void
    export function cvjs_getSpaceObjectByType(): void
    export function cvjs_returnAllRedlineObjects(): any
    export function cvjs_returnAllStickyNoteObjects(): void
    export function cvjs_setAllRedlineStickyNoteObjects(jsonObject :any): void
    export function cvjs_setAllRedlineObjects(): void
    export function cvjs_setAllStickyNoteObjects(): void
    export function cvjs_returnAllRedlineStickyNoteObjects(): any
    export function cvjs_setQtipZindex(): void
    export function cvjs_setQtipLocation(): void
    export function cvjs_changeSpaceFixedLocation(): void
} 