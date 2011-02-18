// This script runs in the website context.
(function(){
	function join(array) {
		var str = '';
		for (var i = 0; i < array.length; i++) {
			if (i !== 0) str += ',';
			str += array[i];
		}
		return str;
	}

	var frameworks = {
		'ActiveJS':             {version: ['ActiveSupport']                                                        },
		'Base2':                {version: ['base2', 'version']                                                     },
		'Clientcide Libraries': {version: ['Clientcide', 'version'],              icon: 'clientcide-libraries.png' },
		'Crafty':               {version: ['Crafty', 'init'],                     icon: 'crafty.png'               },
		'DHTMLX':               {version: ['dhtmlx'],                             icon: 'dhtmlx.png'               },
		'Dojo':                 {version: ['dojo', 'version'],                    icon: 'dojo.png'                 },
		'Ext JS':               {version: ['Ext', 'version'],                     icon: 'ext-js.png'               },
		'Glow':                 {version: ['glow', 'VERSION'],                    icon: 'glow.png'                 },
		'JavaScriptMVC':        {version: ['steal', 'fn'],                        icon: 'javascriptmvc.png'        },
		'jQuery':               {version: ['jQuery', 'fn', 'jquery'],             icon: 'jquery.png'               },
		'jQuery UI':            {version: ['$', 'ui', 'version'],                 icon: 'jquery-ui.png'            },
		'Midori':               {version: ['midori', 'domReady'],                 icon: 'midori.png'               },
		'MochiKit':             {version: ['MochiKit', 'MochiKit', 'VERSION'],    icon: 'mochikit.png'             },
		'MooTools A.R.T.':      {version: ['ART', 'version']                                                       },
		'MooTools Core':        {version: ['MooTools', 'version'],                icon: 'mootools.png'             },
		'MooTools More':        {version: ['MooTools', 'More', 'version'],        icon: 'mootools.png'             },
		'Processing.js':        {version: ['Processing', 'version'],              icon: 'processing-js.png'        },
		'Prototype':            {version: ['Prototype', 'Version'],               icon: 'prototype.png'            },
		'Qooxdoo':              {version: ['qx', '$$libraries', 'qx', 'version'], icon: 'qooxdoo.png'              },
		'Raphaël':              {version: ['Raphael', 'version'],                 icon: 'raphael.png'              },
		'Rico':                 {version: ['Rico', 'Version'],                    icon: 'rico.png'                 },
		'RightJS':              {version: ['RightJS', 'version'],                 icon: 'rightjs.png'              },
		'Script.aculo.us':      {version: ['Scriptaculous', 'Version'],           icon: 'scriptaculous.png'        },
		'Scripty2':             {version: ['S2', 'Version']                                                        },
		'SproutCore':           {version: ['SC', 'isReady']                                                        },
		'Spry':                 {version: ['Spry', '$']                                                            },
		'YUI 2':                {version: ['YAHOO', 'VERSION'],                   icon: 'yui.png'                  },
		'YUI 3':                {version: ['YUI', 'version'],                     icon: 'yui.png'                  },
		'Zepto':                {version: ['Zepto']                                                                },
		'ZK':                   {version: ['zk', 'version'],                      icon: 'zk.png'                   }
	};

	var data = [];
	for (var name in frameworks) {
		if (frameworks.hasOwnProperty(name)) {
			var framework = frameworks[name];
			var version = window;
			for (var i = 0; i < framework.version.length; i++) {
				version = version && version[framework.version[i]];
			}
			if (version) {
				var info = '{"name":"' + name + '"';
				if (framework.icon) {
					info += ',"icon":"' + framework.icon + '"';
				}
				if (typeof version == 'string' && version != '%build%') {
					info += ',"version":"' + version + '"';
				}
				info += '}';
				data[data.length] = info;
			}
		}
	}
	var messageElement = document.createElement('div');
	messageElement.textContent = '[' + join(data) + ']';
	messageElement.id = 'frameworks-data';
	document.body.appendChild(messageElement);
})();
