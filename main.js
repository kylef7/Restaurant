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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/dessertImage.png */ \"./src/img/dessertImage.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Princess+Sofia&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background: linear-gradient(rgba(58, 58, 58, 0.11), #F0EFED);\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: 400;\r\n}\r\n\r\n.topHeader {\r\n    background-color: #343434;\r\n    width: 100%;\r\n    height: 120px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 30px;\r\n}\r\n\r\n.logo {\r\n    font-family: 'Princess Sofia', cursive;\r\n    font-size: 3rem;\r\n    color: #EEE5D4;\r\n    font-weight: 300;\r\n}\r\n\r\n.logoContainer {\r\n    width: 60%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.logoContainer span {\r\n    align-self: flex-end;\r\n    color: #EEE5D4;\r\n    font-size: 1rem;\r\n}\r\n\r\n.hero {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 400px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    gap: 40px;\r\n}\r\n\r\n.hero::after {\r\n    content: '';\r\n    background: rgba(0, 0, 0, 0.35);\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n\r\n.hero h2 {\r\n    color: white;\r\n    width: 650px;\r\n    text-align: center;\r\n    font-size: 3.5rem;\r\n    font-weight: 300;\r\n    z-index: 2;\r\n    line-height: 64px;\r\n}\r\n\r\n.hero h2 span {\r\n    color: #FFBC52;\r\n}\r\n\r\n.viewMenuButton {\r\n    background-color: #343434;\r\n    width: 370px;\r\n    height: 60px;\r\n    border-radius: 12px;\r\n    color: white;\r\n    z-index: 2;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n}\r\n\r\nbutton {\r\n    border: none;\r\n    height: 100px;\r\n    width: 100%;\r\n    font-size: 2rem;\r\n    position: relative;\r\n    background-color: inherit;\r\n    cursor: pointer;\r\n}\r\n\r\nnav button {\r\n    font-weight: 300;\r\n    color: #1f1f1f;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #e4e4e4;\r\n}\r\n\r\nbutton.active::after {\r\n        content: \"\";\r\n        background: black;\r\n        position: absolute;\r\n        bottom: 0;\r\n        left: 50%;\r\n        transform: translate(-50%);\r\n        height: 2px;\r\n        width: 75%;\r\n        opacity: 30%;\r\n}\r\n\r\n.mainContainer {\r\n    width: 60%;\r\n    border-radius: 12px;\r\n    height: 900px;\r\n    margin-top: 50px;\r\n    background: linear-gradient(rgba(58, 58, 58, 0.11), #F0EFED);\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 100px;\r\n}\r\n\r\n.hero button {\r\n    height: 50px;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.hero button:hover {\r\n    background-color: rgb(37, 37, 37);\r\n}\r\n\r\n.heroImage {\r\n    width: 100%;\r\n    height: 75%;\r\n    object-fit: cover;\r\n}\r\n\r\n#content {\r\n    margin-top: 50px;\r\n    width: 85%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 50px auto;\r\n    gap: 20px;\r\n}\r\n\r\n.specialItem {\r\n    width: 70%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 30px;\r\n}\r\n\r\n.specialItem:nth-child(even) {\r\n    align-self: flex-end;\r\n    flex-direction: row-reverse;\r\n    text-align: right;\r\n}\r\n\r\n.specialItem img {\r\n    width: 238px;\r\n    height: auto;\r\n    aspect-ratio: 1 / 1;\r\n    object-fit: cover;\r\n    border-radius: 50%;\r\n}\r\n\r\n.specialRight {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n.specialRight h2 {\r\n    font-size: 2rem;\r\n    font-weight: 300;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/appetizers.js":
/*!***************************!*\
  !*** ./src/appetizers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAppetizers: () => (/* binding */ loadAppetizers)\n/* harmony export */ });\n/* harmony import */ var _img_caviareggs_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/caviareggs.jpg */ \"./src/img/caviareggs.jpg\");\n\r\n\r\nfunction loadAppetizers() {\r\n    const container = document.getElementById(\"content\");\r\n    container.innerHTML = \"\";\r\n\r\n    const appetizerItem = document.createElement(\"div\");\r\n    appetizerItem.classList.add(\"specialItem\");\r\n\r\n    const appetizerRight = document.createElement(\"div\");\r\n    appetizerRight.classList.add(\"specialRight\");\r\n\r\n    const appetizerP = document.createElement(\"p\");\r\n    appetizerP.textContent = \"The creamy, tangy filling made from egg yolks, mayonnaise, and mustard is perfectly balanced with a touch of richness.\";\r\n\r\n    const appetizerh2 = document.createElement(\"h2\");\r\n    appetizerh2.innerHTML = \"Caviar-Topped <br> Deviled Eggs\";\r\n\r\n    const imgOne = document.createElement(\"img\");\r\n    imgOne.src = _img_caviareggs_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    appetizerRight.append(appetizerh2);\r\n    appetizerRight.append(appetizerP);\r\n    appetizerItem.append(imgOne);\r\n    appetizerItem.append(appetizerRight);\r\n\r\n    container.append(appetizerItem);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/appetizers.js?");

/***/ }),

/***/ "./src/drinks.js":
/*!***********************!*\
  !*** ./src/drinks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadDrinks: () => (/* binding */ loadDrinks)\n/* harmony export */ });\n/* harmony import */ var _img_martini_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/martini.jpg */ \"./src/img/martini.jpg\");\n\r\n\r\nfunction loadDrinks() {\r\n    const container = document.getElementById(\"content\");\r\n    container.innerHTML = \"\";\r\n\r\n    const drinkItem = document.createElement(\"div\");\r\n    drinkItem.classList.add(\"specialItem\");\r\n\r\n    const drinkRight = document.createElement(\"div\");\r\n    drinkRight.classList.add(\"specialRight\");\r\n\r\n    const drinkP = document.createElement(\"p\");\r\n    drinkP.textContent = \"A sweet and fruity cocktail made with vodka, raspberry liqueur, and pineapple juice.\";\r\n\r\n    const drinkh2 = document.createElement(\"h2\");\r\n    drinkh2.textContent = \"French Martini\";\r\n\r\n    const imgOne = document.createElement(\"img\");\r\n    imgOne.src = _img_martini_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    drinkRight.append(drinkh2);\r\n    drinkRight.append(drinkP);\r\n    drinkItem.append(imgOne);\r\n    drinkItem.append(drinkRight);\r\n\r\n    container.append(drinkItem);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/drinks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _specials_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .//specials.js */ \"./src/specials.js\");\n/* harmony import */ var _appetizers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .//appetizers.js */ \"./src/appetizers.js\");\n/* harmony import */ var _drinks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .//drinks.js */ \"./src/drinks.js\");\n\r\n\r\n\r\n\r\n\r\nconst headerBtn = document.querySelectorAll(\"button\");\r\nconst specialBtn = document.querySelector(\".specials\");\r\nconst appetizersBtn = document.querySelector(\".appetizers\");\r\nconst drinksBtn = document.querySelector(\".drinks\");\r\nconst viewMenuBtn = document.querySelector(\".viewMenuButton\");\r\n\r\n(0,_appetizers_js__WEBPACK_IMPORTED_MODULE_2__.loadAppetizers)();\r\n\r\nviewMenuBtn.addEventListener(\"click\", () => {\r\n    document.querySelector(\".mainContainer\").scrollIntoView({ behavior: \"smooth\"});\r\n});\r\n\r\nheaderBtn.forEach(button => {\r\n\r\n    button.addEventListener(\"click\", () => {\r\n\r\n        headerBtn.forEach(button => {\r\n            button.classList.remove(\"active\");\r\n        });\r\n        \r\n        button.classList.add(\"active\");\r\n    });\r\n});\r\n\r\nspecialBtn.addEventListener(\"click\", () => {\r\n    (0,_specials_js__WEBPACK_IMPORTED_MODULE_1__.loadSpecials)();\r\n});\r\n\r\nappetizersBtn.addEventListener(\"click\", () => {\r\n    (0,_appetizers_js__WEBPACK_IMPORTED_MODULE_2__.loadAppetizers)();\r\n});\r\n\r\ndrinksBtn.addEventListener(\"click\", () => {\r\n    (0,_drinks_js__WEBPACK_IMPORTED_MODULE_3__.loadDrinks)();\r\n});\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/specials.js":
/*!*************************!*\
  !*** ./src/specials.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadSpecials: () => (/* binding */ loadSpecials)\n/* harmony export */ });\n/* harmony import */ var _img_quichelorraine_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/quichelorraine.jpg */ \"./src/img/quichelorraine.jpg\");\n/* harmony import */ var _img_frenchtoast_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/frenchtoast.jpg */ \"./src/img/frenchtoast.jpg\");\n/* harmony import */ var _img_cremebrulee_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/cremebrulee.jpg */ \"./src/img/cremebrulee.jpg\");\n\r\n\r\n\r\n\r\nfunction loadSpecials() {\r\n    const container = document.getElementById(\"content\");\r\n    container.innerHTML = \"\";\r\n    \r\n    const specialItem = document.createElement(\"div\");\r\n    specialItem.classList.add(\"specialItem\");\r\n\r\n    const specialItemTwo = document.createElement(\"div\");\r\n    specialItemTwo.classList.add(\"specialItem\");\r\n\r\n    const specialItemThree = document.createElement(\"div\");\r\n    specialItemThree.classList.add(\"specialItem\");\r\n\r\n    const specialRight = document.createElement(\"div\");\r\n    specialRight.classList.add(\"specialRight\");\r\n\r\n    const specialRightTwo = document.createElement(\"div\");\r\n    specialRightTwo.classList.add(\"specialRight\");\r\n\r\n    const specialRightThree = document.createElement(\"div\");\r\n    specialRightThree.classList.add(\"specialRight\");\r\n\r\n    const imgOne = document.createElement(\"img\");\r\n    const imgTwo = document.createElement(\"img\");\r\n    const imgThree = document.createElement(\"img\");\r\n\r\n    imgOne.src = _img_quichelorraine_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    imgTwo.src = _img_frenchtoast_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n    imgThree.src = _img_cremebrulee_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\n    const specialOneh2 = document.createElement(\"h2\");\r\n    specialOneh2.textContent = \"Quiche Lorraine\";\r\n    const specialTwoh2 = document.createElement(\"h2\");\r\n    specialTwoh2.innerHTML = \"Pain Perdu <br> (French Toast)\";\r\n    const specialThreeh2 = document.createElement(\"h2\");\r\n    specialThreeh2.textContent = \"Creme Brulee\";\r\n\r\n    const specialOneP = document.createElement(\"p\");\r\n    specialOneP.textContent = \"Our classic pie with a custard filling of cream, eggs, and either ham or bacon, baked into a flaky crust.\";\r\n    const specialTwoP = document.createElement(\"p\");\r\n    specialTwoP.textContent = \"Soaked in a rich egg batter, pan-fried until golden. Served with fruit, whipped cream, or a dusting of powdered sugar.\";\r\n    const specialThreeP = document.createElement(\"p\");\r\n    specialThreeP.textContent = \"Creamy vanilla custard with a caramelized sugar crust.\";\r\n\r\n    specialRight.append(specialOneh2);\r\n    specialRight.append(specialOneP);\r\n\r\n    specialRightTwo.append(specialTwoh2);\r\n    specialRightTwo.append(specialTwoP);\r\n\r\n    specialRightThree.append(specialThreeh2);\r\n    specialRightThree.append(specialThreeP);\r\n    \r\n    specialItem.append(imgOne);\r\n    specialItem.append(specialRight);\r\n    specialItemTwo.append(imgTwo);\r\n    specialItemTwo.append(specialRightTwo);\r\n    specialItemThree.append(imgThree);\r\n    specialItemThree.append(specialRightThree);\r\n\r\n    container.append(specialItem, specialItemTwo, specialItemThree);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/specials.js?");

/***/ }),

/***/ "./src/img/caviareggs.jpg":
/*!********************************!*\
  !*** ./src/img/caviareggs.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ff2cdde7461aa3c7c3d8.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/img/caviareggs.jpg?");

/***/ }),

/***/ "./src/img/cremebrulee.jpg":
/*!*********************************!*\
  !*** ./src/img/cremebrulee.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"34e88cbf3b9cf560b240.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/img/cremebrulee.jpg?");

/***/ }),

/***/ "./src/img/dessertImage.png":
/*!**********************************!*\
  !*** ./src/img/dessertImage.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04c0689516d0281ac625.png\";\n\n//# sourceURL=webpack://restaurant/./src/img/dessertImage.png?");

/***/ }),

/***/ "./src/img/frenchtoast.jpg":
/*!*********************************!*\
  !*** ./src/img/frenchtoast.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"60612e477500c8ebcb0a.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/img/frenchtoast.jpg?");

/***/ }),

/***/ "./src/img/martini.jpg":
/*!*****************************!*\
  !*** ./src/img/martini.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d8effaf57bf333f3067d.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/img/martini.jpg?");

/***/ }),

/***/ "./src/img/quichelorraine.jpg":
/*!************************************!*\
  !*** ./src/img/quichelorraine.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0f07e42fb3d9e860088f.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/img/quichelorraine.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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