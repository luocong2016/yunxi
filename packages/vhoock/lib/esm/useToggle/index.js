import { ref } from 'vue';

function useToggle(defaultValue) {
    if (defaultValue === void 0) { defaultValue = false; }
    var state = ref(defaultValue);
    var toggle = function (value) {
        if (value === void 0) { value = !state.value; }
        state.value = value;
    };
    return [state, toggle];
}

export { useToggle };
