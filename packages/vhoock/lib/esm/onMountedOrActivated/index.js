import { onMounted, nextTick, onActivated } from 'vue';

function onMountedOrActivated(hook) {
    var mounted;
    onMounted(function () {
        hook();
        nextTick(function () {
            mounted = true;
        });
    });
    onActivated(function () {
        if (mounted) {
            hook();
        }
    });
}

export { onMountedOrActivated };
