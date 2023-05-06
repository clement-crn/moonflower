"use strict";
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
exports.id = "pages/api/cards";
exports.ids = ["pages/api/cards"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./src/pages/api/cards.ts":
/*!********************************!*\
  !*** ./src/pages/api/cards.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cards)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_1__.config)();\nasync function cards(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    try {\n        const token = req.cookies.token; // Assuming the token is stored in a cookie\n        const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET);\n        const user_id = decodedToken.user_id;\n        // Rest of your code to retrieve cards for the user with the given user_id\n        console.log(user_id);\n        return res.status(200).json({\n            user_id\n        });\n    } catch (err) {\n        console.error(err);\n        return res.status(500).json({\n            message: \"Error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NhcmRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQytCO0FBRUM7QUFDaENDLDhDQUFNQTtBQUVTLGVBQWVDLE1BQU1DLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDN0UsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO0lBQzlELENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTUMsUUFBUU4sSUFBSU8sT0FBTyxDQUFDRCxLQUFLLEVBQUUsMkNBQTJDO1FBQzVFLE1BQU1FLGVBQWVYLDBEQUFVLENBQUNTLE9BQU9JLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtRQUM3RCxNQUFNQyxVQUFVTCxhQUFhSyxPQUFPO1FBRXBDLDBFQUEwRTtRQUM5RUMsUUFBUUMsR0FBRyxDQUFDRjtRQUNSLE9BQU9aLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRVM7UUFBUTtJQUN4QyxFQUFFLE9BQU9HLEtBQUs7UUFDWkYsUUFBUUcsS0FBSyxDQUFDRDtRQUNkLE9BQU9mLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFRO0lBQ2pEO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vb25mbG93ZXIvLi9zcmMvcGFnZXMvYXBpL2NhcmRzLnRzPzQxOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCB7IGNyZWF0ZUNvbm5lY3Rpb24gfSBmcm9tIFwibXlzcWwyL3Byb21pc2VcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJkb3RlbnZcIjtcbmNvbmZpZygpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjYXJkcyhyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJHRVRcIikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHRva2VuID0gcmVxLmNvb2tpZXMudG9rZW47IC8vIEFzc3VtaW5nIHRoZSB0b2tlbiBpcyBzdG9yZWQgaW4gYSBjb29raWVcbiAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcbiAgICBjb25zdCB1c2VyX2lkID0gZGVjb2RlZFRva2VuLnVzZXJfaWQ7XG5cbiAgICAvLyBSZXN0IG9mIHlvdXIgY29kZSB0byByZXRyaWV2ZSBjYXJkcyBmb3IgdGhlIHVzZXIgd2l0aCB0aGUgZ2l2ZW4gdXNlcl9pZFxuY29uc29sZS5sb2codXNlcl9pZCk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdXNlcl9pZCB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiRXJyb3JcIiB9KTtcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiand0IiwiY29uZmlnIiwiY2FyZHMiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInRva2VuIiwiY29va2llcyIsImRlY29kZWRUb2tlbiIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwidXNlcl9pZCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/cards.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/cards.ts"));
module.exports = __webpack_exports__;

})();