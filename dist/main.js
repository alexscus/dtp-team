/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./babel.js":
/*!******************!*\
  !*** ./babel.js ***!
  \******************/
/***/ (function() {

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.resolve('async is working');

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _start.apply(this, arguments);
}

var Util = /*#__PURE__*/_createClass(function Util() {
  _classCallCheck(this, Util);
});

_defineProperty(Util, "id", Date.now());

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/main.js */ "./main.js");
/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/babel */ "./babel.js");
/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_svg_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/svg.css */ "./styles/svg.css");





/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


jquery__WEBPACK_IMPORTED_MODULE_0__(document).ready(function () {
  var header = document.querySelector('header');
  var headerBot = document.querySelector('.header__bot');
  window.addEventListener('scroll', function () {
    var scrollTop = 130;
    var scrollHeadNav = 700;
    var scrollPos = window.scrollY;

    if (scrollPos > scrollTop) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }

    if (scrollPos > scrollHeadNav) {
      headerBot.classList.add('act');
    } else {
      headerBot.classList.remove('act');
    }
  });
  var arrowLeft = document.querySelector('.arrow__left');
  var arrowRight = document.querySelector('.arrow__right');
  var fileSlide = document.querySelector('.files__slide');
  arrowLeft.addEventListener('click', function () {
    fileSlide.classList.remove('act');
  });
  arrowRight.addEventListener('click', function () {
    fileSlide.classList.add('act');
  });
  var headerBurger = document.querySelector('.header__burger');
  var navMobile = document.querySelector('.nav__mobile');
  var closeNav = document.querySelector('.close__nav');
  var mBody = document.querySelector('body');
  headerBurger.addEventListener('click', function () {
    navMobile.classList.add('active');
    mBody.classList.add('ov');
  });
  closeNav.addEventListener('click', function () {
    navMobile.classList.remove('active');
    mBody.classList.remove('ov');
  });
  var scrollBlock = document.querySelectorAll('.header__bot .menu span');

  var _iterator = _createForOfIteratorHelper(scrollBlock),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var navItem = _step.value;
      navItem.addEventListener('click', function () {
        var el = document.getElementById('files__anchor');
        el.scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  jquery__WEBPACK_IMPORTED_MODULE_0__(function () {
    var $itemsHead = jquery__WEBPACK_IMPORTED_MODULE_0__('.nav-tab-head');
    $itemsHead.click(function () {
      $itemsHead.removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0__('.files__header li').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass('active');
      var nm = jquery__WEBPACK_IMPORTED_MODULE_0__(this).parent().attr('class').slice(-1);
      jquery__WEBPACK_IMPORTED_MODULE_0__('.files__header li span.tb-0' + nm).parent().addClass('active');
      var index = $itemsHead.index(jquery__WEBPACK_IMPORTED_MODULE_0__(this));
      jquery__WEBPACK_IMPORTED_MODULE_0__('.files__body .tab-pane').removeClass('active').eq(index).addClass('active');
      return false;
    }).eq(0).click();
    var $items = jquery__WEBPACK_IMPORTED_MODULE_0__('.nav-tab');
    $items.click(function () {
      $items.removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0__('.menu .menu__link').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass('active');
      var nm = jquery__WEBPACK_IMPORTED_MODULE_0__(this).children().attr('class').slice(-1);
      jquery__WEBPACK_IMPORTED_MODULE_0__('.menu li.link-0' + nm).children().addClass('active');
      var index = $items.index(jquery__WEBPACK_IMPORTED_MODULE_0__(this));
      jquery__WEBPACK_IMPORTED_MODULE_0__('.files__body .tab-pane').removeClass('active').eq(index).addClass('active');
      return false;
    }).eq(0).click();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0__('.accordion__nav').click(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).parent().is('.active')) {
      jquery__WEBPACK_IMPORTED_MODULE_0__('.accordion_wrap').removeClass('active');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0__('.accordion_wrap').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0__(this).parent().addClass('active');
      var nm = jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr('class').slice(-1);
      var el2 = document.getElementById('accordion__nav-0' + nm);
      el2.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0__('.nav__mobile_wrap li').click(function () {
    navMobile.classList.remove('active');
    mBody.classList.remove('ov');
    jquery__WEBPACK_IMPORTED_MODULE_0__('.accordion_wrap').removeClass('active');
    var nm = jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr('class').slice(-1);
    var el = document.getElementById('accordion__nav-0' + nm);
    jquery__WEBPACK_IMPORTED_MODULE_0__('.accordion__nav-0' + nm).parent().addClass('active');
    el.scrollIntoView({
      behavior: 'smooth'
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0__('.send__files_button').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0__(this).parent().parent().addClass('open');
    mBody.classList.add('ov');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0__('.close__form').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0__('.files__body_row').removeClass('open');
    mBody.classList.remove('ov');
  });
});

/***/ }),

/***/ "./styles/svg.css":
/*!************************!*\
  !*** ./styles/svg.css ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_jquery_dist_jquery_js"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_jquery_dist_jquery_js"], function() { return __webpack_require__("./index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map