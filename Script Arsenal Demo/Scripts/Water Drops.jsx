/*
This script is a part of "Script Arsenal" kit
by Andrei Doubrovski
www.Script-Arsenal.com
*/ 
///////////////////////////////////////////////////////////
function waterDrops () {
// ===	
if (app.documents.length==0){
return
}
///////////////////////////////////////////////////////////
var maxNum = 100  //  % max number of the drops
var maxDia = 4  // % of the smaller imge size
///////////////////////////////////////////////////////////
var doc = app.activeDocument
var oldUnits = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;
//===
var w = doc.width
var h = doc.height
var minSide = Math.min (w, h)
var k = minSide/600
//===
app.preferences.rulerUnits = oldUnits;
//=================================
var dropNum = maxNum*0.3+Math.round (maxNum*0.7*Math.random ())
maxDia = minSide*maxDia/100
//=================================
doc.activeLayer=doc.layers[0]
//=================================
var idMk = charIDToTypeID( "Mk  " );
    var desc21 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref4 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref4.putClass( idLyr );
    desc21.putReference( idnull, ref4 );
executeAction( idMk, desc21, DialogModes.NO );
//=================================
doc.activeLayer.name = "Water Drops"
doc.selection.deselect();
//=================================
for ( i=0; i<dropNum; i++ ) {
//=================================
var xDia = maxDia*0.4+maxDia*0.6*Math.random()
if ( Math.random () > 0.5 ) {
var yDia = xDia+xDia*0.5*Math.random()
	} else {
var yDia = xDia-xDia*0.5*Math.random()
}
var dropX = w*Math.random()
var dropY = h*Math.random()
//=================================
var idAddT = charIDToTypeID( "AddT" );
    var desc8 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref4 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref4.putProperty( idChnl, idfsel );
    desc8.putReference( idnull, ref4 );
    var idT = charIDToTypeID( "T   " );
        var desc9 = new ActionDescriptor();
        var idTop = charIDToTypeID( "Top " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc9.putUnitDouble( idTop, idPxl, dropY );
        var idLeft = charIDToTypeID( "Left" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc9.putUnitDouble( idLeft, idPxl, dropX );
        var idBtom = charIDToTypeID( "Btom" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc9.putUnitDouble( idBtom, idPxl, dropY+yDia );
        var idRght = charIDToTypeID( "Rght" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc9.putUnitDouble( idRght, idPxl, dropX+xDia );
    var idElps = charIDToTypeID( "Elps" );
    desc8.putObject( idT, idElps, desc9 );
    var idAntA = charIDToTypeID( "AntA" );
    desc8.putBoolean( idAntA, true );
executeAction( idAddT, desc8, DialogModes.NO );
}
// =======================================================
var idFl = charIDToTypeID( "Fl  " );
    var desc24 = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
    var idFlCn = charIDToTypeID( "FlCn" );
    var idWht = charIDToTypeID( "Wht " );
    desc24.putEnumerated( idUsng, idFlCn, idWht );
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc24.putUnitDouble( idOpct, idPrc, 100 );
    var idMd = charIDToTypeID( "Md  " );
    var idBlnM = charIDToTypeID( "BlnM" );
    var idNrml = charIDToTypeID( "Nrml" );
    desc24.putEnumerated( idMd, idBlnM, idNrml );
executeAction( idFl, desc24, DialogModes.NO );
//=================================
doc.selection.deselect ()
//=================================
var idsetd = charIDToTypeID( "setd" );
    var desc4 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref3 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref3.putEnumerated( idLyr, idOrdn, idTrgt );
    desc4.putReference( idnull, ref3 );
    var idT = charIDToTypeID( "T   " );
        var desc5 = new ActionDescriptor();
        var idMd = charIDToTypeID( "Md  " );
        var idBlnM = charIDToTypeID( "BlnM" );
        var idScrn = charIDToTypeID( "Scrn" );
        desc5.putEnumerated( idMd, idBlnM, idScrn );
        var idLefx = charIDToTypeID( "Lefx" );
            var desc6 = new ActionDescriptor();
            var idScl = charIDToTypeID( "Scl " );
            var idPrc = charIDToTypeID( "#Prc" );
            desc6.putUnitDouble( idScl, idPrc, 100.000000 );
            var idDrSh = charIDToTypeID( "DrSh" );
                var desc7 = new ActionDescriptor();
                var idenab = charIDToTypeID( "enab" );
                desc7.putBoolean( idenab, true );
                var idMd = charIDToTypeID( "Md  " );
                var idBlnM = charIDToTypeID( "BlnM" );
                var idMltp = charIDToTypeID( "Mltp" );
                desc7.putEnumerated( idMd, idBlnM, idMltp );
                var idClr = charIDToTypeID( "Clr " );
                    var desc8 = new ActionDescriptor();
                    var idRd = charIDToTypeID( "Rd  " );
                    desc8.putDouble( idRd, 0.000000 );
                    var idGrn = charIDToTypeID( "Grn " );
                    desc8.putDouble( idGrn, 0.000000 );
                    var idBl = charIDToTypeID( "Bl  " );
                    desc8.putDouble( idBl, 0.000000 );
                var idRGBC = charIDToTypeID( "RGBC" );
                desc7.putObject( idClr, idRGBC, desc8 );
                var idOpct = charIDToTypeID( "Opct" );
                var idPrc = charIDToTypeID( "#Prc" );
                desc7.putUnitDouble( idOpct, idPrc, 20.000000 );
                var iduglg = charIDToTypeID( "uglg" );
                desc7.putBoolean( iduglg, true );
                var idlagl = charIDToTypeID( "lagl" );
                var idAng = charIDToTypeID( "#Ang" );
                desc7.putUnitDouble( idlagl, idAng, 120.000000 );
                var idDstn = charIDToTypeID( "Dstn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc7.putUnitDouble( idDstn, idPxl, 2.000000 );
                var idCkmt = charIDToTypeID( "Ckmt" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc7.putUnitDouble( idCkmt, idPxl, 3.000000 );
                var idblur = charIDToTypeID( "blur" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc7.putUnitDouble( idblur, idPxl, 3.000000 );
                var idNose = charIDToTypeID( "Nose" );
                var idPrc = charIDToTypeID( "#Prc" );
                desc7.putUnitDouble( idNose, idPrc, 0.000000 );
                var idAntA = charIDToTypeID( "AntA" );
                desc7.putBoolean( idAntA, false );
                var idTrnS = charIDToTypeID( "TrnS" );
//===
			var idlayerConceals = stringIDToTypeID( "layerConceals" );
                desc7.putBoolean( idlayerConceals, true );
            var idDrSh = charIDToTypeID( "DrSh" );
            desc6.putObject( idDrSh, idDrSh, desc7 );
            var idIrSh = charIDToTypeID( "IrSh" );
                var desc10 = new ActionDescriptor();
                var idenab = charIDToTypeID( "enab" );
                desc10.putBoolean( idenab, true );
                var idMd = charIDToTypeID( "Md  " );
                var idBlnM = charIDToTypeID( "BlnM" );
                var idMltp = charIDToTypeID( "Mltp" );
                desc10.putEnumerated( idMd, idBlnM, idMltp );
                var idClr = charIDToTypeID( "Clr " );
                    var desc11 = new ActionDescriptor();
                    var idRd = charIDToTypeID( "Rd  " );
                    desc11.putDouble( idRd, 0.000000 );
                    var idGrn = charIDToTypeID( "Grn " );
                    desc11.putDouble( idGrn, 0.000000 );
                    var idBl = charIDToTypeID( "Bl  " );
                    desc11.putDouble( idBl, 0.000000 );
                var idRGBC = charIDToTypeID( "RGBC" );
                desc10.putObject( idClr, idRGBC, desc11 );
                var idOpct = charIDToTypeID( "Opct" );
                var idPrc = charIDToTypeID( "#Prc" );
                desc10.putUnitDouble( idOpct, idPrc, 60.000000 );
                var iduglg = charIDToTypeID( "uglg" );
                desc10.putBoolean( iduglg, true );
                var idlagl = charIDToTypeID( "lagl" );
                var idAng = charIDToTypeID( "#Ang" );
                desc10.putUnitDouble( idlagl, idAng, 120.000000 );
                var idDstn = charIDToTypeID( "Dstn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc10.putUnitDouble( idDstn, idPxl, 3.000000 );
                var idCkmt = charIDToTypeID( "Ckmt" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc10.putUnitDouble( idCkmt, idPxl, 0.000000 );
                var idblur = charIDToTypeID( "blur" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc10.putUnitDouble( idblur, idPxl, 3.000000 );
                var idNose = charIDToTypeID( "Nose" );
                var idPrc = charIDToTypeID( "#Prc" );
                desc10.putUnitDouble( idNose, idPrc, 0.000000 );
                var idAntA = charIDToTypeID( "AntA" );
                desc10.putBoolean( idAntA, false );
                var idTrnS = charIDToTypeID( "TrnS" );
                    var desc12 = new ActionDescriptor();
                    var idNm = charIDToTypeID( "Nm  " );
                    desc12.putString( idNm, "Linear" );
                var idShpC = charIDToTypeID( "ShpC" );
                desc10.putObject( idTrnS, idShpC, desc12 );
            var idIrSh = charIDToTypeID( "IrSh" );
            desc6.putObject( idIrSh, idIrSh, desc10 );
            var idIrGl = charIDToTypeID( "IrGl" );
                var desc13 = new ActionDescriptor();
                var idenab = charIDToTypeID( "enab" );
                desc13.putBoolean( idenab, true );
                var idMd = charIDToTypeID( "Md  " );
                var idBlnM = charIDToTypeID( "BlnM" );
                var idScrn = charIDToTypeID( "Scrn" );
                desc13.putEnumerated( idMd, idBlnM, idScrn );
                var idClr = charIDToTypeID( "Clr " );
                    var desc14 = new ActionDescriptor();
                    var idRd = charIDToTypeID( "Rd  " );
                    desc14.putDouble( idRd, 0.000000 );
                    var idGrn = charIDToTypeID( "Grn " );
                    desc14.putDouble( idGrn, 0.000000 );
                    var idBl = charIDToTypeID( "Bl  " );
                    desc14.putDouble( idBl, 0.000000 );
                var idRGBC = charIDToTypeID( "RGBC" );
                desc13.putObject( idClr, idRGBC, desc14 );
                var idOpct = charIDToTypeID( "Opct" );
                var idPrc = charIDToTypeID( "#Prc" );
                desc13.putUnitDouble( idOpct, idPrc, 60.000000 );
                var idGlwT = charIDToTypeID( "GlwT" );
                var idBETE = charIDToTypeID( "BETE" );
                var idSfBL = charIDToTypeID( "SfBL" );
                desc13.putEnumerated( idGlwT, idBETE, idSfBL );
                var idCkmt = charIDToTypeID( "Ckmt" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc13.putUnitDouble( idCkmt, idPxl, 0.000000 );
                var idblur = charIDToTypeID( "blur" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc13.putUnitDouble( idblur, idPxl, 5.000000 );
                var idShdN = charIDToTypeID( "ShdN" );
                var idPrc = charIDToTypeID( "#Prc" );
                desc13.putUnitDouble( idShdN, idPrc, 0.000000 );
                var idNose = charIDToTypeID( "Nose" );
                var idPrc = charIDToTypeID( "#Prc" );
                desc13.putUnitDouble( idNose, idPrc, 0.000000 );
                var idAntA = charIDToTypeID( "AntA" );
                desc13.putBoolean( idAntA, false );
                var idglwS = charIDToTypeID( "glwS" );
                var idIGSr = charIDToTypeID( "IGSr" );
                var idSrcE = charIDToTypeID( "SrcE" );
                desc13.putEnumerated( idglwS, idIGSr, idSrcE );
                var idTrnS = charIDToTypeID( "TrnS" );
                    var desc15 = new ActionDescriptor();
                    var idNm = charIDToTypeID( "Nm  " );
                    desc15.putString( idNm, "Linear" );
                var idShpC = charIDToTypeID( "ShpC" );
                desc13.putObject( idTrnS, idShpC, desc15 );
                var idInpr = charIDToTypeID( "Inpr" );
                var idPrc = charIDToTypeID( "#Prc" );
                desc13.putUnitDouble( idInpr, idPrc, 50.000000 );
            var idIrGl = charIDToTypeID( "IrGl" );
            desc6.putObject( idIrGl, idIrGl, desc13 );
            var idebbl = charIDToTypeID( "ebbl" );
                var desc16 = new ActionDescriptor();
                var idenab = charIDToTypeID( "enab" );
                desc16.putBoolean( idenab, true );
                var idhglM = charIDToTypeID( "hglM" );
                var idBlnM = charIDToTypeID( "BlnM" );
                var idNrml = charIDToTypeID( "Nrml" );
                desc16.putEnumerated( idhglM, idBlnM, idNrml );
                var idhglC = charIDToTypeID( "hglC" );
                    var desc17 = new ActionDescriptor();
                    var idRd = charIDToTypeID( "Rd  " );
                    desc17.putDouble( idRd, 255.000000 );
                    var idGrn = charIDToTypeID( "Grn " );
                    desc17.putDouble( idGrn, 255.000000 );
                    var idBl = charIDToTypeID( "Bl  " );
                    desc17.putDouble( idBl, 255.000000 );
                var idRGBC = charIDToTypeID( "RGBC" );
                desc16.putObject( idhglC, idRGBC, desc17 );
                var idhglO = charIDToTypeID( "hglO" );
                var idPrc = charIDToTypeID( "#Prc" );
                desc16.putUnitDouble( idhglO, idPrc, 100.000000 );
                var idsdwM = charIDToTypeID( "sdwM" );
                var idBlnM = charIDToTypeID( "BlnM" );
                var idLghn = charIDToTypeID( "Lghn" );
                desc16.putEnumerated( idsdwM, idBlnM, idLghn );
                var idsdwC = charIDToTypeID( "sdwC" );
                    var desc18 = new ActionDescriptor();
                    var idRd = charIDToTypeID( "Rd  " );
                    desc18.putDouble( idRd, 0.000000 );
                    var idGrn = charIDToTypeID( "Grn " );
                    desc18.putDouble( idGrn, 0.000000 );
                    var idBl = charIDToTypeID( "Bl  " );
                    desc18.putDouble( idBl, 0.000000 );
                var idRGBC = charIDToTypeID( "RGBC" );
                desc16.putObject( idsdwC, idRGBC, desc18 );
                var idsdwO = charIDToTypeID( "sdwO" );
                var idPrc = charIDToTypeID( "#Prc" );
                desc16.putUnitDouble( idsdwO, idPrc, 90.000000 );
                var idbvlT = charIDToTypeID( "bvlT" );
                var idbvlT = charIDToTypeID( "bvlT" );
                var idSfBL = charIDToTypeID( "SfBL" );
                desc16.putEnumerated( idbvlT, idbvlT, idSfBL );
                var idbvlS = charIDToTypeID( "bvlS" );
                var idBESl = charIDToTypeID( "BESl" );
                var idInrB = charIDToTypeID( "InrB" );
                desc16.putEnumerated( idbvlS, idBESl, idInrB );
                var iduglg = charIDToTypeID( "uglg" );
                desc16.putBoolean( iduglg, true );
                var idlagl = charIDToTypeID( "lagl" );
                var idAng = charIDToTypeID( "#Ang" );
                desc16.putUnitDouble( idlagl, idAng, 120.000000 );
                var idLald = charIDToTypeID( "Lald" );
                var idAng = charIDToTypeID( "#Ang" );
                desc16.putUnitDouble( idLald, idAng, 30.000000 );
                var idsrgR = charIDToTypeID( "srgR" );
                var idPrc = charIDToTypeID( "#Prc" );
                desc16.putUnitDouble( idsrgR, idPrc, 70.000000 );
                var idblur = charIDToTypeID( "blur" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc16.putUnitDouble( idblur, idPxl, 15.000000 );
                var idbvlD = charIDToTypeID( "bvlD" );
                var idBESs = charIDToTypeID( "BESs" );
                var idIn = charIDToTypeID( "In  " );
                desc16.putEnumerated( idbvlD, idBESs, idIn );
                var idTrnS = charIDToTypeID( "TrnS" );
                    var desc19 = new ActionDescriptor();
                    var idNm = charIDToTypeID( "Nm  " );
                    desc19.putString( idNm, "Linear" );
                var idShpC = charIDToTypeID( "ShpC" );
                desc16.putObject( idTrnS, idShpC, desc19 );
                var idantialiasGloss = stringIDToTypeID( "antialiasGloss" );
                desc16.putBoolean( idantialiasGloss, false );
                var idSftn = charIDToTypeID( "Sftn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc16.putUnitDouble( idSftn, idPxl, 0.000000 );
                var iduseShape = stringIDToTypeID( "useShape" );
                desc16.putBoolean( iduseShape, false );
                var iduseTexture = stringIDToTypeID( "useTexture" );
                desc16.putBoolean( iduseTexture, false );
            var idebbl = charIDToTypeID( "ebbl" );
            desc6.putObject( idebbl, idebbl, desc16 );
        var idLefx = charIDToTypeID( "Lefx" );
        desc5.putObject( idLefx, idLefx, desc6 );
    var idLyr = charIDToTypeID( "Lyr " );
    desc4.putObject( idT, idLyr, desc5 );
executeAction( idsetd, desc4, DialogModes.NO );
// =======================================================
var idscaleEffectsEvent = stringIDToTypeID( "scaleEffectsEvent" );
    var desc23 = new ActionDescriptor();
    var idScl = charIDToTypeID( "Scl " );
    var idPrc = charIDToTypeID( "#Prc" );
    desc23.putUnitDouble( idScl, idPrc, k*100 );
executeAction( idscaleEffectsEvent, desc23, DialogModes.NO );
//==========================================================
doc.activeLayer.fillOpacity = 5;
}
//===
waterDrops ();
/////////////////////////////