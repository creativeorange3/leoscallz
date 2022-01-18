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
          href: token.tokenLogo.url
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJ0b2tlbiIsImJ1eVRva2Vub21pY3NBcnIiLCJidXlUb2tlbm9taWNzIiwic3BsaXQiLCJzZWxsVG9rZW5vbWljc0FyciIsInNlbGxUb2tlbm9taWNzIiwiZXh0cmFMaW5rc0FycmF5IiwiZXh0cmFMaW5rcyIsInVuZGVmaW5lZCIsIm5hbWUiLCJ0b2tlbkxvZ28iLCJ1cmwiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInRva2VuSW1hZ2UiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwid2lkdGgiLCJkZXNjcmlwdGlvbiIsImNvbnRyYWN0IiwidGVsZWdyYW0iLCJ0d2l0dGVyIiwibWFyZ2luIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiYnV5VGF4IiwibWFwIiwicGFydCIsInNlbGxUYXgiLCJ0b3RhbFN1cHBseSIsImRlY2ltYWxzIiwidGlja2VyIiwibGluayIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVNBLElBQVQsT0FBeUI7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFFckIsTUFBTUMsZ0JBQWdCLEdBQUdELEtBQUssQ0FBQ0UsYUFBTixDQUFvQkMsS0FBcEIsQ0FBMEIsR0FBMUIsQ0FBekI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBR0osS0FBSyxDQUFDSyxjQUFOLENBQXFCRixLQUFyQixDQUEyQixHQUEzQixDQUExQjtBQUVBLE1BQU1HLGVBQWUsR0FBR04sS0FBSyxDQUFDTyxVQUFOLEdBQW1CUCxLQUFLLENBQUNPLFVBQU4sQ0FBaUJKLEtBQWpCLENBQXVCLEtBQXZCLENBQW5CLEdBQW1ESyxTQUEzRTtBQUVBLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMs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REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQWhLYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFvTkg7O0tBM05RcEIsSTs7QUE0Tk1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tzbHVnXS5iODY4ZWUzY2M5ZTI5NjI3NTE2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFRoZW1lU3dpdGNoIGZyb20gXCIuLi9jb21wb25lbnRzL2VsZW1lbnRzL0RhcmtMaWdodFwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0VG9rZW4sIGdldFRva2VuSW5mbyB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IExheW91dEZyb250IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRGcm9udFwiO1xyXG5cclxuLy8gaW1wb3J0IHBhbmNha2UgZnJvbSAnLi4vYXNzZXRzL3BhbmNha2Uuc3ZnJ1xyXG4vLyBpbXBvcnQgcG9vY29pbiBmcm9tICcuLi9hc3NldHMvcG9vY29pbi5zdmcnXHJcbi8vIGltcG9ydCByZWRkaXQgZnJvbSAnLi4vYXNzZXRzL3JlZGRpdC5zdmcnXHJcbi8vIGltcG9ydCB0d2l0dGVyIGZyb20gJy4uL2Fzc2V0cy90d2l0dGVyLnN2ZydcclxuLy8gaW1wb3J0IHRlbGVncmFtIGZyb20gJy4uL2Fzc2V0cy90ZWxlZ3JhbS5wbmcnXHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5mdW5jdGlvbiBJdGVtKHsgdG9rZW4gfSkge1xyXG5cclxuICAgIGNvbnN0IGJ1eVRva2Vub21pY3NBcnIgPSB0b2tlbi5idXlUb2tlbm9taWNzLnNwbGl0KCcsJyk7XHJcbiAgICBjb25zdCBzZWxsVG9rZW5vbWljc0FyciA9IHRva2VuLnNlbGxUb2tlbm9taWNzLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgY29uc3QgZXh0cmFMaW5rc0FycmF5ID0gdG9rZW4uZXh0cmFMaW5rcyA/IHRva2VuLmV4dHJhTGlua3Muc3BsaXQoJyAtICcpIDogdW5kZWZpbmVkO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPExheW91dEZyb250XHJcbiAgICAgICAgICAgICAgICBwYWdlQ2xhc3M9e1wiZnJvbnRcIn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnt0b2tlbi5uYW1lfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e3Rva2VuLnRva2VuTG9nby51cmx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXNpbmdsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14eGwtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dG9rZW4udG9rZW5JbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIHBhZGRpbmc6ICcyMHB4IDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Rva2VuLnRva2VuTG9nby51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZS0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzgwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3ctMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2tlbi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJywgcGFkZGluZzogJzIwcHggMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3BhbmNha2Vzd2FwLmZpbmFuY2Uvc3dhcD9vdXRwdXRDdXJyZW5jeT0ke3Rva2VuLmNvbnRyYWN0fWB9IHRhcmdldD17J19ibGFuayd9PjxpbWcgc3JjPVwiL2ltYWdlcy9wYW5jYWtlLnN2Z1wiIGFsdD1cIlwiIHdpZHRoPVwiNDBcIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3Bvb2NvaW4uYXBwL3Rva2Vucy8ke3Rva2VuLmNvbnRyYWN0fWB9IHRhcmdldD17J19ibGFuayd9PjxpbWcgc3JjPVwiL2ltYWdlcy9wb29jb2luLnN2Z1wiIGFsdD1cIlwiIHdpZHRoPVwiNDBcIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Rva2VuLnRlbGVncmFtfSB0YXJnZXQ9eydfYmxhbmsnfT48aW1nIHNyYz1cIi9pbWFnZXMvdGVsZWdyYW0ucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCI0MFwiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rva2VuLnR3aXR0ZXIgJiYgPGEgaHJlZj17dG9rZW4udHdpdHRlcn0gdGFyZ2V0PXsnX2JsYW5rJ30+PGltZyBzcmM9XCIvaW1hZ2VzL3R3aXR0ZXIuc3ZnXCIgYWx0PVwiXCIgd2lkdGg9XCI0MFwiIC8+PC9hPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogXCIxMHB4IDBweFwiIH19IGNsYXNzTmFtZT1cImJpZCBtYi0zIGNhcmRcIiBvbkNsaWNrPXsoKSA9PiB7IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRva2VuLmNvbnRyYWN0KSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0b2tlbi5jb250cmFjdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zXCIgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4IDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rva2VuLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRva2Vub21pY3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWQgbWItMyBjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWNvbnRlbnQgY2FyZC1ib2R5IHB5LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LXVzZXItaW1nIG1lLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV5IHRheDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2tlbi5idXlUYXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnV5VG9rZW5vbWljc0Fyci5tYXAocGFydCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PjxzcGFuPntwYXJ0fTwvc3Bhbj48YnIgLz48Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LXVzZXItaW1nIG1lLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsbCB0YXg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4uc2VsbFRheH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxsVG9rZW5vbWljc0Fyci5tYXAocGFydCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PjxzcGFuPntwYXJ0fTwvc3Bhbj48YnIgLz48Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW4gRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZCBtYi0zIGNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktY29udGVudCBjYXJkLWJvZHkgcHktMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS11c2VyLWltZyBtZS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIFN1cHBseTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2tlbi50b3RhbFN1cHBseX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LXVzZXItaW1nIG1lLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW4gRGVjaW1hbHM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4uZGVjaW1hbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS11c2VyLWltZyBtZS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRva2VuIFRpY2tlcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2tlbi50aWNrZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXh0cmFMaW5rc0FycmF5ICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXh0cmEgTGlua3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZCBtYi0zIGNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWNvbnRlbnQgY2FyZC1ib2R5IHB5LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V4dHJhTGlua3NBcnJheS5tYXAoKGxpbmssIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rLnNwbGl0KCcrJylbMV19IHRhcmdldD17J19ibGFuayd9PntsaW5rLnNwbGl0KCcrJylbMF19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWQgbWItMyBjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWNvbnRlbnQgY2FyZC1ib2R5IHB5LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21pbmcgc29vbiFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgPGRpdiBjbGFzc05hbWU9XCJiaWQgbWItMyBjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWNvbnRlbnQgY2FyZC1ib2R5IHB5LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIEFkIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dEZyb250PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJdGVtO1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0VG9rZW5JbmZvKHBhcmFtcy5zbHVnKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IHRva2VuOiBkYXRhIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgdG9rZW5zID0gYXdhaXQgZ2V0VG9rZW4oKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiB0b2tlbnMubWFwKCh7IG5vZGU6IHsgc2x1ZyB9IH0pID0+ICh7IHBhcmFtczogeyBzbHVnIH0gfSkpLCBmYWxsYmFjazogZmFsc2VcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9