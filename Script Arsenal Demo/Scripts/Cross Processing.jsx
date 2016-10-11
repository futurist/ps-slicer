/*
This script is a part of "Script Arsenal" kit
by Andrei Doubrovski
www.Script-Arsenal.com
*/ 
///////////////////////////////////////////////////////////
function crossProcessing () {
// ===	
if (app.documents.length==0){
return
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
// =======================================================
var idCrvs = charIDToTypeID( "Crvs" );
    var desc63 = new ActionDescriptor();
    var idpresetKind = stringIDToTypeID( "presetKind" );
    var idpresetKindType = stringIDToTypeID( "presetKindType" );
    var idpresetKindCustom = stringIDToTypeID( "presetKindCustom" );
    desc63.putEnumerated( idpresetKind, idpresetKindType, idpresetKindCustom );
    var idAdjs = charIDToTypeID( "Adjs" );
        var list27 = new ActionList();
            var desc64 = new ActionDescriptor();
            var idChnl = charIDToTypeID( "Chnl" );
                var ref38 = new ActionReference();
                var idChnl = charIDToTypeID( "Chnl" );
                var idChnl = charIDToTypeID( "Chnl" );
                var idCmps = charIDToTypeID( "Cmps" );
                ref38.putEnumerated( idChnl, idChnl, idCmps );
            desc64.putReference( idChnl, ref38 );
            var idCrv = charIDToTypeID( "Crv " );
                var list28 = new ActionList();
                    var desc65 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc65.putDouble( idHrzn, 0.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc65.putDouble( idVrtc, 0.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list28.putObject( idPnt, desc65 );
                    var desc66 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc66.putDouble( idHrzn, 38.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc66.putDouble( idVrtc, 18.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list28.putObject( idPnt, desc66 );
                    var desc67 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc67.putDouble( idHrzn, 90.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc67.putDouble( idVrtc, 89.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list28.putObject( idPnt, desc67 );
                    var desc68 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc68.putDouble( idHrzn, 190.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc68.putDouble( idVrtc, 230.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list28.putObject( idPnt, desc68 );
                    var desc69 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc69.putDouble( idHrzn, 255.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc69.putDouble( idVrtc, 255.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list28.putObject( idPnt, desc69 );
            desc64.putList( idCrv, list28 );
        var idCrvA = charIDToTypeID( "CrvA" );
        list27.putObject( idCrvA, desc64 );
            var desc70 = new ActionDescriptor();
            var idChnl = charIDToTypeID( "Chnl" );
                var ref39 = new ActionReference();
                var idChnl = charIDToTypeID( "Chnl" );
                var idChnl = charIDToTypeID( "Chnl" );
                var idRd = charIDToTypeID( "Rd  " );
                ref39.putEnumerated( idChnl, idChnl, idRd );
            desc70.putReference( idChnl, ref39 );
            var idCrv = charIDToTypeID( "Crv " );
                var list29 = new ActionList();
                    var desc71 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc71.putDouble( idHrzn, 0.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc71.putDouble( idVrtc, 0.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list29.putObject( idPnt, desc71 );
                    var desc72 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc72.putDouble( idHrzn, 34.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc72.putDouble( idVrtc, 12.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list29.putObject( idPnt, desc72 );
                    var desc73 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc73.putDouble( idHrzn, 157.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc73.putDouble( idVrtc, 158.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list29.putObject( idPnt, desc73 );
                    var desc74 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc74.putDouble( idHrzn, 204.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc74.putDouble( idVrtc, 234.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list29.putObject( idPnt, desc74 );
                    var desc75 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc75.putDouble( idHrzn, 255.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc75.putDouble( idVrtc, 255.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list29.putObject( idPnt, desc75 );
            desc70.putList( idCrv, list29 );
        var idCrvA = charIDToTypeID( "CrvA" );
        list27.putObject( idCrvA, desc70 );
            var desc76 = new ActionDescriptor();
            var idChnl = charIDToTypeID( "Chnl" );
                var ref40 = new ActionReference();
                var idChnl = charIDToTypeID( "Chnl" );
                var idChnl = charIDToTypeID( "Chnl" );
                var idGrn = charIDToTypeID( "Grn " );
                ref40.putEnumerated( idChnl, idChnl, idGrn );
            desc76.putReference( idChnl, ref40 );
            var idCrv = charIDToTypeID( "Crv " );
                var list30 = new ActionList();
                    var desc77 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc77.putDouble( idHrzn, 0.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc77.putDouble( idVrtc, 0.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list30.putObject( idPnt, desc77 );
                    var desc78 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc78.putDouble( idHrzn, 51.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc78.putDouble( idVrtc, 36.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list30.putObject( idPnt, desc78 );
                    var desc79 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc79.putDouble( idHrzn, 99.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc79.putDouble( idVrtc, 98.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list30.putObject( idPnt, desc79 );
                    var desc80 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc80.putDouble( idHrzn, 187.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc80.putDouble( idVrtc, 206.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list30.putObject( idPnt, desc80 );
                    var desc81 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc81.putDouble( idHrzn, 255.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc81.putDouble( idVrtc, 255.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list30.putObject( idPnt, desc81 );
            desc76.putList( idCrv, list30 );
        var idCrvA = charIDToTypeID( "CrvA" );
        list27.putObject( idCrvA, desc76 );
            var desc82 = new ActionDescriptor();
            var idChnl = charIDToTypeID( "Chnl" );
                var ref41 = new ActionReference();
                var idChnl = charIDToTypeID( "Chnl" );
                var idChnl = charIDToTypeID( "Chnl" );
                var idBl = charIDToTypeID( "Bl  " );
                ref41.putEnumerated( idChnl, idChnl, idBl );
            desc82.putReference( idChnl, ref41 );
            var idCrv = charIDToTypeID( "Crv " );
                var list31 = new ActionList();
                    var desc83 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc83.putDouble( idHrzn, 0.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc83.putDouble( idVrtc, 0.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list31.putObject( idPnt, desc83 );
                    var desc84 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc84.putDouble( idHrzn, 27.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc84.putDouble( idVrtc, 44.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list31.putObject( idPnt, desc84 );
                    var desc85 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc85.putDouble( idHrzn, 142.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc85.putDouble( idVrtc, 144.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list31.putObject( idPnt, desc85 );
                    var desc86 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc86.putDouble( idHrzn, 234.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc86.putDouble( idVrtc, 222.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list31.putObject( idPnt, desc86 );
                    var desc87 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc87.putDouble( idHrzn, 255.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc87.putDouble( idVrtc, 255.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                list31.putObject( idPnt, desc87 );
            desc82.putList( idCrv, list31 );
        var idCrvA = charIDToTypeID( "CrvA" );
        list27.putObject( idCrvA, desc82 );
    desc63.putList( idAdjs, list27 );
executeAction( idCrvs, desc63, DialogModes.NO );
// ===============================================
app.activeDocument.activeLayer.opacity = 85;
};
//===
crossProcessing ();
// ===============================================
