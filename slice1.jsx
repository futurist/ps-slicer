#target photoshop
//@includepath "/d/Program%20Files/Adobe/xtools;/Developer/xtools"
//@include "xlib/PSConstants.js"
//@include "xlib/stdlib.js"



try{
var doc =  app.activeDocument;  
}catch(e){ doc=null; }
app.preferences.rulerUnits = Units.PIXELS;
app.preferences.typeUnits = TypeUnits.PIXELS;
app.displayDialogs = DialogModes.NO;

var data=['body'];
var html=[];
var css=[];
var images = [];
var level=1;
var exportPath = 'web/';
var imagePath = 'images/';
var cssPath = 'css/';

try{
var body = doc.layerSets.getByName('body');
}catch(e){ body=null; }

var layerDatas = [];
var selectedLayer;
var originalHistoryState;
    
    /********************************************************************************/
    /********************************   UTILTIES   **********************************/

    String.prototype.trim = function(s){
		s = s||' ';
       return this.replace((new RegExp('^'+ s +'*')), "").replace((new RegExp(''+ s +'*$')), "");
    } 
    
    function keys(obj){
        var keys = [];
        for(i in obj) if (obj.hasOwnProperty(i))
        {
            keys.push(i);
        }
        return keys;
    };
    
    function clone(obj){
        if(obj == null || typeof(obj) != 'object')
            return obj;

        var temp = {}; // changed, obj.constructor()

        for(var key in obj)
            temp[key] = clone(obj[key]);
        return temp;
    }

    Array.prototype.indexOf = function(el) {
        for (var i = 0; i < this.length; i += 1) {
            if (this[i] == el) return i;
        }
        return -1;
    };
    
    Array.prototype.lastIndexOf = function(el) {
        for (var i = this.length-1; i >= 0; i -= 1) {
            if (this[i] == el) return i;
        }
        return -1;
    };
    
    Array.prototype.distinct = function() {
        var derivedArray = [];
        for (var i = 0; i < this.length; i += 1) {
            if (derivedArray.indexOf(this[i]) == -1) {
                derivedArray.push(this[i])
            }
        }
        return derivedArray;
    };
    
    Array.prototype.each = function(callback) {
		if(this.length==0) return[];
        var derivedArray = [];
        for (var i = 0; i < this.length; i += 1) {
            derivedArray.push(callback(this[i], i));
        }
        return derivedArray;
    };

   Array.prototype.each2 = function(callback) {
	   if(this.length==0) return[];
        var derivedArray = [];
        for (var i = this.length-1; i >=0 ; i -= 1) {
            derivedArray.push(callback(this[i], i));
        }
        return derivedArray;
    };

function toggleLayer(name){//if name=undefined, then active layer is target.
	var desc = new ActionDescriptor();
	var list = new ActionList();
	var ref = new ActionReference();
	if(name) ref.putName( charIDToTypeID('Lyr '), name );
	else ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt")); 
	list.putReference( ref );
    desc.putList( charIDToTypeID('null'), list );
    desc.putBoolean( charIDToTypeID('TglO'), true );
    executeAction( charIDToTypeID('Shw '), desc, DialogModes.NO );	
}

function getLayerID(name){//if name=undefined, then active layer is target.
	ref = new ActionReference(); 
	if(name) ref.putName( charIDToTypeID('Lyr '), name );
	else ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt")); 
	var desc = executeActionGet(ref);
	return Id = desc.getInteger(stringIDToTypeID( 'layerID' ));
}


function getVectorMaskDesc(layer){
	if(layer==doc)return undefined;
	doc.activeLayer = layer;
	var ref = new ActionReference();
    ref.putEnumerated( cTID('Path'), cTID('Ordn'), sTID('vectorMask'));
    try {
      return app.executeActionGet(ref);
    } catch (e) {
      return undefined;
    }    
}


function getVectorMaskBounds_cornerPointsOnly(layer) { 
	// returns array [left, top, right, bottom, width, height] 
	if(typeof getVectorMaskDesc(layer)!='object')return [];
	var round = true; 
    var ref = new ActionReference(); 
    ref.putEnumerated( cTID('Path'), cTID('Path'), sTID('vectorMask') ); 
    ref.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt")); 
    var vMaskDescr = executeActionGet(ref); 
    var pathContents = vMaskDescr.getObjectValue(sTID('pathContents')); 
    var pathList = pathContents.getList(sTID('pathComponents')); 

    // for each path in current layer 
    var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity; 
    // using separate variables gives speed gain 
    var _id1 = sTID("subpathListKey"),
        _id2 = sTID("points"),
        _id3 = sTID("anchor"),
        _id4 = sTID('horizontal'),
        _id5 = sTID('vertical');
     var parr=[];
    for ( cPath=0; cPath<pathList.count; ++cPath ) 
    { 
      var curPath = pathList.getObjectValue(cPath).getList(_id1); 
      var points = curPath.getObjectValue(0).getList(_id2); 
	  try{
		var isClosed = curPath.getObjectValue(0).getBoolean(cTID('Clsp'));
	  }catch(e){ isClosed = false; }
      // for each point 
      for (cPoint=0; cPoint < points.count; ++cPoint ) 
      {    
        var point = points.getObjectValue(cPoint).getObjectValue(_id3); 
        var x = point.getUnitDoubleValue(_id4); 
        var y = point.getUnitDoubleValue(_id5); 
		if(isClosed) parr.push({x:x,y:y});
        if ( x < minX ) minX = x; // it is faster than if/else block (benchmarked on PSCS4) 
        if ( x > maxX ) maxX = x; 
        if ( y < minY ) minY = y; 
        if ( y > maxY ) maxY = y; 
      } 
    } 
    res = [minX, minY, maxX, maxY, maxX-minX, maxY-minY]; 
	
	if(parr.length>=8){
		res.push( Math.abs(parr[0].x - parr[4].x) );
		res.push( Math.abs(parr[0].y - parr[4].y) );
		res.push( Math.abs(parr[2].x - parr[6].x) );
		res.push( Math.abs(parr[2].y - parr[6].y) );
	}
    if (round) 
    { 
      for ( i=0; i<res.length; ++i ) 
      { 
        res[i] = Math.round(res[i]); 
      } 
    } 
    return res; 
}


function getLayerBounds(alayer)
{
  var x1 = parseFloat(alayer.bounds[0])
  var y1 = parseFloat(alayer.bounds[1])
  var x2 = parseFloat(alayer.bounds[2])
  var y2 = parseFloat(alayer.bounds[3])
  return [x1,y1,x2,y2]
}


    /********************************************************************************/
    /*****************************  LAYER DATA & CACHING  ***************************/
    
    function convertLayerToData(layer){
        var data = {
			id:null,
            layer: layer,
            isSet: layer.typename == "LayerSet",
			isBg: layer.typename == "ArtLayer" ? layer.isBackgroundLayer : false,
			isText: layer.typename == "ArtLayer" ? layer.kind == LayerKind.TEXT : false,
			hasVector:false,
            name: layer.name,
            startedVisible: layer.visible,
            tags: {},
            hasTags: false,
			bbox:[],
            siblings: [],
            descendents: [],
            ancestors: [],
            children: [],
            bounds:[],
			color:false,
			border:{},
            exportPath: ""
        };
        data.bounds = getVectorMaskBounds_cornerPointsOnly(layer);
		data.hasVector = data.bounds.length>0;
		data.border = getStrokeSizeColor(); //no stroke or hidden: {size:0}, {size:1,color:{rgb, hexValue}}
		data.color = getLayerColor(); //false=no color, otherwise color object: {rgb:{r,g,b}, hexValue}
		//data.id = getLayerID();
		// if it's group then get system bounds for general use
		/*
			if(layer!=doc && layer.bounds && data.bounds.length==0){
			data.bounds = getLayerBounds(layer);
			data.bounds.push( data.bounds[2] - data.bounds[0] );
			data.bounds.push( data.bounds[3] - data.bounds[1] );
		}
		*/

		// Get tags
        if(data.name.indexOf("exportPath~") != -1){
            data.exportPath = data.name.substring(data.name.lastIndexOf("~")+1).trim();
        } else if(data.name.indexOf("~") != -1){
            var tags = data.name.substring(data.name.lastIndexOf("~")+1).trim().split(";");
            for(var i=0; i<tags.length; i++){
                var t = tags[i].split(/[:=]/);
                if(t.length == 1){
                    t[1] = t[0].trim();
                    t[0] = "0";
                }else{
                    t[0] = t[0].trim();
                    t[1] = t[1].trim();
                }
                data.tags[t[0]] = t[1];
            }
            data.name = data.name.substring(0, data.name.lastIndexOf("~")).trim();
            data.hasTags = true;
        }
        // Split by Comma
        var sections = data.name.trim(';').split(';');
        for(var i=0; i<sections.length; i++){
            var section = sections[i].trim();

            //No Colon, So Maybe A Filename
            if(i==0){
                var extension = section.match(/(jpg|png|gif)$/i);
                if(extension){
                    data.filename = section;
                    data.extension = extension[0].toLowerCase();
                }
			data.name = section;

            //Colon, So Split Into Key/Value
            }else if(section!=''){
                var fieldParts = section.split(/[:=]/);
                data.tags[fieldParts[0].trim().toLowerCase()] = fieldParts[1].trim();
				data.hasTags = true;
            }
        }

        data.isExportable = data.isSet && !!data.filename;
        
        return data;
    }
    
    var buildAndRegisterLayerData = function(layer){
        
		var data = convertLayerToData(layer);
		if( ! findDataForLayer(layer) ) {
			//create my data
			layerDatas.push(data);
			data.id=layerDatas.length;
		}
        //add all descendents
        if(layer.layers ){
            var childArr = [];
            //push child layer
            for(var i=0; i<layer.layers.length; i++){
                childArr.push(layer.layers[i]);
            }
            //push linked layer
            if(layer.linkedLayers )
            for(var i=0; i<layer.linkedLayers.length; i++){
                if( ! findDataForLayer(layer.linkedLayers[i]) ) childArr.push(layer.linkedLayers[i]);
            }
            for(var i=0; i<childArr.length; i++){
                if( (layer==doc && childArr[i].name!='body') ) continue;
                //create data for the child
                var childData = buildAndRegisterLayerData(childArr[i]);
                if(!childData) continue;
                //add this child
                data.children.push(childData);
                data.descendents.push(childData);
                
                //add this child's descendents
                childData.descendents.each(function(d){
                    data.descendents.push(d);
                });
            }
        
            //set siblings
            
            data.children.each(function(c1){
                data.children.each(function(c2){
                    if(c1 != c2)
                        c1.siblings.push(c2);
                });                
            });
        
            //add self as an ancestor
            data.descendents.each(function(d){                
                d.ancestors.push(data);
            });
        }
        return data;
    };

    
	
	
	
    function findDataForLayer(layer){
        var data = null;
        layerDatas.each(function(l){
            if(l.layer == layer)
            {
                data = l;
                return false;
            }
        });
        return data;
    };

    

    /********************************************************************************/
    /**********************************  REVERTING  *********************************/

    var revert = function(){
        doc.activeHistoryState = originalHistoryState;
        doc.activeLayer = selectedLayer;

        layerDatas.each(function(l){
            if(l.startedVisible != l.layer.visible)
                l.layer.visible = l.startedVisible;
        });
    }

    /********************************************************************************/
    /******************************  HIDE HASHED LAYERS  ****************************/
    
    //Hide hashed
    layerDatas.each(function(l){
        if(l.name.indexOf("#") != -1 && l.layer.visible != false)
            l.layer.visible = false;
    });
    
    
    /********************************************************************************/
    /*********************************  HELPERS  ************************************/

    function hideSiblingsOfSelfAndOfParent(data){
        var chain = [data];
        data.ancestors.each(function(a){
            chain.push(a);
        });

        chain.each(function(a){
            //show ancestors
            if(a.layer.visible != true)
                a.layer.visible = true;
                
            //hide ancestors siblings
            a.siblings.each(function(sib){
                var setVisible = new RegExp(/^ *[*]/).test(sib.name);
                if(sib.layer.visible != setVisible)
                     sib.layer.visible = setVisible;
            });
        });
    }

    
    function getExportOptions(layerInfo){
        var options = new ExportOptionsSaveForWeb();
        if(layerInfo.extension == "jpg"){
            options.format = SaveDocumentType.JPEG; //-24 //JPEG, COMPUSERVEGIF, PNG-8, BMP 
            
            //Quality
            if(layerInfo.q){
                if(isNaN(parseFloat(layerInfo.q)) == false){
                    layerInfo.q = Math.max(Math.min(parseFloat(layerInfo.q), 100), 0);
                    if(layerInfo.q<=1){
                        layerInfo.q = Math.round(layerInfo.q*100);
                    }
                }
            }
            options.quality = layerInfo.q || 80; 
        }else if(layerInfo.extension == "png"){
            options.format = SaveDocumentType.PNG; //JPEG, COMPUSERVEGIF, PNG-8, BMP 
            options.quality = 100;
            options.PNG8 = false;
        }else if(layerInfo.extension == "gif"){
            options.format = SaveDocumentType.COMPUSERVEGIF; //JPEG, COMPUSERVEGIF, PNG-8, BMP 
            options.matte = MatteType.NONE;
            options.transparency = true;
        }         
        return options;
    }

    var getCurrentDocumentIndex = function(){
        for(var i=0; i<app.documents.length; i++){
            if(app.activeDocument == app.documents[i])
                return i;
        }
    }
       
    var getPath = function(exportPath){
        var docPath;
        if(app.documents.length == 1 || !new RegExp(/TemporaryItems/).test(app.activeDocument.path)){
            docPath = app.activeDocument.path;
        } else {
            var newIndex = (getCurrentDocumentIndex()-1) % app.documents.length;
            docPath = app.documents[newIndex].path;
        }
		docPath+='';
		if(docPath.slice(-1) != '/') docPath+='/';
        //Check if it exist, if not create it.
        if(exportPath && exportPath != "")
        {
			var path = docPath+exportPath;
			if(path.slice(-1) != '/') path+='/';
            var exportFolder = Folder(path);
            if(!exportFolder.exists) exportFolder.create();
            return exportFolder;
        } else {
            return docPath;
        }
    };    
    
    /********************************************************************************/
    /*******************************  LAYER EXPORT  **********************************/

    var exportableLayers = [];
    layerDatas.each(function(l){
        if(l.isExportable){
            exportableLayers.push(l);
        }
    });




function getRect(bounds)
{
  var x1 = parseFloat(bounds[0]);
  var y1 = parseFloat(bounds[1]);
  var x2 = parseFloat(bounds[2]);
  var y2 = parseFloat(bounds[3]);
  return [[x1,y1],[x2,y1],[x2,y2],[x1,y2]]; 
}




function getStrokeSizeColor(){  

        var ref = new ActionReference(); 
        ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
		try{
			var desc = executeActionGet(ref).getObjectValue(stringIDToTypeID('layerEffects')).getObjectValue(stringIDToTypeID('frameFX'));  
		}catch(e){ return {size:0}; }
		try{
			var lfxv = executeActionGet(ref).getBoolean(charIDToTypeID('lfxv'));
			var enab = desc.getBoolean(charIDToTypeID('enab'));
		}catch(e){ enab = false; }
		if(!enab || !lfxv){
			return {size:0,enab:false };
		}
        var cColour = getColorFromDescriptor(desc.getObjectValue(stringIDToTypeID("color")), typeIDToCharID(desc.getClass(charIDToTypeID("Clr ")))); 
        try{
			var grad = getGradientInfo( desc.getObjectValue(charIDToTypeID("Grad")) ); 
		}catch(e){ grad= {}; }
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

function getLayerColor(){
	var ref = new ActionReference();  
	ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
	var layerDesc = executeActionGet(ref);  
	try{
	var adjList = layerDesc.getList(stringIDToTypeID('adjustment'));  
	}catch(e){  return false; } 
	var desc = adjList.getObjectValue(0);  
	var cColour = getColorFromDescriptor(desc.getObjectValue(stringIDToTypeID("color")), typeIDToCharID(desc.getClass(charIDToTypeID("Clr ")))); 
	return cColour;
}

    
    /********************************************************************************/
    /**********************************  MAIN  **************************************/
    //doc.selection.select( getRect( layerDatas[1].bounds ) ); 


function numStr(num, str){
	var s='';
	for(i=0;i<num;i++){
		s+=str;
	}
	return s;
}


function getCSS(co){
	co.level = level;
	
	co.children.each2(function(c){
			if(c.isSet){
				level++;
				getCSS(c);
				level--;
			}else {
                   if(c.isText){
                       co.fontInfo={};
                       co.text = c.layer.textItem.contents;
                       co.fontInfo.kind =c.layer.textItem.kind==TextType.PARAGRAPHTEXT ? 'para' : 'line';
                       co.fontInfo.font = c.layer.textItem.font;
                       try{
                       co.fontInfo.color = c.layer.textItem.color.rgb.hexValue;
                       }catch(e){  co.fontInfo.color= '000000'; }
                       co.fontInfo.size = c.layer.textItem.size.toString().replace(/\s+/gi, '');
                       try{
                       co.fontInfo.textIndent = c.layer.textItem.firstLineIndent.toString().replace(/\s+/gi, '');
                        }catch(e){  co.fontInfo.textIndent= 0; }
                        try{
                        co.fontInfo.lineHeight = (c.layer.textItem.leading=='auto-leading'?'normal': c.layer.textItem.leading.toString().replace(/\s+/gi, ''));
                       }catch(e){co.fontInfo.lineHeight = 'normal';}
                       try{
                        co.fontInfo.underLine = c.layer.textItem.underline != UnderlineType.UNDERLINEOFF;
                       }catch(e){co.fontInfo.underLine = false;}
                       try{
                       co.fontInfo.thruLine = c.layer.textItem.strikeThru != StrikeThruType.STRIKEOFF;
                       }catch(e){co.fontInfo.thruLine = false;}
                       //co.fontInfo.textTransform = (c.layer.textItem.capitalization=="TextCase.NORMAL"?"normal":"uppercase");
                       try{
                       co.fontInfo.bold = c.layer.textItem.fauxBold;
                       }catch(e){co.fontInfo.bold = false;}
                       try{
                       co.fontInfo.italic = c.layer.textItem.fauxItalic;
                       }catch(e){co.fontInfo.italic = false;}
                   }else{
                        if( (new RegExp(/^m($|\s|#)/)).test(c.name)  ){
                            co.mbox = c.bounds;
                            co.mname = c.name;
                        }
                        if( (new RegExp(/^c($|\s|#)/)).test(c.name)  ){
                            co.cbox = c.bounds;
                            co.ctags = c.tags;
                            co.ccolor = c.color;
                            co.border = c.border;
                            co.cname = c.name;
						  co.cdata = c;
                        }
                        if( (new RegExp(/^b($|\s|#)/)).test(c.name)  ){
                            co.bbox.push(c);
                        }
					   if( (new RegExp(/^bg($|\s|#)/)).test(c.name)  ){
							co.bgbox = {};
							co.bgbox.name = c.name;
							co.bgbox.tags = c.tags;
							co.bgbox.bounds = c.bounds;
							co.bgbox.filename = c.name.split('#').pop().trim();
							co.bgbox.extension = co.bgbox.filename.split('.').pop().trim();
							images.push({type:'bg', layer:c.layer, filename:co.bgbox.filename, extension:co.bgbox.extension, q:c.tags.q, bounds:c.bounds.slice(0,4) });
                        }
                 }
			}
        });
	
	if(typeof co=='undefined')return;
	data.unshift(co);
	
	

}

function main(){
		if(!body)return;

//build layer data
buildAndRegisterLayerData(doc);
selectedLayer = doc.activeLayer;
originalHistoryState = doc.activeHistoryState;
revert();

//analysys layer data
		var _css = findDataForLayer(body);
        getCSS(_css);
		
		data.each(function(co){
		if(!co.name) return;
		width = height = '';
		padding=[0,0,0,0];
		margin = [0,0,0,0];
		if(co.cbox){
			if(co.cbox.length==6){
				width = co.cbox[4];
				height = co.cbox[5];
				padding = [0,0,0,0];
			}
			if(co.cbox.length==10){
				padding = co.cbox.slice(6);
				width = co.cbox[4]-padding[0]-padding[2];
				height = co.cbox[5]-padding[1]-padding[3];
			}
		}else{
			co.cbox = [0,0,0,0];
		}

		co.bbox.each(function(c){
			var cx = (co.cbox[0]+co.cbox[2]) / 2;
			var cy = (co.cbox[1]+co.cbox[3]) / 2;
			if(c.bounds[4] < c.bounds[5] ){
				if(c.bounds[0]<cx){
					co.borderLeft = {size:c.bounds[4], color:c.color };
				}else{
					co.borderRight = {size:c.bounds[4], color:c.color };
				}
			}else{
				if(c.bounds[1]<cy){
					co.borderTop = {size:c.bounds[5], color:c.color };
				}else{
					co.borderBottom = {size:c.bounds[5], color:c.color };
				}
			}
		});
	
		if(co.mbox){
			margin = [
			co.cbox[0]-co.mbox[0]- ( (co.borderLeft) ? co.borderLeft.size:co.border.size ), 
			co.cbox[1]-co.mbox[1]- ( (co.borderTop) ? co.borderTop.size:co.border.size ), 
			co.mbox[2]-co.cbox[2]- ( (co.borderRight) ? co.borderRight.size:co.border.size ), 
			co.mbox[3]-co.cbox[3]- ( (co.borderBottom) ? co.borderBottom.size:co.border.size ) 
			];
		}

		
        
		if(co.tags['width']){
			co.width = co.tags['width'].trim();
		}

		if(co.tags['height']){
			co.height = co.tags['height'].trim();
		}
		
		if(co.tags['padding']){
			var mg = co.tags['padding'].trim().split(/\s+/g);
			if(mg.length==1){
				co.padding=[ parseFloat(mg[0]), parseFloat(mg[0]), parseFloat(mg[0]), parseFloat(mg[0]) ];
			}
			if(mg.length==2){
				co.padding=[ parseFloat(mg[1]), parseFloat(mg[0]), parseFloat(mg[1]), parseFloat(mg[0]) ];
			}
			if(mg.length==3){
				co.padding=[ parseFloat(mg[1]), parseFloat(mg[0]), parseFloat(mg[1]), parseFloat(mg[2]) ];
			}
			if(mg.length==4){
				co.padding=[ parseFloat(mg[3]), parseFloat(mg[0]), parseFloat(mg[1]), parseFloat(mg[2]) ];
			}
		}
		
		if(co.tags['margin']){
			var mg = co.tags['margin'].trim().split(/\s+/g);
			if(mg.length==1){
				co.margin=[ parseFloat(mg[0]), parseFloat(mg[0]), parseFloat(mg[0]), parseFloat(mg[0]) ];
			}
			if(mg.length==2){
				co.margin=[ parseFloat(mg[1]), parseFloat(mg[0]), parseFloat(mg[1]), parseFloat(mg[0]) ];
			}
			if(mg.length==3){
				co.margin=[ parseFloat(mg[1]), parseFloat(mg[0]), parseFloat(mg[1]), parseFloat(mg[2]) ];
			}
			if(mg.length==4){
				co.margin=[ parseFloat(mg[3]), parseFloat(mg[0]), parseFloat(mg[1]), parseFloat(mg[2]) ];
			}
		}

		delete co.tags['width'];
		delete co.tags['height'];
		delete co.tags['padding'];
		delete co.tags['margin'];
		
		// below if statement can use user defined first, then use caculated.
		if(typeof co.width=='undefined') co.width = width;
		if(typeof co.height=='undefined') co.height=height;
		if(typeof co.padding=='undefined') co.padding = padding;
		if(typeof co.margin=='undefined') co.margin = margin;
		
		co.filename = '';
		if(co.cname && co.cname.indexOf('#')>0){
			var part = co.cname.split(';');
			co.filename = part[0].split('#').pop().trim();
			co.extension = co.filename.split('.').pop().trim();
			var extension = co.extension.match(/(jpg|png|gif)$/i);
		}
	
		//push image slice
		var fi={};
		if(co.filename!='' && extension){
			fi.filename = co.filename;
             fi.extension = extension[0].toLowerCase();
			fi.q = co.tags.q;
			if(co.cbox.length==6){
				fi.bounds = co.cbox.slice(0,4);
			}
			if(co.cbox.length==10){
				fi.bounds = co.cbox.slice(6);
			}
			fi.type='img';
			fi.layer=co.layer;
			images.push(fi);
		}
	
		var selector = co.name;
		if(co.tags.prefix){
			selector = co.tags.prefix + ' ' + co.name;
			delete co.tags.prefix;
		}
		
		//var cssStr = selector + '{\n';
		var cssStr = [selector];
		var marginLeftFix = 0;

		if(co.border.size>0){
			cssStr.push( '\tborder:'+ co.border.size + 'px solid #'+ co.border.color.rgb.hexValue +'; ');
		}
		
		if(co.borderLeft){
			cssStr.push( '\tborder-left:'+ co.borderLeft.size + 'px solid #'+ co.borderLeft.color.rgb.hexValue +'; ');
		}
		if(co.borderRight){
			cssStr.push( '\tborder-right:'+ co.borderRight.size + 'px solid #'+ co.borderRight.color.rgb.hexValue +'; ');
		}
		if(co.borderTop){
			cssStr.push( '\tborder-top:'+ co.borderTop.size + 'px solid #'+ co.borderTop.color.rgb.hexValue +'; ');
		}
		if(co.borderBottom){
			cssStr.push( '\tborder-bottom:'+ co.borderBottom.size + 'px solid #'+ co.borderBottom.color.rgb.hexValue +'; ');
		}

		// find previous float element, add margin-left to current item.
		co.siblings.each(function(c){
				if(c.id<co.id && c.tags['float']){
					var bordersize = ((c.borderLeft)?c.borderLeft.size:c.border.size) + 
									((c.borderRight)?c.borderRight.size:c.border.size) ;
					marginLeftFix = c.width + c.padding[0]+c.padding[2]+ bordersize + c.margin[0]+c.margin[2] ;
				}
		});
		marginLeftFix = 0;

		if(co.width !='' && co.width !='-' ){
			cssStr.push( '\twidth:'+  co.width + 'px; ');
		}
		if(co.height!='' && co.height!='-'  ){
			cssStr.push( '\theight:'+  co.height + 'px; ');
		}
		
		// convert co.margin(left, top, right, bottom) to css margin(top, right, bottom, left)
		if(co.padding[0] || co.padding[1] || co.padding[2] || co.padding[3]){
			var mg = co.padding.slice(1).concat(co.padding[0]);
			cssStr.push( '\tpadding:'+  mg.join('px ') + 'px; ');
		}
		// convert co.margin(left, top, right, bottom) to css margin(top, right, bottom, left)
		if(co.margin[0] || co.margin[1] || co.margin[2] || co.margin[3]){
			co.margin[0] += marginLeftFix;
			var mg = co.margin.slice(1).concat(co.margin[0]);
			cssStr.push( '\tmargin:'+  mg.join('px ') + 'px; ');
		}
		
		//get all user defined css, update if there's already defined
		keys(co.tags).each(function(key){
			var newRule = true;
			cssStr.each(function(line,i){
				if( (new RegExp('\s*'+ key +'\s*:')).test(line) ){
					cssStr[i] ='\t'+ key +':'+  co.tags[key] + '; ';
					newRule = false;
				}
			});
			if(newRule) cssStr.push( '\t'+ key +':'+  co.tags[key] + '; ');
         });
		// if has float, add clearfix to parent
		if(co.tags['float']){
			var pi = co.ancestors[0].htmlIdx;
			if( html[pi].indexOf('.clearfix')<0 ) html[pi] = html[pi] + '.clearfix';
		}
		if(co.ccolor && co.tags.color){
			cssStr.push('\tbackground-color: ' + '#'+co.ccolor.rgb.hexValue+'; ');
		}
		if(co.bgbox){
			cssStr.push('\tbackground-image: url(../'+ imagePath + co.bgbox.filename +');' );
			for(p in co.bgbox.tags) if(p!='q') cssStr.push('\tbackground-'+ p +': '+ co.bgbox.tags[p] +';' );
		}
		if( !  /-\s*$/i.test(co.name) )  css.push(  cssStr );
		co.name = co.name.replace(/-\s*$/i, '');
        
		var htmlStr = numStr(co.level,'\t')+co.name;
        if(co.text){
            var fontRule = '.font'+css.length ;
            htmlStr += fontRule + ' '+ co.text.replace(/[\r\n]/gi, '<br>');
            cssStr = [ fontRule ];
            cssStr.push('\tfont: '+co.fontInfo.size + '/' + co.fontInfo.lineHeight+ ' "' + co.fontInfo.font + '"; '  );
            cssStr.push('\tcolor: #'+co.fontInfo.color+'; '  );
            if(parseInt(co.fontInfo.textIndent) ) cssStr.push('\ttext-indent: '+co.fontInfo.textIndent+'; '  );
            if( co.fontInfo.underLine ) cssStr.push('\ttext-decoration: underline; '  );
            if( co.fontInfo.bold || (/bold/gi).test(co.fontInfo.font) ) cssStr.push('\tfont-weight: bold; '  );
            if( co.fontInfo.italic || (/italic/gi).test(co.fontInfo.font) ) cssStr.push('\tfont-style: italic; '  );
            css.push(  cssStr );
        }
		
		html.push( htmlStr );
		co.htmlIdx = html.length-1;
        
		if(co.filename!=''){
			var imgRule='';
			if(co.cdata.tags){
				delete co.cdata.tags.q;
			} 
			if( keys(co.cdata.tags).length>0 ){
				imgRule = '.img'+css.length ;
				cssStr = [ imgRule ];
				keys(co.cdata.tags).each(function(key){
					cssStr.push( '\t'+ key +':'+  co.cdata.tags[key] + '; ');
				});
				css.push(  cssStr );
			}
			html.push(  numStr(co.level+1,'\t')+'img'+ imgRule +'(src="' + imagePath  + fi.filename +'")' );
		}
	
		});
		//end of each co
	


getCode();
getImages();

}

main();

function writeTextFile(afilename, output)
{
  var txtFile = new File(afilename);
	Stdlib.writeToFile(txtFile, output, 'utf-8');  
	return;
  txtFile.open("w");
  txtFile.write(output);
  txtFile.close();
}



function getCode(){
     var css11 = '\n';
    css.each(function(c){
        if(c.length>1)
        css11+= c[0]+'{\n'+c.slice(1).join('\n')+'\n}\n';
    });
    
   var jadeName = doc.name.replace(".psd", ".jade");
   var cssName = doc.name.replace(".psd", ".css");
   var htmlName = doc.name.replace(".psd", ".html");

var head = [
'doctype transitional',
'html(xmlns="http://www.w3.org/1999/xhtml")',
'	head',
'		meta(http-equiv="Content-Type" content="text/html; charset=utf-8")',
'		title '+doc.name+'',
'		link(href="'+ cssPath+'reset.css" rel="stylesheet" type="text/css")',
'		link(href="'+ cssPath+cssName+'" rel="stylesheet" type="text/css")',
'		script(type="text/javascript")\n'
];
    var code = head.join('\n') + html.join('\n') ;
   $.writeln(code);
   
   var filepath = getPath(exportPath) + "/" + jadeName;
   $.writeln(filepath);
   writeTextFile(filepath, code);
   
   
   var filepath = getPath(exportPath + cssPath) + "/" + cssName;
   writeTextFile(filepath, css11);
   
   var filepath = getPath(exportPath) + "/" + doc.name.replace(".psd", ".bat");
   writeTextFile(filepath, "jade<"+jadeName+">"+htmlName);
   
 }

        function exportImage(data){
			//Crop
			var preResizeState = doc.activeHistoryState;
			var exportOptions = getExportOptions(data);

			if(data.type=='bg'){
				body.visible = true;
				doc.activeLayer = data.layer;
				toggleLayer();
				if(data.bounds.length==0) doc.trim(TrimType.TRANSPARENT);
				else doc.crop( data.bounds.slice(0,4) );
				var filepath = getPath(exportPath + imagePath) + "/" +data.filename;
				doc.exportDocument(new File(filepath), ExportType.SAVEFORWEB, exportOptions);
				revert();
				toggleLayer();
			}else{
				body.visible = false;
				if(data.bounds.length==0) doc.trim(TrimType.TOPLEFT);
				else doc.crop( data.bounds.slice(0,4) );
				var filepath = getPath(exportPath + imagePath) + "/" +data.filename;
				doc.exportDocument(new File(filepath), ExportType.SAVEFORWEB, exportOptions);
				body.visible = true;
			}
			//Save
			
            //Retina?
            if(data.filename.match(/@2x[.][a-z]+$/)){                
                try { doc.mergeVisibleLayers(); }catch(e){}
                doc.resizeImage(doc.width/2, doc.height/2, doc.resolution, ResampleMethod.BICUBICSHARPER);
				
                var filepath = getPath(exportPath + imagePath ) +"/"+data.filename.replace("@2x", "");
                doc.exportDocument(new File(filepath), ExportType.SAVEFORWEB, exportOptions);
            }
			doc.activeHistoryState = preResizeState;
        };
	

function getImages(){
	if(images.length==0)return;
	

	images.each(function(d){
		exportImage(d);
	});
	
	body.visible = true;
	
}

