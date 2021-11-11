import { unref } from 'vue';

function isWindow(val) {
    return val === window;
}
function makeDOMRect(width, height) {
    return {
        top: 0,
        left: 0,
        right: width,
        bottom: height,
        width: width,
        height: height,
    };
}
var useRect = function (elementOrRef) {
    var element = unref(elementOrRef);
    if (isWindow(element)) {
        var width = element.innerWidth;
        var heigth = element.innerHeight;
        return makeDOMRect(width, heigth);
    }
    if (element && element.getBoundingClientRect) {
        return element.getBoundingClientRect();
    }
    return makeDOMRect(0, 0);
};

export { useRect };
