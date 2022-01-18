exports.ids = [0];
exports.modules = {

/***/ "2l2w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "theme-switch",
    onClick: () => toggleTheme === "light-theme" ? setToggleTheme("dark-theme") : setToggleTheme("light-theme"),
    children: toggleTheme === "light-theme" ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
      className: "ri-moon-line"
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
      className: "ri-sun-line"
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ThemeSwitch);

/***/ })

};;