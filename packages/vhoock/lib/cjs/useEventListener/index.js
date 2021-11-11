'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var onMountedOrActivated_index = require('../onMountedOrActivated/index.js');
var utils = require('../utils.js');

function useEventListener(type, listener, options) {
    if (options === void 0) { options = {}; }
    if (!utils.inBrowser) {
        return;
    }
    var _a = options.target, target = _a === void 0 ? window : _a, _b = options.passive, passive = _b === void 0 ? false : _b, _c = options.capture, capture = _c === void 0 ? false : _c;
    var attached;
    var add = function (target) {
        var element = vue.unref(target);
        if (element && !attached) {
            element.addEventListener(type, listener, { capture: capture, passive: passive });
            attached = true;
        }
    };
    var remove = function (target) {
        var element = vue.unref(target);
        if (element && attached) {
            element.removeEventListener(type, listener, capture);
            attached = false;
        }
    };
    vue.onUnmounted(function () { return remove(target); });
    vue.onDeactivated(function () { return remove(target); });
    onMountedOrActivated_index.onMountedOrActivated(function () { return add(target); });
    if (vue.isRef(target)) {
        vue.watch(target, function (val, oldVal) {
            remove(oldVal);
            add(val);
        });
    }
}

exports.useEventListener = useEventListener;
