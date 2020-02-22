webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ProductList/ProductList.js":
/*!***********************************************!*\
  !*** ./components/ProductList/ProductList.js ***!
  \***********************************************/
/*! exports provided: ProductList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductList", function() { return ProductList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mock */ "./mock.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/ProductList/styles.js");
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product/Product */ "./components/ProductList/Product/Product.js");
var _jsxFileName = "D:\\frontend-test\\17media-frontend-exercise\\daily-drinks\\components\\ProductList\\ProductList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ProductList = function ProductList() {
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, _mock__WEBPACK_IMPORTED_MODULE_1__["DrinkingList"].map(function (drink) {
    return __jsx(_Product_Product__WEBPACK_IMPORTED_MODULE_3__["Product"], {
      key: drink.id,
      product: drink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }));
};



/***/ })

})
//# sourceMappingURL=index.js.e784de028e49beb2cae3.hot-update.js.map