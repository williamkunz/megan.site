webpackHotUpdate(5,{

/***/ "./pages/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");

var PageSection =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["a" /* default */])('main', {
  target: "esw7gm00"
})("background-color:", function (_ref) {
  var theme = _ref.theme;
  return theme.teal;
}, ";display:block;left:0;margin:auto;min-height:100vw;overflow:hidden;padding-bottom:15rem;position:absolute;right:0;top:0;transition:background .66s ease-in-out,transform .66s ease-in-out;&.center{background-color:", function (_ref2) {
  var theme = _ref2.theme;
  return theme.white;
}, ";max-width:70vw;position:static;transform:translateX(0);}&.previous{transform:translateX(calc( -1 * 100vw + ( ( 100vw - 70vw ) / 2 ) + 8rem ));}&.next{transform:translateX(calc( 100vw - ( ( 100vw - 70vw ) / 2 ) - 8rem ));}");
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/style")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.0752bf92d0644188d538.hot-update.js.map