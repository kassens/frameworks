// This script runs in the website context.
(function(){
	var fwList = {
		'ActiveJS': 'ActiveSupport',
		'Base2': 'base2.version',
		'Clientcide Libraries': 'Clientcide.version',
		'Crafty': 'Crafty.init',
		'DHTMLX': 'dhtmlx',
		'Dojo': 'dojo.version',
		'Ext JS': 'Ext.version',
		'Glow': 'glow.VERSION',
		'JavaScriptMVC': 'steal.fn',
		'jQuery': 'jQuery.fn.jquery',
		'jQuery UI': '$.ui.version',
		'Midori': 'midori.domReady',
		'MochiKit': 'MochiKit.MochiKit.VERSION',
		'MooTools A.R.T.': 'ART.version',
		'MooTools Core': 'MooTools.version',
		'MooTools More': 'MooTools.More.version',
		'Processing.js': 'Processing.version',
		'Prototype': 'Prototype.Version',
		'Qooxdoo': 'qx.$$libraries.qx.version',
		'Raphaël': 'Raphael.version',
		'Rico': 'Rico.Version',
		'RightJS': 'RightJS.version',
		'Script.aculo.us': 'Scriptaculous.Version',
		'Scripty2': 'S2.Version',
		'SproutCore': 'SC.isReady',
		'Spry': 'Spry.$',
		'YUI 2': 'YAHOO.VERSION',
		'YUI 3': 'YUI.version',
		'Zepto': 'Zepto',
		'ZK': 'zk.version'
	};

	var data = [];
	for (var fwNs in fwList) {
		if (fwList.hasOwnProperty(fwNs)) {
			var exists = window;
			for (var i = 0, idents = fwList[fwNs].split('.'); i < idents.length; i++) {
				exists = exists && exists[idents[i]];
			}
			if (exists) {
				if (typeof(exists) == 'string' && exists != '%build%') {
					data.push('{"name":"' + fwNs + '","version":"' + exists + '"}');
				} else {
					data.push('{"name":"' + fwNs + '","version":"0"}');
				}
			}
		}
	}

	var messageElement = document.createElement('div');
	messageElement.textContent = '[' + data.join(',') + ']';
	messageElement.id = 'frameworks-data';
	document.body.appendChild(messageElement);
})();
