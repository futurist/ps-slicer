/*
This script is a part of "Script Arsenal" kit
by Andrei Doubrovski
www.Script-Arsenal.com
*/ 
///////////////////////////////////////////////////////////
function wavyEdges () {
///////////////////////////////////////////////////////////////////////
var amplitude = 1.2   //  the wave depth in % of the smaller image size
///////////////////////////////////////////////////////////////////////
var doc = app.activeDocument
//===================================
var oldUnits = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;
var w = Math.round(doc.width)
var h = Math.round(doc.height)
app.preferences.rulerUnits = oldUnits;
//====================================
amplitude=Math.min(w, h)/100*amplitude
if (amplitude<2){
	amplitude=2
	}
// =====
var hStep = amplitude*3
var vStep = amplitude*3
//===
var hWaves = Math.floor (w/hStep/2)
var remainder = w-(hWaves*hStep*2)
hStep = remainder/hWaves/2+hStep
var vWaves = Math.floor( h/vStep/2)
remainder=h-(vWaves*vStep*2)
vStep = remainder/vWaves/2+vStep
// =======================================================
doc.activeLayer=doc.layers[0]
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc17 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref8 = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        var idWrPt = charIDToTypeID( "WrPt" );
        ref8.putProperty( idPath, idWrPt );
    desc17.putReference( idnull, ref8 );
    var idT = charIDToTypeID( "T   " );
        var list1 = new ActionList();
            var desc18 = new ActionDescriptor();
            var idshapeOperation = stringIDToTypeID( "shapeOperation" );
            var idshapeOperation = stringIDToTypeID( "shapeOperation" );
            var idSbtr = charIDToTypeID( "Sbtr" );
            desc18.putEnumerated( idshapeOperation, idshapeOperation, idSbtr );
            var idSbpL = charIDToTypeID( "SbpL" );
                var list2 = new ActionList();
                    var desc19 = new ActionDescriptor();
                    var idPts = charIDToTypeID( "Pts " );
                        var list3 = new ActionList();
// ======						
var x= 0
var y= 0
// ==================================
						var desc26 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc27 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idAnch, idPnt, desc27 );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc26 );
// =====
x += hStep	
// =====
for ( i=0; i<hWaves-1; i++ ){
// =====
						var desc22 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc23 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc23.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc23.putUnitDouble( idVrtc, idPxl, y+amplitude );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idAnch, idPnt, desc23 );
                            var idFwd = charIDToTypeID( "Fwd " );
                                var desc24 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc24.putUnitDouble( idHrzn, idPxl, x+hStep*0.5 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc24.putUnitDouble( idVrtc, idPxl, y+amplitude );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idFwd, idPnt, desc24 );
                            var idBwd = charIDToTypeID( "Bwd " );
                                var desc25 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc25.putUnitDouble( idHrzn, idPxl, x-hStep*0.5 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc25.putUnitDouble( idVrtc, idPxl, y+amplitude );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idBwd, idPnt, desc25 );
                            var idSmoo = charIDToTypeID( "Smoo" );
                            desc22.putBoolean( idSmoo, true );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc22 );
// =====
x += hStep	
// =====
						var desc26 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc27 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idAnch, idPnt, desc27 );
                            var idFwd = charIDToTypeID( "Fwd " );
                                var desc28 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc28.putUnitDouble( idHrzn, idPxl, x+hStep*0.5 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc28.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idFwd, idPnt, desc28 );
                            var idBwd = charIDToTypeID( "Bwd " );
                                var desc29 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc29.putUnitDouble( idHrzn, idPxl, x-hStep*0.5 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc29.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idBwd, idPnt, desc29 );
                            var idSmoo = charIDToTypeID( "Smoo" );
                            desc26.putBoolean( idSmoo, true );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc26 );
// =====
x += hStep	
// =====
}
// ==================================
						var desc22 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc23 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc23.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc23.putUnitDouble( idVrtc, idPxl, y+amplitude );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idAnch, idPnt, desc23 );
                            var idFwd = charIDToTypeID( "Fwd " );
                                var desc24 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc24.putUnitDouble( idHrzn, idPxl, x+hStep*0.5 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc24.putUnitDouble( idVrtc, idPxl, y+amplitude );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idFwd, idPnt, desc24 );
                            var idBwd = charIDToTypeID( "Bwd " );
                                var desc25 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc25.putUnitDouble( idHrzn, idPxl, x-hStep*0.5 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc25.putUnitDouble( idVrtc, idPxl, y+amplitude );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idBwd, idPnt, desc25 );
                            var idSmoo = charIDToTypeID( "Smoo" );
                            desc22.putBoolean( idSmoo, true );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc22 );
// ==================================
x = w	
// =====
						var desc26 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc27 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idAnch, idPnt, desc27 );
                            var idSmoo = charIDToTypeID( "Smoo" );
                            desc26.putBoolean( idSmoo, true );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc26 );
// ==================================
y += vStep	
// =====
for ( i=0; i<vWaves-1; i++ ){
// =====
						var desc22 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc23 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc23.putUnitDouble( idHrzn, idPxl, x-amplitude );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc23.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idAnch, idPnt, desc23 );
                            var idFwd = charIDToTypeID( "Fwd " );
                                var desc24 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc24.putUnitDouble( idHrzn, idPxl, x-amplitude );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc24.putUnitDouble( idVrtc, idPxl, y+vStep*0.5 );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idFwd, idPnt, desc24 );
                            var idBwd = charIDToTypeID( "Bwd " );
                                var desc25 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc25.putUnitDouble( idHrzn, idPxl, x-amplitude );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc25.putUnitDouble( idVrtc, idPxl, y-vStep*0.5 );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idBwd, idPnt, desc25 );
                            var idSmoo = charIDToTypeID( "Smoo" );
                            desc22.putBoolean( idSmoo, true );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc22 );
// =====
y += vStep	
// =====
						var desc26 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc27 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idAnch, idPnt, desc27 );
                            var idFwd = charIDToTypeID( "Fwd " );
                                var desc28 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc28.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc28.putUnitDouble( idVrtc, idPxl, y+vStep*0.5 );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idFwd, idPnt, desc28 );
                            var idBwd = charIDToTypeID( "Bwd " );
                                var desc29 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc29.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc29.putUnitDouble( idVrtc, idPxl, y-vStep*0.5 );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idBwd, idPnt, desc29 );
                            var idSmoo = charIDToTypeID( "Smoo" );
                            desc26.putBoolean( idSmoo, true );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc26 );
// =====
y += vStep	
// =====
}
// ==================================
						var desc22 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc23 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc23.putUnitDouble( idHrzn, idPxl, x-amplitude );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc23.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idAnch, idPnt, desc23 );
                            var idFwd = charIDToTypeID( "Fwd " );
                                var desc24 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc24.putUnitDouble( idHrzn, idPxl, x-amplitude );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc24.putUnitDouble( idVrtc, idPxl, y+vStep*0.5 );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idFwd, idPnt, desc24 );
                            var idBwd = charIDToTypeID( "Bwd " );
                                var desc25 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc25.putUnitDouble( idHrzn, idPxl, x-amplitude );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc25.putUnitDouble( idVrtc, idPxl, y-vStep*0.5 );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idBwd, idPnt, desc25 );
                            var idSmoo = charIDToTypeID( "Smoo" );
                            desc22.putBoolean( idSmoo, true );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc22 );
// ==================================
y = h	
// =====
						var desc26 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc27 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idAnch, idPnt, desc27 );
                            var idSmoo = charIDToTypeID( "Smoo" );
                            desc26.putBoolean( idSmoo, true );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc26 );
// ==================================
x -= hStep	
// =====
for ( i=0; i<hWaves-1; i++ ){
// =====
						var desc22 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc23 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc23.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc23.putUnitDouble( idVrtc, idPxl, y-amplitude );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idAnch, idPnt, desc23 );
                            var idFwd = charIDToTypeID( "Fwd " );
                                var desc24 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc24.putUnitDouble( idHrzn, idPxl, x-hStep*0.5 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc24.putUnitDouble( idVrtc, idPxl, y-amplitude );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idFwd, idPnt, desc24 );
                            var idBwd = charIDToTypeID( "Bwd " );
                                var desc25 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc25.putUnitDouble( idHrzn, idPxl, x+hStep*0.5 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc25.putUnitDouble( idVrtc, idPxl, h-amplitude );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idBwd, idPnt, desc25 );
                            var idSmoo = charIDToTypeID( "Smoo" );
                            desc22.putBoolean( idSmoo, true );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc22 );
// =====
x -= hStep	
// =====
						var desc26 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc27 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idAnch, idPnt, desc27 );
                            var idFwd = charIDToTypeID( "Fwd " );
                                var desc28 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc28.putUnitDouble( idHrzn, idPxl, x-hStep*0.5 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc28.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idFwd, idPnt, desc28 );
                            var idBwd = charIDToTypeID( "Bwd " );
                                var desc29 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc29.putUnitDouble( idHrzn, idPxl, x+hStep*0.5 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc29.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idBwd, idPnt, desc29 );
                            var idSmoo = charIDToTypeID( "Smoo" );
                            desc26.putBoolean( idSmoo, true );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc26 );
// =====
x -= hStep	
// =====
}
// ==================================
						var desc22 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc23 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc23.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc23.putUnitDouble( idVrtc, idPxl, y-amplitude );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idAnch, idPnt, desc23 );
                            var idFwd = charIDToTypeID( "Fwd " );
                                var desc24 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc24.putUnitDouble( idHrzn, idPxl, x-hStep*0.5 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc24.putUnitDouble( idVrtc, idPxl, h-amplitude );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idFwd, idPnt, desc24 );
                            var idBwd = charIDToTypeID( "Bwd " );
                                var desc25 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc25.putUnitDouble( idHrzn, idPxl, x+hStep*0.5 );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc25.putUnitDouble( idVrtc, idPxl, y-amplitude );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idBwd, idPnt, desc25 );
                            var idSmoo = charIDToTypeID( "Smoo" );
                            desc22.putBoolean( idSmoo, true );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc22 );
// ==================================
x = 0	
// =====
						var desc26 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc27 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idAnch, idPnt, desc27 );
                            var idSmoo = charIDToTypeID( "Smoo" );
                            desc26.putBoolean( idSmoo, true );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc26 );
// ==================================
y -= vStep	
// =====
for ( i=0; i<vWaves-1; i++ ){
// =====
						var desc22 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc23 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc23.putUnitDouble( idHrzn, idPxl, x+amplitude );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc23.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idAnch, idPnt, desc23 );
                            var idFwd = charIDToTypeID( "Fwd " );
                                var desc24 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc24.putUnitDouble( idHrzn, idPxl, x+amplitude );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc24.putUnitDouble( idVrtc, idPxl, y-vStep*0.5 );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idFwd, idPnt, desc24 );
                            var idBwd = charIDToTypeID( "Bwd " );
                                var desc25 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc25.putUnitDouble( idHrzn, idPxl, x+amplitude );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc25.putUnitDouble( idVrtc, idPxl, y+vStep*0.5 );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idBwd, idPnt, desc25 );
                            var idSmoo = charIDToTypeID( "Smoo" );
                            desc22.putBoolean( idSmoo, true );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc22 );
// =====
y -= vStep	
// =====
						var desc26 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc27 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idAnch, idPnt, desc27 );
                            var idFwd = charIDToTypeID( "Fwd " );
                                var desc28 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc28.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc28.putUnitDouble( idVrtc, idPxl, y-vStep*0.5 );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idFwd, idPnt, desc28 );
                            var idBwd = charIDToTypeID( "Bwd " );
                                var desc29 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc29.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc29.putUnitDouble( idVrtc, idPxl, y+vStep*0.5 );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idBwd, idPnt, desc29 );
                            var idSmoo = charIDToTypeID( "Smoo" );
                            desc26.putBoolean( idSmoo, true );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc26 );
// =====
y -= vStep	
// =====
}
// ==================================
						var desc22 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc23 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc23.putUnitDouble( idHrzn, idPxl, x+amplitude );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc23.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idAnch, idPnt, desc23 );
                            var idFwd = charIDToTypeID( "Fwd " );
                                var desc24 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc24.putUnitDouble( idHrzn, idPxl, x+amplitude );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc24.putUnitDouble( idVrtc, idPxl, y-vStep*0.5 );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idFwd, idPnt, desc24 );
                            var idBwd = charIDToTypeID( "Bwd " );
                                var desc25 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc25.putUnitDouble( idHrzn, idPxl, x+amplitude );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc25.putUnitDouble( idVrtc, idPxl, y+vStep*0.5 );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc22.putObject( idBwd, idPnt, desc25 );
                            var idSmoo = charIDToTypeID( "Smoo" );
                            desc22.putBoolean( idSmoo, true );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc22 );
// ==================================
y = 0	
// =====
						var desc26 = new ActionDescriptor();
                            var idAnch = charIDToTypeID( "Anch" );
                                var desc27 = new ActionDescriptor();
                                var idHrzn = charIDToTypeID( "Hrzn" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idHrzn, idPxl, x );
                                var idVrtc = charIDToTypeID( "Vrtc" );
                                var idPxl = charIDToTypeID( "#Pxl" );
                                desc27.putUnitDouble( idVrtc, idPxl, y );
                            var idPnt = charIDToTypeID( "Pnt " );
                            desc26.putObject( idAnch, idPnt, desc27 );
                            var idSmoo = charIDToTypeID( "Smoo" );
                            desc26.putBoolean( idSmoo, true );
                        var idPthp = charIDToTypeID( "Pthp" );
                        list3.putObject( idPthp, desc26 );
// ==================================
				desc19.putList( idPts, list3 );
                var idSbpl = charIDToTypeID( "Sbpl" );
                list2.putObject( idSbpl, desc19 );
            desc18.putList( idSbpL, list2 );
        var idPaCm = charIDToTypeID( "PaCm" );
        list1.putObject( idPaCm, desc18 );
    desc17.putList( idT, list1 );
executeAction( idsetd, desc17, DialogModes.NO );
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc316 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref9 = new ActionReference();
        var idcontentLayer = stringIDToTypeID( "contentLayer" );
        ref9.putClass( idcontentLayer );
    desc316.putReference( idnull, ref9 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc317 = new ActionDescriptor();
        var idType = charIDToTypeID( "Type" );
            var desc318 = new ActionDescriptor();
            var idClr = charIDToTypeID( "Clr " );
                var desc319 = new ActionDescriptor();
                var idRd = charIDToTypeID( "Rd  " );
                desc319.putDouble( idRd, 255 );
                var idGrn = charIDToTypeID( "Grn " );
                desc319.putDouble( idGrn, 255 );
                var idBl = charIDToTypeID( "Bl  " );
                desc319.putDouble( idBl, 255 );
            var idRGBC = charIDToTypeID( "RGBC" );
            desc318.putObject( idClr, idRGBC, desc319 );
        var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
        desc317.putObject( idType, idsolidColorLayer, desc318 );
    var idcontentLayer = stringIDToTypeID( "contentLayer" );
    desc316.putObject( idUsng, idcontentLayer, desc317 );
executeAction( idMk, desc316, DialogModes.NO );
// =======================================================
var idDslc = charIDToTypeID( "Dslc" );
    var desc320 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref10 = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        ref10.putClass( idPath );
    desc320.putReference( idnull, ref10 );
executeAction( idDslc, desc320, DialogModes.NO );
//===
};
//===========
 wavyEdges ();
//================== 
