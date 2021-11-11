'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function flattenVNodes(children) {
    var result = [];
    var traverse = function (children) {
        if (Array.isArray(children)) {
            children.forEach(function (child) {
                var _a;
                if (vue.isVNode(child)) {
                    result.push(child);
                    if ((_a = child.component) === null || _a === void 0 ? void 0 : _a.subTree) {
                        traverse(child.component.subTree.children);
                    }
                    if (child.children) {
                        traverse(child.children);
                    }
                }
            });
        }
    };
    traverse(children);
    return result;
}
// sort children instances by vnodes order
function sortChildren(parent, publicChildren, internalChildren) {
    var vnodes = flattenVNodes(parent.subTree.children);
    internalChildren.sort(function (a, b) { return vnodes.indexOf(a.vnode) - vnodes.indexOf(b.vnode); });
    var orderedPublicChildren = internalChildren.map(function (item) { return item.proxy; });
    publicChildren.sort(function (a, b) {
        var indexA = orderedPublicChildren.indexOf(a);
        var indexB = orderedPublicChildren.indexOf(b);
        return indexA - indexB;
    });
}
function useChildren(key) {
    var publicChildren = vue.reactive([]);
    var internalChildren = vue.reactive([]);
    var parent = vue.getCurrentInstance();
    var linkChildren = function (value) {
        var link = function (child) {
            if (child.proxy) {
                internalChildren.push(child);
                publicChildren.push(child.proxy);
                sortChildren(parent, publicChildren, internalChildren);
            }
        };
        var unlink = function (child) {
            var index = internalChildren.indexOf(child);
            publicChildren.splice(index, 1);
            internalChildren.splice(index, 1);
        };
        vue.provide(key, Object.assign({
            link: link,
            unlink: unlink,
            children: publicChildren,
            internalChildren: internalChildren,
        }, value));
    };
    return {
        children: publicChildren,
        linkChildren: linkChildren,
    };
}

exports.flattenVNodes = flattenVNodes;
exports.sortChildren = sortChildren;
exports.useChildren = useChildren;
