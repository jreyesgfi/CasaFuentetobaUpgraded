"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__]);
framer_motion__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const animations = {
  initial: {
    opacity: 0,
    x: 50
  },
  animate: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: -50
  }
};

const AnimatedPage = ({
  children,
  router
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
    variants: animations,
    initial: "initial",
    animate: "animate",
    transition: {
      type: "spring",
      stiffness: 25
    },
    exit: "exit",
    children: children
  }, router.route);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedPage);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navbar_Navbar)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: external "react-icons/cg"
const cg_namespaceObject = require("react-icons/cg");
// EXTERNAL MODULE: external "react-icons"
var external_react_icons_ = __webpack_require__(6698);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/globalStyles.js
var globalStyles = __webpack_require__(1382);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Navbar/NavbarStyle.js



const Nav = external_styled_components_default().nav.withConfig({
  displayName: "NavbarStyle__Nav",
  componentId: "sc-13dew5i-0"
})(["position:fixed;background:", ";margin-bottom:-80px;height:80px;display:flex;justify-content:center;align-items:center;font-size:1.2rem;top:0;z-index:250;width:100%;transition:background-color 0.3s ease-in;"], globalStyles/* globalColors.dark.primary */.Dt.dark.primary);
const NavbarContainer = external_styled_components_default()(globalStyles/* Container */.W2).withConfig({
  displayName: "NavbarStyle__NavbarContainer",
  componentId: "sc-13dew5i-1"
})(["display:flex;justify-content:start;height:80px;padding:0 calc(6vw - 50px);", ""], globalStyles/* Container */.W2);
const NavLogo = external_styled_components_default()((link_default())).withConfig({
  displayName: "NavbarStyle__NavLogo",
  componentId: "sc-13dew5i-2"
})(["color:", ";justify-self:flex-start;cursor:pointer;text-decoration:none;display:flex;align-items:center;z-index:250;"], globalStyles/* globalColors.color.primary */.Dt.color.primary);
const NavTitle = external_styled_components_default()(globalStyles/* Heading */.X6).withConfig({
  displayName: "NavbarStyle__NavTitle",
  componentId: "sc-13dew5i-3"
})(["font-size:10pt;font-family:primary-bold,sans-serif;text-align:left;max-width:40px;margin:auto auto auto 0;height:fit-content;"]);
const NavIcon = external_styled_components_default().img.withConfig({
  displayName: "NavbarStyle__NavIcon",
  componentId: "sc-13dew5i-4"
})(["width:5rem;"]);
const MobileIcon = external_styled_components_default().div.withConfig({
  displayName: "NavbarStyle__MobileIcon",
  componentId: "sc-13dew5i-5"
})(["display:none;z-index:250;>* >path{color:", ";}@media screen and (max-width:760px){display:block;position:absolute;top:0;right:0;transform:translate(-100%,60%);font-size:1.8rem;cursor:pointer;}"], globalStyles/* globalColors.color.primary */.Dt.color.primary);
const NavMenu = external_styled_components_default().ul.withConfig({
  displayName: "NavbarStyle__NavMenu",
  componentId: "sc-13dew5i-6"
})(["display:flex;align-items:center;list-style:none;text-align:center;width:100%;@media screen and (max-width:760px){flex-direction:column;width:100%;height:100vh;position:fixed;padding-top:12%;top:0;left:0;opacity:", ";visibility:", ";transform:translateY(", ");transition:opacity 0.5s ease;background-color:", ";}> li:first-child{margin-left:auto;}"], ({
  show
}) => show ? 1 : 0, ({
  show
}) => show ? 'visible' : 'hidden', ({
  show
}) => show ? '0' : '-10px', globalStyles/* globalColors.dark.primary */.Dt.dark.primary);
const NavItem = external_styled_components_default().li.withConfig({
  displayName: "NavbarStyle__NavItem",
  componentId: "sc-13dew5i-7"
})(["height:80px;cursor:pointer;@media screen and (max-width:760px){width:100%;&:hover{border:none;}}"]);
const NavLinks = external_styled_components_default().span.withConfig({
  displayName: "NavbarStyle__NavLinks",
  componentId: "sc-13dew5i-8"
})(["color:#fff;display:flex;align-items:center;text-decoration:none;padding:0.5rem 1rem;height:100%;&:hover{color:#c8c9d8;font-family:primary-bold,sans-serif;transition:all 0.3s ease;}@media screen and (max-width:760px){text-align:center;padding:2rem;width:100%;display:table;&:hover{color:#4b59f7;transition:all 0.3s ease;}}"]);
const NavBtnLink = external_styled_components_default()((link_default())).withConfig({
  displayName: "NavbarStyle__NavBtnLink",
  componentId: "sc-13dew5i-9"
})(["display:flex;justify-content:center;align-items:center;text-decoration:none;padding:8px 16px;height:100%;width:100%;border:none;outline:none;"]);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/data/NavbarData.js
var NavbarData = __webpack_require__(8075);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Navbar/Navbar.js












const Navbar = () => {
  // state for the mobileMenu
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false); //

  let navigate = (0,router_.useRouter)(); // click to open/close the menu

  const handleMenuClick = () => {
    setShow(!show);
  }; // // scroll to an element
  // const scrollTo = (id) => {
  //     const element = document.getElementById(id);
  //     element.scrollIntoView(
  //         { behavior: 'smooth' }
  //     )
  // }
  // click on item 


  const handleItemClick = (id, to) => {
    // add the track of the view
    navigate.replace(to); // close the menu

    setShow(false);
  };

  const [hydrated, setHydrated] = external_react_default().useState(false);
  external_react_default().useEffect(() => {
    // This forces a rerender, so the date is rendered
    // the second time but not the first
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_icons_.IconContext.Provider, {
    value: {
      color: `${globalStyles/* globalColors.light.primary */.Dt.light.primary}`
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(Nav, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavbarContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(NavLogo, {
          href: "/",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(NavIcon, {
              src: "../assets/icons/black-app-icon.svg",
              alt: "logo"
            }), /*#__PURE__*/jsx_runtime_.jsx(NavTitle, {
              children: "Casa Fuentetoba"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(MobileIcon, {
          onClick: () => handleMenuClick(),
          children: show ? /*#__PURE__*/jsx_runtime_.jsx(fa_namespaceObject.FaTimes, {}) : /*#__PURE__*/jsx_runtime_.jsx(cg_namespaceObject.CgMenuRight, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(NavMenu, {
          show: show,
          children: NavbarData/* default.map */.Z.map((element, index) => {
            return /*#__PURE__*/jsx_runtime_.jsx(NavItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(NavLinks, {
                onClick: () => handleItemClick(element.id, element.to),
                children: element.text
              })
            }, index);
          })
        })]
      })
    })
  });
};

/* harmony default export */ const Navbar_Navbar = (Navbar);

/***/ }),

/***/ 6927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globalstyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4662);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7902);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6859);
/* harmony import */ var _components_AnimatedPage_AnimatedPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7441);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AnimatedPage_AnimatedPage__WEBPACK_IMPORTED_MODULE_4__]);
_components_AnimatedPage_AnimatedPage__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //import './globalFonts.css';








function App({
  Component,
  pageProps,
  router
}) {
  const [hydrated, setHydrated] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    // This forces a rerender, so the date is rendered
    // the second time but not the first
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_globalstyles__WEBPACK_IMPORTED_MODULE_1__/* .GlobalStyles */ .nz, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_AnimatedPage_AnimatedPage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      router: router,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Component, _objectSpread({}, pageProps))
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App); // // detect when the page is loaded
// const [loading,setLoading]=useState(0)
// useEffect(()=>{
//   console.log('mounted');
//   setLoading(0);
// },[])
// // // the icon to indicate the actions
// // const [indicationIconState, setIndicationIconState] = useState();
// // const indicationIconRef = useRef(
// //   {show: 0}
// // );
// // const handleIndicationIconState = (newState,newValues)=>{
// //   setIndicationIconState(newState);
// //   indicationIconRef.current = {
// //     ...newValues
// //   }
// // }
// return (
//   <BrowserRouter>
//     <GlobalStyles />
//     <Navbar />
//     <WaitingContainer >
//       <ScrollToTop>
//         <Routes>
//           <Route path='/' element={<Home/>} />
//           <Route path='/galeria' element={<Gallery/>} />
//           <Route path='/info' element={<Info/>} />
//           <Route path='/reserva' element={<Booking/>} />
//           <Route path='/contacto' element={<Contact/>} />
//         </Routes>
//       </ScrollToTop>
//     </WaitingContainer>
//     <Footer />
//   </BrowserRouter>
// )
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6698:
/***/ ((module) => {

module.exports = require("react-icons");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,63,859,172,382], () => (__webpack_exec__(6927)));
module.exports = __webpack_exports__;

})();