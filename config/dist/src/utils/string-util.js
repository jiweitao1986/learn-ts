System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var StringUtil;
    return {
        setters: [],
        execute: function () {
            StringUtil = (function () {
                function StringUtil() {
                }
                StringUtil.prototype.toUpper = function (lowerStr) {
                    var upperStr = lowerStr + ' to upper...';
                    console.log(upperStr);
                    return upperStr;
                };
                StringUtil.prototype.getSymbol = function (key) {
                };
                return StringUtil;
            }());
            exports_1("StringUtil", StringUtil);
        }
    };
});
//# sourceMappingURL=string-util.js.map