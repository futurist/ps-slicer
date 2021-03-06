/*
Script Arsenal v. 2.0 (demo)
by Andrei Doubrovski
www.Script-Arsenal.com
*/ 
/////////////////////////////
#target photoshop;
var thisScript=File($.fileName);
var topFolder=new Folder(thisScript.parent);
var scriptsFolder=new Folder(topFolder+"/Scripts");
var requiredFolder=new Folder(topFolder+"/Required")
var iniFolder=new Folder (requiredFolder+"/ini" );
iniFolder.create();
//===================================================
var activeLanguage="EN";
var epFont="Arial";
var epSize=11;
//====================================================
var options=[ ];
var optionsFile=new File(iniFolder+"/config.ini");
//=============
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
myFont= ScriptUI.newFont(epFont,"REGULAR",epSize); 
//====================================================
var langFolder=new Folder(requiredFolder+"/strings/"+activeLanguage);
//==============
var langFile=new File(langFolder+"/scriptArsenal.txt");
var commonStringsFile=new File(langFolder+"/commonStrings.txt");
var strings=[];
var commonStrings=[];
////////////////////////////
if(langFile.exists){
langFile.open ("r");
strings = langFile.readln().split(" ~ ");
langFile.close(); 
}
if(commonStringsFile.exists){
commonStringsFile.open ("r");
commonStrings=commonStringsFile.readln().split(" ~ ");
commonStringsFile.close(); 
}
//============================
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
// ===========================
var psFolder=Folder.startup;
if (isMac==true){
psFolder= Folder.appPackage.parent;
};
//============================
var iniFile = new File (iniFolder + "/scriptArsenal.ini")
var refreshPath = new File (requiredFolder+"/icons/refresh.png");
var scrRunPath = new File (requiredFolder+"/icons/scriptRun.png");
var scrInfoPath = new File (requiredFolder+"/icons/scriptInfo.png");
var scrAddPath = new File (requiredFolder+"/icons/scriptAdd.png");
var addToMenuPath = new File (requiredFolder+"/icons/addToMenu.png");
var scrRenamePath = new File (requiredFolder+"/icons/scriptRename.png");
var makeThumbnailPath = new File (requiredFolder+"/icons/makeScriptThumb.png");
var scrDeletePath = new File (requiredFolder+"/icons/scriptDelete.png");
var scrCategoryPath = new File (requiredFolder+"/icons/scriptCategory.png");
var optionsPath = new File (requiredFolder+"/icons/globalOptions.png");
//======
var dlgIni=[];
var dlgLoc=[300,200];
var currFolder=0;
var scrptsArray=[];
var localizeBool=1;
var suspHistBool=1;
//=====
try
{
if(iniFile.exists){
iniFile.open ("r");
dlgIni = iniFile.readln().split(",");
dlgLoc = [dlgIni[0], dlgIni[1]]
if ( dlgIni[2] ) {
currFolder=dlgIni[2];
}
if ( dlgIni[3] ) {
localizeBool=parseInt(dlgIni[3]);
}
if ( dlgIni[4] ) {
suspHistBool=parseInt(dlgIni[4]);
}
iniFile.close(); 
}
if(!iniFile.exists){
dlgIni=[dlgLoc[0],dlgLoc[1],currFolder,localizeBool,suspHistBool];
iniFile.open("w");
iniFile.write (dlgIni);
iniFile.close(); 
}
}
catch (e)
{
};
////////////////////////
var rootFolder = scriptsFolder;
var scrFolder=rootFolder;
var fList = Folder(scrFolder).getFiles();
//========
var dlg = new Window ("dialog", strings[1] );
dlg.alignChildren=["left", "center"];
if (isMac==true){
dlg.alignChildren=["center", "center"];
}
dlg.spacing=10;
dlg.margins=[16, 12, 20, 16];
//=======================
mainGroup=dlg.add("group", undefined );
mainGroup.orientation="row";
mainGroup.alignChildren=["left", "top"];
//============================
listPnl = mainGroup.add("panel", undefined );
listPnl.margins=8;
listPnl.alignChildren=["left", "center"];
//==========================
folderMenu = listPnl.add("dropdownlist", undefined );
folderMenu.preferredSize = [220, 22];
//===
g = folderMenu.graphics;
g.font = myFont;
//================
var humanBrowse = true;
// ===
item = folderMenu.add ("item", "  <  Demo  >  " );
item.selected=true;
folderMenu.enabled=false;
//================================
scrList = listPnl.add("listbox", undefined, "method");
scrList.preferredSize = [220, 360];
//===
g = scrList.graphics;
g.font = myFont;
//================
function populateScripts () {
fList = Folder(scrFolder).getFiles();
scrptsArray = [];
scrList.removeAll();
for (var i=0,len=fList.length; i<len; i++) {
var filename = File.decode(fList[i].name);
var array = filename.split(".");
var scriptExt=array[array.length-1].toLowerCase();
if (scriptExt=="jsx" || scriptExt=="js"){
scrptsArray.push(filename);
var scriptName = array[0];
if ( array.length > 2 ) {
	for ( j=1; j<array.length-1; j++ ) {
	scriptName = scriptName + "." + array[j];
	}
}
var displayName = scriptName
//====  Localizing script names
if ( localizeBool == 1) {
var scrStringsFile= new File ( langFolder+"/"+scriptName+".txt")
scrStringsFile.open ("r");
var readStrings = scrStringsFile.readln().split(" ~ ");
var localName=readStrings[1]
scrStringsFile.close(); 
if ( localName ) {
	displayName = localName
	}
};
// ===
item = scrList.add ("item", "" + displayName );
// ===
var scriptThumb = new File (requiredFolder+"/scriptThumbs/"+scriptName+".png");
if ( !scriptThumb.exists ) {
scriptThumb = new File (requiredFolder+"/scriptThumbs/aScript.png");
}
if ( scriptThumb.exists ) {
item.image = scriptThumb;
}
// ===
}
}
// ===
if (parseInt(version)==12){
app.refresh();
}
};
//===================
populateScripts ();

//===================
scrList.onDoubleClick = function(){
if (app.documents.length>0&&suspHistBool==1){
app.activeDocument.suspendHistory(strings[23]+": "+scrList.selection.toString(),"runScript()");
return
}else{
runScript();
}
};
// ==================
scrList.onChange = function(){
btnRun.visible=true;
btnDel.visible=true;
btnInfo.visible=true;
btnRnm.visible=true;
btnMkTh.visible=true;
addToMenuBtn.visible=true;
enableInfo();
};

////////////////////////////////////////////////
btnColumn=mainGroup.add("group", undefined );
btnColumn.orientation="column";
btnColumn.spacing = 24;
btnColumn.margins = [0, 10, 0, 0];

//====  "Run" button
btnRun = btnColumn.add("iconbutton", [0,0,24,24], scrRunPath, {style:"button"})
btnRun.helpTip=commonStrings[2];
//===
btnRun.onClick = function() { 
if (app.documents.length>0&&suspHistBool==1){
app.activeDocument.suspendHistory(strings[23]+": "+scrList.selection.toString(),"runScript()");
return
}else{
var idMk = charIDToTypeID( "Mk  " );
    var desc46 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref29 = new ActionReference();
        var idSnpS = charIDToTypeID( "SnpS" );
        ref29.putClass( idSnpS );
    desc46.putReference( idnull, ref29 );
    var idFrom = charIDToTypeID( "From" );
        var ref30 = new ActionReference();
        var idHstS = charIDToTypeID( "HstS" );
        var idCrnH = charIDToTypeID( "CrnH" );
        ref30.putProperty( idHstS, idCrnH );
    desc46.putReference( idFrom, ref30 );
executeAction( idMk, desc46, DialogModes.NO );
// ==========
runScript();
}
};

//====  "Info" button
btnInfo = btnColumn.add("iconbutton", [0,0,24,24], scrInfoPath, {style:"button"})
btnInfo.helpTip=strings[3];
//===
btnInfo.onClick = function() { 
getInfo ();
};

//====  "Add New Script" button
btnAdd = btnColumn.add("iconbutton", [0,0,24,24], scrAddPath, {style:"button"})
btnAdd.helpTip=strings[4];
//===
btnAdd.onClick = function() { 
addScript ();
};

//====  "Add to Menu" button
addToMenuBtn = btnColumn.add("iconbutton", [0,0,24,24], addToMenuPath, {style:"button"})
addToMenuBtn.helpTip=strings[26];
//===
addToMenuBtn.onClick = function() { 
addScriptToMenu();
};

//====  "Rename" button
btnRnm = btnColumn.add("iconbutton", [0,0,24,24], scrRenamePath, {style:"button"})
btnRnm.helpTip=strings[5];
//===
btnRnm.onClick = function() { 
renameScript ();
};

//====  "Make Thumbnail" button
btnMkTh = btnColumn.add("iconbutton", [0,0,24,24], makeThumbnailPath, {style:"button"})
btnMkTh.helpTip=strings[7];
//===
btnMkTh.onClick = function() { 
makeThumbnail();
};

// ===  "Delete" button
deleteGroup = btnColumn.add("group", undefined);
deleteGroup.orientation = "column";
deleteGroup.margins = [0, 20, 0, 0];
deleteGroup.spacing=40;
// ===
btnDel = deleteGroup.add("iconbutton", [0,0,24,24], scrDeletePath, {style:"button"})
btnDel.helpTip=strings[6];
// ===
btnDel.onClick = function() { 
deleteScript ();
};

//====  "Options" button:
btnOptions = deleteGroup.add("iconbutton", [0,0,24,24], optionsPath, {style:"button"})
btnOptions.helpTip=strings[24];
//===
btnOptions.onClick = function() { 
setOptions();
};

/////////////////////////////////////////
/////////////////////  Checkboxes:
chkBxGroup = listPnl.add("group", undefined);
chkBxGroup.size = [220,22];
chkBxGroup.orientation = "row";
chkBxGroup.alignChildren = ["left", "bottom"];
chkBxGroup.spacing=15;
chkBxGroup.margins=0;

/////////////////////////////////////////
/////////////////////  Buttons:
dlg.btnGroup = dlg.add("group", undefined);
dlg.btnGroup.orientation = "row";
dlg.btnGroup.alignChildren = ["left", "center"];
dlg.btnGroup.margins=[8,4,0,0];
dlg.btnGroup.spacing=50;

/////////// "Refresh" button
if(isMac==false){
var refreshBtn = dlg.btnGroup.add("iconbutton", [0,0,24,24], refreshPath, {style:"button"})
refreshBtn.helpTip=commonStrings[0];
//===
refreshBtn.onClick = function() { 
app.refresh()
}
};

/////////// "Close" button
btnClose = dlg.btnGroup.add("button", undefined, commonStrings[5], {name:"OK"} );
//===
if(parseInt(version)<12){
g=btnClose.graphics;
g.font = myFont;
}
//===
btnClose.onClick = function() { 
closeDlg();
};

/////////// "Localize" checkbox
var localBox = chkBxGroup.add("checkbox", undefined, strings[21])
//===
g =localBox.graphics;
g.font = myFont;
//===
localBox.value = localizeBool
// ===
localBox.onClick=function() { 
var currentScript=parseInt (scrList.selection);	
localizeBool = this.value+0;
populateScripts();
scrList.items[currentScript].selected=true;
};

/////////// "Suspend History" checkbox
var suspHistBox = chkBxGroup.add("checkbox", undefined, strings[22])
//===
g =suspHistBox.graphics;
g.font = myFont;
//===
suspHistBox.value = suspHistBool
// ===
suspHistBox.onClick = function() { 
suspHistBool=this.value+0;
};
// ===
if (app.documents.length==0){
suspHistBox.enabled=false;
};
// ===============
disableButtons ();
// ===============
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
dlgIni=[newLoc[0],newLoc[1],currFolder,localizeBool,suspHistBool];
iniFile.open ("w");
iniFile.write ( dlgIni );
iniFile.close(); 
//=========
dlg.close(0)
};	
/////////////////////
try
{
dlg.location = dlgLoc;
}
catch (e)
{
};
dlg.show();

////////////////////////////////////////////////////////////////
/////////  Functions:
function runScript () {
closeDlg ();
//app.refresh();
var scriptToPlay = scrFolder + "/" + scrptsArray[parseInt(scrList.selection)];
//==========
var idAdobeScriptAutomationScripts = stringIDToTypeID( "AdobeScriptAutomation Scripts" );
    var desc13 = new ActionDescriptor();
    var idjsCt = charIDToTypeID( "jsCt" );
    desc13.putPath( idjsCt, new File( scriptToPlay ) );
    var idjsMs = charIDToTypeID( "jsMs" );
    desc13.putString( idjsMs, "0" );
executeAction( idAdobeScriptAutomationScripts, desc13, DialogModes.NO );
};

// ===============
function addScript () {
var scrFile = File.openDialog ( undefined, undefined, false);
//=========
var filename = File.decode(scrFile.name);
var array = filename.split(".");
if (array[array.length-1] == "jsx" || array[array.length-1] == "js" ){
scrFile.copy ( scrFolder+"/"+filename )
	populateScripts ();
	app.refresh()
		} else {
			alert ( cleanString(strings[10]), [ strings[11] ]);
		}
//==============
disableButtons ();
};

// ===============
function deleteScript () {
var filename =scrptsArray[parseInt(scrList.selection)];
if(confirm( strings[12] + filename+ strings[13] )){ 
var scriptToDelete = new File (scrFolder + "/" + filename );
var trashFolder = new Folder ( requiredFolder+"/trash/scripts" );
trashFolder.create();
//===============
scriptToDelete.copy ( trashFolder+"/"+filename )
scriptToDelete.remove ();
populateScripts ();
disableButtons ();
app.refresh()
}
};

///////////////////////////////////////////////////////////////////
function getInfo () {
var array = scrptsArray[parseInt(scrList.selection)].split(".");
var sName = array[0];
if ( array.length > 2 ) {
	for ( j=1; j<array.length-1; j++ ) {
	scriptName += "." + array[j];
	}
}
//=========
var scrStringsFile= new File ( langFolder + "/"+sName + ".txt")
scrStringsFile.open ("r");
var readStrings = scrStringsFile.readln().split(" ~ ");
var scriptInfo=readStrings[0]
scrStringsFile.close(); 
scriptInfo=cleanString (scriptInfo)+"    ";
//=============
var infoHeader=scrList.selection.toString();
if (infoHeader!=sName){
	infoHeader+=" ("+sName+")";
	}
// ===	
var infoDlg = new Window("dialog", infoHeader );
infoDlg.orientation="column";
infoDlg.location=[dlg.location[0]-20,dlg.location[1]+27]
infoDlg.margins=[16,20, 16, 16];
infoDlg.spacing=40;
//=============
infoPnl = infoDlg.add("group", undefined );
var infoWidth=30*epSize;
infoPnl.preferredSize = [infoWidth, 60];
infoLabel = infoPnl.add("statictext",undefined, scriptInfo, {multiline:true} );
infoLabel.characters=Math.round(infoWidth/epSize*1.6);
//===
g = infoLabel.graphics;
g.font = myFont;
//=============
infoBtnGroup = infoDlg.add ("group", undefined); 
infoBtnGroup.orientation = "row";
infoBtnGroup.alignChildren = ["center", "center"];
infoBtnGroup.spacing=30;
//===============
var hlpLang="en";
if (activeLanguage=="DE"){
	hlpLang="de";
	}
if (activeLanguage=="RU"){
	hlpLang="ru";
	}
// ===
var hlpFileName=sName.toLowerCase()+".htm";
var hlpFolder=new Folder(topFolder+"/help_files/"+hlpLang);
var hlpFile=new File(hlpFolder+"/"+hlpFileName);
if (!hlpFile.exists){
hlpFileName=hlpFileName.split(" ").join("-");
hlpFile=new File(hlpFolder+"/"+hlpFileName);
}
if (!hlpFile.exists){
hlpFileName=hlpFileName.split(" ").join("_");
hlpFile=new File(hlpFolder+"/"+hlpFileName);
}
// ===
if (hlpFile.exists){
btnHlp = infoBtnGroup.add("button", undefined, strings[29] );
// ===
g = btnHlp.graphics;
g.font = myFont;
// ===
btnHlp.onClick = function() { 
	hlpFile.execute ();
	infoDlg.close ();
}
// ===
};
//===============
btnCls = infoBtnGroup.add("button", undefined, commonStrings[5], {name:"ok"} );
//===
g = btnCls.graphics;
g.font = myFont;
//===
btnCls.onClick = function() { 
	infoDlg.close ();
};
//===============
infoDlg.show();
};
// ===============
function cleanString ( txt ) {
txt=txt.replace(/&&/g, '"')
//===============
stringArray=txt.split("**");
if ( stringArray.length>1 ) {
txt="\r";
for ( i=0; i<stringArray.length; i++ ) {
txt=txt+stringArray[i]+"\r";
	}
}
return ( txt )
};
//====================
function cleanSpaces ( txt ) {
txt = txt.split(' ').join('');
txt = txt.split('_').join('');
txt = txt.split('&').join('and');
return txt.split('.').join('');
};	
//====================
function cleanAmpers ( txt ) {
txt = txt.split('&').join('and');
return txt.split('.').join('');
};	

// ===============
function disableButtons () {
btnRun.visible=false;
btnRnm.visible=false;
addToMenuBtn.visible=false;
btnMkTh.visible=false;
btnInfo.visible=false;
btnDel.visible=false;
};
// ===============
function enableInfo () {
var array = scrptsArray[parseInt(scrList.selection)].split(".");
var sName = array[0];
if ( array.length > 2 ) {
	for ( j=1; j<array.length-1; j++ ) {
	scriptName += "." + array[j];
	}
}
//=========
var scrStringsFile= new File ( langFolder + "/"+sName + ".txt")
if (scrStringsFile.exists) {
scrStringsFile.open ("r");
var readStrings = scrStringsFile.readln().split(" ~ ");
var scriptInfo=readStrings[0];
	if ( scriptInfo ) {
	btnInfo.visible=true;
		}else{
	btnInfo.visible=false;
	}
	}else{
	btnInfo.visible=false;
	}
};

// ===============
function renameScript () {
var scriptToRename =new File ( scrFolder + "/" + scrptsArray[parseInt(scrList.selection)] );
var sName = scrList.selection.toString();
var array = scrptsArray[parseInt(scrList.selection)].split(".");
//var sExt = array[array.length-1] ;
var newName = sName;
//==============	
var scriptName = array[0];
if ( array.length > 2 ) {
	for ( j=1; j<array.length-1; j++ ) {
	scriptName += "." + array[j];
	}
}
//=============================
var rnmDlg = new Window ("dialog", strings[14] );
rnmDlg.location=[dlg.location[0]+12,dlg.location[1]+27]
rnmDlg.orientation = "column";
rnmDlg.margins=[16,20, 16, 16];
rnmDlg.spacing=20;
//===
var nameField = rnmDlg.add("edittext", undefined, sName );
nameField.preferredSize = [170, 24];
//===
g = nameField.graphics;
g.font = myFont;
//===
rnmDlg.btnGroup = rnmDlg.add("group", undefined);
rnmDlg.btnGroup.preferredSize = {width:180, height:24};
rnmDlg.btnGroup.orientation = "row";
rnmDlg.btnGroup.alignChildren = ["center", "bottom"];
//==============
cnclBtn = rnmDlg.btnGroup.add("button", undefined , commonStrings[4] );
cnclBtn.onClick = function() { 
rnmDlg.close(0); 
app.refresh();
};
//=================
okBtn = rnmDlg.btnGroup.add("button", undefined , "OK" );
okBtn.onClick = function() { 
//===
var newName=nameField.text;
// ============================
var scrStringsFile= new File ( langFolder + "/"+scriptName + ".txt")
if ( scrStringsFile.exists ) {
scrStringsFile.open ("r");
var readStrings = scrStringsFile.readln().split(" ~ ");
scrStringsFile.close(); 
var readInfo = newName
if ( readStrings[0] ) {
	readInfo = readStrings[0]
	}
var newStrings = [ readInfo, newName ]
for ( i=2; i<readStrings.length; i++ ) {
newStrings.push (readStrings[i])
}
}
if ( !scrStringsFile.exists ) {
var newStrings = [ newName, newName ]
}
// ============
scrStringsFile.open ("w");
scrStringsFile.write ( newStrings.join (" ~ ") );
scrStringsFile.close(); 
// ============
rnmDlg.close();
populateScripts ();
disableButtons ();
app.refresh()
}
//=============
rnmDlg.show();
};

// ===============
function makeThumbnail(){
if (scrList.selection&&app.documents.length>0) {	
var scriptToTh=File(scrptsArray[parseInt(scrList.selection)]);
var array = scriptToTh.name.split(".");
var thName = array[0];
if ( array.length > 2 ) {
	for ( j=1; j<array.length-1; j++ ) {
	thName=thName+"."+array[j];
}
}
// ===
var newPng = new File (requiredFolder+"/scriptThumbs/"+thName+".png");
//===============================
var doc=app.activeDocument;
//===================================
var oldUnits=app.preferences.rulerUnits;
app.preferences.rulerUnits=Units.PIXELS;
// ===
var w=doc.width;
var h=doc.height;
// ===
if (w==h==22){
app.preferences.rulerUnits = oldUnits;
//===================================
if ( newPng.exists ) {
if (confirm ( strings[8]) ){
try
{
var idsave = charIDToTypeID( "save" );
    var desc3 = new ActionDescriptor();
    var idAs = charIDToTypeID( "As  " );
        var desc4 = new ActionDescriptor();
        var idPGIT = charIDToTypeID( "PGIT" );
        var idPGIT = charIDToTypeID( "PGIT" );
        var idPGIN = charIDToTypeID( "PGIN" );
        desc4.putEnumerated( idPGIT, idPGIT, idPGIN );
        var idPNGf = charIDToTypeID( "PNGf" );
        var idPNGf = charIDToTypeID( "PNGf" );
        var idPGAd = charIDToTypeID( "PGAd" );
        desc4.putEnumerated( idPNGf, idPNGf, idPGAd );
    var idPNGF = charIDToTypeID( "PNGF" );
    desc3.putObject( idAs, idPNGF, desc4 );
    var idIn = charIDToTypeID( "In  " );
    desc3.putPath( idIn, newPng );
executeAction( idsave, desc3, DialogModes.NO );
}
catch (e)
{
}
// ===
}
} else {
var idsave = charIDToTypeID( "save" );
    var desc3 = new ActionDescriptor();
    var idAs = charIDToTypeID( "As  " );
        var desc4 = new ActionDescriptor();
        var idPGIT = charIDToTypeID( "PGIT" );
        var idPGIT = charIDToTypeID( "PGIT" );
        var idPGIN = charIDToTypeID( "PGIN" );
        desc4.putEnumerated( idPGIT, idPGIT, idPGIN );
        var idPNGf = charIDToTypeID( "PNGf" );
        var idPNGf = charIDToTypeID( "PNGf" );
        var idPGAd = charIDToTypeID( "PGAd" );
        desc4.putEnumerated( idPNGf, idPNGf, idPGAd );
    var idPNGF = charIDToTypeID( "PNGF" );
    desc3.putObject( idAs, idPNGF, desc4 );
    var idIn = charIDToTypeID( "In  " );
    desc3.putPath( idIn, newPng );
executeAction( idsave, desc3, DialogModes.NO );
}
// ===
return
// ===
}else{
// ===
var snapName="Snapshot "+(Math.random()*1000000);
// ===
var idMk = charIDToTypeID( "Mk  " );
    var desc60 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref56 = new ActionReference();
        var idSnpS = charIDToTypeID( "SnpS" );
        ref56.putClass( idSnpS );
    desc60.putReference( idnull, ref56 );
    var idFrom = charIDToTypeID( "From" );
        var ref57 = new ActionReference();
        var idHstS = charIDToTypeID( "HstS" );
        var idCrnH = charIDToTypeID( "CrnH" );
        ref57.putProperty( idHstS, idCrnH );
    desc60.putReference( idFrom, ref57 );
    var idNm = charIDToTypeID( "Nm  " );
    desc60.putString( idNm, snapName );
    var idUsng = charIDToTypeID( "Usng" );
    var idHstS = charIDToTypeID( "HstS" );
    var idFllD = charIDToTypeID( "FllD" );
    desc60.putEnumerated( idUsng, idHstS, idFllD );
executeAction( idMk, desc60, DialogModes.NO );
// ===
if (w!=h){
// ===
var minSide=Math.min(w,h);
doc.resizeCanvas(minSide,minSide,AnchorPosition.MIDDLECENTER);
}
//==================================
doc.resizeImage(22,22,72,ResampleMethod.BICUBICSHARPER);
//==================================
app.preferences.rulerUnits = oldUnits;
//====================================
if ( newPng.exists ) {
if (confirm ( strings[8]) ){
try
{
var idsave = charIDToTypeID( "save" );
    var desc3 = new ActionDescriptor();
    var idAs = charIDToTypeID( "As  " );
        var desc4 = new ActionDescriptor();
        var idPGIT = charIDToTypeID( "PGIT" );
        var idPGIT = charIDToTypeID( "PGIT" );
        var idPGIN = charIDToTypeID( "PGIN" );
        desc4.putEnumerated( idPGIT, idPGIT, idPGIN );
        var idPNGf = charIDToTypeID( "PNGf" );
        var idPNGf = charIDToTypeID( "PNGf" );
        var idPGAd = charIDToTypeID( "PGAd" );
        desc4.putEnumerated( idPNGf, idPNGf, idPGAd );
    var idPNGF = charIDToTypeID( "PNGF" );
    desc3.putObject( idAs, idPNGF, desc4 );
    var idIn = charIDToTypeID( "In  " );
    desc3.putPath( idIn, newPng );
executeAction( idsave, desc3, DialogModes.NO );
}
catch (e)
{
};
// ===
}
} else {
var idsave = charIDToTypeID( "save" );
    var desc3 = new ActionDescriptor();
    var idAs = charIDToTypeID( "As  " );
        var desc4 = new ActionDescriptor();
        var idPGIT = charIDToTypeID( "PGIT" );
        var idPGIT = charIDToTypeID( "PGIT" );
        var idPGIN = charIDToTypeID( "PGIN" );
        desc4.putEnumerated( idPGIT, idPGIT, idPGIN );
        var idPNGf = charIDToTypeID( "PNGf" );
        var idPNGf = charIDToTypeID( "PNGf" );
        var idPGAd = charIDToTypeID( "PGAd" );
        desc4.putEnumerated( idPNGf, idPNGf, idPGAd );
    var idPNGF = charIDToTypeID( "PNGF" );
    desc3.putObject( idAs, idPNGF, desc4 );
    var idIn = charIDToTypeID( "In  " );
    desc3.putPath( idIn, newPng );
executeAction( idsave, desc3, DialogModes.NO );
// ===========
}
}
try
{
var idslct = charIDToTypeID( "slct" );
    var desc61 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref58 = new ActionReference();
        var idSnpS = charIDToTypeID( "SnpS" );
        ref58.putName( idSnpS, snapName );
    desc61.putReference( idnull, ref58 );
executeAction( idslct, desc61, DialogModes.NO );
}
catch (e)
{
} 
// ======================
if (h>500){
var idslct = charIDToTypeID( "slct" );
    var desc65 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref62 = new ActionReference();
        var idMn = charIDToTypeID( "Mn  " );
        var idMnIt = charIDToTypeID( "MnIt" );
        var idFtOn = charIDToTypeID( "FtOn" );
        ref62.putEnumerated( idMn, idMnIt, idFtOn );
    desc65.putReference( idnull, ref62 );
executeAction( idslct, desc65, DialogModes.NO );
}
}
// ======================
populateScripts(); 
app.refresh();
};

// ===============
function setOptions(){
// ===	
//var optIniFile = new File (iniFolder+"/Global Options.ini");
var optLangFile=new File (langFolder+"/Global Options.txt" );
// ===============
var optStrings=[];
var newLanguage=activeLanguage;
// ===============
if(optLangFile.exists){
optLangFile.open ("r");
optStrings = optLangFile.readln().split(" ~ ");
optLangFile.close(); 
}
// ===============
var amBool=1;
// ===
if(options[3]){
amBool=parseInt(options[3]);
}
// ======
var helpBool=1;
// ===
if(options[4]){
helpBool=parseInt(options[4]);
}

// ===============
var optDlg = new Window ('dialog', optStrings[1] );
optDlg.orientation = 'column';
optDlg.spacing=10;
optDlg.margins=[14, 12, 10, 6];

//=======  Begin  Language panel:
langPanel = optDlg.add( 'panel', undefined );
langPanel.margins=10;
langPanel.preferredSize = [ 270, 60 ];
langPanel.alignChildren =["right", "center"];
//===
langRow = langPanel.add ('group', undefined)
langRow.orientation='row';
langLabel=langRow.add( 'statictext', undefined, optStrings[5] )
g = langLabel.graphics;
g.font = myFont;
//===
langList = langRow.add('dropdownlist', undefined );
langList.preferredSize = [180, 22];
//===
g = langList.graphics;
g.font = myFont;
//===========================
item = langList.add ('item', optStrings[11] );
if ( activeLanguage=="NL" ) {
	item.selected=true;
}
item = langList.add ('item', optStrings[12] );
if ( activeLanguage=="EN" ) {
	item.selected=true;
}
item = langList.add ('item', optStrings[13] );
if ( activeLanguage=="FR" ) {
	item.selected=true;
}
item = langList.add ('item', optStrings[14] );
if ( activeLanguage=="DE" ) {
	item.selected=true;
}
item = langList.add ('item', optStrings[15] );
if ( activeLanguage=="IT" ) {
	item.selected=true;
}
item = langList.add ('item', optStrings[16] );
if ( activeLanguage=="RU" ) {
	item.selected=true;
}
item = langList.add ('item', optStrings[17] );
if ( activeLanguage=="ES" ) {
	item.selected=true;
}
item = langList.add ('item', optStrings[18] );
if ( activeLanguage=="SV" ) {
	item.selected=true;
}
//=====================
langList.onChange=function () {
if ( this.selection.toString()==optStrings[11] ) {
	newLanguage="NL"
	}
if ( this.selection.toString()==optStrings[12] ) {
	newLanguage="EN"
	}
if ( this.selection.toString()==optStrings[13] ) {
	newLanguage="FR"
	}
if ( this.selection.toString()==optStrings[14] ) {
	newLanguage="DE"
	}
if ( this.selection.toString()==optStrings[15] ) {
	newLanguage="IT"
	}
if ( this.selection.toString()==optStrings[16] ) {
	newLanguage="RU"
	}
if ( this.selection.toString()==optStrings[17] ) {
	newLanguage="ES"
	}
if ( this.selection.toString()==optStrings[18] ) {
	newLanguage="SV"
	}
activeLanguage = newLanguage;
};
/////////////////////////////////////////
//=======  Begin  Font panel:
fontPanel = optDlg.add('panel', undefined );
fontPanel.margins=10;
fontPanel.preferredSize = [ 270, 60 ];
fontPanel.alignChildren =["right", "center"];
//===
fontRow = fontPanel.add ('group', undefined)
fontRow.orientation='row';
fontLabel=fontRow.add('statictext', undefined, optStrings[6] )
g = fontLabel.graphics;
g.font = myFont;
//===
fontList = fontRow.add('dropdownlist', undefined );
fontList.preferredSize = [120, 22];
//===
g = fontList.graphics;
g.font = myFont;
//===========================
for ( i=0; i< app.fonts.length; i++ ) {
if ( app.fonts[i].name== "Arial" ) {
    item = fontList.add ('item', "Arial" );
	break
	}
}
if ( epFont=="Arial" ) {
	item.selected=true;
}
//===
for ( i=0; i< app.fonts.length; i++ ) {
if ( app.fonts[i].name== "Comic Sans MS" ) {
item = fontList.add ('item', "Comic Sans MS" );
	break
	}
}
if ( epFont=="Comic Sans MS" ) {
	item.selected=true;
}
//===
for ( i=0; i< app.fonts.length; i++ ) {
if ( app.fonts[i].name== "Courier" ) {
item = fontList.add ('item', "Courier" );
	break
	}
}
if ( epFont=="Courier" ) {
	item.selected=true;
}
//===
for ( i=0; i< app.fonts.length; i++ ) {
if ( app.fonts[i].name== "Georgia" ) {
item = fontList.add ('item', "Georgia" );
	break
	}
}
if ( epFont=="Georgia" ) {
	item.selected=true;
}
//===
for ( i=0; i< app.fonts.length; i++ ) {
if ( app.fonts[i].name== "Arial" ) {
item = fontList.add ('item', "Arial" );
	break
	}
}
if ( epFont=="Arial" ) {
	item.selected=true;
}
//===
for ( i=0; i< app.fonts.length; i++ ) {
if ( app.fonts[i].name== "Lucida Console" ) {
item = fontList.add ('item', "Lucida Console" );
	break
	}
}
if ( epFont=="Lucida Console" ) {
	item.selected=true;
}
//===
for ( i=0; i< app.fonts.length; i++ ) {
if ( app.fonts[i].name== "Myriad Pro" ) {
item = fontList.add ('item', "Myriad Pro" );
	break
	}
}
if ( epFont=="Myriad Pro" ) {
	item.selected=true;
}
//===
for ( i=0; i< app.fonts.length; i++ ) {
if ( app.fonts[i].name== "Tahoma" ) {
item = fontList.add ('item', "Tahoma" );
	break
	}
}
if ( epFont=="Tahoma" ) {
	item.selected=true;
}
//===
for ( i=0; i< app.fonts.length; i++ ) {
if ( app.fonts[i].name== "Verdana" ) {
item = fontList.add ('item', "Verdana" );
	break
	}
}
if ( epFont=="Verdana" ) {
	item.selected=true;
};
//===
fontList.onChange = function () {
epFont=this.selection.toString();
}

///////////////////////////////////////////////
sizeList = fontRow.add('dropdownlist', undefined );
sizeList.preferredSize = [50, 22];
//===
g = sizeList.graphics;
g.font = myFont;
//===
item = sizeList.add ('item', "10" );
if ( epSize == 10 ) {
	item.selected=true;
}	
item = sizeList.add ('item', "11" );
if ( epSize == 11 ) {
	item.selected=true;
}	
item = sizeList.add ('item', "12" );
if ( epSize == 12 ) {
	item.selected=true;
}
item = sizeList.add ('item', "14" );
if ( epSize == 14 ) {
	item.selected=true;
}
//========
sizeList.onChange = function () {
	epSize=this.selection.toString();
}

///////////////////////////////////////////////////
//=======  Begin  Reset panel:
resetPanel = optDlg.add('panel', undefined );
resetPanel.margins=10;
resetPanel.preferredSize = [270,50];
resetPanel.alignChildren =["right", "center"];
//===

resetRow = resetPanel.add ('group', undefined)
resetRow.orientation='row';
//===========================
resetLabel=resetRow.add('statictext', undefined, cleanString(optStrings[8]), {multiline:true} );
//===
g = resetLabel.graphics;
g.font = myFont;
//=====================
var resetPath = new File (requiredFolder+"/icons/recycle.png");
var resetBtn = resetRow.add("iconbutton", [0,0,24,24], resetPath, {style:"button"})
resetBtn.helpTip=optStrings[9] ;

resetBtn.onClick = function () {
optDlg.close();
//====
if(confirm( cleanString(optStrings[10]) )){ 
iniArray = Folder(optIniFolder).getFiles();
for ( i=0; i< iniArray.length; i++ ) {
	iniArray[i].remove();
	}
$.gc();
}
};	

///////////////////////////////////////////////////
//=======  "Add scriptArsenal to Main Menu" panel:
amPanel = optDlg.add('panel', undefined );
amPanel.margins=10;
amPanel.preferredSize = [270,50];
amPanel.alignChildren =["left", "center"];
//===

amRow = amPanel.add ('group', undefined)
amRow.orientation='row';
amRow.size=[230,25]
//===========================
amCheckbox=amRow.add('checkbox', undefined, strings[25]);
//===
g = amCheckbox.graphics;
g.font = myFont;
//=====================
amCheckbox.value=amBool;

amCheckbox.onClick = function(){
amBool=this.value+0;
};	

///////////////////////////////////////////////////
//=======  "Add Manual to the Desktop" option:
helpRow = amPanel.add ('group', undefined)
helpRow.orientation='row';
helpRow.size=[230,25]
//===========================
helpCheckbox=helpRow.add('checkbox', undefined, strings[27]);
//===
g = helpCheckbox.graphics;
g.font = myFont;
//=====================
helpCheckbox.value=helpBool;

helpCheckbox.onClick = function(){
helpBool=this.value+0;
};	

/////////////////////////////////////////
/////////////////////  Buttons:
optDlg.btnGroup = optDlg.add('group', undefined);
optDlg.btnGroup.preferredSize = {width:180, height:30};
optDlg.btnGroup.orientation = 'row';
optDlg.btnGroup.alignChildren = ['center', 'center'];

/////////// "Close" button
closeGroup = optDlg.btnGroup.add('group', undefined);
closeGroup.orientation = 'row';
closeGroup.margins = [10, 0, 30, 0];
//===
btnCancel = closeGroup.add("button", undefined, optStrings[3]  );
//===
if(parseInt(version)<12){
g = btnCancel.graphics;
g.font = myFont;
}
//===
btnCancel.onClick = function() { 
optDlg.close(0);
};
//===
btnOk = closeGroup.add("button", undefined, "OK" , {name:'OK'} );
//===
if(parseInt(version)<12){
g = btnOk.graphics;
g.font = myFont;
}
//===
btnOk.onClick = function() { 
closeOptDlg();
};

//=====================
function closeOptDlg () {
//==========
optionsFile.open("w");
options=[activeLanguage,epFont,epSize,amBool,helpBool];
optionsFile.write ( options );
optionsFile.close(); 
//==========
addCatalogToMenu();
addHelpToDesktop();
//==========
optDlg.close();
//==========
if (isMac==true){
return;
}
//==========
closeDlg();
//==========
var idAdobeScriptAutomationScripts = stringIDToTypeID( "AdobeScriptAutomation Scripts" );
    var desc13 = new ActionDescriptor();
    var idjsCt = charIDToTypeID( "jsCt" );
    desc13.putPath( idjsCt, thisScript );
    var idjsMs = charIDToTypeID( "jsMs" );
    desc13.putString( idjsMs, "0" );
executeAction( idAdobeScriptAutomationScripts, desc13, DialogModes.NO );
}	
//==============
try
{
optDlg.location=[dlg.location[0]+8,dlg.location[1]+50]
}
catch (e)
{
};
optDlg.show();
};	

// ================
function addCatalogToMenu(){
amBool=amCheckbox.value+0;
// ===
var psScriptsFolder=new Folder (psFolder+"/Presets/Scripts");
var sourceScriptFile=new File(topFolder+"/"+thisScript.name);
var targetScriptFile=new File (psScriptsFolder+"/Script Arsenal Demo.jsx");
// ===
if (thisScript.fsName!=targetScriptFile.fsName&&amBool==1&&sourceScriptFile.exists){
// ===
var oldString='topFolder=new Folder(thisScript.parent)';
var newString='topFolder=new Folder("'+topFolder+'")';
// ===
sourceScriptFile.open("r");
var newCode=sourceScriptFile.read();
sourceScriptFile.close();
newCode=newCode.replace(oldString, newString);
// ===
targetScriptFile.encoding = "UTF8";
targetScriptFile.open("w");
targetScriptFile.write(newCode);
targetScriptFile.close();
}
if (amBool==0&&targetScriptFile.exists){
targetScriptFile.remove();
}
};

// ================
function addHelpToDesktop(){
helpBool=helpCheckbox.value+0;
// ===
var helpLang="en";
if (activeLanguage=="DE"){
helpLang="de";
}
if (activeLanguage=="RU"){
helpLang="ru";
}
// ===
var sourceHelpFolder=new Folder(topFolder+"/help_files/");
var helpLinkBase=sourceHelpFolder.fsName.toString().split('\\').join('/');
var sourceLangFolder=new Folder(sourceHelpFolder+'/'+helpLang);
var sourceHelpFile=new File(sourceLangFolder+"/helpLoader.htm");
var desktopFolder=Folder.desktop;
// ===
var newStrings=strings;
// ===
if(langFolder.name.toLowerCase()!=activeLanguage.toLowerCase()){
langFolder=new Folder(requiredFolder+"/strings/"+activeLanguage);
langFile=new File(langFolder+"/scriptArsenal.txt");
newStrings=[];
// ===
if(langFile.exists){
langFile.open ("r");
newStrings = langFile.readln().split(" ~ ");
langFile.close(); 
}
}
// ===
var targetHelpFile=new File (desktopFolder+"/"+newStrings[28]+".htm");
// ===
if (helpBool==1&&sourceHelpFile.exists){
// ===
sourceHelpFile.open("r");
var newCode=sourceHelpFile.read();
sourceHelpFile.close();
// ===
newCode = newCode.split('href="../px/page.css"').join('pageCSS');
newCode = newCode.split('href="http://script-arsenal.com/buy-script-arsenal.htm"').join('searchLink');
newCode = newCode.split('../"+usrLang+"/"+pageName').join('file:///'+helpLinkBase+'/"'+'+usrLang+'+'"/index.htm"');
newCode = newCode.split('../px/').join('file:///'+helpLinkBase+'/px/');
newCode = newCode.split('href="').join('href="file:///'+helpLinkBase+'/'+helpLang+'/');
newCode = newCode.split('////').join('///');
newCode = newCode.split('pageCSS').join('href="file:///'+helpLinkBase+'/px/page.css"');
newCode = newCode.split('searchLink').join('href="http://script-arsenal.com/buy-script-arsenal.htm"');
// ===
targetHelpFile.encoding = "UTF8";
targetHelpFile.open("w");
targetHelpFile.write(newCode);
targetHelpFile.close();
}
if (helpBool==0&&targetHelpFile.exists){
targetHelpFile.remove();
}
};

// ================
function addScriptToMenu(){
var scrptFileName=scrptsArray[parseInt(scrList.selection)];
var scriptTargetName=scrList.selection.toString();
var psScriptsFolder=new Folder (psFolder+"/Presets/Scripts");
var sourceScriptFile=new File(scrFolder+"/"+scrptFileName);
//=============================
var addToMenuDlg = new Window ("dialog", strings[26] );
addToMenuDlg.location=[dlg.location[0]+12,dlg.location[1]+27]
addToMenuDlg.orientation = "column";
addToMenuDlg.margins=[16,20, 16, 16];
addToMenuDlg.spacing=20;
//===
var nameRow=addToMenuDlg.add("group", undefined );
nameRow.orientation = "row";
nameRow.spacing=2;
nameRow.margins=12;
// ==
var nameField = nameRow.add("edittext", undefined, scriptTargetName );
nameField.preferredSize = [170, 24];
//===
g = nameField.graphics;
g.font = myFont;
//===
var nameLabel=nameRow.add("statictext", undefined, ".jsx" );

addToMenuDlg.btnGroup = addToMenuDlg.add("group", undefined);
addToMenuDlg.btnGroup.preferredSize = [180, 24];
addToMenuDlg.btnGroup.orientation = "row";
addToMenuDlg.btnGroup.alignChildren = ["center", "bottom"];
//==============
cnclBtn = addToMenuDlg.btnGroup.add("button", undefined , commonStrings[4] );
cnclBtn.onClick = function() { 
addToMenuDlg.close(0); 
app.refresh();
};
//=================
okBtn = addToMenuDlg.btnGroup.add("button", undefined , "OK" );
okBtn.onClick = function() { 
//===
var newName=nameField.text;
var targetScriptFile=new File (psScriptsFolder+"/"+newName+".jsx");
// ============================
addToMenuDlg.close();
if (sourceScriptFile.exists){
// ===
var oldString='scriptsFolder=new Folder(thisScript.parent.parent)';
var newString='scriptsFolder=new Folder("'+scriptsFolder+'")';
// ===
sourceScriptFile.open("r");
var newCode=sourceScriptFile.read();
sourceScriptFile.close();
newCode=newCode.replace(oldString, newString);
// ===
targetScriptFile.encoding = "UTF8";
targetScriptFile.open("w");
targetScriptFile.write(newCode);
targetScriptFile.close();
// ===
addToMenuBtn.visible=false;
}
}
//=============
addToMenuDlg.show();
};
