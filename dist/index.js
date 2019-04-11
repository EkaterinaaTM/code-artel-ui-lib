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
exports.ThemeCreate = StyleThemeProvider_1.ThemeCreate;
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
    white: "#ffffff",
    blue: "#2196f3",
    red: "#e10050",
    orange: "#f44336",
    black: "#000",
    dark: "#1f1f1f",
    gray: "#6d6d6d",
    lightGray: "#939393"
};
exports.Space = [
    0,
    2,
    4,
    8,
    16,
    24,
    32,
    40,
    48,
    56,
    64,
    72,
    80,
    88,
    96
];
exports.BoxShadow = [
    "none",
    "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
    "rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px",
    "rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px"
];
exports.Border = [
    "none",
    "1px solid rgba(0, 0, 0, 0.42)",
    "2px solid #1976d2"
];
var defaultThemeProps = {
    space: exports.Space,
    boxShadow: exports.BoxShadow,
    colors: exports.Colors,
    border: exports.Border
};
exports.ThemeCreate = function (props) {
    if (props === void 0) { props = defaultThemeProps; }
    console.log("props: ", props);
    var space = props.space, boxShadow = props.boxShadow, colors = props.colors, border = props.border;
    console.log("props: ", space, boxShadow, colors, border);
    var Theme = {
        space: space || exports.Space,
        fontSizes: space || exports.Space,
        lineHeight: space || exports.Space,
        borderRadius: space || exports.Space,
        boxShadow: boxShadow || exports.BoxShadow,
        border: border,
        borderColor: colors,
        colors: colors,
        variant: {
            buttonVariant: {},
            buttonSize: {},
            inputVariant: {},
            inputSize: {}
        }
    };
    Theme.variant.buttonVariant = ButtonVariant_1.ButtonVariant(Theme);
    Theme.variant.buttonSize = ButtonSize_1.ButtonSize();
    Theme.variant.inputVariant = InputVariant_1.InputVariant(Theme);
    Theme.variant.inputSize = InputSize_1.InputSize(Theme);
    return Theme;
};
exports.StyledThemeProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
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
// import { ITheme } from "../../interfaces";
var baseStyle = {
    display: "inline-block",
    border: "none",
    background: "none",
    font: "inherit"
};
exports.ButtonVariant = function (theme) {
    console.log(theme.border);
    return {
        default: __assign({}, baseStyle, { ":hover": {}, ":active": {}, ":disabled": {}, ":focus": {}, ":visited": {}, ".active": {} }),
        primary: __assign({}, baseStyle, { ":hover": {}, ":active": {}, ":disabled": {}, ":focus": {}, ":visited": {}, ".active": {} }),
        secondary: __assign({}, baseStyle, { ":hover": {}, ":active": {}, ":disabled": {}, ":focus": {}, ":visited": {}, ".active": {} }),
        error: __assign({}, baseStyle, { ":hover": {}, ":active": {}, ":disabled": {}, ":focus": {}, ":visited": {}, ".active": {} })
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
    padding: 0
};
exports.InputSize = function (theme) {
    return {
        xSmall: __assign({}, baseStyle, { fontSize: "12px", "::placeholder": {
                fontSize: "12px"
            } }),
        small: __assign({}, baseStyle, { fontSize: "12px", "::placeholder": {
                fontSize: "12px"
            } }),
        medium: __assign({}, baseStyle, { fontSize: theme.space[5], "::placeholder": {
                fontSize: theme.space[5]
            } }),
        large: __assign({}, baseStyle, { fontSize: theme.space[6], "::placeholder": {
                fontSize: theme.space[5]
            } })
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
    font: "inherit",
    display: "block",
    boxSizing: "content-box",
    background: "none",
    border: "none",
    "-webkit-tap-highlight-color": "transparent",
    cursor: "text"
};
exports.InputVariant = function (theme) {
    return {
        default: __assign({}, baseStyle, { color: theme.colors.dark, borderBottomStyle: "solid", borderBottomWidth: "2px", borderColor: theme.colors.dark, outline: "none", ":hover": {
                borderColor: theme.colors.blue
            }, ":active": {
                borderColor: theme.colors.blue
            }, ".active": {
                borderColor: theme.colors.blue
            }, ":focus": {
                outline: "none",
                borderColor: theme.colors.blue
            }, ":disabled": {
                cursor: "default",
                outline: "none",
                borderColor: theme.colors.gray
            }, ":visited": {}, "::placeholder": {
                color: theme.colors.gray
            } }),
        primary: __assign({}, baseStyle, { ":hover": {}, ":active": {}, ":disabled": {}, ":focus": {}, ":visited": {}, ".active": {} }),
        secondary: __assign({}, baseStyle, { ":hover": {}, ":active": {}, ":disabled": {}, ":focus": {}, ":visited": {}, ".active": {} }),
        error: __assign({}, baseStyle, { color: theme.colors.red, borderBottomStyle: "solid", borderBottomWidth: "2px", borderColor: theme.colors.red, outline: "none", ":hover": {
                borderColor: theme.colors.red
            }, ":active": {
                borderColor: theme.colors.red
            }, ".active": {
                borderColor: theme.colors.red
            }, ":focus": {
                outline: "none",
                borderColor: theme.colors.red
            }, ":disabled": {
                cursor: "default",
                outline: "none",
                borderColor: theme.colors.gray
            }, ":visited": {}, "::placeholder": {
                color: theme.colors.gray
            } })
    };
};


/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MICHA\Библиотека\code-artel-ui-lib\src\index.tsx */"./src/index.tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL0JveC9Cb3gudHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uQmFzZS9CdXR0b25CYXNlLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9DaGVja2JveC9DaGVja2JveC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9DaGVja2JveEJhc2UvQ2hlY2tib3hCYXNlLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL0NoZWNrYm94R3JvdXAvQ2hlY2tib3hHcm91cC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL0ZsZXgvRmxleC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9JbWFnZS9JbWFnZS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9MaW5rL0xpbmsudHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL2NvbXBvbmVudHMvUmFkaW9CdXR0b24vUmFkaW9CdXR0b24udHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL2NvbXBvbmVudHMvUmFkaW9CdXR0b25CYXNlL1JhZGlvQnV0dG9uQmFzZS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9SYWRpb0J1dHRvbkdyb3VwL1JhZGlvQnV0dG9uR3JvdXAudHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0QmFzZS9TZWxlY3RCYXNlLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL1NtYWxsUHJlbG9hZGVyL1NtYWxsUHJlbG9hZGVyLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL1RhYkJhci9UYWJDb250ZW50LnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL1RhYkJhci9UYWJDb250cm9sbGVyLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL1RhYkJhci9UYWJzLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL1RleHQvVGV4dC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9UZXh0QXJlYS9UZXh0QXJlYS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwQmFzZS9Ub29sdGlwQmFzZS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwQmFzZS9Ub29sdGlwQmFzZVN0eWxlZC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL3N0eWxlcy9HbG9iYWxTdHlsZS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvc3R5bGVzL1N0eWxlVGhlbWVQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvc3R5bGVzL3ZhcmlhbnRzL2J1dHRvbnMvQnV0dG9uU2l6ZS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvc3R5bGVzL3ZhcmlhbnRzL2J1dHRvbnMvQnV0dG9uVmFyaWFudC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvc3R5bGVzL3ZhcmlhbnRzL2lucHV0cy9JbnB1dFNpemUudHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL3N0eWxlcy92YXJpYW50cy9pbnB1dHMvSW5wdXRWYXJpYW50LnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvZXh0ZXJuYWwgXCJyZWFjdC1zZWxlY3RcIiIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvZXh0ZXJuYWwgXCJzdHlsZWQtc3lzdGVtXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LENBQUMsTUFBTSxDQUFDLEdBQUc7YUFDOUIsRUFDRCxTQUFTLEVBQUU7Z0JBQ1QsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRzthQUM5QixFQUNELFNBQVMsRUFBRTtnQkFDVCxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHO2FBQzlCLEVBQ0QsUUFBUSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxNQUFNO2dCQUNmLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUc7YUFDOUIsRUFDRCxXQUFXLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE9BQU8sRUFBRSxNQUFNO2dCQUNmLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUk7YUFDL0IsRUFDRCxVQUFVLEVBQUUsRUFBRSxFQUNkLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJO2FBQ3pCLEdBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0Ysa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsMEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7XHJcbiAgc3BhY2UsXHJcbiAgd2lkdGgsXHJcbiAgY29sb3IsXHJcbiAgZm9udFNpemUsXHJcbiAgYm9yZGVyLFxyXG4gIGJvcmRlclJhZGl1cyxcclxuICBib3JkZXJDb2xvcixcclxuICBib3JkZXJzLFxyXG4gIG92ZXJmbG93LFxyXG4gIGRpc3BsYXksXHJcbiAgbWF4V2lkdGgsXHJcbiAgbWluV2lkdGgsXHJcbiAgaGVpZ2h0LFxyXG4gIHRleHRBbGlnbixcclxuICBsaW5lSGVpZ2h0LFxyXG4gIG1pbkhlaWdodCxcclxuICBvcGFjaXR5LFxyXG4gIGxldHRlclNwYWNpbmcsXHJcbiAgU3BhY2VQcm9wcyxcclxuICBEaXNwbGF5UHJvcHMsXHJcbiAgTWF4V2lkdGhQcm9wcyxcclxuICBNaW5XaWR0aFByb3BzLFxyXG4gIEhlaWdodFByb3BzLFxyXG4gIE1pbkhlaWdodFByb3BzLFxyXG4gIE92ZXJmbG93UHJvcHMsXHJcbiAgT3BhY2l0eVByb3BzLFxyXG4gIHpJbmRleCxcclxuICBiYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgYmFja2dyb3VuZFNpemUsXHJcbiAgYmFja2dyb3VuZFBvc2l0aW9uLFxyXG4gIGJhY2tncm91bmRSZXBlYXRcclxufSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQm94XHJcbiAgZXh0ZW5kcyBTcGFjZVByb3BzLFxyXG4gICAgRGlzcGxheVByb3BzLFxyXG5cclxuICAgIE1heFdpZHRoUHJvcHMsXHJcbiAgICBNaW5XaWR0aFByb3BzLFxyXG4gICAgSGVpZ2h0UHJvcHMsXHJcbiAgICBNaW5IZWlnaHRQcm9wcyxcclxuICAgIE92ZXJmbG93UHJvcHMsXHJcbiAgICBPcGFjaXR5UHJvcHMge1xyXG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdjxJQm94PmBcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICR7ZGlzcGxheX07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt3aWR0aH07XHJcbiAgJHtvdmVyZmxvd307XHJcbiAgJHtib3JkZXJSYWRpdXN9O1xyXG4gICR7Ym9yZGVyQ29sb3J9O1xyXG4gICR7Ym9yZGVyc307XHJcbiAgJHtib3JkZXJ9O1xyXG4gICR7Zm9udFNpemV9O1xyXG4gICR7Y29sb3J9O1xyXG4gICR7bWF4V2lkdGh9O1xyXG4gICR7bWluV2lkdGh9O1xyXG4gICR7aGVpZ2h0fTtcclxuICAke21pbkhlaWdodH07XHJcbiAgJHtvcGFjaXR5fTtcclxuICAke3RleHRBbGlnbn07XHJcbiAgJHtsaW5lSGVpZ2h0fTtcclxuICAke2xldHRlclNwYWNpbmd9O1xyXG4gICR7ekluZGV4fTtcclxuICAke2JhY2tncm91bmRJbWFnZX07XHJcbiAgJHtiYWNrZ3JvdW5kU2l6ZX07XHJcbiAgJHtiYWNrZ3JvdW5kUG9zaXRpb259O1xyXG4gICR7YmFja2dyb3VuZFJlcGVhdH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdmFyaWFudCB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XHJcblxyXG4vKipWaWV3ICovXHJcbmltcG9ydCBCb3ggZnJvbSBcIi4uL0JveC9Cb3hcIjtcclxuXHJcbmNvbnN0IGJ1dHRvbnNWYXJpYW50ID0gdmFyaWFudCh7XHJcbiAga2V5OiBcInZhcmlhbnQuYnV0dG9uVmFyaWFudFwiLFxyXG4gIHByb3A6IFwidmFyaWFudFwiXHJcbn0pO1xyXG5cclxuY29uc3QgYnV0dG9uc1NpemUgPSB2YXJpYW50KHtcclxuICBrZXk6IFwidmFyaWFudC5idXR0b25TaXplXCIsXHJcbiAgcHJvcDogXCJzaXplXCJcclxufSk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElCdXR0b25CYXNlIHtcclxuICB2YXJpYW50OiBzdHJpbmc7XHJcbiAgc2l6ZTogc3RyaW5nO1xyXG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG4vKipcclxuICog0JrQvtC80L/QvtC90LXQvdGC0LAg0L7QsdGL0YfQvdCw0Y8g0LrQvdC+0L/QutCwXHJcbiAqIEBleGFtcGxlIC4vQnV0dG9uQmFzZS5leGFtcGxlLm1kXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQnV0dG9uQmFzZSA9IHN0eWxlZChCb3gpPElCdXR0b25CYXNlPmBcclxuICAke2J1dHRvbnNWYXJpYW50fTtcclxuICAke2J1dHRvbnNTaXplfTtcclxuYDtcclxuXHJcbkJ1dHRvbkJhc2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxyXG4gIHNpemU6IFwic21hbGxcIixcclxuICBhczogXCJidXR0b25cIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQmFzZTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbi8qKiBWaWV3ICovXHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi9Cb3gvQm94XCI7XHJcblxyXG4vKipcclxuICog0JrQvtC80L/QvtC90LXQvdGCINC60LDRgNGC0L7Rh9C60LhcclxuICogQGV4YW1wbGUgLi9DYXJkLmV4YW1wbGUubWRcclxuICovXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gc3R5bGVkKEJveClgXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gIGJvcmRlcjogXCIxcHggc29saWQgI0FFQUVBRVwiLFxyXG4gIG1pbkhlaWdodDogXCIxNTBweFwiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3hCYXNlIH0gZnJvbSBcIi4uL0NoZWNrYm94QmFzZS9DaGVja2JveEJhc2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrYm94IHtcclxuICBsYWJlbD86IHN0cmluZztcclxuICBpZD86IHN0cmluZztcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBjaGVja2VkPzogYm9vbGVhbjtcclxuICBkZWZhdWx0Q2hlY2tlZD86IGJvb2xlYW47XHJcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja2JveCA9IChwcm9wczogSUNoZWNrYm94KSA9PiB7XHJcbiAgY29uc3QgeyBpZCwgbmFtZSwgZGlzYWJsZWQsIGNoZWNrZWQsIGxhYmVsLCBvbkNoYW5nZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgLy8gY29uc29sZS5sb2coXCJDaGVja2JveFwiLCBwcm9wcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bGFiZWwgJiYgPHA+e2xhYmVsfTwvcD59XHJcbiAgICAgIDxDaGVja2JveEJhc2VcclxuICAgICAgICBpZD17YGNoZWNrYm94LSR7aWR9YH1cclxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgIHR5cGU9e1wiY2hlY2tib3hcIn1cclxuICAgICAgICBhcz17XCJpbnB1dFwifVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG4vKiogVmlldyAqL1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vQm94L0JveFwiO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQoQm94KWBgO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tib3hzIHtcclxuICB2YWx1ZT86IGFueTtcclxuICBpZD86IHN0cmluZztcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBjaGVja2VkPzogYm9vbGVhbjtcclxuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNrYm94QmFzZSA9IChwcm9wczogSUNoZWNrYm94cykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkLFxyXG4gICAgbmFtZSxcclxuICAgIGRpc2FibGVkID0gZmFsc2UsXHJcbiAgICBjaGVja2VkLFxyXG4gICAgZGVmYXVsdENoZWNrZWQgPSBmYWxzZSxcclxuICAgIHZhbHVlLFxyXG4gICAgb25DaGFuZ2UsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhcIkNoZWNrYm94QmFzZVwiLCBwcm9wcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SW5wdXRcclxuICAgICAgaWQ9e2BjaGVja2JveC0ke2lkfWB9XHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgdHlwZT17XCJjaGVja2JveFwifVxyXG4gICAgICBhcz17XCJpbnB1dFwifVxyXG4gICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIH19XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hCYXNlO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8qKiBWaWV3ICAqL1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uL0NoZWNrYm94L0NoZWNrYm94XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja2JveEdyb3VwIHtcclxuICBsYWJlbFByb3A6IHN0cmluZztcclxuICB2YWx1ZVByb3A6IHN0cmluZztcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgZGVmYXVsdENoZWNrZWQ/OiBib29sZWFuO1xyXG4gIG9wdGlvbnM6IElPcHRpb25zW107XHJcbiAgaW5wdXQ6IGFueTtcclxuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9ucyB7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQ2hlY2tib3hHcm91cD4ge1xyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IHtcclxuICAgIGxhYmVsUHJvcDogXCJmb29cIjtcclxuICB9O1xyXG5cclxuICBvbkNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICBsZXQgcHJvcHNWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XHJcbiAgICBjb25zdCB2YWx1ZUluZGV4ID0gcHJvcHNWYWx1ZS5maW5kSW5kZXgoKGl0ZW06IGFueSkgPT4gaXRlbSA9PT0gdmFsdWUpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJSYWRpb0J1dHRvbkdyb3VwIG9uQ2hhbmdlXCIsIHZhbHVlLCB0aGlzLnByb3BzLnZhbHVlKTtcclxuXHJcbiAgICBpZiAodmFsdWVJbmRleCA+IC0xKSB7XHJcbiAgICAgIHByb3BzVmFsdWUuc3BsaWNlKHZhbHVlSW5kZXgsIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHNWYWx1ZS5wdXNoKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHByb3BzVmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNoZWNrU3RhdHVzQ2hlY2tib3ggPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBBcnJheS5pc0FycmF5KHRoaXMucHJvcHMudmFsdWUpICYmXHJcbiAgICAgIHRoaXMucHJvcHMudmFsdWUuZmluZEluZGV4KChpdGVtOiBhbnkpID0+IGl0ZW0gPT09IHZhbHVlKSA+IC0xXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBvcHRpb25zLFxyXG4gICAgICBsYWJlbFByb3AsXHJcbiAgICAgIHZhbHVlUHJvcCxcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIGNoZWNrZWQsXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB2YWx1ZSxcclxuICAgICAgb25DaGFuZ2UsXHJcbiAgICAgIC4uLnJlc3RcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJDaGVja2JveEdyb3VwIHRoaXMucHJvcHNcIiwgdGhpcy5wcm9wcyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7QXJyYXkuaXNBcnJheShvcHRpb25zKSAmJlxyXG4gICAgICAgICAgb3B0aW9ucy5tYXAoXHJcbiAgICAgICAgICAgIChpdGVtOiBhbnksIGluZGV4OiBhbnkpOiBhbnkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgbmFtZT17YENoZWNrYm94R3JvdXAtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbVt2YWx1ZVByb3BdfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD17aXRlbVtsYWJlbFByb3BdfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuY2hlY2tTdGF0dXNDaGVja2JveChpdGVtW3ZhbHVlUHJvcF0pfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAga2V5PXtgQ2hlY2tib3hHcm91cC0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94R3JvdXA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG4vKipWaWV3ICovXHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi9Cb3gvQm94XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEJveClgYDtcclxuXHJcbkNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbXQ6IDAsXHJcbiAgbWI6IDAsXHJcbiAgbWw6IFwiYXV0b1wiLFxyXG4gIG1yOiBcImF1dG9cIixcclxuICBtYXhXaWR0aDogXCI5OTJweFwiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XHJcbiIsImltcG9ydCB7XHJcbiAganVzdGlmeUNvbnRlbnQsXHJcbiAgYWxpZ25JdGVtcyxcclxuICBhbGlnbkNvbnRlbnQsXHJcbiAgZmxleCxcclxuICBmbGV4QmFzaXMsXHJcbiAgZmxleERpcmVjdGlvbixcclxuICBmbGV4V3JhcCxcclxuICBvcmRlclxyXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbi8qKlZpZXcgKi9cclxuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gvQm94JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsZXgge1xyXG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmxleCA9IHN0eWxlZChCb3gpPElGbGV4PmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICR7anVzdGlmeUNvbnRlbnR9O1xyXG4gICR7YWxpZ25JdGVtc307XHJcbiAgJHthbGlnbkNvbnRlbnR9O1xyXG4gICR7ZmxleH07XHJcbiAgJHtmbGV4QmFzaXN9O1xyXG4gICR7ZmxleERpcmVjdGlvbn07XHJcbiAgJHtmbGV4V3JhcH07XHJcbiAgJHtvcmRlcn07XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbGV4O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB3aWR0aCwgaGVpZ2h0LCBib3JkZXJSYWRpdXMsIGRpc3BsYXkgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlOiBhbnkgPSBzdHlsZWQuaW1nYFxyXG4gICR7d2lkdGh9O1xyXG4gICR7aGVpZ2h0fTtcclxuICAke2JvcmRlclJhZGl1c307XHJcbiAgJHtkaXNwbGF5fTtcclxuYDtcclxuXHJcbkltYWdlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkaXNwbGF5OiBcImJsb2NrXCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB2YXJpYW50IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcclxuXHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi9Cb3gvQm94XCI7XHJcblxyXG5jb25zdCBpbnB1dFZhcmlhbnQgPSB2YXJpYW50KHtcclxuICBrZXk6IFwidmFyaWFudC5pbnB1dFZhcmlhbnRcIixcclxuICBwcm9wOiBcInZhcmlhbnRcIlxyXG59KTtcclxuY29uc3QgaW5wdXRTaXplID0gdmFyaWFudCh7XHJcbiAga2V5OiBcInZhcmlhbnQuaW5wdXRTaXplXCIsXHJcbiAgcHJvcDogXCJzaXplXCJcclxufSk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElJbnB1dCB7XHJcbiAgdmFyaWFudD86IHN0cmluZztcclxuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkKEJveCk8SUlucHV0PmBcclxuICAke2lucHV0VmFyaWFudH07XHJcbiAgJHtpbnB1dFNpemV9O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5gO1xyXG5cclxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxyXG4gIHNpemU6IFwibWVkaXVtXCIsXHJcbiAgYXM6IFwiaW5wdXRcIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgc3BhY2UsXHJcbiAgd2lkdGgsXHJcbiAgZGlzcGxheSxcclxuICBjb2xvcixcclxuICBmb250U2l6ZSxcclxuICBmb250RmFtaWx5LFxyXG4gIGZvbnRXZWlnaHQsXHJcbiAgbGluZUhlaWdodFxyXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTGluazogYW55ID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAke3NwYWNlfTtcclxuICAke3dpZHRofTtcclxuICAke2Rpc3BsYXl9O1xyXG4gICR7Y29sb3J9O1xyXG4gICR7Zm9udFNpemV9O1xyXG4gICR7Zm9udEZhbWlseX07XHJcbiAgJHtmb250V2VpZ2h0fTtcclxuICAke2xpbmVIZWlnaHR9O1xyXG4gIC8qICY6aG92ZXIge1xyXG4gICAgJHtwcm9wcyA9PiBjb2xvcih7IC4uLnByb3BzLCBjb2xvcjogXCJjb2xvcjNcIiB9KX07XHJcbiAgfSAqL1xyXG5gO1xyXG5cclxuTGluay5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbms7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmFkaW9CdXR0b25CYXNlIGZyb20gXCIuLi9SYWRpb0J1dHRvbkJhc2UvUmFkaW9CdXR0b25CYXNlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSYWRpb0J1dHRvbiB7XHJcbiAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG9uQ2hhbmdlOiBhbnk7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbiAgLy8gZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIHZhbHVlOiBhbnk7XHJcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSYWRpb0J1dHRvbiA9IChwcm9wczogSVJhZGlvQnV0dG9uKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbGFiZWwsXHJcbiAgICBvbkNoYW5nZSxcclxuICAgIGNoZWNrZWQsXHJcbiAgICBuYW1lLFxyXG4gICAgaWQsXHJcbiAgICAvLyBkaXNhYmxlZCxcclxuICAgIHZhbHVlLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuICAvLyBjb25zb2xlLmxvZyhcIlJhZGlvQnV0dG9uXCIsIHByb3BzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtsYWJlbCAmJiA8cD57bGFiZWx9PC9wPn1cclxuICAgICAgPFJhZGlvQnV0dG9uQmFzZVxyXG4gICAgICAgIGlkPXtpZH1cclxuICAgICAgICAvLyBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFkaW9CdXR0b247XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuLyoqIFZpZXcgKi9cclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uL0JveC9Cb3hcIjtcclxuXHJcbmNvbnN0IElucHV0ID0gc3R5bGVkKEJveClgYDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJhZGlvQnV0dG9uQmFzZSB7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbiAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgbmFtZT86IHN0cmluZztcclxuICBpbnB1dD86IGFueTtcclxuICBvbkNoYW5nZT86IGFueTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGRlZmF1bHRDaGVja2VkPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJhZGlvQnV0dG9uQmFzZSA9IChwcm9wczogSVJhZGlvQnV0dG9uQmFzZSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkLFxyXG4gICAgbmFtZSxcclxuICAgIGNoZWNrZWQsXHJcbiAgICB2YWx1ZSxcclxuICAgIG9uQ2hhbmdlLFxyXG4gICAgLy8gZGVmYXVsdENoZWNrZWQsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiUmFkaW9CdXR0b25CYXNlXCIsIHByb3BzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dFxyXG4gICAgICBpZD17YHJhZGlvY2hlY2tib3gtJHtpZH1gfVxyXG4gICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAvLyBkZWZhdWx0Q2hlY2tlZD17ZGVmYXVsdENoZWNrZWR9XHJcbiAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIH19XHJcbiAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgdHlwZT17XCJyYWRpb1wifVxyXG4gICAgICBhcz17XCJpbnB1dFwifVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhZGlvQnV0dG9uQmFzZTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKiogVmlldyAgKi9cclxuaW1wb3J0IFJhZGlvQnV0dG9uIGZyb20gXCIuLi9SYWRpb0J1dHRvbi9SYWRpb0J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmFkaW9CdXR0b25Hcm91cCB7XHJcbiAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgbGFiZWxQcm9wOiBzdHJpbmc7XHJcbiAgdmFsdWVQcm9wOiBzdHJpbmc7XHJcbiAgaW5wdXQ6IGFueTtcclxuICBvcHRpb25zOiBJT3B0aW9uc1tdO1xyXG4gIGRlZmF1bHRDaGVja2VkPzogYW55O1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPcHRpb25zIHtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbkdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElSYWRpb0J1dHRvbkdyb3VwPiB7XHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wczoge1xyXG4gICAgbGFiZWxQcm9wOiBcImZvb1wiO1xyXG4gIH07XHJcblxyXG4gIG9uQ2hhbmdlID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgb3B0aW9ucyxcclxuICAgICAgbGFiZWxQcm9wLFxyXG4gICAgICB2YWx1ZVByb3AsXHJcbiAgICAgIGRpc2FibGVkLFxyXG4gICAgICBjaGVja2VkLFxyXG4gICAgICBpbnB1dCxcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGlkLFxyXG4gICAgICAvLyBkZWZhdWx0Q2hlY2tlZCxcclxuICAgICAgb25DaGFuZ2UsXHJcbiAgICAgIC4uLnJlc3RcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJSYWRpb0J1dHRvbkdyb3VwIHRoaXMucHJvcHNcIiwgdGhpcy5wcm9wcyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7QXJyYXkuaXNBcnJheShvcHRpb25zKSAmJlxyXG4gICAgICAgICAgb3B0aW9ucy5tYXAoXHJcbiAgICAgICAgICAgIChpdGVtOiBhbnksIGluZGV4OiBhbnkpOiBhbnkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbVt2YWx1ZVByb3BdfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD17aXRlbVtsYWJlbFByb3BdfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRDaGVja2VkPXtkZWZhdWx0Q2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17YFJhZGlvQnV0dG9uR3JvdXAtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICB7Li4uaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYWRpb0J1dHRvbkdyb3VwO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0ICBQcm9wVHlwZXMgIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG4vLyBpbXBvcnQgRGVlcEVxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTZWxlY3RCYXNlIHtcclxuICBwbGFjZWhvbGRlcj86IGFueTtcclxuICBvcHRpb25zPzogYW55O1xyXG4gIGlzTG9hZGluZz86IGFueTtcclxuICBkaXNhYmxlZD86IGFueTtcclxuICBpbnB1dD86IGFueTtcclxuICB2YWx1ZT86IGFueTtcclxuICBuYW1lPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTZWxlY3RCYXNlU3RhdGUge1xyXG4gIHNlbGVjdGVkT3B0aW9uPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0QmFzZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJU2VsZWN0QmFzZSwgSVNlbGVjdEJhc2VTdGF0ZT4ge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgc2VsZWN0ZWRPcHRpb246IG51bGxcclxuICB9O1xyXG5cclxuICAvLyBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gIC8vICAgLyoqIGlucHV0ICovXHJcbiAgLy8gICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIC8vICAgb3B0aW9uczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5LCBQcm9wVHlwZXMuYm9vbF0pLFxyXG4gIC8vICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLy8gICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZ1xyXG4gIC8vIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBvcHRpb25zOiBbXSxcclxuICAgIHBsYWNlaG9sZGVyOiBcIlwiXHJcbiAgfTtcclxuXHJcbiAgLy8gaGFuZGxlQ2hhbmdlID0gc2VsZWN0ZWRPcHRpb24gPT4ge1xyXG4gIC8vICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcclxuICAvLyAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgLy8gICAgICgpID0+ICh7IHNlbGVjdGVkT3B0aW9uIH0pLFxyXG4gIC8vICAgICAoKSA9PiB7XHJcbiAgLy8gICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb25cclxuICAvLyAgICAgICAgID8gdGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvblt2YWx1ZV1cclxuICAvLyAgICAgICAgIDogbnVsbDtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKGBPcHRpb24gc2VsZWN0ZWQ6YCwgc2VsZWN0ZWRPcHRpb25bXCJ2YWx1ZVwiXSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzZWxlY3RlZE9wdGlvbiB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zdCB7IHBsYWNlaG9sZGVyLCBvcHRpb25zLCBpc0xvYWRpbmcsIGRpc2FibGVkLCBpbnB1dCB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTZWxlY3RcclxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XHJcbiAgICAgICAgbmFtZT17aW5wdXQubmFtZX1cclxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICBibHVySW5wdXRPblNlbGVjdD17dHJ1ZX1cclxuICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cclxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgLy8gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdEJhc2U7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vQm94L0JveFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByZWxvYWRlcldyYXBwZXIgPSBzdHlsZWQoQm94KWBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjIyNXMgYWxsO1xyXG4gIC1vLXRyYW5zaXRpb246IDAuMjI1cyBhbGw7XHJcbiAgdHJhbnNpdGlvbjogMC4yMjVzIGFsbDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFNwZWVkaW5nV2hlZWw6IGFueSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA2NDljO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBhbmltYXRpb246IGNzc2xvYWQtc3BpbiA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgLW8tYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNTAwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1tcy1hbmltYXRpb246IGNzc2xvYWQtc3BpbiA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGNzc2xvYWQtc3BpbiA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgLW1vei1hbmltYXRpb246IGNzc2xvYWQtc3BpbiA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcblxyXG4gIEBrZXlmcmFtZXMgY3NzbG9hZC1zcGluIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQC1vLWtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBALW1zLWtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgY3NzbG9hZC1zcGluIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQC1tb3ota2V5ZnJhbWVzIGNzc2xvYWQtc3BpbiB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU21hbGxQcmVsb2FkZXIgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxTcGVlZGluZ1doZWVsIC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbFByZWxvYWRlcjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKipcclxuICogVGhlIGNvbnRlbnQgb2YgdGhlIFRhYkNvbnRlbnRcclxuICogQGV4YW1wbGUgLi9UYWJDb250ZW50LmV4YW1wbGUubWRcclxuICovXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUYWJDb250ZW50IHtcclxuICB0b2dnbGVUYWI/OiBhbnk7XHJcbiAgYWN0aXZlVGFiPzogYW55O1xyXG4gIGNoaWxkcmVuPzogYW55O1xyXG4gIENsaWNrQ29udGVudENsb3NlVGFiPzogYW55O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBUYWJDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElUYWJDb250ZW50PiB7XHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqIEBtZW1iZXJvZiBUYWJzXHJcbiAgICovXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgYWN0aXZlVGFiLCB0b2dnbGVUYWIsIENsaWNrQ29udGVudENsb3NlVGFiIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKCFjaGlsZHJlbikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChhY3RpdmVUYWIgPj0gMCAmJiBhY3RpdmVUYWIgIT09IG51bGwpIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChDbGlja0NvbnRlbnRDbG9zZVRhYikge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlVGFiKGFjdGl2ZVRhYik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW5bYWN0aXZlVGFiXX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChDbGlja0NvbnRlbnRDbG9zZVRhYikge1xyXG4gICAgICAgICAgICAgIHRvZ2dsZVRhYihhY3RpdmVUYWIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiQ29udGVudDtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBCYWNrZHJvcDogYW55ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgJHsocHJvcHM6IGFueSkgPT5cclxuICAgIHByb3BzLmJhY2tkcm9wICYmIHByb3BzLmlzQWN0aXZlICE9PSBudWxsXHJcbiAgICAgID8gXCJkaXNwbGF5OmJsb2NrO1wiXHJcbiAgICAgIDogXCJkaXNwbGF5Om5vbmU7XCJ9IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5gO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGFiQ29udHJvbGxlciB7XHJcbiAgZGVmYXVsdEFjdGl2ZVRhYj86IGFueTtcclxuICBhY3RpdmVUYWI/OiBhbnk7XHJcbiAgaGlkZVdoZW5SZUNsaWNraW5nPzogYW55O1xyXG4gIGJhY2tkcm9wPzogYW55O1xyXG4gIGlzQWN0aXZlPzogYW55O1xyXG4gIENsaWNrQ29udGVudENsb3NlVGFiPzogYW55O1xyXG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIGNvbXBvbmVudCB0YWIgY29udHJvbGxlclxyXG4gKiBAZXhhbXBsZSAuL1RhYkNvbnRyb2xsZXIuZXhhbXBsZS5tZFxyXG4gKi9cclxuY2xhc3MgVGFiQ29udHJvbGxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJVGFiQ29udHJvbGxlcj4ge1xyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBkZWZhdWx0QWN0aXZlVGFiOiAwLFxyXG4gICAgaGlkZVdoZW5SZUNsaWNraW5nOiBmYWxzZSxcclxuICAgIGJhY2tkcm9wOiBmYWxzZSxcclxuICAgIENsaWNrQ29udGVudENsb3NlVGFiOiBmYWxzZVxyXG4gIH07XHJcblxyXG4gIHN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGU7XHJcblxyXG4gIGdldCBpbml0aWFsU3RhdGUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhY3RpdmVUYWI6IHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZVRhYlxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjIGNoYW5nZSB0YWIgYnkgaW5kZXhcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKiBAbWVtYmVyb2YgQ29udHJvbGxlclxyXG4gICAqL1xyXG4gIHRvZ2dsZVRhYiA9IChpbmRleDogYW55KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGU6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocHJldlN0YXRlLmFjdGl2ZVRhYiAhPT0gaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgYWN0aXZlVGFiOiBpbmRleFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaWRlV2hlblJlQ2xpY2tpbmcgJiZcclxuICAgICAgICBwcmV2U3RhdGUuYWN0aXZlVGFiID09PSBpbmRleFxyXG4gICAgICApIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAZGVzYyBuZWVkIGZvciBjb3JyZWN0IHdvcmtcclxuICAgICAgICAgKi9cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgYWN0aXZlVGFiOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICAvKipcclxuICAgICAgICogQGRlc2MgbmVlZCBmb3IgY29ycmVjdCB3b3JrXHJcbiAgICAgICAqL1xyXG4gICAgICByZXR1cm4gcHJldlN0YXRlLmFjdGl2ZVRhYjtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGJhY2tkcm9wLCBDbGlja0NvbnRlbnRDbG9zZVRhYiB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgYWN0aXZlVGFiIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGlmICghY2hpbGRyZW4pIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGlsZHJlbldpdGhQcm9wcyA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkOiBhbnkpID0+XHJcbiAgICAgIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xyXG4gICAgICAgIGFjdGl2ZVRhYixcclxuICAgICAgICB0b2dnbGVUYWI6IHRoaXMudG9nZ2xlVGFiLFxyXG4gICAgICAgIENsaWNrQ29udGVudENsb3NlVGFiXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEJhY2tkcm9wXHJcbiAgICAgICAgICBiYWNrZHJvcD17YmFja2Ryb3B9XHJcbiAgICAgICAgICBpc0FjdGl2ZT17YWN0aXZlVGFifVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVUYWIobnVsbCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7Y2hpbGRyZW5XaXRoUHJvcHN9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYkNvbnRyb2xsZXI7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgVGFic1N0eWxlZCA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGFicyB7XHJcbiAgdG9nZ2xlVGFiPzogYW55O1xyXG4gIGFjdGl2ZVRhYj86IGFueTtcclxuICBjaGlsZHJlbj86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRhYnM+IHtcclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zXHJcbiAgICogQG1lbWJlcm9mIFRhYnNcclxuICAgKi9cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBhY3RpdmVUYWIsIHRvZ2dsZVRhYiB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmICghY2hpbGRyZW4pIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGlsZHJlbldpdGhQcm9wcyA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpbmRleCkgPT5cclxuICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICAgICAgb25DbGljazogZXZlbnQgPT4ge1xyXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICB0b2dnbGVUYWIoaW5kZXgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWN0aXZlOiBhY3RpdmVUYWIgIT09IGluZGV4XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiA8VGFic1N0eWxlZD57Y2hpbGRyZW5XaXRoUHJvcHN9PC9UYWJzU3R5bGVkPjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYnM7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi9Cb3gvQm94XCI7XHJcblxyXG4vLyAvKiogU3R5bGUgcHJvcGVydHkgKi9cclxuLy8gaW1wb3J0IHsgQmFja2dyb3VuZENvbG9yUHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL3N0eWxlUHJvcGVydHkvQmFja2dyb3VuZENvbG9yUHJvcGVydHlcIjtcclxuLy8gaW1wb3J0IHsgRmlsbFN2Z1Byb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9zdHlsZVByb3BlcnR5L0ZpbGxTdmdQcm9wZXJ0eVwiO1xyXG4vLyBpbXBvcnQgeyBGb250RmFtaWx5UHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0ZvbnRGYW1pbHlQcm9wZXJ0eVwiO1xyXG4vLyBpbXBvcnQgeyBMaW5lSGVpZ2h0UHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL3N0eWxlUHJvcGVydHkvTGluZUhlaWdodFByb3BlcnR5XCI7XHJcblxyXG4vKipcclxuICog0JrQvtC80L/QvtC90LXQvdGCINGC0LXQutGB0YLQsFxyXG4gKiBAZXhhbXBsZSAuL1RleHQuZXhhbXBsZS5tZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQoQm94KWBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5UZXh0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBjb2xvcjogXCIjMzMzMzMzXCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB2YXJpYW50IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XHJcblxyXG4vKiogVmlldyAqL1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9Cb3gvQm94JztcclxuXHJcbmNvbnN0IGlucHV0VmFyaWFudCA9IHZhcmlhbnQoe1xyXG4gIGtleTogJ3ZhcmlhbnQuaW5wdXRWYXJpYW50JyxcclxuICBwcm9wOiAndmFyaWFudCdcclxufSk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUZXh0QXJlYSB7XHJcbiAgdmFyaWFudD86IHN0cmluZztcclxuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRBcmVhID0gc3R5bGVkKEJveCk8SVRleHRBcmVhPmBcclxuICAke2lucHV0VmFyaWFudH07XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmA7XHJcblxyXG5UZXh0QXJlYS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdmFyaWFudDogJ2RlZmF1bHQnLFxyXG4gIGFzOiAndGV4dGFyZWEnXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgV3JhcHBlcixcclxuICBPdXRzaWRlVHJpYW5nbGUsXHJcbiAgSW5zaWRlVHJpYW5nbGUsXHJcbiAgV2FybmluZ1xyXG59IGZyb20gXCIuL1Rvb2x0aXBCYXNlU3R5bGVkXCI7XHJcblxyXG5jb25zdCBSZWxhdGl2ZSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVG9vbHRpcEJhc2Uge1xyXG4gIGlzQWN0aXZlPzogYW55O1xyXG4gIHBvc2l0aW9uPzogYW55O1xyXG4gIHdhcm5pbmc/OiBhbnk7XHJcbiAgQ2xpY2tDb250ZW50Q2xvc2VUYWI/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQmtC+0LzQv9C+0L3QtdC90YIg0YLRg9C70YLQuNC/0LAgKFRvb2x0aXApXHJcbiAqIEBleGFtcGxlIC4vVG9vbHRpcEJhc2UuZXhhbXBsZS5tZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBCYXNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElUb29sdGlwQmFzZT4ge1xyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB3YXJuaW5nOiBcItCY0L3RhNC+0YDQvNCw0YbQuNGPINC90LUg0LTQvtGB0YLRg9C/0L3QsFwiLFxyXG4gICAgcG9zaXRpb246IFwiYm90dG9tXCIsXHJcbiAgICBpc0FjdGl2ZTogZmFsc2VcclxuICB9O1xyXG5cclxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzOiBhbnkpIHtcclxuICAgIGlmIChuZXh0UHJvcHMuaXNBY3RpdmUgIT09IHRoaXMucHJvcHMuaXNBY3RpdmUpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHdhcm5pbmcsIHBvc2l0aW9uLCBpc0FjdGl2ZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVsYXRpdmU+XHJcbiAgICAgICAge2lzQWN0aXZlICYmIChcclxuICAgICAgICAgIDxXcmFwcGVyIHBvc2l0aW9uPXtwb3NpdGlvbn0+XHJcbiAgICAgICAgICAgIDxPdXRzaWRlVHJpYW5nbGUgcG9zaXRpb249e3Bvc2l0aW9ufSAvPlxyXG4gICAgICAgICAgICA8SW5zaWRlVHJpYW5nbGUgcG9zaXRpb249e3Bvc2l0aW9ufSAvPlxyXG4gICAgICAgICAgICA8V2FybmluZz57d2FybmluZ308L1dhcm5pbmc+XHJcbiAgICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvUmVsYXRpdmU+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcEJhc2U7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGNvbG9yLCBib3JkZXJDb2xvciB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XHJcbi8vIGltcG9ydCBCb3JkZXJDb2xvclByb3BlcnR5IGZyb20gXCIuLi8uLi9zdHlsZXMvc3R5bGVQcm9wZXJ0eS9Cb3JkZXJDb2xvclByb3BlcnR5XCI7XHJcbi8vIGltcG9ydCBCYWNrZ3JvdW5kQ29sb3JQcm9wZXJ0eSBmcm9tIFwiLi4vLi4vc3R5bGVzL3N0eWxlUHJvcGVydHkvQmFja2dyb3VuZENvbG9yUHJvcGVydHlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyOiBhbnkgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xyXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1pbi13aWR0aDogMTQwcHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuXHJcbiAgJHsoeyBwb3NpdGlvbiB9OiBhbnkpID0+IHtcclxuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcclxuICAgICAgY2FzZSBcImJvdHRvbVwiOiB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgIGxlZnQ6IDE0cHg7XHJcbiAgICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDEwcHgpO1xyXG4gICAgICAgIGA7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcInRvcFwiOiB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgIGxlZnQ6IDE0cHg7XHJcbiAgICAgICAgICBib3R0b206IGNhbGMoMTAwJSArIDEwcHgpO1xyXG4gICAgICAgIGA7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICBsZWZ0OiAxNHB4O1xyXG4gICAgICAgICAgdG9wOiBjYWxjKDEwMCUgKyAxMHB4KTtcclxuICAgICAgICBgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfX1cclxuXHJcbiAgei1pbmRleDogMTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgJHsocHJvcHM6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIGJvcmRlckNvbG9yKHsgLi4ucHJvcHMsIGJvcmRlckNvbG9yOiBcIiNCNzFDMUNcIiB9KTtcclxuICB9fVxyXG5gO1xyXG5cclxuLyogJHtwcm9wcyA9PiBCb3JkZXJDb2xvclByb3BlcnR5KHsgLi4ucHJvcHMsIGJvcmRlckNvbG9yOiBcImNvbG9yMTJcIiB9KX1cclxuICAke3Byb3BzID0+XHJcbiAgICBCYWNrZ3JvdW5kQ29sb3JQcm9wZXJ0eSh7XHJcbiAgICAgIC4uLnByb3BzLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiY29sb3IwXCJcclxuICAgIH0pfSAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IE91dHNpZGVUcmlhbmdsZTogYW55ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDYuNXB4IDE0cHggNi41cHggMDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNiNzFjMWMgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcblxyXG4gICR7KHsgcG9zaXRpb24gfTogYW55KSA9PiB7XHJcbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XHJcbiAgICAgIGNhc2UgXCJib3R0b21cIjoge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgdG9wOiAtMTRweDtcclxuICAgICAgICAgICAgbGVmdDogMTUlO1xyXG4gICAgICAgICAgYDtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwidG9wXCI6IHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICAgIGJvdHRvbTogLTE0cHg7XHJcbiAgICAgICAgICBsZWZ0OiAxNSU7XHJcbiAgICAgICAgYDtcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgIHRvcDogLTE0cHg7XHJcbiAgICAgICAgICBsZWZ0OiAxNSU7XHJcbiAgICAgICAgYDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH19XHJcbmA7XHJcbi8qICR7cHJvcHMgPT4gQm9yZGVyQ29sb3JQcm9wZXJ0eSh7IC4uLnByb3BzLCBib3JkZXJUb3BDb2xvcjogXCJjb2xvcjEyXCIgfSl9ICovXHJcblxyXG5leHBvcnQgY29uc3QgSW5zaWRlVHJpYW5nbGU6IGFueSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiA2LjVweCAxNHB4IDYuNXB4IDA7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG5cclxuICAkeyh7IHBvc2l0aW9uIH06IGFueSkgPT4ge1xyXG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xyXG4gICAgICBjYXNlIFwiYm90dG9tXCI6IHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgdG9wOiAtMTJweDtcclxuICAgICAgICAgIGxlZnQ6IDE1JTtcclxuICAgICAgICBgO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJ0b3BcIjoge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgICAgYm90dG9tOiAtMTJweDtcclxuICAgICAgICAgIGxlZnQ6IDE1JTtcclxuICAgICAgICBgO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgdG9wOiAtMTJweDtcclxuICAgICAgICAgIGxlZnQ6IDE1JTtcclxuICAgICAgICBgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfX1cclxuYDtcclxuLyogJHtwcm9wcyA9PiBCb3JkZXJDb2xvclByb3BlcnR5KHsgLi4ucHJvcHMsIGJvcmRlclRvcENvbG9yOiBcImNvbG9yMTJcIiB9KX0gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBXYXJuaW5nOiBhbnkgPSBzdHlsZWQuZGl2YFxyXG4gICR7KHByb3BzOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBjb2xvcih7IC4uLnByb3BzLCBjb2xvcjogXCIjQjcxQzFDXCIgfSk7XHJcbiAgfX1cclxuICBmb250LXNpemU6MTRweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuYDtcclxuIiwiaW1wb3J0IEJveCBmcm9tIFwiLi9jb21wb25lbnRzL0JveC9Cb3hcIjtcclxuaW1wb3J0IEZsZXggZnJvbSBcIi4vY29tcG9uZW50cy9GbGV4L0ZsZXhcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuL2NvbXBvbmVudHMvSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gXCIuL2NvbXBvbmVudHMvVGV4dEFyZWEvVGV4dEFyZWFcIjtcclxuaW1wb3J0IFNlbGVjdEJhc2UgZnJvbSBcIi4vY29tcG9uZW50cy9TZWxlY3RCYXNlL1NlbGVjdEJhc2VcIjtcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSBcIi4vY29tcG9uZW50cy9CdXR0b25CYXNlL0J1dHRvbkJhc2VcIjtcclxuaW1wb3J0IENoZWNrYm94QmFzZSBmcm9tIFwiLi9jb21wb25lbnRzL0NoZWNrYm94QmFzZS9DaGVja2JveEJhc2VcIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuL2NvbXBvbmVudHMvQ2hlY2tib3gvQ2hlY2tib3hcIjtcclxuaW1wb3J0IENoZWNrYm94R3JvdXAgZnJvbSBcIi4vY29tcG9uZW50cy9DaGVja2JveEdyb3VwL0NoZWNrYm94R3JvdXBcIjtcclxuaW1wb3J0IFJhZGlvQnV0dG9uQmFzZSBmcm9tIFwiLi9jb21wb25lbnRzL1JhZGlvQnV0dG9uQmFzZS9SYWRpb0J1dHRvbkJhc2VcIjtcclxuaW1wb3J0IFJhZGlvQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvUmFkaW9CdXR0b24vUmFkaW9CdXR0b25cIjtcclxuaW1wb3J0IFJhZGlvQnV0dG9uR3JvdXAgZnJvbSBcIi4vY29tcG9uZW50cy9SYWRpb0J1dHRvbkdyb3VwL1JhZGlvQnV0dG9uR3JvdXBcIjtcclxuaW1wb3J0IFRhYnMgZnJvbSBcIi4vY29tcG9uZW50cy9UYWJCYXIvVGFic1wiO1xyXG5pbXBvcnQgVGFiQ29udGVudCBmcm9tIFwiLi9jb21wb25lbnRzL1RhYkJhci9UYWJDb250ZW50XCI7XHJcbmltcG9ydCBUYWJDb250cm9sbGVyIGZyb20gXCIuL2NvbXBvbmVudHMvVGFiQmFyL1RhYkNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IFRvb2x0aXBCYXNlIGZyb20gXCIuL2NvbXBvbmVudHMvVG9vbHRpcEJhc2UvVG9vbHRpcEJhc2VcIjtcclxuaW1wb3J0IFRleHQgZnJvbSBcIi4vY29tcG9uZW50cy9UZXh0L1RleHRcIjtcclxuaW1wb3J0IFNtYWxsUHJlbG9hZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvU21hbGxQcmVsb2FkZXIvU21hbGxQcmVsb2FkZXJcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vY29tcG9uZW50cy9DYXJkL0NhcmRcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRhaW5lci9Db250YWluZXJcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvSW1hZ2UvSW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4vY29tcG9uZW50cy9MaW5rL0xpbmtcIjtcclxuLy8gaW1wb3J0IFBhZ2luYXRpb25QYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uXCI7XHJcbi8vIGltcG9ydCBQYWdpbmF0aW9uSE9DIGZyb20gXCIuL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uSE9DXCI7XHJcblxyXG4vKiogU3R5bGUgKi9cclxuaW1wb3J0IFN0eWxlZFRoZW1lUHJvdmlkZXIsIHtcclxuICBDb2xvcnMsXHJcbiAgU3BhY2UsXHJcbiAgQm94U2hhZG93LFxyXG4gIEJvcmRlcixcclxuICBUaGVtZUNyZWF0ZSxcclxufSBmcm9tIFwiLi9zdHlsZXMvU3R5bGVUaGVtZVByb3ZpZGVyXCI7XHJcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi9zdHlsZXMvR2xvYmFsU3R5bGVcIjtcclxuXHJcbmltcG9ydCB7QnV0dG9uU2l6ZX0gZnJvbSBcIi4vc3R5bGVzL3ZhcmlhbnRzL2J1dHRvbnMvQnV0dG9uU2l6ZVwiO1xyXG5pbXBvcnQge0J1dHRvblZhcmlhbnR9IGZyb20gXCIuL3N0eWxlcy92YXJpYW50cy9idXR0b25zL0J1dHRvblZhcmlhbnRcIjtcclxuXHJcbmltcG9ydCB7SW5wdXRWYXJpYW50fSBmcm9tIFwiLi9zdHlsZXMvdmFyaWFudHMvaW5wdXRzL0lucHV0VmFyaWFudFwiO1xyXG5pbXBvcnQge0lucHV0U2l6ZX0gZnJvbSBcIi4vc3R5bGVzL3ZhcmlhbnRzL2lucHV0cy9JbnB1dFNpemVcIjtcclxuaW1wb3J0IHtcclxuICBJVmFyaWFudFNpemUsXHJcbiAgSVZhcmlhbnRJdGVtLFxyXG4gIElWYXJpYW50TGlzdCxcclxuICBJVmFyaWFudCxcclxuICBJQ29sb3JzLFxyXG4gIElUaGVtZSxcclxufSBmcm9tIFwiLi9zdHlsZXMvaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IHtcclxuICBGbGV4LFxyXG4gIEJveCxcclxuICBJbnB1dCxcclxuICBUZXh0QXJlYSxcclxuICBCdXR0b25CYXNlLFxyXG4gIFNlbGVjdEJhc2UsXHJcbiAgQ2hlY2tib3hCYXNlLFxyXG4gIENoZWNrYm94LFxyXG4gIENoZWNrYm94R3JvdXAsXHJcbiAgUmFkaW9CdXR0b25CYXNlLFxyXG4gIFJhZGlvQnV0dG9uLFxyXG4gIFRhYnMsXHJcbiAgVGFiQ29udHJvbGxlcixcclxuICBUYWJDb250ZW50LFxyXG4gIFRvb2x0aXBCYXNlLFxyXG4gIFJhZGlvQnV0dG9uR3JvdXAsXHJcbiAgVGV4dCxcclxuICBTbWFsbFByZWxvYWRlcixcclxuICBDYXJkLFxyXG4gIENvbnRhaW5lcixcclxuICBJbWFnZSxcclxuICBMaW5rLFxyXG4gIC8vIFBhZ2luYXRpb25QYWdlLFxyXG4gIC8vIFBhZ2luYXRpb25IT0MsXHJcblxyXG4gIC8qKiBTVFlMRSAqL1xyXG5cclxuICBTdHlsZWRUaGVtZVByb3ZpZGVyLFxyXG4gIENvbG9ycyxcclxuICBTcGFjZSxcclxuICBCb3hTaGFkb3csXHJcbiAgQm9yZGVyLFxyXG4gIFRoZW1lQ3JlYXRlLFxyXG4gIEdsb2JhbFN0eWxlLFxyXG4gIEJ1dHRvblNpemUsXHJcbiAgQnV0dG9uVmFyaWFudCxcclxuICBJbnB1dFZhcmlhbnQsXHJcbiAgSW5wdXRTaXplLFxyXG4gIElWYXJpYW50U2l6ZSxcclxuICBJVmFyaWFudEl0ZW0sXHJcbiAgSVZhcmlhbnRMaXN0LFxyXG4gIElWYXJpYW50LFxyXG4gIElDb2xvcnMsXHJcbiAgSVRoZW1lLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gIGJvZHksIGh0bWwsICNhcHAge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAqOmZvY3VzIHtcclxuICAgIG91dGxpbmU6MFxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgeyBJQ29sb3JzLCBJVGhlbWUgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcblxyXG4vKiogVmFyaWFudHMgKi9cclxuaW1wb3J0IHsgQnV0dG9uU2l6ZSB9IGZyb20gXCIuL3ZhcmlhbnRzL2J1dHRvbnMvQnV0dG9uU2l6ZVwiO1xyXG5pbXBvcnQgeyBJbnB1dFZhcmlhbnQgfSBmcm9tIFwiLi92YXJpYW50cy9pbnB1dHMvSW5wdXRWYXJpYW50XCI7XHJcbmltcG9ydCB7IEJ1dHRvblZhcmlhbnQgfSBmcm9tIFwiLi92YXJpYW50cy9idXR0b25zL0J1dHRvblZhcmlhbnRcIjtcclxuaW1wb3J0IHsgSW5wdXRTaXplIH0gZnJvbSBcIi4vdmFyaWFudHMvaW5wdXRzL0lucHV0U2l6ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbG9yczogSUNvbG9ycyA9IHtcclxuICB3aGl0ZTogXCIjZmZmZmZmXCIsXHJcbiAgYmx1ZTogXCIjMjE5NmYzXCIsXHJcbiAgcmVkOiBcIiNlMTAwNTBcIixcclxuICBvcmFuZ2U6IFwiI2Y0NDMzNlwiLFxyXG4gIGJsYWNrOiBcIiMwMDBcIixcclxuICBkYXJrOiBcIiMxZjFmMWZcIixcclxuICBncmF5OiBcIiM2ZDZkNmRcIixcclxuICBsaWdodEdyYXk6IFwiIzkzOTM5M1wiXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU3BhY2U6IG51bWJlcltdID0gW1xyXG4gIDAsXHJcbiAgMixcclxuICA0LFxyXG4gIDgsXHJcbiAgMTYsXHJcbiAgMjQsXHJcbiAgMzIsXHJcbiAgNDAsXHJcbiAgNDgsXHJcbiAgNTYsXHJcbiAgNjQsXHJcbiAgNzIsXHJcbiAgODAsXHJcbiAgODgsXHJcbiAgOTZcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBCb3hTaGFkb3c6IHN0cmluZ1tdID0gW1xyXG4gIFwibm9uZVwiLFxyXG4gIFwicmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMXB4IDFweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDJweCAxcHggLTFweFwiLFxyXG4gIFwicmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggNXB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMnB4IDJweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDNweCAxcHggLTJweFwiLFxyXG4gIFwicmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggOHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggM3B4IDRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDNweCAzcHggLTJweFwiXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQm9yZGVyOiBzdHJpbmdbXSA9IFtcclxuICBcIm5vbmVcIixcclxuICBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDIpXCIsXHJcbiAgXCIycHggc29saWQgIzE5NzZkMlwiXHJcbl07XHJcblxyXG5jb25zdCBkZWZhdWx0VGhlbWVQcm9wcyA9IHtcclxuICBzcGFjZTogU3BhY2UsXHJcbiAgYm94U2hhZG93OiBCb3hTaGFkb3csXHJcbiAgY29sb3JzOiBDb2xvcnMsXHJcbiAgYm9yZGVyOiBCb3JkZXJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZUNyZWF0ZSA9IChwcm9wczogSVRoZW1lID0gZGVmYXVsdFRoZW1lUHJvcHMpOiBJVGhlbWUgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwicHJvcHM6IFwiLCBwcm9wcyk7XHJcbiAgY29uc3QgeyBzcGFjZSwgYm94U2hhZG93LCBjb2xvcnMsIGJvcmRlciB9ID0gcHJvcHM7XHJcbiAgY29uc29sZS5sb2coXCJwcm9wczogXCIsIHNwYWNlLCBib3hTaGFkb3csIGNvbG9ycywgYm9yZGVyKTtcclxuXHJcbiAgY29uc3QgVGhlbWUgPSB7XHJcbiAgICBzcGFjZTogc3BhY2UgfHwgU3BhY2UsXHJcbiAgICBmb250U2l6ZXM6IHNwYWNlIHx8IFNwYWNlLFxyXG4gICAgbGluZUhlaWdodDogc3BhY2UgfHwgU3BhY2UsXHJcbiAgICBib3JkZXJSYWRpdXM6IHNwYWNlIHx8IFNwYWNlLFxyXG4gICAgYm94U2hhZG93OiBib3hTaGFkb3cgfHwgQm94U2hhZG93LFxyXG4gICAgYm9yZGVyOiBib3JkZXIsXHJcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLFxyXG4gICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICB2YXJpYW50OiB7XHJcbiAgICAgIGJ1dHRvblZhcmlhbnQ6IHt9LFxyXG4gICAgICBidXR0b25TaXplOiB7fSxcclxuICAgICAgaW5wdXRWYXJpYW50OiB7fSxcclxuICAgICAgaW5wdXRTaXplOiB7fVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFRoZW1lLnZhcmlhbnQuYnV0dG9uVmFyaWFudCA9IEJ1dHRvblZhcmlhbnQoVGhlbWUpO1xyXG4gIFRoZW1lLnZhcmlhbnQuYnV0dG9uU2l6ZSA9IEJ1dHRvblNpemUoKTtcclxuICBUaGVtZS52YXJpYW50LmlucHV0VmFyaWFudCA9IElucHV0VmFyaWFudChUaGVtZSk7XHJcbiAgVGhlbWUudmFyaWFudC5pbnB1dFNpemUgPSBJbnB1dFNpemUoVGhlbWUpO1xyXG4gIHJldHVybiBUaGVtZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRUaGVtZVByb3ZpZGVyOiBhbnkgPSAoeyBjaGlsZHJlbiwgdGhlbWUgfTogYW55KSA9PiAoXHJcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT57Y2hpbGRyZW59PC9UaGVtZVByb3ZpZGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkVGhlbWVQcm92aWRlcjtcclxuIiwiaW1wb3J0IHtJVmFyaWFudFNpemV9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uU2l6ZSA9ICgpOiBJVmFyaWFudFNpemUgPT4ge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc21hbGw6IHtcclxuICAgICAgcGFkZGluZzogJzRweCA4cHgnLFxyXG4gICAgICBtaW5XaWR0aDogJzY0cHgnLFxyXG4gICAgICBmb250U2l6ZTogJzAuODEyNXJlbSdcclxuICAgIH0sXHJcbiAgICBtZWRpdW06IHtcclxuICAgICAgcGFkZGluZzogJzVweCAxNnB4JyxcclxuICAgICAgbWluV2lkdGg6ICc2NHB4JyxcclxuICAgICAgZm9udFNpemU6ICcwLjg3NXJlbSdcclxuICAgIH0sXHJcbiAgICBsYXJnZToge1xyXG4gICAgICBwYWRkaW5nOiAnOHB4IDI0cHgnLFxyXG4gICAgICBtaW5XaWR0aDogJzY0cHgnLFxyXG4gICAgICBmb250U2l6ZTogJzAuOTM3NXJlbSdcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblNpemU7XHJcbiIsImltcG9ydCB7IElWYXJpYW50TGlzdCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbi8vIGltcG9ydCB7IElUaGVtZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5jb25zdCBiYXNlU3R5bGUgPSB7XHJcbiAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICBib3JkZXI6IFwibm9uZVwiLFxyXG4gIGJhY2tncm91bmQ6IFwibm9uZVwiLFxyXG4gIGZvbnQ6IFwiaW5oZXJpdFwiXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uVmFyaWFudCA9ICh0aGVtZTogSVZhcmlhbnRMaXN0KSA9PiB7XHJcbiAgY29uc29sZS5sb2codGhlbWUuYm9yZGVyKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgLi4uYmFzZVN0eWxlLFxyXG4gICAgICBcIjpob3ZlclwiOiB7fSxcclxuICAgICAgXCI6YWN0aXZlXCI6IHt9LFxyXG4gICAgICBcIjpkaXNhYmxlZFwiOiB7fSxcclxuICAgICAgXCI6Zm9jdXNcIjoge30sXHJcbiAgICAgIFwiOnZpc2l0ZWRcIjoge30sXHJcbiAgICAgIFwiLmFjdGl2ZVwiOiB7fVxyXG4gICAgfSxcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgLi4uYmFzZVN0eWxlLFxyXG4gICAgICBcIjpob3ZlclwiOiB7fSxcclxuICAgICAgXCI6YWN0aXZlXCI6IHt9LFxyXG4gICAgICBcIjpkaXNhYmxlZFwiOiB7fSxcclxuICAgICAgXCI6Zm9jdXNcIjoge30sXHJcbiAgICAgIFwiOnZpc2l0ZWRcIjoge30sXHJcbiAgICAgIFwiLmFjdGl2ZVwiOiB7fVxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICAuLi5iYXNlU3R5bGUsXHJcbiAgICAgIFwiOmhvdmVyXCI6IHt9LFxyXG4gICAgICBcIjphY3RpdmVcIjoge30sXHJcbiAgICAgIFwiOmRpc2FibGVkXCI6IHt9LFxyXG4gICAgICBcIjpmb2N1c1wiOiB7fSxcclxuICAgICAgXCI6dmlzaXRlZFwiOiB7fSxcclxuICAgICAgXCIuYWN0aXZlXCI6IHt9XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IHtcclxuICAgICAgLi4uYmFzZVN0eWxlLFxyXG4gICAgICBcIjpob3ZlclwiOiB7fSxcclxuICAgICAgXCI6YWN0aXZlXCI6IHt9LFxyXG4gICAgICBcIjpkaXNhYmxlZFwiOiB7fSxcclxuICAgICAgXCI6Zm9jdXNcIjoge30sXHJcbiAgICAgIFwiOnZpc2l0ZWRcIjoge30sXHJcbiAgICAgIFwiLmFjdGl2ZVwiOiB7fVxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25WYXJpYW50O1xyXG4iLCJpbXBvcnQgeyBJVmFyaWFudFNpemUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuY29uc3QgYmFzZVN0eWxlID0ge1xyXG4gIHBhZGRpbmc6IDBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dFNpemUgPSAodGhlbWU6IElWYXJpYW50U2l6ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB4U21hbGw6IHtcclxuICAgICAgLi4uYmFzZVN0eWxlLFxyXG4gICAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcblxyXG4gICAgICBcIjo6cGxhY2Vob2xkZXJcIjoge1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjEycHhcIlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc21hbGw6IHtcclxuICAgICAgLi4uYmFzZVN0eWxlLFxyXG4gICAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcbiAgICAgIFwiOjpwbGFjZWhvbGRlclwiOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMTJweFwiXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZWRpdW06IHtcclxuICAgICAgLi4uYmFzZVN0eWxlLFxyXG4gICAgICBmb250U2l6ZTogdGhlbWUuc3BhY2VbNV0sXHJcbiAgICAgIFwiOjpwbGFjZWhvbGRlclwiOiB7XHJcbiAgICAgICAgZm9udFNpemU6IHRoZW1lLnNwYWNlWzVdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsYXJnZToge1xyXG4gICAgICAuLi5iYXNlU3R5bGUsXHJcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5zcGFjZVs2XSxcclxuICAgICAgXCI6OnBsYWNlaG9sZGVyXCI6IHtcclxuICAgICAgICBmb250U2l6ZTogdGhlbWUuc3BhY2VbNV1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dFNpemU7XHJcbiIsIi8vIGltcG9ydCB7IElUaGVtZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IElWYXJpYW50TGlzdCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5jb25zdCBiYXNlU3R5bGUgPSB7XHJcbiAgZm9udDogXCJpbmhlcml0XCIsXHJcbiAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gIGJveFNpemluZzogXCJjb250ZW50LWJveFwiLFxyXG4gIGJhY2tncm91bmQ6IFwibm9uZVwiLFxyXG4gIGJvcmRlcjogXCJub25lXCIsXHJcbiAgXCItd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3JcIjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gIGN1cnNvcjogXCJ0ZXh0XCJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dFZhcmlhbnQgPSAodGhlbWU6IElWYXJpYW50TGlzdCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIC4uLmJhc2VTdHlsZSxcclxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrLFxyXG4gICAgICBib3JkZXJCb3R0b21TdHlsZTogXCJzb2xpZFwiLFxyXG4gICAgICBib3JkZXJCb3R0b21XaWR0aDogXCIycHhcIixcclxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrLFxyXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuXHJcbiAgICAgIFwiOmhvdmVyXCI6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmJsdWVcclxuICAgICAgfSxcclxuICAgICAgXCI6YWN0aXZlXCI6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmJsdWVcclxuICAgICAgfSxcclxuICAgICAgXCIuYWN0aXZlXCI6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmJsdWVcclxuICAgICAgfSxcclxuICAgICAgXCI6Zm9jdXNcIjoge1xyXG4gICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCI6ZGlzYWJsZWRcIjoge1xyXG4gICAgICAgIGN1cnNvcjogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5XHJcbiAgICAgIH0sXHJcbiAgICAgIFwiOnZpc2l0ZWRcIjoge30sXHJcbiAgICAgIFwiOjpwbGFjZWhvbGRlclwiOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIC4uLmJhc2VTdHlsZSxcclxuICAgICAgXCI6aG92ZXJcIjoge30sXHJcbiAgICAgIFwiOmFjdGl2ZVwiOiB7fSxcclxuICAgICAgXCI6ZGlzYWJsZWRcIjoge30sXHJcbiAgICAgIFwiOmZvY3VzXCI6IHt9LFxyXG4gICAgICBcIjp2aXNpdGVkXCI6IHt9LFxyXG4gICAgICBcIi5hY3RpdmVcIjoge31cclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgLi4uYmFzZVN0eWxlLFxyXG4gICAgICBcIjpob3ZlclwiOiB7fSxcclxuICAgICAgXCI6YWN0aXZlXCI6IHt9LFxyXG4gICAgICBcIjpkaXNhYmxlZFwiOiB7fSxcclxuICAgICAgXCI6Zm9jdXNcIjoge30sXHJcbiAgICAgIFwiOnZpc2l0ZWRcIjoge30sXHJcbiAgICAgIFwiLmFjdGl2ZVwiOiB7fVxyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgIC4uLmJhc2VTdHlsZSxcclxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5yZWQsXHJcbiAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiBcInNvbGlkXCIsXHJcbiAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiBcIjJweFwiLFxyXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnJlZCxcclxuICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcblxyXG4gICAgICBcIjpob3ZlclwiOiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5yZWRcclxuICAgICAgfSxcclxuICAgICAgXCI6YWN0aXZlXCI6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnJlZFxyXG4gICAgICB9LFxyXG4gICAgICBcIi5hY3RpdmVcIjoge1xyXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMucmVkXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiOmZvY3VzXCI6IHtcclxuICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnJlZFxyXG4gICAgICB9LFxyXG4gICAgICBcIjpkaXNhYmxlZFwiOiB7XHJcbiAgICAgICAgY3Vyc29yOiBcImRlZmF1bHRcIixcclxuICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmdyYXlcclxuICAgICAgfSxcclxuICAgICAgXCI6dmlzaXRlZFwiOiB7fSxcclxuICAgICAgXCI6OnBsYWNlaG9sZGVyXCI6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyYXlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtc3lzdGVtXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=