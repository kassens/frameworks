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

	chrome.pageAction.setIcon({
		tabId: tabId,
		imageData: createIcon(frameworks[0].abbr)
	});

	var popup = 'popup.html#' + encodeURIComponent(JSON.stringify(frameworks))
	chrome.pageAction.setPopup({tabId: tabId, popup: popup})

	chrome.pageAction.show(tabId);
});

function createIcon(text) {
  var ctx = document.createElement('canvas').getContext('2d');

  var w = 19;
  var h = 19;
  var rad = 3; // border radius
  var lw = 1; // line width
  var hlw = lw/2; // half line width

  var t = hlw + 1;
  var r = w - hlw;
  var b = h - hlw - 1;
  var l = hlw;

  // box path
  ctx.beginPath();
  ctx.moveTo(l, (t + b) / 2);
  ctx.arcTo(l, t, r, t, rad);
  ctx.arcTo(r, t, r, b, rad);
  ctx.arcTo(r, b, l, b, rad);
  ctx.arcTo(l, b, l, t, rad);
  ctx.closePath();

  // box background
  var grad = ctx.createLinearGradient(0, t, 0, b);
  grad.addColorStop(0, '#6ee');
  grad.addColorStop(0.1, '#5BC0DE');
  grad.addColorStop(1, '#2F96B4');
  ctx.fillStyle = grad;
  ctx.fill();

  // box border
  ctx.lineWidth = lw;
  ctx.strokeStyle = '#2F96B4';
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // text shadow
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillText(text, w/2, h/2 - 1, w - 2);

  // text
  ctx.fillStyle = '#fff';
  ctx.fillText(text, w/2, h/2, w - 2);

  return ctx.getImageData(0, 0, w, h);
}
