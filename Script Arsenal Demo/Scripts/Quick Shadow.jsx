/*
This script is a part of "Script Arsenal" kit
by Andrei Doubrovski
www.Script-Arsenal.com
*/ 
///////////////////////////////////////////////////////////
function textShadow () {
// ===	
if (app.documents.length==0){
return
}
//=======================
var doc = app.activeDocument
var srcLyr = doc.activeLayer
//=======================
srcLyr.visible = true;
// =======================================================
try
{
var idsetd = charIDToTypeID( "setd" );
    var desc287 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref68 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref68.putProperty( idChnl, idfsel );
    desc287.putReference( idnull, ref68 );
    var idT = charIDToTypeID( "T   " );
        var ref69 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idChnl = charIDToTypeID( "Chnl" );
        var idTrsp = charIDToTypeID( "Trsp" );
        ref69.putEnumerated( idChnl, idChnl, idTrsp );
    desc287.putReference( idT, ref69 );
executeAction( idsetd, desc287, DialogModes.NO );
}
catch (e)
{
return
};
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc53 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref33 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref33.putClass( idLyr );
    desc53.putReference( idnull, ref33 );
executeAction( idMk, desc53, DialogModes.NO );
// =======================================================
var idFl = charIDToTypeID( "Fl  " );
    var desc55 = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
    var idFlCn = charIDToTypeID( "FlCn" );
    var idBlck = charIDToTypeID( "Blck" );
    desc55.putEnumerated( idUsng, idFlCn, idBlck );
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc55.putUnitDouble( idOpct, idPrc, 100.000000 );
    var idMd = charIDToTypeID( "Md  " );
    var idBlnM = charIDToTypeID( "BlnM" );
    var idNrml = charIDToTypeID( "Nrml" );
    desc55.putEnumerated( idMd, idBlnM, idNrml );
executeAction( idFl, desc55, DialogModes.NO );
// =======================================================
doc.selection.deselect ();
var refLyr = doc.activeLayer
// =======================================================
var oldUnits = app.preferences.rulerUnits
app.preferences.rulerUnits = Units.PIXELS;
var iniHeight = srcLyr.bounds[3] - srcLyr.bounds[1]
// =======================================================
var idTrnf = charIDToTypeID( "Trnf" );
    var desc3 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref2 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref2.putEnumerated( idLyr, idOrdn, idTrgt );
    desc3.putReference( idnull, ref2 );
    var idFTcs = charIDToTypeID( "FTcs" );
    var idQCSt = charIDToTypeID( "QCSt" );
    var idQcsa = charIDToTypeID( "Qcsa" );
    desc3.putEnumerated( idFTcs, idQCSt, idQcsa );
    var idOfst = charIDToTypeID( "Ofst" );
        var desc4 = new ActionDescriptor();
        var idHrzn = charIDToTypeID( "Hrzn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc4.putUnitDouble( idHrzn, idPxl, 0 );
        var idVrtc = charIDToTypeID( "Vrtc" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc4.putUnitDouble( idVrtc, idPxl, 0 );
    var idOfst = charIDToTypeID( "Ofst" );
    desc3.putObject( idOfst, idOfst, desc4 );
    var idHght = charIDToTypeID( "Hght" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc3.putUnitDouble( idHght, idPrc, 40 );
executeAction( idTrnf, desc3, DialogModes.NO );
// =======================================================
var idTrnf = charIDToTypeID( "Trnf" );
    var desc5 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref3 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref3.putEnumerated( idLyr, idOrdn, idTrgt );
    desc5.putReference( idnull, ref3 );
    var idFTcs = charIDToTypeID( "FTcs" );
    var idQCSt = charIDToTypeID( "QCSt" );
    var idQcsa = charIDToTypeID( "Qcsa" );
    desc5.putEnumerated( idFTcs, idQCSt, idQcsa );
    var idOfst = charIDToTypeID( "Ofst" );
        var desc6 = new ActionDescriptor();
        var idHrzn = charIDToTypeID( "Hrzn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc6.putUnitDouble( idHrzn, idPxl, 0 );
        var idVrtc = charIDToTypeID( "Vrtc" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc6.putUnitDouble( idVrtc, idPxl, 0 );
    var idOfst = charIDToTypeID( "Ofst" );
    desc5.putObject( idOfst, idOfst, desc6 );
    var idSkew = charIDToTypeID( "Skew" );
        var desc7 = new ActionDescriptor();
        var idHrzn = charIDToTypeID( "Hrzn" );
        var idAng = charIDToTypeID( "#Ang" );
        desc7.putUnitDouble( idHrzn, idAng, 62 );
        var idVrtc = charIDToTypeID( "Vrtc" );
        var idAng = charIDToTypeID( "#Ang" );
        desc7.putUnitDouble( idVrtc, idAng, 0.000000 );
    var idPnt = charIDToTypeID( "Pnt " );
    desc5.putObject( idSkew, idPnt, desc7 );
executeAction( idTrnf, desc5, DialogModes.NO );
// =======================================================
var blurRad = Math.min( doc.width, doc.height )*0.003
var deltaX = refLyr.bounds[0]-srcLyr.bounds[0] 
var deltaY = srcLyr.bounds[3] - refLyr.bounds[3]
// =======================================================
refLyr.translate ( deltaX-blurRad, deltaY )
app.preferences.rulerUnits = oldUnits
// =======================================================
var idmove = charIDToTypeID( "move" );
    var desc51 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref31 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref31.putEnumerated( idLyr, idOrdn, idTrgt );
    desc51.putReference( idnull, ref31 );
    var idT = charIDToTypeID( "T   " );
        var ref32 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idPrvs = charIDToTypeID( "Prvs" );
        ref32.putEnumerated( idLyr, idOrdn, idPrvs );
    desc51.putReference( idT, ref32 );
executeAction( idmove, desc51, DialogModes.NO );
// =======================================================
refLyr.opacity = 50
refLyr.name = srcLyr.name + "'s shadow"
// =======================================================
var idGsnB = charIDToTypeID( "GsnB" );
    var desc52 = new ActionDescriptor();
    var idRds = charIDToTypeID( "Rds " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc52.putUnitDouble( idRds, idPxl, blurRad );
executeAction( idGsnB, desc52, DialogModes.NO );
};
//=======================
textShadow ();
/////////////////////////////////////