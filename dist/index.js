exports["code-artel-ui-lib"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Box/Box.tsx":
/*!************************************!*\
  !*** ./src/components/Box/Box.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
var styled_system_1 = __webpack_require__(/*! styled-system */ "styled-system");
exports.Box = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", "\n"], ["\n  box-sizing: border-box;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", "\n"])), styled_system_1.display, styled_system_1.space, styled_system_1.width, styled_system_1.overflow, styled_system_1.borderRadius, styled_system_1.borderColor, styled_system_1.borders, styled_system_1.border, styled_system_1.fontSize, styled_system_1.color, styled_system_1.maxWidth, styled_system_1.minWidth, styled_system_1.height, styled_system_1.minHeight, styled_system_1.opacity, styled_system_1.textAlign, styled_system_1.lineHeight, styled_system_1.letterSpacing, styled_system_1.zIndex, styled_system_1.backgroundImage, styled_system_1.backgroundSize, styled_system_1.backgroundPosition, styled_system_1.backgroundRepeat);
exports.default = exports.Box;
var templateObject_1;


/***/ }),

/***/ "./src/components/ButtonBase/ButtonBase.tsx":
/*!**************************************************!*\
  !*** ./src/components/ButtonBase/ButtonBase.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
var styled_system_1 = __webpack_require__(/*! styled-system */ "styled-system");
/**View */
var Box_1 = __webpack_require__(/*! ../Box/Box */ "./src/components/Box/Box.tsx");
var buttonsVariant = styled_system_1.variant({
    key: "variant.buttonVariant",
    prop: "variant"
});
var buttonsSize = styled_system_1.variant({
    key: "variant.buttonSize",
    prop: "size"
});
/**
 * Компонента обычная кнопка
 * @example ./ButtonBase.example.md
 */
exports.ButtonBase = styled_components_1.default(Box_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"])), buttonsVariant, buttonsSize);
exports.ButtonBase.defaultProps = {
    variant: "default",
    size: "small",
    as: "button"
};
exports.default = exports.ButtonBase;
var templateObject_1;


/***/ }),

/***/ "./src/components/Card/Card.tsx":
/*!**************************************!*\
  !*** ./src/components/Card/Card.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
/** View */
var Box_1 = __webpack_require__(/*! ../Box/Box */ "./src/components/Box/Box.tsx");
/**
 * Компонент карточки
 * @example ./Card.example.md
 */
exports.Card = styled_components_1.default(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0 auto;\n  cursor: pointer;\n"], ["\n  margin: 0 auto;\n  cursor: pointer;\n"])));
exports.Card.defaultProps = {
    borderRadius: 2,
    border: "1px solid #AEAEAE",
    minHeight: "150px"
};
exports.default = exports.Card;
var templateObject_1;


/***/ }),

/***/ "./src/components/Checkbox/Checkbox.tsx":
/*!**********************************************!*\
  !*** ./src/components/Checkbox/Checkbox.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var CheckboxBase_1 = __webpack_require__(/*! ../CheckboxBase/CheckboxBase */ "./src/components/CheckboxBase/CheckboxBase.tsx");
exports.Checkbox = function (props) {
    var id = props.id, name = props.name, disabled = props.disabled, checked = props.checked, label = props.label, onChange = props.onChange, rest = __rest(props, ["id", "name", "disabled", "checked", "label", "onChange"]);
    // console.log("Checkbox", props);
    return (React.createElement(React.Fragment, null,
        label && React.createElement("p", null, label),
        React.createElement(CheckboxBase_1.CheckboxBase, __assign({ id: "checkbox-" + id, disabled: disabled, checked: checked, name: name, type: "checkbox", as: "input", onChange: onChange }, rest))));
};
exports.default = exports.Checkbox;


/***/ }),

/***/ "./src/components/CheckboxBase/CheckboxBase.tsx":
/*!******************************************************!*\
  !*** ./src/components/CheckboxBase/CheckboxBase.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
/** View */
var Box_1 = __webpack_require__(/*! ../Box/Box */ "./src/components/Box/Box.tsx");
var Input = styled_components_1.default(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.CheckboxBase = function (props) {
    var id = props.id, name = props.name, _a = props.disabled, disabled = _a === void 0 ? false : _a, checked = props.checked, _b = props.defaultChecked, defaultChecked = _b === void 0 ? false : _b, value = props.value, onChange = props.onChange, rest = __rest(props, ["id", "name", "disabled", "checked", "defaultChecked", "value", "onChange"]);
    // console.log("CheckboxBase", props);
    return (React.createElement(Input, __assign({ id: "checkbox-" + id, disabled: disabled, checked: checked, name: name, type: "checkbox", as: "input", value: value, onChange: function (event) {
            onChange(event.target.value);
        } }, rest)));
};
exports.default = exports.CheckboxBase;
var templateObject_1;


/***/ }),

/***/ "./src/components/CheckboxGroup/CheckboxGroup.tsx":
/*!********************************************************!*\
  !*** ./src/components/CheckboxGroup/CheckboxGroup.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
/** View  */
var Checkbox_1 = __webpack_require__(/*! ../Checkbox/Checkbox */ "./src/components/Checkbox/Checkbox.tsx");
var CheckboxGroup = /** @class */ (function (_super) {
    __extends(CheckboxGroup, _super);
    function CheckboxGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (value) {
            var propsValue = _this.props.value;
            var valueIndex = propsValue.findIndex(function (item) { return item === value; });
            // console.log("RadioButtonGroup onChange", value, this.props.value);
            if (valueIndex > -1) {
                propsValue.splice(valueIndex, 1);
            }
            else {
                propsValue.push(value);
            }
            _this.props.onChange(propsValue);
        };
        _this.checkStatusCheckbox = function (value) {
            if (Array.isArray(_this.props.value) &&
                _this.props.value.findIndex(function (item) { return item === value; }) > -1) {
                return true;
            }
            else {
                return false;
            }
        };
        return _this;
    }
    CheckboxGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, options = _a.options, labelProp = _a.labelProp, valueProp = _a.valueProp, disabled = _a.disabled, checked = _a.checked, input = _a.input, value = _a.value, onChange = _a.onChange, rest = __rest(_a, ["options", "labelProp", "valueProp", "disabled", "checked", "input", "value", "onChange"]);
        // console.log("CheckboxGroup this.props", this.props);
        return (React.createElement(React.Fragment, null, Array.isArray(options) &&
            options.map(function (item, index) {
                return (React.createElement(Checkbox_1.default, __assign({ name: "CheckboxGroup-" + index, value: item[valueProp], label: item[labelProp], disabled: disabled, checked: _this.checkStatusCheckbox(item[valueProp]), onChange: _this.onChange, key: "CheckboxGroup-" + index }, input, rest)));
            })));
    };
    return CheckboxGroup;
}(React.Component));
exports.CheckboxGroup = CheckboxGroup;
exports.default = CheckboxGroup;


/***/ }),

/***/ "./src/components/Container/Container.tsx":
/*!************************************************!*\
  !*** ./src/components/Container/Container.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
/**View */
var Box_1 = __webpack_require__(/*! ../Box/Box */ "./src/components/Box/Box.tsx");
exports.Container = styled_components_1.default(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.Container.defaultProps = {
    mt: 0,
    mb: 0,
    ml: "auto",
    mr: "auto",
    maxWidth: "992px"
};
exports.default = exports.Container;
var templateObject_1;


/***/ }),

/***/ "./src/components/Flex/Flex.tsx":
/*!**************************************!*\
  !*** ./src/components/Flex/Flex.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_system_1 = __webpack_require__(/*! styled-system */ "styled-system");
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
/**View */
var Box_1 = __webpack_require__(/*! ../Box/Box */ "./src/components/Box/Box.tsx");
exports.Flex = styled_components_1.default(Box_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  display: flex;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), styled_system_1.justifyContent, styled_system_1.alignItems, styled_system_1.alignContent, styled_system_1.flex, styled_system_1.flexBasis, styled_system_1.flexDirection, styled_system_1.flexWrap, styled_system_1.order);
exports.default = exports.Flex;
var templateObject_1;


/***/ }),

/***/ "./src/components/Image/Image.tsx":
/*!****************************************!*\
  !*** ./src/components/Image/Image.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
var styled_system_1 = __webpack_require__(/*! styled-system */ "styled-system");
exports.Image = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), styled_system_1.width, styled_system_1.height, styled_system_1.borderRadius, styled_system_1.display);
exports.Image.defaultProps = {
    display: "block"
};
exports.default = exports.Image;
var templateObject_1;


/***/ }),

/***/ "./src/components/Input/Input.tsx":
/*!****************************************!*\
  !*** ./src/components/Input/Input.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
var styled_system_1 = __webpack_require__(/*! styled-system */ "styled-system");
var Box_1 = __webpack_require__(/*! ../Box/Box */ "./src/components/Box/Box.tsx");
var inputVariant = styled_system_1.variant({
    key: "variant.inputVariant",
    prop: "variant"
});
var inputSize = styled_system_1.variant({
    key: "variant.inputSize",
    prop: "size"
});
exports.Input = styled_components_1.default(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n"], ["\n  ", ";\n  ", ";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n"])), inputVariant, inputSize);
exports.Input.defaultProps = {
    variant: "default",
    size: "medium",
    as: "input"
};
exports.default = exports.Input;
var templateObject_1;


/***/ }),

/***/ "./src/components/Link/Link.tsx":
/*!**************************************!*\
  !*** ./src/components/Link/Link.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
var styled_system_1 = __webpack_require__(/*! styled-system */ "styled-system");
exports.Link = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #333;\n  cursor: pointer;\n  text-decoration: none;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  /* &:hover {\n    ", ";\n  } */\n"], ["\n  color: #333;\n  cursor: pointer;\n  text-decoration: none;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  /* &:hover {\n    ", ";\n  } */\n"])), styled_system_1.space, styled_system_1.width, styled_system_1.display, styled_system_1.color, styled_system_1.fontSize, styled_system_1.fontFamily, styled_system_1.fontWeight, styled_system_1.lineHeight, function (props) { return styled_system_1.color(__assign({}, props, { color: "color3" })); });
exports.Link.defaultProps = {};
exports.default = exports.Link;
var templateObject_1;


/***/ }),

/***/ "./src/components/RadioButton/RadioButton.tsx":
/*!****************************************************!*\
  !*** ./src/components/RadioButton/RadioButton.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var RadioButtonBase_1 = __webpack_require__(/*! ../RadioButtonBase/RadioButtonBase */ "./src/components/RadioButtonBase/RadioButtonBase.tsx");
exports.RadioButton = function (props) {
    var label = props.label, onChange = props.onChange, checked = props.checked, name = props.name, id = props.id, 
    // disabled,
    value = props.value, rest = __rest(props, ["label", "onChange", "checked", "name", "id", "value"]);
    // console.log("RadioButton", props);
    return (React.createElement(React.Fragment, null,
        label && React.createElement("p", null, label),
        React.createElement(RadioButtonBase_1.default, __assign({ id: id, 
            // disabled={disabled}
            checked: checked, name: name, onChange: onChange, value: value }, rest))));
};
exports.default = exports.RadioButton;


/***/ }),

/***/ "./src/components/RadioButtonBase/RadioButtonBase.tsx":
/*!************************************************************!*\
  !*** ./src/components/RadioButtonBase/RadioButtonBase.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
/** View */
var Box_1 = __webpack_require__(/*! ../Box/Box */ "./src/components/Box/Box.tsx");
var Input = styled_components_1.default(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.RadioButtonBase = function (props) {
    var id = props.id, name = props.name, checked = props.checked, value = props.value, onChange = props.onChange, 
    // defaultChecked,
    rest = __rest(props, ["id", "name", "checked", "value", "onChange"]);
    // console.log("RadioButtonBase", props);
    return (React.createElement(Input, __assign({ id: "radiocheckbox-" + id, checked: checked, name: name, 
        // defaultChecked={defaultChecked}
        onChange: function (event) {
            onChange(event.target.value);
        }, value: value, type: "radio", as: "input" }, rest)));
};
exports.default = exports.RadioButtonBase;
var templateObject_1;


/***/ }),

/***/ "./src/components/RadioButtonGroup/RadioButtonGroup.tsx":
/*!**************************************************************!*\
  !*** ./src/components/RadioButtonGroup/RadioButtonGroup.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
/** View  */
var RadioButton_1 = __webpack_require__(/*! ../RadioButton/RadioButton */ "./src/components/RadioButton/RadioButton.tsx");
var RadioButtonGroup = /** @class */ (function (_super) {
    __extends(RadioButtonGroup, _super);
    function RadioButtonGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (value) {
            _this.props.onChange(value);
        };
        return _this;
    }
    RadioButtonGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, options = _a.options, labelProp = _a.labelProp, valueProp = _a.valueProp, disabled = _a.disabled, checked = _a.checked, input = _a.input, value = _a.value, name = _a.name, id = _a.id, 
        // defaultChecked,
        onChange = _a.onChange, rest = __rest(_a, ["options", "labelProp", "valueProp", "disabled", "checked", "input", "value", "name", "id", "onChange"]);
        // console.log("RadioButtonGroup this.props", this.props);
        return (React.createElement(React.Fragment, null, Array.isArray(options) &&
            options.map(function (item, index) {
                return (React.createElement(RadioButton_1.default, __assign({ name: name, id: id, value: item[valueProp], label: item[labelProp], disabled: disabled, checked: checked, 
                    // defaultChecked={defaultChecked}
                    onChange: _this.onChange, key: "RadioButtonGroup-" + index }, input, rest)));
            })));
    };
    return RadioButtonGroup;
}(React.Component));
exports.RadioButtonGroup = RadioButtonGroup;
exports.default = RadioButtonGroup;


/***/ }),

/***/ "./src/components/SelectBase/SelectBase.tsx":
/*!**************************************************!*\
  !*** ./src/components/SelectBase/SelectBase.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
// import  PropTypes  from "prop-types";
var react_select_1 = __webpack_require__(/*! react-select */ "react-select");
var SelectBase = /** @class */ (function (_super) {
    __extends(SelectBase, _super);
    function SelectBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedOption: null
        };
        return _this;
    }
    // handleChange = selectedOption => {
    //   const { value } = this.props;
    //   this.setState(
    //     () => ({ selectedOption }),
    //     () => {
    //       return this.state.selectedOption
    //         ? this.state.selectedOption[value]
    //         : null;
    //     }
    //   );
    //   console.log(`Option selected:`, selectedOption["value"]);
    // };
    SelectBase.prototype.render = function () {
        var selectedOption = this.state.selectedOption;
        var _a = this.props, placeholder = _a.placeholder, options = _a.options, isLoading = _a.isLoading, disabled = _a.disabled, input = _a.input;
        return (React.createElement(react_select_1.default, { value: selectedOption, name: input.name, options: options, placeholder: placeholder, blurInputOnSelect: true, isLoading: isLoading, disabled: disabled }));
    };
    // static propTypes = {
    //   /** input */
    //   input: PropTypes.object.isRequired,
    //   options: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
    //   loading: PropTypes.bool,
    //   placeholder: PropTypes.string
    // };
    SelectBase.defaultProps = {
        options: [],
        placeholder: ""
    };
    return SelectBase;
}(React.Component));
exports.SelectBase = SelectBase;
exports.default = SelectBase;


/***/ }),

/***/ "./src/components/SmallPreloader/SmallPreloader.tsx":
/*!**********************************************************!*\
  !*** ./src/components/SmallPreloader/SmallPreloader.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
var Box_1 = __webpack_require__(/*! ../Box/Box */ "./src/components/Box/Box.tsx");
exports.PreloaderWrapper = styled_components_1.default(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  z-index: 3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.6);\n  -webkit-transition: 0.225s all;\n  -o-transition: 0.225s all;\n  transition: 0.225s all;\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  z-index: 3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.6);\n  -webkit-transition: 0.225s all;\n  -o-transition: 0.225s all;\n  transition: 0.225s all;\n"])));
exports.SpeedingWheel = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 1em;\n  height: 1em;\n  margin: 0 auto;\n  border: 2px solid #00649c;\n  border-radius: 50%;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  animation: cssload-spin 500ms infinite linear;\n  -o-animation: cssload-spin 500ms infinite linear;\n  -ms-animation: cssload-spin 500ms infinite linear;\n  -webkit-animation: cssload-spin 500ms infinite linear;\n  -moz-animation: cssload-spin 500ms infinite linear;\n\n  @keyframes cssload-spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @-o-keyframes cssload-spin {\n    100% {\n      -o-transform: rotate(360deg);\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @-ms-keyframes cssload-spin {\n    100% {\n      -ms-transform: rotate(360deg);\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @-webkit-keyframes cssload-spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @-moz-keyframes cssload-spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"], ["\n  width: 1em;\n  height: 1em;\n  margin: 0 auto;\n  border: 2px solid #00649c;\n  border-radius: 50%;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  animation: cssload-spin 500ms infinite linear;\n  -o-animation: cssload-spin 500ms infinite linear;\n  -ms-animation: cssload-spin 500ms infinite linear;\n  -webkit-animation: cssload-spin 500ms infinite linear;\n  -moz-animation: cssload-spin 500ms infinite linear;\n\n  @keyframes cssload-spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @-o-keyframes cssload-spin {\n    100% {\n      -o-transform: rotate(360deg);\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @-ms-keyframes cssload-spin {\n    100% {\n      -ms-transform: rotate(360deg);\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @-webkit-keyframes cssload-spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @-moz-keyframes cssload-spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"])));
exports.SmallPreloader = function () { return (React.createElement(React.Fragment, null,
    React.createElement(exports.SpeedingWheel, null))); };
exports.default = exports.SmallPreloader;
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/TabBar/TabContent.tsx":
/*!**********************************************!*\
  !*** ./src/components/TabBar/TabContent.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var TabContent = /** @class */ (function (_super) {
    __extends(TabContent, _super);
    function TabContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns
     * @memberof Tabs
     */
    TabContent.prototype.render = function () {
        var _a = this.props, children = _a.children, activeTab = _a.activeTab, toggleTab = _a.toggleTab, ClickContentCloseTab = _a.ClickContentCloseTab;
        if (!children) {
            return null;
        }
        if (activeTab >= 0 && activeTab !== null) {
            if (Array.isArray(children)) {
                return (React.createElement("div", { onClick: function () {
                        if (ClickContentCloseTab) {
                            toggleTab(activeTab);
                        }
                    } }, children[activeTab]));
            }
            return (React.createElement("div", { onClick: function () {
                    if (ClickContentCloseTab) {
                        toggleTab(activeTab);
                    }
                } }, children));
        }
        return null;
    };
    TabContent.defaultProps = {};
    return TabContent;
}(React.Component));
exports.TabContent = TabContent;
exports.default = TabContent;


/***/ }),

/***/ "./src/components/TabBar/TabController.tsx":
/*!*************************************************!*\
  !*** ./src/components/TabBar/TabController.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
var Backdrop = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  ", " background-color: transparent;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  ",
    " background-color: transparent;\n"])), function (props) {
    return props.backdrop && props.isActive !== null
        ? "display:block;"
        : "display:none;";
});
/**
 * The component tab controller
 * @example ./TabController.example.md
 */
var TabController = /** @class */ (function (_super) {
    __extends(TabController, _super);
    function TabController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = _this.initialState;
        /**
         * @desc change tab by index
         * @param {number} index
         * @memberof Controller
         */
        _this.toggleTab = function (index) {
            _this.setState(function (prevState) {
                if (prevState.activeTab !== index) {
                    return {
                        activeTab: index
                    };
                }
                else if (_this.props.hideWhenReClicking &&
                    prevState.activeTab === index) {
                    /**
                     * @desc need for correct work
                     */
                    return {
                        activeTab: null
                    };
                }
                /**
                 * @desc need for correct work
                 */
                return prevState.activeTab;
            });
        };
        return _this;
    }
    Object.defineProperty(TabController.prototype, "initialState", {
        get: function () {
            return {
                activeTab: this.props.defaultActiveTab
            };
        },
        enumerable: true,
        configurable: true
    });
    TabController.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, backdrop = _a.backdrop, ClickContentCloseTab = _a.ClickContentCloseTab;
        var activeTab = this.state.activeTab;
        if (!children) {
            return null;
        }
        var childrenWithProps = React.Children.map(children, function (child) {
            return React.cloneElement(child, {
                activeTab: activeTab,
                toggleTab: _this.toggleTab,
                ClickContentCloseTab: ClickContentCloseTab
            });
        });
        return (React.createElement(React.Fragment, null,
            React.createElement(Backdrop, { backdrop: backdrop, isActive: activeTab, onClick: function () { return _this.toggleTab(null); } }),
            childrenWithProps));
    };
    TabController.defaultProps = {
        defaultActiveTab: 0,
        hideWhenReClicking: false,
        backdrop: false,
        ClickContentCloseTab: false
    };
    return TabController;
}(React.Component));
exports.default = TabController;
var templateObject_1;


/***/ }),

/***/ "./src/components/TabBar/Tabs.tsx":
/*!****************************************!*\
  !*** ./src/components/TabBar/Tabs.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
var TabsStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 0;\n  width: 100%;\n  display: flex;\n\n  flex-wrap: wrap;\n\n  @media (min-width: 576px) {\n    flex-wrap: nowrap;\n  }\n  @media (min-width: 768px) {\n    flex-wrap: nowrap;\n  }\n  @media (min-width: 992px) {\n    flex-wrap: nowrap;\n  }\n  @media (min-width: 1200px) {\n    flex-wrap: nowrap;\n  }\n"], ["\n  border: 0;\n  width: 100%;\n  display: flex;\n\n  flex-wrap: wrap;\n\n  @media (min-width: 576px) {\n    flex-wrap: nowrap;\n  }\n  @media (min-width: 768px) {\n    flex-wrap: nowrap;\n  }\n  @media (min-width: 992px) {\n    flex-wrap: nowrap;\n  }\n  @media (min-width: 1200px) {\n    flex-wrap: nowrap;\n  }\n"])));
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns
     * @memberof Tabs
     */
    Tabs.prototype.render = function () {
        var _a = this.props, children = _a.children, activeTab = _a.activeTab, toggleTab = _a.toggleTab;
        if (!children) {
            return null;
        }
        var childrenWithProps = React.Children.map(children, function (child, index) {
            return React.cloneElement(child, {
                onClick: function (event) {
                    event.stopPropagation();
                    toggleTab(index);
                },
                active: activeTab !== index
            });
        });
        return React.createElement(TabsStyled, null, childrenWithProps);
    };
    Tabs.defaultProps = {};
    return Tabs;
}(React.Component));
exports.Tabs = Tabs;
exports.default = Tabs;
var templateObject_1;


/***/ }),

/***/ "./src/components/Text/Text.tsx":
/*!**************************************!*\
  !*** ./src/components/Text/Text.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
var Box_1 = __webpack_require__(/*! ../Box/Box */ "./src/components/Box/Box.tsx");
// /** Style property */
// import { BackgroundColorProperty } from "../../styles/styleProperty/BackgroundColorProperty";
// import { FillSvgProperty } from "../../styles/styleProperty/FillSvgProperty";
// import { FontFamilyProperty } from "../../styles/FontFamilyProperty";
// import { LineHeightProperty } from "../../styles/styleProperty/LineHeightProperty";
/**
 * Компонент текста
 * @example ./Text.example.md
 */
exports.Text = styled_components_1.default(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
exports.Text.defaultProps = {
    color: "#333333"
};
exports.default = exports.Text;
var templateObject_1;


/***/ }),

/***/ "./src/components/TextArea/TextArea.tsx":
/*!**********************************************!*\
  !*** ./src/components/TextArea/TextArea.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
var styled_system_1 = __webpack_require__(/*! styled-system */ "styled-system");
/** View */
var Box_1 = __webpack_require__(/*! ../Box/Box */ "./src/components/Box/Box.tsx");
var inputVariant = styled_system_1.variant({
    key: 'variant.inputVariant',
    prop: 'variant'
});
exports.TextArea = styled_components_1.default(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n"], ["\n  ", ";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n"])), inputVariant);
exports.TextArea.defaultProps = {
    variant: 'default',
    as: 'textarea'
};
exports.default = exports.TextArea;
var templateObject_1;


/***/ }),

/***/ "./src/components/TooltipBase/TooltipBase.tsx":
/*!****************************************************!*\
  !*** ./src/components/TooltipBase/TooltipBase.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
var TooltipBaseStyled_1 = __webpack_require__(/*! ./TooltipBaseStyled */ "./src/components/TooltipBase/TooltipBaseStyled.tsx");
var Relative = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
/**
 * Компонент тултипа (Tooltip)
 * @example ./TooltipBase.example.md
 */
var TooltipBase = /** @class */ (function (_super) {
    __extends(TooltipBase, _super);
    function TooltipBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TooltipBase.prototype.shouldComponentUpdate = function (nextProps) {
        if (nextProps.isActive !== this.props.isActive) {
            return true;
        }
        return false;
    };
    TooltipBase.prototype.render = function () {
        var _a = this.props, warning = _a.warning, position = _a.position, isActive = _a.isActive, children = _a.children;
        return (React.createElement(Relative, null,
            isActive && (React.createElement(TooltipBaseStyled_1.Wrapper, { position: position },
                React.createElement(TooltipBaseStyled_1.OutsideTriangle, { position: position }),
                React.createElement(TooltipBaseStyled_1.InsideTriangle, { position: position }),
                React.createElement(TooltipBaseStyled_1.Warning, null, warning))),
            children));
    };
    TooltipBase.defaultProps = {
        warning: "Информация не доступна",
        position: "bottom",
        isActive: false
    };
    return TooltipBase;
}(React.Component));
exports.TooltipBase = TooltipBase;
exports.default = TooltipBase;
var templateObject_1;


/***/ }),

/***/ "./src/components/TooltipBase/TooltipBaseStyled.tsx":
/*!**********************************************************!*\
  !*** ./src/components/TooltipBase/TooltipBaseStyled.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
var styled_system_1 = __webpack_require__(/*! styled-system */ "styled-system");
// import BorderColorProperty from "../../styles/styleProperty/BorderColorProperty";
// import BackgroundColorProperty from "../../styles/styleProperty/BackgroundColorProperty";
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 300px;\n  min-width: 140px;\n  padding: 6px;\n  position: absolute;\n  right: 0;\n\n  ", "\n\n  z-index: 1;\n  text-align: left;\n  border: 1px solid;\n  border-radius: 3px;\n\n  ", "\n"], ["\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 300px;\n  min-width: 140px;\n  padding: 6px;\n  position: absolute;\n  right: 0;\n\n  ",
    "\n\n  z-index: 1;\n  text-align: left;\n  border: 1px solid;\n  border-radius: 3px;\n\n  ",
    "\n"])), function (_a) {
    var position = _a.position;
    switch (position) {
        case "bottom": {
            return "\n          left: 14px;\n          top: calc(100% + 10px);\n        ";
        }
        case "top": {
            return "\n          left: 14px;\n          bottom: calc(100% + 10px);\n        ";
        }
        default: {
            return "\n          left: 14px;\n          top: calc(100% + 10px);\n        ";
        }
    }
}, function (props) {
    return styled_system_1.borderColor(__assign({}, props, { borderColor: "#B71C1C" }));
});
/* ${props => BorderColorProperty({ ...props, borderColor: "color12" })}
  ${props =>
    BackgroundColorProperty({
      ...props,
      backgroundColor: "color0"
    })} */
exports.OutsideTriangle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 0;\n  height: 0;\n  position: absolute;\n  z-index: 1;\n  border-style: solid;\n  border-width: 6.5px 14px 6.5px 0;\n  border-color: transparent #b71c1c transparent transparent;\n\n  ", "\n"], ["\n  width: 0;\n  height: 0;\n  position: absolute;\n  z-index: 1;\n  border-style: solid;\n  border-width: 6.5px 14px 6.5px 0;\n  border-color: transparent #b71c1c transparent transparent;\n\n  ",
    "\n"])), function (_a) {
    var position = _a.position;
    switch (position) {
        case "bottom": {
            return "\n            transform: rotate(90deg);\n            top: -14px;\n            left: 15%;\n          ";
        }
        case "top": {
            return "\n          transform: rotate(-90deg);\n          bottom: -14px;\n          left: 15%;\n        ";
        }
        default: {
            return "\n          -webkit-transform: rotate(90deg);\n          -ms-transform: rotate(90deg);\n          transform: rotate(90deg);\n          top: -14px;\n          left: 15%;\n        ";
        }
    }
});
/* ${props => BorderColorProperty({ ...props, borderTopColor: "color12" })} */
exports.InsideTriangle = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 0;\n  height: 0;\n  position: absolute;\n  z-index: 2;\n  border-style: solid;\n  border-width: 6.5px 14px 6.5px 0;\n  border-color: transparent #fff transparent transparent;\n\n  ", "\n"], ["\n  width: 0;\n  height: 0;\n  position: absolute;\n  z-index: 2;\n  border-style: solid;\n  border-width: 6.5px 14px 6.5px 0;\n  border-color: transparent #fff transparent transparent;\n\n  ",
    "\n"])), function (_a) {
    var position = _a.position;
    switch (position) {
        case "bottom": {
            return "\n          transform: rotate(90deg);\n          top: -12px;\n          left: 15%;\n        ";
        }
        case "top": {
            return "\n          transform: rotate(-90deg);\n          bottom: -12px;\n          left: 15%;\n        ";
        }
        default: {
            return "\n          transform: rotate(90deg);\n          top: -12px;\n          left: 15%;\n        ";
        }
    }
});
/* ${props => BorderColorProperty({ ...props, borderTopColor: "color12" })} */
exports.Warning = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  font-size:14px;\n  line-height: 22px;\n"], ["\n  ",
    "\n  font-size:14px;\n  line-height: 22px;\n"])), function (props) {
    return styled_system_1.color(__assign({}, props, { color: "#B71C1C" }));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = __webpack_require__(/*! ./components/Box/Box */ "./src/components/Box/Box.tsx");
exports.Box = Box_1.default;
var Flex_1 = __webpack_require__(/*! ./components/Flex/Flex */ "./src/components/Flex/Flex.tsx");
exports.Flex = Flex_1.default;
var Input_1 = __webpack_require__(/*! ./components/Input/Input */ "./src/components/Input/Input.tsx");
exports.Input = Input_1.default;
var TextArea_1 = __webpack_require__(/*! ./components/TextArea/TextArea */ "./src/components/TextArea/TextArea.tsx");
exports.TextArea = TextArea_1.default;
var SelectBase_1 = __webpack_require__(/*! ./components/SelectBase/SelectBase */ "./src/components/SelectBase/SelectBase.tsx");
exports.SelectBase = SelectBase_1.default;
var ButtonBase_1 = __webpack_require__(/*! ./components/ButtonBase/ButtonBase */ "./src/components/ButtonBase/ButtonBase.tsx");
exports.ButtonBase = ButtonBase_1.default;
var CheckboxBase_1 = __webpack_require__(/*! ./components/CheckboxBase/CheckboxBase */ "./src/components/CheckboxBase/CheckboxBase.tsx");
exports.CheckboxBase = CheckboxBase_1.default;
var Checkbox_1 = __webpack_require__(/*! ./components/Checkbox/Checkbox */ "./src/components/Checkbox/Checkbox.tsx");
exports.Checkbox = Checkbox_1.default;
var CheckboxGroup_1 = __webpack_require__(/*! ./components/CheckboxGroup/CheckboxGroup */ "./src/components/CheckboxGroup/CheckboxGroup.tsx");
exports.CheckboxGroup = CheckboxGroup_1.default;
var RadioButtonBase_1 = __webpack_require__(/*! ./components/RadioButtonBase/RadioButtonBase */ "./src/components/RadioButtonBase/RadioButtonBase.tsx");
exports.RadioButtonBase = RadioButtonBase_1.default;
var RadioButton_1 = __webpack_require__(/*! ./components/RadioButton/RadioButton */ "./src/components/RadioButton/RadioButton.tsx");
exports.RadioButton = RadioButton_1.default;
var RadioButtonGroup_1 = __webpack_require__(/*! ./components/RadioButtonGroup/RadioButtonGroup */ "./src/components/RadioButtonGroup/RadioButtonGroup.tsx");
exports.RadioButtonGroup = RadioButtonGroup_1.default;
var Tabs_1 = __webpack_require__(/*! ./components/TabBar/Tabs */ "./src/components/TabBar/Tabs.tsx");
exports.Tabs = Tabs_1.default;
var TabContent_1 = __webpack_require__(/*! ./components/TabBar/TabContent */ "./src/components/TabBar/TabContent.tsx");
exports.TabContent = TabContent_1.default;
var TabController_1 = __webpack_require__(/*! ./components/TabBar/TabController */ "./src/components/TabBar/TabController.tsx");
exports.TabController = TabController_1.default;
var TooltipBase_1 = __webpack_require__(/*! ./components/TooltipBase/TooltipBase */ "./src/components/TooltipBase/TooltipBase.tsx");
exports.TooltipBase = TooltipBase_1.default;
var Text_1 = __webpack_require__(/*! ./components/Text/Text */ "./src/components/Text/Text.tsx");
exports.Text = Text_1.default;
var SmallPreloader_1 = __webpack_require__(/*! ./components/SmallPreloader/SmallPreloader */ "./src/components/SmallPreloader/SmallPreloader.tsx");
exports.SmallPreloader = SmallPreloader_1.default;
var Card_1 = __webpack_require__(/*! ./components/Card/Card */ "./src/components/Card/Card.tsx");
exports.Card = Card_1.default;
var Container_1 = __webpack_require__(/*! ./components/Container/Container */ "./src/components/Container/Container.tsx");
exports.Container = Container_1.default;
var Image_1 = __webpack_require__(/*! ./components/Image/Image */ "./src/components/Image/Image.tsx");
exports.Image = Image_1.default;
var Link_1 = __webpack_require__(/*! ./components/Link/Link */ "./src/components/Link/Link.tsx");
exports.Link = Link_1.default;
// import PaginationPage from "./components/Pagination/Pagination";
// import PaginationHOC from "./components/Pagination/PaginationHOC";
/** Style */
var StyleThemeProvider_1 = __webpack_require__(/*! ./styles/StyleThemeProvider */ "./src/styles/StyleThemeProvider.tsx");
exports.StyledThemeProvider = StyleThemeProvider_1.default;
exports.Colors = StyleThemeProvider_1.Colors;
exports.Space = StyleThemeProvider_1.Space;
exports.BoxShadow = StyleThemeProvider_1.BoxShadow;
exports.Border = StyleThemeProvider_1.Border;
exports.BaseTheme = StyleThemeProvider_1.BaseTheme;
var GlobalStyle_1 = __webpack_require__(/*! ./styles/GlobalStyle */ "./src/styles/GlobalStyle.tsx");
exports.GlobalStyle = GlobalStyle_1.default;
var ButtonSize_1 = __webpack_require__(/*! ./styles/variants/buttons/ButtonSize */ "./src/styles/variants/buttons/ButtonSize.tsx");
exports.ButtonSize = ButtonSize_1.ButtonSize;
var ButtonVariant_1 = __webpack_require__(/*! ./styles/variants/buttons/ButtonVariant */ "./src/styles/variants/buttons/ButtonVariant.tsx");
exports.ButtonVariant = ButtonVariant_1.ButtonVariant;
var InputVariant_1 = __webpack_require__(/*! ./styles/variants/inputs/InputVariant */ "./src/styles/variants/inputs/InputVariant.tsx");
exports.InputVariant = InputVariant_1.InputVariant;
var InputSize_1 = __webpack_require__(/*! ./styles/variants/inputs/InputSize */ "./src/styles/variants/inputs/InputSize.tsx");
exports.InputSize = InputSize_1.InputSize;


/***/ }),

/***/ "./src/styles/GlobalStyle.tsx":
/*!************************************!*\
  !*** ./src/styles/GlobalStyle.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
exports.GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  * {\n    box-sizing: border-box;\n  }\n\n  body, html, #app {\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    min-height: 100vh;\n    background-color: #fff;\n  }\n  \n  *:focus {\n    outline:0\n  }\n"], ["\n  * {\n    box-sizing: border-box;\n  }\n\n  body, html, #app {\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    min-height: 100vh;\n    background-color: #fff;\n  }\n  \n  *:focus {\n    outline:0\n  }\n"])));
exports.default = exports.GlobalStyle;
var templateObject_1;


/***/ }),

/***/ "./src/styles/StyleThemeProvider.tsx":
/*!*******************************************!*\
  !*** ./src/styles/StyleThemeProvider.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
/** Variants */
var ButtonSize_1 = __webpack_require__(/*! ./variants/buttons/ButtonSize */ "./src/styles/variants/buttons/ButtonSize.tsx");
var InputVariant_1 = __webpack_require__(/*! ./variants/inputs/InputVariant */ "./src/styles/variants/inputs/InputVariant.tsx");
var ButtonVariant_1 = __webpack_require__(/*! ./variants/buttons/ButtonVariant */ "./src/styles/variants/buttons/ButtonVariant.tsx");
var InputSize_1 = __webpack_require__(/*! ./variants/inputs/InputSize */ "./src/styles/variants/inputs/InputSize.tsx");
exports.Colors = {
    white: '#ffffff',
    blue: '#2196f3',
    red: '#e10050',
    orange: '#f44336',
    black: '#000',
    dark: '#1f1f1f',
    gray: '#6d6d6d',
    lightGray: '#939393',
};
exports.Space = [0, 2, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96];
exports.BoxShadow = [
    'none',
    'rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px',
    'rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px',
    'rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px',
];
exports.Border = [
    'none',
    '1px solid rgba(0, 0, 0, 0.42)',
    '2px solid #1976d2',
];
exports.BaseTheme = {
    space: exports.Space,
    fontSizes: exports.Space,
    lineHeight: exports.Space,
    borderRadius: exports.Space,
    boxShadow: exports.BoxShadow,
    border: exports.Border,
    borderColor: exports.Colors,
    colors: exports.Colors,
    variant: {
        buttonVariant: {},
        buttonSize: {},
        inputVariant: {},
        inputSize: {},
    }
};
exports.BaseTheme.variant.button = ButtonVariant_1.ButtonVariant(exports.BaseTheme);
exports.BaseTheme.variant.buttonSize = ButtonSize_1.ButtonSize();
exports.BaseTheme.variant.inputVariant = InputVariant_1.InputVariant(exports.BaseTheme);
exports.BaseTheme.variant.inputSize = InputSize_1.InputSize(exports.BaseTheme);
exports.StyledThemeProvider = function (_a) {
    var children = _a.children, _b = _a.theme, theme = _b === void 0 ? exports.BaseTheme : _b;
    return (React.createElement(styled_components_1.ThemeProvider, { theme: theme }, children));
};
exports.default = exports.StyledThemeProvider;


/***/ }),

/***/ "./src/styles/variants/buttons/ButtonSize.tsx":
/*!****************************************************!*\
  !*** ./src/styles/variants/buttons/ButtonSize.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonSize = function () {
    return {
        small: {
            padding: '4px 8px',
            minWidth: '64px',
            fontSize: '0.8125rem'
        },
        medium: {
            padding: '5px 16px',
            minWidth: '64px',
            fontSize: '0.875rem'
        },
        large: {
            padding: '8px 24px',
            minWidth: '64px',
            fontSize: '0.9375rem'
        },
    };
};
exports.default = exports.ButtonSize;


/***/ }),

/***/ "./src/styles/variants/buttons/ButtonVariant.tsx":
/*!*******************************************************!*\
  !*** ./src/styles/variants/buttons/ButtonVariant.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseStyle = {
    display: 'inline-block',
    border: 'none',
    background: 'none',
    font: 'inherit',
};
exports.ButtonVariant = function (theme) {
    console.log(theme.border);
    return {
        default: __assign({}, baseStyle, { ':hover': {}, ':active': {}, ':disabled': {}, ':focus': {}, ':visited': {}, '.active': {} }),
        primary: __assign({}, baseStyle, { ':hover': {}, ':active': {}, ':disabled': {}, ':focus': {}, ':visited': {}, '.active': {} }),
        secondary: __assign({}, baseStyle, { ':hover': {}, ':active': {}, ':disabled': {}, ':focus': {}, ':visited': {}, '.active': {} }),
        error: __assign({}, baseStyle, { ':hover': {}, ':active': {}, ':disabled': {}, ':focus': {}, ':visited': {}, '.active': {} })
    };
};
exports.default = exports.ButtonVariant;


/***/ }),

/***/ "./src/styles/variants/inputs/InputSize.tsx":
/*!**************************************************!*\
  !*** ./src/styles/variants/inputs/InputSize.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseStyle = {
    padding: 0,
};
exports.InputSize = function (theme) {
    if (theme === void 0) { theme = {}; }
    return {
        xSmall: __assign({}, baseStyle, { fontSize: theme.space[5] }),
        small: __assign({}, baseStyle, { fontSize: theme.space[5] }),
        medium: __assign({}, baseStyle, { fontSize: theme.space[6] }),
        large: __assign({}, baseStyle, { fontSize: theme.space[6] }),
    };
};
exports.default = exports.InputSize;


/***/ }),

/***/ "./src/styles/variants/inputs/InputVariant.tsx":
/*!*****************************************************!*\
  !*** ./src/styles/variants/inputs/InputVariant.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseStyle = {
    font: 'inherit',
    display: 'block',
    boxSizing: 'content-box',
    background: 'none',
    border: 'none',
    '-webkit-tap-highlight-color': 'transparent',
    cursor: 'text',
};
exports.InputVariant = function (theme) {
    console.log(theme);
    return {
        default: __assign({}, baseStyle, { borderBottomStyle: 'solid', borderBottomWidth: '1px', borderColor: theme.colors.dark, outline: 'none', ':hover': {
                borderBottomWidth: '2px',
                borderColor: theme.colors.blue,
            }, ':active': {
                borderBottomWidth: '2px',
                borderColor: theme.colors.blue,
            }, '.active': {
                borderBottomWidth: '2px',
                borderColor: theme.colors.blue,
            }, ':focus': {
                outline: 'none',
                borderBottomWidth: '2px',
                borderColor: theme.colors.blue,
            }, ':disabled': {
                cursor: 'default',
                outline: 'none',
                borderColor: theme.colors.gray,
            }, ':visited': {}, '::placeholder': {
                color: theme.colors.gray,
            } }),
        primary: __assign({}, baseStyle, { ':hover': {}, ':active': {}, ':disabled': {}, ':focus': {}, ':visited': {}, '.active': {} }),
        secondary: __assign({}, baseStyle, { ':hover': {}, ':active': {}, ':disabled': {}, ':focus': {}, ':visited': {}, '.active': {} }),
        error: __assign({}, baseStyle, { ':hover': {}, ':active': {}, ':disabled': {}, ':focus': {}, ':visited': {}, '.active': {} })
    };
};


/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Dev\CodeArtel\front-end-core\code-artel-ui-lib\src\index.tsx */"./src/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL0JveC9Cb3gudHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uQmFzZS9CdXR0b25CYXNlLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9DaGVja2JveC9DaGVja2JveC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9DaGVja2JveEJhc2UvQ2hlY2tib3hCYXNlLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL0NoZWNrYm94R3JvdXAvQ2hlY2tib3hHcm91cC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL0ZsZXgvRmxleC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9JbWFnZS9JbWFnZS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9MaW5rL0xpbmsudHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL2NvbXBvbmVudHMvUmFkaW9CdXR0b24vUmFkaW9CdXR0b24udHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL2NvbXBvbmVudHMvUmFkaW9CdXR0b25CYXNlL1JhZGlvQnV0dG9uQmFzZS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9SYWRpb0J1dHRvbkdyb3VwL1JhZGlvQnV0dG9uR3JvdXAudHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0QmFzZS9TZWxlY3RCYXNlLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL1NtYWxsUHJlbG9hZGVyL1NtYWxsUHJlbG9hZGVyLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL1RhYkJhci9UYWJDb250ZW50LnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL1RhYkJhci9UYWJDb250cm9sbGVyLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL1RhYkJhci9UYWJzLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL1RleHQvVGV4dC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9UZXh0QXJlYS9UZXh0QXJlYS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwQmFzZS9Ub29sdGlwQmFzZS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwQmFzZS9Ub29sdGlwQmFzZVN0eWxlZC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL3N0eWxlcy9HbG9iYWxTdHlsZS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvc3R5bGVzL1N0eWxlVGhlbWVQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvc3R5bGVzL3ZhcmlhbnRzL2J1dHRvbnMvQnV0dG9uU2l6ZS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvc3R5bGVzL3ZhcmlhbnRzL2J1dHRvbnMvQnV0dG9uVmFyaWFudC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvc3R5bGVzL3ZhcmlhbnRzL2lucHV0cy9JbnB1dFNpemUudHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL3N0eWxlcy92YXJpYW50cy9pbnB1dHMvSW5wdXRWYXJpYW50LnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvZXh0ZXJuYWwgXCJyZWFjdC1zZWxlY3RcIiIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvZXh0ZXJuYWwgXCJzdHlsZWQtc3lzdGVtXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LEVBQUUsRUFDZixRQUFRLEVBQUUsRUFBRSxFQUNaLFVBQVUsRUFBRSxFQUFFLEVBQ2QsU0FBUyxFQUFFLEVBQUUsR0FDZDtRQUNELFNBQVMsZUFDSixTQUFTLElBQ1osUUFBUSxFQUFFLEVBQUUsRUFDWixTQUFTLEVBQUUsRUFBRSxFQUNiLFdBQVcsRUFBRSxFQUFFLEVBQ2YsUUFBUSxFQUFFLEVBQUUsRUFDWixVQUFVLEVBQUUsRUFBRSxFQUNkLFNBQVMsRUFBRSxFQUFFLEdBQ2Q7UUFDRCxLQUFLLGVBQ0EsU0FBUyxJQUNaLFFBQVEsRUFBRSxFQUFFLEVBQ1osU0FBUyxFQUFFLEVBQUUsRUFDYixXQUFXLEVBQUUsRUFBRSxFQUNmLFFBQVEsRUFBRSxFQUFFLEVBQ1osVUFBVSxFQUFFLEVBQUUsRUFDZCxTQUFTLEVBQUUsRUFBRSxHQUNkO0tBQ0Y7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkQsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsMEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBzcGFjZSxcbiAgd2lkdGgsXG4gIGNvbG9yLFxuICBmb250U2l6ZSxcbiAgYm9yZGVyLFxuICBib3JkZXJSYWRpdXMsXG4gIGJvcmRlckNvbG9yLFxuICBib3JkZXJzLFxuICBvdmVyZmxvdyxcbiAgZGlzcGxheSxcbiAgbWF4V2lkdGgsXG4gIG1pbldpZHRoLFxuICBoZWlnaHQsXG4gIHRleHRBbGlnbixcbiAgbGluZUhlaWdodCxcbiAgbWluSGVpZ2h0LFxuICBvcGFjaXR5LFxuICBsZXR0ZXJTcGFjaW5nLFxuICBTcGFjZVByb3BzLFxuICBEaXNwbGF5UHJvcHMsXG4gIE1heFdpZHRoUHJvcHMsXG4gIE1pbldpZHRoUHJvcHMsXG4gIEhlaWdodFByb3BzLFxuICBNaW5IZWlnaHRQcm9wcyxcbiAgT3ZlcmZsb3dQcm9wcyxcbiAgT3BhY2l0eVByb3BzLFxuICB6SW5kZXgsXG4gIGJhY2tncm91bmRJbWFnZSxcbiAgYmFja2dyb3VuZFNpemUsXG4gIGJhY2tncm91bmRQb3NpdGlvbixcbiAgYmFja2dyb3VuZFJlcGVhdFxufSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElCb3hcbiAgZXh0ZW5kcyBTcGFjZVByb3BzLFxuICAgIERpc3BsYXlQcm9wcyxcblxuICAgIE1heFdpZHRoUHJvcHMsXG4gICAgTWluV2lkdGhQcm9wcyxcbiAgICBIZWlnaHRQcm9wcyxcbiAgICBNaW5IZWlnaHRQcm9wcyxcbiAgICBPdmVyZmxvd1Byb3BzLFxuICAgIE9wYWNpdHlQcm9wcyB7XG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdjxJQm94PmBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgJHtkaXNwbGF5fTtcbiAgJHtzcGFjZX07XG4gICR7d2lkdGh9O1xuICAke292ZXJmbG93fTtcbiAgJHtib3JkZXJSYWRpdXN9O1xuICAke2JvcmRlckNvbG9yfTtcbiAgJHtib3JkZXJzfTtcbiAgJHtib3JkZXJ9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtjb2xvcn07XG4gICR7bWF4V2lkdGh9O1xuICAke21pbldpZHRofTtcbiAgJHtoZWlnaHR9O1xuICAke21pbkhlaWdodH07XG4gICR7b3BhY2l0eX07XG4gICR7dGV4dEFsaWdufTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtsZXR0ZXJTcGFjaW5nfTtcbiAgJHt6SW5kZXh9O1xuICAke2JhY2tncm91bmRJbWFnZX07XG4gICR7YmFja2dyb3VuZFNpemV9O1xuICAke2JhY2tncm91bmRQb3NpdGlvbn07XG4gICR7YmFja2dyb3VuZFJlcGVhdH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB2YXJpYW50IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcblxuLyoqVmlldyAqL1xuaW1wb3J0IEJveCBmcm9tIFwiLi4vQm94L0JveFwiO1xuXG5jb25zdCBidXR0b25zVmFyaWFudCA9IHZhcmlhbnQoe1xuICBrZXk6IFwidmFyaWFudC5idXR0b25WYXJpYW50XCIsXG4gIHByb3A6IFwidmFyaWFudFwiXG59KTtcblxuY29uc3QgYnV0dG9uc1NpemUgPSB2YXJpYW50KHtcbiAga2V5OiBcInZhcmlhbnQuYnV0dG9uU2l6ZVwiLFxuICBwcm9wOiBcInNpemVcIlxufSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1dHRvbkJhc2Uge1xuICB2YXJpYW50OiBzdHJpbmc7XG4gIHNpemU6IHN0cmluZztcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbi8qKlxuICog0JrQvtC80L/QvtC90LXQvdGC0LAg0L7QsdGL0YfQvdCw0Y8g0LrQvdC+0L/QutCwXG4gKiBAZXhhbXBsZSAuL0J1dHRvbkJhc2UuZXhhbXBsZS5tZFxuICovXG5leHBvcnQgY29uc3QgQnV0dG9uQmFzZSA9IHN0eWxlZChCb3gpPElCdXR0b25CYXNlPmBcbiAgJHtidXR0b25zVmFyaWFudH07XG4gICR7YnV0dG9uc1NpemV9O1xuYDtcblxuQnV0dG9uQmFzZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIGFzOiBcImJ1dHRvblwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25CYXNlO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLyoqIFZpZXcgKi9cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi9Cb3gvQm94XCI7XG5cbi8qKlxuICog0JrQvtC80L/QvtC90LXQvdGCINC60LDRgNGC0L7Rh9C60LhcbiAqIEBleGFtcGxlIC4vQ2FyZC5leGFtcGxlLm1kXG4gKi9cbmV4cG9ydCBjb25zdCBDYXJkID0gc3R5bGVkKEJveClgXG4gIG1hcmdpbjogMCBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5DYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgYm9yZGVyUmFkaXVzOiAyLFxuICBib3JkZXI6IFwiMXB4IHNvbGlkICNBRUFFQUVcIixcbiAgbWluSGVpZ2h0OiBcIjE1MHB4XCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoZWNrYm94QmFzZSB9IGZyb20gXCIuLi9DaGVja2JveEJhc2UvQ2hlY2tib3hCYXNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrYm94IHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBkZWZhdWx0Q2hlY2tlZD86IGJvb2xlYW47XG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY29uc3QgQ2hlY2tib3ggPSAocHJvcHM6IElDaGVja2JveCkgPT4ge1xuICBjb25zdCB7IGlkLCBuYW1lLCBkaXNhYmxlZCwgY2hlY2tlZCwgbGFiZWwsIG9uQ2hhbmdlLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgLy8gY29uc29sZS5sb2coXCJDaGVja2JveFwiLCBwcm9wcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xhYmVsICYmIDxwPntsYWJlbH08L3A+fVxuICAgICAgPENoZWNrYm94QmFzZVxuICAgICAgICBpZD17YGNoZWNrYm94LSR7aWR9YH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICB0eXBlPXtcImNoZWNrYm94XCJ9XG4gICAgICAgIGFzPXtcImlucHV0XCJ9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8qKiBWaWV3ICovXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vQm94L0JveFwiO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZChCb3gpYGA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrYm94cyB7XG4gIHZhbHVlPzogYW55O1xuICBpZD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBDaGVja2JveEJhc2UgPSAocHJvcHM6IElDaGVja2JveHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIG5hbWUsXG4gICAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgICBjaGVja2VkLFxuICAgIGRlZmF1bHRDaGVja2VkID0gZmFsc2UsXG4gICAgdmFsdWUsXG4gICAgb25DaGFuZ2UsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHM7XG5cbiAgLy8gY29uc29sZS5sb2coXCJDaGVja2JveEJhc2VcIiwgcHJvcHMpO1xuXG4gIHJldHVybiAoXG4gICAgPElucHV0XG4gICAgICBpZD17YGNoZWNrYm94LSR7aWR9YH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgdHlwZT17XCJjaGVja2JveFwifVxuICAgICAgYXM9e1wiaW5wdXRcIn1cbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfX1cbiAgICAgIHsuLi5yZXN0fVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveEJhc2U7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLyoqIFZpZXcgICovXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uL0NoZWNrYm94L0NoZWNrYm94XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrYm94R3JvdXAge1xuICBsYWJlbFByb3A6IHN0cmluZztcbiAgdmFsdWVQcm9wOiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGRlZmF1bHRDaGVja2VkPzogYm9vbGVhbjtcbiAgb3B0aW9uczogSU9wdGlvbnNbXTtcbiAgaW5wdXQ6IGFueTtcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvbnMge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQ2hlY2tib3hHcm91cD4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzOiB7XG4gICAgbGFiZWxQcm9wOiBcImZvb1wiO1xuICB9O1xuXG4gIG9uQ2hhbmdlID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICBsZXQgcHJvcHNWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG4gICAgY29uc3QgdmFsdWVJbmRleCA9IHByb3BzVmFsdWUuZmluZEluZGV4KChpdGVtOiBhbnkpID0+IGl0ZW0gPT09IHZhbHVlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIlJhZGlvQnV0dG9uR3JvdXAgb25DaGFuZ2VcIiwgdmFsdWUsIHRoaXMucHJvcHMudmFsdWUpO1xuXG4gICAgaWYgKHZhbHVlSW5kZXggPiAtMSkge1xuICAgICAgcHJvcHNWYWx1ZS5zcGxpY2UodmFsdWVJbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzVmFsdWUucHVzaCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShwcm9wc1ZhbHVlKTtcbiAgfTtcblxuICBjaGVja1N0YXR1c0NoZWNrYm94ID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KHRoaXMucHJvcHMudmFsdWUpICYmXG4gICAgICB0aGlzLnByb3BzLnZhbHVlLmZpbmRJbmRleCgoaXRlbTogYW55KSA9PiBpdGVtID09PSB2YWx1ZSkgPiAtMVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9wdGlvbnMsXG4gICAgICBsYWJlbFByb3AsXG4gICAgICB2YWx1ZVByb3AsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGNoZWNrZWQsXG4gICAgICBpbnB1dCxcbiAgICAgIHZhbHVlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gY29uc29sZS5sb2coXCJDaGVja2JveEdyb3VwIHRoaXMucHJvcHNcIiwgdGhpcy5wcm9wcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge0FycmF5LmlzQXJyYXkob3B0aW9ucykgJiZcbiAgICAgICAgICBvcHRpb25zLm1hcChcbiAgICAgICAgICAgIChpdGVtOiBhbnksIGluZGV4OiBhbnkpOiBhbnkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgbmFtZT17YENoZWNrYm94R3JvdXAtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1bdmFsdWVQcm9wXX1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtpdGVtW2xhYmVsUHJvcF19XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLmNoZWNrU3RhdHVzQ2hlY2tib3goaXRlbVt2YWx1ZVByb3BdKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAga2V5PXtgQ2hlY2tib3hHcm91cC0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94R3JvdXA7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vKipWaWV3ICovXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vQm94L0JveFwiO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEJveClgYDtcblxuQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgbXQ6IDAsXG4gIG1iOiAwLFxuICBtbDogXCJhdXRvXCIsXG4gIG1yOiBcImF1dG9cIixcbiAgbWF4V2lkdGg6IFwiOTkycHhcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIiwiaW1wb3J0IHtcbiAganVzdGlmeUNvbnRlbnQsXG4gIGFsaWduSXRlbXMsXG4gIGFsaWduQ29udGVudCxcbiAgZmxleCxcbiAgZmxleEJhc2lzLFxuICBmbGV4RGlyZWN0aW9uLFxuICBmbGV4V3JhcCxcbiAgb3JkZXJcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLyoqVmlldyAqL1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gvQm94JztcblxuZXhwb3J0IGludGVyZmFjZSBJRmxleCB7XG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY29uc3QgRmxleCA9IHN0eWxlZChCb3gpPElGbGV4PmBcbiAgZGlzcGxheTogZmxleDtcbiAgJHtqdXN0aWZ5Q29udGVudH07XG4gICR7YWxpZ25JdGVtc307XG4gICR7YWxpZ25Db250ZW50fTtcbiAgJHtmbGV4fTtcbiAgJHtmbGV4QmFzaXN9O1xuICAke2ZsZXhEaXJlY3Rpb259O1xuICAke2ZsZXhXcmFwfTtcbiAgJHtvcmRlcn07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBGbGV4O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHdpZHRoLCBoZWlnaHQsIGJvcmRlclJhZGl1cywgZGlzcGxheSB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmV4cG9ydCBjb25zdCBJbWFnZTogYW55ID0gc3R5bGVkLmltZ2BcbiAgJHt3aWR0aH07XG4gICR7aGVpZ2h0fTtcbiAgJHtib3JkZXJSYWRpdXN9O1xuICAke2Rpc3BsYXl9O1xuYDtcblxuSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5OiBcImJsb2NrXCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHZhcmlhbnQgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vQm94L0JveFwiO1xuXG5jb25zdCBpbnB1dFZhcmlhbnQgPSB2YXJpYW50KHtcbiAga2V5OiBcInZhcmlhbnQuaW5wdXRWYXJpYW50XCIsXG4gIHByb3A6IFwidmFyaWFudFwiXG59KTtcbmNvbnN0IGlucHV0U2l6ZSA9IHZhcmlhbnQoe1xuICBrZXk6IFwidmFyaWFudC5pbnB1dFNpemVcIixcbiAgcHJvcDogXCJzaXplXCJcbn0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbnB1dCB7XG4gIHZhcmlhbnQ/OiBzdHJpbmc7XG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55LFxufVxuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQoQm94KTxJSW5wdXQ+YFxuICAke2lucHV0VmFyaWFudH07XG4gICR7aW5wdXRTaXplfTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuYDtcblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgc2l6ZTogXCJtZWRpdW1cIixcbiAgYXM6IFwiaW5wdXRcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtcbiAgc3BhY2UsXG4gIHdpZHRoLFxuICBkaXNwbGF5LFxuICBjb2xvcixcbiAgZm9udFNpemUsXG4gIGZvbnRGYW1pbHksXG4gIGZvbnRXZWlnaHQsXG4gIGxpbmVIZWlnaHRcbn0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcblxuZXhwb3J0IGNvbnN0IExpbms6IGFueSA9IHN0eWxlZC5hYFxuICBjb2xvcjogIzMzMztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICR7c3BhY2V9O1xuICAke3dpZHRofTtcbiAgJHtkaXNwbGF5fTtcbiAgJHtjb2xvcn07XG4gICR7Zm9udFNpemV9O1xuICAke2ZvbnRGYW1pbHl9O1xuICAke2ZvbnRXZWlnaHR9O1xuICAke2xpbmVIZWlnaHR9O1xuICAvKiAmOmhvdmVyIHtcbiAgICAke3Byb3BzID0+IGNvbG9yKHsgLi4ucHJvcHMsIGNvbG9yOiBcImNvbG9yM1wiIH0pfTtcbiAgfSAqL1xuYDtcblxuTGluay5kZWZhdWx0UHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgTGluaztcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJhZGlvQnV0dG9uQmFzZSBmcm9tIFwiLi4vUmFkaW9CdXR0b25CYXNlL1JhZGlvQnV0dG9uQmFzZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSYWRpb0J1dHRvbiB7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBsYWJlbD86IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBvbkNoYW5nZTogYW55O1xuICBpZD86IHN0cmluZztcbiAgLy8gZGlzYWJsZWQ/OiBib29sZWFuO1xuICB2YWx1ZTogYW55O1xuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IFJhZGlvQnV0dG9uID0gKHByb3BzOiBJUmFkaW9CdXR0b24pID0+IHtcbiAgY29uc3Qge1xuICAgIGxhYmVsLFxuICAgIG9uQ2hhbmdlLFxuICAgIGNoZWNrZWQsXG4gICAgbmFtZSxcbiAgICBpZCxcbiAgICAvLyBkaXNhYmxlZCxcbiAgICB2YWx1ZSxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wcztcbiAgLy8gY29uc29sZS5sb2coXCJSYWRpb0J1dHRvblwiLCBwcm9wcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xhYmVsICYmIDxwPntsYWJlbH08L3A+fVxuICAgICAgPFJhZGlvQnV0dG9uQmFzZVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIC8vIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvQnV0dG9uO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vKiogVmlldyAqL1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uL0JveC9Cb3hcIjtcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQoQm94KWBgO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSYWRpb0J1dHRvbkJhc2Uge1xuICBpZD86IHN0cmluZztcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGlucHV0PzogYW55O1xuICBvbkNoYW5nZT86IGFueTtcbiAgdmFsdWU6IHN0cmluZztcbiAgZGVmYXVsdENoZWNrZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgUmFkaW9CdXR0b25CYXNlID0gKHByb3BzOiBJUmFkaW9CdXR0b25CYXNlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBuYW1lLFxuICAgIGNoZWNrZWQsXG4gICAgdmFsdWUsXG4gICAgb25DaGFuZ2UsXG4gICAgLy8gZGVmYXVsdENoZWNrZWQsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHM7XG4gIC8vIGNvbnNvbGUubG9nKFwiUmFkaW9CdXR0b25CYXNlXCIsIHByb3BzKTtcblxuICByZXR1cm4gKFxuICAgIDxJbnB1dFxuICAgICAgaWQ9e2ByYWRpb2NoZWNrYm94LSR7aWR9YH1cbiAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgLy8gZGVmYXVsdENoZWNrZWQ9e2RlZmF1bHRDaGVja2VkfVxuICAgICAgb25DaGFuZ2U9eyhldmVudDogYW55KSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9fVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgdHlwZT17XCJyYWRpb1wifVxuICAgICAgYXM9e1wiaW5wdXRcIn1cbiAgICAgIHsuLi5yZXN0fVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0J1dHRvbkJhc2U7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLyoqIFZpZXcgICovXG5pbXBvcnQgUmFkaW9CdXR0b24gZnJvbSBcIi4uL1JhZGlvQnV0dG9uL1JhZGlvQnV0dG9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJhZGlvQnV0dG9uR3JvdXAge1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGxhYmVsUHJvcDogc3RyaW5nO1xuICB2YWx1ZVByb3A6IHN0cmluZztcbiAgaW5wdXQ6IGFueTtcbiAgb3B0aW9uczogSU9wdGlvbnNbXTtcbiAgZGVmYXVsdENoZWNrZWQ/OiBhbnk7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvbnMge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b25Hcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUmFkaW9CdXR0b25Hcm91cD4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzOiB7XG4gICAgbGFiZWxQcm9wOiBcImZvb1wiO1xuICB9O1xuXG4gIG9uQ2hhbmdlID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb3B0aW9ucyxcbiAgICAgIGxhYmVsUHJvcCxcbiAgICAgIHZhbHVlUHJvcCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgY2hlY2tlZCxcbiAgICAgIGlucHV0LFxuICAgICAgdmFsdWUsXG4gICAgICBuYW1lLFxuICAgICAgaWQsXG4gICAgICAvLyBkZWZhdWx0Q2hlY2tlZCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiUmFkaW9CdXR0b25Hcm91cCB0aGlzLnByb3BzXCIsIHRoaXMucHJvcHMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtBcnJheS5pc0FycmF5KG9wdGlvbnMpICYmXG4gICAgICAgICAgb3B0aW9ucy5tYXAoXG4gICAgICAgICAgICAoaXRlbTogYW55LCBpbmRleDogYW55KTogYW55ID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25cbiAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbVt2YWx1ZVByb3BdfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2l0ZW1bbGFiZWxQcm9wXX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0Q2hlY2tlZD17ZGVmYXVsdENoZWNrZWR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIGtleT17YFJhZGlvQnV0dG9uR3JvdXAtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgey4uLmlucHV0fVxuICAgICAgICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0J1dHRvbkdyb3VwO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgIFByb3BUeXBlcyAgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuLy8gaW1wb3J0IERlZXBFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZWxlY3RCYXNlIHtcbiAgcGxhY2Vob2xkZXI/OiBhbnk7XG4gIG9wdGlvbnM/OiBhbnk7XG4gIGlzTG9hZGluZz86IGFueTtcbiAgZGlzYWJsZWQ/OiBhbnk7XG4gIGlucHV0PzogYW55O1xuICB2YWx1ZT86IGFueTtcbiAgbmFtZT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0QmFzZVN0YXRlIHtcbiAgc2VsZWN0ZWRPcHRpb24/OiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RCYXNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElTZWxlY3RCYXNlLCBJU2VsZWN0QmFzZVN0YXRlPiB7XG4gIHN0YXRlID0ge1xuICAgIHNlbGVjdGVkT3B0aW9uOiBudWxsXG4gIH07XG5cbiAgLy8gc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgLy8gICAvKiogaW5wdXQgKi9cbiAgLy8gICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvLyAgIG9wdGlvbnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheSwgUHJvcFR5cGVzLmJvb2xdKSxcbiAgLy8gICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgLy8gICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZ1xuICAvLyB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb3B0aW9uczogW10sXG4gICAgcGxhY2Vob2xkZXI6IFwiXCJcbiAgfTtcblxuICAvLyBoYW5kbGVDaGFuZ2UgPSBzZWxlY3RlZE9wdGlvbiA9PiB7XG4gIC8vICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgLy8gICB0aGlzLnNldFN0YXRlKFxuICAvLyAgICAgKCkgPT4gKHsgc2VsZWN0ZWRPcHRpb24gfSksXG4gIC8vICAgICAoKSA9PiB7XG4gIC8vICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uXG4gIC8vICAgICAgICAgPyB0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uW3ZhbHVlXVxuICAvLyAgICAgICAgIDogbnVsbDtcbiAgLy8gICAgIH1cbiAgLy8gICApO1xuICAvLyAgIGNvbnNvbGUubG9nKGBPcHRpb24gc2VsZWN0ZWQ6YCwgc2VsZWN0ZWRPcHRpb25bXCJ2YWx1ZVwiXSk7XG4gIC8vIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRPcHRpb24gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCB7IHBsYWNlaG9sZGVyLCBvcHRpb25zLCBpc0xvYWRpbmcsIGRpc2FibGVkLCBpbnB1dCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdFxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XG4gICAgICAgIG5hbWU9e2lucHV0Lm5hbWV9XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgYmx1cklucHV0T25TZWxlY3Q9e3RydWV9XG4gICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIC8vIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RCYXNlO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uL0JveC9Cb3hcIjtcblxuZXhwb3J0IGNvbnN0IFByZWxvYWRlcldyYXBwZXIgPSBzdHlsZWQoQm94KWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiAzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMjI1cyBhbGw7XG4gIC1vLXRyYW5zaXRpb246IDAuMjI1cyBhbGw7XG4gIHRyYW5zaXRpb246IDAuMjI1cyBhbGw7XG5gO1xuZXhwb3J0IGNvbnN0IFNwZWVkaW5nV2hlZWw6IGFueSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgIzAwNjQ5YztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGFuaW1hdGlvbjogY3NzbG9hZC1zcGluIDUwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgLW8tYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNTAwbXMgaW5maW5pdGUgbGluZWFyO1xuICAtbXMtYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNTAwbXMgaW5maW5pdGUgbGluZWFyO1xuICAtd2Via2l0LWFuaW1hdGlvbjogY3NzbG9hZC1zcGluIDUwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgLW1vei1hbmltYXRpb246IGNzc2xvYWQtc3BpbiA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG5cbiAgQGtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuXG4gIEAtby1rZXlmcmFtZXMgY3NzbG9hZC1zcGluIHtcbiAgICAxMDAlIHtcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG5cbiAgQC1tcy1rZXlmcmFtZXMgY3NzbG9hZC1zcGluIHtcbiAgICAxMDAlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgY3NzbG9hZC1zcGluIHtcbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cblxuICBALW1vei1rZXlmcmFtZXMgY3NzbG9hZC1zcGluIHtcbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTbWFsbFByZWxvYWRlciA9ICgpID0+IChcbiAgPD5cbiAgICA8U3BlZWRpbmdXaGVlbCAvPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNtYWxsUHJlbG9hZGVyO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8qKlxuICogVGhlIGNvbnRlbnQgb2YgdGhlIFRhYkNvbnRlbnRcbiAqIEBleGFtcGxlIC4vVGFiQ29udGVudC5leGFtcGxlLm1kXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJVGFiQ29udGVudCB7XG4gIHRvZ2dsZVRhYj86IGFueTtcbiAgYWN0aXZlVGFiPzogYW55O1xuICBjaGlsZHJlbj86IGFueTtcbiAgQ2xpY2tDb250ZW50Q2xvc2VUYWI/OiBhbnk7XG59XG5leHBvcnQgY2xhc3MgVGFiQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJVGFiQ29udGVudD4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge307XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zXG4gICAqIEBtZW1iZXJvZiBUYWJzXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgYWN0aXZlVGFiLCB0b2dnbGVUYWIsIENsaWNrQ29udGVudENsb3NlVGFiIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoYWN0aXZlVGFiID49IDAgJiYgYWN0aXZlVGFiICE9PSBudWxsKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChDbGlja0NvbnRlbnRDbG9zZVRhYikge1xuICAgICAgICAgICAgICAgIHRvZ2dsZVRhYihhY3RpdmVUYWIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlblthY3RpdmVUYWJdfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmIChDbGlja0NvbnRlbnRDbG9zZVRhYikge1xuICAgICAgICAgICAgICB0b2dnbGVUYWIoYWN0aXZlVGFiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYkNvbnRlbnQ7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IEJhY2tkcm9wOiBhbnkgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbiAgJHsocHJvcHM6IGFueSkgPT5cbiAgICBwcm9wcy5iYWNrZHJvcCAmJiBwcm9wcy5pc0FjdGl2ZSAhPT0gbnVsbFxuICAgICAgPyBcImRpc3BsYXk6YmxvY2s7XCJcbiAgICAgIDogXCJkaXNwbGF5Om5vbmU7XCJ9IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuYDtcblxuZXhwb3J0IGludGVyZmFjZSBJVGFiQ29udHJvbGxlciB7XG4gIGRlZmF1bHRBY3RpdmVUYWI/OiBhbnk7XG4gIGFjdGl2ZVRhYj86IGFueTtcbiAgaGlkZVdoZW5SZUNsaWNraW5nPzogYW55O1xuICBiYWNrZHJvcD86IGFueTtcbiAgaXNBY3RpdmU/OiBhbnk7XG4gIENsaWNrQ29udGVudENsb3NlVGFiPzogYW55O1xuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbn1cblxuLyoqXG4gKiBUaGUgY29tcG9uZW50IHRhYiBjb250cm9sbGVyXG4gKiBAZXhhbXBsZSAuL1RhYkNvbnRyb2xsZXIuZXhhbXBsZS5tZFxuICovXG5jbGFzcyBUYWJDb250cm9sbGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElUYWJDb250cm9sbGVyPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVmYXVsdEFjdGl2ZVRhYjogMCxcbiAgICBoaWRlV2hlblJlQ2xpY2tpbmc6IGZhbHNlLFxuICAgIGJhY2tkcm9wOiBmYWxzZSxcbiAgICBDbGlja0NvbnRlbnRDbG9zZVRhYjogZmFsc2VcbiAgfTtcblxuICBzdGF0ZSA9IHRoaXMuaW5pdGlhbFN0YXRlO1xuXG4gIGdldCBpbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZVRhYjogdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlVGFiXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBjaGFuZ2UgdGFiIGJ5IGluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAbWVtYmVyb2YgQ29udHJvbGxlclxuICAgKi9cbiAgdG9nZ2xlVGFiID0gKGluZGV4OiBhbnkpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGU6IGFueSkgPT4ge1xuICAgICAgaWYgKHByZXZTdGF0ZS5hY3RpdmVUYWIgIT09IGluZGV4KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYWN0aXZlVGFiOiBpbmRleFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy5wcm9wcy5oaWRlV2hlblJlQ2xpY2tpbmcgJiZcbiAgICAgICAgcHJldlN0YXRlLmFjdGl2ZVRhYiA9PT0gaW5kZXhcbiAgICAgICkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQGRlc2MgbmVlZCBmb3IgY29ycmVjdCB3b3JrXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGFjdGl2ZVRhYjogbnVsbFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBAZGVzYyBuZWVkIGZvciBjb3JyZWN0IHdvcmtcbiAgICAgICAqL1xuICAgICAgcmV0dXJuIHByZXZTdGF0ZS5hY3RpdmVUYWI7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGJhY2tkcm9wLCBDbGlja0NvbnRlbnRDbG9zZVRhYiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGFjdGl2ZVRhYiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZHJlbldpdGhQcm9wcyA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkOiBhbnkpID0+XG4gICAgICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgYWN0aXZlVGFiLFxuICAgICAgICB0b2dnbGVUYWI6IHRoaXMudG9nZ2xlVGFiLFxuICAgICAgICBDbGlja0NvbnRlbnRDbG9zZVRhYlxuICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxCYWNrZHJvcFxuICAgICAgICAgIGJhY2tkcm9wPXtiYWNrZHJvcH1cbiAgICAgICAgICBpc0FjdGl2ZT17YWN0aXZlVGFifVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlVGFiKG51bGwpfVxuICAgICAgICAvPlxuICAgICAgICB7Y2hpbGRyZW5XaXRoUHJvcHN9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYkNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IFRhYnNTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gIH1cbmA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYnMge1xuICB0b2dnbGVUYWI/OiBhbnk7XG4gIGFjdGl2ZVRhYj86IGFueTtcbiAgY2hpbGRyZW4/OiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElUYWJzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7fTtcblxuICAvKipcbiAgICogQHJldHVybnNcbiAgICogQG1lbWJlcm9mIFRhYnNcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBhY3RpdmVUYWIsIHRvZ2dsZVRhYiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWNoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRyZW5XaXRoUHJvcHMgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+XG4gICAgICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgb25DbGljazogZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHRvZ2dsZVRhYihpbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZTogYWN0aXZlVGFiICE9PSBpbmRleFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIDxUYWJzU3R5bGVkPntjaGlsZHJlbldpdGhQcm9wc308L1RhYnNTdHlsZWQ+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uL0JveC9Cb3hcIjtcblxuLy8gLyoqIFN0eWxlIHByb3BlcnR5ICovXG4vLyBpbXBvcnQgeyBCYWNrZ3JvdW5kQ29sb3JQcm9wZXJ0eSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvc3R5bGVQcm9wZXJ0eS9CYWNrZ3JvdW5kQ29sb3JQcm9wZXJ0eVwiO1xuLy8gaW1wb3J0IHsgRmlsbFN2Z1Byb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9zdHlsZVByb3BlcnR5L0ZpbGxTdmdQcm9wZXJ0eVwiO1xuLy8gaW1wb3J0IHsgRm9udEZhbWlseVByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9Gb250RmFtaWx5UHJvcGVydHlcIjtcbi8vIGltcG9ydCB7IExpbmVIZWlnaHRQcm9wZXJ0eSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvc3R5bGVQcm9wZXJ0eS9MaW5lSGVpZ2h0UHJvcGVydHlcIjtcblxuLyoqXG4gKiDQmtC+0LzQv9C+0L3QtdC90YIg0YLQtdC60YHRgtCwXG4gKiBAZXhhbXBsZSAuL1RleHQuZXhhbXBsZS5tZFxuICovXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZChCb3gpYFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5UZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6IFwiIzMzMzMzM1wiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB2YXJpYW50IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbi8qKiBWaWV3ICovXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9Cb3gvQm94JztcblxuY29uc3QgaW5wdXRWYXJpYW50ID0gdmFyaWFudCh7XG4gIGtleTogJ3ZhcmlhbnQuaW5wdXRWYXJpYW50JyxcbiAgcHJvcDogJ3ZhcmlhbnQnXG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBJVGV4dEFyZWEge1xuICB2YXJpYW50Pzogc3RyaW5nO1xuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IFRleHRBcmVhID0gc3R5bGVkKEJveCk8SVRleHRBcmVhPmBcbiAgJHtpbnB1dFZhcmlhbnR9O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5gO1xuXG5UZXh0QXJlYS5kZWZhdWx0UHJvcHMgPSB7XG4gIHZhcmlhbnQ6ICdkZWZhdWx0JyxcbiAgYXM6ICd0ZXh0YXJlYSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtcbiAgV3JhcHBlcixcbiAgT3V0c2lkZVRyaWFuZ2xlLFxuICBJbnNpZGVUcmlhbmdsZSxcbiAgV2FybmluZ1xufSBmcm9tIFwiLi9Ub29sdGlwQmFzZVN0eWxlZFwiO1xuXG5jb25zdCBSZWxhdGl2ZSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRvb2x0aXBCYXNlIHtcbiAgaXNBY3RpdmU/OiBhbnk7XG4gIHBvc2l0aW9uPzogYW55O1xuICB3YXJuaW5nPzogYW55O1xuICBDbGlja0NvbnRlbnRDbG9zZVRhYj86IGFueTtcbn1cblxuLyoqXG4gKiDQmtC+0LzQv9C+0L3QtdC90YIg0YLRg9C70YLQuNC/0LAgKFRvb2x0aXApXG4gKiBAZXhhbXBsZSAuL1Rvb2x0aXBCYXNlLmV4YW1wbGUubWRcbiAqL1xuZXhwb3J0IGNsYXNzIFRvb2x0aXBCYXNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElUb29sdGlwQmFzZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHdhcm5pbmc6IFwi0JjQvdGE0L7RgNC80LDRhtC40Y8g0L3QtSDQtNC+0YHRgtGD0L/QvdCwXCIsXG4gICAgcG9zaXRpb246IFwiYm90dG9tXCIsXG4gICAgaXNBY3RpdmU6IGZhbHNlXG4gIH07XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wczogYW55KSB7XG4gICAgaWYgKG5leHRQcm9wcy5pc0FjdGl2ZSAhPT0gdGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHdhcm5pbmcsIHBvc2l0aW9uLCBpc0FjdGl2ZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWxhdGl2ZT5cbiAgICAgICAge2lzQWN0aXZlICYmIChcbiAgICAgICAgICA8V3JhcHBlciBwb3NpdGlvbj17cG9zaXRpb259PlxuICAgICAgICAgICAgPE91dHNpZGVUcmlhbmdsZSBwb3NpdGlvbj17cG9zaXRpb259IC8+XG4gICAgICAgICAgICA8SW5zaWRlVHJpYW5nbGUgcG9zaXRpb249e3Bvc2l0aW9ufSAvPlxuICAgICAgICAgICAgPFdhcm5pbmc+e3dhcm5pbmd9PC9XYXJuaW5nPlxuICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9SZWxhdGl2ZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBCYXNlO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IGNvbG9yLCBib3JkZXJDb2xvciB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG4vLyBpbXBvcnQgQm9yZGVyQ29sb3JQcm9wZXJ0eSBmcm9tIFwiLi4vLi4vc3R5bGVzL3N0eWxlUHJvcGVydHkvQm9yZGVyQ29sb3JQcm9wZXJ0eVwiO1xuLy8gaW1wb3J0IEJhY2tncm91bmRDb2xvclByb3BlcnR5IGZyb20gXCIuLi8uLi9zdHlsZXMvc3R5bGVQcm9wZXJ0eS9CYWNrZ3JvdW5kQ29sb3JQcm9wZXJ0eVwiO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlcjogYW55ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcblxuICAkeyh7IHBvc2l0aW9uIH06IGFueSkgPT4ge1xuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgIGNhc2UgXCJib3R0b21cIjoge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgIGxlZnQ6IDE0cHg7XG4gICAgICAgICAgdG9wOiBjYWxjKDEwMCUgKyAxMHB4KTtcbiAgICAgICAgYDtcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJ0b3BcIjoge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgIGxlZnQ6IDE0cHg7XG4gICAgICAgICAgYm90dG9tOiBjYWxjKDEwMCUgKyAxMHB4KTtcbiAgICAgICAgYDtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICBsZWZ0OiAxNHB4O1xuICAgICAgICAgIHRvcDogY2FsYygxMDAlICsgMTBweCk7XG4gICAgICAgIGA7XG4gICAgICB9XG4gICAgfVxuICB9fVxuXG4gIHotaW5kZXg6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgJHsocHJvcHM6IGFueSkgPT4ge1xuICAgIHJldHVybiBib3JkZXJDb2xvcih7IC4uLnByb3BzLCBib3JkZXJDb2xvcjogXCIjQjcxQzFDXCIgfSk7XG4gIH19XG5gO1xuXG4vKiAke3Byb3BzID0+IEJvcmRlckNvbG9yUHJvcGVydHkoeyAuLi5wcm9wcywgYm9yZGVyQ29sb3I6IFwiY29sb3IxMlwiIH0pfVxuICAke3Byb3BzID0+XG4gICAgQmFja2dyb3VuZENvbG9yUHJvcGVydHkoe1xuICAgICAgLi4ucHJvcHMsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiY29sb3IwXCJcbiAgICB9KX0gKi9cblxuZXhwb3J0IGNvbnN0IE91dHNpZGVUcmlhbmdsZTogYW55ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDYuNXB4IDE0cHggNi41cHggMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjYjcxYzFjIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuXG4gICR7KHsgcG9zaXRpb24gfTogYW55KSA9PiB7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgY2FzZSBcImJvdHRvbVwiOiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICB0b3A6IC0xNHB4O1xuICAgICAgICAgICAgbGVmdDogMTUlO1xuICAgICAgICAgIGA7XG4gICAgICB9XG4gICAgICBjYXNlIFwidG9wXCI6IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgICAgIGJvdHRvbTogLTE0cHg7XG4gICAgICAgICAgbGVmdDogMTUlO1xuICAgICAgICBgO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgIHRvcDogLTE0cHg7XG4gICAgICAgICAgbGVmdDogMTUlO1xuICAgICAgICBgO1xuICAgICAgfVxuICAgIH1cbiAgfX1cbmA7XG4vKiAke3Byb3BzID0+IEJvcmRlckNvbG9yUHJvcGVydHkoeyAuLi5wcm9wcywgYm9yZGVyVG9wQ29sb3I6IFwiY29sb3IxMlwiIH0pfSAqL1xuXG5leHBvcnQgY29uc3QgSW5zaWRlVHJpYW5nbGU6IGFueSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiA2LjVweCAxNHB4IDYuNXB4IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcblxuICAkeyh7IHBvc2l0aW9uIH06IGFueSkgPT4ge1xuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgIGNhc2UgXCJib3R0b21cIjoge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICAgIGxlZnQ6IDE1JTtcbiAgICAgICAgYDtcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJ0b3BcIjoge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgICAgYm90dG9tOiAtMTJweDtcbiAgICAgICAgICBsZWZ0OiAxNSU7XG4gICAgICAgIGA7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgIHRvcDogLTEycHg7XG4gICAgICAgICAgbGVmdDogMTUlO1xuICAgICAgICBgO1xuICAgICAgfVxuICAgIH1cbiAgfX1cbmA7XG4vKiAke3Byb3BzID0+IEJvcmRlckNvbG9yUHJvcGVydHkoeyAuLi5wcm9wcywgYm9yZGVyVG9wQ29sb3I6IFwiY29sb3IxMlwiIH0pfSAqL1xuXG5leHBvcnQgY29uc3QgV2FybmluZzogYW55ID0gc3R5bGVkLmRpdmBcbiAgJHsocHJvcHM6IGFueSkgPT4ge1xuICAgIHJldHVybiBjb2xvcih7IC4uLnByb3BzLCBjb2xvcjogXCIjQjcxQzFDXCIgfSk7XG4gIH19XG4gIGZvbnQtc2l6ZToxNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbmA7XG4iLCJpbXBvcnQgQm94IGZyb20gXCIuL2NvbXBvbmVudHMvQm94L0JveFwiO1xuaW1wb3J0IEZsZXggZnJvbSBcIi4vY29tcG9uZW50cy9GbGV4L0ZsZXhcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9jb21wb25lbnRzL0lucHV0L0lucHV0XCI7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcIi4vY29tcG9uZW50cy9UZXh0QXJlYS9UZXh0QXJlYVwiO1xuaW1wb3J0IFNlbGVjdEJhc2UgZnJvbSBcIi4vY29tcG9uZW50cy9TZWxlY3RCYXNlL1NlbGVjdEJhc2VcIjtcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gXCIuL2NvbXBvbmVudHMvQnV0dG9uQmFzZS9CdXR0b25CYXNlXCI7XG5pbXBvcnQgQ2hlY2tib3hCYXNlIGZyb20gXCIuL2NvbXBvbmVudHMvQ2hlY2tib3hCYXNlL0NoZWNrYm94QmFzZVwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuL2NvbXBvbmVudHMvQ2hlY2tib3gvQ2hlY2tib3hcIjtcbmltcG9ydCBDaGVja2JveEdyb3VwIGZyb20gXCIuL2NvbXBvbmVudHMvQ2hlY2tib3hHcm91cC9DaGVja2JveEdyb3VwXCI7XG5pbXBvcnQgUmFkaW9CdXR0b25CYXNlIGZyb20gXCIuL2NvbXBvbmVudHMvUmFkaW9CdXR0b25CYXNlL1JhZGlvQnV0dG9uQmFzZVwiO1xuaW1wb3J0IFJhZGlvQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvUmFkaW9CdXR0b24vUmFkaW9CdXR0b25cIjtcbmltcG9ydCBSYWRpb0J1dHRvbkdyb3VwIGZyb20gXCIuL2NvbXBvbmVudHMvUmFkaW9CdXR0b25Hcm91cC9SYWRpb0J1dHRvbkdyb3VwXCI7XG5pbXBvcnQgVGFicyBmcm9tIFwiLi9jb21wb25lbnRzL1RhYkJhci9UYWJzXCI7XG5pbXBvcnQgVGFiQ29udGVudCBmcm9tIFwiLi9jb21wb25lbnRzL1RhYkJhci9UYWJDb250ZW50XCI7XG5pbXBvcnQgVGFiQ29udHJvbGxlciBmcm9tIFwiLi9jb21wb25lbnRzL1RhYkJhci9UYWJDb250cm9sbGVyXCI7XG5pbXBvcnQgVG9vbHRpcEJhc2UgZnJvbSBcIi4vY29tcG9uZW50cy9Ub29sdGlwQmFzZS9Ub29sdGlwQmFzZVwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4vY29tcG9uZW50cy9UZXh0L1RleHRcIjtcbmltcG9ydCBTbWFsbFByZWxvYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL1NtYWxsUHJlbG9hZGVyL1NtYWxsUHJlbG9hZGVyXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL0NhcmQvQ2FyZFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRhaW5lci9Db250YWluZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi9jb21wb25lbnRzL0ltYWdlL0ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9jb21wb25lbnRzL0xpbmsvTGlua1wiO1xuLy8gaW1wb3J0IFBhZ2luYXRpb25QYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uXCI7XG4vLyBpbXBvcnQgUGFnaW5hdGlvbkhPQyBmcm9tIFwiLi9jb21wb25lbnRzL1BhZ2luYXRpb24vUGFnaW5hdGlvbkhPQ1wiO1xuXG4vKiogU3R5bGUgKi9cbmltcG9ydCBTdHlsZWRUaGVtZVByb3ZpZGVyLCB7XG4gIENvbG9ycyxcbiAgU3BhY2UsXG4gIEJveFNoYWRvdyxcbiAgQm9yZGVyLFxuICBCYXNlVGhlbWUsXG59IGZyb20gXCIuL3N0eWxlcy9TdHlsZVRoZW1lUHJvdmlkZXJcIjtcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi9zdHlsZXMvR2xvYmFsU3R5bGVcIjtcblxuaW1wb3J0IHtCdXR0b25TaXplfSBmcm9tIFwiLi9zdHlsZXMvdmFyaWFudHMvYnV0dG9ucy9CdXR0b25TaXplXCI7XG5pbXBvcnQge0J1dHRvblZhcmlhbnR9IGZyb20gXCIuL3N0eWxlcy92YXJpYW50cy9idXR0b25zL0J1dHRvblZhcmlhbnRcIjtcblxuaW1wb3J0IHtJbnB1dFZhcmlhbnR9IGZyb20gXCIuL3N0eWxlcy92YXJpYW50cy9pbnB1dHMvSW5wdXRWYXJpYW50XCI7XG5pbXBvcnQge0lucHV0U2l6ZX0gZnJvbSBcIi4vc3R5bGVzL3ZhcmlhbnRzL2lucHV0cy9JbnB1dFNpemVcIjtcbmltcG9ydCB7XG4gIElWYXJpYW50U2l6ZSxcbiAgSVZhcmlhbnRJdGVtLFxuICBJVmFyaWFudExpc3QsXG4gIElWYXJpYW50LFxuICBJQ29sb3JzLFxuICBJVGhlbWUsXG59IGZyb20gXCIuL3N0eWxlcy9pbnRlcmZhY2VzXCI7XG5cbmV4cG9ydCB7XG4gIEZsZXgsXG4gIEJveCxcbiAgSW5wdXQsXG4gIFRleHRBcmVhLFxuICBCdXR0b25CYXNlLFxuICBTZWxlY3RCYXNlLFxuICBDaGVja2JveEJhc2UsXG4gIENoZWNrYm94LFxuICBDaGVja2JveEdyb3VwLFxuICBSYWRpb0J1dHRvbkJhc2UsXG4gIFJhZGlvQnV0dG9uLFxuICBUYWJzLFxuICBUYWJDb250cm9sbGVyLFxuICBUYWJDb250ZW50LFxuICBUb29sdGlwQmFzZSxcbiAgUmFkaW9CdXR0b25Hcm91cCxcbiAgVGV4dCxcbiAgU21hbGxQcmVsb2FkZXIsXG4gIENhcmQsXG4gIENvbnRhaW5lcixcbiAgSW1hZ2UsXG4gIExpbmssXG4gIC8vIFBhZ2luYXRpb25QYWdlLFxuICAvLyBQYWdpbmF0aW9uSE9DLFxuXG4gIC8qKiBTVFlMRSAqL1xuXG4gIFN0eWxlZFRoZW1lUHJvdmlkZXIsXG4gIENvbG9ycyxcbiAgU3BhY2UsXG4gIEJveFNoYWRvdyxcbiAgQm9yZGVyLFxuICBCYXNlVGhlbWUsXG4gIEdsb2JhbFN0eWxlLFxuICBCdXR0b25TaXplLFxuICBCdXR0b25WYXJpYW50LFxuICBJbnB1dFZhcmlhbnQsXG4gIElucHV0U2l6ZSxcbiAgSVZhcmlhbnRTaXplLFxuICBJVmFyaWFudEl0ZW0sXG4gIElWYXJpYW50TGlzdCxcbiAgSVZhcmlhbnQsXG4gIElDb2xvcnMsXG4gIElUaGVtZSxcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICBib2R5LCBodG1sLCAjYXBwIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAqOmZvY3VzIHtcbiAgICBvdXRsaW5lOjBcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGU7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUaGVtZVByb3ZpZGVyfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7SUNvbG9ycywgSVRoZW1lfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XG5cbi8qKiBWYXJpYW50cyAqL1xuaW1wb3J0IHtCdXR0b25TaXplfSBmcm9tICcuL3ZhcmlhbnRzL2J1dHRvbnMvQnV0dG9uU2l6ZSc7XG5pbXBvcnQge0lucHV0VmFyaWFudH0gZnJvbSAnLi92YXJpYW50cy9pbnB1dHMvSW5wdXRWYXJpYW50JztcbmltcG9ydCB7QnV0dG9uVmFyaWFudH0gZnJvbSAnLi92YXJpYW50cy9idXR0b25zL0J1dHRvblZhcmlhbnQnO1xuaW1wb3J0IHtJbnB1dFNpemV9IGZyb20gXCIuL3ZhcmlhbnRzL2lucHV0cy9JbnB1dFNpemVcIjtcblxuXG5cblxuZXhwb3J0IGNvbnN0IENvbG9yczogSUNvbG9ycyA9IHtcbiAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgYmx1ZTogJyMyMTk2ZjMnLFxuICByZWQ6ICcjZTEwMDUwJyxcbiAgb3JhbmdlOiAnI2Y0NDMzNicsXG4gIGJsYWNrOiAnIzAwMCcsXG4gIGRhcms6ICcjMWYxZjFmJyxcbiAgZ3JheTogJyM2ZDZkNmQnLFxuICBsaWdodEdyYXk6ICcjOTM5MzkzJyxcbn07XG5cbmV4cG9ydCBjb25zdCBTcGFjZTogbnVtYmVyW10gPSBbMCwgMiwgNCwgOCwgMTYsIDI0LCAzMiwgNDAsIDQ4LCA1NiwgNjQsIDcyLCA4MCwgODgsIDk2XTtcblxuZXhwb3J0IGNvbnN0IEJveFNoYWRvdzogc3RyaW5nW10gPSBbXG4gICdub25lJyxcbiAgJ3JnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDNweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDFweCAxcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAycHggMXB4IC0xcHgnLFxuICAncmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggNXB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMnB4IDJweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDNweCAxcHggLTJweCcsXG4gICdyZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCA4cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAzcHggNHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggM3B4IDNweCAtMnB4Jyxcbl07XG5cbmV4cG9ydCBjb25zdCBCb3JkZXI6IHN0cmluZ1tdID0gW1xuICAnbm9uZScsXG4gICcxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQyKScsXG4gICcycHggc29saWQgIzE5NzZkMicsXG5dO1xuXG5cbmV4cG9ydCBjb25zdCBCYXNlVGhlbWU6IElUaGVtZSA9IHtcbiAgc3BhY2U6IFNwYWNlLFxuICBmb250U2l6ZXM6IFNwYWNlLFxuICBsaW5lSGVpZ2h0OiBTcGFjZSxcbiAgYm9yZGVyUmFkaXVzOiBTcGFjZSxcbiAgYm94U2hhZG93OiBCb3hTaGFkb3csXG4gIGJvcmRlcjogQm9yZGVyLFxuICBib3JkZXJDb2xvcjogQ29sb3JzLFxuICBjb2xvcnM6IENvbG9ycyxcbiAgdmFyaWFudDoge1xuICAgIGJ1dHRvblZhcmlhbnQ6IHt9LFxuICAgIGJ1dHRvblNpemU6IHt9LFxuICAgIGlucHV0VmFyaWFudDoge30sXG4gICAgaW5wdXRTaXplOiB7fSxcbiAgfVxufTtcblxuQmFzZVRoZW1lLnZhcmlhbnQuYnV0dG9uID0gQnV0dG9uVmFyaWFudChCYXNlVGhlbWUpO1xuQmFzZVRoZW1lLnZhcmlhbnQuYnV0dG9uU2l6ZSA9IEJ1dHRvblNpemUoKTtcbkJhc2VUaGVtZS52YXJpYW50LmlucHV0VmFyaWFudCA9IElucHV0VmFyaWFudChCYXNlVGhlbWUpO1xuQmFzZVRoZW1lLnZhcmlhbnQuaW5wdXRTaXplID0gSW5wdXRTaXplKEJhc2VUaGVtZSk7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUaGVtZVByb3ZpZGVyOiBhbnkgPSAoe2NoaWxkcmVuLCB0aGVtZSA9IEJhc2VUaGVtZX06IGFueSkgPT4gKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PntjaGlsZHJlbn08L1RoZW1lUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRUaGVtZVByb3ZpZGVyO1xuIiwiaW1wb3J0IHtJVmFyaWFudFNpemV9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25TaXplID0gKCk6IElWYXJpYW50U2l6ZSA9PiB7XG5cbiAgcmV0dXJuIHtcbiAgICBzbWFsbDoge1xuICAgICAgcGFkZGluZzogJzRweCA4cHgnLFxuICAgICAgbWluV2lkdGg6ICc2NHB4JyxcbiAgICAgIGZvbnRTaXplOiAnMC44MTI1cmVtJ1xuICAgIH0sXG4gICAgbWVkaXVtOiB7XG4gICAgICBwYWRkaW5nOiAnNXB4IDE2cHgnLFxuICAgICAgbWluV2lkdGg6ICc2NHB4JyxcbiAgICAgIGZvbnRTaXplOiAnMC44NzVyZW0nXG4gICAgfSxcbiAgICBsYXJnZToge1xuICAgICAgcGFkZGluZzogJzhweCAyNHB4JyxcbiAgICAgIG1pbldpZHRoOiAnNjRweCcsXG4gICAgICBmb250U2l6ZTogJzAuOTM3NXJlbSdcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uU2l6ZTtcbiIsImltcG9ydCB7SVZhcmlhbnRMaXN0fSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHtJVGhlbWV9IGZyb20gXCIuLi8uLi9TdHlsZVRoZW1lUHJvdmlkZXJcIjtcblxuY29uc3QgYmFzZVN0eWxlID0ge1xuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJhY2tncm91bmQ6ICdub25lJyxcbiAgZm9udDogJ2luaGVyaXQnLFxufTtcblxuXG5leHBvcnQgY29uc3QgQnV0dG9uVmFyaWFudCA9ICh0aGVtZTogSVRoZW1lKTogSVZhcmlhbnRMaXN0ID0+IHtcbiAgY29uc29sZS5sb2codGhlbWUuYm9yZGVyKTtcblxuICByZXR1cm4ge1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIC4uLmJhc2VTdHlsZSxcbiAgICAgICc6aG92ZXInOiB7fSxcbiAgICAgICc6YWN0aXZlJzoge30sXG4gICAgICAnOmRpc2FibGVkJzoge30sXG4gICAgICAnOmZvY3VzJzoge30sXG4gICAgICAnOnZpc2l0ZWQnOiB7fSxcbiAgICAgICcuYWN0aXZlJzoge30sXG4gICAgfSxcbiAgICBwcmltYXJ5OiB7XG4gICAgICAuLi5iYXNlU3R5bGUsXG4gICAgICAnOmhvdmVyJzoge30sXG4gICAgICAnOmFjdGl2ZSc6IHt9LFxuICAgICAgJzpkaXNhYmxlZCc6IHt9LFxuICAgICAgJzpmb2N1cyc6IHt9LFxuICAgICAgJzp2aXNpdGVkJzoge30sXG4gICAgICAnLmFjdGl2ZSc6IHt9LFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICAuLi5iYXNlU3R5bGUsXG4gICAgICAnOmhvdmVyJzoge30sXG4gICAgICAnOmFjdGl2ZSc6IHt9LFxuICAgICAgJzpkaXNhYmxlZCc6IHt9LFxuICAgICAgJzpmb2N1cyc6IHt9LFxuICAgICAgJzp2aXNpdGVkJzoge30sXG4gICAgICAnLmFjdGl2ZSc6IHt9LFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIC4uLmJhc2VTdHlsZSxcbiAgICAgICc6aG92ZXInOiB7fSxcbiAgICAgICc6YWN0aXZlJzoge30sXG4gICAgICAnOmRpc2FibGVkJzoge30sXG4gICAgICAnOmZvY3VzJzoge30sXG4gICAgICAnOnZpc2l0ZWQnOiB7fSxcbiAgICAgICcuYWN0aXZlJzoge30sXG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uVmFyaWFudDtcbiIsImltcG9ydCB7SVZhcmlhbnRTaXplLCBJVGhlbWV9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XG5cbmNvbnN0IGJhc2VTdHlsZSA9IHtcbiAgcGFkZGluZzogMCxcbn07XG5cbmV4cG9ydCBjb25zdCBJbnB1dFNpemUgPSAodGhlbWU/OiBJVGhlbWUgPSB7fSk6IElWYXJpYW50U2l6ZSA9PiB7XG5cbiAgcmV0dXJuIHtcbiAgICB4U21hbGw6IHtcbiAgICAgIC4uLmJhc2VTdHlsZSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5zcGFjZVs1XSxcbiAgICB9LFxuICAgIHNtYWxsOiB7XG4gICAgICAuLi5iYXNlU3R5bGUsXG4gICAgICBmb250U2l6ZTogdGhlbWUuc3BhY2VbNV0sXG4gICAgfSxcbiAgICBtZWRpdW06IHtcbiAgICAgIC4uLmJhc2VTdHlsZSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5zcGFjZVs2XSxcbiAgICB9LFxuICAgIGxhcmdlOiB7XG4gICAgICAuLi5iYXNlU3R5bGUsXG4gICAgICBmb250U2l6ZTogdGhlbWUuc3BhY2VbNl0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0U2l6ZTtcbiIsImltcG9ydCB7SVRoZW1lfSBmcm9tIFwiLi4vLi4vU3R5bGVUaGVtZVByb3ZpZGVyXCI7XG5pbXBvcnQge0lWYXJpYW50TGlzdH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcblxuXG5jb25zdCBiYXNlU3R5bGUgPSB7XG4gIGZvbnQ6ICdpbmhlcml0JyxcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgY3Vyc29yOiAndGV4dCcsXG5cbn07XG5cbmV4cG9ydCBjb25zdCBJbnB1dFZhcmlhbnQgPSAodGhlbWU6IElUaGVtZSk6IElWYXJpYW50TGlzdCA9PiB7XG4gIGNvbnNvbGUubG9nKHRoZW1lKTtcbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICAuLi5iYXNlU3R5bGUsXG4gICAgICBib3JkZXJCb3R0b21TdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMXB4JyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMuZGFyayxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcblxuICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcycHgnLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmJsdWUsXG4gICAgICB9LFxuICAgICAgJzphY3RpdmUnOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMnB4JyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlLFxuICAgICAgfSxcbiAgICAgICcuYWN0aXZlJzoge1xuICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzJweCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZSxcbiAgICAgIH0sXG4gICAgICAnOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMnB4JyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlLFxuICAgICAgfSxcblxuICAgICAgJzpkaXNhYmxlZCc6IHtcbiAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5LFxuICAgICAgfSxcbiAgICAgICc6dmlzaXRlZCc6IHt9LFxuICAgICAgJzo6cGxhY2Vob2xkZXInOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwcmltYXJ5OiB7XG4gICAgICAuLi5iYXNlU3R5bGUsXG4gICAgICAnOmhvdmVyJzoge30sXG4gICAgICAnOmFjdGl2ZSc6IHt9LFxuICAgICAgJzpkaXNhYmxlZCc6IHt9LFxuICAgICAgJzpmb2N1cyc6IHt9LFxuICAgICAgJzp2aXNpdGVkJzoge30sXG4gICAgICAnLmFjdGl2ZSc6IHt9LFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICAuLi5iYXNlU3R5bGUsXG4gICAgICAnOmhvdmVyJzoge30sXG4gICAgICAnOmFjdGl2ZSc6IHt9LFxuICAgICAgJzpkaXNhYmxlZCc6IHt9LFxuICAgICAgJzpmb2N1cyc6IHt9LFxuICAgICAgJzp2aXNpdGVkJzoge30sXG4gICAgICAnLmFjdGl2ZSc6IHt9LFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIC4uLmJhc2VTdHlsZSxcbiAgICAgICc6aG92ZXInOiB7fSxcbiAgICAgICc6YWN0aXZlJzoge30sXG4gICAgICAnOmRpc2FibGVkJzoge30sXG4gICAgICAnOmZvY3VzJzoge30sXG4gICAgICAnOnZpc2l0ZWQnOiB7fSxcbiAgICAgICcuYWN0aXZlJzoge30sXG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXN5c3RlbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9