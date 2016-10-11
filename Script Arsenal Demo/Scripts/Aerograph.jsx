/*
This script is a part of "Script Arsenal" kit
by Andrei Doubrovski
www.Script-Arsenal.com
*/ 
///////////////////////////////////////////////////////////
function aerograph () {

//====  User defined settings:
var blurStrength =0.5  //  The text blurring radius - % of  the smaller size
var txtOpacity = 70  // The text layer opacity in %
//====== End user defined settings

// ================	
if (app.documents.length==0){
return
}
//=======================
var doc = app.activeDocument
var minSide = Math.min ( doc.width, doc.height )
//=======================
var txtLyr = doc.activeLayer;
if ( txtLyr.visible == false ) {
txtLyr.visible = true;
}
//=======================
blurStrength = blurStrength*minSide/100;
//=======================
doc.selection.deselect ()
//=======================
var idnewPlacedLayer = stringIDToTypeID( "newPlacedLayer" );
executeAction( idnewPlacedLayer, undefined, DialogModes.NO );
//=======================
txtLyr = doc.activeLayer;
txtLyr.blendMode = BlendMode.DISSOLVE
txtLyr.opacity = txtOpacity;
app.refresh ()
//=======================
var idGsnB = charIDToTypeID( "GsnB" );
    var desc52 = new ActionDescriptor();
    var idRds = charIDToTypeID( "Rds " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc52.putUnitDouble( idRds, idPxl, blurStrength );
executeAction( idGsnB, desc52, DialogModes.ALL );
//=======================
};
//===========
aerograph();
//===========