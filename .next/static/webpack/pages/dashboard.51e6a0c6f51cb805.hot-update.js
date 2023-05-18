"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/pages/dashboard.js":
/*!********************************!*\
  !*** ./src/pages/dashboard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function handleLogout() {\n        fetch(\"/api/logout\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>response.json()).then((data)=>{\n            document.cookie = \"token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;\";\n            router.push(\"/\");\n        }).catch((error)=>{\n            console.error(\"Error logging out:\", error);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = document.cookie.replace(/(?:(?:^|.*;\\s*)token\\s*\\=\\s*([^;]*).*$)|^.*$/, \"$1\");\n        const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().decode(token);\n        const username = decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.username;\n        const userId = decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.user_id;\n        setUsername(username);\n        setUserId(userId);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userId) {\n            fetchItems(userId);\n        }\n    }, [\n        userId\n    ]);\n    async function fetchItems(userId) {\n        try {\n            const response = await fetch(\"/api/UserInventory/\".concat(userId));\n            const data = await response.json();\n            const itemsWithCharacteristics = await Promise.all(data.items.map(async (item)=>{\n                if (item.category === \"Flowers\") {\n                    const response = await fetch(\"/api/flowerCharacteristics?item_id=\".concat(item.item_id));\n                    const flower = await response.json();\n                    console.log(\"Flower Characteristics:\", flower);\n                    return {\n                        ...item,\n                        flower\n                    };\n                } else {\n                    return item;\n                }\n            }));\n            setItems(itemsWithCharacteristics);\n            setBalance(data.balance);\n        } catch (error) {\n            console.error(\"Error fetching items:\", error);\n        }\n    }\n    function handleShopRedirect() {\n        const token = document.cookie.replace(/(?:(?:^|.*;\\s*)token\\s*\\=\\s*([^;]*).*$)|^.*$/, \"$1\");\n        router.push(\"/shop?token=\".concat(token));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"2rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Header, {\n                    as: \"h1\",\n                    style: {\n                        marginBottom: \"1rem\"\n                    },\n                    children: [\n                        \"Bienvenue,\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                color: \"#e00e4a\"\n                            },\n                            children: username\n                        }, void 0, false, {\n                            fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Card.Content, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Card.Header, {\n                            children: [\n                                \"Utilisateur: \",\n                                username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Card.Meta, {\n                            children: [\n                                \"Num\\xe9ro de compte: \",\n                                userId\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                            lineNumber: 102,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                style: {\n                    marginTop: \"2rem\"\n                },\n                children: \"Objets dans l'inventaire :\"\n            }, void 0, false, {\n                fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, this),\n            items.map((item)=>{\n                if (item.category === \"Flowers\" && item.flower) {\n                    const flower = item.flower;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: [\n                                    \"Item Name: \",\n                                    flower.item_name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                                lineNumber: 111,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"HP: \",\n                                    flower.hp\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                                lineNumber: 112,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Level: \",\n                                    flower.level\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                                lineNumber: 113,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"XP: \",\n                                    flower.xp\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                                lineNumber: 114,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, item.item_id, true, {\n                        fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                        lineNumber: 110,\n                        columnNumber: 25\n                    }, this);\n                } else {\n                    return null;\n                }\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"2rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: [\n                        \"Solde moonflowers: \",\n                        balance,\n                        \" MF\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                    lineNumber: 122,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"2rem\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        className: \"ui button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/shop\",\n                            children: \"Magasin\"\n                        }, void 0, false, {\n                            fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                            lineNumber: 126,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                        lineNumber: 125,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        className: \"ui button\",\n                        onClick: handleLogout,\n                        children: \"Se d\\xe9connecter\"\n                    }, void 0, false, {\n                        fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                        lineNumber: 128,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"MUzk6A1oI3kHfgawYpmvXD80gv0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUtVUCxrREFBU0E7OztLQUxuQk87QUFpSVQsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC5qcz8zNjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRlciwgQ2FyZCwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUxvZ291dCgpIHtcbiAgICAgICAgZmV0Y2goXCIvYXBpL2xvZ291dFwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPVxuICAgICAgICAgICAgICAgICAgICBcInRva2VuPTsgUGF0aD0vOyBFeHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UO1wiO1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvZ2dpbmcgb3V0OlwiLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGRvY3VtZW50LmNvb2tpZS5yZXBsYWNlKFxuICAgICAgICAgICAgLyg/Oig/Ol58Lio7XFxzKil0b2tlblxccypcXD1cXHMqKFteO10qKS4qJCl8Xi4qJC8sXG4gICAgICAgICAgICBcIiQxXCJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBqd3QuZGVjb2RlKHRva2VuKTtcblxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGRlY29kZWRUb2tlbj8udXNlcm5hbWU7XG4gICAgICAgIGNvbnN0IHVzZXJJZCA9IGRlY29kZWRUb2tlbj8udXNlcl9pZDtcblxuICAgICAgICBzZXRVc2VybmFtZSh1c2VybmFtZSk7XG4gICAgICAgIHNldFVzZXJJZCh1c2VySWQpO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIGZldGNoSXRlbXModXNlcklkKTtcbiAgICAgICAgfVxuICAgIH0sIFt1c2VySWRdKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoSXRlbXModXNlcklkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL1VzZXJJbnZlbnRvcnkvJHt1c2VySWR9YCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtc1dpdGhDaGFyYWN0ZXJpc3RpY3MgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICBkYXRhLml0ZW1zLm1hcChhc3luYyAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jYXRlZ29yeSA9PT0gXCJGbG93ZXJzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYC9hcGkvZmxvd2VyQ2hhcmFjdGVyaXN0aWNzP2l0ZW1faWQ9JHtpdGVtLml0ZW1faWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZsb3dlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmxvd2VyIENoYXJhY3RlcmlzdGljczpcIiwgZmxvd2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG93ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgc2V0SXRlbXMoaXRlbXNXaXRoQ2hhcmFjdGVyaXN0aWNzKTtcbiAgICAgICAgICAgIHNldEJhbGFuY2UoZGF0YS5iYWxhbmNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBpdGVtczpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2hvcFJlZGlyZWN0KCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGRvY3VtZW50LmNvb2tpZS5yZXBsYWNlKFxuICAgICAgICAgICAgLyg/Oig/Ol58Lio7XFxzKil0b2tlblxccypcXD1cXHMqKFteO10qKS4qJCl8Xi4qJC8sXG4gICAgICAgICAgICBcIiQxXCJcbiAgICAgICAgKTtcbiAgICAgICAgcm91dGVyLnB1c2goYC9zaG9wP3Rva2VuPSR7dG9rZW59YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjJyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDFcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICAgICAgICBCaWVudmVudWUse1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjZTAwZTRhXCIgfX0+e3VzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlV0aWxpc2F0ZXVyOiB7dXNlcm5hbWV9PC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YT5OdW3DqXJvIGRlIGNvbXB0ZToge3VzZXJJZH08L0NhcmQuTWV0YT5cbiAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDxoMyBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMnJlbVwiIH19Pk9iamV0cyBkYW5zIGwnaW52ZW50YWlyZSA6PC9oMz5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jYXRlZ29yeSA9PT0gXCJGbG93ZXJzXCIgJiYgaXRlbS5mbG93ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmxvd2VyID0gaXRlbS5mbG93ZXI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pdGVtX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+SXRlbSBOYW1lOiB7Zmxvd2VyLml0ZW1fbmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhQOiB7Zmxvd2VyLmhwfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5MZXZlbDoge2Zsb3dlci5sZXZlbH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WFA6IHtmbG93ZXIueHB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIycmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgPGgzPlNvbGRlIG1vb25mbG93ZXJzOiB7YmFsYW5jZX0gTUY8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIycmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ1aSBidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wXCI+TWFnYXNpbjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInVpIGJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XG4gICAgICAgICAgICAgICAgICAgIFNlIGTDqWNvbm5lY3RlclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImp3dCIsIkNvbnRhaW5lciIsIkhlYWRlciIsIkNhcmQiLCJCdXR0b24iLCJMaW5rIiwiRGFzaGJvYXJkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZXJJZCIsInNldFVzZXJJZCIsIml0ZW1zIiwic2V0SXRlbXMiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInJvdXRlciIsImhhbmRsZUxvZ291dCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZG9jdW1lbnQiLCJjb29raWUiLCJwdXNoIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJ0b2tlbiIsInJlcGxhY2UiLCJkZWNvZGVkVG9rZW4iLCJkZWNvZGUiLCJ1c2VyX2lkIiwiZmV0Y2hJdGVtcyIsIml0ZW1zV2l0aENoYXJhY3RlcmlzdGljcyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpdGVtIiwiY2F0ZWdvcnkiLCJpdGVtX2lkIiwiZmxvd2VyIiwibG9nIiwiaGFuZGxlU2hvcFJlZGlyZWN0IiwiZGl2Iiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJhcyIsIm1hcmdpbkJvdHRvbSIsInNwYW4iLCJjb2xvciIsIkNvbnRlbnQiLCJNZXRhIiwiaDMiLCJpdGVtX25hbWUiLCJwIiwiaHAiLCJsZXZlbCIsInhwIiwiY2xhc3NOYW1lIiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard.js\n"));

/***/ })

});