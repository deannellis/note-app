"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Dashboard_tsx"],{

/***/ "./resources/js/Components/Footer/index.tsx":
/*!**************************************************!*\
  !*** ./resources/js/Components/Footer/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Footer = function Footer() {
  return react_1["default"].createElement("footer", {
    className: "footer"
  }, react_1["default"].createElement("div", {
    className: "footer__left"
  }), react_1["default"].createElement("div", {
    className: "footer__copyright"
  }, react_1["default"].createElement("a", {
    href: "https://deannellis.me/"
  }, "\xA9 Dean Nellis ", new Date().getFullYear())), react_1["default"].createElement("div", {
    className: "footer__right"
  }));
};

exports["default"] = Footer;

/***/ }),

/***/ "./resources/js/Components/Header/index.tsx":
/*!**************************************************!*\
  !*** ./resources/js/Components/Header/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var navItems_1 = __importDefault(__webpack_require__(/*! ./navItems */ "./resources/js/Components/Header/navItems.ts"));

var Header = function Header(_a) {
  var currentPath = _a.currentPath;
  return react_1["default"].createElement("header", {
    className: "header"
  }, react_1["default"].createElement("div", {
    className: "header__logo"
  }, react_1["default"].createElement("h1", null, "Notes App")), react_1["default"].createElement("nav", null, react_1["default"].createElement("ul", null, navItems_1["default"].map(function (_a) {
    var title = _a.title,
        path = _a.path;
    return react_1["default"].createElement("li", {
      className: currentPath === path ? "header__nav-item--active" : "header__nav-item",
      key: title
    });
  }))));
};

exports["default"] = Header;

/***/ }),

/***/ "./resources/js/Components/Header/navItems.ts":
/*!****************************************************!*\
  !*** ./resources/js/Components/Header/navItems.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = [{
  title: "Components",
  path: "/components"
}, {
  title: "Theme",
  path: "/theme"
}, {
  title: "Utils",
  path: "/utilities"
}];

/***/ }),

/***/ "./resources/js/Components/PageLayout/index.tsx":
/*!******************************************************!*\
  !*** ./resources/js/Components/PageLayout/index.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Footer_1 = __importDefault(__webpack_require__(/*! ../Footer */ "./resources/js/Components/Footer/index.tsx"));

var Header_1 = __importDefault(__webpack_require__(/*! ../Header */ "./resources/js/Components/Header/index.tsx"));

var PageLayout = function PageLayout(_a) {
  var children = _a.children,
      layout = _a.layout;
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(Header_1["default"], {
    currentPath: "dashboard"
  }), react_1["default"].createElement("main", {
    className: !!layout ? "page-layout--" + layout : "page-layout"
  }, children), react_1["default"].createElement(Footer_1["default"], null));
};

exports["default"] = PageLayout;

/***/ }),

/***/ "./resources/js/Pages/Dashboard.tsx":
/*!******************************************!*\
  !*** ./resources/js/Pages/Dashboard.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var PageLayout_1 = __importDefault(__webpack_require__(/*! ../Components/PageLayout */ "./resources/js/Components/PageLayout/index.tsx"));

var Dashboard = function Dashboard() {
  var foo = "React";
  var bar = "TypeScript";
  return React.createElement(PageLayout_1["default"], null, React.createElement("h1", null, "Hello bing bong ", foo, " + ", bar));
};

exports["default"] = Dashboard;

/***/ })

}]);