/*
This script is a part of "Script Arsenal" kit
by Andrei Doubrovski
www.Script-Arsenal.com
*/ 
///////////////////////////////////////////////////////
function diskLabel () {
// ===	
if (app.documents.length==0){
return
}
// ===
var doc = app.activeDocument
var imgRes = 300  //  target image resolution ( px / inch )
//===  Initial width and height:
var oldWidth = doc.width;
var oldHeight = doc.height;
//===  Target width and height:
var w = 1500 
var h = 1500
//===
	if ( oldWidth < oldHeight ) {
	h = oldHeight/oldWidth*h
	}
	if ( oldWidth > oldHeight ) {
	w = oldWidth/oldHeight*w
	}
//======================
var oldUnits = app.preferences.rulerUnits
//=======================================
doc.activeLayer = doc.layers[0]
//===
var idMk = charIDToTypeID( "Mk  " );
    var desc99 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref51 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref51.putClass( idLyr );
    desc99.putReference( idnull, ref51 );
executeAction( idMk, desc99, DialogModes.NO );
//===
doc.selection.selectAll ();
doc.selection.copy (true);
doc.paste();
// =======================================================
var idnewPlacedLayer = stringIDToTypeID( "newPlacedLayer" );
executeAction( idnewPlacedLayer, undefined, DialogModes.NO );
//===
var mergedLayer = doc.activeLayer
//========================================================
if ( oldWidth > 1500 && oldHeight > 1500 ) {
	app.preferences.rulerUnits = Units.PIXELS;
	var resMethod = ResampleMethod.BICUBICSHARPER;
}
if ( oldWidth < 1500 || oldHeight < 1500 ) {
	app.preferences.rulerUnits = Units.PIXELS;	
	var resMethod = ResampleMethod.BICUBIC;
}
//=====
doc.resizeImage(w,h,imgRes,resMethod);
//===
doc.resizeCanvas( 1422, 1422, AnchorPosition.MIDDLECENTER );
//==================================
app.preferences.rulerUnits = oldUnits
//===========================
var idMk = charIDToTypeID( "Mk  " );
    var desc45 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
        var desc46 = new ActionDescriptor();
        var idPstn = charIDToTypeID( "Pstn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc46.putUnitDouble( idPstn, idPxl, 25 );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idVrtc = charIDToTypeID( "Vrtc" );
        desc46.putEnumerated( idOrnt, idOrnt, idVrtc );
    var idGd = charIDToTypeID( "Gd  " );
    desc45.putObject( idNw, idGd, desc46 );
executeAction( idMk, desc45, DialogModes.NO );
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc47 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
        var desc48 = new ActionDescriptor();
        var idPstn = charIDToTypeID( "Pstn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc48.putUnitDouble( idPstn, idPxl, 25 );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idHrzn = charIDToTypeID( "Hrzn" );
        desc48.putEnumerated( idOrnt, idOrnt, idHrzn );
    var idGd = charIDToTypeID( "Gd  " );
    desc47.putObject( idNw, idGd, desc48 );
executeAction( idMk, desc47, DialogModes.NO );
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc45 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
        var desc46 = new ActionDescriptor();
        var idPstn = charIDToTypeID( "Pstn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc46.putUnitDouble( idPstn, idPxl, 1397 );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idVrtc = charIDToTypeID( "Vrtc" );
        desc46.putEnumerated( idOrnt, idOrnt, idVrtc );
    var idGd = charIDToTypeID( "Gd  " );
    desc45.putObject( idNw, idGd, desc46 );
executeAction( idMk, desc45, DialogModes.NO );
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc47 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
        var desc48 = new ActionDescriptor();
        var idPstn = charIDToTypeID( "Pstn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc48.putUnitDouble( idPstn, idPxl, 1397 );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idHrzn = charIDToTypeID( "Hrzn" );
        desc48.putEnumerated( idOrnt, idOrnt, idHrzn );
    var idGd = charIDToTypeID( "Gd  " );
    desc47.putObject( idNw, idGd, desc48 );
executeAction( idMk, desc47, DialogModes.NO );
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc49 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
        var desc50 = new ActionDescriptor();
        var idPstn = charIDToTypeID( "Pstn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc50.putUnitDouble( idPstn, idPxl, 711 );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idVrtc = charIDToTypeID( "Vrtc" );
        desc50.putEnumerated( idOrnt, idOrnt, idVrtc );
    var idGd = charIDToTypeID( "Gd  " );
    desc49.putObject( idNw, idGd, desc50 );
executeAction( idMk, desc49, DialogModes.NO );
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc51 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
        var desc52 = new ActionDescriptor();
        var idPstn = charIDToTypeID( "Pstn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc52.putUnitDouble( idPstn, idPxl, 711 );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idHrzn = charIDToTypeID( "Hrzn" );
        desc52.putEnumerated( idOrnt, idOrnt, idHrzn );
    var idGd = charIDToTypeID( "Gd  " );
    desc51.putObject( idNw, idGd, desc52 );
executeAction( idMk, desc51, DialogModes.NO );
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc60 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref23 = new ActionReference();
        var idcontentLayer = stringIDToTypeID( "contentLayer" );
        ref23.putClass( idcontentLayer );
    desc60.putReference( idnull, ref23 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc61 = new ActionDescriptor();
        var idType = charIDToTypeID( "Type" );
        var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
        desc61.putClass( idType, idsolidColorLayer );
        var idShp = charIDToTypeID( "Shp " );
            var desc62 = new ActionDescriptor();
            var idTop = charIDToTypeID( "Top " );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc62.putUnitDouble( idTop, idPxl, 0 );
            var idLeft = charIDToTypeID( "Left" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc62.putUnitDouble( idLeft, idPxl, 0 );
            var idBtom = charIDToTypeID( "Btom" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc62.putUnitDouble( idBtom, idPxl, 1422 );
            var idRght = charIDToTypeID( "Rght" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc62.putUnitDouble( idRght, idPxl, 1422 );
        var idRctn = charIDToTypeID( "Rctn" );
        desc61.putObject( idShp, idRctn, desc62 );
    var idcontentLayer = stringIDToTypeID( "contentLayer" );
    desc60.putObject( idUsng, idcontentLayer, desc61 );
executeAction( idMk, desc60, DialogModes.NO );
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc63 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref24 = new ActionReference();
        var idcontentLayer = stringIDToTypeID( "contentLayer" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref24.putEnumerated( idcontentLayer, idOrdn, idTrgt );
    desc63.putReference( idnull, ref24 );
    var idT = charIDToTypeID( "T   " );
        var desc64 = new ActionDescriptor();
        var idClr = charIDToTypeID( "Clr " );
            var desc65 = new ActionDescriptor();
            var idRd = charIDToTypeID( "Rd  " );
            desc65.putDouble( idRd, 255.000000 );
            var idGrn = charIDToTypeID( "Grn " );
            desc65.putDouble( idGrn, 255.000000 );
            var idBl = charIDToTypeID( "Bl  " );
            desc65.putDouble( idBl, 255.000000 );
        var idRGBC = charIDToTypeID( "RGBC" );
        desc64.putObject( idClr, idRGBC, desc65 );
    var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
    desc63.putObject( idT, idsolidColorLayer, desc64 );
executeAction( idsetd, desc63, DialogModes.NO );
// =======================================================
var idSbtF = charIDToTypeID( "SbtF" );
    var desc67 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref26 = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref26.putEnumerated( idPath, idOrdn, idTrgt );
    desc67.putReference( idnull, ref26 );
    var idT = charIDToTypeID( "T   " );
        var desc68 = new ActionDescriptor();
        var idTop = charIDToTypeID( "Top " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc68.putUnitDouble( idTop, idPxl, 25 );
        var idLeft = charIDToTypeID( "Left" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc68.putUnitDouble( idLeft, idPxl, 25 );
        var idBtom = charIDToTypeID( "Btom" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc68.putUnitDouble( idBtom, idPxl, 1397 );
        var idRght = charIDToTypeID( "Rght" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc68.putUnitDouble( idRght, idPxl, 1397 );
    var idElps = charIDToTypeID( "Elps" );
    desc67.putObject( idT, idElps, desc68 );
executeAction( idSbtF, desc67, DialogModes.NO );
// =======================================================
var idAddT = charIDToTypeID( "AddT" );
    var desc69 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref27 = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref27.putEnumerated( idPath, idOrdn, idTrgt );
    desc69.putReference( idnull, ref27 );
    var idT = charIDToTypeID( "T   " );
        var desc70 = new ActionDescriptor();
        var idTop = charIDToTypeID( "Top " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc70.putUnitDouble( idTop, idPxl, 510 );
        var idLeft = charIDToTypeID( "Left" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc70.putUnitDouble( idLeft, idPxl, 510 );
        var idBtom = charIDToTypeID( "Btom" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc70.putUnitDouble( idBtom, idPxl, 912 );
        var idRght = charIDToTypeID( "Rght" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc70.putUnitDouble( idRght, idPxl, 912 );
    var idElps = charIDToTypeID( "Elps" );
    desc69.putObject( idT, idElps, desc70 );
executeAction( idAddT, desc69, DialogModes.NO );
// =======================================================
doc.activeLayer = mergedLayer
// ===
};
//////////////////////////////
diskLabel ();
//////////////////////////////