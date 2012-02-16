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
		'ActiveJS':             { abbr: 'AJS',  version: ['ActiveSupport']                      },
		'Backbone.js':          { abbr: 'BB',   version: ['Backbone', 'VERSION'],               },
		'Base2':                { abbr: 'Base', version: ['base2', 'version']                   },
		'Clientcide Libraries': { abbr: 'Moo',  version: ['Clientcide', 'version'],             },
		'Crafty':               { abbr: 'Crf',  version: ['Crafty', 'init'],                    },
		'D3':                   { abbr: 'D3',   version: ['d3', 'version']                      },
		'DHTMLX':               { abbr: 'DHT',  version: ['dhtmlx'],                            },
		'Dojo':                 { abbr: 'Dojo', version: function() { return dojo.version.toString(); } },
		'Ember':                { abbr: 'Emb',  version: ['Ember', 'VERSION']                   },
		'Ext JS':               { abbr: 'Ext',  version: ['Ext', 'version'],                    },
		'Glow':                 { abbr: 'Glw',  version: ['glow', 'VERSION'],                   },
		'JavaScriptMVC':        { abbr: 'MVC',  version: ['steal', 'fn'],                       },
		'jQuery':               { abbr: 'jQ',   version: ['jQuery', 'fn', 'jquery'],            },
		'jQuery UI':            { abbr: 'jQUI', version: ['$', 'ui', 'version'],                },
		'Midori':               { abbr: 'Mid',  version: ['midori', 'domReady'],                },
		'MochiKit':             { abbr: 'MK',   version: ['MochiKit', 'MochiKit', 'VERSION'],   },
		'MooTools A.R.T.':      { abbr: 'Moo',  version: ['ART', 'version']                     },
		'MooTools Core':        { abbr: 'Moo',  version: ['MooTools', 'version'],               },
		'MooTools More':        { abbr: 'Moo',  version: ['MooTools', 'More', 'version'],       },
		'Processing.js':        { abbr: 'Prc',  version: ['Processing', 'version'],             },
		'Prototype':            { abbr: 'Pro',  version: ['Prototype', 'Version'],              },
		'Qooxdoo':              { abbr: 'Qxd',  version: ['qx', '$$libraries', 'qx', 'version'] },
		'Raphaël':              { abbr: 'Rël',  version: ['Raphael', 'version'],                },
		'Rico':                 { abbr: 'Ric',  version: ['Rico', 'Version'],                   },
		'RightJS':              { abbr: 'Rig',  version: ['RightJS', 'version'],                },
		'Sammy.js':             { abbr: 'Sam',  version: ['Sammy', 'VERSION'],                  },
		'Script.aculo.us':      { abbr: 'Scr',  version: ['Scriptaculous', 'Version'],          },
		'Scripty2':             { abbr: 'Sc2',  version: ['S2', 'Version']                      },
		'Snack':                { abbr: 'Snc',  version: ['snack', 'v']                         },
		'Spine':                { abbr: 'Spi',  version: ['Spine', 'version']                   },
		'SproutCore':           { abbr: 'SpC',  version: ['SC', 'isReady']                      },
		'Spry':                 { abbr: 'Spr',  version: ['Spry', '$']                          },
		'Underscore.js':        { abbr: '_',    version: ['_', 'VERSION'],                      },
		'YUI 2':                { abbr: 'YUI',  version: ['YAHOO', 'VERSION'],                  },
		'YUI 3':                { abbr: 'YUI',  version: ['YUI', 'version'],                    },
		'Zepto':                { abbr: 'Zept', version: ['Zepto']                              },
		'ZK':                   { abbr: 'ZK',   version: ['zk', 'version'],                     }
	};

	var data = [];
	for (var name in frameworks) {
		if (frameworks.hasOwnProperty(name)) {
			var framework = frameworks[name];
			var version = null;
			if (typeof framework.version == 'function') {
				try {
					version = framework.version();
				} catch (e) { }
			} else {
				version = window;
				for (var i = 0; i < framework.version.length; i++) {
					version = version && version[framework.version[i]];
				}
			}
			if (version) {
				var info = '{"name":"' + name + '"';
				info += ',"abbr":"' + framework.abbr + '"';
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
