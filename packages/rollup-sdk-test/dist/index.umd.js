(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MySDK = {}));
})(this, (function (exports) { 'use strict';

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

  Object.defineProperty(exports, '__esModule', { value: true });

}));
