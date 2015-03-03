var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
	include: [ 
        "*.siga.frba.utn.edu.ar"
    ],
	contentScriptFile: [
		data.url("js/jquery-1.11.2.min.js"),
        data.url("js/functions.js")
    ],
    //contentStyleFile: data.url("css/styles.css"),
    contentScriptOptions: {
    	dataUrl: data.url('')
  	}
 });