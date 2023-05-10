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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ shop)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_1__.config)();\nasync function shop(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    try {\n        const connection = await (0,mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createConnection)({\n            host: process.env.DB_HOST,\n            user: process.env.DB_USER,\n            password: process.env.DB_PASSWORD,\n            database: process.env.DB_NAME\n        });\n        const [shopItems] = await connection.execute(\"SELECT * FROM shop\");\n        connection.end();\n        return res.status(200).json({\n            shop: shopItems\n        });\n    } catch (err) {\n        console.error(err);\n        return res.status(500).json({\n            message: \"Error retrieving shop items\",\n            error: err\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Nob3AudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJa0Q7QUFDbEI7QUFDaENDLDhDQUFNQTtBQUVTLGVBQWVDLEtBQUtDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDNUUsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO0lBQzlELENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTUMsYUFBYSxNQUFNVCxnRUFBZ0JBLENBQUM7WUFDeENVLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTztZQUN6QkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxPQUFPO1lBQ3pCQyxVQUFVTCxRQUFRQyxHQUFHLENBQUNLLFdBQVc7WUFDakNDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sT0FBTztRQUMvQjtRQUVBLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHLE1BQU1YLFdBQVdZLE9BQU8sQ0FBQztRQUU3Q1osV0FBV2EsR0FBRztRQUVkLE9BQU9sQixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVMLE1BQU1rQjtRQUFVO0lBQ2hELEVBQUUsT0FBT0csS0FBSztRQUNaQyxRQUFRQyxLQUFLLENBQUNGO1FBQ2QsT0FBT25CLElBQ0pFLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUErQmlCLE9BQU9GO1FBQUk7SUFDL0Q7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9vbmZsb3dlci8uL3NyYy9wYWdlcy9hcGkvc2hvcC50cz8zYjYwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gXCJteXNxbDIvcHJvbWlzZVwiO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xuY29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNob3AocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiR0VUXCIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIk1ldGhvZCBub3QgYWxsb3dlZFwiIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgY3JlYXRlQ29ubmVjdGlvbih7XG4gICAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcbiAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcbiAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxuICAgIH0pO1xuXG4gICAgY29uc3QgW3Nob3BJdGVtc10gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXCJTRUxFQ1QgKiBGUk9NIHNob3BcIik7XG5cbiAgICBjb25uZWN0aW9uLmVuZCgpO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc2hvcDogc2hvcEl0ZW1zIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmV0dXJuIHJlc1xuICAgICAgLnN0YXR1cyg1MDApXG4gICAgICAuanNvbih7IG1lc3NhZ2U6IFwiRXJyb3IgcmV0cmlldmluZyBzaG9wIGl0ZW1zXCIsIGVycm9yOiBlcnIgfSk7XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbm5lY3Rpb24iLCJjb25maWciLCJzaG9wIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjb25uZWN0aW9uIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJEQl9IT1NUIiwidXNlciIsIkRCX1VTRVIiLCJwYXNzd29yZCIsIkRCX1BBU1NXT1JEIiwiZGF0YWJhc2UiLCJEQl9OQU1FIiwic2hvcEl0ZW1zIiwiZXhlY3V0ZSIsImVuZCIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/shop.ts\n");

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