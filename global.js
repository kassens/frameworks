var icons = {
	'MooTools Core': 'mootools.png',
	'MooTools More': 'mootools-more.png',
	// 'Base2',
	'Dojo': 'dojo.png',
	'Ext JS': 'extjs.png',
	'jQuery': 'jquery.png',
	'jQuery UI': 'jqueryui.png',
	'MochiKit': 'mochikit.png',
	'Prototype': 'prototype.png',
	'Script.aculo.us': 'scriptaculous.png',
	'Yahoo UI': 'yui.png',
	'Raphaël': 'raphael.png',
	'Scripty2': 'scriptaculous.png'
};

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
