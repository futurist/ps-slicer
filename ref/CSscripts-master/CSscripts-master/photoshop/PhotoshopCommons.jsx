﻿function selectVisibleIn(layer){		var idsetd = charIDToTypeID( "setd" );	var desc2 = new ActionDescriptor();	var idnull = charIDToTypeID( "null" );	var ref1 = new ActionReference();	var idChnl = charIDToTypeID( "Chnl" );	var idfsel = charIDToTypeID( "fsel" );	ref1.putProperty( idChnl, idfsel );	desc2.putReference( idnull, ref1 );	var idT = charIDToTypeID( "T   " );	var ref2 = new ActionReference();	var idChnl = charIDToTypeID( "Chnl" );	var idChnl = charIDToTypeID( "Chnl" );	var idTrsp = charIDToTypeID( "Trsp" );	ref2.putEnumerated( idChnl, idChnl, idTrsp );	var idLyr = charIDToTypeID( "Lyr " );	ref2.putName( idLyr, layer.name );	desc2.putReference( idT, ref2 );		executeAction( idsetd, desc2, DialogModes.NO );    }function selectVisibleInVector(layer) {		var idsetd = charIDToTypeID( "setd" );	var desc29 = new ActionDescriptor();	var idnull = charIDToTypeID( "null" );	var ref30 = new ActionReference();	var idChnl = charIDToTypeID( "Chnl" );	var idfsel = charIDToTypeID( "fsel" );	ref30.putProperty( idChnl, idfsel );	desc29.putReference( idnull, ref30 );	var idT = charIDToTypeID( "T   " );	var ref31 = new ActionReference();	var idPath = charIDToTypeID( "Path" );	var idPath = charIDToTypeID( "Path" );	var idvectorMask = stringIDToTypeID( "vectorMask" );	ref31.putEnumerated( idPath, idPath, idvectorMask );	var idLyr = charIDToTypeID( "Lyr " );	ref31.putName( idLyr, layer.name );    desc29.putReference( idT, ref31 );	var idVrsn = charIDToTypeID( "Vrsn" );	desc29.putInteger( idVrsn, 1 );	var idvectorMaskParams = stringIDToTypeID( "vectorMaskParams" );	desc29.putBoolean( idvectorMaskParams, true );	executeAction( idsetd, desc29, DialogModes.NO );}