// based on code by michael l hale;  
var ref = new ActionReference();  
ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
var layerDesc = executeActionGet(ref);  
var adjList = layerDesc.getList(stringIDToTypeID('adjustment'));  
var theColors = adjList.getObjectValue(0).getObjectValue(stringIDToTypeID('color'));  
var str = '';  
for(var i=0;i<theColors.count;i++){ //enumerate descriptor's keys  
       str = str + 'Key '+i+' = '+typeIDToStringID(theColors.getKey(i))+': '+theColors.getUnitDoubleValue(theColors.getKey(i))+'\n';  
}  
alert(str);  

