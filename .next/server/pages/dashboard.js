/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./src/pages/dashboard.js":
/*!********************************!*\
  !*** ./src/pages/dashboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Dashboard() {\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function handleLogout() {\n        fetch(\"/api/logout\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>response.json()).then((data)=>{\n            document.cookie = \"token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;\";\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n        }).catch((error)=>{\n            console.error(\"Error logging out:\", error);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = document.cookie.replace(/(?:(?:^|.*;\\s*)token\\s*\\=\\s*([^;]*).*$)|^.*$/, \"$1\");\n        const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().decode(token);\n        const username = decodedToken?.username;\n        const userId = decodedToken?.user_id;\n        setUsername(username);\n        setUserId(userId);\n        console.log(userId);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userId) {\n            fetchCards(userId);\n        }\n    }, [\n        userId\n    ]);\n    //fetch la liste des cartes depuis l'API Cards/[userid]\n    async function fetchCards(userId) {\n        try {\n            const response = await fetch(`/api/cards/${userId}`);\n            const data = await response.json();\n            setCards(data.cards);\n        } catch (error) {\n            console.error(\"Error fetching cards:\", error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Header, {\n                as: \"h1\",\n                children: [\n                    \"Bienvenue, \",\n                    username\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Votre num\\xe9ro de compte : \",\n                    userId\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"ui button\",\n                onClick: handleLogout,\n                children: \"Se d\\xe9connecter\"\n            }, void 0, false, {\n                fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Vos cartes :\"\n            }, void 0, false, {\n                fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this),\n            cards.map((card)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Card ID: \",\n                                card.card_id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Card Name: \",\n                                card.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Niveau de la carte: \",\n                                card.level\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, card.id, true, {\n                    fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2xCO0FBQ0Y7QUFDdUI7QUFDWjtBQUUxQyxTQUFTTyxZQUFZO0lBQ2pCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsU0FBU1ksZUFBZTtRQUNwQkMsTUFBTSxlQUFlO1lBQ2pCQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1FBQ0osR0FDS0MsSUFBSSxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLElBQUksSUFDaENGLElBQUksQ0FBQyxDQUFDRyxPQUFTO1lBQ1pDLFNBQVNDLE1BQU0sR0FDWDtZQUNKcEIsdURBQVcsQ0FBQztRQUNoQixHQUNDc0IsS0FBSyxDQUFDLENBQUNDLFFBQVU7WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHNCQUFzQkE7UUFDeEM7SUFDUjtJQUVBekIsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU0yQixRQUFRTixTQUFTQyxNQUFNLENBQUNNLE9BQU8sQ0FDakMsZ0RBQ0E7UUFHSixNQUFNQyxlQUFlMUIsMERBQVUsQ0FBQ3dCO1FBRWhDLE1BQU1wQixXQUFXc0IsY0FBY3RCO1FBQy9CLE1BQU1FLFNBQVNvQixjQUFjRTtRQUU3QnZCLFlBQVlEO1FBQ1pHLFVBQVVEO1FBQ1ZpQixRQUFRTSxHQUFHLENBQUN2QjtJQUNoQixHQUFHLEVBQUU7SUFFTFQsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUlTLFFBQVE7WUFDUndCLFdBQVd4QjtRQUNmLENBQUM7SUFDTCxHQUFHO1FBQUNBO0tBQU87SUFFWCx1REFBdUQ7SUFDdkQsZUFBZXdCLFdBQVd4QixNQUFNLEVBQUU7UUFDOUIsSUFBSTtZQUNBLE1BQU1TLFdBQVcsTUFBTUosTUFBTSxDQUFDLFdBQVcsRUFBRUwsT0FBTyxDQUFDO1lBQ25ELE1BQU1XLE9BQU8sTUFBTUYsU0FBU0MsSUFBSTtZQUNoQ1AsU0FBU1EsS0FBS1QsS0FBSztRQUN2QixFQUFFLE9BQU9jLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7UUFDM0M7SUFDSjtJQUVBLHFCQUNJLDhEQUFDckIsd0RBQVNBOzswQkFDTiw4REFBQ0MscURBQU1BO2dCQUFDNkIsSUFBRzs7b0JBQUs7b0JBQVkzQjs7Ozs7OzswQkFDNUIsOERBQUM0Qjs7b0JBQUc7b0JBQTBCMUI7Ozs7Ozs7MEJBQzlCLDhEQUFDMkI7Z0JBQU9DLFdBQVU7Z0JBQVlDLFNBQVN6QjswQkFBYzs7Ozs7OzBCQUtyRCw4REFBQzBCOzBCQUFHOzs7Ozs7WUFDSDVCLE1BQU02QixHQUFHLENBQUMsQ0FBQ0MscUJBQ1IsOERBQUNDOztzQ0FDRyw4REFBQ0M7O2dDQUFFO2dDQUFVRixLQUFLRyxPQUFPOzs7Ozs7O3NDQUN6Qiw4REFBQ0Q7O2dDQUFFO2dDQUFZRixLQUFLSSxJQUFJOzs7Ozs7O3NDQUN4Qiw4REFBQ0Y7O2dDQUFFO2dDQUFxQkYsS0FBS0ssS0FBSzs7Ozs7Ozs7bUJBSDVCTCxLQUFLTSxFQUFFOzs7Ozs7Ozs7OztBQVFqQztBQUVBLGlFQUFlekMsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vb25mbG93ZXIvLi9zcmMvcGFnZXMvZGFzaGJvYXJkLmpzPzM2NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xuXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2NhcmRzLCBzZXRDYXJkc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVMb2dvdXQoKSB7XG4gICAgICAgIGZldGNoKFwiL2FwaS9sb2dvdXRcIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID1cbiAgICAgICAgICAgICAgICAgICAgXCJ0b2tlbj07IFBhdGg9LzsgRXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDtcIjtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2dnaW5nIG91dDpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBkb2N1bWVudC5jb29raWUucmVwbGFjZShcbiAgICAgICAgICAgIC8oPzooPzpefC4qO1xccyopdG9rZW5cXHMqXFw9XFxzKihbXjtdKikuKiQpfF4uKiQvLFxuICAgICAgICAgICAgXCIkMVwiXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gand0LmRlY29kZSh0b2tlbik7XG5cbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBkZWNvZGVkVG9rZW4/LnVzZXJuYW1lO1xuICAgICAgICBjb25zdCB1c2VySWQgPSBkZWNvZGVkVG9rZW4/LnVzZXJfaWQ7XG5cbiAgICAgICAgc2V0VXNlcm5hbWUodXNlcm5hbWUpO1xuICAgICAgICBzZXRVc2VySWQodXNlcklkKTtcbiAgICAgICAgY29uc29sZS5sb2codXNlcklkKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBmZXRjaENhcmRzKHVzZXJJZCk7XG4gICAgICAgIH1cbiAgICB9LCBbdXNlcklkXSk7XG5cbiAgICAvL2ZldGNoIGxhIGxpc3RlIGRlcyBjYXJ0ZXMgZGVwdWlzIGwnQVBJIENhcmRzL1t1c2VyaWRdXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDYXJkcyh1c2VySWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvY2FyZHMvJHt1c2VySWR9YCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgc2V0Q2FyZHMoZGF0YS5jYXJkcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FyZHM6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDFcIj5CaWVudmVudWUsIHt1c2VybmFtZX08L0hlYWRlcj5cbiAgICAgICAgICAgIDxoMj5Wb3RyZSBudW3DqXJvIGRlIGNvbXB0ZSA6IHt1c2VySWR9PC9oMj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgYnV0dG9uXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cbiAgICAgICAgICAgICAgICBTZSBkw6ljb25uZWN0ZXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICB7LyogRGlzcGxheSB0aGUgY2FyZHMgKi99XG4gICAgICAgICAgICA8aDM+Vm9zIGNhcnRlcyA6PC9oMz5cbiAgICAgICAgICAgIHtjYXJkcy5tYXAoKGNhcmQpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2FyZC5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNhcmQgSUQ6IHtjYXJkLmNhcmRfaWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5DYXJkIE5hbWU6IHtjYXJkLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5OaXZlYXUgZGUgbGEgY2FydGU6IHtjYXJkLmxldmVsfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsImp3dCIsIkNvbnRhaW5lciIsIkhlYWRlciIsIkRhc2hib2FyZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJjYXJkcyIsInNldENhcmRzIiwiaGFuZGxlTG9nb3V0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkb2N1bWVudCIsImNvb2tpZSIsInB1c2giLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInRva2VuIiwicmVwbGFjZSIsImRlY29kZWRUb2tlbiIsImRlY29kZSIsInVzZXJfaWQiLCJsb2ciLCJmZXRjaENhcmRzIiwiYXMiLCJoMiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJoMyIsIm1hcCIsImNhcmQiLCJkaXYiLCJwIiwiY2FyZF9pZCIsIm5hbWUiLCJsZXZlbCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/dashboard.js\n");

/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/dashboard.js"));
module.exports = __webpack_exports__;

})();