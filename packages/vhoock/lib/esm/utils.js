var inBrowser = typeof window !== 'undefined';
var supportsPassive = true;
function raf(fn) {
    return inBrowser ? requestAnimationFrame(fn) : -1;
}
function cancelRaf(id) {
    if (inBrowser) {
        cancelAnimationFrame(id);
    }
}
function doubleRaf(fn) {
    raf(function () { return raf(fn); });
}

export { cancelRaf, doubleRaf, inBrowser, raf, supportsPassive };
