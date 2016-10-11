
//
//@includepath "/d/Adobe/xtools"
//@include "xlib/PSConstants.js"
//@include "xlib/Stream.js"
//@include "xlib/stdlib.js"



function getAdjustmentLayerColor(doc, layer) {
   var desc = Stdlib.getLayerDescriptor(doc, layer);

   // was  var adjs = desc.getList(desc, cTID('Adjs'));
   // EDIT: fixed -x
   var adjs = desc.getList(cTID('Adjs'));

   var clrDesc = adjs.getObjectValue(0);
   var color= clrDesc.getObjectValue(cTID('Clr '));

   var red = color.getDouble(cTID('Rd  '));
   var green = color.getDouble(cTID('Grn '));
   var blue = color.getDouble(cTID('Bl  '));

   return Stdlib.createRGBColor(red, green, blue);
};

var doc = app.activeDocument;
listProps (getAdjustmentLayerColor(doc, doc.activeLayer).rgb );


