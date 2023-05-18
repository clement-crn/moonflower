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
exports.id = "pages/api/flowerCharacteristics";
exports.ids = ["pages/api/flowerCharacteristics"];
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

/***/ "(api)/./src/pages/api/flowerCharacteristics.ts":
/*!************************************************!*\
  !*** ./src/pages/api/flowerCharacteristics.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_1__.config)();\nasync function handler(req, res) {\n    const { item_id  } = req.query;\n    console.log(\"TEST\", item_id);\n    const connection = await (0,mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createConnection)({\n        host: process.env.DB_HOST || \"localhost\",\n        user: process.env.DB_USER || \"root\",\n        password: process.env.DB_PASSWORD || \"\",\n        database: process.env.DB_NAME || \"your_database_name\"\n    });\n    try {\n        const [rows] = await connection.execute(\"SELECT * FROM Flowers WHERE item_id = ?\", [\n            item_id\n        ]);\n        if (rows.length > 0) {\n            const flower = rows[0];\n            res.status(200).json(flower);\n            console.log(\"FLOWER\", flower);\n        } else {\n            res.status(404).json({\n                message: \"Flower not found\"\n            });\n        }\n    } catch (error) {\n        console.error(\"Error retrieving flower characteristics:\", error);\n        res.status(500).json({\n            message: \"Server error\"\n        });\n    } finally{\n        connection.end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2Zsb3dlckNoYXJhY3RlcmlzdGljcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNrRDtBQUNsQjtBQUVoQ0MsOENBQU1BO0FBRVMsZUFBZUMsUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUMvRSxNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHRixJQUFJRyxLQUFLO0lBQzdCQyxRQUFRQyxHQUFHLENBQUMsUUFBUUg7SUFFcEIsTUFBTUksYUFBYSxNQUFNVCxnRUFBZ0JBLENBQUM7UUFDeENVLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTyxJQUFJO1FBQzdCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLE9BQU8sSUFBSTtRQUM3QkMsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxXQUFXLElBQUk7UUFDckNDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sT0FBTyxJQUFJO0lBQ25DO0lBRUEsSUFBSTtRQUNGLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHLE1BQU1YLFdBQVdZLE9BQU8sQ0FDckMsMkNBQ0E7WUFBQ2hCO1NBQVE7UUFHWCxJQUFJZSxLQUFLRSxNQUFNLEdBQUcsR0FBRztZQUNuQixNQUFNQyxTQUFTSCxJQUFJLENBQUMsRUFBRTtZQUN0QmhCLElBQUlvQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRjtZQUNyQmhCLFFBQVFDLEdBQUcsQ0FBQyxVQUFVZTtRQUN4QixPQUFPO1lBQ0xuQixJQUFJb0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFtQjtRQUNyRCxDQUFDO0lBQ0gsRUFBRSxPQUFPQyxPQUFPO1FBQ2RwQixRQUFRb0IsS0FBSyxDQUFDLDRDQUE0Q0E7UUFDMUR2QixJQUFJb0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQWU7SUFDakQsU0FBVTtRQUNSakIsV0FBV21CLEdBQUc7SUFDaEI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9vbmZsb3dlci8uL3NyYy9wYWdlcy9hcGkvZmxvd2VyQ2hhcmFjdGVyaXN0aWNzLnRzPzFlNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gJ215c3FsMi9wcm9taXNlJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ2RvdGVudic7XG5cbmNvbmZpZygpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGNvbnN0IHsgaXRlbV9pZCB9ID0gcmVxLnF1ZXJ5O1xuICBjb25zb2xlLmxvZyhcIlRFU1RcIiwgaXRlbV9pZCk7XG5cbiAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QgfHwgXCJsb2NhbGhvc3RcIixcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSIHx8IFwicm9vdFwiLFxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCB8fCBcIlwiLFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FIHx8IFwieW91cl9kYXRhYmFzZV9uYW1lXCIsXG4gIH0pO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgW3Jvd3NdID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxuICAgICAgJ1NFTEVDVCAqIEZST00gRmxvd2VycyBXSEVSRSBpdGVtX2lkID0gPycsXG4gICAgICBbaXRlbV9pZF1cbiAgICApO1xuXG4gICAgaWYgKHJvd3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmxvd2VyID0gcm93c1swXTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGZsb3dlcik7XG4gICAgICBjb25zb2xlLmxvZyhcIkZMT1dFUlwiLCBmbG93ZXIpOyBcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnRmxvd2VyIG5vdCBmb3VuZCcgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJldHJpZXZpbmcgZmxvd2VyIGNoYXJhY3RlcmlzdGljczonLCBlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnU2VydmVyIGVycm9yJyB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjb25uZWN0aW9uLmVuZCgpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29ubmVjdGlvbiIsImNvbmZpZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpdGVtX2lkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdGlvbiIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiREJfSE9TVCIsInVzZXIiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsImRhdGFiYXNlIiwiREJfTkFNRSIsInJvd3MiLCJleGVjdXRlIiwibGVuZ3RoIiwiZmxvd2VyIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/flowerCharacteristics.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/flowerCharacteristics.ts"));
module.exports = __webpack_exports__;

})();