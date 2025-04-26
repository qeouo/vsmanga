/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _memorial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memorial.js */ \"./src/memorial.js\");\n\n//import Touch from \"./touch.js\";\n//var touch = new Touch();\nvar memorial = new _memorial_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar view = document.getElementById(\"container\");\nwindow.memorial = memorial;\n\n//view.addEventListener(\"touchstart\",touch.touchstart,{ passive: false } );\n//view.addEventListener(\"touchmove\",touch.touchmove,{ passive: false } );\n//view.addEventListener(\"touchend\",touch.touchend);\n\nview.addEventListener(\"keydown\", function (e) {\n  switch (e.keyCode) {\n    case 37:\n    case 'Z'.charCodeAt(0):\n      //mviewer.pagemove(-1);\n      break;\n    case 39:\n    case 'X'.charCodeAt(0):\n      //mviewer.pagemove(+1);\n      break;\n  }\n});\nwindow.addEventListener(\"resize\", function (e) {\n  //mviewer.setPage(mviewer.current_page,1);\n});\nmemorial.init();\nview.focus();\n\n//# sourceURL=webpack://bc/./src/index.js?");

/***/ }),

/***/ "./src/loadtext.js":
/*!*************************!*\
  !*** ./src/loadtext.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Loadtext; }\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Loadtext = /*#__PURE__*/function () {\n  function Loadtext() {\n    _classCallCheck(this, Loadtext);\n  }\n  _createClass(Loadtext, null, [{\n    key: \"load\",\n    value: function load(url, callback) {\n      var flg = true;\n      var filename_ex = url.match(\"([^/]+?)([\\?#;].*)?$\")[1];\n      var request = Loadtext.createXMLHttpRequest();\n      request.open(\"GET\", url, true);\n      request.onload = function (e) {\n        if (request.status == 200 || request.status == 304) {\n          var buf = request.responseText;\n          if (callback) {\n            callback(buf);\n          }\n        } else {\n          if (callback) {\n            callback(null);\n          }\n        }\n        this.loadingCount--;\n        console.log(\"loadtext end\", this.loadingCount);\n      };\n      request.onerror = function (e) {\n        if (callback) {\n          callback(null);\n        }\n        this.loadingCount--;\n        console.log(\"loadtext failed\", this.loadingCount);\n      };\n      console.log(\"loadtext start\", url);\n      this.loadingCount++;\n      request.send(\"\");\n      return request;\n    }\n  }]);\n  return Loadtext;\n}();\n_defineProperty(Loadtext, \"loadingCount\", void 0);\n_defineProperty(Loadtext, \"createXMLHttpRequest\", function () {\n  if (window.XMLHttpRequest) {\n    return new XMLHttpRequest();\n  } else if (window.ActiveXObject) {\n    try {\n      return new ActiveXObject(\"Msxml2.XMLHTTP\");\n    } catch (e) {\n      try {\n        return new ActiveXObject(\"Microsoft.XMLHTTP\");\n      } catch (e2) {\n        return null;\n      }\n    }\n  } else {\n    return null;\n  }\n});\n\n\n//# sourceURL=webpack://bc/./src/loadtext.js?");

/***/ }),

/***/ "./src/memorial.js":
/*!*************************!*\
  !*** ./src/memorial.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Memorial; }\n/* harmony export */ });\n/* harmony import */ var _loadtext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadtext.js */ \"./src/loadtext.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar Memorial = /*#__PURE__*/function () {\n  function Memorial() {\n    _classCallCheck(this, Memorial);\n    this.page_contents = [];\n    this.thumbnail_path = [];\n    this.page = 1;\n  }\n  _createClass(Memorial, [{\n    key: \"redraw\",\n    value: function redraw() {\n      var limit = 2.4;\n      var divs = this.divs;\n      var max = -this.main.clientWidth + this.sub.clientWidth;\n      var ratio = main.scrollLeft / max;\n      var r2 = ratio * (divs.length - 1);\n      for (var i = 0; i < divs.length; i++) {\n        var div = divs[i];\n        var pos = i - r2;\n        pos *= 0.5;\n        if (pos * pos >= limit * limit) {\n          div.style.display = \"none\";\n          continue;\n        }\n        var delta = Math.abs(pos);\n        div.style.display = \"inline-block\";\n        div.style.width = (1 - delta) * 10 + 10 + \"%\";\n        var pos2 = (1.0 - 1.0 / (Math.abs(pos) * 2 + 1.0)) * 0.8;\n        //var pos2=Math.sqrt(1.0-(1-Math.abs(pos)/7)*(1-Math.abs(pos)/7));\n        pos2 *= Math.sign(pos);\n        div.style.left = main.clientWidth * (pos2 + 1.0) * 0.5 + \"px\";\n        div.style.opacity = 1.0 - Math.abs(pos / limit * 2);\n        div.style.zIndex = (10 - Math.abs(pos * 2)).toFixed(0);\n      }\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n      var main = document.getElementById(\"main\");\n      this.main = main;\n      var container = document.getElementById(\"container\");\n      var sub = document.getElementById(\"sub\");\n      this.sub = sub;\n      var cons = document.getElementById(\"cons\");\n      var popup = document.getElementById(\"popup\");\n      var mainimg = document.getElementById(\"mainimg\");\n      popup.style.visibility = \"hidden\";\n      popup.style.display = \"none;\";\n      popup.addEventListener(\"click\", function (e) {\n        popup.style.display = \"none\";\n      });\n      var divs = [];\n      this.divs = divs;\n      function onc(e) {\n        popup.style.visibility = \"visible\";\n        popup.style.display = \"block\";\n        var idx = Number(e.target.getAttribute(\"idx\"));\n        mainimg.src = memorial.page_contents[idx];\n      }\n      main.addEventListener(\"scroll\", function (e) {\n        memorial.redraw();\n      });\n      var screenWidth, screenHeight;\n      if (window.devicePixelRatio > 0) {\n        screenWidth = window.innerWidth * window.devicePixelRatio;\n        screenHeight = window.innerHeight * window.devicePixelRatio;\n      } else {\n        screenWidth = window.innerWidth;\n        screenHeight = window.innerHeight;\n      }\n      this.double_page = screenWidth >= screenHeight;\n      var view = document.getElementById(\"view\");\n      var params_str = location.search.replace(\"?\", \"\").split(\"&\");\n      for (var i = 0; i < params_str.length; i++) {\n        var res = params_str[i].split(\"=\");\n        this[res[0]] = isNaN(res[1]) ? res[1] : Number(res[1]);\n      }\n\n      //------------------ファイル読み込み-------------------------------\n      var path = this.file;\n      var dir = path.replace(/[^/]*$/, '');\n      var file = path.replace(/.*\\//, '');\n      if (file === \"\") {\n        file = \"index.txt\";\n      }\n      this.dir = dir;\n      this.file = dir + file;\n      _loadtext_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load(this.file + \"?\" + Date.now(), function (text) {\n        var ps = text.split(\"\\n\");\n        var splits = ps[0].split(\";\");\n\n        //1行目のパラメータを取得\n        for (var i = 0; i < splits.length; i++) {\n          var c = splits[i].split(\"=\");\n          _this[c[0]] = c[1];\n          _this[c[0]] = isNaN(c[1]) ? c[1] : Number(c[1]);\n        }\n        _this.page_max = parseInt(_this.page_max);\n        _this.page_max_true = _this.page_max;\n\n        //カスタムページ取得\n        for (var i = 1; i < ps.length; i++) {\n          var line = ps[i];\n          var content = line;\n          if (!content) {\n            continue;\n          }\n          content = content.replaceAll(\"./\", _this.dir);\n          _this.page_contents[i - 1] = content;\n          _this.thumbnail_path[i - 1] = content.replace(/(.*)\\/(.*)(\\..*?)$/, \"$1/thumbnail/$2_s$3\");\n          _this.page_max_true = i;\n        }\n        sub.style.width = _this.page_max_true * 100 + \"%\";\n        for (var i = 0; i < _this.page_max_true; i++) {\n          var div = document.createElement(\"img\");\n          div.src = _this.thumbnail_path[i];\n          div.className = \"thumbnail\";\n          div.style.backgroundColor = \"rgb(0,0,\" + 255 * i / _this.page_max_true + \")\";\n          div.addEventListener(\"click\", onc);\n          div.setAttribute(\"idx\", i);\n          divs.push(div);\n          container.appendChild(div);\n        }\n        if (_this.page < 0) {\n          _this.page = _this.page_max_true;\n        }\n        var max = -memorial.main.clientWidth + _this.sub.clientWidth;\n        memorial.main.scrollLeft = (_this.page - 1) * max / (_this.page_max_true - 1);\n        memorial.redraw();\n      });\n    }\n  }]);\n  return Memorial;\n}();\n\n\n//# sourceURL=webpack://bc/./src/memorial.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;