function userSliceFromActiveLayer() {
       var desc = new ActionDescriptor();
            var ref = new ActionReference();
            ref.putClass( stringIDToTypeID('slice') );
        desc.putReference( charIDToTypeID('null'), ref );
            var sliceDesc = new ActionDescriptor();
            sliceDesc.putEnumerated( charIDToTypeID('Type'), stringIDToTypeID('sliceType'), charIDToTypeID('Lyr ') );
                var layerRef = new ActionReference();
                layerRef.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
            sliceDesc.putReference( charIDToTypeID('Lyr '), layerRef );
        desc.putObject( charIDToTypeID('Usng'), stringIDToTypeID('slice'), sliceDesc );
        executeAction( charIDToTypeID('Mk  '), desc, DialogModes.NO );
    };
    function nameActiveSlice( name ) {
       var desc = new ActionDescriptor();
            var ref = new ActionReference();
            ref.putEnumerated( stringIDToTypeID('slice'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
        desc.putReference( charIDToTypeID('null'), ref );
            var sliceDesc = new ActionDescriptor();
            sliceDesc.putString( charIDToTypeID('Nm  '), name );
            sliceDesc.putEnumerated( stringIDToTypeID('sliceImageType'), stringIDToTypeID('sliceImageType'), charIDToTypeID('Img ') );
        desc.putObject( charIDToTypeID('T   '), stringIDToTypeID('slice'), sliceDesc );
        executeAction( charIDToTypeID('setd'), desc, DialogModes.NO );
    };
    function traverseLayers (doc, ftn, reverse) { //from Xbytor
      function _traverse(doc, layers, ftn, reverse) {
        var ok = true;
        for (var i = 1; i <= layers.length && ok != false; i++) {
          var index = (reverse == true) ? layers.length-i : i - 1;
          var layer = layers[index];
          if (layer.typename == "LayerSet") {
             ok = ftn(doc, layer);
            ok = _traverse(doc, layer.layers, ftn, reverse);
          } else {
            ok = ftn(doc, layer);
          };
        };
        return ok;
      };
      return _traverse(doc, doc.layers, ftn, reverse);
    };
    function processLayer(doc,layer, reverse) {
       var ok = true;
       if (layer.typename == "LayerSet") {
          // just have empty if statement if you don't
          // want to do anything to the layersets
          }
      else if(!layer.isBackgroundLayer ){
            //omit if statement if you want to process all artlayers
          if(layer.parent == doc && layer.kind != LayerKind.TEXT ){// top level artLayers and not text layers
             app.activeDocument.activeLayer = layer;
             userSliceFromActiveLayer();
             nameActiveSlice( layer.name );
          }else{
             if(layer == layer.parent.artLayers[layer.parent.artLayers.length-1]){
            app.activeDocument.activeLayer = layer;
            userSliceFromActiveLayer();
            nameActiveSlice( layer.parent.name );
         }
          }
          return true;   
       };
       //code above should return true/false to stop on error
    };
    //call the traverselayers function with processLayer function.
    // set reverse to true if deleting layer(s)/layerset(s)
    var doc = app.activeDocument;
    traverseLayers(doc, processLayer);
    if(doc.layers[doc.layers.length-1])doc.layers[doc.layers.length-1].visible = false;
    