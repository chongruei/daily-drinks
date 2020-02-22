webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./services/cart/actions.js":
/*!**********************************!*\
  !*** ./services/cart/actions.js ***!
  \**********************************/
/*! exports provided: addProduct, removeProduct, changeProductQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProduct", function() { return removeProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeProductQuantity", function() { return changeProductQuantity; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./services/cart/actionTypes.js");


var addProduct = function addProduct(product) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_PRODUCT"],
    payload: product
  };
};

var removeProduct = function removeProduct(product) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["REMOVE_PRODUCT"],
    payload: product
  };
};

var changeProductQuantity = function changeProductQuantity(product) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_PRODUCT_QUANTITY"],
    payload: product
  };
};



/***/ })

})
//# sourceMappingURL=_app.js.527e77b8b6ce471688ce.hot-update.js.map