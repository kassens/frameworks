chrome.extension.onRequest.addListener(function(frameworks, sender){
	if (frameworks.length == 0) return;
	if (!sender.tab.url.match(/^https?:\/\//)) return;

	var tabId = sender.tab.id;

	var title = frameworks.map(function(framework){
		if (framework.version) {
			return framework.name + ' (' + framework.version + ')';
		} else {
			return framework.name;
		}
	}).join('\n');
	chrome.pageAction.setTitle({tabId: tabId, title: title});

	var icon;
	for (var i = 0; i < frameworks.length; i++) {
		icon = frameworks[i].icon;
		if (icon) break;
	}
	icon = 'images/' + (icon || 'unknown.png');
	chrome.pageAction.setIcon({tabId: tabId, path: icon});

	var popup = 'popup.html#' + encodeURIComponent(JSON.stringify(frameworks))
	chrome.pageAction.setPopup({tabId: tabId, popup: popup})

	chrome.pageAction.show(tabId);
});
