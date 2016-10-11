/*
This script is a part of "Script Arsenal" kit
by Andrei Doubrovski
www.Script-Arsenal.com
*/ 
///////////////////////////////////////////////////////////
function tornEdges () {
//===================================
var doc = app.activeDocument
//===================================
var oldUnits = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;
var w = doc.width
var h = doc.height
app.preferences.rulerUnits = oldUnits;
//====================================
var minSide = Math.min(w, h)
var borderWidth = 3    //   % of the smaller side
borderWidth = borderWidth*minSide/100
var step = borderWidth/5
var amplitude = borderWidth/15
if ( w<=h ){
var hScaling=101
var vScaling=100+(w*hScaling/100 -w+h)/h
} else {
var vScaling=101
var hScaling=100+(h*vScaling/100 -h+w)/w
}
var shadowDistance = minSide/200
if (shadowDistance<1){
	shadowDistance=1
	}
// =======================================================
doc.activeLayer=doc.layers[0]
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
var x= (borderWidth/2)+(plusminus()*borderWidth/4)
var y= (borderWidth/2)+(plusminus()*borderWidth/4)
var x0=x;
var y0=y;
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
desc324.putList( idPts, list12 );
    var idPlgn = charIDToTypeID( "Plgn" );
    desc323.putObject( idT, idPlgn, desc324 );
    var idAntA = charIDToTypeID( "AntA" );
    desc323.putBoolean( idAntA, true );
executeAction( idsetd, desc323, DialogModes.NO );
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
var idMk = charIDToTypeID( "Mk  " );
    var desc133 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref36 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref36.putClass( idLyr );
    desc133.putReference( idnull, ref36 );
executeAction( idMk, desc133, DialogModes.NO );
// =======================================================
doc.selection.copy (true)
// =======================================================
var idCnvS = charIDToTypeID( "CnvS" );
    var desc135 = new ActionDescriptor();
    var idRltv = charIDToTypeID( "Rltv" );
    desc135.putBoolean( idRltv, true );
    var idWdth = charIDToTypeID( "Wdth" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc135.putUnitDouble( idWdth, idPxl, borderWidth );
    var idHght = charIDToTypeID( "Hght" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc135.putUnitDouble( idHght, idPxl, borderWidth );
    var idHrzn = charIDToTypeID( "Hrzn" );
    var idHrzL = charIDToTypeID( "HrzL" );
    var idCntr = charIDToTypeID( "Cntr" );
    desc135.putEnumerated( idHrzn, idHrzL, idCntr );
    var idVrtc = charIDToTypeID( "Vrtc" );
    var idVrtL = charIDToTypeID( "VrtL" );
    var idCntr = charIDToTypeID( "Cntr" );
    desc135.putEnumerated( idVrtc, idVrtL, idCntr );
    var idcanvasExtensionColorType = stringIDToTypeID( "canvasExtensionColorType" );
    var idcanvasExtensionColorType = stringIDToTypeID( "canvasExtensionColorType" );
    var idBckC = charIDToTypeID( "BckC" );
    desc135.putEnumerated( idcanvasExtensionColorType, idcanvasExtensionColorType, idBckC );
executeAction( idCnvS, desc135, DialogModes.NO );
// =======================================================
doc.paste(false)
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc18 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref11 = new ActionReference();
        var idcontentLayer = stringIDToTypeID( "contentLayer" );
        ref11.putClass( idcontentLayer );
    desc18.putReference( idnull, ref11 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc19 = new ActionDescriptor();
        var idType = charIDToTypeID( "Type" );
            var desc20 = new ActionDescriptor();
            var idClr = charIDToTypeID( "Clr " );
                var desc21 = new ActionDescriptor();
                var idRd = charIDToTypeID( "Rd  " );
                desc21.putDouble( idRd, 255.000000 );
                var idGrn = charIDToTypeID( "Grn " );
                desc21.putDouble( idGrn, 255.000000 );
                var idBl = charIDToTypeID( "Bl  " );
                desc21.putDouble( idBl, 255.000000 );
            var idRGBC = charIDToTypeID( "RGBC" );
            desc20.putObject( idClr, idRGBC, desc21 );
        var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
        desc19.putObject( idType, idsolidColorLayer, desc20 );
    var idcontentLayer = stringIDToTypeID( "contentLayer" );
    desc18.putObject( idUsng, idcontentLayer, desc19 );
executeAction( idMk, desc18, DialogModes.NO );
// =======================================================
var idmove = charIDToTypeID( "move" );
    var desc22 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref12 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref12.putEnumerated( idLyr, idOrdn, idTrgt );
    desc22.putReference( idnull, ref12 );
    var idT = charIDToTypeID( "T   " );
        var ref13 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idPrvs = charIDToTypeID( "Prvs" );
        ref13.putEnumerated( idLyr, idOrdn, idPrvs );
    desc22.putReference( idT, ref13 );
executeAction( idmove, desc22, DialogModes.NO );
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
x = x0-(amplitude*Math.random()/2)
y = y0-(amplitude*Math.random()/2)
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
desc324.putList( idPts, list12 );
    var idPlgn = charIDToTypeID( "Plgn" );
    desc323.putObject( idT, idPlgn, desc324 );
    var idAntA = charIDToTypeID( "AntA" );
    desc323.putBoolean( idAntA, true );
executeAction( idsetd, desc323, DialogModes.NO );
// =======================================================
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc133 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref36 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref36.putClass( idLyr );
    desc133.putReference( idnull, ref36 );
executeAction( idMk, desc133, DialogModes.NO );
// =======================================================
var idFl = charIDToTypeID( "Fl  " );
    var desc160 = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
    var idFlCn = charIDToTypeID( "FlCn" );
    var idClr = charIDToTypeID( "Clr " );
    desc160.putEnumerated( idUsng, idFlCn, idClr );
    var idClr = charIDToTypeID( "Clr " );
        var desc161 = new ActionDescriptor();
        var idH = charIDToTypeID( "H   " );
        var idAng = charIDToTypeID( "#Ang" );
        desc161.putUnitDouble( idH, idAng, 47.960815 );
        var idStrt = charIDToTypeID( "Strt" );
        desc161.putDouble( idStrt, 1.962310 );
        var idBrgh = charIDToTypeID( "Brgh" );
        desc161.putDouble( idBrgh, 94.509804 );
    var idHSBC = charIDToTypeID( "HSBC" );
    desc160.putObject( idClr, idHSBC, desc161 );
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc160.putUnitDouble( idOpct, idPrc, 100.000000 );
    var idMd = charIDToTypeID( "Md  " );
    var idBlnM = charIDToTypeID( "BlnM" );
    var idNrml = charIDToTypeID( "Nrml" );
    desc160.putEnumerated( idMd, idBlnM, idNrml );
executeAction( idFl, desc160, DialogModes.NO );
// =======================================================
doc.selection.deselect()
// =======================================================
var idTrnf = charIDToTypeID( "Trnf" );
    var desc132 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref84 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref84.putEnumerated( idLyr, idOrdn, idTrgt );
    desc132.putReference( idnull, ref84 );
    var idFTcs = charIDToTypeID( "FTcs" );
    var idQCSt = charIDToTypeID( "QCSt" );
    var idQcsa = charIDToTypeID( "Qcsa" );
    desc132.putEnumerated( idFTcs, idQCSt, idQcsa );
    var idOfst = charIDToTypeID( "Ofst" );
        var desc133 = new ActionDescriptor();
        var idHrzn = charIDToTypeID( "Hrzn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc133.putUnitDouble( idHrzn, idPxl, borderWidth/2 );
        var idVrtc = charIDToTypeID( "Vrtc" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc133.putUnitDouble( idVrtc, idPxl, borderWidth/2 );
    var idOfst = charIDToTypeID( "Ofst" );
    desc132.putObject( idOfst, idOfst, desc133 );
    var idWdth = charIDToTypeID( "Wdth" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc132.putUnitDouble( idWdth, idPrc, hScaling );
    var idHght = charIDToTypeID( "Hght" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc132.putUnitDouble( idHght, idPrc, vScaling );
    var idLnkd = charIDToTypeID( "Lnkd" );
    desc132.putBoolean( idLnkd, true );
executeAction( idTrnf, desc132, DialogModes.NO );
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc547 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref260 = new ActionReference();
        var idPrpr = charIDToTypeID( "Prpr" );
        var idLefx = charIDToTypeID( "Lefx" );
        ref260.putProperty( idPrpr, idLefx );
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref260.putEnumerated( idLyr, idOrdn, idTrgt );
    desc547.putReference( idnull, ref260 );
    var idT = charIDToTypeID( "T   " );
        var desc548 = new ActionDescriptor();
        var idScl = charIDToTypeID( "Scl " );
        var idPrc = charIDToTypeID( "#Prc" );
        desc548.putUnitDouble( idScl, idPrc, 250.000000 );
        var idDrSh = charIDToTypeID( "DrSh" );
            var desc549 = new ActionDescriptor();
            var idenab = charIDToTypeID( "enab" );
            desc549.putBoolean( idenab, true );
            var idMd = charIDToTypeID( "Md  " );
            var idBlnM = charIDToTypeID( "BlnM" );
            var idMltp = charIDToTypeID( "Mltp" );
            desc549.putEnumerated( idMd, idBlnM, idMltp );
            var idClr = charIDToTypeID( "Clr " );
                var desc550 = new ActionDescriptor();
                var idRd = charIDToTypeID( "Rd  " );
                desc550.putDouble( idRd, 0.000000 );
                var idGrn = charIDToTypeID( "Grn " );
                desc550.putDouble( idGrn, 0.000000 );
                var idBl = charIDToTypeID( "Bl  " );
                desc550.putDouble( idBl, 0.000000 );
            var idRGBC = charIDToTypeID( "RGBC" );
            desc549.putObject( idClr, idRGBC, desc550 );
            var idOpct = charIDToTypeID( "Opct" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc549.putUnitDouble( idOpct, idPrc, 15.000000 );
            var iduglg = charIDToTypeID( "uglg" );
            desc549.putBoolean( iduglg, false );
            var idlagl = charIDToTypeID( "lagl" );
            var idAng = charIDToTypeID( "#Ang" );
            desc549.putUnitDouble( idlagl, idAng, 135.000000 );
            var idDstn = charIDToTypeID( "Dstn" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc549.putUnitDouble( idDstn, idPxl, shadowDistance );
            var idCkmt = charIDToTypeID( "Ckmt" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc549.putUnitDouble( idCkmt, idPxl, shadowDistance*2 );
            var idblur = charIDToTypeID( "blur" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc549.putUnitDouble( idblur, idPxl, shadowDistance*2 );
            var idNose = charIDToTypeID( "Nose" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc549.putUnitDouble( idNose, idPrc, 0.000000 );
            var idAntA = charIDToTypeID( "AntA" );
            desc549.putBoolean( idAntA, false );
            var idTrnS = charIDToTypeID( "TrnS" );
                var desc551 = new ActionDescriptor();
                var idNm = charIDToTypeID( "Nm  " );
                desc551.putString( idNm, "Linear" );
            var idShpC = charIDToTypeID( "ShpC" );
            desc549.putObject( idTrnS, idShpC, desc551 );
            var idlayerConceals = stringIDToTypeID( "layerConceals" );
            desc549.putBoolean( idlayerConceals, true );
        var idDrSh = charIDToTypeID( "DrSh" );
        desc548.putObject( idDrSh, idDrSh, desc549 );
        var idFrFX = charIDToTypeID( "FrFX" );
            var desc552 = new ActionDescriptor();
            var idenab = charIDToTypeID( "enab" );
            desc552.putBoolean( idenab, true );
            var idStyl = charIDToTypeID( "Styl" );
            var idFStl = charIDToTypeID( "FStl" );
            var idInsF = charIDToTypeID( "InsF" );
            desc552.putEnumerated( idStyl, idFStl, idInsF );
            var idPntT = charIDToTypeID( "PntT" );
            var idFrFl = charIDToTypeID( "FrFl" );
            var idSClr = charIDToTypeID( "SClr" );
            desc552.putEnumerated( idPntT, idFrFl, idSClr );
            var idMd = charIDToTypeID( "Md  " );
            var idBlnM = charIDToTypeID( "BlnM" );
            var idNrml = charIDToTypeID( "Nrml" );
            desc552.putEnumerated( idMd, idBlnM, idNrml );
            var idOpct = charIDToTypeID( "Opct" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc552.putUnitDouble( idOpct, idPrc, 40.000000 );
            var idSz = charIDToTypeID( "Sz  " );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc552.putUnitDouble( idSz, idPxl, 1.000000 );
            var idClr = charIDToTypeID( "Clr " );
                var desc553 = new ActionDescriptor();
                var idRd = charIDToTypeID( "Rd  " );
                desc553.putDouble( idRd, 193 );
                var idGrn = charIDToTypeID( "Grn " );
                desc553.putDouble( idGrn, 193 );
                var idBl = charIDToTypeID( "Bl  " );
                desc553.putDouble( idBl, 193 );
            var idRGBC = charIDToTypeID( "RGBC" );
            desc552.putObject( idClr, idRGBC, desc553 );
        var idFrFX = charIDToTypeID( "FrFX" );
        desc548.putObject( idFrFX, idFrFX, desc552 );
    var idLefx = charIDToTypeID( "Lefx" );
    desc547.putObject( idT, idLefx, desc548 );
executeAction( idsetd, desc547, DialogModes.NO );
// =======================================================
var idCnvS = charIDToTypeID( "CnvS" );
    var desc135 = new ActionDescriptor();
    var idRltv = charIDToTypeID( "Rltv" );
    desc135.putBoolean( idRltv, true );
    var idWdth = charIDToTypeID( "Wdth" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc135.putUnitDouble( idWdth, idPxl, borderWidth );
    var idHght = charIDToTypeID( "Hght" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc135.putUnitDouble( idHght, idPxl, borderWidth );
    var idHrzn = charIDToTypeID( "Hrzn" );
    var idHrzL = charIDToTypeID( "HrzL" );
    var idCntr = charIDToTypeID( "Cntr" );
    desc135.putEnumerated( idHrzn, idHrzL, idCntr );
    var idVrtc = charIDToTypeID( "Vrtc" );
    var idVrtL = charIDToTypeID( "VrtL" );
    var idCntr = charIDToTypeID( "Cntr" );
    desc135.putEnumerated( idVrtc, idVrtL, idCntr );
    var idcanvasExtensionColorType = stringIDToTypeID( "canvasExtensionColorType" );
    var idcanvasExtensionColorType = stringIDToTypeID( "canvasExtensionColorType" );
    var idBckC = charIDToTypeID( "BckC" );
    desc135.putEnumerated( idcanvasExtensionColorType, idcanvasExtensionColorType, idBckC );
executeAction( idCnvS, desc135, DialogModes.NO );
// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc164 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref101 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idFrwr = charIDToTypeID( "Frwr" );
        ref101.putEnumerated( idLyr, idOrdn, idFrwr );
    desc164.putReference( idnull, ref101 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc164.putBoolean( idMkVs, false );
executeAction( idslct, desc164, DialogModes.NO );
// =======================================================
var idMrgtwo = charIDToTypeID( "Mrg2" );
    var desc165 = new ActionDescriptor();
executeAction( idMrgtwo, desc165, DialogModes.NO );
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
	if (y<0){
		y=amplitude*Math.random()
		}
	if (y > borderWidth){
		y=borderWidth-(amplitude*Math.random())
		}
	}
//===
function calcRight () {
	y = y+step*Math.random()
	x=x+plusminus()*amplitude*Math.random()
	if (x>w){
		x=w-amplitude*Math.random()
		}
	if (x < w-borderWidth){
		x=w-borderWidth+(amplitude*Math.random())
		}
	}
//===
function calcBottom () {
	x = x-step*Math.random()
	y=y+plusminus()*amplitude*Math.random()
	if (y>h){
		y=h-(amplitude*Math.random())
		}
	if (y < h-borderWidth){
		y=h-borderWidth+(amplitude*Math.random())
		}
	}
//===
function calcLeft () {
	y = y-step*Math.random()
	x=x+plusminus()*amplitude*Math.random()
	if (x<0){
		x=amplitude*Math.random()
		}
	if (x > borderWidth){
		x=borderWidth-(amplitude*Math.random())
		}
	if ( y<y0+h/3 && Math.abs(x-x0)>amplitude ){
		x+=(x0-x)/8
		}
	}
//===
};
//===========
 tornEdges ();
//================== 
