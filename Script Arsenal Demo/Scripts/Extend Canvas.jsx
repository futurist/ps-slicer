/*
This script is a part of "Script Arsenal" kit
by Andrei Doubrovski
www.Script-Arsenal.com
*/ 
///////////////////////////////////////////////////////////
function extendCanvas () {
// ===	
if (app.documents.length==0){
return
}
// ===
var thisScript=File($.fileName);
var scriptsFolder=new Folder(thisScript.parent)
var requiredFolder=new Folder(scriptsFolder.parent+"/Required");
var iniFolder=new Folder(requiredFolder+"/ini" );
iniFolder.create();
var iniFile=new File(iniFolder + "/Extend Canvas.ini");
//=======================
var activeLanguage ="EN";
var epFont = "Arial";
var epSize=11;

//====================================================
var options=[ activeLanguage, epFont , epSize ];
var optionsFile =new File(iniFolder + "/config.ini");
//===
if(optionsFile.exists){
optionsFile.open ("r");
options = optionsFile.readln().split(",");
if ( options[0] ){
activeLanguage = options[0];
}
if ( options[1] ){
epFont=options[1];
}
if ( options[2] ){
epSize=parseInt(options[2]);
}
optionsFile.close(); 
}
if(!optionsFile.exists){
optionsFile.open("w");
optionsFile.write ( options );
optionsFile.close(); 
};
//===================================================
myFont= ScriptUI.newFont ( epFont , "REGULAR", epSize ); 

//====================================================
var langFolder=new Folder(requiredFolder+"/strings/" + activeLanguage );
var langFile=new File(langFolder + "/Extend Canvas.txt" );
var strings=[];
////////////////////////////
if(langFile.exists){
langFile.open ("r");
strings = langFile.readln().split(" ~ ");
langFile.close(); 
};

//===============
var doc = app.activeDocument;
var dlgLoc = [300,200];
var dlgIni=[];
////  Default border widths ( pixels )
var topBorder =5;
var leftBorder =5;
var rightBorder =5;
var bottomBorder =5;
//===
try
{
if(iniFile.exists){
iniFile.open ("r");
dlgIni = iniFile.readln().split(",");
dlgLoc = [dlgIni[0], dlgIni[1]]
topBorder =dlgIni[2];
leftBorder =dlgIni[3];
rightBorder =dlgIni[4];
bottomBorder =dlgIni[5];
iniFile.close(); 
}
if(!iniFile.exists){
iniFile.open("w");
iniFile.write ( dlgLoc );
iniFile.close(); 
}
}
catch (e)
{
};
//========
if ( !dlgIni[2] ) {
topBorder = dlgIni[2] =5;
}
if ( !dlgIni[3] ) {
leftBorder = dlgIni[3] =5;
}
if ( !dlgIni[4] ) {
rightBorder = dlgIni[4] =5;
}
if ( !dlgIni[5] ) {
bottomBorder = dlgIni[5] =5;
}
//==========================
var dlg = new Window("dialog", strings[1] );

dlg.sizePnl = dlg.add("panel", undefined );
dlg.sizePnl.size = [260, 220];
dlg.sizePnl.orientation = "column";
dlg.sizePnl.alignChildren = ["center", "center"];
//==========================
topGroup = dlg.sizePnl.add ("group", undefined); 
topGroup.orientation = "row";
topGroup.alignChildren = ["center", "top"];

topField = topGroup.add( "edittext",undefined, topBorder );
topField.preferredSize = [40, 20];
topLabel = topGroup.add("statictext",undefined, "px" );

topField.onChanging = function () {
topBorder = dlgIni[2] = parseInt( topField.text );
};
//======================
centerGroup = dlg.sizePnl.add ("group", undefined); 
centerGroup.orientation = "row";
centerGroup.alignChildren = ["center", "center"];
//==========================
leftGroup = centerGroup.add ("group", undefined); 
leftGroup.orientation = "row";
leftGroup.alignChildren = ["right", "center"];
leftGroup.margins = [ 0, 50, 40, 50 ];

leftField = leftGroup.add( "edittext",undefined, leftBorder );
leftField.preferredSize = [40, 20];
leftLabel = leftGroup.add("statictext",undefined, "px" );

leftField.onChanging = function () {
leftBorder = dlgIni[3] = parseInt( leftField.text );
};
//==========================
rightGroup = centerGroup.add ("group", undefined); 
rightGroup.orientation = "row";
rightGroup.alignChildren = ["right", "center"];
rightGroup.margins = [ 40, 50, 0, 50 ];

rightField = rightGroup.add( "edittext",undefined, rightBorder );
rightField.preferredSize = [40, 20];
rightLabel = rightGroup.add("statictext",undefined, "px" );

rightField.onChanging = function () {
rightBorder = dlgIni[4] = parseInt( rightField.text );
};
//==========================
bottomGroup = dlg.sizePnl.add ("group", undefined); 
bottomGroup.orientation = "row";
bottomGroup.alignChildren = ["center", "bottom"];

bottomField = bottomGroup.add( "edittext",undefined, bottomBorder );
bottomField.preferredSize = [40, 20];
bottomLabel = bottomGroup.add("statictext",undefined, "px" );

bottomField.onChanging = function () {
bottomBorder = dlgIni[5] = parseInt( bottomField.text );
};
//======================
////////////////////////////
processAll = dlg.add ("checkbox", undefined, strings[6] );
//===
g = processAll.graphics;
g.font = myFont;
//===
if ( app.documents.length<2 ) {
	processAll.enabled=false;
};	
//////////////
function setBorder () {
// =======================================================
var idCnvS = charIDToTypeID( "CnvS" );
    var desc19 = new ActionDescriptor();
    var idRltv = charIDToTypeID( "Rltv" );
    desc19.putBoolean( idRltv, true );
    var idHght = charIDToTypeID( "Hght" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc19.putUnitDouble( idHght, idPxl, topBorder );
    var idVrtc = charIDToTypeID( "Vrtc" );
    var idVrtL = charIDToTypeID( "VrtL" );
    var idBttm = charIDToTypeID( "Bttm" );
    desc19.putEnumerated( idVrtc, idVrtL, idBttm );
    var idcanvasExtensionColorType = stringIDToTypeID( "canvasExtensionColorType" );
    var idcanvasExtensionColorType = stringIDToTypeID( "canvasExtensionColorType" );
    var idBckC = charIDToTypeID( "BckC" );
    desc19.putEnumerated( idcanvasExtensionColorType, idcanvasExtensionColorType, idBckC );
executeAction( idCnvS, desc19, DialogModes.NO );
// =======================================================
var idCnvS = charIDToTypeID( "CnvS" );
    var desc20 = new ActionDescriptor();
    var idRltv = charIDToTypeID( "Rltv" );
    desc20.putBoolean( idRltv, true );
    var idWdth = charIDToTypeID( "Wdth" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc20.putUnitDouble( idWdth, idPxl, leftBorder );
    var idHrzn = charIDToTypeID( "Hrzn" );
    var idHrzL = charIDToTypeID( "HrzL" );
    var idRght = charIDToTypeID( "Rght" );
    desc20.putEnumerated( idHrzn, idHrzL, idRght );
    var idcanvasExtensionColorType = stringIDToTypeID( "canvasExtensionColorType" );
    var idcanvasExtensionColorType = stringIDToTypeID( "canvasExtensionColorType" );
    var idBckC = charIDToTypeID( "BckC" );
    desc20.putEnumerated( idcanvasExtensionColorType, idcanvasExtensionColorType, idBckC );
executeAction( idCnvS, desc20, DialogModes.NO );
// =======================================================
var idCnvS = charIDToTypeID( "CnvS" );
    var desc21 = new ActionDescriptor();
    var idRltv = charIDToTypeID( "Rltv" );
    desc21.putBoolean( idRltv, true );
    var idWdth = charIDToTypeID( "Wdth" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc21.putUnitDouble( idWdth, idPxl, rightBorder);
    var idHrzn = charIDToTypeID( "Hrzn" );
    var idHrzL = charIDToTypeID( "HrzL" );
    var idLeft = charIDToTypeID( "Left" );
    desc21.putEnumerated( idHrzn, idHrzL, idLeft );
    var idcanvasExtensionColorType = stringIDToTypeID( "canvasExtensionColorType" );
    var idcanvasExtensionColorType = stringIDToTypeID( "canvasExtensionColorType" );
    var idBckC = charIDToTypeID( "BckC" );
    desc21.putEnumerated( idcanvasExtensionColorType, idcanvasExtensionColorType, idBckC );
executeAction( idCnvS, desc21, DialogModes.NO );
// =======================================================
var idCnvS = charIDToTypeID( "CnvS" );
    var desc22 = new ActionDescriptor();
    var idRltv = charIDToTypeID( "Rltv" );
    desc22.putBoolean( idRltv, true );
    var idHght = charIDToTypeID( "Hght" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc22.putUnitDouble( idHght, idPxl, bottomBorder );
    var idVrtc = charIDToTypeID( "Vrtc" );
    var idVrtL = charIDToTypeID( "VrtL" );
    var idTop = charIDToTypeID( "Top " );
    desc22.putEnumerated( idVrtc, idVrtL, idTop );
    var idcanvasExtensionColorType = stringIDToTypeID( "canvasExtensionColorType" );
    var idcanvasExtensionColorType = stringIDToTypeID( "canvasExtensionColorType" );
    var idBckC = charIDToTypeID( "BckC" );
    desc22.putEnumerated( idcanvasExtensionColorType, idcanvasExtensionColorType, idBckC );
executeAction( idCnvS, desc22, DialogModes.NO );
}

/////////////////////////////////////////
/////////////////////  Buttons:
dlg.btnGroup = dlg.add("group", undefined);
dlg.btnGroup.orientation = "row";
dlg.btnGroup.alignChildren = ["center", "center"];

/////////// "Refresh" button
var isMac=false;
try
{
if ($.os.match(/macintosh/i).toString()=="Macintosh"){
isMac=true;
}
}
catch (e)
{
}; 
// ===
if(isMac==false){
var refreshPath = new File (requiredFolder+"/icons/refresh.png");
var refreshBtn = dlg.btnGroup.add("iconbutton", [0,0,24,24], refreshPath, {style:"toolbutton"})
refreshBtn.helpTip=strings[2];
//===
refreshBtn.onClick = function() { 
app.refresh()
}
};

/////////// "Cancel" button
closeGroup = dlg.btnGroup.add("group", undefined);
closeGroup.orientation = "row";
closeGroup.margins = [10, 0, 10, 0];
//===
btnCncl = closeGroup.add("button", undefined, strings[3] );
//===
g = btnCncl.graphics;
g.font = myFont;
//===
btnCncl.onClick = function() { 
	dlg.close ();
};
/////////// "Run" button
btnRun = closeGroup.add("button", undefined, strings[4], {name:"ok"} );
//===
g = btnRun.graphics;
g.font = myFont;
//===
btnRun.onClick = function() { 
closeDlg();
if ( processAll.value == true ) {
//=== Process all open documents:
for (i=0; i<documents.length; i++ ) {
		app.activeDocument = app.documents[i];
		setBorder();
}
app.activeDocument = doc;
} else {
setBorder();
}
};

/////////// "Save and Close" button
var saveAndClosePath=new File(requiredFolder+"/icons/saveAndClose.png");
saveBtn = dlg.btnGroup.add("iconbutton", [0,0,24,24], saveAndClosePath, {style:"toolbutton"})
saveBtn.helpTip=strings[5];
//===
saveBtn.onClick = function() { 
closeDlg ();
};

///////////////////////////////////
try
{
dlg.location = dlgLoc;
}
catch (e)
{
};
//=====
dlg.show();
////////////////////////////////
function closeDlg () {
var newLoc = dlg.location;
if ( newLoc[0] < 10 ) {
	newLoc[0] =10;
	}
if ( newLoc[1] < 30 ) {
	newLoc[1] = 30;
	}
if ( newLoc[0] < 100 ) {
	newLoc[0] = "0"+newLoc[0];
	}
if ( newLoc[1] < 100 ) {
	newLoc[1] = "0"+newLoc[1];
	}
dlgIni[0]=newLoc[0];
dlgIni[1]=newLoc[1];
iniFile.open ("w");
iniFile.write ( dlgIni );
iniFile.close(); 
// =======
dlg.close(0)
}
// =======
};	
////////////////////////////////////
extendCanvas ();
////////////////////////////////////