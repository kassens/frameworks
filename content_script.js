var script = document.createElement('script');
script.addEventListener('load', function(){
	var dataElement = document.getElementById('frameworks-data');
	var data = JSON.parse(dataElement.innerText);
	dataElement.parentNode.removeChild(dataElement);
	chrome.extension.sendRequest(data);
}, true);
script.src = chrome.extension.getURL('inject.js');
if (document.head) document.head.appendChild(script);
