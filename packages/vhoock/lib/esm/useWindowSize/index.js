import { ref } from 'vue';
import { inBrowser } from '../utils.js';
import { useEventListener } from '../useEventListener/index.js';
import '../onMountedOrActivated/index.js';

var width;
var height;
function useWindowSize() {
    if (!width) {
        width = ref(0);
        height = ref(0);
        var update = function () {
            if (inBrowser) {
                width.value = window.innerWidth;
                height.value = window.innerHeight;
            }
        };
        update();
        useEventListener('resize', update);
        useEventListener('orientationchange', update);
    }
    return { width: width, height: height };
}

export { useWindowSize };
