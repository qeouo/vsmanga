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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _memories_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memories.js */ \"./src/memories.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './memorial.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n//import Touch from \"./touch.js\";\n//var touch = new Touch();\nvar memories = new Memories();\nvar view = document.getElementById(\"container\");\nwindow.memories = memories;\n\n//view.addEventListener(\"touchstart\",touch.touchstart,{ passive: false } );\n//view.addEventListener(\"touchmove\",touch.touchmove,{ passive: false } );\n//view.addEventListener(\"touchend\",touch.touchend);\n\nview.addEventListener(\"keydown\", function (e) {\n  switch (e.keyCode) {\n    case 37:\n    case 'Z'.charCodeAt(0):\n      //mviewer.pagemove(-1);\n      break;\n    case 39:\n    case 'X'.charCodeAt(0):\n      //mviewer.pagemove(+1);\n      break;\n  }\n});\nwindow.addEventListener(\"resize\", function (e) {\n  //mviewer.setPage(mviewer.current_page,1);\n});\nmemories.init();\nview.focus();\n\n//# sourceURL=webpack://bc/./src/index.js?");

/***/ }),

/***/ "./src/loadtext.js":
/*!*************************!*\
  !*** ./src/loadtext.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Loadtext; }\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Loadtext = /*#__PURE__*/function () {\n  function Loadtext() {\n    _classCallCheck(this, Loadtext);\n  }\n  _createClass(Loadtext, null, [{\n    key: \"load\",\n    value: function load(url, callback) {\n      var flg = true;\n      var filename_ex = url.match(\"([^/]+?)([\\?#;].*)?$\")[1];\n      var request = Loadtext.createXMLHttpRequest();\n      request.open(\"GET\", url, true);\n      request.onload = function (e) {\n        if (request.status == 200 || request.status == 304) {\n          var buf = request.responseText;\n          if (callback) {\n            callback(buf);\n          }\n        } else {\n          if (callback) {\n            callback(null);\n          }\n        }\n        this.loadingCount--;\n        console.log(\"loadtext end\", this.loadingCount);\n      };\n      request.onerror = function (e) {\n        if (callback) {\n          callback(null);\n        }\n        this.loadingCount--;\n        console.log(\"loadtext failed\", this.loadingCount);\n      };\n      console.log(\"loadtext start\", url);\n      this.loadingCount++;\n      request.send(\"\");\n      return request;\n    }\n  }]);\n  return Loadtext;\n}();\n_defineProperty(Loadtext, \"loadingCount\", void 0);\n_defineProperty(Loadtext, \"createXMLHttpRequest\", function () {\n  if (window.XMLHttpRequest) {\n    return new XMLHttpRequest();\n  } else if (window.ActiveXObject) {\n    try {\n      return new ActiveXObject(\"Msxml2.XMLHTTP\");\n    } catch (e) {\n      try {\n        return new ActiveXObject(\"Microsoft.XMLHTTP\");\n      } catch (e2) {\n        return null;\n      }\n    }\n  } else {\n    return null;\n  }\n});\n\n\n//# sourceURL=webpack://bc/./src/loadtext.js?");

/***/ }),

/***/ "./src/memories.js":
/*!*************************!*\
  !*** ./src/memories.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Memories; }\n/* harmony export */ });\n/* harmony import */ var _loadtext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadtext.js */ \"./src/loadtext.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Memories = /*#__PURE__*/function () {\n  function Memories() {\n    _classCallCheck(this, Memories);\n    this.page_contents = [];\n    this.thumbnail_path = [];\n    this.page = 1;\n    this.target_page;\n    this.auto_scroll = 0;\n  }\n  _createClass(Memories, [{\n    key: \"smooth_scroll\",\n    value:\n    //ページ位置補正\n    function smooth_scroll(target) {\n      this.old_page = this.page;\n      this.target_scroll = target;\n      this.old_time = Date.now();\n      this.auto_scroll = 1;\n      this.scroll_enable = false;\n    }\n  }, {\n    key: \"scrollEvent\",\n    value: function scrollEvent() {\n      var _this = this;\n      var now = Date.now();\n      if (this.auto_scroll) {\n        //ページ位置補正\n        var delta = now - this.old_time;\n        var t = delta / Memories.SCROLL_TIME;\n        if (t < 1) {\n          t = Math.sin(t * Math.PI * 0.5);\n        } else {\n          t = 1;\n          this.auto_scroll = 0;\n        }\n        this.page = t * (this.target_scroll - this.old_page) + this.old_page;\n        var max = -memories.main.clientWidth + this.sub.clientWidth;\n        memories.main.scrollLeft = (this.page - 1) * max / (this.page_max_true - 1);\n        if (t >= 1) {\n          this.old_page = this.page;\n        }\n      }\n      if (this.scroll_enable) {\n        //スワイプによるスクロール\n        var delta = (now - this.before_now) * 0.001;\n        view.scrollLeft += delta * this.scroll_speed;\n        this.scroll_speed = Math.pow(0.05, delta) * this.scroll_speed;\n        if (this.scroll_speed * this.scroll_speed < 500 * 500) {\n          this.scroll_speed = 0;\n          this.scroll_enable = false;\n          this.setPage(this.current_page);\n        }\n      }\n      this.before_now = now;\n      window.requestAnimationFrame(function (e) {\n        _this.scrollEvent();\n      });\n    }\n  }, {\n    key: \"pagemove\",\n    value: function pagemove(d) {\n      var max = -this.main.clientWidth + this.sub.clientWidth;\n      var ratio = main.scrollLeft / max;\n      this.page = ratio * (this.page_max_true - 1) + 1.0;\n      var target = Math.max(1, Math.min(this.page_max_true, Math.floor(this.page + d + 0.5)));\n      this.smooth_scroll(target);\n      if (this.popup.style.display !== \"none\") {\n        this.popupShow(target - 1);\n      }\n    }\n  }, {\n    key: \"redraw\",\n    value: function redraw() {\n      var limit = 2.4;\n      var divs = this.divs;\n      var max = -this.main.clientWidth + this.sub.clientWidth;\n      var ratio = main.scrollLeft / max;\n      var r2 = ratio * (divs.length - 1);\n      for (var i = 0; i < divs.length; i++) {\n        var div = divs[i];\n        var pos = i - r2;\n        pos *= 0.5;\n        if (pos * pos >= limit * limit) {\n          div.style.display = \"none\";\n          continue;\n        }\n        var delta = Math.abs(pos);\n        div.style.display = \"inline-block\";\n        var scale = (1 - delta) * 50 + 10 + \"%\";\n        if (document.body.clientWidth < document.body.clientHeight) {\n          div.style.width = scale;\n          div.style.height = \"auto\";\n        } else {\n          div.style.width = \"auto\";\n          div.style.height = scale;\n        }\n        var pos2 = (1.0 - 1.0 / (Math.abs(pos) * 2 + 1.0)) * 0.8;\n        //var pos2=Math.sqrt(1.0-(1-Math.abs(pos)/7)*(1-Math.abs(pos)/7));\n        pos2 *= Math.sign(pos);\n        div.style.left = main.clientWidth * (pos2 + 1.0) * 0.5 + \"px\";\n        div.style.opacity = 1.0 - Math.abs(pos / limit * 2);\n        div.style.zIndex = (10 - Math.abs(pos * 2)).toFixed(0);\n      }\n    }\n  }, {\n    key: \"popupShow\",\n    value: function popupShow(idx) {\n      var popup = this.popup;\n      popup.style.visibility = \"visible\";\n      popup.style.display = \"block\";\n      var content = memories.page_contents[idx];\n      if (/\\.mp4$/.test(content)) {\n        memories.mainvideo.src = content;\n        memories.mainvideo.style.display = \"inline-block\";\n        memories.mainimg.style.display = \"none\";\n      } else {\n        memories.mainimg.src = content;\n        memories.mainimg.style.display = \"inline-block\";\n        memories.mainvideo.style.display = \"none\";\n      }\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this2 = this;\n      var main = document.getElementById(\"main\");\n      this.main = main;\n      var container = document.getElementById(\"container\");\n      var sub = document.getElementById(\"sub\");\n      this.sub = sub;\n      var cons = document.getElementById(\"cons\");\n      var popup = document.getElementById(\"popup\");\n      this.popup = popup;\n      this.mainimg = document.getElementById(\"mainimg\");\n      this.mainvideo = document.getElementById(\"mainvideo\");\n      popup.style.visibility = \"hidden\";\n      popup.style.display = \"none;\";\n      popup.addEventListener(\"click\", function (e) {\n        popup.style.display = \"none\";\n      });\n      var divs = [];\n      this.divs = divs;\n      function onc(e) {\n        var idx = Number(e.target.getAttribute(\"idx\"));\n        memories.popupShow(idx);\n      }\n      main.addEventListener(\"scroll\", function (e) {\n        memories.redraw();\n      });\n      var screenWidth, screenHeight;\n      if (window.devicePixelRatio > 0) {\n        screenWidth = window.innerWidth * window.devicePixelRatio;\n        screenHeight = window.innerHeight * window.devicePixelRatio;\n      } else {\n        screenWidth = window.innerWidth;\n        screenHeight = window.innerHeight;\n      }\n      this.double_page = screenWidth >= screenHeight;\n      var view = document.getElementById(\"view\");\n      var params_str = location.search.replace(\"?\", \"\").split(\"&\");\n      for (var i = 0; i < params_str.length; i++) {\n        var res = params_str[i].split(\"=\");\n        this[res[0]] = isNaN(res[1]) ? res[1] : Number(res[1]);\n      }\n\n      //------------------ファイル読み込み-------------------------------\n      var path = this.file;\n      var dir = path.replace(/[^/]*$/, '');\n      var file = path.replace(/.*\\//, '');\n      if (file === \"\") {\n        file = \"index.txt\";\n      }\n      this.dir = dir;\n      this.file = dir + file;\n      _loadtext_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load(this.file + \"?\" + Date.now(), function (text) {\n        var ps = text.split(\"\\n\");\n        var splits = ps[0].split(\";\");\n\n        //1行目のパラメータを取得\n        for (var i = 0; i < splits.length; i++) {\n          var c = splits[i].split(\"=\");\n          _this2[c[0]] = c[1];\n          _this2[c[0]] = isNaN(c[1]) ? c[1] : Number(c[1]);\n        }\n        _this2.page_max = parseInt(_this2.page_max);\n        _this2.page_max_true = _this2.page_max;\n\n        //カスタムページ取得\n        for (var i = 1; i < ps.length; i++) {\n          var line = ps[i];\n          var content = line;\n          if (!content) {\n            continue;\n          }\n          content = content.replaceAll(\"./\", _this2.dir);\n          _this2.page_contents[i - 1] = content;\n          _this2.thumbnail_path[i - 1] = content.replace(/(.*)\\/(.*)(\\..*?)$/, \"$1/thumbnail/$2_s.png\");\n          _this2.page_max_true = i;\n        }\n        for (var i = 0; i < _this2.page_max_true; i++) {\n          var div = document.createElement(\"img\");\n          div.src = _this2.thumbnail_path[i];\n          div.className = \"thumbnail\";\n          div.addEventListener(\"click\", onc);\n          div.setAttribute(\"idx\", i);\n          divs.push(div);\n          _this2.main.appendChild(div);\n        }\n        if (_this2.page < 0) {\n          _this2.page = _this2.page_max_true;\n        }\n        sub.style.width = _this2.page_max_true * 50 + 50 + \"%\";\n        var max = -memories.main.clientWidth + _this2.sub.clientWidth;\n        memories.main.scrollLeft = (_this2.page - 1) * max / (_this2.page_max_true - 1);\n        memories.redraw();\n        window.requestAnimationFrame(function (e) {\n          _this2.scrollEvent();\n        });\n      });\n    }\n  }]);\n  return Memories;\n}();\n_defineProperty(Memories, \"SCROLL_TIME\", 300);\n\n\n//# sourceURL=webpack://bc/./src/memories.js?");

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