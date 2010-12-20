// This script runs in the website context.
// No prototype usage here, it's in the page context!
(function(){
	var frameworks = {
		'MooTools.version': 'MooTools Core',
		'MooTools.More.version': 'MooTools More',
		'base2.version': 'Base2',
		'dojo.version': 'Dojo',
		'Ext.version': 'Ext JS',
		'jQuery.fn.jquery': 'jQuery',
		'$.ui.version': 'jQuery UI',
		'MochiKit.MochiKit.VERSION': 'MochiKit',
		'Prototype.Version': 'Prototype',
		'Scriptaculous.Version': 'Script.aculo.us',
		'YAHOO.VERSION': 'YUI', // YUI 2
		'YUI.version': 'YUI', // YUI 3
		'Raphael.version': 'Raphaël',
		'S2.Version': 'Scripty2'
	};
	
	var data = [];
	for (ns in frameworks){
		if (!frameworks.hasOwnProperty(ns)) continue;
		var version = window;
		for (var i = 0, idents = ns.split('.'); i < idents.length; i++) version = version && version[idents[i]];
		if (version) data.push('{"name":"' + frameworks[ns] + '","version":"' + version + '"}');
	}
	
	var messageElement = document.createElement('div');
	messageElement.textContent = '[' + data.join(',') + ']';
	messageElement.id = 'frameworks-data';
	document.body.appendChild(messageElement);
})();
