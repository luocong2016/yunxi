import { ref } from 'vue';
import { inBrowser } from '../utils.js';
import { useEventListener } from '../useEventListener/index.js';
import '../onMountedOrActivated/index.js';

function usePageVisibility() {
    var visibility = ref('visible');
    var setVisibility = function () {
        if (inBrowser) {
            visibility.value = document.hidden ? 'hidden' : 'visible';
        }
    };
    setVisibility();
    useEventListener('visibilitychange', setVisibility);
    return visibility;
}

export { usePageVisibility };
