function hasLayerFX(){  
     var ref = new ActionReference();  
     ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
     return  executeActionGet(ref).hasKey(stringIDToTypeID('layerEffects'));  
};  
  
function hasStrokeFX(){  
     var res = false;  
     var ref = new ActionReference();  
     ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
     var hasFX =  executeActionGet(ref).hasKey(stringIDToTypeID('layerEffects'));  
     if ( hasFX ){  
          var ref = new ActionReference();  
          ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
          res = executeActionGet(ref).getObjectValue(stringIDToTypeID('layerEffects')).hasKey(stringIDToTypeID('frameFX'));  
     }  
     return res;  
};  
  
  
//
//@includepath "/d/Adobe/xtools"
//@include "xlib/PSConstants.js"
//@include "xlib/Stream.js"
//@include "xlib/stdlib.js"

function getStrokeSizeColor(){  

        var ref = new ActionReference();  
        ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
        var desc = executeActionGet(ref).getObjectValue(stringIDToTypeID('layerEffects')).getObjectValue(stringIDToTypeID('frameFX'));  
        var cColour = getColorFromDescriptor(desc.getObjectValue(stringIDToTypeID("color")), typeIDToCharID(desc.getClass(charIDToTypeID("Clr ")))); 
        var grad = getGradientInfo( desc.getObjectValue(charIDToTypeID("Grad")) ); 
        var size =  desc.getUnitDoubleValue(stringIDToTypeID('size'));  
            //return desc.getObjectValue(stringIDToTypeID("color"));
        return {color:cColour,grad:grad, size:size};
};  

function getColorFromDescriptor(colorDesc, keyClass) {  
  var colorObject = new SolidColor();  
  switch (keyClass) {  
  case "Grsc":  
    colorObject.grey.grey = colorDesc.getDouble(charIDToTypeID('Gry '));  
    break;  
  case "RGBC":  
    colorObject.rgb.red = colorDesc.getDouble(charIDToTypeID('Rd  '));  
    colorObject.rgb.green = colorDesc.getDouble(charIDToTypeID('Grn '));  
    colorObject.rgb.blue = colorDesc.getDouble(charIDToTypeID('Bl  '));  
    break;  
  case "CMYC":  
    colorObject.cmyk.cyan = colorDesc.getDouble(charIDToTypeID('Cyn '));  
    colorObject.cmyk.magenta = colorDesc.getDouble(charIDToTypeID('Mgnt'));  
    colorObject.cmyk.yellow = colorDesc.getDouble(charIDToTypeID('Ylw '));  
    colorObject.cmyk.black = colorDesc.getDouble(charIDToTypeID('Blck'));  
    break;  
  case "LbCl":  
    colorObject.lab.l = colorDesc.getDouble(charIDToTypeID('Lmnc'));  
    colorObject.lab.a = colorDesc.getDouble(charIDToTypeID('A   '));  
    colorObject.lab.b = colorDesc.getDouble(charIDToTypeID('B   '));  
    break;  
  default:  
    return null;  
  }  
  return colorObject;  
};  



function getGradientInfo(desc){  

          // get an ActionList of color settings used in gradient  
          var colorsList = desc.getList(charIDToTypeID('Clrs'));  
          var count = colorsList.count;// the number of color stops in gradient  
          var colors = [];// array to hold custom color objects  
          for( var c = 0; c < count; c++ ){  
               desc = colorsList.getObjectValue(c);// get color descriptor  
               var colorStop = {};// object to hold color stop info  
               colorStop.location = desc.getInteger(stringIDToTypeID('location'));  
               colorStop.midpoint = desc.getInteger(stringIDToTypeID('midpoint'));  
               colorStop.type = typeIDToStringID(desc.getEnumerationValue(stringIDToTypeID('type')));  
                 
               var colorDesc = desc.getObjectValue(stringIDToTypeID('color'));  
               var color = new SolidColor();  
               switch(app.activeDocument.mode){  
                    case DocumentMode.GRAYSCALE:  
                         color.gray.gray = colorDesc.getDouble(charIDToTypeID('Gry '));  
                         break;  
                    case DocumentMode.RGB:  
                         color.rgb.red = colorDesc.getDouble(charIDToTypeID('Rd  '));  
                         color.rgb.green = colorDesc.getDouble(charIDToTypeID('Grn '));  
                         color.rgb.blue = colorDesc.getDouble(charIDToTypeID('Bl  '));  
                         break;  
                    case DocumentMode.CMYK:  
                         color.cmyk.cyan = colorDesc.getDouble(charIDToTypeID('Cyn '));  
                         color.cmyk.magenta = colorDesc.getDouble(charIDToTypeID('Mgnt'));  
                         color.cmyk.yellow = colorDesc.getDouble(charIDToTypeID('Ylw '));  
                         color.cmyk.black = colorDesc.getDouble(charIDToTypeID('Blck'));  
                         break;  
                    case DocumentMode.LAB:  
                         color.lab.l = colorDesc.getDouble(charIDToTypeID('Lmnc'));  
                         color.lab.a = colorDesc.getDouble(charIDToTypeID('A   '));  
                         color.lab.b = colorDesc.getDouble(charIDToTypeID('B   '));  
                         break;  
               }  
               colorStop.color = color;  
               colors.push(colorStop);  
          }  
          return colors;  

};  


listProps(getStrokeSizeColor().grad[2] );
//alert( getStrokeSizeColor().color.rgb.hexValue );
