"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ui/typewriter-effect.tsx":
/*!*************************************************!*\
  !*** ./src/components/ui/typewriter-effect.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TypewriterEffect: function() { return /* binding */ TypewriterEffect; },\n/* harmony export */   TypewriterEffectSmooth: function() { return /* binding */ TypewriterEffectSmooth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/cn */ \"(app-pages-browser)/./src/utils/cn.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/utils/stagger.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ TypewriterEffect,TypewriterEffectSmooth auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TypewriterEffect = (param)=>{\n    let { words, className, cursorClassName } = param;\n    _s();\n    // split text inside of words into array of characters\n    const wordsArray = words.map((word)=>{\n        return {\n            ...word,\n            text: word.text.split(\"\")\n        };\n    });\n    const [scope, animate] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimate)();\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(scope);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isInView) {\n            animate(\"span\", {\n                display: \"inline-block\",\n                opacity: 1,\n                width: \"fit-content\"\n            }, {\n                duration: 0.3,\n                delay: (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.stagger)(0.1),\n                ease: \"easeInOut\"\n            }[con]);\n        }\n    }, [\n        isInView\n    ]);\n    const renderWords = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n            ref: scope,\n            className: \"inline\",\n            children: wordsArray.map((word, idx)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inline-block\",\n                    children: [\n                        word.text.map((char, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.span, {\n                                initial: {},\n                                className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(\"dark:text-white text-black opacity-0 hidden\", word.className),\n                                children: char\n                            }, \"char-\".concat(index), false, {\n                                fileName: \"C:\\\\Next\\\\next\\\\src\\\\components\\\\ui\\\\typewriter-effect.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, undefined)),\n                        \"\\xa0\"\n                    ]\n                }, \"word-\".concat(idx), true, {\n                    fileName: \"C:\\\\Next\\\\next\\\\src\\\\components\\\\ui\\\\typewriter-effect.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Next\\\\next\\\\src\\\\components\\\\ui\\\\typewriter-effect.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(\"text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center\", className),\n        children: [\n            renderWords(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.span, {\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.8,\n                    repeat: Infinity,\n                    repeatType: \"reverse\"\n                },\n                className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(\"inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-8 bg-blue-500\", cursorClassName)\n            }, void 0, false, {\n                fileName: \"C:\\\\Next\\\\next\\\\src\\\\components\\\\ui\\\\typewriter-effect.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Next\\\\next\\\\src\\\\components\\\\ui\\\\typewriter-effect.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TypewriterEffect, \"dEK4lZNBaWplCTwJAgbPKnl5uEA=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimate,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = TypewriterEffect;\nconst TypewriterEffectSmooth = (param)=>{\n    let { words, className, cursorClassName } = param;\n    // split text inside of words into array of characters\n    const wordsArray = words.map((word)=>{\n        return {\n            ...word,\n            text: word.text.split(\"\")\n        };\n    });\n    const renderWords = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: wordsArray.map((word, idx)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inline-block\",\n                    children: [\n                        word.text.map((char, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(\"dark:text-white text-black \", word.className),\n                                children: char\n                            }, \"char-\".concat(index), false, {\n                                fileName: \"C:\\\\Next\\\\next\\\\src\\\\components\\\\ui\\\\typewriter-effect.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 17\n                            }, undefined)),\n                        \"\\xa0\"\n                    ]\n                }, \"word-\".concat(idx), true, {\n                    fileName: \"C:\\\\Next\\\\next\\\\src\\\\components\\\\ui\\\\typewriter-effect.tsx\",\n                    lineNumber: 125,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Next\\\\next\\\\src\\\\components\\\\ui\\\\typewriter-effect.tsx\",\n            lineNumber: 122,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(\"flex space-x-1 my-2\", className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                className: \"overflow-hidden pb-2\",\n                initial: {\n                    width: \"0%\"\n                },\n                whileInView: {\n                    width: \"fit-content\"\n                },\n                transition: {\n                    duration: 2,\n                    ease: \"linear\",\n                    delay: 1\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xs sm:text-sm md:text-base lg:text-lg font-bold\",\n                        style: {\n                            whiteSpace: \"nowrap\"\n                        },\n                        children: [\n                            renderWords(),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Next\\\\next\\\\src\\\\components\\\\ui\\\\typewriter-effect.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Next\\\\next\\\\src\\\\components\\\\ui\\\\typewriter-effect.tsx\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.span, {\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.8,\n                    repeat: Infinity,\n                    repeatType: \"reverse\"\n                },\n                className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(\"block rounded-sm w-[4px] h-4 sm:h-6 xl:h-8 bg-blue-500\", cursorClassName)\n            }, void 0, false, {\n                fileName: \"C:\\\\Next\\\\next\\\\src\\\\components\\\\ui\\\\typewriter-effect.tsx\",\n                lineNumber: 167,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Next\\\\next\\\\src\\\\components\\\\ui\\\\typewriter-effect.tsx\",\n        lineNumber: 143,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = TypewriterEffectSmooth;\nvar _c, _c1;\n$RefreshReg$(_c, \"TypewriterEffect\");\n$RefreshReg$(_c1, \"TypewriterEffectSmooth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL3R5cGV3cml0ZXItZWZmZWN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFZ0M7QUFDdUM7QUFDckM7QUFFM0IsTUFBTU0sbUJBQW1CO1FBQUMsRUFDL0JDLEtBQUssRUFDTEMsU0FBUyxFQUNUQyxlQUFlLEVBUWhCOztJQUNDLHNEQUFzRDtJQUN0RCxNQUFNQyxhQUFhSCxNQUFNSSxHQUFHLENBQUMsQ0FBQ0M7UUFDNUIsT0FBTztZQUNMLEdBQUdBLElBQUk7WUFDUEMsTUFBTUQsS0FBS0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7UUFDeEI7SUFDRjtJQUVBLE1BQU0sQ0FBQ0MsT0FBT0MsUUFBUSxHQUFHYix5REFBVUE7SUFDbkMsTUFBTWMsV0FBV2Isd0RBQVNBLENBQUNXO0lBQzNCVixnREFBU0EsQ0FBQztRQUNSLElBQUlZLFVBQVU7WUFDWkQsUUFDRSxRQUNBO2dCQUNFRSxTQUFTO2dCQUNUQyxTQUFTO2dCQUNUQyxPQUFPO1lBQ1QsR0FDQTtnQkFDRUMsVUFBVTtnQkFDVkMsT0FBT3BCLHNEQUFPQSxDQUFDO2dCQUNmcUIsTUFBTTtZQUNSLENBQ0YsQ0FBQ0MsSUFBSTtRQUNQO0lBQ0YsR0FBRztRQUFDUDtLQUFTO0lBRWIsTUFBTVEsY0FBYztRQUNsQixxQkFDRSw4REFBQ3hCLGlEQUFNQSxDQUFDeUIsR0FBRztZQUFDQyxLQUFLWjtZQUFPUCxXQUFVO3NCQUMvQkUsV0FBV0MsR0FBRyxDQUFDLENBQUNDLE1BQU1nQjtnQkFDckIscUJBQ0UsOERBQUNGO29CQUF3QmxCLFdBQVU7O3dCQUNoQ0ksS0FBS0MsSUFBSSxDQUFDRixHQUFHLENBQUMsQ0FBQ2tCLE1BQU1DLHNCQUNwQiw4REFBQzdCLGlEQUFNQSxDQUFDOEIsSUFBSTtnQ0FDVkMsU0FBUyxDQUFDO2dDQUVWeEIsV0FBV1IsNkNBQUVBLENBQ1YsK0NBQ0RZLEtBQUtKLFNBQVM7MENBR2ZxQjsrQkFOSSxRQUFjLE9BQU5DOzs7Ozt3QkFRZDs7bUJBWkssUUFBWSxPQUFKRjs7Ozs7WUFnQnRCOzs7Ozs7SUFHTjtJQUNBLHFCQUNFLDhEQUFDRjtRQUNDbEIsV0FBV1IsNkNBQUVBLENBQ1gscUVBQ0FROztZQUdEaUI7MEJBQ0QsOERBQUN4QixpREFBTUEsQ0FBQzhCLElBQUk7Z0JBQ1ZDLFNBQVM7b0JBQ1BiLFNBQVM7Z0JBQ1g7Z0JBQ0FILFNBQVM7b0JBQ1BHLFNBQVM7Z0JBQ1g7Z0JBQ0FjLFlBQVk7b0JBQ1ZaLFVBQVU7b0JBQ1ZhLFFBQVFDO29CQUNSQyxZQUFZO2dCQUNkO2dCQUNBNUIsV0FBV1IsNkNBQUVBLENBQ1gsaUVBQ0FTOzs7Ozs7Ozs7Ozs7QUFLVixFQUFFO0dBNUZXSDs7UUFvQmNILHFEQUFVQTtRQUNsQkMsb0RBQVNBOzs7S0FyQmZFO0FBOEZOLE1BQU0rQix5QkFBeUI7UUFBQyxFQUNyQzlCLEtBQUssRUFDTEMsU0FBUyxFQUNUQyxlQUFlLEVBUWhCO0lBQ0Msc0RBQXNEO0lBQ3RELE1BQU1DLGFBQWFILE1BQU1JLEdBQUcsQ0FBQyxDQUFDQztRQUM1QixPQUFPO1lBQ0wsR0FBR0EsSUFBSTtZQUNQQyxNQUFNRCxLQUFLQyxJQUFJLENBQUNDLEtBQUssQ0FBQztRQUN4QjtJQUNGO0lBQ0EsTUFBTVcsY0FBYztRQUNsQixxQkFDRSw4REFBQ0M7c0JBQ0VoQixXQUFXQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTWdCO2dCQUNyQixxQkFDRSw4REFBQ0Y7b0JBQXdCbEIsV0FBVTs7d0JBQ2hDSSxLQUFLQyxJQUFJLENBQUNGLEdBQUcsQ0FBQyxDQUFDa0IsTUFBTUMsc0JBQ3BCLDhEQUFDQztnQ0FFQ3ZCLFdBQVdSLDZDQUFFQSxDQUFFLCtCQUE4QlksS0FBS0osU0FBUzswQ0FFMURxQjsrQkFISSxRQUFjLE9BQU5DOzs7Ozt3QkFLZDs7bUJBUkssUUFBWSxPQUFKRjs7Ozs7WUFZdEI7Ozs7OztJQUdOO0lBRUEscUJBQ0UsOERBQUNGO1FBQUlsQixXQUFXUiw2Q0FBRUEsQ0FBQyx1QkFBdUJROzswQkFDeEMsOERBQUNQLGlEQUFNQSxDQUFDeUIsR0FBRztnQkFDVGxCLFdBQVU7Z0JBQ1Z3QixTQUFTO29CQUNQWixPQUFPO2dCQUNUO2dCQUNBa0IsYUFBYTtvQkFDWGxCLE9BQU87Z0JBQ1Q7Z0JBQ0FhLFlBQVk7b0JBQ1ZaLFVBQVU7b0JBQ1ZFLE1BQU07b0JBQ05ELE9BQU87Z0JBQ1Q7O2tDQUVBLDhEQUFDSTt3QkFDQ2xCLFdBQVU7d0JBQ1YrQixPQUFPOzRCQUNMQyxZQUFZO3dCQUNkOzs0QkFFQ2Y7NEJBQWU7Ozs7Ozs7b0JBQ1g7Ozs7Ozs7MEJBRVQsOERBQUN4QixpREFBTUEsQ0FBQzhCLElBQUk7Z0JBQ1ZDLFNBQVM7b0JBQ1BiLFNBQVM7Z0JBQ1g7Z0JBQ0FILFNBQVM7b0JBQ1BHLFNBQVM7Z0JBQ1g7Z0JBQ0FjLFlBQVk7b0JBQ1ZaLFVBQVU7b0JBRVZhLFFBQVFDO29CQUNSQyxZQUFZO2dCQUNkO2dCQUNBNUIsV0FBV1IsNkNBQUVBLENBQ1gsMERBQ0FTOzs7Ozs7Ozs7Ozs7QUFLVixFQUFFO01BdEZXNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdWkvdHlwZXdyaXRlci1lZmZlY3QudHN4P2Y3MzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL3V0aWxzL2NuXCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgc3RhZ2dlciwgdXNlQW5pbWF0ZSwgdXNlSW5WaWV3IH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgVHlwZXdyaXRlckVmZmVjdCA9ICh7XHJcbiAgd29yZHMsXHJcbiAgY2xhc3NOYW1lLFxyXG4gIGN1cnNvckNsYXNzTmFtZSxcclxufToge1xyXG4gIHdvcmRzOiB7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgfVtdO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBjdXJzb3JDbGFzc05hbWU/OiBzdHJpbmc7XHJcbn0pID0+IHtcclxuICAvLyBzcGxpdCB0ZXh0IGluc2lkZSBvZiB3b3JkcyBpbnRvIGFycmF5IG9mIGNoYXJhY3RlcnNcclxuICBjb25zdCB3b3Jkc0FycmF5ID0gd29yZHMubWFwKCh3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi53b3JkLFxyXG4gICAgICB0ZXh0OiB3b3JkLnRleHQuc3BsaXQoXCJcIiksXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbc2NvcGUsIGFuaW1hdGVdID0gdXNlQW5pbWF0ZSgpO1xyXG4gIGNvbnN0IGlzSW5WaWV3ID0gdXNlSW5WaWV3KHNjb3BlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzSW5WaWV3KSB7XHJcbiAgICAgIGFuaW1hdGUoXHJcbiAgICAgICAgXCJzcGFuXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZHVyYXRpb246IDAuMyxcclxuICAgICAgICAgIGRlbGF5OiBzdGFnZ2VyKDAuMSksXHJcbiAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxyXG4gICAgICAgIH1cclxuICAgICAgW2Nvbl0pO1xyXG4gICAgfVxyXG4gIH0sIFtpc0luVmlld10pO1xyXG5cclxuICBjb25zdCByZW5kZXJXb3JkcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxtb3Rpb24uZGl2IHJlZj17c2NvcGV9IGNsYXNzTmFtZT1cImlubGluZVwiPlxyXG4gICAgICAgIHt3b3Jkc0FycmF5Lm1hcCgod29yZCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17YHdvcmQtJHtpZHh9YH0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAge3dvcmQudGV4dC5tYXAoKGNoYXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLnNwYW5cclxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17e319XHJcbiAgICAgICAgICAgICAgICAgIGtleT17YGNoYXItJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgIGBkYXJrOnRleHQtd2hpdGUgdGV4dC1ibGFjayBvcGFjaXR5LTAgaGlkZGVuYCxcclxuICAgICAgICAgICAgICAgICAgICB3b3JkLmNsYXNzTmFtZVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7Y2hhcn1cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgXCJ0ZXh0LWJhc2Ugc206dGV4dC1sZyBtZDp0ZXh0LXhsIGxnOnRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgPlxyXG4gICAgICB7cmVuZGVyV29yZHMoKX1cclxuICAgICAgPG1vdGlvbi5zcGFuXHJcbiAgICAgICAgaW5pdGlhbD17e1xyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICBkdXJhdGlvbjogMC44LFxyXG4gICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcclxuICAgICAgICAgIHJlcGVhdFR5cGU6IFwicmV2ZXJzZVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgIFwiaW5saW5lLWJsb2NrIHJvdW5kZWQtc20gdy1bNHB4XSBoLTQgbWQ6aC02IGxnOmgtOCBiZy1ibHVlLTUwMFwiLFxyXG4gICAgICAgICAgY3Vyc29yQ2xhc3NOYW1lXHJcbiAgICAgICAgKX1cclxuICAgICAgPjwvbW90aW9uLnNwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFR5cGV3cml0ZXJFZmZlY3RTbW9vdGggPSAoe1xyXG4gIHdvcmRzLFxyXG4gIGNsYXNzTmFtZSxcclxuICBjdXJzb3JDbGFzc05hbWUsXHJcbn06IHtcclxuICB3b3Jkczoge1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIH1bXTtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgY3Vyc29yQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG59KSA9PiB7XHJcbiAgLy8gc3BsaXQgdGV4dCBpbnNpZGUgb2Ygd29yZHMgaW50byBhcnJheSBvZiBjaGFyYWN0ZXJzXHJcbiAgY29uc3Qgd29yZHNBcnJheSA9IHdvcmRzLm1hcCgod29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ud29yZCxcclxuICAgICAgdGV4dDogd29yZC50ZXh0LnNwbGl0KFwiXCIpLFxyXG4gICAgfTtcclxuICB9KTtcclxuICBjb25zdCByZW5kZXJXb3JkcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3dvcmRzQXJyYXkubWFwKCh3b3JkLCBpZHgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtgd29yZC0ke2lkeH1gfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICB7d29yZC50ZXh0Lm1hcCgoY2hhciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIGtleT17YGNoYXItJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKGBkYXJrOnRleHQtd2hpdGUgdGV4dC1ibGFjayBgLCB3b3JkLmNsYXNzTmFtZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtjaGFyfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKFwiZmxleCBzcGFjZS14LTEgbXktMlwiLCBjbGFzc05hbWUpfT5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcGItMlwiXHJcbiAgICAgICAgaW5pdGlhbD17e1xyXG4gICAgICAgICAgd2lkdGg6IFwiMCVcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIHdoaWxlSW5WaWV3PXt7XHJcbiAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgZHVyYXRpb246IDIsXHJcbiAgICAgICAgICBlYXNlOiBcImxpbmVhclwiLFxyXG4gICAgICAgICAgZGVsYXk6IDEsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSBtZDp0ZXh0LWJhc2UgbGc6dGV4dC1sZyBmb250LWJvbGRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3JlbmRlcldvcmRzKCl9e1wiIFwifVxyXG4gICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8bW90aW9uLnNwYW5cclxuICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYW5pbWF0ZT17e1xyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXHJcblxyXG4gICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcclxuICAgICAgICAgIHJlcGVhdFR5cGU6IFwicmV2ZXJzZVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgIFwiYmxvY2sgcm91bmRlZC1zbSB3LVs0cHhdIGgtNCBzbTpoLTYgeGw6aC04IGJnLWJsdWUtNTAwXCIsXHJcbiAgICAgICAgICBjdXJzb3JDbGFzc05hbWVcclxuICAgICAgICApfVxyXG4gICAgICA+PC9tb3Rpb24uc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjbiIsIm1vdGlvbiIsInN0YWdnZXIiLCJ1c2VBbmltYXRlIiwidXNlSW5WaWV3IiwidXNlRWZmZWN0IiwiVHlwZXdyaXRlckVmZmVjdCIsIndvcmRzIiwiY2xhc3NOYW1lIiwiY3Vyc29yQ2xhc3NOYW1lIiwid29yZHNBcnJheSIsIm1hcCIsIndvcmQiLCJ0ZXh0Iiwic3BsaXQiLCJzY29wZSIsImFuaW1hdGUiLCJpc0luVmlldyIsImRpc3BsYXkiLCJvcGFjaXR5Iiwid2lkdGgiLCJkdXJhdGlvbiIsImRlbGF5IiwiZWFzZSIsImNvbiIsInJlbmRlcldvcmRzIiwiZGl2IiwicmVmIiwiaWR4IiwiY2hhciIsImluZGV4Iiwic3BhbiIsImluaXRpYWwiLCJ0cmFuc2l0aW9uIiwicmVwZWF0IiwiSW5maW5pdHkiLCJyZXBlYXRUeXBlIiwiVHlwZXdyaXRlckVmZmVjdFNtb290aCIsIndoaWxlSW5WaWV3Iiwic3R5bGUiLCJ3aGl0ZVNwYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/typewriter-effect.tsx\n"));

/***/ })

});