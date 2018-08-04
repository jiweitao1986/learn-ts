System.register(["./utils/string-util"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var string_util_1, strUtil, dic;
    return {
        setters: [
            function (string_util_1_1) {
                string_util_1 = string_util_1_1;
            }
        ],
        execute: function () {
            strUtil = new string_util_1.StringUtil();
            strUtil.toUpper('hello');
            dic = {
                'first': 1,
                'second': '2nd'
            };
        }
    };
});
//# sourceMappingURL=index.js.map