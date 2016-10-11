/*
This script is a part of "Script Arsenal" kit
by Andrei Doubrovski
www.Script-Arsenal.com
*/ 
///////////////////////////////////////////////////////////
function burntEdges () {
//===================================
var doc = app.activeDocument
//===================================
var oldUnits = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;
var minSide = Math.min(doc.width, doc.height)
var marginWidth = minSide/18
// =======================================================
doc.activeLayer=doc.layers[0]
// =======================================================
var idCnvS = charIDToTypeID( "CnvS" );
    var desc32 = new ActionDescriptor();
    var idRltv = charIDToTypeID( "Rltv" );
    desc32.putBoolean( idRltv, true );
    var idWdth = charIDToTypeID( "Wdth" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc32.putUnitDouble( idWdth, idPxl, marginWidth );
    var idHght = charIDToTypeID( "Hght" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc32.putUnitDouble( idHght, idPxl, marginWidth );
    var idHrzn = charIDToTypeID( "Hrzn" );
    var idHrzL = charIDToTypeID( "HrzL" );
    var idCntr = charIDToTypeID( "Cntr" );
    desc32.putEnumerated( idHrzn, idHrzL, idCntr );
    var idVrtc = charIDToTypeID( "Vrtc" );
    var idVrtL = charIDToTypeID( "VrtL" );
    var idCntr = charIDToTypeID( "Cntr" );
    desc32.putEnumerated( idVrtc, idVrtL, idCntr );
    var idcanvasExtensionColorType = stringIDToTypeID( "canvasExtensionColorType" );
    var idcanvasExtensionColorType = stringIDToTypeID( "canvasExtensionColorType" );
    var idClr = charIDToTypeID( "Clr " );
    desc32.putEnumerated( idcanvasExtensionColorType, idcanvasExtensionColorType, idClr );
    var idcanvasExtensionColor = stringIDToTypeID( "canvasExtensionColor" );
        var desc33 = new ActionDescriptor();
        var idRd = charIDToTypeID( "Rd  " );
        desc33.putDouble( idRd, 255 );
        var idGrn = charIDToTypeID( "Grn " );
        desc33.putDouble( idGrn, 253 );
        var idBl = charIDToTypeID( "Bl  " );
        desc33.putDouble( idBl, 247 );
    var idRGBC = charIDToTypeID( "RGBC" );
    desc32.putObject( idcanvasExtensionColor, idRGBC, desc33 );
executeAction( idCnvS, desc32, DialogModes.NO );
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
//====================================
var w = doc.width
var h = doc.height
minSide = Math.min(w, h)
var smoothRadius = marginWidth/2*Math.random()
var featherRadius = marginWidth/12
var step = marginWidth/4
var amplitude = marginWidth/30
var shadowDistance = minSide/200
if (shadowDistance<1){
	shadowDistance=1
	}
// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc322 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref236 = new ActionReference();
        var idpolySelTool = stringIDToTypeID( "polySelTool" );
        ref236.putClass( idpolySelTool );
    desc322.putReference( idnull, ref236 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc322.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc322.putBoolean( idforceNotify, true );
executeAction( idslct, desc322, DialogModes.NO );
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc323 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref237 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref237.putProperty( idChnl, idfsel );
    desc323.putReference( idnull, ref237 );
    var idT = charIDToTypeID( "T   " );
        var desc324 = new ActionDescriptor();
        var idPts = charIDToTypeID( "Pts " );
            var list12 = new ActionList();
// ===============
var x= (marginWidth/2*Math.random())+(plusminus()*amplitude*Math.random() )
var y= (marginWidth/2*Math.random())+(plusminus()*amplitude*Math.random() )
var x0=x;
var y0=y;
var rad=0;
//=============
while ( x< w-(step*Math.random())){
// =============
			   var desc325 = new ActionDescriptor();
                var idHrzn = charIDToTypeID( "Hrzn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc325.putUnitDouble( idHrzn, idPxl, x );
                var idVrtc = charIDToTypeID( "Vrtc" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc325.putUnitDouble( idVrtc, idPxl, y );
            var idPnt = charIDToTypeID( "Pnt " );
            list12.putObject( idPnt, desc325 );
// =============
calcTop ()
// =============
}
while ( y< h-(step*Math.random())){
			   var desc325 = new ActionDescriptor();
                var idHrzn = charIDToTypeID( "Hrzn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc325.putUnitDouble( idHrzn, idPxl, x );
                var idVrtc = charIDToTypeID( "Vrtc" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc325.putUnitDouble( idVrtc, idPxl, y );
            var idPnt = charIDToTypeID( "Pnt " );
            list12.putObject( idPnt, desc325 );
// =============
calcRight ()
}
while ( x> step*Math.random()){
			   var desc325 = new ActionDescriptor();
                var idHrzn = charIDToTypeID( "Hrzn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc325.putUnitDouble( idHrzn, idPxl, x );
                var idVrtc = charIDToTypeID( "Vrtc" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc325.putUnitDouble( idVrtc, idPxl, y );
            var idPnt = charIDToTypeID( "Pnt " );
            list12.putObject( idPnt, desc325 );
// =============
calcBottom ()
}
while ( y> y0+step ){
			   var desc325 = new ActionDescriptor();
                var idHrzn = charIDToTypeID( "Hrzn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc325.putUnitDouble( idHrzn, idPxl, x );
                var idVrtc = charIDToTypeID( "Vrtc" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc325.putUnitDouble( idVrtc, idPxl, y );
            var idPnt = charIDToTypeID( "Pnt " );
            list12.putObject( idPnt, desc325 );
// =============
calcLeft ()
}
// =============
desc324.putList( idPts, list12 );
    var idPlgn = charIDToTypeID( "Plgn" );
    desc323.putObject( idT, idPlgn, desc324 );
    var idAntA = charIDToTypeID( "AntA" );
    desc323.putBoolean( idAntA, true );
executeAction( idsetd, desc323, DialogModes.NO );
// =======================================================
var idSmth = charIDToTypeID( "Smth" );
    var desc77 = new ActionDescriptor();
    var idRds = charIDToTypeID( "Rds " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc77.putUnitDouble( idRds, idPxl, smoothRadius );
executeAction( idSmth, desc77, DialogModes.NO );
// =======================================================
var idFthr = charIDToTypeID( "Fthr" );
    var desc93 = new ActionDescriptor();
    var idRds = charIDToTypeID( "Rds " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc93.putUnitDouble( idRds, idPxl, featherRadius );
executeAction( idFthr, desc93, DialogModes.NO );
// =======================================================
var selectionName="Channel-"+Math.random()
//=========
var idDplc = charIDToTypeID( "Dplc" );
    var desc139 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref105 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref105.putProperty( idChnl, idfsel );
    desc139.putReference( idnull, ref105 );
    var idNm = charIDToTypeID( "Nm  " );
    desc139.putString( idNm, selectionName );
executeAction( idDplc, desc139, DialogModes.NO );
// =======================================================
var idCnvS = charIDToTypeID( "CnvS" );
    var desc32 = new ActionDescriptor();
    var idRltv = charIDToTypeID( "Rltv" );
    desc32.putBoolean( idRltv, true );
    var idWdth = charIDToTypeID( "Wdth" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc32.putUnitDouble( idWdth, idPxl, marginWidth );
    var idHght = charIDToTypeID( "Hght" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc32.putUnitDouble( idHght, idPxl, marginWidth );
    var idHrzn = charIDToTypeID( "Hrzn" );
    var idHrzL = charIDToTypeID( "HrzL" );
    var idCntr = charIDToTypeID( "Cntr" );
    desc32.putEnumerated( idHrzn, idHrzL, idCntr );
    var idVrtc = charIDToTypeID( "Vrtc" );
    var idVrtL = charIDToTypeID( "VrtL" );
    var idCntr = charIDToTypeID( "Cntr" );
    desc32.putEnumerated( idVrtc, idVrtL, idCntr );
    var idcanvasExtensionColorType = stringIDToTypeID( "canvasExtensionColorType" );
    var idcanvasExtensionColorType = stringIDToTypeID( "canvasExtensionColorType" );
    var idClr = charIDToTypeID( "Clr " );
    desc32.putEnumerated( idcanvasExtensionColorType, idcanvasExtensionColorType, idClr );
    var idcanvasExtensionColor = stringIDToTypeID( "canvasExtensionColor" );
        var desc33 = new ActionDescriptor();
        var idRd = charIDToTypeID( "Rd  " );
        desc33.putDouble( idRd, 255 );
        var idGrn = charIDToTypeID( "Grn " );
        desc33.putDouble( idGrn, 255 );
        var idBl = charIDToTypeID( "Bl  " );
        desc33.putDouble( idBl, 255 );
    var idRGBC = charIDToTypeID( "RGBC" );
    desc32.putObject( idcanvasExtensionColor, idRGBC, desc33 );
executeAction( idCnvS, desc32, DialogModes.NO );
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc7 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref5 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref5.putProperty( idChnl, idfsel );
    desc7.putReference( idnull, ref5 );
    var idT = charIDToTypeID( "T   " );
        var ref6 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        ref6.putName( idChnl, selectionName );
    desc7.putReference( idT, ref6 );
executeAction( idsetd, desc7, DialogModes.NO );
// =======================================================
doc.selection.invert()
// =======================================================
var idFl = charIDToTypeID( "Fl  " );
    var desc105 = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
    var idFlCn = charIDToTypeID( "FlCn" );
    var idClr = charIDToTypeID( "Clr " );
    desc105.putEnumerated( idUsng, idFlCn, idClr );
    var idClr = charIDToTypeID( "Clr " );
        var desc106 = new ActionDescriptor();
        var idRd = charIDToTypeID( "Rd  " );
        desc106.putDouble( idRd, 210 );
        var idGrn = charIDToTypeID( "Grn " );
        desc106.putDouble( idGrn, 180 );
        var idBl = charIDToTypeID( "Bl  " );
        desc106.putDouble( idBl, 140 );
    var idRGBC = charIDToTypeID( "RGBC" );
    desc105.putObject( idClr, idRGBC, desc106 );
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc105.putUnitDouble( idOpct, idPrc, 100 );
    var idMd = charIDToTypeID( "Md  " );
    var idBlnM = charIDToTypeID( "BlnM" );
    var idNrml = charIDToTypeID( "Nrml" );
    desc105.putEnumerated( idMd, idBlnM, idNrml );
executeAction( idFl, desc105, DialogModes.NO );
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc7 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref5 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref5.putProperty( idChnl, idfsel );
    desc7.putReference( idnull, ref5 );
    var idT = charIDToTypeID( "T   " );
        var ref6 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        ref6.putName( idChnl, selectionName );
    desc7.putReference( idT, ref6 );
executeAction( idsetd, desc7, DialogModes.NO );
// =======================================================
var idExpn = charIDToTypeID( "Expn" );
    var desc4 = new ActionDescriptor();
    var idBy = charIDToTypeID( "By  " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc4.putUnitDouble( idBy, idPxl, featherRadius );
executeAction( idExpn, desc4, DialogModes.NO );
// =======================================================
doc.selection.invert()
// =======================================================
var idFl = charIDToTypeID( "Fl  " );
    var desc105 = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
    var idFlCn = charIDToTypeID( "FlCn" );
    var idClr = charIDToTypeID( "Clr " );
    desc105.putEnumerated( idUsng, idFlCn, idClr );
    var idClr = charIDToTypeID( "Clr " );
        var desc106 = new ActionDescriptor();
        var idRd = charIDToTypeID( "Rd  " );
        desc106.putDouble( idRd, 199 );
        var idGrn = charIDToTypeID( "Grn " );
        desc106.putDouble( idGrn, 162 );
        var idBl = charIDToTypeID( "Bl  " );
        desc106.putDouble( idBl, 118 );
    var idRGBC = charIDToTypeID( "RGBC" );
    desc105.putObject( idClr, idRGBC, desc106 );
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc105.putUnitDouble( idOpct, idPrc, 100 );
    var idMd = charIDToTypeID( "Md  " );
    var idBlnM = charIDToTypeID( "BlnM" );
    var idNrml = charIDToTypeID( "Nrml" );
    desc105.putEnumerated( idMd, idBlnM, idNrml );
executeAction( idFl, desc105, DialogModes.NO );
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc7 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref5 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref5.putProperty( idChnl, idfsel );
    desc7.putReference( idnull, ref5 );
    var idT = charIDToTypeID( "T   " );
        var ref6 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        ref6.putName( idChnl, selectionName );
    desc7.putReference( idT, ref6 );
executeAction( idsetd, desc7, DialogModes.NO );
// =======================================================
var idExpn = charIDToTypeID( "Expn" );
    var desc4 = new ActionDescriptor();
    var idBy = charIDToTypeID( "By  " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc4.putUnitDouble( idBy, idPxl, featherRadius*2 );
executeAction( idExpn, desc4, DialogModes.NO );
// =======================================================
doc.selection.invert()
// =======================================================
var idFl = charIDToTypeID( "Fl  " );
    var desc105 = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
    var idFlCn = charIDToTypeID( "FlCn" );
    var idClr = charIDToTypeID( "Clr " );
    desc105.putEnumerated( idUsng, idFlCn, idClr );
    var idClr = charIDToTypeID( "Clr " );
        var desc106 = new ActionDescriptor();
        var idRd = charIDToTypeID( "Rd  " );
        desc106.putDouble( idRd, 165 );
        var idGrn = charIDToTypeID( "Grn " );
        desc106.putDouble( idGrn, 135 );
        var idBl = charIDToTypeID( "Bl  " );
        desc106.putDouble( idBl, 99 );
    var idRGBC = charIDToTypeID( "RGBC" );
    desc105.putObject( idClr, idRGBC, desc106 );
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc105.putUnitDouble( idOpct, idPrc, 100 );
    var idMd = charIDToTypeID( "Md  " );
    var idBlnM = charIDToTypeID( "BlnM" );
    var idNrml = charIDToTypeID( "Nrml" );
    desc105.putEnumerated( idMd, idBlnM, idNrml );
executeAction( idFl, desc105, DialogModes.NO );
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc7 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref5 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref5.putProperty( idChnl, idfsel );
    desc7.putReference( idnull, ref5 );
    var idT = charIDToTypeID( "T   " );
        var ref6 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        ref6.putName( idChnl, selectionName );
    desc7.putReference( idT, ref6 );
executeAction( idsetd, desc7, DialogModes.NO );
// =======================================================
var idExpn = charIDToTypeID( "Expn" );
    var desc4 = new ActionDescriptor();
    var idBy = charIDToTypeID( "By  " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc4.putUnitDouble( idBy, idPxl, featherRadius*3 );
executeAction( idExpn, desc4, DialogModes.NO );
// =======================================================
doc.selection.invert()
// =======================================================
var idFl = charIDToTypeID( "Fl  " );
    var desc136 = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
    var idFlCn = charIDToTypeID( "FlCn" );
    var idClr = charIDToTypeID( "Clr " );
    desc136.putEnumerated( idUsng, idFlCn, idClr );
    var idClr = charIDToTypeID( "Clr " );
        var desc137 = new ActionDescriptor();
        var idRd = charIDToTypeID( "Rd  " );
        desc137.putDouble( idRd, 131 );
        var idGrn = charIDToTypeID( "Grn " );
        desc137.putDouble( idGrn, 105 );
        var idBl = charIDToTypeID( "Bl  " );
        desc137.putDouble( idBl, 80 );
    var idRGBC = charIDToTypeID( "RGBC" );
    desc136.putObject( idClr, idRGBC, desc137 );
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc136.putUnitDouble( idOpct, idPrc, 100 );
    var idMd = charIDToTypeID( "Md  " );
    var idBlnM = charIDToTypeID( "BlnM" );
    var idNrml = charIDToTypeID( "Nrml" );
    desc136.putEnumerated( idMd, idBlnM, idNrml );
executeAction( idFl, desc136, DialogModes.NO );
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc7 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref5 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref5.putProperty( idChnl, idfsel );
    desc7.putReference( idnull, ref5 );
    var idT = charIDToTypeID( "T   " );
        var ref6 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        ref6.putName( idChnl, selectionName );
    desc7.putReference( idT, ref6 );
executeAction( idsetd, desc7, DialogModes.NO );
// =======================================================
var idExpn = charIDToTypeID( "Expn" );
    var desc4 = new ActionDescriptor();
    var idBy = charIDToTypeID( "By  " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc4.putUnitDouble( idBy, idPxl, featherRadius*4 );
executeAction( idExpn, desc4, DialogModes.NO );
// =======================================================
doc.selection.invert()
// =======================================================
var idFl = charIDToTypeID( "Fl  " );
    var desc156 = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
    var idFlCn = charIDToTypeID( "FlCn" );
    var idClr = charIDToTypeID( "Clr " );
    desc156.putEnumerated( idUsng, idFlCn, idClr );
    var idClr = charIDToTypeID( "Clr " );
        var desc157 = new ActionDescriptor();
        var idRd = charIDToTypeID( "Rd  " );
        desc157.putDouble( idRd, 97 );
        var idGrn = charIDToTypeID( "Grn " );
        desc157.putDouble( idGrn, 80 );
        var idBl = charIDToTypeID( "Bl  " );
        desc157.putDouble( idBl, 62 );
    var idRGBC = charIDToTypeID( "RGBC" );
    desc156.putObject( idClr, idRGBC, desc157 );
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc156.putUnitDouble( idOpct, idPrc, 100 );
    var idMd = charIDToTypeID( "Md  " );
    var idBlnM = charIDToTypeID( "BlnM" );
    var idNrml = charIDToTypeID( "Nrml" );
    desc156.putEnumerated( idMd, idBlnM, idNrml );
executeAction( idFl, desc156, DialogModes.NO );
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc7 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref5 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref5.putProperty( idChnl, idfsel );
    desc7.putReference( idnull, ref5 );
    var idT = charIDToTypeID( "T   " );
        var ref6 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        ref6.putName( idChnl, selectionName );
    desc7.putReference( idT, ref6 );
executeAction( idsetd, desc7, DialogModes.NO );
// =======================================================
var idExpn = charIDToTypeID( "Expn" );
    var desc4 = new ActionDescriptor();
    var idBy = charIDToTypeID( "By  " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc4.putUnitDouble( idBy, idPxl, featherRadius*5 );
executeAction( idExpn, desc4, DialogModes.NO );
// =======================================================
doc.selection.invert()
// =======================================================
var idFl = charIDToTypeID( "Fl  " );
    var desc156 = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
    var idFlCn = charIDToTypeID( "FlCn" );
    var idClr = charIDToTypeID( "Clr " );
    desc156.putEnumerated( idUsng, idFlCn, idClr );
    var idClr = charIDToTypeID( "Clr " );
        var desc157 = new ActionDescriptor();
        var idRd = charIDToTypeID( "Rd  " );
        desc157.putDouble( idRd, 31 );
        var idGrn = charIDToTypeID( "Grn " );
        desc157.putDouble( idGrn, 36 );
        var idBl = charIDToTypeID( "Bl  " );
        desc157.putDouble( idBl, 23 );
    var idRGBC = charIDToTypeID( "RGBC" );
    desc156.putObject( idClr, idRGBC, desc157 );
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc156.putUnitDouble( idOpct, idPrc, 100 );
    var idMd = charIDToTypeID( "Md  " );
    var idBlnM = charIDToTypeID( "BlnM" );
    var idNrml = charIDToTypeID( "Nrml" );
    desc156.putEnumerated( idMd, idBlnM, idNrml );
executeAction( idFl, desc156, DialogModes.NO );
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc7 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref5 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref5.putProperty( idChnl, idfsel );
    desc7.putReference( idnull, ref5 );
    var idT = charIDToTypeID( "T   " );
        var ref6 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        ref6.putName( idChnl, selectionName );
    desc7.putReference( idT, ref6 );
executeAction( idsetd, desc7, DialogModes.NO );
// =======================================================
var idExpn = charIDToTypeID( "Expn" );
    var desc4 = new ActionDescriptor();
    var idBy = charIDToTypeID( "By  " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc4.putUnitDouble( idBy, idPxl, featherRadius*6 );
executeAction( idExpn, desc4, DialogModes.NO );
// =======================================================
doc.selection.invert()
// =======================================================
var idFl = charIDToTypeID( "Fl  " );
    var desc156 = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
    var idFlCn = charIDToTypeID( "FlCn" );
    var idClr = charIDToTypeID( "Clr " );
    desc156.putEnumerated( idUsng, idFlCn, idClr );
    var idClr = charIDToTypeID( "Clr " );
        var desc157 = new ActionDescriptor();
        var idRd = charIDToTypeID( "Rd  " );
        desc157.putDouble( idRd, 12 );
        var idGrn = charIDToTypeID( "Grn " );
        desc157.putDouble( idGrn, 14 );
        var idBl = charIDToTypeID( "Bl  " );
        desc157.putDouble( idBl, 9 );
    var idRGBC = charIDToTypeID( "RGBC" );
    desc156.putObject( idClr, idRGBC, desc157 );
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc156.putUnitDouble( idOpct, idPrc, 100 );
    var idMd = charIDToTypeID( "Md  " );
    var idBlnM = charIDToTypeID( "BlnM" );
    var idNrml = charIDToTypeID( "Nrml" );
    desc156.putEnumerated( idMd, idBlnM, idNrml );
executeAction( idFl, desc156, DialogModes.NO );
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc7 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref5 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref5.putProperty( idChnl, idfsel );
    desc7.putReference( idnull, ref5 );
    var idT = charIDToTypeID( "T   " );
        var ref6 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        ref6.putName( idChnl, selectionName );
    desc7.putReference( idT, ref6 );
executeAction( idsetd, desc7, DialogModes.NO );
// =======================================================
var idExpn = charIDToTypeID( "Expn" );
    var desc4 = new ActionDescriptor();
    var idBy = charIDToTypeID( "By  " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc4.putUnitDouble( idBy, idPxl, featherRadius*7 );
executeAction( idExpn, desc4, DialogModes.NO );
// =======================================================
doc.selection.invert()
// =======================================================
var idFl = charIDToTypeID( "Fl  " );
    var desc156 = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
    var idFlCn = charIDToTypeID( "FlCn" );
    var idClr = charIDToTypeID( "Clr " );
    desc156.putEnumerated( idUsng, idFlCn, idClr );
    var idClr = charIDToTypeID( "Clr " );
        var desc157 = new ActionDescriptor();
        var idRd = charIDToTypeID( "Rd  " );
        desc157.putDouble( idRd, 0 );
        var idGrn = charIDToTypeID( "Grn " );
        desc157.putDouble( idGrn, 0 );
        var idBl = charIDToTypeID( "Bl  " );
        desc157.putDouble( idBl, 0 );
    var idRGBC = charIDToTypeID( "RGBC" );
    desc156.putObject( idClr, idRGBC, desc157 );
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc156.putUnitDouble( idOpct, idPrc, 100 );
    var idMd = charIDToTypeID( "Md  " );
    var idBlnM = charIDToTypeID( "BlnM" );
    var idNrml = charIDToTypeID( "Nrml" );
    desc156.putEnumerated( idMd, idBlnM, idNrml );
executeAction( idFl, desc156, DialogModes.NO );
// ===============
doc.selection.deselect()
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc323 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref237 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref237.putProperty( idChnl, idfsel );
    desc323.putReference( idnull, ref237 );
    var idT = charIDToTypeID( "T   " );
        var desc324 = new ActionDescriptor();
        var idPts = charIDToTypeID( "Pts " );
            var list12 = new ActionList();
// ===============
w=doc.width
h=doc.height
x = x0+(plusminus()*amplitude*Math.random())
y = y0+(plusminus()*amplitude*Math.random())
x0=x
y0=y
// =======================================================
app.preferences.rulerUnits = oldUnits;
// =======================================================
while ( x< w-(step*Math.random())){
// =============
			   var desc325 = new ActionDescriptor();
                var idHrzn = charIDToTypeID( "Hrzn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc325.putUnitDouble( idHrzn, idPxl, x );
                var idVrtc = charIDToTypeID( "Vrtc" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc325.putUnitDouble( idVrtc, idPxl, y );
            var idPnt = charIDToTypeID( "Pnt " );
            list12.putObject( idPnt, desc325 );
calcTop ()
// =============
}
while ( y< h-(step*Math.random())){
			   var desc325 = new ActionDescriptor();
                var idHrzn = charIDToTypeID( "Hrzn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc325.putUnitDouble( idHrzn, idPxl, x );
                var idVrtc = charIDToTypeID( "Vrtc" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc325.putUnitDouble( idVrtc, idPxl, y );
            var idPnt = charIDToTypeID( "Pnt " );
            list12.putObject( idPnt, desc325 );
// =============
calcRight ()
}
while ( x> step*Math.random()){
			   var desc325 = new ActionDescriptor();
                var idHrzn = charIDToTypeID( "Hrzn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc325.putUnitDouble( idHrzn, idPxl, x );
                var idVrtc = charIDToTypeID( "Vrtc" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc325.putUnitDouble( idVrtc, idPxl, y );
            var idPnt = charIDToTypeID( "Pnt " );
            list12.putObject( idPnt, desc325 );
// =============
calcBottom ()
}
desc324.putList( idPts, list12 );
    var idPlgn = charIDToTypeID( "Plgn" );
    desc323.putObject( idT, idPlgn, desc324 );
    var idAntA = charIDToTypeID( "AntA" );
    desc323.putBoolean( idAntA, true );
executeAction( idsetd, desc323, DialogModes.NO );
while ( y> y0+step ){
			  var desc325 = new ActionDescriptor();
                var idHrzn = charIDToTypeID( "Hrzn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc325.putUnitDouble( idHrzn, idPxl, x );
                var idVrtc = charIDToTypeID( "Vrtc" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc325.putUnitDouble( idVrtc, idPxl, y );
            var idPnt = charIDToTypeID( "Pnt " );
            list12.putObject( idPnt, desc325 );
// =============
calcLeft ()
}
// =============
desc324.putList( idPts, list12 );
    var idPlgn = charIDToTypeID( "Plgn" );
    desc323.putObject( idT, idPlgn, desc324 );
    var idAntA = charIDToTypeID( "AntA" );
    desc323.putBoolean( idAntA, true );
executeAction( idsetd, desc323, DialogModes.NO );
// =======================================================
var idIntW = charIDToTypeID( "IntW" );
    var desc135 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref70 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref70.putProperty( idChnl, idfsel );
    desc135.putReference( idnull, ref70 );
    var idT = charIDToTypeID( "T   " );
        var desc136 = new ActionDescriptor();
        var idTop = charIDToTypeID( "Top " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc136.putUnitDouble( idTop, idPxl, marginWidth/4 );
        var idLeft = charIDToTypeID( "Left" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc136.putUnitDouble( idLeft, idPxl, marginWidth/4 );
        var idBtom = charIDToTypeID( "Btom" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc136.putUnitDouble( idBtom, idPxl, h-marginWidth/4 );
        var idRght = charIDToTypeID( "Rght" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc136.putUnitDouble( idRght, idPxl, w-marginWidth/4 );
    var idRctn = charIDToTypeID( "Rctn" );
    desc135.putObject( idT, idRctn, desc136 );
executeAction( idIntW, desc135, DialogModes.NO );
// =======================================================
var idSmth = charIDToTypeID( "Smth" );
    var desc77 = new ActionDescriptor();
    var idRds = charIDToTypeID( "Rds " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc77.putUnitDouble( idRds, idPxl, smoothRadius/4 );
executeAction( idSmth, desc77, DialogModes.NO );
// =======================================================
doc.selection.invert()
doc.selection.clear()
doc.selection.deselect()
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc134 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref85 = new ActionReference();
        var idPrpr = charIDToTypeID( "Prpr" );
        var idLefx = charIDToTypeID( "Lefx" );
        ref85.putProperty( idPrpr, idLefx );
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref85.putEnumerated( idLyr, idOrdn, idTrgt );
    desc134.putReference( idnull, ref85 );
    var idT = charIDToTypeID( "T   " );
        var desc135 = new ActionDescriptor();
        var idScl = charIDToTypeID( "Scl " );
        var idPrc = charIDToTypeID( "#Prc" );
        desc135.putUnitDouble( idScl, idPrc, 250.000000 );
        var idDrSh = charIDToTypeID( "DrSh" );
            var desc136 = new ActionDescriptor();
            var idenab = charIDToTypeID( "enab" );
            desc136.putBoolean( idenab, true );
            var idMd = charIDToTypeID( "Md  " );
            var idBlnM = charIDToTypeID( "BlnM" );
            var idMltp = charIDToTypeID( "Mltp" );
            desc136.putEnumerated( idMd, idBlnM, idMltp );
            var idClr = charIDToTypeID( "Clr " );
                var desc137 = new ActionDescriptor();
                var idRd = charIDToTypeID( "Rd  " );
                desc137.putDouble( idRd, 0.000000 );
                var idGrn = charIDToTypeID( "Grn " );
                desc137.putDouble( idGrn, 0.000000 );
                var idBl = charIDToTypeID( "Bl  " );
                desc137.putDouble( idBl, 0.000000 );
            var idRGBC = charIDToTypeID( "RGBC" );
            desc136.putObject( idClr, idRGBC, desc137 );
            var idOpct = charIDToTypeID( "Opct" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc136.putUnitDouble( idOpct, idPrc, 25 );
            var iduglg = charIDToTypeID( "uglg" );
            desc136.putBoolean( iduglg, true );
            var idlagl = charIDToTypeID( "lagl" );
            var idAng = charIDToTypeID( "#Ang" );
            desc136.putUnitDouble( idlagl, idAng, 135.000000 );
            var idDstn = charIDToTypeID( "Dstn" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc136.putUnitDouble( idDstn, idPxl, shadowDistance );
            var idCkmt = charIDToTypeID( "Ckmt" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc136.putUnitDouble( idCkmt, idPxl, shadowDistance*2 );
            var idblur = charIDToTypeID( "blur" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc136.putUnitDouble( idblur, idPxl, shadowDistance*2 );
            var idNose = charIDToTypeID( "Nose" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc136.putUnitDouble( idNose, idPrc, 0.000000 );
            var idAntA = charIDToTypeID( "AntA" );
            desc136.putBoolean( idAntA, false );
            var idTrnS = charIDToTypeID( "TrnS" );
                var desc138 = new ActionDescriptor();
                var idNm = charIDToTypeID( "Nm  " );
                desc138.putString( idNm, "Linear" );
            var idShpC = charIDToTypeID( "ShpC" );
            desc136.putObject( idTrnS, idShpC, desc138 );
            var idlayerConceals = stringIDToTypeID( "layerConceals" );
            desc136.putBoolean( idlayerConceals, true );
        var idDrSh = charIDToTypeID( "DrSh" );
        desc135.putObject( idDrSh, idDrSh, desc136 );
    var idLefx = charIDToTypeID( "Lefx" );
    desc134.putObject( idT, idLefx, desc135 );
executeAction( idsetd, desc134, DialogModes.NO );
// =======================================================
////////////////////////////////////////////////////
function plusminus () {
if ( Math.random()>0.5 ){
	return (1)
} else {
	return (-1)
}
};
// =======================================================
function calcTop () {
	x = x+step*Math.random()
	y=y+plusminus()*amplitude*Math.random()
	if (y<amplitude){
		y=amplitude+amplitude*Math.random()
		}
	if (y > marginWidth-amplitude ){
		y=marginWidth-amplitude-(amplitude*Math.random())
		}
	}
//===
function calcRight () {
	y = y+step*Math.random()
	x=x+plusminus()*amplitude*Math.random()
	if (x>w-amplitude){
		x=w-amplitude-amplitude*Math.random()
		}
	if (x < w-marginWidth+amplitude){
		x=w-marginWidth+amplitude+(amplitude*Math.random())
		}
	}
//===
function calcBottom () {
	x = x-step*Math.random()
	y=y+plusminus()*amplitude*Math.random()
	if (y>h-amplitude){
		y=h-amplitude-(amplitude*Math.random())
		}
	if (y < h-marginWidth+amplitude){
		y=h-marginWidth+amplitude+(amplitude*Math.random())
		}
	}
//===
function calcLeft () {
	y = y-step*Math.random()
	x=x+plusminus()*amplitude*Math.random()
	if (x<amplitude){
		x=amplitude+amplitude*Math.random()
		}
	if (x > marginWidth-amplitude){
		x=marginWidth-amplitude-(amplitude*Math.random())
		}
	if ( y<y0+h/2 && Math.abs(x-x0)>step ){
		x+=Math.abs(x-x0)/(x0-x)*amplitude*Math.random()
		}
	}
//===
};
//===========
 burntEdges ();
//================== 
