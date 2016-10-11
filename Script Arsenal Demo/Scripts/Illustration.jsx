/*
This script is a part of "Script Arsenal" kit
by Andrei Doubrovski
www.Script-Arsenal.com
*/ 
///////////////////////////////////////////////////////////
function illustrateThis () {
// ===	
if (app.documents.length==0){
return
}
// ===
var oldUnits = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;
var w = app.activeDocument.width
var h = app.activeDocument.height
app.preferences.rulerUnits = oldUnits
var s = w*h
//===
var sfrd = Math.round(s/1500000)
if ( sfrd<1 ){
	sfrd=1
}
if ( sfrd>100 ){
	sfrd=100
}
//===
var sfth = sfrd*4
if ( sfth<2 ){
	sfth=2
}
if ( sfth>255 ){
	sfth=255
}
//===
var ctES = Math.round(s/2000000)
if ( ctES>10 ){
	ctES=10
}
// =======================================================
app.activeDocument.activeLayer = app.activeDocument.layers[0]
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc303 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref253 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref253.putClass( idLyr );
    desc303.putReference( idnull, ref253 );
executeAction( idMk, desc303, DialogModes.NO );
// =======================================================
var idMrgV = charIDToTypeID( "MrgV" );
    var desc304 = new ActionDescriptor();
    var idDplc = charIDToTypeID( "Dplc" );
    desc304.putBoolean( idDplc, true );
executeAction( idMrgV, desc304, DialogModes.NO );
// =======================================================
var idsurfaceBlur = stringIDToTypeID( "surfaceBlur" );
    var desc305 = new ActionDescriptor();
    var idRds = charIDToTypeID( "Rds " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc305.putUnitDouble( idRds, idPxl, sfrd );
    var idThsh = charIDToTypeID( "Thsh" );
    desc305.putInteger( idThsh, sfth );
executeAction( idsurfaceBlur, desc305, DialogModes.NO );
// =======================================================
var idPstE = charIDToTypeID( "PstE" );
    var desc306 = new ActionDescriptor();
    var idGEfk = charIDToTypeID( "GEfk" );
    var idGEft = charIDToTypeID( "GEft" );
    var idPstE = charIDToTypeID( "PstE" );
    desc306.putEnumerated( idGEfk, idGEft, idPstE );
    var idEdgT = charIDToTypeID( "EdgT" );
    desc306.putInteger( idEdgT, 6 );
    var idEdgI = charIDToTypeID( "EdgI" );
    desc306.putInteger( idEdgI, 3 );
    var idPstr = charIDToTypeID( "Pstr" );
    desc306.putInteger( idPstr, 2 );
executeAction( idPstE, desc306, DialogModes.NO );
// =======================================================
var idPstr = charIDToTypeID( "Pstr" );
    var desc308 = new ActionDescriptor();
    var idLvls = charIDToTypeID( "Lvls" );
    desc308.putInteger( idLvls, 20 );
executeAction( idPstr, desc308, DialogModes.NO );
// =======================================================
var idHStr = charIDToTypeID( "HStr" );
    var desc309 = new ActionDescriptor();
    var idpresetKind = stringIDToTypeID( "presetKind" );
    var idpresetKindType = stringIDToTypeID( "presetKindType" );
    var idpresetKindCustom = stringIDToTypeID( "presetKindCustom" );
    desc309.putEnumerated( idpresetKind, idpresetKindType, idpresetKindCustom );
    var idClrz = charIDToTypeID( "Clrz" );
    desc309.putBoolean( idClrz, false );
    var idAdjs = charIDToTypeID( "Adjs" );
        var list27 = new ActionList();
            var desc310 = new ActionDescriptor();
            var idH = charIDToTypeID( "H   " );
            desc310.putInteger( idH, 0 );
            var idStrt = charIDToTypeID( "Strt" );
            desc310.putInteger( idStrt, 20 );
            var idLght = charIDToTypeID( "Lght" );
            desc310.putInteger( idLght, 0 );
        var idHsttwo = charIDToTypeID( "Hst2" );
        list27.putObject( idHsttwo, desc310 );
    desc309.putList( idAdjs, list27 );
executeAction( idHStr, desc309, DialogModes.NO );
};
//===
illustrateThis ();
//========================================================

