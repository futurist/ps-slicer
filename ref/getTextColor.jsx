    //Gets only the first style in the ActionList
    var firstTextStyle = styleList.getObjectValue(0);
    // Get an AM descriptor for the actual Styling properites
    var firstTextStyleDesc = firstTextStyle.getObjectValue(stringIDToTypeID('textStyle'));
    // Finally...Get the font name and Size for the textStyle Desc
    textProperties.fontName = firstTextStyleDesc.getString(stringIDToTypeID('fontName'));
    textProperties.fontSize = firstTextStyleDesc.getUnitDoubleValue(stringIDToTypeID('size'));
    colorDesc = firstTextStyleDesc.getObjectValue(stringIDToTypeID('color'));
     $.writeln(colorDesc.getUnitDoubleValue (stringIDToTypeID('red')));
     $.writeln(colorDesc.getUnitDoubleValue (stringIDToTypeID('grain')));
     $.writeln(colorDesc.getUnitDoubleValue (stringIDToTypeID('red')));

