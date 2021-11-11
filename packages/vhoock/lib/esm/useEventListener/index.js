import { onUnmounted, onDeactivated, isRef, watch, unref } from 'vue';
import { onMountedOrActivated } from '../onMountedOrActivated/index.js';
import { inBrowser } from '../utils.js';

function useEventListener(type, listener, options) {
    if (options === void 0) { options = {}; }
    if (!inBrowser) {
        return;
    }
    var _a = options.target, target = _a === void 0 ? window : _a, _b = options.passive, passive = _b === void 0 ? false : _b, _c = options.capture, capture = _c === void 0 ? false : _c;
    var attached;
    var add = function (target) {
        var element = unref(target);
        if (element && !attached) {
            element.addEventListener(type, listener, { capture: capture, passive: passive });
            attached = true;
        }
    };
    var remove = function (target) {
        var element = unref(target);
        if (element && attached) {
            element.removeEventListener(type, listener, capture);
            attached = false;
        }
    };
    onUnmounted(function () { return remove(target); });
    onDeactivated(function () { return remove(target); });
    onMountedOrActivated(function () { return add(target); });
    if (isRef(target)) {
        watch(target, function (val, oldVal) {
            remove(oldVal);
            add(val);
        });
    }
}

export { useEventListener };
