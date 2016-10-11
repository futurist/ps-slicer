/*
This script is a part of "Script Arsenal" kit
by Andrei Doubrovski
www.Script-Arsenal.com
*/ 
///////////////////////////////////////////////////////////
function confetti () {
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
var iniFile=new File(iniFolder + "/Confetti.ini");
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
var langFile=new File(langFolder + "/Confetti.txt" );
var strings=[];
////////////////////////////
if(langFile.exists){
langFile.open ("r");
strings = langFile.readln().split(" ~ ");
langFile.close(); 
};

//=  Number of individual objects:
var amount = 100;
// Allowed object overlapping in percent (negative values are OK):
var overlap = 30; 
//= Object diameter in percent from document min size:
var diameter = 8
var objOpacity=70
//== Object parameters jitter in percent:
var sizeJitter = 50;
var brightnessJitter = 10;
var saturationJitter = 20;
var opacityJitter = 20;
var hueJitter = 100;
//===
var fgColor = app.foregroundColor;
var fgHue = fgColor.hsb.hue 
var fgSaturation = fgColor.hsb.saturation
var fgBrightness = fgColor.hsb.brightness

//== Safety device stops infinite loops:
var maxCycles =30000  
var cycles =0         
var currentItem =0
//===
var s1=1
var s2=0
var s3=0
var s4=0
var selectedShapes =[]
var groupBool=0
//===============
var doc = app.activeDocument
var docW
var docH
var minSide;
var xArray = []
var yArray = []

//===============
var dlgLoc = [300,200];
var dlgIni=[ dlgLoc,amount,overlap,diameter,sizeJitter,brightnessJitter,saturationJitter,opacityJitter,groupBool,hueJitter,s1,s2,s3,s4,objOpacity ];
//===
try
{
if(iniFile.exists){
iniFile.open ("r");
dlgIni = iniFile.readln().split(",");
dlgLoc = [dlgIni[0], dlgIni[1]]
amount=dlgIni[2]
overlap=dlgIni[3]
diameter=dlgIni[4]
sizeJitter=dlgIni[5]
brightnessJitter=dlgIni[6]
saturationJitter=dlgIni[7]
opacityJitter=dlgIni[8]
groupBool=parseInt(dlgIni[9])
hueJitter=dlgIni[10]
s1=dlgIni[11]
s2=dlgIni[12]
s3=dlgIni[13]
s4=dlgIni[14]
objOpacity=parseInt(dlgIni[15])
iniFile.close(); 
}
if(!iniFile.exists){
iniFile.open("w");
iniFile.write ( dlgIni );
iniFile.close(); 
}
}
catch (e)
{
};

//==========================
var dlg = new Window("dialog", strings[1] );
//===========
var s1Path=new File(requiredFolder+"/icons/circle.png");
var s2Path=new File(requiredFolder+"/icons/star4.png");
var s3Path=new File(requiredFolder+"/icons/star5.png");
var s4Path=new File(requiredFolder+"/icons/star6.png");
//==========
shapeGroup = dlg.add ("group", undefined); 
shapeGroup.orientation = "row";
//==========
s1Group = shapeGroup.add ("group", undefined); 
s1Group.orientation = "column";
s1Group.alignChildren = ["center", "center"];
s1Group.spacing=3
//===
s1Th = s1Group.add("iconbutton", [0, 0, 28, 28], s1Path, {style:"toolbutton"})
s1Th.onClick= function () {
	s1=s1Box.value=1-s1
	enableRun ()
}
//===
s1Box = s1Group.add("checkbox", undefined )
s1Box.value=parseInt(s1)
//===
s1Box.onClick= function () {
	s1=this.value+0
	enableRun ()
} 

//==========
s2Group = shapeGroup.add ("group", undefined); 
s2Group.orientation = "column";
s2Group.alignChildren = ["center", "center"];
s2Group.spacing=3
//===
s2Th = s2Group.add("iconbutton", [0, 0, 28, 28], s2Path, {style:"toolbutton"})
s2Th.onClick= function () {
	s2=s2Box.value=1-s2
	enableRun ()
}
//===
s2Box = s2Group.add("checkbox", undefined )
s2Box.value=parseInt(s2)
//===
s2Box.onClick= function () {
	s2=this.value+0
	enableRun ()
} 

//==========
s3Group = shapeGroup.add ("group", undefined); 
s3Group.orientation = "column";
s3Group.alignChildren = ["center", "center"];
s3Group.spacing=3
//===
s3Th = s3Group.add("iconbutton", [0, 0, 28, 28], s3Path, {style:"toolbutton"})
s3Th.onClick= function () {
	s3=s3Box.value=1-s3
	enableRun ()
}
//===
s3Box = s3Group.add("checkbox", undefined )
s3Box.value=parseInt(s3)
//===
s3Box.onClick= function () {
	s3=this.value+0
	enableRun ()
} 

//==========
s4Group = shapeGroup.add ("group", undefined); 
s4Group.orientation = "column";
s4Group.alignChildren = ["center", "center"];
s4Group.spacing=3
//===
s4Th = s4Group.add("iconbutton", [0, 0, 28, 28], s4Path, {style:"toolbutton"})
s4Th.onClick= function () {
	s4=s4Box.value=1-s4
	enableRun ()
}
//===
s4Box = s4Group.add("checkbox", undefined )
s4Box.value=parseInt(s4)
//===
s4Box.onClick= function () {
	s4=this.value+0
	enableRun ()
} 

//=========
function enableRun (){
	var sum = parseInt(s1)+parseInt(s2)+parseInt(s3)+parseInt(s4)
	if ( sum > 0 ){
		btnRun.enabled=true
	} else {
		btnRun.enabled=false
	}
};

//=============
optPnl = dlg.add("panel", undefined );
optPnl.preferredSize = [360, 150];
optPnl.orientation = "row";
optPnl.alignChildren = ["center", "center"];
//====
jitterPnl = dlg.add("panel", undefined );
jitterPnl.preferredSize = [360, 80];
jitterPnl.orientation = "row";
jitterPnl.alignChildren = ["center", "center"];

//===================
labelGroup = optPnl.add ("group", undefined); 
labelGroup.orientation = "column";
labelGroup.alignChildren = ["right", "center"];
//===
subGroup = labelGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
//====
amountLabel = subGroup.add("statictext",undefined, strings[6] );
//===
g = amountLabel.graphics;
g.font = myFont;
//===
subGroup = labelGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
diameterLabel = subGroup.add("statictext",undefined, strings[8] );
//===
g = diameterLabel.graphics;
g.font = myFont;
//===
subGroup = labelGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
overlapLabel = subGroup.add("statictext",undefined, strings[7] );
//===
g = overlapLabel.graphics;
g.font = myFont;
//===
subGroup = labelGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
objOpacityLabel = subGroup.add("statictext",undefined, strings[21] );
//===
g = objOpacityLabel.graphics;
g.font = myFont;
//====
jitterLabelGroup = jitterPnl.add ("group", undefined); 
jitterLabelGroup.orientation = "column";
jitterLabelGroup.alignChildren = ["right", "center"];
//===
subGroup = jitterLabelGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
sizeJitterLabel = subGroup.add("statictext",undefined, strings[9] );
//===
g = sizeJitterLabel.graphics;
g.font = myFont;
//===
subGroup = jitterLabelGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
hueJitterLabel = subGroup.add("statictext",undefined, strings[20] );
//===
g = hueJitterLabel.graphics;
g.font = myFont;
//===
subGroup = jitterLabelGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
saturationJitterLabel = subGroup.add("statictext",undefined, strings[11] );
//===
g = saturationJitterLabel.graphics;
g.font = myFont;
//===
subGroup = jitterLabelGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
brightnessJitterLabel = subGroup.add("statictext",undefined, strings[10] );
//===
g = brightnessJitterLabel.graphics;
g.font = myFont;
//===
subGroup = jitterLabelGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
opacityJitterLabel = subGroup.add("statictext",undefined, strings[12] );
//===
g = opacityJitterLabel.graphics;
g.font = myFont;

//===========
sliderGroup = optPnl.add ("group", undefined); 
sliderGroup.orientation = "column";
sliderGroup.alignChildren = ["center", "center"];
//===
fieldGroup = optPnl.add ("group", undefined); 
fieldGroup.orientation = "column";
fieldGroup.alignChildren = ["center", "center"];
//====
unitsGroup = optPnl.add ("group", undefined); 
unitsGroup.orientation = "column";
unitsGroup.alignChildren = ["left", "center"];
//===========
jitterSliderGroup = jitterPnl.add ("group", undefined); 
jitterSliderGroup.orientation = "column";
jitterSliderGroup.alignChildren = ["center", "center"];
//===
jitterFieldGroup = jitterPnl.add ("group", undefined); 
jitterFieldGroup.orientation = "column";
jitterFieldGroup.alignChildren = ["center", "center"];
//====
jitterUnitsGroup = jitterPnl.add ("group", undefined); 
jitterUnitsGroup.orientation = "column";
jitterUnitsGroup.alignChildren = ["left", "center"];

//====
subGroup = unitsGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
pcsLabel = subGroup.add("statictext",undefined, strings[13] );
//===
g = pcsLabel.graphics;
g.font = myFont;
//===
subGroup = unitsGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
prctLabel = subGroup.add("statictext",undefined, "%" );
//===
g = prctLabel.graphics;
g.font = myFont;
//===
subGroup = unitsGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
prctLabel = subGroup.add("statictext",undefined, "%" );
//===
g = prctLabel.graphics;
g.font = myFont;
//===
subGroup = unitsGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
prctLabel = subGroup.add("statictext",undefined, "%" );
//===
g = prctLabel.graphics;
g.font = myFont;
//===
subGroup = jitterUnitsGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
prctLabel = subGroup.add("statictext",undefined, "%" );
//===
g = prctLabel.graphics;
g.font = myFont;
//===
subGroup = jitterUnitsGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
prctLabel = subGroup.add("statictext",undefined, "%" );
//===
g = prctLabel.graphics;
g.font = myFont;
//===
subGroup = jitterUnitsGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
prctLabel = subGroup.add("statictext",undefined, "%" );
//===
g = prctLabel.graphics;
g.font = myFont;
//===
subGroup = jitterUnitsGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
prctLabel = subGroup.add("statictext",undefined, "%" );
//===
g = prctLabel.graphics;
g.font = myFont;
//===
subGroup = jitterUnitsGroup.add ("group", undefined); 
subGroup.preferredSize = [20, 20];
prctLabel = subGroup.add("statictext",undefined, "%" );
//===
g = prctLabel.graphics;
g.font = myFont;


//=================== 
amountSlider = sliderGroup.add("slider",undefined );
amountSlider.preferredSize = [120, 20];
amountSlider.maxvalue = Math.sqrt(1000);
amountSlider.minvalue = 1;
amountSlider.value = Math.sqrt(amount);
//===
amountField = fieldGroup.add("edittext", undefined, "" );
amountField.preferredSize = [40, 20];
amountField.text = amount;
//===

//=========
amountSlider.onChange = function () {
	amount = Math.round(this.value*this.value);
	amountField.text = amount;
}
//===
var newAmount;
amountField.onChanging = function () {
if 	( amountField.text.length>0 ){
	var v = (parseInt(this.text));
	if ( v > 0 && v <= 1000 ) {
		newAmount = v;
		amount = newAmount;
		amountSlider.value = Math.sqrt(amount);
	} else {
alert(strings[14]);
amountField.text=amount;
amountSlider.value = Math.sqrt(amount);
	}
}
};	
//===

//===============================
diameterSlider = sliderGroup.add("slider",undefined );
diameterSlider.preferredSize = [120, 20];
diameterSlider.maxvalue = 10;
diameterSlider.minvalue = 0.1;
diameterSlider.value = Math.sqrt(diameter);
//===
diameterField = fieldGroup.add("edittext", undefined, "" );
diameterField.preferredSize = [40, 20];
diameterField.text = diameter;
//===

//=========
diameterSlider.onChange = function () {
	diameter = Math.round(this.value*this.value);
	if ( this.value < 1 ) {
		diameter = Math.round(this.value*this.value*100)/100;
	}
	diameterField.text = diameter;
}
//===
var newDiameter;
diameterField.onChanging = function () {
if 	( diameterField.text.length>0  && diameterField.text != "0"  && diameterField.text != "0."  && diameterField.text != "0," ){
	var dTxt=diameterField.text.replace(/,/g, ".")
	var v = parseFloat(dTxt);
	if ( v > 1){
		v = parseInt(v)
	} else {
	v = (parseInt(v*100))/100;
	}
	if ( v > 0 && v <= 100 ) {
		newDiameter = v;
		diameter = newDiameter;
		diameterSlider.value = Math.sqrt(diameter);
	} else {
alert(strings[16]);
diameterField.text=diameter;
diameterSlider.value = Math.sqrt(diameter);
	}
}
};	
//===

//==============
overlapSlider = sliderGroup.add("slider",undefined );
overlapSlider.preferredSize = [120, 20];
overlapSlider.maxvalue = 100;
overlapSlider.minvalue = -100;
overlapSlider.value = overlap;
//===
overlapField = fieldGroup.add("edittext", undefined, "" );
overlapField.preferredSize = [40, 20];
overlapField.text = overlap;
//===

//=========
overlapSlider.onChange = function () {
	overlap = Math.round(this.value);
	overlapField.text = overlap;
}
//===
var newOverlap;
overlapField.onChanging = function () {
if 	( overlapField.text.length>0 && overlapField.text != "-"  && overlapField.text != "+" ){
	var v = (parseInt(this.text));
	if ( v >= -100 && v <= 100 ) {
		newOverlap = v;
		overlap = newOverlap;
		overlapSlider.value = overlap;
	} else {
alert(strings[15]);
overlapField.text=overlap;
overlapSlider.value = overlap;
	}
}
};	
//===

//==================
objOpacitySlider = sliderGroup.add("slider",undefined );
objOpacitySlider.preferredSize = [120, 20];
objOpacitySlider.maxvalue = 100;
objOpacitySlider.minvalue = 0;
objOpacitySlider.value = objOpacity;
//===
objOpacityField = fieldGroup.add("edittext", undefined, "" );
objOpacityField.preferredSize = [40, 20];
objOpacityField.text = objOpacity;
//===

//=========
objOpacitySlider.onChange = function () {
	objOpacity = Math.round(this.value);
	objOpacityField.text = objOpacity;
}
//===
var newObjOpacityJitter;
objOpacityField.onChanging = function () {
if 	( objOpacityField.text.length>0 ){
	var v = (parseInt(this.text));
	if ( v >= 0 && v <= 100 ) {
		newObjOpacityJitter = v;
		objOpacity = newObjOpacityJitter;
		objOpacitySlider.value = objOpacity;
	} else {
alert(strings[18]);
objOpacityField.text=objOpacity;
objOpacitySlider.value = objOpacity;
	}
}
};
//===

/////////////////////////////////////
//==============
sizeJitterSlider = jitterSliderGroup.add("slider",undefined );
sizeJitterSlider.preferredSize = [120, 20];
sizeJitterSlider.maxvalue = 99;
sizeJitterSlider.minvalue = 0;
sizeJitterSlider.value = sizeJitter;
//===
sizeJitterField = jitterFieldGroup.add("edittext", undefined, "" );
sizeJitterField.preferredSize = [40, 20];
sizeJitterField.text = sizeJitter;
//===

//=========
sizeJitterSlider.onChange = function () {
	sizeJitter = Math.round(this.value);
	sizeJitterField.text = sizeJitter;
}
//===
var newSizeJitter;
sizeJitterField.onChanging = function () {
if 	( sizeJitterField.text.length>0 ){
	var v = (parseInt(this.text));
	if ( v >= 0 && v <= 100 ) {
		newSizeJitter = v;
		sizeJitter = newSizeJitter;
		sizeJitterSlider.value = sizeJitter;
	} else {
alert(strings[17]);
sizeJitterField.text=sizeJitter;
sizeJitterSlider.value = sizeJitter;
	}
}
};	
//===

//==================
hueJitterSlider = jitterSliderGroup.add("slider",undefined );
hueJitterSlider.preferredSize = [120, 20];
hueJitterSlider.maxvalue = 100;
hueJitterSlider.minvalue = 0;
hueJitterSlider.value = hueJitter;
//===
hueJitterField = jitterFieldGroup.add("edittext", undefined, "" );
hueJitterField.preferredSize = [40, 20];
hueJitterField.text = hueJitter;
//===

//=========
hueJitterSlider.onChange = function () {
	hueJitter = Math.round(this.value);
	hueJitterField.text = hueJitter;
}
//===
var newHueJitter;
hueJitterField.onChanging = function () {
if 	( hueJitterField.text.length>0 ){
	var v = (parseInt(this.text));
	if ( v >= 0 && v <= 100 ) {
		newHueJitter = v;
		hueJitter = newHueJitter;
		hueJitterSlider.value = hueJitter;
	} else {
alert(strings[18]);
hueJitterField.text=hueJitter;
hueJitterSlider.value = hueJitter;
	}
}
};

//==================
saturationJitterSlider = jitterSliderGroup.add("slider",undefined );
saturationJitterSlider.preferredSize = [120, 20];
saturationJitterSlider.maxvalue = 100;
saturationJitterSlider.minvalue = 0;
saturationJitterSlider.value = saturationJitter;
//===
saturationJitterField = jitterFieldGroup.add("edittext", undefined, "" );
saturationJitterField.preferredSize = [40, 20];
saturationJitterField.text = saturationJitter;
//===

//=========
saturationJitterSlider.onChange = function () {
	saturationJitter = Math.round(this.value);
	saturationJitterField.text = saturationJitter;
}
//===
var newSaturationJitter;
saturationJitterField.onChanging = function () {
if 	( saturationJitterField.text.length>0 ){
	var v = (parseInt(this.text));
	if ( v >= 0 && v <= 100 ) {
		newSaturationJitter = v;
		saturationJitter = newSaturationJitter;
		saturationJitterSlider.value = saturationJitter;
	} else {
alert(strings[18]);
saturationJitterField.text=saturationJitter;
saturationJitterSlider.value = saturationJitter;
	}
}
};

//=================
brightnessJitterSlider = jitterSliderGroup.add("slider",undefined );
brightnessJitterSlider.preferredSize = [120, 20];
brightnessJitterSlider.maxvalue = 100;
brightnessJitterSlider.minvalue = 0;
brightnessJitterSlider.value = brightnessJitter;
//===
brightnessJitterField = jitterFieldGroup.add("edittext", undefined, "" );
brightnessJitterField.preferredSize = [40, 20];
brightnessJitterField.text = brightnessJitter;
//===

//=========
brightnessJitterSlider.onChange = function () {
	brightnessJitter = Math.round(this.value);
	brightnessJitterField.text = brightnessJitter;
}
//===
var newBrightnessJitter;
brightnessJitterField.onChanging = function () {
if 	( brightnessJitterField.text.length>0 ){
	var v = (parseInt(this.text));
	if ( v >= 0 && v <= 100 ) {
		newBrightnessJitter = v;
		brightnessJitter = newBrightnessJitter;
		brightnessJitterSlider.value = brightnessJitter;
	} else {
alert(strings[18]);
brightnessJitterField.text=brightnessJitter;
brightnessJitterSlider.value = brightnessJitter;
	}
}
};	
//===


//======================
opacityJitterSlider = jitterSliderGroup.add("slider",undefined );
opacityJitterSlider.preferredSize = [120, 20];
opacityJitterSlider.maxvalue = 100;
opacityJitterSlider.minvalue = 0;
opacityJitterSlider.value = opacityJitter;
//===
opacityJitterField = jitterFieldGroup.add("edittext", undefined, "" );
opacityJitterField.preferredSize = [40, 20];
opacityJitterField.text = opacityJitter;
//===

//=========
opacityJitterSlider.onChange = function () {
	opacityJitter = Math.round(this.value);
	opacityJitterField.text = opacityJitter;
}
//===
var newOpacityJitter;
opacityJitterField.onChanging = function () {
if 	( opacityJitterField.text.length>0 ){
	var v = (parseInt(this.text));
	if ( v >= 0 && v <= 100 ) {
		newOpacityJitter = v;
		opacityJitter = newOpacityJitter;
		opacityJitterSlider.value = opacityJitter;
	} else {
alert(strings[18]);
opacityJitterField.text=opacityJitter;
opacityJitterSlider.value = opacityJitter;
	}
}
};

//===============
groupBox = dlg.add("checkbox", undefined, strings[19] )
groupBox.value=groupBool
//===
groupBox.onClick= function () {
	groupBool=this.value+0
} 
//===
g = groupBox.graphics;
g.font = myFont;


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
closeGroup.margins = [30, 0, 30, 0];
//===
btnCncl = closeGroup.add("button", undefined, strings[3] );
//===
if(parseInt(version)<12){
g = btnCncl.graphics;
g.font = myFont;
}
//===
btnCncl.onClick = function() { 
	dlg.close ();
};

/////////// "Run" button
btnRun = closeGroup.add("button", undefined, strings[4], {name:"ok"} );
enableRun ();
//===
if(parseInt(version)<12){
g = btnRun.graphics;
g.font = myFont;
}
//===
btnRun.onClick = function() {
closeDlg();
makeConfetti ()
};

/////////// "Save and Close" button
var saveAndClosePath=new File(requiredFolder+"/icons/saveAndClose.png");
saveBtn = dlg.btnGroup.add("iconbutton", [0, 0, 24, 24], saveAndClosePath, {style:"toolbutton"})
saveBtn.helpTip=strings[5];
//===
saveBtn.onClick = function() { 
//===
closeDlg ();
};

//////////////////////
try
{
dlg.location = dlgLoc;
}
catch (e)
{
};
//=====
dlg.show();

///////////
function closeDlg () {
//===
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
dlgIni=[ dlgIni[0],dlgIni[1],amount,overlap,diameter,sizeJitter,brightnessJitter,saturationJitter,opacityJitter,groupBool,hueJitter,s1,s2,s3,s4, objOpacity ];
iniFile.open ("w");
iniFile.write ( dlgIni );
iniFile.close(); 
//===========
dlg.close(0)
};


//////////////////////////////////
///////////  Functions:

function makeConfetti () {
var oldUnits = app.preferences.rulerUnits
app.preferences.rulerUnits = Units.PIXELS;
docW = doc.width
docH = doc.height
minSide = Math.min( docW, docH );
app.preferences.rulerUnits = oldUnits
//=======================================
if ( s1==1 ){
	selectedShapes.push(1)
}
if ( s2==1 ){
	selectedShapes.push(2)
}
if ( s3==1 ){
	selectedShapes.push(3)
}
if ( s4==1 ){
	selectedShapes.push(4)
}

//=======================================
while ( currentItem < amount ) {
	currentItem++
	addItem ()
}
//===
app.foregroundColor=fgColor;
app.refresh()
///  Grouping new layers:
if ( groupBool==1 ) {
for ( k=0; k < amount-1; k++ ) {
var idslct = charIDToTypeID( "slct" );
    var desc65 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref29 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idBckw = charIDToTypeID( "Bckw" );
        ref29.putEnumerated( idLyr, idOrdn, idBckw );
    desc65.putReference( idnull, ref29 );
    var idselectionModifier = stringIDToTypeID( "selectionModifier" );
    var idselectionModifierType = stringIDToTypeID( "selectionModifierType" );
    var idaddToSelection = stringIDToTypeID( "addToSelection" );
    desc65.putEnumerated( idselectionModifier, idselectionModifierType, idaddToSelection );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc65.putBoolean( idMkVs, false );
executeAction( idslct, desc65, DialogModes.NO );
}
//=====================================
var idMk = charIDToTypeID( "Mk  " );
    var desc66 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref30 = new ActionReference();
        var idlayerSection = stringIDToTypeID( "layerSection" );
        ref30.putClass( idlayerSection );
    desc66.putReference( idnull, ref30 );
    var idFrom = charIDToTypeID( "From" );
        var ref31 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref31.putEnumerated( idLyr, idOrdn, idTrgt );
    desc66.putReference( idFrom, ref31 );
executeAction( idMk, desc66, DialogModes.NO );
}
};

/////////////////////////////////////
function addItem () {
//== Safety check:	
cycles++
if ( cycles > maxCycles ){
	return
}
//////////////////////
var objDia = (1-sizeJitter*Math.random()/100)*(minSide*diameter/100)
//=========================== 	
var objX = (docW-objDia)*Math.random()
var objY = (docH-objDia)*Math.random()
//===
for ( j=0; j < xArray.length; j++ ) { 
	if (Math.abs(objX-xArray[j]) < (objDia-(objDia*overlap/100)) && Math.abs(objY-yArray[j]) < (objDia-(objDia*overlap/100)) ){
		currentItem--
		return
	}
}
//===
xArray.push (objX)
yArray.push (objY)
//==========================================
var sItem=Math.round((selectedShapes.length-1)*Math.random())
var shapeNum = selectedShapes[sItem]
//==========================================
var objHue = fgHue + plusminus()*(1.8*hueJitter*Math.random());
if ( objHue < 0 ){
	objHue = 360+objHue
}
if ( objHue >= 360 ){
	objHue = objHue-360
}
//===
var objStrt = fgSaturation + plusminus()*(saturationJitter*Math.random());
if ( objStrt < 0 ){
	objStrt = 0
}
if ( objStrt > 100 ){
	objStrt = 100
}
//===
var objBrgh = fgBrightness + plusminus()*(brightnessJitter*Math.random());
if ( objBrgh < 0 ){
	objBrgh = 0
}
if ( objBrgh > 100 ){
	objBrgh = 100
}
// =======================================
var idsetd = charIDToTypeID( "setd" );
    var desc45 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref17 = new ActionReference();
        var idClr = charIDToTypeID( "Clr " );
        var idFrgC = charIDToTypeID( "FrgC" );
        ref17.putProperty( idClr, idFrgC );
    desc45.putReference( idnull, ref17 );
    var idT = charIDToTypeID( "T   " );
        var desc46 = new ActionDescriptor();
        var idH = charIDToTypeID( "H   " );
        var idAng = charIDToTypeID( "#Ang" );
        desc46.putUnitDouble( idH, idAng, objHue );
        var idStrt = charIDToTypeID( "Strt" );
        desc46.putDouble( idStrt, objStrt );
        var idBrgh = charIDToTypeID( "Brgh" );
        desc46.putDouble( idBrgh, objBrgh );
    var idHSBC = charIDToTypeID( "HSBC" );
    desc45.putObject( idT, idHSBC, desc46 );
executeAction( idsetd, desc45, DialogModes.NO );
// =========================================
if ( shapeNum==1 ){
var idMk = charIDToTypeID( "Mk  " );
    var desc47 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref18 = new ActionReference();
        var idcontentLayer = stringIDToTypeID( "contentLayer" );
        ref18.putClass( idcontentLayer );
    desc47.putReference( idnull, ref18 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc48 = new ActionDescriptor();
        var idType = charIDToTypeID( "Type" );
        var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
        desc48.putClass( idType, idsolidColorLayer );
        var idShp = charIDToTypeID( "Shp " );
            var desc49 = new ActionDescriptor();
            var idTop = charIDToTypeID( "Top " );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc49.putUnitDouble( idTop, idPxl, objY );
            var idLeft = charIDToTypeID( "Left" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc49.putUnitDouble( idLeft, idPxl, objX );
            var idBtom = charIDToTypeID( "Btom" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc49.putUnitDouble( idBtom, idPxl, objY+objDia );
            var idRght = charIDToTypeID( "Rght" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc49.putUnitDouble( idRght, idPxl, objX+objDia );
        var idElps = charIDToTypeID( "Elps" );
        desc48.putObject( idShp, idElps, desc49 );
    var idcontentLayer = stringIDToTypeID( "contentLayer" );
    desc47.putObject( idUsng, idcontentLayer, desc48 );
executeAction( idMk, desc47, DialogModes.NO );
}
//================================
if ( shapeNum==2 ){
var idMk = charIDToTypeID( "Mk  " );
    var desc63 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref17 = new ActionReference();
        var idcontentLayer = stringIDToTypeID( "contentLayer" );
        ref17.putClass( idcontentLayer );
    desc63.putReference( idnull, ref17 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc64 = new ActionDescriptor();
        var idType = charIDToTypeID( "Type" );
        var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
        desc64.putClass( idType, idsolidColorLayer );
        var idShp = charIDToTypeID( "Shp " );
            var desc65 = new ActionDescriptor();
            var idCntr = charIDToTypeID( "Cntr" );
                var desc66 = new ActionDescriptor();
                var idHrzn = charIDToTypeID( "Hrzn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc66.putUnitDouble( idHrzn, idPxl, objX+(objDia/2) );
                var idVrtc = charIDToTypeID( "Vrtc" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc66.putUnitDouble( idVrtc, idPxl, objY+(objDia/2) );
            var idPnt = charIDToTypeID( "Pnt " );
            desc65.putObject( idCntr, idPnt, desc66 );
            var idcorner = stringIDToTypeID( "corner" );
                var desc67 = new ActionDescriptor();
                var idHrzn = charIDToTypeID( "Hrzn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc67.putUnitDouble( idHrzn, idPxl, objDia/2 );
                var idVrtc = charIDToTypeID( "Vrtc" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc67.putUnitDouble( idVrtc, idPxl, 0.000000 );
            var idOfst = charIDToTypeID( "Ofst" );
            desc65.putObject( idcorner, idOfst, desc67 );
            var idsides = stringIDToTypeID( "sides" );
            desc65.putInteger( idsides, 4 );
            var idindent = stringIDToTypeID( "indent" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc65.putUnitDouble( idindent, idPrc, 50.000000 );
        var idPlgn = charIDToTypeID( "Plgn" );
        desc64.putObject( idShp, idPlgn, desc65 );
    var idcontentLayer = stringIDToTypeID( "contentLayer" );
    desc63.putObject( idUsng, idcontentLayer, desc64 );
executeAction( idMk, desc63, DialogModes.NO );
//===
var angle = 360*Math.random ()
doc.activeLayer.rotate ( angle, AnchorPosition.MIDDLECENTER )
}
//================================
if ( shapeNum==3 ){
var idMk = charIDToTypeID( "Mk  " );
    var desc68 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref18 = new ActionReference();
        var idcontentLayer = stringIDToTypeID( "contentLayer" );
        ref18.putClass( idcontentLayer );
    desc68.putReference( idnull, ref18 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc69 = new ActionDescriptor();
        var idType = charIDToTypeID( "Type" );
        var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
        desc69.putClass( idType, idsolidColorLayer );
        var idShp = charIDToTypeID( "Shp " );
            var desc70 = new ActionDescriptor();
            var idCntr = charIDToTypeID( "Cntr" );
                var desc71 = new ActionDescriptor();
                var idHrzn = charIDToTypeID( "Hrzn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc71.putUnitDouble( idHrzn, idPxl, objX+(objDia/2) );
                var idVrtc = charIDToTypeID( "Vrtc" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc71.putUnitDouble( idVrtc, idPxl, objY+(objDia/2) );
            var idPnt = charIDToTypeID( "Pnt " );
            desc70.putObject( idCntr, idPnt, desc71 );
            var idcorner = stringIDToTypeID( "corner" );
                var desc72 = new ActionDescriptor();
                var idHrzn = charIDToTypeID( "Hrzn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc72.putUnitDouble( idHrzn, idPxl, objDia/2 );
                var idVrtc = charIDToTypeID( "Vrtc" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc72.putUnitDouble( idVrtc, idPxl, 0.000000 );
            var idOfst = charIDToTypeID( "Ofst" );
            desc70.putObject( idcorner, idOfst, desc72 );
            var idsides = stringIDToTypeID( "sides" );
            desc70.putInteger( idsides, 5 );
            var idindent = stringIDToTypeID( "indent" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc70.putUnitDouble( idindent, idPrc, 50.000000 );
        var idPlgn = charIDToTypeID( "Plgn" );
        desc69.putObject( idShp, idPlgn, desc70 );
    var idcontentLayer = stringIDToTypeID( "contentLayer" );
    desc68.putObject( idUsng, idcontentLayer, desc69 );
executeAction( idMk, desc68, DialogModes.NO );
//===
var angle = 360*Math.random ()
doc.activeLayer.rotate ( angle, AnchorPosition.MIDDLECENTER )
}
//================================
if ( shapeNum==4 ){
var idMk = charIDToTypeID( "Mk  " );
    var desc73 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref19 = new ActionReference();
        var idcontentLayer = stringIDToTypeID( "contentLayer" );
        ref19.putClass( idcontentLayer );
    desc73.putReference( idnull, ref19 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc74 = new ActionDescriptor();
        var idType = charIDToTypeID( "Type" );
        var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
        desc74.putClass( idType, idsolidColorLayer );
        var idShp = charIDToTypeID( "Shp " );
            var desc75 = new ActionDescriptor();
            var idCntr = charIDToTypeID( "Cntr" );
                var desc76 = new ActionDescriptor();
                var idHrzn = charIDToTypeID( "Hrzn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc76.putUnitDouble( idHrzn, idPxl, objX+(objDia/2) );
                var idVrtc = charIDToTypeID( "Vrtc" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc76.putUnitDouble( idVrtc, idPxl, objY+(objDia/2) );
            var idPnt = charIDToTypeID( "Pnt " );
            desc75.putObject( idCntr, idPnt, desc76 );
            var idcorner = stringIDToTypeID( "corner" );
                var desc77 = new ActionDescriptor();
                var idHrzn = charIDToTypeID( "Hrzn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc77.putUnitDouble( idHrzn, idPxl, objDia/2 );
                var idVrtc = charIDToTypeID( "Vrtc" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc77.putUnitDouble( idVrtc, idPxl, 0.000000 );
            var idOfst = charIDToTypeID( "Ofst" );
            desc75.putObject( idcorner, idOfst, desc77 );
            var idsides = stringIDToTypeID( "sides" );
            desc75.putInteger( idsides, 6 );
            var idindent = stringIDToTypeID( "indent" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc75.putUnitDouble( idindent, idPrc, 50.000000 );
        var idPlgn = charIDToTypeID( "Plgn" );
        desc74.putObject( idShp, idPlgn, desc75 );
    var idcontentLayer = stringIDToTypeID( "contentLayer" );
    desc73.putObject( idUsng, idcontentLayer, desc74 );
executeAction( idMk, desc73, DialogModes.NO );
//===
var angle = 360*Math.random ()
doc.activeLayer.rotate ( angle, AnchorPosition.MIDDLECENTER )
}
//================================
var opct = objOpacity + plusminus()*(opacityJitter*Math.random());
if ( opct < 0 ){
	opct = 0
}
if ( opct > 100 ){
	opct = 100
}
doc.activeLayer.opacity = opct 
//===
};
//=================
function plusminus () {
if ( currentItem/2 == parseInt(currentItem/2) ){
	return (1)
} else {
	return (-1)
}
}
};
//==================
confetti ();
/////////////////////////////