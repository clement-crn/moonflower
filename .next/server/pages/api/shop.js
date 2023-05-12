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
exports.id = "pages/api/shop";
exports.ids = ["pages/api/shop"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./src/pages/api/shop.ts":
/*!*******************************!*\
  !*** ./src/pages/api/shop.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ shop)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_1__.config)();\nasync function shop(req, res) {\n    try {\n        const connection = await (0,mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createConnection)({\n            host: process.env.DB_HOST,\n            user: process.env.DB_USER,\n            password: process.env.DB_PASSWORD,\n            database: process.env.DB_NAME\n        });\n        const [shopItems] = await connection.execute(\"SELECT * FROM shop\");\n        connection.end();\n        return res.status(200).json({\n            shop: shopItems\n        });\n    } catch (err) {\n        console.error(err);\n        return res.status(500).json({\n            message: \"Error retrieving shop items\",\n            error: err\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Nob3AudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDa0Q7QUFDbEI7QUFDaENDLDhDQUFNQTtBQVFTLGVBQWVDLEtBQUtDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDNUUsSUFBSTtRQUNGLE1BQU1DLGFBQWEsTUFBTUwsZ0VBQWdCQSxDQUFDO1lBQ3hDTSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLE9BQU87WUFDekJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csT0FBTztZQUN6QkMsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxXQUFXO1lBQ2pDQyxVQUFVUCxRQUFRQyxHQUFHLENBQUNPLE9BQU87UUFDL0I7UUFFQSxNQUFNLENBQUNDLFVBQVUsR0FBRyxNQUFNWCxXQUFXWSxPQUFPLENBQVM7UUFFckRaLFdBQVdhLEdBQUc7UUFFZCxPQUFPZCxJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVsQixNQUFNYztRQUFVO0lBQ2hELEVBQUUsT0FBT0ssS0FBSztRQUNaQyxRQUFRQyxLQUFLLENBQUNGO1FBQ2QsT0FBT2pCLElBQ0plLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7WUFBRUksU0FBUztZQUErQkQsT0FBT0Y7UUFBSTtJQUMvRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb29uZmxvd2VyLy4vc3JjL3BhZ2VzL2FwaS9zaG9wLnRzPzNiNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uIH0gZnJvbSBcIm15c3FsMi9wcm9taXNlXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiZG90ZW52XCI7XG5jb25maWcoKTtcblxuaW50ZXJmYWNlIENhcmQge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNob3AocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgY3JlYXRlQ29ubmVjdGlvbih7XG4gICAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcbiAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcbiAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxuICAgIH0pO1xuXG4gICAgY29uc3QgW3Nob3BJdGVtc10gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGU8Q2FyZFtdPihcIlNFTEVDVCAqIEZST00gc2hvcFwiKTtcblxuICAgIGNvbm5lY3Rpb24uZW5kKCk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzaG9wOiBzaG9wSXRlbXMgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gcmVzXG4gICAgICAuc3RhdHVzKDUwMClcbiAgICAgIC5qc29uKHsgbWVzc2FnZTogXCJFcnJvciByZXRyaWV2aW5nIHNob3AgaXRlbXNcIiwgZXJyb3I6IGVyciB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbm5lY3Rpb24iLCJjb25maWciLCJzaG9wIiwicmVxIiwicmVzIiwiY29ubmVjdGlvbiIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiREJfSE9TVCIsInVzZXIiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsImRhdGFiYXNlIiwiREJfTkFNRSIsInNob3BJdGVtcyIsImV4ZWN1dGUiLCJlbmQiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/shop.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/shop.ts"));
module.exports = __webpack_exports__;

})();