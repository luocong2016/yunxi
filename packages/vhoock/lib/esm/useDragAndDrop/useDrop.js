import { ref, reactive, computed } from 'vue';

var useDrop = function (opts) {
    if (opts === void 0) { opts = {}; }
    var isHovering = ref(false);
    var options = reactive(opts);
    var callback = function (dataTransfer, e) {
        var uri = dataTransfer.getData('text/uri-list');
        var dom = dataTransfer.getData('custom');
        if (dom && options.onDom) {
            var data = dom;
            try {
                data = JSON.parse(dom);
            }
            catch (e) {
                data = dom;
            }
            options.onDom(data, e);
            return;
        }
        if (uri && options.onUri) {
            options.onUri(uri, e);
            return;
        }
        if (dataTransfer.files && dataTransfer.files.length && options.onFiles) {
            options.onFiles(Array.from(dataTransfer.files), e);
            return;
        }
        if (dataTransfer.items && dataTransfer.items.length && options.onText) {
            dataTransfer.items[0].getAsString(function (text) {
                var _a;
                (_a = options === null || options === void 0 ? void 0 : options.onText) === null || _a === void 0 ? void 0 : _a.call(options, text, e);
            });
        }
    };
    var events = computed(function () {
        return {
            onDragover: function (e) {
                e.preventDefault();
            },
            onDragenter: function (e) {
                e.preventDefault();
                isHovering.value = true;
            },
            onDragleave: function (e) {
                isHovering.value = false;
            },
            onDrop: function (e) {
                e.preventDefault();
                isHovering.value = false;
                callback(e.dataTransfer, e);
            },
            onPaste: function (e) {
                callback(e.clipboardData, e);
            },
        };
    });
    return { events: events, isHovering: isHovering };
};

export { useDrop };
