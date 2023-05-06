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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [sessionId, setSessionId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function handleLogout() {\n        fetch(\"/api/logout\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                user_id: userId,\n                session_id: sessionId\n            })\n        }).then((response)=>response.json()).then((data)=>{\n            document.cookie = \"token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;\";\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n        }).catch((error)=>{\n            console.error(\"Error logging out:\", error);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = document.cookie.replace(/(?:(?:^|.*;\\s*)token\\s*\\=\\s*([^;]*).*$)|^.*$/, \"$1\");\n        const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().decode(token);\n        const username = decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.username;\n        const userId = decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.user_id;\n        const sessionId = decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.session_id;\n        setUsername(username);\n        setUserId(userId);\n        setSessionId(sessionId);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Header, {\n                as: \"h1\",\n                children: [\n                    \"Bienvenue, \",\n                    username\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Nom d'utilisateur: \",\n                    username,\n                    \", user_id: \",\n                    userId,\n                    \", session_id: \",\n                    sessionId\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                lineNumber: 52,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"ui button\",\n                onClick: handleLogout,\n                children: \"Se d\\xe9connecter\"\n            }, void 0, false, {\n                fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/clementciron/Desktop/moonflower/src/pages/dashboard.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"WHRKdvEWfOuMKw0zfvHWnD1oras=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2xCO0FBQ0Y7QUFDdUI7QUFDWjtBQUUxQyxTQUFTTyxZQUFZOztJQUNqQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUUzQyxTQUFTWSxlQUFlO1FBQ3BCQyxNQUFNLGVBQWU7WUFDakJDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxTQUFTWDtnQkFBUVksWUFBWVY7WUFBVTtRQUNsRSxHQUNLVyxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNHLE9BQVM7WUFDWkMsU0FBU0MsTUFBTSxHQUNYO1lBQ0p6Qix1REFBVyxDQUFDO1FBQ2hCLEdBQ0MyQixLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUNkQyxRQUFRRCxLQUFLLENBQUMsc0JBQXNCQTtRQUN4QztJQUNSO0lBRUE5QixnREFBU0EsQ0FBQyxJQUFNO1FBQ1osTUFBTWdDLFFBQVFOLFNBQVNDLE1BQU0sQ0FBQ00sT0FBTyxDQUNqQyxnREFDQTtRQUdKLE1BQU1DLGVBQWUvQiwwREFBVSxDQUFDNkI7UUFFaEMsTUFBTXpCLFdBQVcyQix5QkFBQUEsMEJBQUFBLEtBQUFBLElBQUFBLGFBQWMzQixRQUFRO1FBQ3ZDLE1BQU1FLFNBQVN5Qix5QkFBQUEsMEJBQUFBLEtBQUFBLElBQUFBLGFBQWNkLE9BQU87UUFDcEMsTUFBTVQsWUFBWXVCLHlCQUFBQSwwQkFBQUEsS0FBQUEsSUFBQUEsYUFBY2IsVUFBVTtRQUUxQ2IsWUFBWUQ7UUFDWkcsVUFBVUQ7UUFDVkcsYUFBYUQ7SUFDakIsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNQLHdEQUFTQTs7MEJBQ04sOERBQUNDLHFEQUFNQTtnQkFBQytCLElBQUc7O29CQUFLO29CQUFZN0I7Ozs7Ozs7WUFDM0JBLDBCQUNHLDhEQUFDOEI7O29CQUFFO29CQUNxQjlCO29CQUFTO29CQUFZRTtvQkFBTztvQkFDbkNFOzs7Ozs7OzBCQUdyQiw4REFBQzJCO2dCQUFPQyxXQUFVO2dCQUFZQyxTQUFTM0I7MEJBQWM7Ozs7Ozs7Ozs7OztBQUtqRTtHQXZEU1A7S0FBQUE7QUF5RFQsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC5qcz8zNjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IFwic2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3NcIjtcblxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzZXNzaW9uSWQsIHNldFNlc3Npb25JZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUxvZ291dCgpIHtcbiAgICAgICAgZmV0Y2goXCIvYXBpL2xvZ291dFwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcl9pZDogdXNlcklkLCBzZXNzaW9uX2lkOiBzZXNzaW9uSWQgfSksXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID1cbiAgICAgICAgICAgICAgICAgICAgXCJ0b2tlbj07IFBhdGg9LzsgRXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDtcIjtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2dnaW5nIG91dDpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBkb2N1bWVudC5jb29raWUucmVwbGFjZShcbiAgICAgICAgICAgIC8oPzooPzpefC4qO1xccyopdG9rZW5cXHMqXFw9XFxzKihbXjtdKikuKiQpfF4uKiQvLFxuICAgICAgICAgICAgXCIkMVwiXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gand0LmRlY29kZSh0b2tlbik7XG5cbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBkZWNvZGVkVG9rZW4/LnVzZXJuYW1lO1xuICAgICAgICBjb25zdCB1c2VySWQgPSBkZWNvZGVkVG9rZW4/LnVzZXJfaWQ7XG4gICAgICAgIGNvbnN0IHNlc3Npb25JZCA9IGRlY29kZWRUb2tlbj8uc2Vzc2lvbl9pZDtcblxuICAgICAgICBzZXRVc2VybmFtZSh1c2VybmFtZSk7XG4gICAgICAgIHNldFVzZXJJZCh1c2VySWQpO1xuICAgICAgICBzZXRTZXNzaW9uSWQoc2Vzc2lvbklkKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPEhlYWRlciBhcz1cImgxXCI+QmllbnZlbnVlLCB7dXNlcm5hbWV9PC9IZWFkZXI+XG4gICAgICAgICAgICB7dXNlcm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBOb20gZCd1dGlsaXNhdGV1cjoge3VzZXJuYW1lfSwgdXNlcl9pZDoge3VzZXJJZH0sXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25faWQ6IHtzZXNzaW9uSWR9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgYnV0dG9uXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cbiAgICAgICAgICAgICAgICBTZSBkw6ljb25uZWN0ZXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsImp3dCIsIkNvbnRhaW5lciIsIkhlYWRlciIsIkRhc2hib2FyZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJzZXNzaW9uSWQiLCJzZXRTZXNzaW9uSWQiLCJoYW5kbGVMb2dvdXQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJfaWQiLCJzZXNzaW9uX2lkIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkb2N1bWVudCIsImNvb2tpZSIsInB1c2giLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInRva2VuIiwicmVwbGFjZSIsImRlY29kZWRUb2tlbiIsImRlY29kZSIsImFzIiwicCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard.js\n"));

/***/ })

});