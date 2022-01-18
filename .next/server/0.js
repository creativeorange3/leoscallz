exports.ids = [0];
exports.modules = {

/***/ "./components/elements/ThemeSwitch.js":
/*!********************************************!*\
  !*** ./components/elements/ThemeSwitch.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\david\\OneDrive\\Desktop\\neftify\\components\\elements\\ThemeSwitch.js";
 // import "./styles.css";

function ThemeSwitch() {
  const {
    0: toggleTheme,
    1: setToggleTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(() => JSON.parse(localStorage.getItem("toggleTheme")) || "light-theme");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    localStorage.setItem("toggleTheme", JSON.stringify(toggleTheme));
    document.body.classList.add(toggleTheme);
    return () => {
      document.body.classList.remove(toggleTheme);
    };
  }, [toggleTheme]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "theme-switch",
    onClick: () => toggleTheme === "light-theme" ? setToggleTheme("dark-theme") : setToggleTheme("light-theme"),
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

/* harmony default export */ __webpack_exports__["default"] = (ThemeSwitch);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2VsZW1lbnRzL1RoZW1lU3dpdGNoLmpzIl0sIm5hbWVzIjpbIlRoZW1lU3dpdGNoIiwidG9nZ2xlVGhlbWUiLCJzZXRUb2dnbGVUaGVtZSIsInVzZVN0YXRlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZUVmZmVjdCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBLFNBQVNBLFdBQVQsR0FBdUI7QUFDbkIsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUMxQyxNQUFNQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLENBQVgsS0FBbUQsYUFEZixDQUE5QztBQUdBQyx5REFBUyxDQUFDLE1BQU07QUFDWkYsZ0JBQVksQ0FBQ0csT0FBYixDQUFxQixhQUFyQixFQUFvQ0wsSUFBSSxDQUFDTSxTQUFMLENBQWVULFdBQWYsQ0FBcEM7QUFDQVUsWUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCYixXQUE1QjtBQUNBLFdBQU8sTUFBTTtBQUNUVSxjQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkUsTUFBeEIsQ0FBK0JkLFdBQS9CO0FBQ0gsS0FGRDtBQUdILEdBTlEsRUFNTixDQUFDQSxXQUFELENBTk0sQ0FBVDtBQVVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFDSSxXQUFPLEVBQUUsTUFBTUEsV0FBVyxLQUFLLGFBQWhCLEdBQWdDQyxjQUFjLENBQUMsWUFBRCxDQUE5QyxHQUErREEsY0FBYyxDQUFDLGFBQUQsQ0FEaEc7QUFBQSxjQUlLRCxXQUFXLEtBQUssYUFBaEIsZ0JBQWdDO0FBQUcsZUFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFoQyxnQkFBbUU7QUFBRyxlQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSnhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIOztBQUVjRCwwRUFBZixFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuZnVuY3Rpb24gVGhlbWVTd2l0Y2goKSB7XHJcbiAgICBjb25zdCBbdG9nZ2xlVGhlbWUsIHNldFRvZ2dsZVRoZW1lXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2dnbGVUaGVtZVwiKSkgfHwgXCJsaWdodC10aGVtZVwiXHJcbiAgICApO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZ2dsZVRoZW1lXCIsIEpTT04uc3RyaW5naWZ5KHRvZ2dsZVRoZW1lKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRvZ2dsZVRoZW1lKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUodG9nZ2xlVGhlbWUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdG9nZ2xlVGhlbWVdKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtc3dpdGNoXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlVGhlbWUgPT09IFwibGlnaHQtdGhlbWVcIiA/IHNldFRvZ2dsZVRoZW1lKFwiZGFyay10aGVtZVwiKSA6IHNldFRvZ2dsZVRoZW1lKFwibGlnaHQtdGhlbWVcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3RvZ2dsZVRoZW1lID09PSBcImxpZ2h0LXRoZW1lXCIgPyA8aSBjbGFzc05hbWU9XCJyaS1tb29uLWxpbmVcIj48L2k+IDogPGkgY2xhc3NOYW1lPVwicmktc3VuLWxpbmVcIj48L2k+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWVTd2l0Y2g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=