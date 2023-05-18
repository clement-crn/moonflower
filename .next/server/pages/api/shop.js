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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ shop)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n// shop.ts api\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_1__.config)();\nasync function shop(req, res) {\n    try {\n        const connection = await (0,mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createConnection)({\n            host: process.env.DB_HOST,\n            user: process.env.DB_USER,\n            password: process.env.DB_PASSWORD,\n            database: process.env.DB_NAME\n        });\n        const [shopItems] = await connection.execute(`\n      SELECT * from shop\n    `);\n        connection.end();\n        return res.status(200).json({\n            shop: shopItems\n        });\n    } catch (err) {\n        console.error(err);\n        return res.status(500).json({\n            message: \"Error retrieving shop items\",\n            error: err\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Nob3AudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxjQUFjO0FBRW9DO0FBQ2xCO0FBQ2hDQyw4Q0FBTUE7QUFRUyxlQUFlQyxLQUFLQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQzVFLElBQUk7UUFDRixNQUFNQyxhQUFhLE1BQU1MLGdFQUFnQkEsQ0FBQztZQUN4Q00sTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPO1lBQ3pCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLE9BQU87WUFDekJDLFVBQVVMLFFBQVFDLEdBQUcsQ0FBQ0ssV0FBVztZQUNqQ0MsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxPQUFPO1FBQy9CO1FBRUEsTUFBTSxDQUFDQyxVQUFVLEdBQUcsTUFBTVgsV0FBV1ksT0FBTyxDQUFhLENBQUM7O0lBRTFELENBQUM7UUFFRFosV0FBV2EsR0FBRztRQUVkLE9BQU9kLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRWxCLE1BQU1jO1FBQVU7SUFDaEQsRUFBRSxPQUFPSyxLQUFLO1FBQ1pDLFFBQVFDLEtBQUssQ0FBQ0Y7UUFDZCxPQUFPakIsSUFDSmUsTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQztZQUFFSSxTQUFTO1lBQStCRCxPQUFPRjtRQUFJO0lBQy9EO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vb25mbG93ZXIvLi9zcmMvcGFnZXMvYXBpL3Nob3AudHM/M2I2MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzaG9wLnRzIGFwaVxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uIH0gZnJvbSBcIm15c3FsMi9wcm9taXNlXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiZG90ZW52XCI7XG5jb25maWcoKTtcblxuaW50ZXJmYWNlIFNob3BJdGVtIHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzaG9wKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkRCX1VTRVIsXG4gICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQsXG4gICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcbiAgICB9KTtcblxuICAgIGNvbnN0IFtzaG9wSXRlbXNdID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlPFNob3BJdGVtW10+KGBcbiAgICAgIFNFTEVDVCAqIGZyb20gc2hvcFxuICAgIGApO1xuICAgIFxuICAgIGNvbm5lY3Rpb24uZW5kKCk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzaG9wOiBzaG9wSXRlbXMgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gcmVzXG4gICAgICAuc3RhdHVzKDUwMClcbiAgICAgIC5qc29uKHsgbWVzc2FnZTogXCJFcnJvciByZXRyaWV2aW5nIHNob3AgaXRlbXNcIiwgZXJyb3I6IGVyciB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbm5lY3Rpb24iLCJjb25maWciLCJzaG9wIiwicmVxIiwicmVzIiwiY29ubmVjdGlvbiIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiREJfSE9TVCIsInVzZXIiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsImRhdGFiYXNlIiwiREJfTkFNRSIsInNob3BJdGVtcyIsImV4ZWN1dGUiLCJlbmQiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/shop.ts\n");

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