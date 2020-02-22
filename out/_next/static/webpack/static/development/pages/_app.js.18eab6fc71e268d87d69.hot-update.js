webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/ShoppingCart/styles.js":
/*!*******************************************!*\
  !*** ./components/ShoppingCart/styles.js ***!
  \*******************************************/
/*! exports provided: Container, Cart, PurchaseContainer, Item, Checkout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContainer", function() { return PurchaseContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return Checkout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "D:\\frontend-test\\17media-frontend-exercise\\daily-drinks\\components\\ShoppingCart\\styles.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-19hi9ei-0"
})(["background:white;display:flex;justify-content:end;align-items:baseline;position:fixed;flex-direction:column;width:100%;height:", ";background:#ffffff;box-shadow:rgba(0,0,0,0.3) 0px 5px 5px 0px;transition:0.3s all;user-select:none;@media (min-width:768px){transition:0.3s width;height:100%;width:", ";right:0;border:rgba(0,0,0,0.1);}"], function (props) {
  return props.toggle ? '100%' : '50px';
}, function (props) {
  return props.toggle ? '450px' : '0';
});
var Cart = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__Cart",
  componentId: "sc-19hi9ei-1"
})(["height:", ";width:100%;background:url(static/cart.svg) no-repeat;background-color:white;background-size:contain;background-position:top;border-bottom:", ";&:hover{cursor:pointer;}@media (min-width:768px){position:absolute;height:60px;width:", ";right:", ";}"], function (props) {
  return props.toggle ? '130px' : '50px';
}, function (props) {
  return props.toggle ? 'solid 1px rgba(0, 0, 0, 0.1)' : '0';
}, function (props) {
  return props.toggle ? '100%' : '60px';
}, function (props) {
  return props.toggle ? 'auto' : '20px';
});
var PurchaseContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__PurchaseContainer",
  componentId: "sc-19hi9ei-2"
})(["width:100%;display:flex;flex-direction:column;overflow-y:scroll;padding-bottom:100px;@media (min-width:768px){padding:75px 15px 100px 15px;}"]);

var Item = function Item(props) {
  var imgUrl = props.imgUrl,
      prodName = props.prodName,
      quantity = props.quantity,
      totalPrice = props.totalPrice,
      removeProduc = props.removeProduc,
      IncreaseProductQuantity = props.IncreaseProductQuantity,
      DecreaseProductQuantity = props.DecreaseProductQuantity;
  return __jsx(ItemContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(ItemImg, {
    src: imgUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(ItemContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(ItemSpan, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, prodName), __jsx(ItemSpan, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "\u6578\u91CF:", quantity)), __jsx(ItemControl, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(ItemCancel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(ItemSpan, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "$", totalPrice, " NTD"), __jsx(ItemModifyContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(ItemModify, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "+"), __jsx(ItemModify, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "-"))));
};

var ItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__ItemContainer",
  componentId: "sc-19hi9ei-3"
})(["width:95%;display:flex;align-items:center;justify-content:space-between;height:150px;padding:10px;border-bottom:solid 1px rgba(0,0,0,0.2);"]);
var ItemImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "styles__ItemImg",
  componentId: "sc-19hi9ei-4"
})(["flex:1;width:100px;height:100px;"]);
var ItemContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__ItemContent",
  componentId: "sc-19hi9ei-5"
})(["flex:2;display:flex;justify-content:center;align-items:baseline;flex-direction:column;padding:5px 15px;"]);
var ItemSpan = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "styles__ItemSpan",
  componentId: "sc-19hi9ei-6"
})(["font-weight:bold;margin:2px 0px;"]);
var ItemCancel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__ItemCancel",
  componentId: "sc-19hi9ei-7"
})(["width:16px;height:16px;background-size:auto 100%;background-image:url('static/sprite_delete-icon.png');background-repeat:no-repeat;margin-bottom:16px;&:hover{cursor:pointer;}"]);
var ItemModifyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__ItemModifyContainer",
  componentId: "sc-19hi9ei-8"
})(["width:100%;padding:5px;display:flex;justify-content:flex-end;"]);
var ItemModify = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__ItemModify",
  componentId: "sc-19hi9ei-9"
})(["width:25px;height:25px;background:#ececec;display:flex;justify-content:center;align-items:center;&:hover{cursor:pointer;color:white;background:black;}"]);
var ItemControl = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__ItemControl",
  componentId: "sc-19hi9ei-10"
})(["flex:1;display:flex;align-items:flex-end;justify-content:center;flex-direction:column;"]);

var Checkout = function Checkout(props) {
  var totalPrice = props.totalPrice;
  return __jsx(CheckoutContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx(CheckContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx(CheckoutTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "$", totalPrice), __jsx(CheckoutButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "\u7D50\u5E33")));
};

var CheckoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__CheckoutContainer",
  componentId: "sc-19hi9ei-11"
})(["display:flex;justify-content:center;align-items:center;background:white;box-sizing:border-box;padding:5px 15px;position:absolute;bottom:0;width:100%;height:100px;z-index:2;box-shadow:rgba(0,0,0,0.2) 0px -5px 5px 0px;"]);
var CheckContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__CheckContainer",
  componentId: "sc-19hi9ei-12"
})(["display:flex;align-items:center;justify-content:space-between;width:100%;height:50px;"]);
var CheckoutButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__CheckoutButton",
  componentId: "sc-19hi9ei-13"
})(["width:50%;text-align:center;font-weight:bold;color:#ffffff;background:#000000;border-radius:5px;padding:8px 16px;transition:300ms background;box-shadow:rgba(0,0,0,0.3) 2px 2px 5px 0px;&:hover{cursor:pointer;background:rgba(0,0,0,0.4);}"]);
var CheckoutTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "styles__CheckoutTitle",
  componentId: "sc-19hi9ei-14"
})(["font-size:20px;font-weight:bold;&:before{content:'\u7E3D\u5171: ';font-size:10px;}&:after{content:' NTD';font-size:10px;}"]);


/***/ })

})
//# sourceMappingURL=_app.js.18eab6fc71e268d87d69.hot-update.js.map