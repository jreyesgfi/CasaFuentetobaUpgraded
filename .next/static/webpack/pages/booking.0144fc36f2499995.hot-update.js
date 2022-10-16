"use strict";
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _globalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globalStyles */ \"./src/globalStyles.js\");\n/* harmony import */ var _util_dataParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/dataParser */ \"./src/util/dataParser.js\");\n/* harmony import */ var _FormInput_FormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormInput/FormInput */ \"./src/components/FormInput/FormInput.js\");\n/* harmony import */ var _EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmailPanelStyles */ \"./src/components/EmailPanel/EmailPanelStyles.js\");\n/* harmony import */ var _data_EmailPanelData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/EmailPanelData */ \"./src/data/EmailPanelData.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"D:\\\\Programacion\\\\React\\\\casa-fuentetoba-upgraded\\\\src\\\\components\\\\EmailPanel\\\\EmailPanel.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst EmailPanel = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(_c = _s((props, ref) => {\n  _s();\n\n  // track in what step we are\n  const {\n    0: step,\n    1: setStep\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); // ref to keep all values\n\n  const formObjectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({}); // the selected days info\n\n  const {\n    rangeSelected = ['01/02/2023', '02/03/2024']\n  } = props;\n  const selectedDays = `${rangeSelected[0]} - ${rangeSelected[1]}`; // a string with the full name\n\n  const nombreCompleto = `${formObjectRef?.current?.['name'] || 'No especificado'} ${formObjectRef?.current?.['firstName'] || ''}`;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_globalStyles__WEBPACK_IMPORTED_MODULE_1__.Section, {\n    padding: \"0px 4rem\",\n    smPadding: \"0px 3rem\",\n    ref: ref,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.EmailPanelWrapper, {\n      children: [step < 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.EmailPanelHeader, {\n          children: \"Cont\\xE1ctanos para reservar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 25\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.BookingInfoWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_globalStyles__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            children: \"Fechas seleccionadas\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 29\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n            children: selectedDays\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 29\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 25\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.EmailFormWrapper, {\n          children: [step === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: 'Nombre',\n              setValue: value => {\n                formObjectRef.current['name'] = value;\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 37\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: 'Apellidos',\n              setValue: value => {\n                formObjectRef.current['firstName'] = value;\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 37\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: 'Teléfono (opcional)',\n              type: \"number\",\n              phone: true,\n              setValue: value => {\n                formObjectRef.current['phone'] = value;\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 37\n            }, undefined)]\n          }, void 0, true), step === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.NameInfoWrapper, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_globalStyles__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                children: \"Nombre\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 41\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_globalStyles__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                children: nombreCompleto\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 41\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 37\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: 'Comentarios',\n              longText: true,\n              setValue: value => {\n                formObjectRef.current['comments'] = value;\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 37\n            }, undefined)]\n          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.EmailFormButtonsWrapper, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.EmailPanelButton, {\n              onClick: () => {\n                if (step === 0) {\n                  props?.closePanel();\n                  return;\n                }\n\n                setStep(step - 1);\n              },\n              children: [step === 0 && 'Revisar fechas', step === 1 && 'Anterior']\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 33\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.EmailPanelButton, {\n              onClick: () => {\n                if (step === 1 && true) {\n                  window.open(`mailto:${_data_EmailPanelData__WEBPACK_IMPORTED_MODULE_5__.emailDirection}?subject=Reserva para ${selectedDays}&body=Hola, soy ${nombreCompleto}. Quería solicitar la reserva de la casa rural para el periodo ${selectedDays}. \\n${formObjectRef.current?.['phone'] ? 'Mi número de teléfono es el ' + formObjectRef.current?.['phone'] + '. ' : ''}\\n${formObjectRef.current?.['comments'] ? 'Comentarios: ' + formObjectRef.current?.['comments'] + '. ' : ''}\n                                         `);\n                }\n\n                setStep(step + 1);\n              },\n              children: [step === 0 && 'Siguiente', step === 1 && 'Enviar correo']\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 33\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 29\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 25\n        }, undefined)]\n      }, void 0, true), step === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_globalStyles__WEBPACK_IMPORTED_MODULE_1__.MainHeading, {\n          children: \"Reserva finalizada\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 25\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_globalStyles__WEBPACK_IMPORTED_MODULE_1__.TextWrapper, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_EmailPanelStyles__WEBPACK_IMPORTED_MODULE_4__.ConfirmationText, {\n            children: \"En breve nos pondremos en contacto con usted por correo para confirmar la reserva.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 29\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 25\n        }, undefined)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }, undefined);\n}, \"AjBXoLZXgV6q3aHL2lxfbKlpHtg=\")), \"AjBXoLZXgV6q3aHL2lxfbKlpHtg=\");\n\n_c2 = EmailPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailPanel);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"EmailPanel$forwardRef\");\n$RefreshReg$(_c2, \"EmailPanel\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FbWFpbFBhbmVsL0VtYWlsUGFuZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxNQUFNbUIsVUFBVSxpQ0FBR25CLGlEQUFVLFNBQUMsQ0FBQ29CLEtBQUQsRUFBUUMsR0FBUixLQUFnQjtFQUFBOztFQUUxQztFQUNBLE1BQU07SUFBQSxHQUFDQyxJQUFEO0lBQUEsR0FBT0M7RUFBUCxJQUFrQnJCLCtDQUFRLENBQUMsQ0FBRCxDQUFoQyxDQUgwQyxDQUsxQzs7RUFDQSxNQUFNc0IsYUFBYSxHQUFHdkIsNkNBQU0sQ0FBQyxFQUFELENBQTVCLENBTjBDLENBUTFDOztFQUNBLE1BQU07SUFBRXdCLGFBQWEsR0FBRyxDQUFDLFlBQUQsRUFBZSxZQUFmO0VBQWxCLElBQW1ETCxLQUF6RDtFQUVBLE1BQU1NLFlBQVksR0FDYixHQUFFRCxhQUFhLENBQUMsQ0FBRCxDQUFJLE1BQUtBLGFBQWEsQ0FBQyxDQUFELENBQUksRUFEOUMsQ0FYMEMsQ0FjMUM7O0VBQ0EsTUFBTUUsY0FBYyxHQUFJLEdBQUVILGFBQWEsRUFBRUksT0FBZixHQUF5QixNQUF6QixLQUFvQyxpQkFBa0IsSUFBR0osYUFBYSxFQUFFSSxPQUFmLEdBQXlCLFdBQXpCLEtBQXlDLEVBQUcsRUFBL0g7RUFFQSxvQkFDSSw4REFBQyxrREFBRDtJQUFTLE9BQU8sRUFBQyxVQUFqQjtJQUE0QixTQUFTLEVBQUMsVUFBdEM7SUFBaUQsR0FBRyxFQUFFUCxHQUF0RDtJQUFBLHVCQUNJLDhEQUFDLGdFQUFEO01BQUEsV0FDS0MsSUFBSSxHQUFHLENBQVAsaUJBQ0c7UUFBQSx3QkFDSSw4REFBQywrREFBRDtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxhQURKLGVBSUksOERBQUMsaUVBQUQ7VUFBQSx3QkFDSSw4REFBQywrQ0FBRDtZQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7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QjtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUEsYUFiSjtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsYUFwQ0o7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBWko7TUFBQSxnQkFGUixFQWlGS0EsSUFBSSxLQUFLLENBQVQsaUJBQ0c7UUFBQSx3QkFDSSw4REFBQyxzREFBRDtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxhQURKLGVBSUksOERBQUMsc0RBQUQ7VUFBQSx1QkFDSSw4REFBQywrREFBRDtZQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQURKO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFKSjtNQUFBLGdCQWxGUjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFESjtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREo7QUFrR0gsQ0FuSDRCLGtDQUFiLGlDQUFoQjs7TUFBTUg7QUFvSE4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRW1haWxQYW5lbC9FbWFpbFBhbmVsLmpzPzlkYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yd2FyZFJlZiwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1haW5IZWFkaW5nLCBTZWN0aW9uLCBUZXh0LCBUZXh0V3JhcHBlciB9IGZyb20gXCIuLi8uLi9nbG9iYWxTdHlsZXNcIlxyXG5pbXBvcnQgeyBkYXRlVG9TdHJpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbC9kYXRhUGFyc2VyXCI7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSBcIi4uL0Zvcm1JbnB1dC9Gb3JtSW5wdXRcIjtcclxuaW1wb3J0IHsgQm9va2luZ0luZm9XcmFwcGVyLCBFbWFpbFBhbmVsSGVhZGVyLCBFbWFpbFBhbmVsV3JhcHBlciwgRW1haWxGb3JtV3JhcHBlciwgRW1haWxGb3JtQnV0dG9uc1dyYXBwZXIsIE5hbWVJbmZvV3JhcHBlciwgRW1haWxQYW5lbEJ1dHRvbiwgQ29uZmlybWF0aW9uVGV4dCB9IGZyb20gXCIuL0VtYWlsUGFuZWxTdHlsZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBlbWFpbERpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi9kYXRhL0VtYWlsUGFuZWxEYXRhXCI7XHJcblxyXG5jb25zdCBFbWFpbFBhbmVsID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG5cclxuICAgIC8vIHRyYWNrIGluIHdoYXQgc3RlcCB3ZSBhcmVcclxuICAgIGNvbnN0IFtzdGVwLCBzZXRTdGVwXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIC8vIHJlZiB0byBrZWVwIGFsbCB2YWx1ZXNcclxuICAgIGNvbnN0IGZvcm1PYmplY3RSZWYgPSB1c2VSZWYoe30pO1xyXG5cclxuICAgIC8vIHRoZSBzZWxlY3RlZCBkYXlzIGluZm9cclxuICAgIGNvbnN0IHsgcmFuZ2VTZWxlY3RlZCA9IFsnMDEvMDIvMjAyMycsICcwMi8wMy8yMDI0J10gfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkRGF5cyA9XHJcbiAgICAgICAgYCR7cmFuZ2VTZWxlY3RlZFswXX0gLSAke3JhbmdlU2VsZWN0ZWRbMV19YDtcclxuXHJcbiAgICAvLyBhIHN0cmluZyB3aXRoIHRoZSBmdWxsIG5hbWVcclxuICAgIGNvbnN0IG5vbWJyZUNvbXBsZXRvID0gYCR7Zm9ybU9iamVjdFJlZj8uY3VycmVudD8uWyduYW1lJ10gfHwgJ05vIGVzcGVjaWZpY2Fkbyd9ICR7Zm9ybU9iamVjdFJlZj8uY3VycmVudD8uWydmaXJzdE5hbWUnXSB8fCAnJ31gO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlY3Rpb24gcGFkZGluZz1cIjBweCA0cmVtXCIgc21QYWRkaW5nPVwiMHB4IDNyZW1cIiByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgIDxFbWFpbFBhbmVsV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIHtzdGVwIDwgMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFbWFpbFBhbmVsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udMOhY3Rhbm9zIHBhcmEgcmVzZXJ2YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9FbWFpbFBhbmVsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9va2luZ0luZm9XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmVjaGFzIHNlbGVjY2lvbmFkYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZERheXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm9va2luZ0luZm9XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RW1haWxGb3JtV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydOb21icmUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWU9eyh2YWx1ZSkgPT4geyBmb3JtT2JqZWN0UmVmLmN1cnJlbnRbJ25hbWUnXSA9IHZhbHVlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnQXBlbGxpZG9zJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlPXsodmFsdWUpID0+IHsgZm9ybU9iamVjdFJlZi5jdXJyZW50WydmaXJzdE5hbWUnXSA9IHZhbHVlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnVGVsw6lmb25vIChvcGNpb25hbCknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZT17KHZhbHVlKSA9PiB7IGZvcm1PYmplY3RSZWYuY3VycmVudFsncGhvbmUnXSA9IHZhbHVlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYW1lSW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb21icmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub21icmVDb21wbGV0b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYW1lSW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnQ29tZW50YXJpb3MnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ1RleHQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZT17KHZhbHVlKSA9PiB7IGZvcm1PYmplY3RSZWYuY3VycmVudFsnY29tbWVudHMnXSA9IHZhbHVlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RW1haWxGb3JtQnV0dG9uc1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtYWlsUGFuZWxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcz8uY2xvc2VQYW5lbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGVwKHN0ZXAgLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAgPT09IDAgJiYgJ1JldmlzYXIgZmVjaGFzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAgPT09IDEgJiYgJ0FudGVyaW9yJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0VtYWlsUGFuZWxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtYWlsUGFuZWxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IDEgJiYgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgbWFpbHRvOiR7ZW1haWxEaXJlY3Rpb259P3N1YmplY3Q9UmVzZXJ2YSBwYXJhICR7c2VsZWN0ZWREYXlzfSZib2R5PUhvbGEsIHNveSAke25vbWJyZUNvbXBsZXRvfS4gUXVlcsOtYSBzb2xpY2l0YXIgbGEgcmVzZXJ2YSBkZSBsYSBjYXNhIHJ1cmFsIHBhcmEgZWwgcGVyaW9kbyAke3NlbGVjdGVkRGF5c30uIFxcbiR7Zm9ybU9iamVjdFJlZi5jdXJyZW50Py5bJ3Bob25lJ10gPyAnTWkgbsO6bWVybyBkZSB0ZWzDqWZvbm8gZXMgZWwgJyArIGZvcm1PYmplY3RSZWYuY3VycmVudD8uWydwaG9uZSddICsgJy4gJyA6ICcnfVxcbiR7Zm9ybU9iamVjdFJlZi5jdXJyZW50Py5bJ2NvbW1lbnRzJ10gPyAnQ29tZW50YXJpb3M6ICcgKyBmb3JtT2JqZWN0UmVmLmN1cnJlbnQ/LlsnY29tbWVudHMnXSArICcuICcgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0ZXAoc3RlcCArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcCA9PT0gMCAmJiAnU2lndWllbnRlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAgPT09IDEgJiYgJ0VudmlhciBjb3JyZW8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRW1haWxQYW5lbEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRW1haWxGb3JtQnV0dG9uc1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRW1haWxGb3JtV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtzdGVwID09PSAyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzZXJ2YSBmaW5hbGl6YWRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWFpbkhlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb25maXJtYXRpb25UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuIGJyZXZlIG5vcyBwb25kcmVtb3MgZW4gY29udGFjdG8gY29uIHVzdGVkIHBvciBjb3JyZW8gcGFyYSBjb25maXJtYXIgbGEgcmVzZXJ2YS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29uZmlybWF0aW9uVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9FbWFpbFBhbmVsV3JhcHBlcj5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICApXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsUGFuZWw7Il0sIm5hbWVzIjpbImZvcndhcmRSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk1haW5IZWFkaW5nIiwiU2VjdGlvbiIsIlRleHQiLCJUZXh0V3JhcHBlciIsImRhdGVUb1N0cmluZyIsIkZvcm1JbnB1dCIsIkJvb2tpbmdJbmZvV3JhcHBlciIsIkVtYWlsUGFuZWxIZWFkZXIiLCJFbWFpbFBhbmVsV3JhcHBlciIsIkVtYWlsRm9ybVdyYXBwZXIiLCJFbWFpbEZvcm1CdXR0b25zV3JhcHBlciIsIk5hbWVJbmZvV3JhcHBlciIsIkVtYWlsUGFuZWxCdXR0b24iLCJDb25maXJtYXRpb25UZXh0IiwiUmVhY3QiLCJlbWFpbERpcmVjdGlvbiIsIkVtYWlsUGFuZWwiLCJwcm9wcyIsInJlZiIsInN0ZXAiLCJzZXRTdGVwIiwiZm9ybU9iamVjdFJlZiIsInJhbmdlU2VsZWN0ZWQiLCJzZWxlY3RlZERheXMiLCJub21icmVDb21wbGV0byIsImN1cnJlbnQiLCJ2YWx1ZSIsImNsb3NlUGFuZWwiLCJ3aW5kb3ciLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/EmailPanel/EmailPanel.js\n"));

/***/ })

});