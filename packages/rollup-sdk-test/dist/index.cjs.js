'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MySDK = /** @class */ (function () {
    function MySDK(name) {
        if (name === void 0) { name = "Default User"; }
        this.name = name;
    }
    MySDK.prototype.greet = function () {
        return "Hello, ".concat(this.name, "!");
    };
    MySDK.prototype.calculateSum = function (a, b) {
        return a + b;
    };
    return MySDK;
}());
var index = new MySDK();

exports.MySDK = MySDK;
exports.default = index;
