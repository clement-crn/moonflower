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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

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

/***/ "(api)/./src/pages/api/register.ts":
/*!***********************************!*\
  !*** ./src/pages/api/register.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_1__.config)();\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { username , email , password  } = req.body;\n        try {\n            // Hash the password\n            const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 10);\n            const connection = await (0,mysql2_promise__WEBPACK_IMPORTED_MODULE_2__.createConnection)({\n                host: process.env.DB_HOST,\n                user: process.env.DB_USER,\n                password: process.env.DB_PASSWORD,\n                database: process.env.DB_NAME\n            });\n            await connection.query(\"INSERT INTO users (username, email, password) VALUES (?, ?, ?)\", [\n                username,\n                email,\n                hashedPassword\n            ]);\n            connection.end();\n            res.status(200).json({\n                message: \"utilisateur ajout\\xe9!\"\n            });\n        } catch (err) {\n            console.error(err);\n            res.status(500).json({\n                message: \"Impossible de s'inscrire, veuillez reessayer\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"METHODE IMPOSSIBLE\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3JlZ2lzdGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDOEI7QUFDRjtBQUNzQjtBQUNsQjtBQUNoQ0csOENBQU1BO0FBQ05GLG9EQUFhO0FBRUUsZUFBZUcsUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHTCxJQUFJTSxJQUFJO1FBRTlDLElBQUk7WUFDRixvQkFBb0I7WUFDcEIsTUFBTUMsaUJBQWlCLE1BQU1aLG9EQUFXLENBQUNVLFVBQVU7WUFFbkQsTUFBTUksYUFBYSxNQUFNWixnRUFBZ0JBLENBQUM7Z0JBQ3RDYSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLE9BQU87Z0JBQ3pCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLE9BQU87Z0JBQ3pCVixVQUFVTSxRQUFRQyxHQUFHLENBQUNJLFdBQVc7Z0JBQ2pDQyxVQUFVTixRQUFRQyxHQUFHLENBQUNNLE9BQU87WUFDakM7WUFFQSxNQUFNVCxXQUFXVSxLQUFLLENBQ3BCLGtFQUNBO2dCQUFDaEI7Z0JBQVVDO2dCQUFPRzthQUFlO1lBR25DRSxXQUFXVyxHQUFHO1lBRWRuQixJQUFJb0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFzQjtRQUN4RCxFQUFFLE9BQU9DLEtBQUs7WUFDWkMsUUFBUUMsS0FBSyxDQUFDRjtZQUNkdkIsSUFBSW9CLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQ25CQyxTQUFTO1lBQ1g7UUFDRjtJQUNGLE9BQU87UUFDTHRCLElBQUlvQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBcUI7SUFDdkQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb29uZmxvd2VyLy4vc3JjL3BhZ2VzL2FwaS9yZWdpc3Rlci50cz80M2ZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gXCJteXNxbDIvcHJvbWlzZVwiO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xuY29uZmlnKCk7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBIYXNoIHRoZSBwYXNzd29yZFxuICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgY3JlYXRlQ29ubmVjdGlvbih7XG4gICAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxuICAgICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcbiAgICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KFxuICAgICAgICBcIklOU0VSVCBJTlRPIHVzZXJzICh1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkKSBWQUxVRVMgKD8sID8sID8pXCIsXG4gICAgICAgIFt1c2VybmFtZSwgZW1haWwsIGhhc2hlZFBhc3N3b3JkXVxuICAgICAgKTtcblxuICAgICAgY29ubmVjdGlvbi5lbmQoKTtcblxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcInV0aWxpc2F0ZXVyIGFqb3V0w6khXCIgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6IFwiSW1wb3NzaWJsZSBkZSBzJ2luc2NyaXJlLCB2ZXVpbGxleiByZWVzc2F5ZXJcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTUVUSE9ERSBJTVBPU1NJQkxFXCIgfSk7XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbImJjcnlwdCIsImRvdGVudiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJjb25maWciLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsImNvbm5lY3Rpb24iLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkRCX0hPU1QiLCJ1c2VyIiwiREJfVVNFUiIsIkRCX1BBU1NXT1JEIiwiZGF0YWJhc2UiLCJEQl9OQU1FIiwicXVlcnkiLCJlbmQiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/register.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/register.ts"));
module.exports = __webpack_exports__;

})();