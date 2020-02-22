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
/* harmony import */ var _services_cart_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart/actions */ "./services/cart/actions.js");
var _jsxFileName = "D:\\frontend-test\\17media-frontend-exercise\\daily-drinks\\components\\ShoppingCart\\ShoppingCart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ShoppingCart = function ShoppingCart() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      toggle = _useState[0],
      setToggle = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var products = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.cart.products;
  });

  var handleRemoveProduct = function handleRemoveProduct(product) {
    return function (event) {
      dispatch(Object(_services_cart_actions__WEBPACK_IMPORTED_MODULE_3__["removeProduct"])(product));
    };
  };

  var handleIncreaseProductQuantity = function handleIncreaseProductQuantity(product) {
    return function (event) {
      dispatch(Object(_services_cart_actions__WEBPACK_IMPORTED_MODULE_3__["increaseProductQuantity"])(product));
    };
  };

  var handleDecreaseProductQuantity = function handleDecreaseProductQuantity(product) {
    return function (event) {
      dispatch(Object(_services_cart_actions__WEBPACK_IMPORTED_MODULE_3__["decreaseProductQuantity"])(product));
    };
  };

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    toggle: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
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
      lineNumber: 30
    },
    __self: this
  }), toggle && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["PurchaseContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, products && products.map(function (product) {
    var id = product.id,
        imgUrl = product.imgUrl,
        name = product.name,
        quantity = product.quantity,
        totalPrice = product.totalPrice;
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Item"], {
      key: id,
      imgUrl: imgUrl,
      prodName: name,
      quantity: quantity,
      totalPrice: totalPrice,
      removeProduct: handleRemoveProduct(product),
      increaseProductQuantity: handleIncreaseProductQuantity(product),
      decreaseProductQuantity: handleDecreaseProductQuantity(product),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    });
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Checkout"], {
    totalPrice: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })));
};



/***/ })

})
//# sourceMappingURL=index.js.3063552d05a69b3274a1.hot-update.js.map