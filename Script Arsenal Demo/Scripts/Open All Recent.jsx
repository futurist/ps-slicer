/*
This script is a part of "Script Arsenal" kit
by Andrei Doubrovski
www.Script-Arsenal.com
*/ 
///////////////////////////////////////////////////////////
function openAllRecent () {
var recentArray = app.recentFiles;
//=======
for (i=0; i < app.preferences.recentFileListLength; i++ ) {
var recentFile = new File (recentArray[i])	
if ( recentFile.exists ) {
	try
	{
	app.open(recentFile);
	}
	catch (e)
	{
	} 
	}
}
};
////////////////////////////////////
openAllRecent ();
///////////////////////////////////