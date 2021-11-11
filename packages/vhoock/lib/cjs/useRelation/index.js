'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useRelation_useParent = require('./useParent.js');
var useRelation_useChildren = require('./useChildren.js');
require('vue');



exports.useParent = useRelation_useParent.useParent;
exports.flattenVNodes = useRelation_useChildren.flattenVNodes;
exports.sortChildren = useRelation_useChildren.sortChildren;
exports.useChildren = useRelation_useChildren.useChildren;
