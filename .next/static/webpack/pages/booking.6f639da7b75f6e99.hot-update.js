/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/booking",{

/***/ "./src/components/EmailPanel/EmailPanel.js":
/*!*************************************************!*\
  !*** ./src/components/EmailPanel/EmailPanel.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _globalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globalStyles */ \"./src/globalStyles.js\");\n/* harmony import */ var _util_dataParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/dataParser */ \"./src/util/dataParser.js\");\n/* harmony import */ var _FormInput_FormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormInput/FormInput */ \"./src/components/FormInput/FormInput.js\");\n/* harmony import */ var _EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmailPanelStyles */ \"./src/components/EmailPanel/EmailPanelStyles.js\");\n/* harmony import */ var _EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_EmailPanelData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/EmailPanelData */ \"./src/data/EmailPanelData.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"D:\\\\Programacion\\\\React\\\\casa-fuentetoba-upgraded\\\\src\\\\components\\\\EmailPanel\\\\EmailPanel.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst EmailPanel = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(_c = _s((props, ref) => {\n  _s();\n\n  // track in what step we are\n  const {\n    0: step,\n    1: setStep\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); // ref to keep all values\n\n  const formObjectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({}); // the selected days info\n\n  const {\n    rangeSelected = ['01/02/2023', '02/03/2024']\n  } = props;\n  const selectedDays = `${rangeSelected[0]} - ${rangeSelected[1]}`; // a string with the full name\n\n  const nombreCompleto = `${formObjectRef?.current?.['name'] || 'No especificado'} ${formObjectRef?.current?.['firstName'] || ''}`;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_globalStyles__WEBPACK_IMPORTED_MODULE_1__.Section, {\n    padding: \"0px 4rem\",\n    smPadding: \"0px 3rem\",\n    ref: ref,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.EmailPanelWrapper, {\n      children: [step < 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.EmailPanelHeader, {\n          children: \"Cont\\xE1ctanos para reservar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 25\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.BookingInfoWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_globalStyles__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            children: \"Fechas seleccionadas\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 29\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n            children: selectedDays\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 29\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 25\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.EmailFormWrapper, {\n          children: [step === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: 'Nombre',\n              setValue: value => {\n                formObjectRef.current['name'] = value;\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 37\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: 'Apellidos',\n              setValue: value => {\n                formObjectRef.current['firstName'] = value;\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 37\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: 'Teléfono (opcional)',\n              type: \"number\",\n              setValue: value => {\n                formObjectRef.current['phone'] = value;\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 37\n            }, undefined)]\n          }, void 0, true), step === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.NameInfoWrapper, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_globalStyles__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                children: \"Nombre\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 41\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_globalStyles__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                children: nombreCompleto\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 41\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 37\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: 'Comentarios',\n              longText: true,\n              setValue: value => {\n                formObjectRef.current['comments'] = value;\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 37\n            }, undefined)]\n          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.EmailFormButtonsWrapper, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.EmailPanelButton, {\n              onClick: () => {\n                if (step === 0) {\n                  props?.closePanel();\n                  return;\n                }\n\n                setStep(step - 1);\n              },\n              children: [step === 0 && 'Revisar fechas', step === 1 && 'Anterior']\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 33\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.EmailPanelButton, {\n              onClick: () => {\n                if (step === 1 && true) {\n                  window.open(`mailto:${_data_EmailPanelData__WEBPACK_IMPORTED_MODULE_5__.emailDirection}?subject=Reserva para ${selectedDays}&body=Hola, soy ${nombreCompleto}. Quería solicitar la reserva de la casa rural para el periodo ${selectedDays}. \\n${formObjectRef.current?.['phone'] ? 'Mi número de teléfono es el ' + formObjectRef.current?.['phone'] + '. ' : ''}\\n${formObjectRef.current?.['comments'] ? 'Comentarios: ' + formObjectRef.current?.['comments'] + '. ' : ''}\n                                         `);\n                }\n\n                setStep(step + 1);\n              },\n              children: [step === 0 && 'Siguiente', step === 1 && 'Enviar correo']\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 33\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 29\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 25\n        }, undefined)]\n      }, void 0, true), step === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_globalStyles__WEBPACK_IMPORTED_MODULE_1__.MainHeading, {\n          children: \"Reserva finalizada\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 25\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_globalStyles__WEBPACK_IMPORTED_MODULE_1__.TextWrapper, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.ConfirmationText, {\n            children: \"En breve nos pondremos en contacto con usted por correo para confirmar la reserva.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 29\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 25\n        }, undefined)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }, undefined);\n}, \"AjBXoLZXgV6q3aHL2lxfbKlpHtg=\")), \"AjBXoLZXgV6q3aHL2lxfbKlpHtg=\");\n\n_c2 = EmailPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailPanel);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"EmailPanel$forwardRef\");\n$RefreshReg$(_c2, \"EmailPanel\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FbWFpbFBhbmVsL0VtYWlsUGFuZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsTUFBTW1CLFVBQVUsaUNBQUduQixpREFBVSxTQUFDLENBQUNvQixLQUFELEVBQVFDLEdBQVIsS0FBZ0I7RUFBQTs7RUFFMUM7RUFDQSxNQUFNO0lBQUEsR0FBQ0MsSUFBRDtJQUFBLEdBQU9DO0VBQVAsSUFBa0JyQiwrQ0FBUSxDQUFDLENBQUQsQ0FBaEMsQ0FIMEMsQ0FLMUM7O0VBQ0EsTUFBTXNCLGFBQWEsR0FBR3ZCLDZDQUFNLENBQUMsRUFBRCxDQUE1QixDQU4wQyxDQVExQzs7RUFDQSxNQUFNO0lBQUV3QixhQUFhLEdBQUcsQ0FBQyxZQUFELEVBQWUsWUFBZjtFQUFsQixJQUFtREwsS0FBekQ7RUFFQSxNQUFNTSxZQUFZLEdBQ2IsR0FBRUQsYUFBYSxDQUFDLENBQUQsQ0FBSSxNQUFLQSxhQUFhLENBQUMsQ0FBRCxDQUFJLEVBRDlDLENBWDBDLENBYzFDOztFQUNBLE1BQU1FLGNBQWMsR0FBSSxHQUFFSCxhQUFhLEVBQUVJLE9BQWYsR0FBeUIsTUFBekIsS0FBb0MsaUJBQWtCLElBQUdKLGFBQWEsRUFBRUksT0FBZixHQUF5QixXQUF6QixLQUF5QyxFQUFHLEVBQS9IO0VBRUEsb0JBQ0ksOERBQUMsa0RBQUQ7SUFBUyxPQUFPLEVBQUMsVUFBakI7SUFBNEIsU0FBUyxFQUFDLFVBQXRDO0lBQWlELEdBQUcsRUFBRVAsR0FBdEQ7SUFBQSx1QkFDSSw4REFBQyxnRUFBRDtNQUFBLFdBQ0tDLElBQUksR0FBRyxDQUFQLGlCQUNHO1FBQUEsd0JBQ0ksOERBQUMsK0RBQUQ7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFESixlQUlJLDhEQUFDLGlFQUFEO1VBQUEsd0JBQ0ksOERBQUMsK0NBQUQ7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFB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QUE7WUFBQSxhQWJKO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQSxhQW5DSjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFaSjtNQUFBLGdCQUZSLEVBZ0ZLQSxJQUFJLEtBQUssQ0FBVCxpQkFDRztRQUFBLHdCQUNJLDhEQUFDLHNEQUFEO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBREosZUFJSSw4REFBQyxzREFBRDtVQUFBLHVCQUNJLDhEQUFDLCtEQUFEO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBREo7VUFBQTtVQUFBO1VBQUE7UUFBQSxhQUpKO01BQUEsZ0JBakZSO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURKO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFESjtBQWlHSCxDQWxINEIsa0NBQWIsaUNBQWhCOztNQUFNSDtBQW1ITiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9FbWFpbFBhbmVsL0VtYWlsUGFuZWwuanM/OWRiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3J3YXJkUmVmLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWFpbkhlYWRpbmcsIFNlY3Rpb24sIFRleHQsIFRleHRXcmFwcGVyIH0gZnJvbSBcIi4uLy4uL2dsb2JhbFN0eWxlc1wiXHJcbmltcG9ydCB7IGRhdGVUb1N0cmluZyB9IGZyb20gXCIuLi8uLi91dGlsL2RhdGFQYXJzZXJcIjtcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tIFwiLi4vRm9ybUlucHV0L0Zvcm1JbnB1dFwiO1xyXG5pbXBvcnQgeyBCb29raW5nSW5mb1dyYXBwZXIsIEVtYWlsUGFuZWxIZWFkZXIsIEVtYWlsUGFuZWxXcmFwcGVyLCBFbWFpbEZvcm1XcmFwcGVyLCBFbWFpbEZvcm1CdXR0b25zV3JhcHBlciwgTmFtZUluZm9XcmFwcGVyLCBFbWFpbFBhbmVsQnV0dG9uLCBDb25maXJtYXRpb25UZXh0IH0gZnJvbSBcIi4vRW1haWxQYW5lbFN0eWxlc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGVtYWlsRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RhdGEvRW1haWxQYW5lbERhdGFcIjtcclxuXHJcbmNvbnN0IEVtYWlsUGFuZWwgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcblxyXG4gICAgLy8gdHJhY2sgaW4gd2hhdCBzdGVwIHdlIGFyZVxyXG4gICAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgLy8gcmVmIHRvIGtlZXAgYWxsIHZhbHVlc1xyXG4gICAgY29uc3QgZm9ybU9iamVjdFJlZiA9IHVzZVJlZih7fSk7XHJcblxyXG4gICAgLy8gdGhlIHNlbGVjdGVkIGRheXMgaW5mb1xyXG4gICAgY29uc3QgeyByYW5nZVNlbGVjdGVkID0gWycwMS8wMi8yMDIzJywgJzAyLzAzLzIwMjQnXSB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWREYXlzID1cclxuICAgICAgICBgJHtyYW5nZVNlbGVjdGVkWzBdfSAtICR7cmFuZ2VTZWxlY3RlZFsxXX1gO1xyXG5cclxuICAgIC8vIGEgc3RyaW5nIHdpdGggdGhlIGZ1bGwgbmFtZVxyXG4gICAgY29uc3Qgbm9tYnJlQ29tcGxldG8gPSBgJHtmb3JtT2JqZWN0UmVmPy5jdXJyZW50Py5bJ25hbWUnXSB8fCAnTm8gZXNwZWNpZmljYWRvJ30gJHtmb3JtT2JqZWN0UmVmPy5jdXJyZW50Py5bJ2ZpcnN0TmFtZSddIHx8ICcnfWA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2VjdGlvbiBwYWRkaW5nPVwiMHB4IDRyZW1cIiBzbVBhZGRpbmc9XCIwcHggM3JlbVwiIHJlZj17cmVmfT5cclxuICAgICAgICAgICAgPEVtYWlsUGFuZWxXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAge3N0ZXAgPCAyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVtYWlsUGFuZWxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250w6FjdGFub3MgcGFyYSByZXNlcnZhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0VtYWlsUGFuZWxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb29raW5nSW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWNoYXMgc2VsZWNjaW9uYWRhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkRGF5c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb29raW5nSW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFbWFpbEZvcm1XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAgPT09IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J05vbWJyZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZT17KHZhbHVlKSA9PiB7IGZvcm1PYmplY3RSZWYuY3VycmVudFsnbmFtZSddID0gdmFsdWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydBcGVsbGlkb3MnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWU9eyh2YWx1ZSkgPT4geyBmb3JtT2JqZWN0UmVmLmN1cnJlbnRbJ2ZpcnN0TmFtZSddID0gdmFsdWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydUZWzDqWZvbm8gKG9wY2lvbmFsKSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZT17KHZhbHVlKSA9PiB7IGZvcm1PYmplY3RSZWYuY3VycmVudFsncGhvbmUnXSA9IHZhbHVlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYW1lSW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb21icmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub21icmVDb21wbGV0b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYW1lSW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnQ29tZW50YXJpb3MnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ1RleHQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZT17KHZhbHVlKSA9PiB7IGZvcm1PYmplY3RSZWYuY3VycmVudFsnY29tbWVudHMnXSA9IHZhbHVlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RW1haWxGb3JtQnV0dG9uc1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtYWlsUGFuZWxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcz8uY2xvc2VQYW5lbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGVwKHN0ZXAgLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAgPT09IDAgJiYgJ1JldmlzYXIgZmVjaGFzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAgPT09IDEgJiYgJ0FudGVyaW9yJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0VtYWlsUGFuZWxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtYWlsUGFuZWxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IDEgJiYgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgbWFpbHRvOiR7ZW1haWxEaXJlY3Rpb259P3N1YmplY3Q9UmVzZXJ2YSBwYXJhICR7c2VsZWN0ZWREYXlzfSZib2R5PUhvbGEsIHNveSAke25vbWJyZUNvbXBsZXRvfS4gUXVlcsOtYSBzb2xpY2l0YXIgbGEgcmVzZXJ2YSBkZSBsYSBjYXNhIHJ1cmFsIHBhcmEgZWwgcGVyaW9kbyAke3NlbGVjdGVkRGF5c30uIFxcbiR7Zm9ybU9iamVjdFJlZi5jdXJyZW50Py5bJ3Bob25lJ10gPyAnTWkgbsO6bWVybyBkZSB0ZWzDqWZvbm8gZXMgZWwgJyArIGZvcm1PYmplY3RSZWYuY3VycmVudD8uWydwaG9uZSddICsgJy4gJyA6ICcnfVxcbiR7Zm9ybU9iamVjdFJlZi5jdXJyZW50Py5bJ2NvbW1lbnRzJ10gPyAnQ29tZW50YXJpb3M6ICcgKyBmb3JtT2JqZWN0UmVmLmN1cnJlbnQ/LlsnY29tbWVudHMnXSArICcuICcgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0ZXAoc3RlcCArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcCA9PT0gMCAmJiAnU2lndWllbnRlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAgPT09IDEgJiYgJ0VudmlhciBjb3JyZW8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRW1haWxQYW5lbEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRW1haWxGb3JtQnV0dG9uc1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRW1haWxGb3JtV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtzdGVwID09PSAyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzZXJ2YSBmaW5hbGl6YWRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWFpbkhlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb25maXJtYXRpb25UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuIGJyZXZlIG5vcyBwb25kcmVtb3MgZW4gY29udGFjdG8gY29uIHVzdGVkIHBvciBjb3JyZW8gcGFyYSBjb25maXJtYXIgbGEgcmVzZXJ2YS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29uZmlybWF0aW9uVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9FbWFpbFBhbmVsV3JhcHBlcj5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICApXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsUGFuZWw7Il0sIm5hbWVzIjpbImZvcndhcmRSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk1haW5IZWFkaW5nIiwiU2VjdGlvbiIsIlRleHQiLCJUZXh0V3JhcHBlciIsImRhdGVUb1N0cmluZyIsIkZvcm1JbnB1dCIsIkJvb2tpbmdJbmZvV3JhcHBlciIsIkVtYWlsUGFuZWxIZWFkZXIiLCJFbWFpbFBhbmVsV3JhcHBlciIsIkVtYWlsRm9ybVdyYXBwZXIiLCJFbWFpbEZvcm1CdXR0b25zV3JhcHBlciIsIk5hbWVJbmZvV3JhcHBlciIsIkVtYWlsUGFuZWxCdXR0b24iLCJDb25maXJtYXRpb25UZXh0IiwiUmVhY3QiLCJlbWFpbERpcmVjdGlvbiIsIkVtYWlsUGFuZWwiLCJwcm9wcyIsInJlZiIsInN0ZXAiLCJzZXRTdGVwIiwiZm9ybU9iamVjdFJlZiIsInJhbmdlU2VsZWN0ZWQiLCJzZWxlY3RlZERheXMiLCJub21icmVDb21wbGV0byIsImN1cnJlbnQiLCJ2YWx1ZSIsImNsb3NlUGFuZWwiLCJ3aW5kb3ciLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/EmailPanel/EmailPanel.js\n"));

/***/ }),

/***/ "./src/components/EmailPanel/EmailPanelStyles.js":
/*!*******************************************************!*\
  !*** ./src/components/EmailPanel/EmailPanelStyles.js ***!
  \*******************************************************/
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