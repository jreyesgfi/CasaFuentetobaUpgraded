/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/booking",{

/***/ "./src/components/FormInput/FormInput.js":
/*!***********************************************!*\
  !*** ./src/components/FormInput/FormInput.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FormInputStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormInputStyles */ \"./src/components/FormInput/FormInputStyles.js\");\n/* harmony import */ var _FormInputStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FormInputStyles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"D:\\\\Programacion\\\\React\\\\casa-fuentetoba-upgraded\\\\src\\\\components\\\\FormInput\\\\FormInput.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nconst FormInput = props => {\n  _s();\n\n  const {\n    0: text,\n    1: SetText\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props?.originalValue); // handle phone change\n\n  const handleChange = event => {\n    var value = event?.target?.value;\n    console.log(value);\n    console.log(props?.phone);\n\n    if (props?.phone === true) {\n      value = value.slice(0, 9);\n    }\n\n    console.log(value);\n    SetText(value); //set the information to the form\n\n    props?.['setValue'](value);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_FormInputStyles__WEBPACK_IMPORTED_MODULE_1__.FormInputWrapper, {\n    longText: props?.longText,\n    filled: text?.[0],\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_FormInputStyles__WEBPACK_IMPORTED_MODULE_1__.FormLabelDesign, {\n      children: props?.['label'] || props?.['class'] || 'Escriba aquí'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, undefined), props?.longText === undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_FormInputStyles__WEBPACK_IMPORTED_MODULE_1__.FormInputDesign, {\n      type: props?.['type'] || 'text',\n      onChange: handleChange,\n      value: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 45\n    }, undefined), props?.longText && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_FormInputStyles__WEBPACK_IMPORTED_MODULE_1__.FormTextArea, {\n      type: props?.['type'] || 'text',\n      onChange: event => {\n        const value = event?.target?.value;\n        SetText(value); //set the information to the form\n\n        props?.['setValue'](value);\n      },\n      value: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 33\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 8\n  }, undefined);\n};\n\n_s(FormInput, \"Kq79v1Vvht2HLuizM63FZMmkUdI=\");\n\n_c = FormInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormInput);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormInput\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtSW5wdXQvRm9ybUlucHV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1NLFNBQVMsR0FBSUMsS0FBRCxJQUFTO0VBQUE7O0VBQ3ZCLE1BQU07SUFBQSxHQUFDQyxJQUFEO0lBQUEsR0FBT0M7RUFBUCxJQUFrQlQsK0NBQVEsQ0FBQ08sS0FBSyxFQUFFRyxhQUFSLENBQWhDLENBRHVCLENBRXZCOztFQUNBLE1BQU1DLFlBQVksR0FBSUMsS0FBRCxJQUFXO0lBQzVCLElBQUlDLEtBQUssR0FBR0QsS0FBSyxFQUFFRSxNQUFQLEVBQWVELEtBQTNCO0lBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0lBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxLQUFLLEVBQUVVLEtBQW5COztJQUNBLElBQUlWLEtBQUssRUFBRVUsS0FBUCxLQUFpQixJQUFyQixFQUEwQjtNQUN0QkosS0FBSyxHQUFHQSxLQUFLLENBQUNLLEtBQU4sQ0FBWSxDQUFaLEVBQWUsQ0FBZixDQUFSO0lBQ0g7O0lBQ0RILE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0lBQ0FKLE9BQU8sQ0FBQ0ksS0FBRCxDQUFQLENBUjRCLENBUzVCOztJQUNBTixLQUFLLEdBQUcsVUFBSCxDQUFMLENBQW9CTSxLQUFwQjtFQUNILENBWEQ7O0VBYUEsb0JBQ0csOERBQUMsOERBQUQ7SUFBa0IsUUFBUSxFQUFFTixLQUFLLEVBQUVZLFFBQW5DO0lBQTZDLE1BQU0sRUFBSVgsSUFBSSxHQUFHLENBQUgsQ0FBM0Q7SUFBQSx3QkFDSyw4REFBQyw2REFBRDtNQUFBLFVBQ0tELEtBQUssR0FBRyxPQUFILENBQUwsSUFBa0JBLEtBQUssR0FBRyxPQUFILENBQXZCLElBQW9DO0lBRHpDO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFETCxFQUlNQSxLQUFLLEVBQUVZLFFBQVAsS0FBa0JDLFNBQWxCLGlCQUErQiw4REFBQyw2REFBRDtNQUM1QixJQUFJLEVBQUViLEtBQUssR0FBRyxNQUFILENBQUwsSUFBaUIsTUFESztNQUU1QixRQUFRLEVBQUVJLFlBRmtCO01BRzVCLEtBQUssRUFBRUg7SUFIcUI7TUFBQTtNQUFBO01BQUE7SUFBQSxhQUpyQyxFQVVNRCxLQUFLLEVBQUVZLFFBQVAsaUJBQW1CLDhEQUFDLDBEQUFEO01BQ2hCLElBQUksRUFBRVosS0FBSyxHQUFHLE1BQUgsQ0FBTCxJQUFpQixNQURQO01BRWhCLFFBQVEsRUFBR0ssS0FBRCxJQUFTO1FBQ2YsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLEVBQUVFLE1BQVAsRUFBZUQsS0FBN0I7UUFDQUosT0FBTyxDQUFDSSxLQUFELENBQVAsQ0FGZSxDQUdmOztRQUNBTixLQUFLLEdBQUcsVUFBSCxDQUFMLENBQW9CTSxLQUFwQjtNQUNILENBUGU7TUFRaEIsS0FBSyxFQUFFTDtJQVJTO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFWekI7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREg7QUF3QkgsQ0F4Q0Q7O0dBQU1GOztLQUFBQTtBQTBDTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3JtSW5wdXQvRm9ybUlucHV0LmpzP2NlYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybUlucHV0RGVzaWduLCBGb3JtSW5wdXRXcmFwcGVyLCBGb3JtTGFiZWxEZXNpZ24sIEZvcm1UZXh0QXJlYSB9IGZyb20gXCIuL0Zvcm1JbnB1dFN0eWxlc1wiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEZvcm1JbnB1dCA9IChwcm9wcyk9PntcclxuICAgIGNvbnN0IFt0ZXh0LCBTZXRUZXh0XSA9IHVzZVN0YXRlKHByb3BzPy5vcmlnaW5hbFZhbHVlKTtcclxuICAgIC8vIGhhbmRsZSBwaG9uZSBjaGFuZ2VcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGV2ZW50Py50YXJnZXQ/LnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzPy5waG9uZSlcclxuICAgICAgICBpZiAocHJvcHM/LnBob25lID09PSB0cnVlKXtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCA5KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgICAgICBTZXRUZXh0KHZhbHVlKTtcclxuICAgICAgICAvL3NldCB0aGUgaW5mb3JtYXRpb24gdG8gdGhlIGZvcm1cclxuICAgICAgICBwcm9wcz8uWydzZXRWYWx1ZSddKHZhbHVlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgPEZvcm1JbnB1dFdyYXBwZXIgbG9uZ1RleHQ9e3Byb3BzPy5sb25nVGV4dH0gZmlsbGVkID0ge3RleHQ/LlswXX0+XHJcbiAgICAgICAgICAgIDxGb3JtTGFiZWxEZXNpZ24+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHM/LlsnbGFiZWwnXXx8cHJvcHM/LlsnY2xhc3MnXXx8J0VzY3JpYmEgYXF1w60nfVxyXG4gICAgICAgICAgICA8L0Zvcm1MYWJlbERlc2lnbj5cclxuICAgICAgICAgICAge3Byb3BzPy5sb25nVGV4dD09PXVuZGVmaW5lZCAmJiA8Rm9ybUlucHV0RGVzaWduIFxyXG4gICAgICAgICAgICAgICAgdHlwZT17cHJvcHM/LlsndHlwZSddfHwndGV4dCd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge3Byb3BzPy5sb25nVGV4dCAmJiA8Rm9ybVRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICB0eXBlPXtwcm9wcz8uWyd0eXBlJ118fCd0ZXh0J31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudD8udGFyZ2V0Py52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBTZXRUZXh0KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgaW5mb3JtYXRpb24gdG8gdGhlIGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBwcm9wcz8uWydzZXRWYWx1ZSddKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICA8L0Zvcm1JbnB1dFdyYXBwZXI+IFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtSW5wdXQ7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRm9ybUlucHV0RGVzaWduIiwiRm9ybUlucHV0V3JhcHBlciIsIkZvcm1MYWJlbERlc2lnbiIsIkZvcm1UZXh0QXJlYSIsIlJlYWN0IiwiRm9ybUlucHV0IiwicHJvcHMiLCJ0ZXh0IiwiU2V0VGV4dCIsIm9yaWdpbmFsVmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInBob25lIiwic2xpY2UiLCJsb25nVGV4dCIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FormInput/FormInput.js\n"));

/***/ }),

/***/ "./src/components/FormInput/FormInputStyles.js":
/*!*****************************************************!*\
  !*** ./src/components/FormInput/FormInputStyles.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});