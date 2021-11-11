'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var utils = require('../utils.js');
var useEventListener_index = require('../useEventListener/index.js');
require('../onMountedOrActivated/index.js');

var width;
var height;
function useWindowSize() {
    if (!width) {
        width = vue.ref(0);
        height = vue.ref(0);
        var update = function () {
            if (utils.inBrowser) {
                width.value = window.innerWidth;
                height.value = window.innerHeight;
            }
        };
        update();
        useEventListener_index.useEventListener('resize', update);
        useEventListener_index.useEventListener('orientationchange', update);
    }
    return { width: width, height: height };
}

exports.useWindowSize = useWindowSize;
