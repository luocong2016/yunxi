'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var utils = require('../utils.js');
var useEventListener_index = require('../useEventListener/index.js');
require('../onMountedOrActivated/index.js');

function useClickAway(target, listener, options) {
    if (options === void 0) { options = {}; }
    if (!utils.inBrowser) {
        return;
    }
    var _a = options.eventName, eventName = _a === void 0 ? 'click' : _a;
    var onClick = function (event) {
        var element = vue.unref(target);
        if (element && !element.contains(event.target)) {
            listener(event);
        }
    };
    useEventListener_index.useEventListener(eventName, onClick, { target: document });
}

exports.useClickAway = useClickAway;
