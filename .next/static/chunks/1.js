(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./components/elements/ThemeSwitch.js":
/*!********************************************!*\
  !*** ./components/elements/ThemeSwitch.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\david\\OneDrive\\Desktop\\neftify\\components\\elements\\ThemeSwitch.js",
    _s = $RefreshSig$();

 // import "./styles.css";

function ThemeSwitch() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () {
    return JSON.parse(localStorage.getItem("toggleTheme")) || "light-theme";
  }),
      toggleTheme = _useState[0],
      setToggleTheme = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    localStorage.setItem("toggleTheme", JSON.stringify(toggleTheme));
    document.body.classList.add(toggleTheme);
    return function () {
      document.body.classList.remove(toggleTheme);
    };
  }, [toggleTheme]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "theme-switch",
    onClick: function onClick() {
      return toggleTheme === "light-theme" ? setToggleTheme("dark-theme") : setToggleTheme("light-theme");
    },
    children: toggleTheme === "light-theme" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: "ri-moon-line"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 46
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: "ri-sun-line"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 81
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

_s(ThemeSwitch, "bK70bSmN2E1q5Awm3GnJ3acACr0=");

_c = ThemeSwitch;
/* harmony default export */ __webpack_exports__["default"] = (ThemeSwitch);

var _c;

$RefreshReg$(_c, "ThemeSwitch");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbGVtZW50cy9UaGVtZVN3aXRjaC5qcyJdLCJuYW1lcyI6WyJUaGVtZVN3aXRjaCIsInVzZVN0YXRlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRvZ2dsZVRoZW1lIiwic2V0VG9nZ2xlVGhlbWUiLCJ1c2VFZmZlY3QiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQSxrQkFDbUJDLHNEQUFRLENBQzFDO0FBQUEsV0FBTUMsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixhQUFyQixDQUFYLEtBQW1ELGFBQXpEO0FBQUEsR0FEMEMsQ0FEM0I7QUFBQSxNQUNaQyxXQURZO0FBQUEsTUFDQ0MsY0FERDs7QUFJbkJDLHlEQUFTLENBQUMsWUFBTTtBQUNaSixnQkFBWSxDQUFDSyxPQUFiLENBQXFCLGFBQXJCLEVBQW9DUCxJQUFJLENBQUNRLFNBQUwsQ0FBZUosV0FBZixDQUFwQztBQUNBSyxZQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEJSLFdBQTVCO0FBQ0EsV0FBTyxZQUFNO0FBQ1RLLGNBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCRSxNQUF4QixDQUErQlQsV0FBL0I7QUFDSCxLQUZEO0FBR0gsR0FOUSxFQU1OLENBQUNBLFdBQUQsQ0FOTSxDQUFUO0FBVUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUNJLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFdBQVcsS0FBSyxhQUFoQixHQUFnQ0MsY0FBYyxDQUFDLFlBQUQsQ0FBOUMsR0FBK0RBLGNBQWMsQ0FBQyxhQUFELENBQW5GO0FBQUEsS0FEYjtBQUFBLGNBSUtELFdBQVcsS0FBSyxhQUFoQixnQkFBZ0M7QUFBRyxlQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQWhDLGdCQUFtRTtBQUFHLGVBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7O0dBdEJRTixXOztLQUFBQSxXO0FBd0JNQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuZnVuY3Rpb24gVGhlbWVTd2l0Y2goKSB7XHJcbiAgICBjb25zdCBbdG9nZ2xlVGhlbWUsIHNldFRvZ2dsZVRoZW1lXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2dnbGVUaGVtZVwiKSkgfHwgXCJsaWdodC10aGVtZVwiXHJcbiAgICApO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZ2dsZVRoZW1lXCIsIEpTT04uc3RyaW5naWZ5KHRvZ2dsZVRoZW1lKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRvZ2dsZVRoZW1lKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUodG9nZ2xlVGhlbWUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdG9nZ2xlVGhlbWVdKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtc3dpdGNoXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlVGhlbWUgPT09IFwibGlnaHQtdGhlbWVcIiA/IHNldFRvZ2dsZVRoZW1lKFwiZGFyay10aGVtZVwiKSA6IHNldFRvZ2dsZVRoZW1lKFwibGlnaHQtdGhlbWVcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3RvZ2dsZVRoZW1lID09PSBcImxpZ2h0LXRoZW1lXCIgPyA8aSBjbGFzc05hbWU9XCJyaS1tb29uLWxpbmVcIj48L2k+IDogPGkgY2xhc3NOYW1lPVwicmktc3VuLWxpbmVcIj48L2k+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWVTd2l0Y2g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=