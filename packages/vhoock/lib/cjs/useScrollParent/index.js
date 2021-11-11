'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var utils = require('../utils.js');

var overflowScrollReg = /scroll|auto/i;
var defaultRoot = utils.inBrowser ? window : undefined;
function isElement(node) {
    var ELEMENT_NODE_TYPE = 1;
    return node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === ELEMENT_NODE_TYPE;
}
// https://github.com/youzan/vant/issues/3823
function getScrollParent(el, root) {
    if (root === void 0) { root = defaultRoot; }
    var node = el;
    while (node && node !== root && isElement(node)) {
        var overflowY = window.getComputedStyle(node).overflowY;
        if (overflowScrollReg.test(overflowY)) {
            return node;
        }
        node = node.parentNode;
    }
    return root;
}
function useScrollParent(el, root) {
    if (root === void 0) { root = defaultRoot; }
    var scrollParent = vue.ref();
    vue.onMounted(function () {
        if (el.value) {
            scrollParent.value = getScrollParent(el.value, root);
        }
    });
    return scrollParent;
}

exports.getScrollParent = getScrollParent;
exports.useScrollParent = useScrollParent;
