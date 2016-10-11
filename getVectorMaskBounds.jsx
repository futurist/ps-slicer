//@includepath "/d/Adobe/xtools;/Developer/xtools"
//
//@include "xlib/PSConstants.js"
//@include "xlib/stdlib.js"

// by Damian SzopeN Sepczuk <damian[d0t]sepczuk[a7]o2{do7}pl> 
// [in] round (bool) -- whether returned values should be rounded to the nearest pixel, def: false 
// [in] doc -- document containing layer with vector mask 
// [in] layer -- layer with vector mask 
// returns array [left, top, right, bottom, width, height] 
getVectorMaskBounds_cornerPointsOnly = function(doc, layer) { 
  var round = false; 
  function _ftn() { 
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
      
    for ( cPath=0; cPath<pathList.count; ++cPath ) 
    { 
      var curPath = pathList.getObjectValue(cPath).getList(_id1); 
      var points = curPath.getObjectValue(0).getList(_id2); 
      // for each point 
      for (cPoint=0; cPoint < points.count; ++cPoint ) 
      {    
        var point = points.getObjectValue(cPoint).getObjectValue(_id3); 
        var x = point.getUnitDoubleValue(_id4); 
        var y = point.getUnitDoubleValue(_id5); 
        if ( x < minX ) minX = x; // it is faster than if/else block (benchmarked on PSCS4) 
        if ( x > maxX ) maxX = x; 
        if ( y < minY ) minY = y; 
        if ( y > maxY ) maxY = y; 
      } 
    } 
    res = [minX, minY, maxX, maxY, maxX-minX, maxY-minY]; 
    if (round) 
    { 
      for ( i=0; i<res.length; ++i ) 
      { 
        res[i] = Math.round(res[i]); 
      } 
    } 
    return res; 
  } 
  var bnds = Stdlib.wrapLCLayer(doc, layer, _ftn); 
  return bnds; 
}


var layerTree = [];

function pushLayer(layer, isGroup){
        layerTree.push(layer);
        return;
        var lastItem =  layerTree[layerTree.length-1];
        if( Object.prototype.toString.call( lastItem ) === '[object Array]' ) {
                lastItem.push(layer);
            }else{
                
                }
    }

    function traverseLayers (doc, ftn, reverse) { //from Xbytor
      function _traverse(doc, layers, ftn, reverse) {
        var ok = true;
        for (var i = 1; i <= layers.length && ok != false; i++) {
          var index = (reverse == true) ? layers.length-i : i - 1;
          var layer = layers[index];
          if (layer.typename == "LayerSet") {
              pushLayer(layer, true);
             ok = ftn(doc, layer);
            ok = _traverse(doc, layer.layers, ftn, reverse);
          } else {
              pushLayer(layer, false);
            ok = ftn(doc, layer);
          };
        };
        return ok;
      };
      return _traverse(doc, doc.layers, ftn, reverse);
    };

function processLayer2(doc, layer){
    if (layer.typename == "LayerSet") {
        $.writeln(layer.name + " LayerSet");
    }else if(!layer.isBackgroundLayer ){
            $.writeln(layer.name + " Layer");
                //app.activeDocument.activeLayer = layer;
                getVectorMaskBounds_cornerPointsOnly(false,  doc, layer );
     }else{
                
         }
     return false;   
}


    //call the traverselayers function with processLayer function.
    // set reverse to true if deleting layer(s)/layerset(s)
    var doc = app.activeDocument;
    //traverseLayers(doc, processLayer2);
listProps(getVectorMaskBounds_cornerPointsOnly(doc, doc.activeLayer ));

function getVectorMaskDesc(doc, layer){
var ref = new ActionReference();

    ref.putEnumerated( cTID('Path'), cTID('Ordn'), sTID('vectorMask'));
    try {
      return app.executeActionGet(ref);

    } catch (e) {
      return undefined;
    }    
    }
alert(getVectorMaskDesc(doc, doc.activeLayer));



