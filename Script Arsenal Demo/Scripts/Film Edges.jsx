/*
This script is a part of "Script Arsenal" kit
by Andrei Doubrovski
www.Script-Arsenal.com
*/ 
///////////////////////////////////////////////////////////
function filmEdges () {
//===================================
var doc = app.activeDocument
//===================================
var portrait = false
if ( doc.width < doc.height ) {
portrait = true
doc.rotateCanvas (270)
};
//===================================
var oldUnits = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;
var w = doc.width
var h = doc.height
app.preferences.rulerUnits = oldUnits;
var edgeWidth = h*0.226
var shadowDistance = h/170
if (shadowDistance<1){
	shadowDistance=1
	}
//====================================
doc.activeLayer=doc.layers[0]
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
var idslct = charIDToTypeID( "slct" );
    var desc943 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref180 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idBckw = charIDToTypeID( "Bckw" );
        ref180.putEnumerated( idLyr, idOrdn, idBckw );
    desc943.putReference( idnull, ref180 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc943.putBoolean( idMkVs, false );
executeAction( idslct, desc943, DialogModes.NO );
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc715 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref84 = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        var idWrPt = charIDToTypeID( "WrPt" );
        ref84.putProperty( idPath, idWrPt );
    desc715.putReference( idnull, ref84 );
    var idT = charIDToTypeID( "T   " );
        var list48 = new ActionList();
            var desc716 = new ActionDescriptor();
            var idshapeOperation = stringIDToTypeID( "shapeOperation" );
            var idshapeOperation = stringIDToTypeID( "shapeOperation" );
            var idAdd = charIDToTypeID( "Add " );
            desc716.putEnumerated( idshapeOperation, idshapeOperation, idAdd );
            var idSbpL = charIDToTypeID( "SbpL" );
                var list49 = new ActionList();
                    var desc717 = new ActionDescriptor();
                    var idClsp = charIDToTypeID( "Clsp" );
                    desc717.putBoolean( idClsp, true );
                    var idPts = charIDToTypeID( "Pts " );
                        var list50 = new ActionList();
                            var desc718 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc719 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc719.putUnitDouble( idHrzn, idPxl, -edgeWidth/10 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc719.putUnitDouble( idVrtc, idPxl, -edgeWidth );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc718.putObject( idAnch, idPnt, desc719 );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list50.putObject( idPthp, desc718 );
                            var desc720 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc721 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc721.putUnitDouble( idHrzn, idPxl, w+edgeWidth/10 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc721.putUnitDouble( idVrtc, idPxl, -edgeWidth );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc720.putObject( idAnch, idPnt, desc721 );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list50.putObject( idPthp, desc720 );
                            var desc722 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc723 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc723.putUnitDouble( idHrzn, idPxl, w+edgeWidth/10 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc723.putUnitDouble( idVrtc, idPxl, h+edgeWidth );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc722.putObject( idAnch, idPnt, desc723 );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list50.putObject( idPthp, desc722 );
                            var desc724 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc725 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc725.putUnitDouble( idHrzn, idPxl, -edgeWidth/10 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc725.putUnitDouble( idVrtc, idPxl, h+edgeWidth );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc724.putObject( idAnch, idPnt, desc725 );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list50.putObject( idPthp, desc724 );
                    desc717.putList( idPts, list50 );
                var idSbpl = charIDToTypeID( "Sbpl" );
                list49.putObject( idSbpl, desc717 );
            desc716.putList( idSbpL, list49 );
        var idPaCm = charIDToTypeID( "PaCm" );
        list48.putObject( idPaCm, desc716 );
            var desc726 = new ActionDescriptor();
            var idshapeOperation = stringIDToTypeID( "shapeOperation" );
            var idshapeOperation = stringIDToTypeID( "shapeOperation" );
            var idSbtr = charIDToTypeID( "Sbtr" );
            desc726.putEnumerated( idshapeOperation, idshapeOperation, idSbtr );
            var idSbpL = charIDToTypeID( "SbpL" );
                var list51 = new ActionList();
                    var desc727 = new ActionDescriptor();
                    var idClsp = charIDToTypeID( "Clsp" );
                    desc727.putBoolean( idClsp, true );
                    var idPts = charIDToTypeID( "Pts " );
                        var list52 = new ActionList();
                            var desc728 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc729 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc729.putUnitDouble( idHrzn, idPxl, 0 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc729.putUnitDouble( idVrtc, idPxl, 0 );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc728.putObject( idAnch, idPnt, desc729 );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list52.putObject( idPthp, desc728 );
                            var desc730 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc731 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc731.putUnitDouble( idHrzn, idPxl, w );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc731.putUnitDouble( idVrtc, idPxl, 0 );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc730.putObject( idAnch, idPnt, desc731 );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list52.putObject( idPthp, desc730 );
                            var desc732 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc733 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc733.putUnitDouble( idHrzn, idPxl, w );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc733.putUnitDouble( idVrtc, idPxl, h );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc732.putObject( idAnch, idPnt, desc733 );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list52.putObject( idPthp, desc732 );
                            var desc734 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc735 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc735.putUnitDouble( idHrzn, idPxl, 0 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc735.putUnitDouble( idVrtc, idPxl, h );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc734.putObject( idAnch, idPnt, desc735 );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list52.putObject( idPthp, desc734 );
                    desc727.putList( idPts, list52 );
                var idSbpl = charIDToTypeID( "Sbpl" );
                list51.putObject( idSbpl, desc727 );
            desc726.putList( idSbpL, list51 );
        var idPaCm = charIDToTypeID( "PaCm" );
        list48.putObject( idPaCm, desc726 );
    desc715.putList( idT, list48 );
executeAction( idsetd, desc715, DialogModes.NO );
// =======================================================
var x = edgeWidth*0.1
// =======================================================
while (x<w){
var idSbtF = charIDToTypeID( "SbtF" );
    var desc763 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref101 = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref101.putEnumerated( idPath, idOrdn, idTrgt );
    desc763.putReference( idnull, ref101 );
    var idT = charIDToTypeID( "T   " );
        var desc764 = new ActionDescriptor();
        var idTop = charIDToTypeID( "Top " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc764.putUnitDouble( idTop, idPxl, -edgeWidth*0.63 );
        var idLeft = charIDToTypeID( "Left" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc764.putUnitDouble( idLeft, idPxl, x );
        var idBtom = charIDToTypeID( "Btom" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc764.putUnitDouble( idBtom, idPxl, -edgeWidth*0.1 );
        var idRght = charIDToTypeID( "Rght" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc764.putUnitDouble( idRght, idPxl, x+edgeWidth*0.37 );
        var idRds = charIDToTypeID( "Rds " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc764.putUnitDouble( idRds, idPxl, edgeWidth/12 );
    var idRctn = charIDToTypeID( "Rctn" );
    desc763.putObject( idT, idRctn, desc764 );
executeAction( idSbtF, desc763, DialogModes.NO );
// =======================================================
var idSbtF = charIDToTypeID( "SbtF" );
    var desc852 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref131 = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref131.putEnumerated( idPath, idOrdn, idTrgt );
    desc852.putReference( idnull, ref131 );
    var idT = charIDToTypeID( "T   " );
        var desc853 = new ActionDescriptor();
        var idTop = charIDToTypeID( "Top " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc853.putUnitDouble( idTop, idPxl, h+edgeWidth*0.1 );
        var idLeft = charIDToTypeID( "Left" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc853.putUnitDouble( idLeft, idPxl, x );
        var idBtom = charIDToTypeID( "Btom" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc853.putUnitDouble( idBtom, idPxl, h+edgeWidth*0.63 );
        var idRght = charIDToTypeID( "Rght" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc853.putUnitDouble( idRght, idPxl, x+edgeWidth*0.37 );
        var idRds = charIDToTypeID( "Rds " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc853.putUnitDouble( idRds, idPxl, edgeWidth/12 );
    var idRctn = charIDToTypeID( "Rctn" );
    desc852.putObject( idT, idRctn, desc853 );
executeAction( idSbtF, desc852, DialogModes.NO );
// =======================================================
x+= edgeWidth*0.75
}
// =======================================================
var idCnvS = charIDToTypeID( "CnvS" );
    var desc32 = new ActionDescriptor();
    var idRltv = charIDToTypeID( "Rltv" );
    desc32.putBoolean( idRltv, true );
    var idWdth = charIDToTypeID( "Wdth" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc32.putUnitDouble( idWdth, idPxl, edgeWidth*0.5 );
    var idHght = charIDToTypeID( "Hght" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc32.putUnitDouble( idHght, idPxl, edgeWidth*2.3 );
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
var idMk = charIDToTypeID( "Mk  " );
    var desc883 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref149 = new ActionReference();
        var idcontentLayer = stringIDToTypeID( "contentLayer" );
        ref149.putClass( idcontentLayer );
    desc883.putReference( idnull, ref149 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc884 = new ActionDescriptor();
        var idType = charIDToTypeID( "Type" );
            var desc885 = new ActionDescriptor();
            var idClr = charIDToTypeID( "Clr " );
                var desc886 = new ActionDescriptor();
                var idRd = charIDToTypeID( "Rd  " );
                desc886.putDouble( idRd, 0 );
                var idGrn = charIDToTypeID( "Grn " );
                desc886.putDouble( idGrn, 0 );
                var idBl = charIDToTypeID( "Bl  " );
                desc886.putDouble( idBl, 0 );
            var idRGBC = charIDToTypeID( "RGBC" );
            desc885.putObject( idClr, idRGBC, desc886 );
        var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
        desc884.putObject( idType, idsolidColorLayer, desc885 );
    var idcontentLayer = stringIDToTypeID( "contentLayer" );
    desc883.putObject( idUsng, idcontentLayer, desc884 );
executeAction( idMk, desc883, DialogModes.NO );
// =======================================================
var idDslc = charIDToTypeID( "Dslc" );
    var desc894 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref154 = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        ref154.putClass( idPath );
    desc894.putReference( idnull, ref154 );
executeAction( idDslc, desc894, DialogModes.NO );
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
            desc136.putUnitDouble( idOpct, idPrc, 35 );
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
doc.activeLayer = doc.layers[0]
// =======================================================
if ( portrait == true ) {
doc.rotateCanvas (90)
};
//===
};
//===========
 filmEdges ();
//================== 
