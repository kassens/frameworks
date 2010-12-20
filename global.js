var icons = {
	//'Base2': '',
	'Clientcide Libraries': 'clientcide-libraries.png',
	'Dojo': 'dojo.png',
	'Ext JS': 'ext-js.png',
	'Glow': 'glow.png',
	'jQuery UI': 'jquery-ui.png',
	'jQuery': 'jquery.png',
	'MochiKit': 'mochikit.png',
	//'MooTools A.R.T.': '',
	'MooTools Core': 'mootools.png',
	'MooTools More': 'mootools.png',
	'Processing.js': 'processing-js.png',
	'Prototype': 'prototype.png',
	'Raphaël': 'raphael.png',
	'Rico': 'rico.png',
	'RightJS': 'rightjs.png',
	'Script.aculo.us': 'scriptaculous.png',
	//'Scripty2': '',
	'YUI': 'yui.png',
	'ZK': 'zk.png'
}

chrome.extension.onRequest.addListener(function(frameworks, sender){
	if (frameworks.length == 0) return;
	if (!sender.tab.url.match(/^https?:\/\//)) return;

	var tabId = sender.tab.id;

	var title = frameworks.map(function(framework){
		return framework.name + ' (' + framework.version + ')';
	}).join('\n');
	chrome.pageAction.setTitle({tabId: tabId, title: title});

	var icon = 'images/' + (icons[frameworks[0].name] || 'unknown.png');
	chrome.pageAction.setIcon({tabId: tabId, path: icon});

	var popup = 'popup.html#' + encodeURIComponent(JSON.stringify(frameworks))
	chrome.pageAction.setPopup({tabId: tabId, popup: popup})

	chrome.pageAction.show(tabId);
});
