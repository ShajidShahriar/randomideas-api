/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/IdeaForm.js":
/*!************************************!*\
  !*** ./src/components/IdeaForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar IdeaForm = /*#__PURE__*/function () {\n  function IdeaForm() {\n    _classCallCheck(this, IdeaForm);\n    this._formModal = document.querySelector('#form-modal');\n  }\n  _createClass(IdeaForm, [{\n    key: \"addEventListener\",\n    value: function addEventListener() {\n      this._form.addEventListener('submit', this.handleSubmit.bind(this));\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      e.preventDefault();\n      var idea = {\n        text: this._form.elements.text.value,\n        tag: this._form.elements.tag.value,\n        username: this._form.elements.username.value\n      };\n      console.log(idea);\n      //clear the fields\n      this._form.elements.text.value = '';\n      this._form.elements.tag.value = '';\n      this._form.elements.username.value = '';\n      document.dispatchEvent(new Event('closemodal'));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this._formModal.innerHTML = \"\\n        <form id=\\\"idea-form\\\">\\n          <div class=\\\"form-control\\\">\\n            <label for=\\\"idea-text\\\">Enter a Username</label>\\n            <input type=\\\"text\\\" name=\\\"username\\\" id=\\\"username\\\" />\\n          </div>\\n          <div class=\\\"form-control\\\">\\n            <label for=\\\"idea-text\\\">What's Your Idea?</label>\\n            <textarea name=\\\"text\\\" id=\\\"idea-text\\\"></textarea>\\n          </div>\\n          <div class=\\\"form-control\\\">\\n            <label for=\\\"tag\\\">Tag</label>\\n            <input type=\\\"text\\\" name=\\\"tag\\\" id=\\\"tag\\\" />\\n          </div>\\n          <button class=\\\"btn\\\" type=\\\"submit\\\" id=\\\"submit\\\">Submit</button>\\n        </form>\";\n      this._form = document.querySelector('#idea-form');\n      this.addEventListener();\n    }\n  }]);\n  return IdeaForm;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IdeaForm);\n\n//# sourceURL=webpack://webpack-starter/./src/components/IdeaForm.js?");

/***/ }),

/***/ "./src/components/IdeaList.js":
/*!************************************!*\
  !*** ./src/components/IdeaList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar IdeaList = /*#__PURE__*/function () {\n  function IdeaList() {\n    _classCallCheck(this, IdeaList);\n    this._ideaListEl = document.querySelector('#idea-list');\n    this._ideas = [{\n      id: 1,\n      text: 'balsal 1',\n      tag: 'business',\n      username: 'shajid',\n      date: '02/06/2002'\n    }, {\n      id: 2,\n      text: 'balsal 2',\n      tag: 'technology',\n      username: 'shajid',\n      date: '08/06/2002'\n    }];\n    this._validTags = new Set();\n    this._validTags.add('technology');\n    this._validTags.add('software');\n    this._validTags.add('business');\n    this._validTags.add('education');\n    this._validTags.add('health');\n    this._validTags.add('inventions');\n  }\n  _createClass(IdeaList, [{\n    key: \"_getTagClass\",\n    value: function _getTagClass(tag) {\n      tag = tag.toLowerCase();\n      var tagClass = '';\n      if (this._validTags.has(tag)) {\n        tagClass = \"tag-\".concat(tag);\n      } else {\n        tagClass = '';\n      }\n      return tagClass;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n      this._ideaListEl.innerHTML = this._ideas.map(function (idea) {\n        var tagClass = _this._getTagClass(idea.tag);\n        return \"\\n            <div class=\\\"card\\\">\\n          <button class=\\\"delete\\\"><i class=\\\"fas fa-times\\\"></i></button>\\n          <h3>\\n            \".concat(idea.text, \"\\n          </h3>\\n          <p class=\\\"tag \").concat(tagClass, \"\\\">\").concat(idea.tag.toLocaleUpperCase(), \"</p>\\n          <p>\\n            Posted on <span class=\\\"date\\\">\").concat(idea.date, \"</span> by\\n            <span class=\\\"author\\\">\").concat(idea.username, \"</span>\\n          </p>\\n        </div>\");\n      });\n    }\n  }]);\n  return IdeaList;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IdeaList);\n\n//# sourceURL=webpack://webpack-starter/./src/components/IdeaList.js?");

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Modal = /*#__PURE__*/function () {\n  function Modal() {\n    _classCallCheck(this, Modal);\n    this._modal = document.querySelector('#modal');\n    this._modalBtn = document.querySelector('#modal-btn');\n    this.addEventListeners();\n  }\n  _createClass(Modal, [{\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this = this;\n      this._modalBtn.addEventListener('click', this.open.bind(this));\n      window.addEventListener('click', this.outsideClick.bind(this));\n      document.addEventListener('closemodal', function () {\n        return _this.close();\n      });\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      this._modal.style.display = 'block';\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this._modal.style.display = 'none';\n    }\n  }, {\n    key: \"outsideClick\",\n    value: function outsideClick(e) {\n      if (e.target === this._modal) {\n        this.close();\n      }\n    }\n  }]);\n  return Modal;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack://webpack-starter/./src/components/Modal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Modal */ \"./src/components/Modal.js\");\n/* harmony import */ var _components_IdeaForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/IdeaForm */ \"./src/components/IdeaForm.js\");\n/* harmony import */ var _components_IdeaList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/IdeaList */ \"./src/components/IdeaList.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.css\");\n\n\n\n\n\nvar modal = new _components_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar ideaForm = new _components_IdeaForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nvar ideaList = new _components_IdeaList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nideaForm.render();\nideaList.render();\n\n//# sourceURL=webpack://webpack-starter/./src/index.js?");

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.css":
/*!****************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-starter/./node_modules/@fortawesome/fontawesome-free/css/all.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-starter/./src/css/style.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;