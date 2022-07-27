"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/background.jpg */ \"./src/assets/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  text-decoration: none;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  color: #f5f5f5;\\n  font-family:\\n    system-ui,\\n    -apple-system,\\n    BlinkMacSystemFont,\\n    'Segoe UI',\\n    Roboto,\\n    Oxygen,\\n    Ubuntu,\\n    Cantarell,\\n    'Open Sans',\\n    'Helvetica Neue',\\n    sans-serif;\\n}\\n\\n:root {\\n  --color1: #ffe4f2;\\n  --color2: black;\\n  --color3: #00076f;\\n  --color4: #44008b;\\n  --color5: #9f45b0;\\n}\\n\\nheader {\\n  display: flex;\\n  width: 100%;\\n  height: 70px;\\n  background-color: var(--color2);\\n}\\n\\nnav {\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n\\n.search-form {\\n  margin: auto;\\n  margin-top: 50px;\\n  width: fit-content;\\n}\\n\\n.search-box {\\n  display: flex;\\n  align-items: center;\\n  background-color: var(--color2);\\n  height: 40px;\\n  border-radius: 50px;\\n  padding: 10px;\\n}\\n\\n.search-box input {\\n  border: none;\\n  outline: none;\\n  color: #f5f5f5;\\n  background: none;\\n}\\n\\n.search-box button {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  text-decoration: none;\\n  width: 30px;\\n  height: 30px;\\n  border-radius: 50px;\\n}\\n\\n.title {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 60px auto 80px auto;\\n  justify-content: center;\\n  align-items: center;\\n  text-shadow: 5px 3px gray;\\n}\\n\\n.title h1 {\\n  font-size: 75px;\\n  color: var(--color1);\\n  font-weight: 700;\\n  letter-spacing: 5px;\\n  text-align: center;\\n}\\n\\n.title p {\\n  margin-top: 20px;\\n  color: var(--color1);\\n  text-align: center;\\n  width: 60%;\\n  line-height: 2.5rem;\\n  font-size: 30px;\\n  text-shadow: none;\\n}\\n\\n.logo {\\n  display: flex;\\n  text-decoration: none;\\n}\\n\\n.logo i {\\n  display: flex;\\n  position: absolute;\\n  font-size: 30px;\\n  color: var(--color1);\\n}\\n\\n.logo p {\\n  padding-left: 50px;\\n  display: flex;\\n  font-size: 30px;\\n  font-weight: bold;\\n  color: var(--color1);\\n}\\n\\n.links {\\n  display: flex;\\n  list-style: none;\\n  gap: 30px;\\n}\\n\\n.links li {\\n  list-style: none;\\n  color: #ffe4f2;\\n}\\n\\n.links li a {\\n  color: var(--color1);\\n  text-decoration: none;\\n}\\n\\n/* CARD STYLES */\\n\\n.grid-container {\\n  width: 80%;\\n  margin: 0 auto;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\n  gap: 30px;\\n}\\n\\n.card {\\n  border-radius: 5px;\\n  background-color: var(--color4);\\n  height: 430px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  padding: 30px;\\n}\\n\\n.card:hover {\\n  border: white solid 1px;\\n}\\n\\n.image-container {\\n  width: 100%;\\n  height: 200px;\\n  margin: 0 auto;\\n  margin-bottom: 10px;\\n  cursor: pointer;\\n}\\n\\n.item-image {\\n  border-radius: 5px;\\n  object-fit: contain;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.item-info {\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  color: whitesmoke;\\n  font-size: 0.8rem;\\n  justify-content: center;\\n  padding-top: 85px;\\n  gap: 20px;\\n}\\n\\n.likes-container {\\n  display: flex;\\n  gap: 20px;\\n}\\n\\n.fa-heart {\\n  color: rgb(148, 148, 148);\\n  cursor: pointer;\\n  transition: 0.5s;\\n  font-size: 20px;\\n}\\n\\n.fa-heart:hover {\\n  color: rgb(250, 53, 53);\\n}\\n\\n.comments-button {\\n  display: block;\\n  margin: auto;\\n  padding: 7px;\\n  background-color: var(--color3);\\n  border: #00076f solid 1px;\\n  color: var(--color1);\\n  cursor: pointer;\\n  border-radius: 3px;\\n  transition: 1s;\\n  font-weight: bold;\\n  position: relative;\\n}\\n\\n.comments-button:hover {\\n  background-color: var(--color1);\\n  color: var(--color3);\\n  border: var(--color3);\\n}\\n\\n.footer {\\n  background-color: #000;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  position: fixed;\\n  bottom: 0;\\n  width: 100%;\\n  text-align: center;\\n  padding: 30px 0;\\n}\\n\\n.footer-link {\\n  text-decoration: none;\\n  cursor: pointer;\\n  color: #9f45b0;\\n}\\n\\n@media only screen and (max-width: 425px) {\\n  .text-logo {\\n    display: none;\\n  }\\n}\\n\\n/* MODAL SECTION */\\n\\n.modal {\\n  position: fixed;\\n  z-index: 1;\\n  padding-left: 350px;\\n  bottom: 0;\\n  right: 0;\\n  overflow: auto;\\n  display: none;\\n  justify-content: center;\\n  border: 1px solid #ebecf0;\\n  background-color: rgba(0, 0, 0, 0.8);\\n  width: 100%;\\n  height: 100%;\\n  position: fixed;\\n}\\n\\n.popup {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 0 1.5em 1.5em 1.5em;\\n  gap: 1em;\\n  background: var(--color3);\\n  margin: 10%;\\n  overflow: hidden;\\n}\\n\\n.pop-up-title-div {\\n  display: flex;\\n  justify-content: flex-end;\\n  gap: 110px;\\n}\\n\\n.close-btn {\\n  border: none;\\n  font-size: 2rem;\\n  background-color: #00076f;\\n  color: var(--color1);\\n  padding-top: 35px;\\n}\\n\\n.close-btn:hover {\\n  border: var(--color5) 1px solid;\\n  color: var(--color5);\\n  font-weight: bolder;\\n}\\n\\n.popup-img {\\n  width: 50%;\\n  border-radius: 15px;\\n  padding-top: unset;\\n}\\n\\n.form-div {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.comment-form {\\n  display: flex;\\n  flex-direction: column;\\n  width: 60%;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.comment-form input,\\n.comment-form textarea {\\n  width: 80%;\\n  height: 20%;\\n}\\n\\n.comment-btn {\\n  border: var(--color3) 1px solid;\\n  background: #fff;\\n  background-color: var(--color1);\\n  color: var(--color3);\\n  padding: 10px 10px;\\n}\\n\\n.comment-btn:hover {\\n  border: #9f45b0 1px solid;\\n  background-color: var(--color5);\\n  color: #ffe4f2;\\n  font-weight: bolder;\\n}\\n\\nh3 {\\n  padding-bottom: 10px;\\n  font-size: 20px;\\n}\\n\\n.pop-up-title {\\n  padding-top: 40px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_commentModal_populate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/commentModal/populate.js */ \"./src/modules/commentModal/populate.js\");\n/* harmony import */ var _modules_likes_getLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/likes/getLikes.js */ \"./src/modules/likes/getLikes.js\");\n\n\n\n\n// initialize elements\ndocument.addEventListener('DOMContentLoaded', _modules_commentModal_populate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nconst getLikes = async () => {\n  const likes = await (0,_modules_likes_getLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  console.log(likes);\n};\ngetLikes();\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appId\": () => (/* binding */ appId),\n/* harmony export */   \"baseUrl\": () => (/* binding */ baseUrl),\n/* harmony export */   \"tvApi\": () => (/* binding */ tvApi)\n/* harmony export */ });\n// API documentation\nconst tvApi = 'https://api.tvmaze.com';\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\n// I got it using postman https://www.postman.com/\nconst appId = 'yOdv0JXV8ssnN9f9thVW';\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/commentModal/getComments.js":
/*!*************************************************!*\
  !*** ./src/modules/commentModal/getComments.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yOdv0JXV8ssnN9f9thVW/comments';\n\n// const getCount = (id) => comments.length;\n\nconst getComments = async (id) => {\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yOdv0JXV8ssnN9f9thVW/comments?item_id=${id}`, {\n    method: 'GET',\n    headers: {\n      Accept: 'application/json',\n    },\n  });\n  const jsonResponse = await response.json();\n  return jsonResponse;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/commentModal/getComments.js?");

/***/ }),

/***/ "./src/modules/commentModal/populate.js":
/*!**********************************************!*\
  !*** ./src/modules/commentModal/populate.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_shows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get-shows.js */ \"./src/modules/get-shows.js\");\n\n\nconst populate = async () => {\n  await (0,_get_shows_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_get_shows_js__WEBPACK_IMPORTED_MODULE_0__.renderShows)();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populate);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/commentModal/populate.js?");

/***/ }),

/***/ "./src/modules/commentModal/postComments.js":
/*!**************************************************!*\
  !*** ./src/modules/commentModal/postComments.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postComments = async (id, username, comment, creationDate) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yOdv0JXV8ssnN9f9thVW/comments', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n      username,\n      comment,\n      creation_date: creationDate,\n    }),\n  });\n  const jsonResponse = await response.json();\n  return jsonResponse;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComments);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/commentModal/postComments.js?");

/***/ }),

/***/ "./src/modules/element-info.js":
/*!*************************************!*\
  !*** ./src/modules/element-info.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentModal_postComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentModal/postComments.js */ \"./src/modules/commentModal/postComments.js\");\n/* harmony import */ var _commentModal_getComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentModal/getComments.js */ \"./src/modules/commentModal/getComments.js\");\n/* harmony import */ var _likes_postLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes/postLikes.js */ \"./src/modules/likes/postLikes.js\");\n\n\n\n\n// CREATE ELEMENTS BASED ON INDEX.HTML\nclass elementInfo {\n  static renderCard = (title, imgUrl, itemID) => {\n    const cardContainer = document.querySelector('.grid-container');\n    // let likesCount = 0;\n    const card = document.createElement('div');\n    card.classList.add('card');\n    const id = itemID;\n\n    const imageContainer = document.createElement('div');\n    imageContainer.classList.add('image-container');\n\n    const image = document.createElement('img');\n    image.classList.add('item-image');\n    image.src = imgUrl;\n\n    const itemInfo = document.createElement('div');\n    itemInfo.classList.add('item-info');\n\n    const itemTitle = document.createElement('h2');\n    itemTitle.classList.add('item-title');\n    itemTitle.innerText = title;\n\n    const likesContainer = document.createElement('div');\n    likesContainer.classList.add('likes-container');\n\n    const heartIcon = document.createElement('i');\n    heartIcon.classList.add('fa-solid', 'fa-heart');\n\n    const commentsButton = document.createElement('button');\n    commentsButton.classList.add('comments-button');\n    commentsButton.textContent = 'Comments';\n    // code starts\n    commentsButton.addEventListener('click', () => {\n      const modal = document.querySelector('.modal');\n      const popup = document.createElement('div');\n      popup.classList.add('popup');\n\n      const closeBtn = document.createElement('button');\n      closeBtn.innerHTML = '&#x3A7';\n      closeBtn.classList.add('close-btn');\n\n      const popupImg = image.cloneNode(true);\n      popup.classList.add('popup-img');\n\n      const comments = document.createElement('div');\n      (0,_commentModal_getComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      comments.textContent = 'Comments()';\n\n      const formDiv = document.createElement('div');\n      formDiv.classList.add('form-div');\n      const h3 = document.createElement('h3');\n      h3.textContent = 'Add a comment';\n\n      const form = document.createElement('form');\n      form.classList.add('comment-form');\n      const name = document.createElement('input');\n      const commentI = document.createElement('textarea');\n      const commentBtn = document.createElement('button');\n      commentBtn.classList.add('comment-btn');\n      commentBtn.textContent = 'Comment';\n      commentBtn.addEventListener('click', async () => {\n        await (0,_commentModal_postComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, name.value, commentI.value);\n      });\n      form.append(name, commentI, commentBtn);\n      formDiv.append(h3, form);\n      const titleDiv = document.createElement('div');\n      titleDiv.classList.add('pop-up-title-div');\n      const popUpTitle = itemTitle.cloneNode(true);\n      popUpTitle.classList.add('pop-up-title');\n      titleDiv.append(popUpTitle, closeBtn);\n      popup.append(titleDiv, popupImg, comments, formDiv);\n\n      modal.style.display = 'block';\n      modal.appendChild(popup);\n\n      closeBtn.addEventListener('click', () => {\n        popup.remove();\n        modal.style.display = 'none';\n      });\n    });\n    // code ends\n\n    // ADD LIKES - RECORDED ON THE Involvement API\n    heartIcon.addEventListener('click', async (e) => {\n      e.preventDefault();\n      await (0,_likes_postLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(itemID);\n    });\n\n    // append elements to the card container\n    cardContainer.append(card);\n    card.append(imageContainer, itemInfo, commentsButton);\n\n    imageContainer.append(image);\n    itemInfo.append(itemTitle, likesContainer);\n    likesContainer.append(heartIcon);\n\n    // PRINT TOTAL LIKES - RECORDED ON THE Involvement API\n\n    // likesCount = data;\n    // const likes = document.createElement('span');\n    // likes.classList.add('likes-counter');\n    // likes.innerHTML = `Likes: ${data}`;\n    // likesContainer.append(likes);\n\n    // set an item counter\n    // static itemCounter = () => {\n    //   const cardContainer = document.querySelector('.grid-container');\n    //   const count = cardContainer.childElementCount;\n    //   const itemCounter = document.querySelector('.item-counter');\n    //   itemCounter.textContent = `Displaying ${count} shows:`;\n    // };\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementInfo);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/element-info.js?");

/***/ }),

/***/ "./src/modules/get-shows.js":
/*!**********************************!*\
  !*** ./src/modules/get-shows.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"renderShows\": () => (/* binding */ renderShows)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _element_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-info.js */ \"./src/modules/element-info.js\");\n\n\n\nlet shows = [];\nconst renderShows = () => {\n  shows.forEach((data) => {\n    if (data.image !== null) {\n      _element_info_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderCard(data.name, data.image.medium, data.id, data.summary);\n    }\n  });\n};\n\n// GET SHOWS FROM API https://www.tvmaze.com/api/shows\nconst getShows = async () => {\n  if (shows.length) {\n    return shows;\n  }\n  const response = await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__.tvApi}/show`);\n  const data = await response.json();\n  // we can display more or less shows if we like\n  shows = data.slice(0, 99);\n  return shows;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShows);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/get-shows.js?");

/***/ }),

/***/ "./src/modules/likes/getLikes.js":
/*!***************************************!*\
  !*** ./src/modules/likes/getLikes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import { baseUrl, appId } from '../api.js';\n\nconst getTotalLikes = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yOdv0JXV8ssnN9f9thVW/likes', {\n    method: 'GET',\n    headers: {\n      Accept: 'application/json',\n    },\n  });\n  const data = await response.json();\n  // const results = data.find((item) => +item.item_id === +id);\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTotalLikes);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/likes/getLikes.js?");

/***/ }),

/***/ "./src/modules/likes/postLikes.js":
/*!****************************************!*\
  !*** ./src/modules/likes/postLikes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// POST ACTION\nconst addLike = async (id) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yOdv0JXV8ssnN9f9thVW/likes', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n    }),\n  });\n  const jsonResponse = await response.json();\n  return jsonResponse;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/likes/postLikes.js?");

/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6045ee913940155a80a1.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/background.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);