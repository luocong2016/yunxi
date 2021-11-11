'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.cancelRaf = cancelRaf;
exports.doubleRaf = doubleRaf;
exports.inBrowser = inBrowser;
exports.raf = raf;
exports.supportsPassive = supportsPassive;
