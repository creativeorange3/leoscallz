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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: token.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: token.tokenImage.url
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
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
                        lineNumber: 39,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 38,
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
                        lineNumber: 46,
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
                          lineNumber: 50,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex-grow-1",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                            className: "mb-0",
                            children: token.description
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 57,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 56,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 49,
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
                            lineNumber: 63,
                            columnNumber: 149
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 63,
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
                            lineNumber: 64,
                            columnNumber: 128
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 64,
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
                            lineNumber: 65,
                            columnNumber: 96
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 65,
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
                            lineNumber: 66,
                            columnNumber: 113
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 66,
                          columnNumber: 71
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 62,
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
                          lineNumber: 69,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 68,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "mb-3",
                        style: {
                          padding: "20px 0px"
                        },
                        children: token.description
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 71,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                        className: "card-title mb-3",
                        children: "Tokenomics"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
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
                                  lineNumber: 82,
                                  columnNumber: 69
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-info",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                    className: "mb-0",
                                    children: token.buyTax
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 86,
                                    columnNumber: 73
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 85,
                                  columnNumber: 69
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 81,
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
                                        lineNumber: 94,
                                        columnNumber: 79
                                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 94,
                                        columnNumber: 98
                                      }, _this)]
                                    }, void 0, true);
                                  })
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 92,
                                  columnNumber: 69
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 91,
                                columnNumber: 65
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 80,
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
                                  lineNumber: 101,
                                  columnNumber: 69
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-info",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                    className: "mb-0",
                                    children: token.sellTax
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 105,
                                    columnNumber: 73
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 104,
                                  columnNumber: 69
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 100,
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
                                        lineNumber: 113,
                                        columnNumber: 79
                                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 113,
                                        columnNumber: 98
                                      }, _this)]
                                    }, void 0, true);
                                  })
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 111,
                                  columnNumber: 69
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 110,
                                columnNumber: 65
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 99,
                              columnNumber: 61
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 79,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 78,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                        className: "card-title mb-3",
                        children: "Token Details"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 121,
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
                                  lineNumber: 129,
                                  columnNumber: 69
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-info",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                    className: "mb-0",
                                    children: token.totalSupply
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 133,
                                    columnNumber: 73
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 132,
                                  columnNumber: 69
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 128,
                                columnNumber: 65
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 127,
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
                                  lineNumber: 141,
                                  columnNumber: 69
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-info",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                    className: "mb-0",
                                    children: token.decimals
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 145,
                                    columnNumber: 73
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 144,
                                  columnNumber: 69
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 140,
                                columnNumber: 65
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 139,
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
                                  lineNumber: 153,
                                  columnNumber: 69
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "activity-info",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                    className: "mb-0",
                                    children: token.ticker
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 157,
                                    columnNumber: 73
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 156,
                                  columnNumber: 69
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 152,
                                columnNumber: 65
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 151,
                              columnNumber: 61
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 126,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 125,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 124,
                        columnNumber: 49
                      }, this), extraLinksArray && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                          className: "card-title mb-3",
                          children: "Extra Links"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 167,
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
                                          lineNumber: 178,
                                          columnNumber: 85
                                        }, _this)
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 177,
                                        columnNumber: 81
                                      }, _this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 176,
                                      columnNumber: 77
                                    }, _this)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 175,
                                    columnNumber: 73
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 174,
                                  columnNumber: 69
                                }, _this);
                              })
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 172,
                              columnNumber: 61
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 171,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 170,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                        className: "card-title mb-3",
                        children: "Chart"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 188,
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
                                    lineNumber: 197,
                                    columnNumber: 73
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 196,
                                  columnNumber: 69
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 195,
                                columnNumber: 65
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 194,
                              columnNumber: 61
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 193,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 192,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 191,
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
                                    lineNumber: 211,
                                    columnNumber: 73
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 210,
                                  columnNumber: 69
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 209,
                                columnNumber: 65
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 208,
                              columnNumber: 61
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 207,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 206,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 205,
                        columnNumber: 58
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJ0b2tlbiIsImJ1eVRva2Vub21pY3NBcnIiLCJidXlUb2tlbm9taWNzIiwic3BsaXQiLCJzZWxsVG9rZW5vbWljc0FyciIsInNlbGxUb2tlbm9taWNzIiwiZXh0cmFMaW5rc0FycmF5IiwiZXh0cmFMaW5rcyIsInVuZGVmaW5lZCIsIm5hbWUiLCJ0b2tlbkltYWdlIiwidXJsIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwidG9rZW5Mb2dvIiwid2lkdGgiLCJkZXNjcmlwdGlvbiIsImNvbnRyYWN0IiwidGVsZWdyYW0iLCJ0d2l0dGVyIiwibWFyZ2luIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiYnV5VGF4IiwibWFwIiwicGFydCIsInNlbGxUYXgiLCJ0b3RhbFN1cHBseSIsImRlY2ltYWxzIiwidGlja2VyIiwibGluayIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVNBLElBQVQsT0FBeUI7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFFckIsTUFBTUMsZ0JBQWdCLEdBQUdELEtBQUssQ0FBQ0UsYUFBTixDQUFvQkMsS0FBcEIsQ0FBMEIsR0FBMUIsQ0FBekI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBR0osS0FBSyxDQUFDSyxjQUFOLENBQXFCRixLQUFyQixDQUEyQixHQUEzQixDQUExQjtBQUVBLE1BQU1HLGVBQWUsR0FBR04sS0FBSyxDQUFDTyxVQUFOLEdBQW1CUCxLQUFLLENBQUNPLFVBQU4sQ0FBaUJKLEtBQWpCLENBQXVCLEtBQXZCLENBQW5CLEdBQW1ESyxTQUEzRTtBQUVBLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMs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REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQWhLYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFvTkg7O0tBM05RcEIsSTs7QUE0Tk1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tzbHVnXS5mMTY5YzU1MTY4MTJmZTNhYWFhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFRoZW1lU3dpdGNoIGZyb20gXCIuLi9jb21wb25lbnRzL2VsZW1lbnRzL0RhcmtMaWdodFwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0VG9rZW4sIGdldFRva2VuSW5mbyB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IExheW91dEZyb250IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRGcm9udFwiO1xyXG5cclxuLy8gaW1wb3J0IHBhbmNha2UgZnJvbSAnLi4vYXNzZXRzL3BhbmNha2Uuc3ZnJ1xyXG4vLyBpbXBvcnQgcG9vY29pbiBmcm9tICcuLi9hc3NldHMvcG9vY29pbi5zdmcnXHJcbi8vIGltcG9ydCByZWRkaXQgZnJvbSAnLi4vYXNzZXRzL3JlZGRpdC5zdmcnXHJcbi8vIGltcG9ydCB0d2l0dGVyIGZyb20gJy4uL2Fzc2V0cy90d2l0dGVyLnN2ZydcclxuLy8gaW1wb3J0IHRlbGVncmFtIGZyb20gJy4uL2Fzc2V0cy90ZWxlZ3JhbS5wbmcnXHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5mdW5jdGlvbiBJdGVtKHsgdG9rZW4gfSkge1xyXG5cclxuICAgIGNvbnN0IGJ1eVRva2Vub21pY3NBcnIgPSB0b2tlbi5idXlUb2tlbm9taWNzLnNwbGl0KCcsJyk7XHJcbiAgICBjb25zdCBzZWxsVG9rZW5vbWljc0FyciA9IHRva2VuLnNlbGxUb2tlbm9taWNzLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgY29uc3QgZXh0cmFMaW5rc0FycmF5ID0gdG9rZW4uZXh0cmFMaW5rcyA/IHRva2VuLmV4dHJhTGlua3Muc3BsaXQoJyAtICcpIDogdW5kZWZpbmVkO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPExheW91dEZyb250XHJcbiAgICAgICAgICAgICAgICBwYWdlQ2xhc3M9e1wiZnJvbnRcIn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnt0b2tlbi5uYW1lfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e3Rva2VuLnRva2VuSW1hZ2UudXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1zaW5nbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHhsLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Rva2VuLnRva2VuSW1hZ2UudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBwYWRkaW5nOiAnMjBweCAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rva2VuLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0b2tlbi50b2tlbkxvZ28udXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWUtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc4MHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsIHBhZGRpbmc6ICcyMHB4IDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly9wYW5jYWtlc3dhcC5maW5hbmNlL3N3YXA/b3V0cHV0Q3VycmVuY3k9JHt0b2tlbi5jb250cmFjdH1gfSB0YXJnZXQ9eydfYmxhbmsnfT48aW1nIHNyYz1cIi9pbWFnZXMvcGFuY2FrZS5zdmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjQwXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly9wb29jb2luLmFwcC90b2tlbnMvJHt0b2tlbi5jb250cmFjdH1gfSB0YXJnZXQ9eydfYmxhbmsnfT48aW1nIHNyYz1cIi9pbWFnZXMvcG9vY29pbi5zdmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjQwXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt0b2tlbi50ZWxlZ3JhbX0gdGFyZ2V0PXsnX2JsYW5rJ30+PGltZyBzcmM9XCIvaW1hZ2VzL3RlbGVncmFtLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiNDBcIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2tlbi50d2l0dGVyICYmIDxhIGhyZWY9e3Rva2VuLnR3aXR0ZXJ9IHRhcmdldD17J19ibGFuayd9PjxpbWcgc3JjPVwiL2ltYWdlcy90d2l0dGVyLnN2Z1wiIGFsdD1cIlwiIHdpZHRoPVwiNDBcIiAvPjwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46IFwiMTBweCAwcHhcIiB9fSBjbGFzc05hbWU9XCJiaWQgbWItMyBjYXJkXCIgb25DbGljaz17KCkgPT4geyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0b2tlbi5jb250cmFjdCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dG9rZW4uY29udHJhY3R9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItM1wiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweCAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2tlbi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2tlbm9taWNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlkIG1iLTMgY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1jb250ZW50IGNhcmQtYm9keSBweS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS11c2VyLWltZyBtZS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1eSB0YXg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4uYnV5VGF4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2J1eVRva2Vub21pY3NBcnIubWFwKHBhcnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD48c3Bhbj57cGFydH08L3NwYW4+PGJyIC8+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS11c2VyLWltZyBtZS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGwgdGF4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rva2VuLnNlbGxUYXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsbFRva2Vub21pY3NBcnIubWFwKHBhcnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD48c3Bhbj57cGFydH08L3NwYW4+PGJyIC8+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRva2VuIERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWQgbWItMyBjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWNvbnRlbnQgY2FyZC1ib2R5IHB5LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktdXNlci1pbWcgbWUtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBTdXBwbHk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4udG90YWxTdXBwbHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS11c2VyLWltZyBtZS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRva2VuIERlY2ltYWxzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rva2VuLmRlY2ltYWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktdXNlci1pbWcgbWUtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2tlbiBUaWNrZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4udGlja2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V4dHJhTGlua3NBcnJheSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4dHJhIExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWQgbWItMyBjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1jb250ZW50IGNhcmQtYm9keSBweS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleHRyYUxpbmtzQXJyYXkubWFwKChsaW5rLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bGluay5zcGxpdCgnKycpWzFdfSB0YXJnZXQ9eydfYmxhbmsnfT57bGluay5zcGxpdCgnKycpWzBdfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlkIG1iLTMgY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1jb250ZW50IGNhcmQtYm9keSBweS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29taW5nIHNvb24hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIDxkaXYgY2xhc3NOYW1lPVwiYmlkIG1iLTMgY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1jb250ZW50IGNhcmQtYm9keSBweS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBBZCBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXRGcm9udD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFRva2VuSW5mbyhwYXJhbXMuc2x1Zyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyB0b2tlbjogZGF0YSB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IHRva2VucyA9IGF3YWl0IGdldFRva2VuKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogdG9rZW5zLm1hcCgoeyBub2RlOiB7IHNsdWcgfSB9KSA9PiAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pKSwgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==