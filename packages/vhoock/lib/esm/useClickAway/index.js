import { unref } from 'vue';
import { inBrowser } from '../utils.js';
import { useEventListener } from '../useEventListener/index.js';
import '../onMountedOrActivated/index.js';

function useClickAway(target, listener, options) {
    if (options === void 0) { options = {}; }
    if (!inBrowser) {
        return;
    }
    var _a = options.eventName, eventName = _a === void 0 ? 'click' : _a;
    var onClick = function (event) {
        var element = unref(target);
        if (element && !element.contains(event.target)) {
            listener(event);
        }
    };
    useEventListener(eventName, onClick, { target: document });
}

export { useClickAway };
