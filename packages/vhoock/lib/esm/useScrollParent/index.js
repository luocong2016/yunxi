import { ref, onMounted } from 'vue';
import { inBrowser } from '../utils.js';

var overflowScrollReg = /scroll|auto/i;
var defaultRoot = inBrowser ? window : undefined;
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
    var scrollParent = ref();
    onMounted(function () {
        if (el.value) {
            scrollParent.value = getScrollParent(el.value, root);
        }
    });
    return scrollParent;
}

export { getScrollParent, useScrollParent };
