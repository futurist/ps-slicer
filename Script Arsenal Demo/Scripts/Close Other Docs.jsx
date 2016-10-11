/*
This script is a part of "Script Arsenal" kit
by Andrei Doubrovski
www.Script-Arsenal.com
*/ 
///////////////////////////////////////////////////////////
function closeOtherDocs () {
if (app.documents.length>0){
// ===
var docRef = app.activeDocument;
var otherDocs = [];
//=======
for (i=0; i < app.documents.length; i++ ) {
if ( app.documents[i] != docRef ) {
otherDocs.push(app.documents[i]);
}
};
//=======
for (i=0; i < otherDocs.length; i++ ) {
otherDocs[i].close(SaveOptions.DONOTSAVECHANGES);
}
}
};
/////////////////////////////////////////////
closeOtherDocs ();
///////////////////////////////////////////