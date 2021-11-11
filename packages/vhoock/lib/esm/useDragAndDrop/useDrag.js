var useDrag = function (config) {
    var getProps = function (data) {
        return {
            draggable: 'true',
            key: config && config.getPropsWithKey === false ? undefined : JSON.stringify(data),
            onDragstart: function (e) {
                var _a, _b;
                (_a = config === null || config === void 0 ? void 0 : config.onDragstart) === null || _a === void 0 ? void 0 : _a.call(config, data, e);
                (_b = e.dataTransfer) === null || _b === void 0 ? void 0 : _b.setData('custom', JSON.stringify(data));
            },
            onDragend: function (e) {
                var _a;
                (_a = config === null || config === void 0 ? void 0 : config.onDragend) === null || _a === void 0 ? void 0 : _a.call(config, data, e);
            },
        };
    };
    return getProps;
};

export { useDrag };
