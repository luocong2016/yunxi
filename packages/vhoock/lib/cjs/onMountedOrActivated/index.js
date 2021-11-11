'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function onMountedOrActivated(hook) {
    var mounted;
    vue.onMounted(function () {
        hook();
        vue.nextTick(function () {
            mounted = true;
        });
    });
    vue.onActivated(function () {
        if (mounted) {
            hook();
        }
    });
}

exports.onMountedOrActivated = onMountedOrActivated;
