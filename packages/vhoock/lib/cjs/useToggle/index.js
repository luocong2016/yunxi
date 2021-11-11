'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function useToggle(defaultValue) {
    if (defaultValue === void 0) { defaultValue = false; }
    var state = vue.ref(defaultValue);
    var toggle = function (value) {
        if (value === void 0) { value = !state.value; }
        state.value = value;
    };
    return [state, toggle];
}

exports.useToggle = useToggle;
