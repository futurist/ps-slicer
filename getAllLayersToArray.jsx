var theLayers = collectLayers(app.activeDocument.activeLayer, []);  
alert (theLayers.join("\n"));  
////// function collect all layers //////  
function collectLayers (theParent, allLayers) {  
          if (!allLayers) {var allLayers = new Array}   
          else {};  
          for (var m = theParent.layers.length - 1; m >= 0;m--) {  
                    var theLayer = theParent.layers[m];  
// apply the function to layersets;  
                    if (theLayer.typename == "ArtLayer") {  
                              allLayers.push(theLayer)  
                              }  
                    else {  
                              allLayers = (collectLayers(theLayer, allLayers))  
// this line includes the layer groups;  
                              allLayers.push(theLayer);  
                              }  
                    };  
          return allLayers  
          };  
      
      
      