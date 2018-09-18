webpackHotUpdate(5,{

/***/ "./layouts/carousel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_global__ = __webpack_require__("./styles/global.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style__ = __webpack_require__("./layouts/style.js");
var _jsxFileName = "/Users/williamkunz/Projects/megans.site/layouts/carousel.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


 // styles 




if (typeof window !== 'undefined') {
  Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["b" /* hydrate */])(window.__NEXT_DATA__.ids);
}

Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["c" /* injectGlobal */])(__WEBPACK_IMPORTED_MODULE_2__styles_global__["a" /* default */]);

var CarouselLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselLayout, _Component);

  function CarouselLayout() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, CarouselLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = CarouselLayout.__proto__ || Object.getPrototypeOf(CarouselLayout)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "render", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var children = _this.props.children;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__style__["b" /* Header */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__style__["a" /* H1Title */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, "Logo"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__style__["d" /* Nav */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__style__["e" /* NavItem */], {
          className: "previous",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, "link 1"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__style__["e" /* NavItem */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, "link 2"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__style__["e" /* NavItem */], {
          className: "next",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, "link 3"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__style__["c" /* MainWrapper */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, children));
      }
    }), _temp));
  }

  return CarouselLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CarouselLayout);

/***/ }),

/***/ "./layouts/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return H1Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MainWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NavItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");

var Header =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["a" /* default */])('header', {
  target: "e1nffyt20"
})("left:0;position:absolute;right:0;");
var H1Title =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["a" /* default */])('h1', {
  target: "e1nffyt21"
})("left:0;margin:0 auto;position:absolute;right:0;top:10rem;width:6rem;z-index:1;");
var MainWrapper =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["a" /* default */])('main', {
  target: "e1nffyt22"
})("position:relative;overflow:hidden;width:100%;z-index:0;");
var Nav =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["a" /* default */])('nav', {
  target: "e1nffyt23"
})("left:0;margin:auto;position:absolute;right:0;text-align:center;top:24rem;width:80%;z-index:1;");
var NavItem =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["a" /* default */])('a', {
  target: "e1nffyt24"
})("left:0;margin:auto;position:absolute;right:0;text-align:center;transform:translateX(0);width:18.5rem;&.previous{transform:translateX(-18.5rem);}&.next{transform:translateX(18.5rem);}");

/***/ })

})
//# sourceMappingURL=5.4c49cb1a6a61cfdb3111.hot-update.js.map