webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ShoppingCart/ShoppingCart.js":
/*!*************************************************!*\
  !*** ./components/ShoppingCart/ShoppingCart.js ***!
  \*************************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/ShoppingCart/styles.js");
var _jsxFileName = "D:\\frontend-test\\17media-frontend-exercise\\daily-drinks\\components\\ShoppingCart\\ShoppingCart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ShoppingCart = function ShoppingCart() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      toggle = _useState[0],
      setToggle = _useState[1];

  var products = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.cart.products;
  });
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    toggle: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Cart"], {
    toggle: toggle,
    onClick: function onClick() {
      return setToggle(function (currToggle) {
        return !currToggle;
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), toggle && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["PurchaseContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, products && products.map(function (product) {
    var id = product.id,
        imgUrl = product.imgUrl,
        name = product.name,
        quantity = product.quantity,
        price = product.price;
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Item"], {
      key: id,
      imgUrl: imgUrl,
      prodName: name,
      quantity: quantity,
      totalPrice: price,
      removeProduct: product,
      changeProductQuantity: product,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    });
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Checkout"], {
    totalPrice: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })));
};



/***/ })

})
//# sourceMappingURL=index.js.79a91b6884a97888527f.hot-update.js.map