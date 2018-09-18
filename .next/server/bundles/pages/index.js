module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./layouts/carousel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_emotion__);
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
  Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["hydrate"])(window.__NEXT_DATA__.ids);
}

Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["injectGlobal"])(__WEBPACK_IMPORTED_MODULE_2__styles_global__["a" /* default */]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);

var Header =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('header', {
  target: "e1nffyt20"
})("left:0;position:absolute;right:0;");
var H1Title =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('h1', {
  target: "e1nffyt21"
})("left:0;margin:0 auto;position:absolute;right:0;top:10rem;width:6rem;z-index:1;");
var MainWrapper =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('main', {
  target: "e1nffyt22"
})("position:relative;overflow:hidden;width:100%;z-index:0;");
var Nav =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('nav', {
  target: "e1nffyt23"
})("left:0;margin:auto;position:absolute;right:0;text-align:center;top:24rem;width:80%;z-index:1;");
var NavItem =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('a', {
  target: "e1nffyt24"
})("left:0;margin:auto;position:absolute;right:0;text-align:center;transform:translateX(0);width:18.5rem;&.previous{transform:translateX(-18.5rem);}&.next{transform:translateX(18.5rem);}");

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_carousel__ = __webpack_require__("./layouts/carousel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style__ = __webpack_require__("./pages/style.js");
var _jsxFileName = "/Users/williamkunz/Projects/megans.site/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // layouts 

 // styles 



var CarouselPage =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CarouselPage, _PureComponent);

  function CarouselPage() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, CarouselPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = CarouselPage.__proto__ || Object.getPrototypeOf(CarouselPage)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "render", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__layouts_carousel__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__style__["a" /* PageSection */], {
          className: "previous",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, "1"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__style__["a" /* PageSection */], {
          className: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }, "2"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__style__["a" /* PageSection */], {
          className: "next",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }, "3")));
      }
    }), _temp));
  }

  return CarouselPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (CarouselPage);

/***/ }),

/***/ "./pages/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);

var PageSection =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react_emotion___default()('main', {
  target: "esw7gm00"
})("background-color:", function (_ref) {
  var theme = _ref.theme;
  return theme.teal;
}, ";display:block;left:0;margin:auto;min-height:100vw;overflow:hidden;padding-bottom:15rem;position:absolute;right:0;top:0;transition:background .66s ease-in-out,transform .66s ease-in-out;&.center{background-color:", function (_ref2) {
  var theme = _ref2.theme;
  return theme.white;
}, ";max-width:70vw;position:static;transform:translateX(0);}&.previous{transform:translateX(calc( -1 * 100vw + ( ( 100vw - 70vw ) / 2 ) + 8rem ));}&.next{transform:translateX(calc( 100vw - ( ( 100vw - 70vw ) / 2 ) - 8rem ));}");

/***/ }),

/***/ "./styles/global.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* custom */\nhtml {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  font-size: 62.5%;\n}\n\nbody {\n  background-color: #fff;\n  color: #0f0f0f;\n  font-family: sans-serif;\n  font-size: 1.6rem;\n  font-weight: 300;\n  letter-spacing: 0.2px;\n  line-height: 1.5;\n  margin: 0;\n\toverflow: hidden;\n\tposition: relative;\n\twidth: 100%;\n}\n");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-emotion":
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map