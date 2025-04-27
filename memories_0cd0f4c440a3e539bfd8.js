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

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './memorial.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './memorial.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n//import Touch from \"./touch.js\";\n//var touch = new Touch();\nvar memorial = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './memorial.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\nvar view = document.getElementById(\"container\");\nwindow.memorial = memorial;\n\n//view.addEventListener(\"touchstart\",touch.touchstart,{ passive: false } );\n//view.addEventListener(\"touchmove\",touch.touchmove,{ passive: false } );\n//view.addEventListener(\"touchend\",touch.touchend);\n\nview.addEventListener(\"keydown\", function (e) {\n  switch (e.keyCode) {\n    case 37:\n    case 'Z'.charCodeAt(0):\n      //mviewer.pagemove(-1);\n      break;\n    case 39:\n    case 'X'.charCodeAt(0):\n      //mviewer.pagemove(+1);\n      break;\n  }\n});\nwindow.addEventListener(\"resize\", function (e) {\n  //mviewer.setPage(mviewer.current_page,1);\n});\nmemorial.init();\nview.focus();\n\n//# sourceURL=webpack://bc/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;