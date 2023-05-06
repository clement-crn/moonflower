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
exports.id = "pages/api/logout";
exports.ids = ["pages/api/logout"];
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

/***/ "(api)/./src/pages/api/logout.ts":
/*!*********************************!*\
  !*** ./src/pages/api/logout.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ logout)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_1__.config)();\nasync function logout(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"M\\xe9thode non autoris\\xe9e\"\n        });\n    }\n    const { user_id  } = req.body;\n    try {\n        const connection = await (0,mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createConnection)({\n            host: process.env.DB_HOST,\n            user: process.env.DB_USER,\n            password: process.env.DB_PASSWORD,\n            database: process.env.DB_NAME\n        });\n        await connection.execute(\"UPDATE users SET session_id = NULL WHERE user_id = ?\", [\n            user_id\n        ]);\n        connection.end();\n        return res.status(200).json({\n            message: \"D\\xe9connexion r\\xe9ussie\"\n        });\n    } catch (err) {\n        console.error(err);\n        return res.status(500).json({\n            message: \"\\xc9CHEC\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvZ291dC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNrRDtBQUNsQjtBQUNoQ0MsOENBQU1BO0FBRVMsZUFBZUMsT0FBT0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUM5RSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixPQUFPRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBd0I7SUFDakUsQ0FBQztJQUVELE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdOLElBQUlPLElBQUk7SUFFNUIsSUFBSTtRQUNGLE1BQU1DLGFBQWEsTUFBTVgsZ0VBQWdCQSxDQUFDO1lBQ3hDWSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLE9BQU87WUFDekJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csT0FBTztZQUN6QkMsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxXQUFXO1lBQ2pDQyxVQUFVUCxRQUFRQyxHQUFHLENBQUNPLE9BQU87UUFDL0I7UUFHQSxNQUFNVixXQUFXVyxPQUFPLENBQUMsd0RBQXdEO1lBQUNiO1NBQVE7UUFFMUZFLFdBQVdZLEdBQUc7UUFFZCxPQUFPbkIsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXNCO0lBQy9ELEVBQUUsT0FBT2dCLEtBQUs7UUFDWkMsUUFBUUMsS0FBSyxDQUFDRjtRQUNkLE9BQU9wQixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBUTtJQUNqRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb29uZmxvd2VyLy4vc3JjL3BhZ2VzL2FwaS9sb2dvdXQudHM/NWUxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbm5lY3Rpb24gfSBmcm9tIFwibXlzcWwyL3Byb21pc2VcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJkb3RlbnZcIjtcbmNvbmZpZygpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJNw6l0aG9kZSBub24gYXV0b3Jpc8OpZVwiIH0pO1xuICB9XG5cbiAgY29uc3QgeyB1c2VyX2lkIH0gPSByZXEuYm9keTtcblxuICB0cnkge1xuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBjcmVhdGVDb25uZWN0aW9uKHtcbiAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXG4gICAgICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxuICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JELFxuICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXG4gICAgfSk7XG5cblxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShcIlVQREFURSB1c2VycyBTRVQgc2Vzc2lvbl9pZCA9IE5VTEwgV0hFUkUgdXNlcl9pZCA9ID9cIiwgW3VzZXJfaWRdKTtcblxuICAgIGNvbm5lY3Rpb24uZW5kKCk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIkTDqWNvbm5leGlvbiByw6l1c3NpZVwiIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCLDiUNIRUNcIiB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbm5lY3Rpb24iLCJjb25maWciLCJsb2dvdXQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInVzZXJfaWQiLCJib2R5IiwiY29ubmVjdGlvbiIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiREJfSE9TVCIsInVzZXIiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsImRhdGFiYXNlIiwiREJfTkFNRSIsImV4ZWN1dGUiLCJlbmQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/logout.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/logout.ts"));
module.exports = __webpack_exports__;

})();