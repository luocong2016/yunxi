'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function useParent(key) {
    var parent = vue.inject(key, null);
    if (parent) {
        var instance_1 = vue.getCurrentInstance();
        var link = parent.link, unlink_1 = parent.unlink, internalChildren_1 = parent.internalChildren;
        link(instance_1);
        vue.onUnmounted(function () { return unlink_1(instance_1); });
        var index = vue.computed(function () { return internalChildren_1.indexOf(instance_1); });
        return {
            parent: parent,
            index: index,
        };
    }
    return {
        parent: null,
        index: vue.ref(-1),
    };
}

exports.useParent = useParent;
