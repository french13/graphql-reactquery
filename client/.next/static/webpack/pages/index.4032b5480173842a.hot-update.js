"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MessageList.js":
/*!***********************************!*\
  !*** ./components/MessageList.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MessageItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageItem */ \"./components/MessageItem.js\");\n\n\n\nconst UserIds = [\n    \"roy\",\n    \"jay\"\n];\nconst getRandomUserId = ()=>{\n    return UserIds[Math.round(Math.random())];\n};\nconst messages = Array(50).fill(0).map((item, i)=>{\n    return {\n        id: i + 1,\n        userId: getRandomUserId(),\n        timestamp: 1234567890123 + i * 1000 * 60,\n        text: \"\".concat(i + 1, \" mock text\")\n    };\n});\n// [\n//   {\n//     id : 1, \n//     userId : getRandomUserId,\n//     timestamp : 1234567890123,\n//     text : '1 mock text',\n//   }\n// ]\nconst MessageList = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"messages\",\n        children: messages.map((item, i)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                ...item\n            }, item.id, false, {\n                fileName: \"C:\\\\Users\\\\jungh\\\\Desktop\\\\french13\\\\graphql-reactquery\\\\client\\\\components\\\\MessageList.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jungh\\\\Desktop\\\\french13\\\\graphql-reactquery\\\\client\\\\components\\\\MessageList.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MessageList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageList);\nvar _c;\n$RefreshReg$(_c, \"MessageList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lc3NhZ2VMaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDYztBQUV2QyxNQUFNRSxVQUFVO0lBQUM7SUFBTztDQUFNO0FBRTlCLE1BQU1DLGtCQUFrQixJQUFLO0lBQzNCLE9BQU9ELE9BQU8sQ0FBQ0UsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLElBQUk7QUFDM0M7QUFFQSxNQUFNQyxXQUFXQyxNQUFNLElBQUlDLElBQUksQ0FBQyxHQUFHQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsSUFBSTtJQUNoRCxPQUNFO1FBQ0VDLElBQUtELElBQUU7UUFDUEUsUUFBU1g7UUFDVFksV0FBWSxnQkFBY0gsSUFBRSxPQUFLO1FBQ2pDSSxNQUFPLEdBQU8sT0FBSkosSUFBRSxHQUFFO0lBQ2hCO0FBRUo7QUFHQSxJQUFJO0FBQ0osTUFBTTtBQUNOLGVBQWU7QUFDZixnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBQ2pDLDRCQUE0QjtBQUM1QixNQUFNO0FBQ04sSUFBSTtBQUVKLE1BQU1LLGNBQWMsSUFBTTtJQUN4QixxQkFDRSw4REFBQ0M7UUFBR0MsV0FBVTtrQkFFVlosU0FBU0csR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQU07WUFDeEIscUJBQ0UsOERBQUNYLG9EQUFXQTtnQkFBZ0IsR0FBR1UsSUFBSTtlQUFqQkEsS0FBS0UsRUFBRTs7Ozs7UUFFN0I7Ozs7OztBQUlSO0tBWk1JO0FBY04sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlTGlzdC5qcz9iNzhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1lc3NhZ2VJdGVtIGZyb20gJy4vTWVzc2FnZUl0ZW0nXHJcblxyXG5jb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J11cclxuXHJcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+e1xyXG4gIHJldHVybiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldIFxyXG59XHJcblxyXG5jb25zdCBtZXNzYWdlcyA9IEFycmF5KDUwKS5maWxsKDApLm1hcCgoaXRlbSwgaSk9PntcclxuICByZXR1cm4gKFxyXG4gICAge1xyXG4gICAgICBpZCA6IGkrMSxcclxuICAgICAgdXNlcklkIDogZ2V0UmFuZG9tVXNlcklkKCksXHJcbiAgICAgIHRpbWVzdGFtcCA6IDEyMzQ1Njc4OTAxMjMraSoxMDAwKjYwLFxyXG4gICAgICB0ZXh0IDogYCR7aSsxfSBtb2NrIHRleHRgXHJcbiAgICB9XHJcbiAgKVxyXG59KVxyXG5cclxuXHJcbi8vIFtcclxuLy8gICB7XHJcbi8vICAgICBpZCA6IDEsIFxyXG4vLyAgICAgdXNlcklkIDogZ2V0UmFuZG9tVXNlcklkLFxyXG4vLyAgICAgdGltZXN0YW1wIDogMTIzNDU2Nzg5MDEyMyxcclxuLy8gICAgIHRleHQgOiAnMSBtb2NrIHRleHQnLFxyXG4vLyAgIH1cclxuLy8gXVxyXG5cclxuY29uc3QgTWVzc2FnZUxpc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9J21lc3NhZ2VzJz5cclxuICAgICAge1xyXG4gICAgICAgIG1lc3NhZ2VzLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lc3NhZ2VJdGVtIGtleT17aXRlbS5pZH0gey4uLml0ZW19Lz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICA8L3VsPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUxpc3QiXSwibmFtZXMiOlsiUmVhY3QiLCJNZXNzYWdlSXRlbSIsIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJtZXNzYWdlcyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIml0ZW0iLCJpIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0IiwiTWVzc2FnZUxpc3QiLCJ1bCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MessageList.js\n"));

/***/ })

});