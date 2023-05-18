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
exports.id = "pages/api/Shop/shopInventory";
exports.ids = ["pages/api/Shop/shopInventory"];
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

/***/ "(api)/./src/pages/api/Shop/shopInventory.ts":
/*!*********************************************!*\
  !*** ./src/pages/api/Shop/shopInventory.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ shopInventory)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_1__.config)();\nasync function shopInventory(req, res) {\n    try {\n        const connection = await (0,mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createConnection)({\n            host: process.env.DB_HOST,\n            user: process.env.DB_USER,\n            password: process.env.DB_PASSWORD,\n            database: process.env.DB_NAME\n        });\n        const [shopItems] = await connection.execute(`\n      SELECT * from ShopInventory\n    `);\n        connection.end();\n        return res.status(200).json({\n            shop: shopItems\n        });\n    } catch (err) {\n        console.error(err);\n        return res.status(500).json({\n            message: \"Error retrieving shop items\",\n            error: err\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL1Nob3Avc2hvcEludmVudG9yeS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVrRDtBQUNsQjtBQUNoQ0MsOENBQU1BO0FBU1MsZUFBZUMsY0FBY0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUNyRixJQUFJO1FBQ0YsTUFBTUMsYUFBYSxNQUFNTCxnRUFBZ0JBLENBQUM7WUFDeENNLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTztZQUN6QkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxPQUFPO1lBQ3pCQyxVQUFVTCxRQUFRQyxHQUFHLENBQUNLLFdBQVc7WUFDakNDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sT0FBTztRQUMvQjtRQUVBLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHLE1BQU1YLFdBQVdZLE9BQU8sQ0FBYSxDQUFDOztJQUUxRCxDQUFDO1FBRURaLFdBQVdhLEdBQUc7UUFFZCxPQUFPZCxJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE1BQU1MO1FBQVU7SUFDaEQsRUFBRSxPQUFPTSxLQUFLO1FBQ1pDLFFBQVFDLEtBQUssQ0FBQ0Y7UUFDZCxPQUFPbEIsSUFDSmUsTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQztZQUFFSyxTQUFTO1lBQStCRCxPQUFPRjtRQUFJO0lBQy9EO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vb25mbG93ZXIvLi9zcmMvcGFnZXMvYXBpL1Nob3Avc2hvcEludmVudG9yeS50cz84MmU4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uIH0gZnJvbSBcIm15c3FsMi9wcm9taXNlXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiZG90ZW52XCI7XG5jb25maWcoKTtcblxuaW50ZXJmYWNlIFNob3BJdGVtIHtcbiAgc2hvcF9pbnZlbnRvcnlfaWQ6IG51bWJlcjtcbiAgaXRlbV9pZDogc3RyaW5nO1xuICBjYXRlZ29yeTogbnVtYmVyO1xuICBxdWFudGl0eTpudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNob3BJbnZlbnRvcnkocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgY3JlYXRlQ29ubmVjdGlvbih7XG4gICAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcbiAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcbiAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxuICAgIH0pO1xuXG4gICAgY29uc3QgW3Nob3BJdGVtc10gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGU8U2hvcEl0ZW1bXT4oYFxuICAgICAgU0VMRUNUICogZnJvbSBTaG9wSW52ZW50b3J5XG4gICAgYCk7XG4gICAgXG4gICAgY29ubmVjdGlvbi5lbmQoKTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHNob3A6IHNob3BJdGVtcyB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJldHVybiByZXNcbiAgICAgIC5zdGF0dXMoNTAwKVxuICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIkVycm9yIHJldHJpZXZpbmcgc2hvcCBpdGVtc1wiLCBlcnJvcjogZXJyIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29ubmVjdGlvbiIsImNvbmZpZyIsInNob3BJbnZlbnRvcnkiLCJyZXEiLCJyZXMiLCJjb25uZWN0aW9uIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJEQl9IT1NUIiwidXNlciIsIkRCX1VTRVIiLCJwYXNzd29yZCIsIkRCX1BBU1NXT1JEIiwiZGF0YWJhc2UiLCJEQl9OQU1FIiwic2hvcEl0ZW1zIiwiZXhlY3V0ZSIsImVuZCIsInN0YXR1cyIsImpzb24iLCJzaG9wIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/Shop/shopInventory.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/Shop/shopInventory.ts"));
module.exports = __webpack_exports__;

})();