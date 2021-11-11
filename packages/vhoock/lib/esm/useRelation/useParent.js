import { inject, getCurrentInstance, onUnmounted, computed, ref } from 'vue';

function useParent(key) {
    var parent = inject(key, null);
    if (parent) {
        var instance_1 = getCurrentInstance();
        var link = parent.link, unlink_1 = parent.unlink, internalChildren_1 = parent.internalChildren;
        link(instance_1);
        onUnmounted(function () { return unlink_1(instance_1); });
        var index = computed(function () { return internalChildren_1.indexOf(instance_1); });
        return {
            parent: parent,
            index: index,
        };
    }
    return {
        parent: null,
        index: ref(-1),
    };
}

export { useParent };
