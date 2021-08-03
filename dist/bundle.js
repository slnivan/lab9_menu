/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/javascript/index.js":
/*!************************************!*\
  !*** ./assets/javascript/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./assets/style/style.scss\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./assets/javascript/menu.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ \"./assets/javascript/todo.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_todo_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://lab9_menu/./assets/javascript/index.js?");

/***/ }),

/***/ "./assets/javascript/menu.js":
/*!***********************************!*\
  !*** ./assets/javascript/menu.js ***!
  \***********************************/
/***/ (() => {

eval("const burgerMenu = document.querySelector('.burger');\r\nconst dropdownBtn = document.querySelector('.dropdown-btn');\r\n\r\nfunction openMenu() {\r\n    burgerMenu.classList.toggle('active')\r\n    document.querySelector('.burger span').classList.toggle('active');\r\n    document.querySelector('.burger').classList.toggle('activeBurger');\r\n    document.querySelector('.menu').classList.toggle('active');\r\n}\r\n\r\nburgerMenu.addEventListener('click', openMenu)\r\n\r\nconst dropdownContent = document.querySelector('.dropdown-content');\r\ndropdownBtn.addEventListener('mouseover', function () {\r\n    dropdownContent\r\n        .classList.add('show')\r\n})\r\n\r\ndropdownBtn.addEventListener('mouseout', function () {\r\n    dropdownContent.classList.remove('show')\r\n})\n\n//# sourceURL=webpack://lab9_menu/./assets/javascript/menu.js?");

/***/ }),

/***/ "./assets/javascript/todo.js":
/*!***********************************!*\
  !*** ./assets/javascript/todo.js ***!
  \***********************************/
/***/ (() => {

eval("function createToDoPoint() {\r\n    let input = document.getElementById('to-do-value');\r\n    let li = document.createElement('li')\r\n    let inputText = input.value\r\n    let liText = document.createTextNode(inputText)\r\n\r\n    li.appendChild(liText)\r\n    if (inputText !== '') {\r\n        document.getElementById('list').appendChild(li)\r\n    } else {\r\n        alert('Поле не должно быть пустым')\r\n    }\r\n    \r\n    input.value = \"\";\r\n    let span = document.createElement('span')\r\n    let txt = document.createTextNode(\"X\");\r\n    span.className = \"close\";\r\n    span.appendChild(txt);\r\n    li.appendChild(span);\r\n}\r\n\r\nconst btnAdd = document.querySelector('.btn-add')\r\nbtnAdd.addEventListener('click', createToDoPoint)\r\n\r\n\r\nconst list = document.querySelector('.wrapper__todo')\r\nlist.addEventListener('click', function (event) {\r\n    if (event.target.tagName === 'LI') {\r\n        event.target.classList.toggle('checked');\r\n    } else if (event.target.tagName === 'SPAN') {\r\n        let point = event.target.parentNode\r\n        point.remove()\r\n    }\r\n})\n\n//# sourceURL=webpack://lab9_menu/./assets/javascript/todo.js?");

/***/ }),

/***/ "./assets/style/style.scss":
/*!*********************************!*\
  !*** ./assets/style/style.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab9_menu/./assets/style/style.scss?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./assets/javascript/index.js");
/******/ 	__webpack_require__("./assets/javascript/todo.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/javascript/menu.js");
/******/ 	
/******/ })()
;