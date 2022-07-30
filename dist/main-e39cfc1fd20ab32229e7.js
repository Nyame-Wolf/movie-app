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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_commentModal_populate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/commentModal/populate.js */ \"./src/modules/commentModal/populate.js\");\n\n\n\n// initialize elements\ndocument.addEventListener('DOMContentLoaded', _modules_commentModal_populate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appId\": () => (/* binding */ appId),\n/* harmony export */   \"baseUrl\": () => (/* binding */ baseUrl),\n/* harmony export */   \"tvApi\": () => (/* binding */ tvApi)\n/* harmony export */ });\n// API documentation\nconst tvApi = 'https://api.tvmaze.com';\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';\n// I got it using postman https://www.postman.com/\n\nconst appId = 'nrAjzLBs75SIi4fgMgld';\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/commentModal/commentPopulate.js":
/*!*****************************************************!*\
  !*** ./src/modules/commentModal/commentPopulate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tableData = (d) => {\n  const td = document.createElement('td');\n  td.textContent = d;\n  return td;\n};\n\nconst createComment = (data) => {\n  const dataRow = document.createElement('tr');\n  dataRow.classList.add('comments-count');\n  const dateD = tableData(`${data.creation_date}`);\n  const user = tableData(`${data.username}`);\n  const comment = tableData(`${data.comment}`);\n  dataRow.append(dateD, user, comment);\n  return dataRow;\n};\nconst createComments = (comments) => {\n  const commentT = document.querySelector('.tbody');\n  let child = commentT.lastElementChild;\n  while (child) {\n    commentT.removeChild(child);\n    child = commentT.lastElementChild;\n  }\n  comments.forEach((comment) => {\n    const aComment = createComment(comment);\n    commentT.appendChild(aComment);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createComments);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/commentModal/commentPopulate.js?");

/***/ }),

/***/ "./src/modules/commentModal/comments-count.js":
/*!****************************************************!*\
  !*** ./src/modules/commentModal/comments-count.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getCommentsCount = () => {\n  const comments = document.querySelectorAll('.comments-count');\n  return comments.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCommentsCount);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/commentModal/comments-count.js?");

/***/ }),

/***/ "./src/modules/commentModal/getComments.js":
/*!*************************************************!*\
  !*** ./src/modules/commentModal/getComments.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ \"./src/modules/api.js\");\n\n\nconst getComments = async (id) => {\n  const response = await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/${_api_js__WEBPACK_IMPORTED_MODULE_0__.appId}/comments?item_id=${id}`, {\n    method: 'GET',\n    headers: {\n      Accept: 'application/json',\n    },\n  });\n  if (response.status === 200) {\n    return response.json();\n  }\n  const jsonResponse = await response.json();\n\n  return Promise.reject(jsonResponse);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/commentModal/getComments.js?");

/***/ }),

/***/ "./src/modules/commentModal/modal.js":
/*!*******************************************!*\
  !*** ./src/modules/commentModal/modal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postComments.js */ \"./src/modules/commentModal/postComments.js\");\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/commentModal/getComments.js\");\n/* harmony import */ var _commentPopulate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentPopulate.js */ \"./src/modules/commentModal/commentPopulate.js\");\n/* harmony import */ var _comments_count_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments-count.js */ \"./src/modules/commentModal/comments-count.js\");\n\n\n\n\n\nconst modal = async (title, imgUrl, itemID, summary) => {\n  const modal = document.querySelector('.modal');\n  const popup = document.createElement('div');\n  popup.classList.add('popup');\n\n  const imgSummary = document.createElement('div');\n  imgSummary.classList.add('img-summary');\n  const popupImg = document.createElement('img');\n  popupImg.classList.add('popup-img');\n  popupImg.src = imgUrl;\n\n  const itemSummary = document.createElement('div');\n\n  itemSummary.classList.add('summary');\n  itemSummary.innerHTML = summary;\n  imgSummary.append(popupImg, itemSummary);\n\n  const itemInfo = document.createElement('div');\n  itemInfo.classList.add('item-info');\n\n  const popUpTitle = document.createElement('h2');\n  popUpTitle.classList.add('item-title');\n  popUpTitle.innerText = title;\n\n  const closeBtn = document.createElement('button');\n  closeBtn.innerHTML = '&#x3A7';\n  closeBtn.classList.add('close-btn');\n\n  const comments = document.createElement('div');\n  comments.classList.add('pop-up-comments');\n\n  const commentsContainer = document.createElement('div');\n  commentsContainer.classList.add('div-comments-container');\n\n  const commentTable = document.createElement('table');\n  commentTable.classList.add('comments');\n  const tableRow = document.createElement('tr');\n  const dateHeader = document.createElement('th');\n  dateHeader.textContent = 'Date';\n  const nameHeader = document.createElement('th');\n  nameHeader.textContent = 'Created by';\n  const commentHeader = document.createElement('th');\n  commentHeader.textContent = 'Comment';\n  tableRow.append(dateHeader, nameHeader, commentHeader);\n\n  const tableBody = document.createElement('tbody');\n  tableBody.classList.add('tbody');\n  commentTable.append(tableRow, tableBody);\n\n  const updateComments = async () => {\n    const c = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(itemID).catch(() => []);\n    if (c.length) {\n      (0,_commentPopulate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(c);\n      const commentCount = (0,_comments_count_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n      comments.textContent = `Comments (${commentCount})`;\n    } else {\n      comments.textContent = 'Comments (0)';\n    }\n  };\n  updateComments();\n  const formDiv = document.createElement('div');\n  formDiv.classList.add('form-div');\n  const h3 = document.createElement('h3');\n  h3.textContent = 'Leave a comment';\n\n  const form = document.createElement('form');\n  form.classList.add('comment-form');\n  const name = document.createElement('input');\n  name.setAttribute('required', '');\n  name.setAttribute('placeholder', 'Enter name here');\n  const commentI = document.createElement('textarea');\n  commentI.setAttribute('required', '');\n  commentI.setAttribute('placeholder', 'Enter comment here');\n  const commentBtn = document.createElement('button');\n  commentBtn.classList.add('comment-btn');\n  commentBtn.textContent = 'Comment';\n  form.append(name, commentI, commentBtn);\n\n  commentBtn.addEventListener('click', async (e) => {\n    e.preventDefault();\n    await (0,_postComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(itemID, name.value, commentI.value, new Date());\n    updateComments();\n    form.reset();\n  });\n\n  formDiv.append(h3, form);\n  const titleDiv = document.createElement('div');\n  titleDiv.classList.add('pop-up-title-div');\n  popUpTitle.classList.add('pop-up-title');\n  titleDiv.append(popUpTitle, closeBtn);\n  commentsContainer.append(formDiv, commentTable);\n  popup.append(titleDiv, imgSummary, comments, commentsContainer);\n\n  modal.style.display = 'flex';\n  modal.appendChild(popup);\n\n  closeBtn.addEventListener('click', () => {\n    popup.remove();\n    modal.style.display = 'none';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/commentModal/modal.js?");

/***/ }),

/***/ "./src/modules/commentModal/populate.js":
/*!**********************************************!*\
  !*** ./src/modules/commentModal/populate.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_shows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get-shows.js */ \"./src/modules/get-shows.js\");\n\n\nconst populate = async () => {\n  await (0,_get_shows_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_get_shows_js__WEBPACK_IMPORTED_MODULE_0__.renderShows)();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populate);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/commentModal/populate.js?");

/***/ }),

/***/ "./src/modules/commentModal/postComments.js":
/*!**************************************************!*\
  !*** ./src/modules/commentModal/postComments.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ \"./src/modules/api.js\");\n\n\nconst postComments = async (id, username, comment, creationDate) => {\n  const response = await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/${_api_js__WEBPACK_IMPORTED_MODULE_0__.appId}/comments`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n      username,\n      comment,\n      creation_date: creationDate,\n    }),\n  });\n  const jsonResponse = await response.text();\n  return jsonResponse;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComments);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/commentModal/postComments.js?");

/***/ }),

/***/ "./src/modules/element-info.js":
/*!*************************************!*\
  !*** ./src/modules/element-info.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentModal_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentModal/modal.js */ \"./src/modules/commentModal/modal.js\");\n/* harmony import */ var _likes_postLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes/postLikes.js */ \"./src/modules/likes/postLikes.js\");\n\n\n\n// CREATE ELEMENTS BASED ON INDEX.HTML\nclass elementInfo {\n  static showCount = (shows) => {\n    const showsNumber = document.querySelector('.item-counter');\n    showsNumber.innerText = shows.length;\n  }\n\n  static renderCard = (title, imgUrl, itemID, summary, like) => {\n    const cardContainer = document.querySelector('.grid-container');\n    const card = document.createElement('div');\n    card.classList.add('card');\n\n    const imageContainer = document.createElement('div');\n    imageContainer.classList.add('image-container');\n\n    const image = document.createElement('img');\n    image.classList.add('item-image');\n    image.src = imgUrl;\n\n    const itemInfo = document.createElement('div');\n    itemInfo.classList.add('item-info');\n\n    const itemTitle = document.createElement('h2');\n    itemTitle.classList.add('item-title');\n    itemTitle.innerText = title;\n\n    const likesContainer = document.createElement('div');\n    likesContainer.classList.add('likes-container');\n    const likesNumber = document.createElement('span');\n    likesNumber.textContent = like;\n\n    // PRINT TOTAL LIKES - RECORDED ON THE Involvement API\n    const updateLikes = () => {\n      const currentLikes = likesNumber.innerText;\n      likesNumber.innerText = currentLikes ? Number(currentLikes) + 1 : 1;\n    };\n\n    const heartIcon = document.createElement('i');\n    heartIcon.classList.add('fa-solid', 'fa-heart');\n\n    const commentsButton = document.createElement('button');\n    commentsButton.classList.add('comments-button');\n    commentsButton.textContent = 'Comments';\n    // code starts\n    commentsButton.addEventListener('click', () => (0,_commentModal_modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, imgUrl, itemID, summary));\n    // code ends\n\n    // ADD LIKES - RECORDED ON THE Involvement API\n    heartIcon.addEventListener('click', async (e) => {\n      e.preventDefault();\n      updateLikes();\n      await (0,_likes_postLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(itemID);\n    });\n\n    // append elements to the card container\n    cardContainer.append(card);\n    card.append(imageContainer, itemInfo, commentsButton);\n\n    imageContainer.append(image);\n    itemInfo.append(itemTitle, likesContainer);\n    likesContainer.append(heartIcon, likesNumber);\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementInfo);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/element-info.js?");

/***/ }),

/***/ "./src/modules/get-shows.js":
/*!**********************************!*\
  !*** ./src/modules/get-shows.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"renderShows\": () => (/* binding */ renderShows)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _element_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-info.js */ \"./src/modules/element-info.js\");\n/* harmony import */ var _likes_getLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes/getLikes.js */ \"./src/modules/likes/getLikes.js\");\n\n\n\n\nlet shows = [];\nconst renderShows = () => {\n  _element_info_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showCount(shows);\n  shows.forEach((data) => {\n    if (data.image !== null) {\n      _element_info_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderCard(data.name, data.image.medium, data.id, data.summary, data.likes.likes);\n    }\n  });\n};\n\n// GET SHOWS FROM API https://www.tvmaze.com/api/shows\nconst getShows = async () => {\n  if (shows.length > 0) {\n    return shows;\n  }\n  const response = await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__.tvApi}/show`);\n  const data = await response.json();\n\n  // we can display more or less shows if we like\n  shows = data.slice(0, 240);\n  const likes = (await (0,_likes_getLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()).reduce((likesById, like) => {\n    likesById[like.item_id] = like;\n    return likesById;\n  }, {});\n  shows = shows.map((show) => {\n    show.likes = likes[show.id] || {};\n    return show;\n  });\n  return shows;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShows);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/get-shows.js?");

/***/ }),

/***/ "./src/modules/likes/getLikes.js":
/*!***************************************!*\
  !*** ./src/modules/likes/getLikes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getTotalLikes = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yOdv0JXV8ssnN9f9thVW/likes', {\n    method: 'GET',\n    headers: {\n      Accept: 'application/json',\n    },\n  });\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTotalLikes);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/likes/getLikes.js?");

/***/ }),

/***/ "./src/modules/likes/postLikes.js":
/*!****************************************!*\
  !*** ./src/modules/likes/postLikes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// POST ACTION\nconst addLike = async (id) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yOdv0JXV8ssnN9f9thVW/likes', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n    }),\n  });\n  const jsonResponse = await response.text();\n  return jsonResponse;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/likes/postLikes.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);