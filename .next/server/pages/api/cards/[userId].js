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
exports.id = "pages/api/cards/[userId]";
exports.ids = ["pages/api/cards/[userId]"];
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

/***/ "next":
/*!****************************************************!*\
  !*** external "next/dist/lib/import-next-warning" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ "(api)/./src/pages/api/cards/[userId].js":
/*!*****************************************!*\
  !*** ./src/pages/api/cards/[userId].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cards)\n/* harmony export */ });\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_2__.config)();\nasync function cards(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    const { userId  } = req.query;\n    try {\n        const connection = await (0,mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection)({\n            host: process.env.DB_HOST,\n            user: process.env.DB_USER,\n            password: process.env.DB_PASSWORD,\n            database: process.env.DB_NAME\n        });\n        // recup les cartes de l'user et son solde de moonflower selon UserId\n        const [cardsResult, balanceResult] = await Promise.all([\n            connection.execute(\"SELECT * FROM cards WHERE user_id = ?\", [\n                userId\n            ]),\n            connection.execute(\"SELECT balance FROM users WHERE user_id = ?\", [\n                userId\n            ])\n        ]);\n        connection.end();\n        const cards = cardsResult[0];\n        const balance = balanceResult[0][0].balance;\n        return res.status(200).json({\n            cards,\n            balance\n        });\n    } catch (err) {\n        console.error(err);\n        return res.status(500).json({\n            message: \"Error retrieving cards and balance\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NhcmRzL1t1c2VySWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUQ7QUFDTDtBQUNsQjtBQUNoQ0csOENBQU1BO0FBRVMsZUFBZUMsTUFBTUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDMUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDdEIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO0lBQ2hFLENBQUM7SUFFRCxNQUFNLEVBQUVDLE9BQU0sRUFBRSxHQUFHTixJQUFJTyxLQUFLO0lBRTVCLElBQUk7UUFDQSxNQUFNQyxhQUFhLE1BQU1YLGdFQUFnQkEsQ0FBQztZQUN0Q1ksTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPO1lBQ3pCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLE9BQU87WUFDekJDLFVBQVVMLFFBQVFDLEdBQUcsQ0FBQ0ssV0FBVztZQUNqQ0MsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxPQUFPO1FBQ2pDO1FBRUEscUVBQXFFO1FBQ3JFLE1BQU0sQ0FBQ0MsYUFBYUMsY0FBYyxHQUFHLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQztZQUNuRGQsV0FBV2UsT0FBTyxDQUFDLHlDQUF5QztnQkFDeERqQjthQUNIO1lBQ0RFLFdBQVdlLE9BQU8sQ0FBQywrQ0FBK0M7Z0JBQzlEakI7YUFDSDtTQUNKO1FBRURFLFdBQVdnQixHQUFHO1FBRWQsTUFBTXpCLFFBQVFvQixXQUFXLENBQUMsRUFBRTtRQUM1QixNQUFNTSxVQUFVTCxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQ0ssT0FBTztRQUUzQyxPQUFPeEIsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFTDtZQUFPMEI7UUFBUTtJQUNqRCxFQUFFLE9BQU9DLEtBQUs7UUFDVkMsUUFBUUMsS0FBSyxDQUFDRjtRQUNkLE9BQU96QixJQUNGRSxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBcUM7SUFDOUQ7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9vbmZsb3dlci8uL3NyYy9wYWdlcy9hcGkvY2FyZHMvW3VzZXJJZF0uanM/NWU5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbm5lY3Rpb24gfSBmcm9tIFwibXlzcWwyL3Byb21pc2VcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJkb3RlbnZcIjtcbmNvbmZpZygpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjYXJkcyhyZXEsIHJlcykge1xuICAgIGlmIChyZXEubWV0aG9kICE9PSBcIkdFVFwiKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgeyB1c2VySWQgfSA9IHJlcS5xdWVyeTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBjcmVhdGVDb25uZWN0aW9uKHtcbiAgICAgICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXG4gICAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JELFxuICAgICAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlY3VwIGxlcyBjYXJ0ZXMgZGUgbCd1c2VyIGV0IHNvbiBzb2xkZSBkZSBtb29uZmxvd2VyIHNlbG9uIFVzZXJJZFxuICAgICAgICBjb25zdCBbY2FyZHNSZXN1bHQsIGJhbGFuY2VSZXN1bHRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgY29ubmVjdGlvbi5leGVjdXRlKFwiU0VMRUNUICogRlJPTSBjYXJkcyBXSEVSRSB1c2VyX2lkID0gP1wiLCBbXG4gICAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBjb25uZWN0aW9uLmV4ZWN1dGUoXCJTRUxFQ1QgYmFsYW5jZSBGUk9NIHVzZXJzIFdIRVJFIHVzZXJfaWQgPSA/XCIsIFtcbiAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgY29ubmVjdGlvbi5lbmQoKTtcblxuICAgICAgICBjb25zdCBjYXJkcyA9IGNhcmRzUmVzdWx0WzBdO1xuICAgICAgICBjb25zdCBiYWxhbmNlID0gYmFsYW5jZVJlc3VsdFswXVswXS5iYWxhbmNlO1xuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGNhcmRzLCBiYWxhbmNlIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgIC5zdGF0dXMoNTAwKVxuICAgICAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIkVycm9yIHJldHJpZXZpbmcgY2FyZHMgYW5kIGJhbGFuY2VcIiB9KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dEFwaVJlcXVlc3QiLCJOZXh0QXBpUmVzcG9uc2UiLCJjcmVhdGVDb25uZWN0aW9uIiwiY29uZmlnIiwiY2FyZHMiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInVzZXJJZCIsInF1ZXJ5IiwiY29ubmVjdGlvbiIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiREJfSE9TVCIsInVzZXIiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsImRhdGFiYXNlIiwiREJfTkFNRSIsImNhcmRzUmVzdWx0IiwiYmFsYW5jZVJlc3VsdCIsIlByb21pc2UiLCJhbGwiLCJleGVjdXRlIiwiZW5kIiwiYmFsYW5jZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/cards/[userId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/cards/[userId].js"));
module.exports = __webpack_exports__;

})();