webpackHotUpdate_N_E("pages/[slug]",{

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_LayoutFront__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/LayoutFront */ "./components/layout/LayoutFront.js");


var _jsxFileName = "C:\\Users\\david\\OneDrive\\Desktop\\neftify\\pages\\[slug].js";
// import ThemeSwitch from "../components/elements/DarkLight";
 // import pancake from '../assets/pancake.svg'
// import poocoin from '../assets/poocoin.svg'
// import reddit from '../assets/reddit.svg'
// import twitter from '../assets/twitter.svg'
// import telegram from '../assets/telegram.png'

function Item(_ref) {
  var _this = this;

  var token = _ref.token;
  var buyTokenomicsArr = token.buyTokenomics.split(',');
  var sellTokenomicsArr = token.sellTokenomics.split(',');
  var extraLinksArray = token.extraLinks ? token.extraLinks.split(' - ') : undefined;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_LayoutFront__WEBPACK_IMPORTED_MODULE_1__["default"], {
      pageClass: "front",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Head, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: token.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: token.tokenImage.url
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "item-single",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-xxl-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "top-bid",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "card-body",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "row",
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "col-md-6",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: token.tokenImage.url,
                        className: "img-fluid rounded",
                        alt: "..."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 38,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "col-md-6",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                        style: {
                          textAlign: 'center',
                          padding: '20px 0px'
                        },
                        children: token.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 45,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "d-flex align-items-center mb-3",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: token.tokenLogo.url,
                          alt: "",
                          className: "me-3",
                          style: {
                            width: '80px'
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 49,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex-grow-1",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                            className: "mb-0",
                            children: token.description
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 56,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 55,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 48,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "d-flex",
                        style: {
                          justifyContent: 'space-around',
                          padding: '20px 0px'
                        },
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "https://pancakeswap.finance/swap?outputCurrency=".concat(token.contract),
                          target: '_blank',
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "/images/pancake.svg",
                            alt: "",
                            width: "40"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 62,
                            columnNumber: 149
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 62,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "https://poocoin.app/tokens/".concat(token.contract),
                          target: '_blank',
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "/images/poocoin.svg",
                            alt: "",
                            width: "40"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 63,
                            columnNumber: 128
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 63,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: token.telegram,
                          target: '_blank',
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "/images/telegram.png",
                            alt: "",
                            width: "40"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 64,
                            columnNumber: 96
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 64,
                          columnNumber: 53
                        }, this), token.twitter && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: token.twitter,
                          target: '_blank',
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "/images/twitter.svg",
                            alt: "",
                            width: "40"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 65,
                            columnNumber: 113
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 65,
                          columnNumber: 71
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 61,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          padding: '5px',
                          textAlign: 'center',
                          margin: "10px 0px"
                        },
                        className: "bid mb-3 card",
                        onClick: function onClick() {
                          navigator.clipboard.writeText(token.contract);
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: token.contract
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 68,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 67,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "mb-3",
                        style: {
                          padding: "20px 0px"
                        },
                        children: token.description
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 70,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                        className: "card-title mb-3",
                        children: "Tokenomics"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "bid mb-3 card",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "activity-content card-body py-0",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              className: "d-flex justify-content-between align-items-center",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "d-flex align-items-center",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-user-img me-3",
                                  children: "Buy tax:"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 81,
                                  columnNumber: 69
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-info",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                    className: "mb-0",
                                    children: token.buyTax
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 85,
                                    columnNumber: 73
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 84,
                                  columnNumber: 69
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 80,
                                columnNumber: 65
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "text-end",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: " text-muted",
                                  children: buyTokenomicsArr.map(function (part) {
                                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                        children: part
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 93,
                                        columnNumber: 79
                                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 93,
                                        columnNumber: 98
                                      }, _this)]
                                    }, void 0, true);
                                  })
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 91,
                                  columnNumber: 69
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 90,
                                columnNumber: 65
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 79,
                              columnNumber: 61
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              className: "d-flex justify-content-between align-items-center",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "d-flex align-items-center",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-user-img me-3",
                                  children: "Sell tax:"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 100,
                                  columnNumber: 69
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-info",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                    className: "mb-0",
                                    children: token.sellTax
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 104,
                                    columnNumber: 73
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 103,
                                  columnNumber: 69
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 99,
                                columnNumber: 65
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "text-end",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: " text-muted",
                                  children: sellTokenomicsArr.map(function (part) {
                                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                        children: part
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 112,
                                        columnNumber: 79
                                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 112,
                                        columnNumber: 98
                                      }, _this)]
                                    }, void 0, true);
                                  })
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 110,
                                  columnNumber: 69
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 109,
                                columnNumber: 65
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 98,
                              columnNumber: 61
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 78,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 77,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                        className: "card-title mb-3",
                        children: "Token Details"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 120,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "bid mb-3 card",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "activity-content card-body py-0",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              className: "d-flex justify-content-between align-items-center",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "d-flex justify-content-between align-items-center",
                                style: {
                                  width: '100%'
                                },
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-user-img me-3",
                                  children: "Total Supply:"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 128,
                                  columnNumber: 69
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-info",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                    className: "mb-0",
                                    children: token.totalSupply
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 132,
                                    columnNumber: 73
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 131,
                                  columnNumber: 69
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 127,
                                columnNumber: 65
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 126,
                              columnNumber: 61
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              className: "d-flex justify-content-between align-items-center",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "d-flex justify-content-between align-items-center",
                                style: {
                                  width: '100%'
                                },
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-user-img me-3",
                                  children: "Token Decimals:"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 140,
                                  columnNumber: 69
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-info",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                    className: "mb-0",
                                    children: token.decimals
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 144,
                                    columnNumber: 73
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 143,
                                  columnNumber: 69
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 139,
                                columnNumber: 65
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 138,
                              columnNumber: 61
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              className: "d-flex justify-content-between align-items-center",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "d-flex justify-content-between align-items-center",
                                style: {
                                  width: '100%'
                                },
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-user-img me-3",
                                  children: "Token Ticker:"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 152,
                                  columnNumber: 69
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-info",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                    className: "mb-0",
                                    children: token.ticker
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 156,
                                    columnNumber: 73
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 155,
                                  columnNumber: 69
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 151,
                                columnNumber: 65
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 150,
                              columnNumber: 61
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 125,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 124,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 123,
                        columnNumber: 49
                      }, this), extraLinksArray && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                          className: "card-title mb-3",
                          children: "Extra Links"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 166,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "bid mb-3 card",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "activity-content card-body py-0",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                              children: extraLinksArray.map(function (link, i) {
                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  className: "d-flex justify-content-between align-items-center",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                    className: "d-flex justify-content-center align-items-center",
                                    style: {
                                      width: '100%'
                                    },
                                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                      className: "activity-info",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                        className: "mb-0",
                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                          href: link.split('+')[1],
                                          target: '_blank',
                                          children: link.split('+')[0]
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 177,
                                          columnNumber: 85
                                        }, _this)
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 176,
                                        columnNumber: 81
                                      }, _this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 175,
                                      columnNumber: 77
                                    }, _this)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 174,
                                    columnNumber: 73
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 173,
                                  columnNumber: 69
                                }, _this);
                              })
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 171,
                              columnNumber: 61
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 170,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 169,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                        className: "card-title mb-3",
                        children: "Chart"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 187,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "bid mb-3 card",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "activity-content card-body py-0",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              className: "d-flex justify-content-between align-items-center",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "d-flex justify-content-center align-items-center",
                                style: {
                                  width: '100%'
                                },
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-info",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                    className: "mb-0",
                                    children: "Coming soon!"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 196,
                                    columnNumber: 73
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 195,
                                  columnNumber: 69
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 194,
                                columnNumber: 65
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 193,
                              columnNumber: 61
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 192,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 191,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 190,
                        columnNumber: 49
                      }, this), "   ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "bid mb-3 card",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "activity-content card-body py-0",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              className: "d-flex justify-content-between align-items-center",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "d-flex justify-content-center align-items-center",
                                style: {
                                  width: '100%'
                                },
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-info",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                    className: "mb-0",
                                    children: "Your Ad here"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 210,
                                    columnNumber: 73
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 209,
                                  columnNumber: 69
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 208,
                                columnNumber: 65
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 207,
                              columnNumber: 61
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 206,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 205,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 204,
                        columnNumber: 58
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 44,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_c = Item;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Item);

var _c;

$RefreshReg$(_c, "Item");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJ0b2tlbiIsImJ1eVRva2Vub21pY3NBcnIiLCJidXlUb2tlbm9taWNzIiwic3BsaXQiLCJzZWxsVG9rZW5vbWljc0FyciIsInNlbGxUb2tlbm9taWNzIiwiZXh0cmFMaW5rc0FycmF5IiwiZXh0cmFMaW5rcyIsInVuZGVmaW5lZCIsIm5hbWUiLCJ0b2tlbkltYWdlIiwidXJsIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwidG9rZW5Mb2dvIiwid2lkdGgiLCJkZXNjcmlwdGlvbiIsImNvbnRyYWN0IiwidGVsZWdyYW0iLCJ0d2l0dGVyIiwibWFyZ2luIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiYnV5VGF4IiwibWFwIiwicGFydCIsInNlbGxUYXgiLCJ0b3RhbFN1cHBseSIsImRlY2ltYWxzIiwidGlja2VyIiwibGluayIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxJQUFULE9BQXlCO0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBRXJCLE1BQU1DLGdCQUFnQixHQUFHRCxLQUFLLENBQUNFLGFBQU4sQ0FBb0JDLEtBQXBCLENBQTBCLEdBQTFCLENBQXpCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUdKLEtBQUssQ0FBQ0ssY0FBTixDQUFxQkYsS0FBckIsQ0FBMkIsR0FBM0IsQ0FBMUI7QUFFQSxNQUFNRyxlQUFlLEdBQUdOLEtBQUssQ0FBQ08sVUFBTixHQUFtQlAsS0FBSyxDQUFDTyxVQUFOLENBQWlCSixLQUFqQixDQUF1QixLQUF2QixDQUFuQixHQUFtREssU0FBM0U7QUFFQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLHNFQUFEO0FB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QUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQWhLYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFvTkg7O0tBM05RcEIsSTs7QUE0Tk1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tzbHVnXS4wMjYyOTQ4YWEzNjYzZDQ4NTEyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFRoZW1lU3dpdGNoIGZyb20gXCIuLi9jb21wb25lbnRzL2VsZW1lbnRzL0RhcmtMaWdodFwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0VG9rZW4sIGdldFRva2VuSW5mbyB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IExheW91dEZyb250IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRGcm9udFwiO1xyXG5cclxuLy8gaW1wb3J0IHBhbmNha2UgZnJvbSAnLi4vYXNzZXRzL3BhbmNha2Uuc3ZnJ1xyXG4vLyBpbXBvcnQgcG9vY29pbiBmcm9tICcuLi9hc3NldHMvcG9vY29pbi5zdmcnXHJcbi8vIGltcG9ydCByZWRkaXQgZnJvbSAnLi4vYXNzZXRzL3JlZGRpdC5zdmcnXHJcbi8vIGltcG9ydCB0d2l0dGVyIGZyb20gJy4uL2Fzc2V0cy90d2l0dGVyLnN2ZydcclxuLy8gaW1wb3J0IHRlbGVncmFtIGZyb20gJy4uL2Fzc2V0cy90ZWxlZ3JhbS5wbmcnXHJcblxyXG5cclxuZnVuY3Rpb24gSXRlbSh7IHRva2VuIH0pIHtcclxuXHJcbiAgICBjb25zdCBidXlUb2tlbm9taWNzQXJyID0gdG9rZW4uYnV5VG9rZW5vbWljcy5zcGxpdCgnLCcpO1xyXG4gICAgY29uc3Qgc2VsbFRva2Vub21pY3NBcnIgPSB0b2tlbi5zZWxsVG9rZW5vbWljcy5zcGxpdCgnLCcpO1xyXG5cclxuICAgIGNvbnN0IGV4dHJhTGlua3NBcnJheSA9IHRva2VuLmV4dHJhTGlua3MgPyB0b2tlbi5leHRyYUxpbmtzLnNwbGl0KCcgLSAnKSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxMYXlvdXRGcm9udFxyXG4gICAgICAgICAgICAgICAgcGFnZUNsYXNzPXtcImZyb250XCJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT57dG9rZW4ubmFtZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXt0b2tlbi50b2tlbkltYWdlLnVybH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tc2luZ2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXh4bC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0b2tlbi50b2tlbkltYWdlLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZzogJzIwcHggMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2tlbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dG9rZW4udG9rZW5Mb2dvLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnODBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvdy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rva2VuLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCIgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLCBwYWRkaW5nOiAnMjBweCAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vcGFuY2FrZXN3YXAuZmluYW5jZS9zd2FwP291dHB1dEN1cnJlbmN5PSR7dG9rZW4uY29udHJhY3R9YH0gdGFyZ2V0PXsnX2JsYW5rJ30+PGltZyBzcmM9XCIvaW1hZ2VzL3BhbmNha2Uuc3ZnXCIgYWx0PVwiXCIgd2lkdGg9XCI0MFwiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vcG9vY29pbi5hcHAvdG9rZW5zLyR7dG9rZW4uY29udHJhY3R9YH0gdGFyZ2V0PXsnX2JsYW5rJ30+PGltZyBzcmM9XCIvaW1hZ2VzL3Bvb2NvaW4uc3ZnXCIgYWx0PVwiXCIgd2lkdGg9XCI0MFwiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dG9rZW4udGVsZWdyYW19IHRhcmdldD17J19ibGFuayd9PjxpbWcgc3JjPVwiL2ltYWdlcy90ZWxlZ3JhbS5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjQwXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4udHdpdHRlciAmJiA8YSBocmVmPXt0b2tlbi50d2l0dGVyfSB0YXJnZXQ9eydfYmxhbmsnfT48aW1nIHNyYz1cIi9pbWFnZXMvdHdpdHRlci5zdmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjQwXCIgLz48L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiBcIjEwcHggMHB4XCIgfX0gY2xhc3NOYW1lPVwiYmlkIG1iLTMgY2FyZFwiIG9uQ2xpY2s9eygpID0+IHsgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodG9rZW4uY29udHJhY3QpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Rva2VuLmNvbnRyYWN0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTNcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHggMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW5vbWljc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZCBtYi0zIGNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktY29udGVudCBjYXJkLWJvZHkgcHktMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktdXNlci1pbWcgbWUtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdXkgdGF4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rva2VuLmJ1eVRheH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtidXlUb2tlbm9taWNzQXJyLm1hcChwYXJ0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+PHNwYW4+e3BhcnR9PC9zcGFuPjxiciAvPjwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktdXNlci1pbWcgbWUtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxsIHRheDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2tlbi5zZWxsVGF4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGxUb2tlbm9taWNzQXJyLm1hcChwYXJ0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+PHNwYW4+e3BhcnR9PC9zcGFuPjxiciAvPjwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2tlbiBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlkIG1iLTMgY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1jb250ZW50IGNhcmQtYm9keSBweS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LXVzZXItaW1nIG1lLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgU3VwcGx5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rva2VuLnRvdGFsU3VwcGx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktdXNlci1pbWcgbWUtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2tlbiBEZWNpbWFsczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2tlbi5kZWNpbWFsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LXVzZXItaW1nIG1lLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW4gVGlja2VyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rva2VuLnRpY2tlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleHRyYUxpbmtzQXJyYXkgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYSBMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlkIG1iLTMgY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktY29udGVudCBjYXJkLWJvZHkgcHktMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXh0cmFMaW5rc0FycmF5Lm1hcCgobGluaywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsuc3BsaXQoJysnKVsxXX0gdGFyZ2V0PXsnX2JsYW5rJ30+e2xpbmsuc3BsaXQoJysnKVswXX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZCBtYi0zIGNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktY29udGVudCBjYXJkLWJvZHkgcHktMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbWluZyBzb29uIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICA8ZGl2IGNsYXNzTmFtZT1cImJpZCBtYi0zIGNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktY29udGVudCBjYXJkLWJvZHkgcHktMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgQWQgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0RnJvbnQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW07XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRUb2tlbkluZm8ocGFyYW1zLnNsdWcpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgdG9rZW46IGRhdGEgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCB0b2tlbnMgPSBhd2FpdCBnZXRUb2tlbigpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHM6IHRva2Vucy5tYXAoKHsgbm9kZTogeyBzbHVnIH0gfSkgPT4gKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSksIGZhbGxiYWNrOiBmYWxzZVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=