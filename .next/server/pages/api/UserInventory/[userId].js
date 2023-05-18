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
exports.id = "pages/api/UserInventory/[userId]";
exports.ids = ["pages/api/UserInventory/[userId]"];
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

/***/ "(api)/./src/pages/api/UserInventory/[userId].js":
/*!*************************************************!*\
  !*** ./src/pages/api/UserInventory/[userId].js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ itemByUserId)\n/* harmony export */ });\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n// item/[userId].js\n\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_2__.config)();\nasync function itemByUserId(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    const { userId  } = req.query;\n    try {\n        const connection = await (0,mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection)({\n            host: process.env.DB_HOST,\n            user: process.env.DB_USER,\n            password: process.env.DB_PASSWORD,\n            database: process.env.DB_NAME\n        });\n        const [itemResult, balanceResult] = await Promise.all([\n            connection.execute(\"SELECT * FROM UserInventory WHERE user_id = ?\", [\n                userId\n            ]),\n            connection.execute(\"SELECT balance FROM users WHERE user_id = ?\", [\n                userId\n            ])\n        ]);\n        connection.end();\n        const items = itemResult[0];\n        const balance = balanceResult[0][0].balance;\n        return res.status(200).json({\n            items,\n            balance\n        });\n    } catch (err) {\n        console.error(err);\n        return res.status(500).json({\n            message: \"Error retrieving items and balance\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL1VzZXJJbnZlbnRvcnkvW3VzZXJJZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG1CQUFtQjtBQUVvQztBQUNMO0FBQ2xCO0FBQ2hDRyw4Q0FBTUE7QUFFUyxlQUFlQyxhQUFhQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNqRCxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN0QixPQUFPRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBcUI7SUFDaEUsQ0FBQztJQUVELE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdOLElBQUlPLEtBQUs7SUFFNUIsSUFBSTtRQUNBLE1BQU1DLGFBQWEsTUFBTVgsZ0VBQWdCQSxDQUFDO1lBQ3RDWSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLE9BQU87WUFDekJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csT0FBTztZQUN6QkMsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxXQUFXO1lBQ2pDQyxVQUFVUCxRQUFRQyxHQUFHLENBQUNPLE9BQU87UUFDakM7UUFFQSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBRyxNQUFNQyxRQUFRQyxHQUFHLENBQUM7WUFDbERkLFdBQVdlLE9BQU8sQ0FDZCxpREFDQTtnQkFBQ2pCO2FBQU87WUFFWkUsV0FBV2UsT0FBTyxDQUFDLCtDQUErQztnQkFDOURqQjthQUNIO1NBQ0o7UUFFREUsV0FBV2dCLEdBQUc7UUFFZCxNQUFNQyxRQUFRTixVQUFVLENBQUMsRUFBRTtRQUMzQixNQUFNTyxVQUFVTixhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQ00sT0FBTztRQUUzQyxPQUFPekIsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFcUI7WUFBT0M7UUFBUTtJQUNqRCxFQUFFLE9BQU9DLEtBQUs7UUFDVkMsUUFBUUMsS0FBSyxDQUFDRjtRQUNkLE9BQU8xQixJQUNGRSxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBcUM7SUFDOUQ7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9vbmZsb3dlci8uL3NyYy9wYWdlcy9hcGkvVXNlckludmVudG9yeS9bdXNlcklkXS5qcz84ZmE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGl0ZW0vW3VzZXJJZF0uanNcblxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uIH0gZnJvbSBcIm15c3FsMi9wcm9taXNlXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiZG90ZW52XCI7XG5jb25maWcoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaXRlbUJ5VXNlcklkKHJlcSwgcmVzKSB7XG4gICAgaWYgKHJlcS5tZXRob2QgIT09IFwiR0VUXCIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gcmVxLnF1ZXJ5O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgICAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkRCX1VTRVIsXG4gICAgICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQsXG4gICAgICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgW2l0ZW1SZXN1bHQsIGJhbGFuY2VSZXN1bHRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgY29ubmVjdGlvbi5leGVjdXRlKFxuICAgICAgICAgICAgICAgIFwiU0VMRUNUICogRlJPTSBVc2VySW52ZW50b3J5IFdIRVJFIHVzZXJfaWQgPSA/XCIsXG4gICAgICAgICAgICAgICAgW3VzZXJJZF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjb25uZWN0aW9uLmV4ZWN1dGUoXCJTRUxFQ1QgYmFsYW5jZSBGUk9NIHVzZXJzIFdIRVJFIHVzZXJfaWQgPSA/XCIsIFtcbiAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgY29ubmVjdGlvbi5lbmQoKTtcblxuICAgICAgICBjb25zdCBpdGVtcyA9IGl0ZW1SZXN1bHRbMF07XG4gICAgICAgIGNvbnN0IGJhbGFuY2UgPSBiYWxhbmNlUmVzdWx0WzBdWzBdLmJhbGFuY2U7XG5cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgaXRlbXMsIGJhbGFuY2UgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgLnN0YXR1cyg1MDApXG4gICAgICAgICAgICAuanNvbih7IG1lc3NhZ2U6IFwiRXJyb3IgcmV0cmlldmluZyBpdGVtcyBhbmQgYmFsYW5jZVwiIH0pO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0QXBpUmVxdWVzdCIsIk5leHRBcGlSZXNwb25zZSIsImNyZWF0ZUNvbm5lY3Rpb24iLCJjb25maWciLCJpdGVtQnlVc2VySWQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInVzZXJJZCIsInF1ZXJ5IiwiY29ubmVjdGlvbiIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiREJfSE9TVCIsInVzZXIiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsImRhdGFiYXNlIiwiREJfTkFNRSIsIml0ZW1SZXN1bHQiLCJiYWxhbmNlUmVzdWx0IiwiUHJvbWlzZSIsImFsbCIsImV4ZWN1dGUiLCJlbmQiLCJpdGVtcyIsImJhbGFuY2UiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/UserInventory/[userId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/UserInventory/[userId].js"));
module.exports = __webpack_exports__;

})();