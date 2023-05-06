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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./src/pages/api/login.ts":
/*!********************************!*\
  !*** ./src/pages/api/login.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_3__.config)();\nasync function login(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"methode impossible\"\n        });\n    }\n    const { username , password  } = req.body;\n    try {\n        const connection = await (0,mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection)({\n            host: process.env.DB_HOST,\n            user: process.env.DB_USER,\n            password: process.env.DB_PASSWORD,\n            database: process.env.DB_NAME\n        });\n        const [result] = await connection.execute(\"SELECT user_id, username, password FROM users WHERE username = ?\", [\n            username\n        ]);\n        if (result.length > 0) {\n            const user = result[0];\n            const match = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(password, user.password);\n            if (match) {\n                const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n                    user_id: user.user_id,\n                    username: user.username\n                }, process.env.JWT_SECRET, {\n                    expiresIn: \"1h\"\n                });\n                res.setHeader(\"Set-Cookie\", `token=${token}; path=/`);\n                return res.status(200).json({\n                    message: \"CONNECT\\xc9\"\n                });\n            } else {\n                return res.status(401).json({\n                    message: \"MAUVAIS IDENTIFIANTS\"\n                });\n            }\n        } else {\n            return res.status(401).json({\n                message: \"MAUVAIS IDENTIFIANTS\"\n            });\n        }\n        connection.end();\n    } catch (err) {\n        console.error(err);\n        return res.status(500).json({\n            message: \"ECHEC\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNtQjtBQUNwQjtBQUNFO0FBQ2hDRyw4Q0FBTUE7QUFHUyxlQUFlQyxNQUM1QkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO0lBQzlELENBQUM7SUFFRCxNQUFNLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFFLEdBQUdQLElBQUlRLElBQUk7SUFFdkMsSUFBSTtRQUNGLE1BQU1DLGFBQWEsTUFBTWIsZ0VBQWdCQSxDQUFDO1lBQ3hDYyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLE9BQU87WUFDekJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csT0FBTztZQUN6QlIsVUFBVUksUUFBUUMsR0FBRyxDQUFDSSxXQUFXO1lBQ2pDQyxVQUFVTixRQUFRQyxHQUFHLENBQUNNLE9BQU87UUFDL0I7UUFHQSxNQUFNLENBQUNDLE9BQU8sR0FBRyxNQUFNVixXQUFXVyxPQUFPLENBQ3ZDLG9FQUNBO1lBQUNkO1NBQVM7UUFHWixJQUFJYSxPQUFPRSxNQUFNLEdBQUcsR0FBRztZQUNyQixNQUFNUCxPQUFPSyxNQUFNLENBQUMsRUFBRTtZQUV0QixNQUFNRyxRQUFRLE1BQU16Qix1REFBYyxDQUFDVSxVQUFVTyxLQUFLUCxRQUFRO1lBQzFELElBQUllLE9BQU87Z0JBQ1QsTUFBTUUsUUFBUTdCLHdEQUFRLENBQ3BCO29CQUFFK0IsU0FBU1osS0FBS1ksT0FBTztvQkFBRXBCLFVBQVVRLEtBQUtSLFFBQVE7Z0JBQUMsR0FDakRLLFFBQVFDLEdBQUcsQ0FBQ2UsVUFBVSxFQUFFO29CQUN4QkMsV0FBVztnQkFDYjtnQkFJQTNCLElBQUk0QixTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRUwsTUFBTSxRQUFRLENBQUM7Z0JBRXBELE9BQU92QixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTO2dCQUFXO1lBQ3BELE9BQU87Z0JBQ0wsT0FBT0osSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUztnQkFBdUI7WUFDaEUsQ0FBQztRQUNILE9BQU87WUFDTCxPQUFPSixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQXVCO1FBQ2hFLENBQUM7UUFFREksV0FBV3FCLEdBQUc7SUFDaEIsRUFBRSxPQUFPQyxLQUFLO1FBQ1pDLFFBQVFDLEtBQUssQ0FBQ0Y7UUFDZCxPQUFPOUIsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQVE7SUFDakQ7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9vbmZsb3dlci8uL3NyYy9wYWdlcy9hcGkvbG9naW4udHM/ZGE5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gXCJteXNxbDIvcHJvbWlzZVwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJkb3RlbnZcIjtcbmNvbmZpZygpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwibWV0aG9kZSBpbXBvc3NpYmxlXCIgfSk7XG4gIH1cblxuICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgY3JlYXRlQ29ubmVjdGlvbih7XG4gICAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcbiAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcbiAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxuICAgIH0pO1xuICAgIFxuXG4gICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXG4gICAgICBcIlNFTEVDVCB1c2VyX2lkLCB1c2VybmFtZSwgcGFzc3dvcmQgRlJPTSB1c2VycyBXSEVSRSB1c2VybmFtZSA9ID9cIixcbiAgICAgIFt1c2VybmFtZV1cbiAgICApO1xuXG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB1c2VyID0gcmVzdWx0WzBdO1xuXG4gICAgICBjb25zdCBtYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFxuICAgICAgICAgIHsgdXNlcl9pZDogdXNlci51c2VyX2lkLCB1c2VybmFtZTogdXNlci51c2VybmFtZSB9LFxuICAgICAgICAgIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIHtcbiAgICAgICAgICBleHBpcmVzSW46IFwiMWhcIixcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICByZXMuc2V0SGVhZGVyKFwiU2V0LUNvb2tpZVwiLCBgdG9rZW49JHt0b2tlbn07IHBhdGg9L2ApO1xuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiQ09OTkVDVMOJXCIgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBcIk1BVVZBSVMgSURFTlRJRklBTlRTXCIgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiTUFVVkFJUyBJREVOVElGSUFOVFNcIiB9KTtcbiAgICB9XG5cbiAgICBjb25uZWN0aW9uLmVuZCgpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJFQ0hFQ1wiIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbImp3dCIsImNyZWF0ZUNvbm5lY3Rpb24iLCJiY3J5cHQiLCJjb25maWciLCJsb2dpbiIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImJvZHkiLCJjb25uZWN0aW9uIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJEQl9IT1NUIiwidXNlciIsIkRCX1VTRVIiLCJEQl9QQVNTV09SRCIsImRhdGFiYXNlIiwiREJfTkFNRSIsInJlc3VsdCIsImV4ZWN1dGUiLCJsZW5ndGgiLCJtYXRjaCIsImNvbXBhcmUiLCJ0b2tlbiIsInNpZ24iLCJ1c2VyX2lkIiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsInNldEhlYWRlciIsImVuZCIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/login.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/login.ts"));
module.exports = __webpack_exports__;

})();