/*
This script is a part of "Script Arsenal" kit
by Andrei Doubrovski
www.Script-Arsenal.com
*/ 
///////////////////////////////////////////////////
var thisScript=File($.fileName);
var scriptsFolder=new Folder(thisScript.parent);
var requiredFolder=new Folder(scriptsFolder.parent+"/Required");
new File(requiredFolder+"/scriptArsenalOnline.html").execute();