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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clock\", function() { return clock; });\n/* harmony import */ var _warmup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup.js */ \"./src/warmup.js\");\n\r\n\r\nconst clockElement = document.getElementById('clock');\r\n\r\nclass Clock {\r\n  constructor() {\r\n    // 1. Create a Date object.\r\n    const currentTime = new Date();\r\n\r\n    // 2. Store the hour, minute, and second.\r\n    this.hours = currentTime.getHours();\r\n    this.minutes = currentTime.getMinutes();\r\n    this.seconds = currentTime.getSeconds();\r\n\r\n    // 3. Call printTime.\r\n    this.printTime();\r\n\r\n    // 4. Schedule the tick at 1 second intervals.\r\n    setInterval(this._tick.bind(this), 1000);\r\n  }\r\n\r\n  printTime() {\r\n    // Format the time in HH:MM:SS\r\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\r\n\r\n    // Use console.log to print it.\r\n    Object(_warmup_js__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(timeString, clockElement);\r\n  }\r\n\r\n  _tick() {\r\n    // 1. Increment the time by one second.\r\n    this._incrementSeconds();\r\n\r\n    // 2. Call printTime.\r\n    this.printTime();\r\n  }\r\n\r\n  _incrementSeconds() {\r\n    // 1. Increment the time by one second.\r\n    this.seconds += 1;\r\n    if (this.seconds === 60) {\r\n      this.seconds = 0;\r\n      this._incrementMinutes();\r\n    }\r\n  }\r\n\r\n  _incrementMinutes() {\r\n    this.minutes += 1;\r\n    if (this.minutes === 60) {\r\n      this.minutes = 0;\r\n      this._incrementHours();\r\n    }\r\n  }\r\n\r\n  _incrementHours() {\r\n    this.hours = (this.hours + 1) % 24;\r\n  }\r\n}\r\n\r\nconst clock = new Clock();\r\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator() {\n\n  const dogLinks = [];\n\n  for (let key in dogs) {\n    let aElement = document.createElement('a');\n    aElement.innerHTML = key;\n    aElement.href = dogs[key];\n\n    let liElement = document.createElement('li');\n    liElement.classList.add('dog-link');\n    liElement.append(aElement);\n\n    dogLinks.push(liElement);\n  }\n  return dogLinks;\n}\n\nfunction attachDogLinks() {\n  const dropDownList = document.getElementsByClassName('drop-down-dog-list')[0];\n  const dogLinks = dogLinkCreator();\n\n  dogLinks.forEach(dogLink => {\n    dropDownList.append(dogLink);\n  })\n}\n\nfunction handleEnter() {\n  const dogLinks = document.getElementsByClassName('dog-link');\n  Array(...dogLinks).forEach(dogLink => {\n    dogLink.style.display = 'block';\n  })\n}\n\nfunction handleLeave() {\n  const dogLinks = document.getElementsByClassName('dog-link');\n  Array(...dogLinks).forEach(dogLink => {\n    dogLink.style.display = 'none';\n  })\n}\n\nattachDogLinks();\n\nconst navElement = document.getElementsByClassName('drop-down-dog-nav')[0];\nnavElement.addEventListener('mouseenter', handleEnter);\nnavElement.addEventListener('mouseleave', handleLeave);\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide_scroll */ \"./src/slide_scroll.js\");\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_slide_scroll__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/slide_scroll.js":
/*!*****************************!*\
  !*** ./src/slide_scroll.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function debounce(func, wait = 20, immediate = true) {\n  let timeout;\n\n  // This is the function that is actually executed when\n  // the DOM event is triggered.\n  return function executedFunction() {\n    // Store the context of this and any\n    // parameters passed to executedFunction\n    const context = this;\n    const args = arguments;\n\n    // The function to be called after debounce time has elapsed\n    const later = function () {\n      // null timeout to indicate the debounce ended\n      timeout = null;\n\n      // Call function now if you did not in the beginning\n      if (!immediate) func.apply(context, args);\n    };\n\n    // Determine if you should call the function\n    // on the leading or trail end\n    const callNow = immediate && !timeout;\n\n    // This will reset the waiting every function execution.\n    clearTimeout(timeout);\n\n    // Restart the debounce waiting period - returns true\n    timeout = setTimeout(later, wait);\n\n    // Call immediately if you're doing a leading end execution\n    if (callNow) func.apply(context, args);\n  };\n}\n\nconst images = document.querySelectorAll('img');\n\nfunction handleScroll(e) {\n  images.forEach(image => {\n    const slideInAt = (window.scrollY + window.innerHeight) - image.height/2;\n    const imageBottom = image.offsetTop + image.height;\n    const isHalfShown = slideInAt > image.offsetTop;\n    const isNotScrolledPast = window.scrollY < imageBottom;\n    if (isHalfShown && isNotScrolledPast) {\n      image.classList.add('active');\n    } else {\n      image.classList.remove('active');\n    }\n  })\n}\n\nwindow.addEventListener('scroll', debounce(handleScroll))\n\n//# sourceURL=webpack:///./src/slide_scroll.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const todos = JSON.parse(localStorage.getItem('todos')) || [];\nconst ulElement = document.getElementsByClassName('todos')[0];\nconst formElement = document.getElementsByClassName('add-todo-form')[0];\nconst divElement = document.getElementsByClassName('todo-container')[0];\n\nfunction addTodo(e) {\n  e.preventDefault();\n  const inputElement = document.querySelector('[name=\"add-todo\"]');\n  const todo = {\n    value: inputElement.value,\n    done: false,\n  }\n  todos.push(todo);\n  inputElement.value = '';\n  populateList(todos);\n}\n\nfunction populateList(todos) {\n\n  Array(...ulElement.children).forEach(child => child.remove());\n\n  todos.forEach((todo, index) => {\n    let labelElement = document.createElement('label');\n    let checkboxElement = document.createElement('input');\n    let listElement = document.createElement('li');\n\n    labelElement.innerText = todo.value;\n\n    checkboxElement.type = 'checkbox';\n    checkboxElement.checked = todo.done;\n    checkboxElement.dataset.id = index;\n\n    listElement.appendChild(checkboxElement);\n    listElement.appendChild(labelElement);\n\n    ulElement.append(listElement);\n  });\n\n  localStorage.setItem('todos', JSON.stringify(todos));\n}\n\nfunction click(e) {\n  if (e.target.type === 'checkbox') {\n    todos[e.target.dataset.id].done = e.target.checked;\n  }\n  populateList(todos);\n}\n\npopulateList(todos);\nformElement.addEventListener('submit', addTodo);\ndivElement.addEventListener('click', click);\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  const newP = document.createElement('p');\n  newP.innerText = string;\n  const children = Array(...htmlElement.children);\n  children.forEach(child => child.remove());\n  htmlElement.appendChild(newP);\n};\n\nhtmlGenerator('I <3 JS.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });