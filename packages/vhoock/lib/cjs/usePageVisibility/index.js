'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var utils = require('../utils.js');
var useEventListener_index = require('../useEventListener/index.js');
require('../onMountedOrActivated/index.js');

function usePageVisibility() {
    var visibility = vue.ref('visible');
    var setVisibility = function () {
        if (utils.inBrowser) {
            visibility.value = document.hidden ? 'hidden' : 'visible';
        }
    };
    setVisibility();
    useEventListener_index.useEventListener('visibilitychange', setVisibility);
    return visibility;
}

exports.usePageVisibility = usePageVisibility;
