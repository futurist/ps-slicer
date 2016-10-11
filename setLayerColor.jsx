layerColour("Violet");  
   
function layerColour(colour) {  
    switch (colour.toLocaleLowerCase()){  
        case 'red': colour = 'Rd  '; break;  
        case 'orange' : colour = 'Orng'; break;  
        case 'yellow' : colour = 'Ylw '; break;  
        case 'yellow' : colour = 'Ylw '; break;  
        case 'green' : colour = 'Grn '; break;  
        case 'blue' : colour = 'Bl  '; break;  
        case 'violet' : colour = 'Vlt '; break;  
        case 'gray' : colour = 'Gry '; break;  
        case 'none' : colour = 'None'; break;  
        default : colour = 'None'; break;  
        }  
    var desc = new ActionDescriptor();  
        var ref = new ActionReference();  
        ref.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );  
    desc.putReference( charIDToTypeID('null'), ref );  
        var desc2 = new ActionDescriptor();  
        desc2.putEnumerated( charIDToTypeID('Clr '), charIDToTypeID('Clr '), charIDToTypeID(colour) );  
    desc.putObject( charIDToTypeID('T   '), charIDToTypeID('Lyr '), desc2 );  
    executeAction( charIDToTypeID('setd'), desc, DialogModes.NO );  
};  