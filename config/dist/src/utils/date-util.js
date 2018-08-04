System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DateUtil;
    return {
        setters: [],
        execute: function () {
            DateUtil = (function () {
                function DateUtil() {
                }
                DateUtil.prototype.format = function () {
                    this.defaultFormat = 'YYYY';
                    console.log('formated...');
                };
                return DateUtil;
            }());
            exports_1("DateUtil", DateUtil);
        }
    };
});
//# sourceMappingURL=date-util.js.map