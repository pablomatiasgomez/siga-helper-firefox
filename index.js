var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
var data = self.data;

pageMod.PageMod({
	include: [ 
		"*.siga.frba.utn.edu.ar"
	],
	contentScriptFile: [
		data.url("js/jquery-3.1.0.min.js"),
		data.url("js/Utils.js"),
		data.url("js/HorariosPage.js"),
		data.url("js/ActasDeFinalesPage.js"),
		data.url("js/PreInscripcionPopUpPage.js"),
		data.url("js/PreInscripcionPage.js"),
		data.url("js/functions.js")
	],
	contentStyleFile: data.url("css/styles.css"),
	contentScriptOptions: {
		version: self.version
	}
 });