// This script runs in the website context.
// No prototype usage here, it's in the page context!
(function(){
	var frameworks = {
		'$.ui.version': 'jQuery UI',
		'ART.version': 'MooTools A.R.T.',
		'base2.version': 'Base2',
		'Clientcide.version': 'Clientcide Libraries',
		'dojo.version': 'Dojo',
		'Ext.version': 'Ext JS',
		'glow.VERSION': 'Glow',
		'jQuery.fn.jquery': 'jQuery',
		'MochiKit.MochiKit.VERSION': 'MochiKit',
		'MooTools.More.version': 'MooTools More',
		'MooTools.version': 'MooTools Core',
		'Processing.version': 'Processing.js',
		'Prototype.Version': 'Prototype',
		'Raphael.version': 'Raphaël',
		'Rico.Version': 'Rico',
		'RightJS.version': 'RightJS',
		'S2.Version': 'Scripty2',
		'Scriptaculous.Version': 'Script.aculo.us',
		'YAHOO.VERSION': 'YUI', // YUI 2
		'YUI.version': 'YUI', // YUI 3
		'zk.version': 'ZK'
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
