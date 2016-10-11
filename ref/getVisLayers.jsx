function getVisLayers(){ 
var ref = new ActionReference(); 
ref.putEnumerated( charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') ); 
var count = executeActionGet(ref).getInteger(charIDToTypeID('NmbL')) +1; 
var Names=[];
try{
activeDocument.backgroundLayer;
var i = 0; }catch(e){ var i = 1; };
for(i;i<count;i++){ 
if(i == 0) continue;
ref = new ActionReference(); 
ref.putIndex( charIDToTypeID( 'Lyr ' ), i );
var desc = executeActionGet(ref);
var layerName = desc.getString(charIDToTypeID( 'Nm ' ));
var Id = desc.getInteger(stringIDToTypeID( 'layerID' ));
if(layerName.match(/^<\/Layer group/) ) continue;
var layerType = typeIDToStringID(desc.getEnumerationValue( stringIDToTypeID( 'layerSection' )));
var isLayerSet =( layerType == 'layerSectionContent') ? false:true;
var vis = desc.getBoolean(charIDToTypeID( "Vsbl" ));
if(!isLayerSet && vis) Names.push(Id);
}; 
return Names;
//---------------------------end of snippet