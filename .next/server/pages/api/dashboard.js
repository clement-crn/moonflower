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
exports.id = "pages/api/dashboard";
exports.ids = ["pages/api/dashboard"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./src/pages/api/dashboard.ts":
/*!************************************!*\
  !*** ./src/pages/api/dashboard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const connection = await (0,mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createConnection)({\n        host: process.env.DB_HOST,\n        user: process.env.DB_USER,\n        password: process.env.DB_PASSWORD,\n        database: process.env.DB_NAME\n    });\n    try {\n        const [rows] = await connection.execute(\"SELECT * FROM users\");\n        res.status(200).json(rows);\n    } catch (error) {\n        console.error(error);\n        res.status(500).json({\n            message: \"An error occurred\"\n        });\n    } finally{\n        connection.end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2Rhc2hib2FyZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFFbkMsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTUMsYUFBYSxNQUFNSixnRUFBZ0JBLENBQUM7UUFDdENLLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTztRQUN6QkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxPQUFPO1FBQ3pCQyxVQUFVTCxRQUFRQyxHQUFHLENBQUNLLFdBQVc7UUFDakNDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sT0FBTztJQUNqQztJQUVBLElBQUk7UUFDQSxNQUFNLENBQUNDLEtBQUssR0FBRyxNQUFNWCxXQUFXWSxPQUFPLENBQUM7UUFFeENiLElBQUljLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO0lBQ3pCLEVBQUUsT0FBT0ksT0FBTztRQUNaQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2RoQixJQUFJYyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVHLFNBQVM7UUFBb0I7SUFDeEQsU0FBVTtRQUNOakIsV0FBV2tCLEdBQUc7SUFDbEI7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9vbmZsb3dlci8uL3NyYy9wYWdlcy9hcGkvZGFzaGJvYXJkLnRzPzg0YjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gXCJteXNxbDIvcHJvbWlzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxuICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQsXG4gICAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgW3Jvd3NdID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFwiU0VMRUNUICogRlJPTSB1c2Vyc1wiKTtcblxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyb3dzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkXCIgfSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY29ubmVjdGlvbi5lbmQoKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbm5lY3Rpb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29ubmVjdGlvbiIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiREJfSE9TVCIsInVzZXIiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsImRhdGFiYXNlIiwiREJfTkFNRSIsInJvd3MiLCJleGVjdXRlIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/dashboard.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/dashboard.ts"));
module.exports = __webpack_exports__;

})();