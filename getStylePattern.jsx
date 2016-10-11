var P ={}  
P = patternFX();  
for(var a in P){  
    $.writeln(a + " = " + P[a]);  
}  
function patternFX(){  
var Pattern ={};  
var ref = new ActionReference();  
ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
var desc = executeActionGet(ref);  
if(desc.hasKey(stringIDToTypeID( 'layerEffects' ))){  
if(!desc.getBoolean (stringIDToTypeID( 'layerFXVisible'))) return undefined;  
desc = desc.getObjectValue(stringIDToTypeID('layerEffects'));  
if(!desc.hasKey(stringIDToTypeID( 'patternFill'))) return null;  
desc = desc.getObjectValue(stringIDToTypeID('patternFill'));  
Pattern.Enabled = desc.getBoolean(stringIDToTypeID('enabled'));  
Pattern.Mode = typeIDToStringID(desc.getEnumerationValue( stringIDToTypeID( 'mode' )));  
Pattern.Opacity = desc.getUnitDoubleValue (stringIDToTypeID( 'opacity' ));  
Pattern.Scale = desc.getUnitDoubleValue (stringIDToTypeID( 'scale' ));  
Pattern.Align = desc.getBoolean (stringIDToTypeID( 'align'));  
var patDesc = desc.getObjectValue(stringIDToTypeID('pattern'));  
Pattern.Name = patDesc.getString(stringIDToTypeID('name'));  
Pattern.ID = patDesc.getString(stringIDToTypeID('ID'));  
var phaseDesc = desc.getObjectValue(stringIDToTypeID('phase'));  
Pattern.PhaseHorizontal = phaseDesc.getUnitDoubleValue (stringIDToTypeID( 'horizontal' ));  
Pattern.PhaseVertical = phaseDesc.getUnitDoubleValue (stringIDToTypeID( 'vertical' ));  
  
}  
 return Pattern;  
};  



var ref = new ActionReference();  
ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
var desc = executeActionGet(ref);//.getObjectValue(stringIDToTypeID('layerEffects')).getObjectValue(stringIDToTypeID('patternFill'));  
$.writeln(desc);  
var c = desc.count  
if(desc.typename == 'ActionReference'){  
    var c = desc.count;  
    for(var i=0;i<c;i++){ //enumerate reference. use getForm() to determine which get method to use  
      $.writeln('AR '+zeroPad( i+1, 2 )+' = '+desc.getReference(i).getIndex());   
    }  
}  
if(desc.typename == 'ActionList'){  
    var c = desc.count;  
    for(var i=0;i<c;i++){ //enumerate list  
     $.writeln('AL '+zeroPad( i+1, 2 )+' = '+desc.getType(i)/* added desc.getPath(i) for aliastype */ +' - ' + typeIDToStringID(desc.getClass (i)));  
    }  
}  
if(desc.typename == 'ActionDescriptor'){  
    var c = desc.count;  
    for(var i=0;i<c;i++){ //enumerate descriptor's keys  
      $.writeln('AD '+zeroPad( i+1, 2 )+' = '+IDTz(desc.getKey(i)) +' : '+desc.getType(desc.getKey(i)));   
    }  
}  
function IDTz(id){  
     try {  
          var res = typeIDToStringID( id );  
          if(res == '' ){  
               var res = typeIDToCharID( id );  
          }  
     }catch(e){}  
     return res;  
}  
function zTID( s ){  
     if( s.length == 4 ) var res = charIDToTypeID( s );  
     if( s.length > 4 ) var res = stringIDToTypeID( s );  
     return res;  
}  
function zeroPad(num,pad) {  
     var z = Math.pow(10,Number(pad))  
     return num <= z ? ((Number( num) + z).toString().substr(1)): num  
}  

