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
var defaultThemeProps = {
    space: exports.Space,
    boxShadow: exports.BoxShadow,
    colors: exports.Colors,
    border: exports.Border
};
exports.ThemeCreate = function (props) {
    if (props === void 0) { props = defaultThemeProps; }
    console.log('props: ', props);
    var space = props.space, boxShadow = props.boxShadow, colors = props.colors, border = props.border;
    console.log('props: ', space, boxShadow, colors, border);
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
            inputSize: {},
        }
    };
    Theme.variant.button = ButtonVariant_1.ButtonVariant(Theme);
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
        xSmall: __assign({}, baseStyle, { fontSize: '12px', '::placeholder': {
                fontSize: '12px',
            } }),
        small: __assign({}, baseStyle, { fontSize: '12px', '::placeholder': {
                fontSize: '12px',
            } }),
        medium: __assign({}, baseStyle, { fontSize: theme.space[5], '::placeholder': {
                fontSize: theme.space[5],
            } }),
        large: __assign({}, baseStyle, { fontSize: theme.space[6], '::placeholder': {
                fontSize: theme.space[5],
            } }),
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
    return {
        default: __assign({}, baseStyle, { color: theme.colors.dark, borderBottomStyle: 'solid', borderBottomWidth: '2px', borderColor: theme.colors.dark, outline: 'none', ':hover': {
                borderColor: theme.colors.blue,
            }, ':active': {
                borderColor: theme.colors.blue,
            }, '.active': {
                borderColor: theme.colors.blue,
            }, ':focus': {
                outline: 'none',
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
        error: __assign({}, baseStyle, { color: theme.colors.red, borderBottomStyle: 'solid', borderBottomWidth: '2px', borderColor: theme.colors.red, outline: 'none', ':hover': {
                borderColor: theme.colors.red,
            }, ':active': {
                borderColor: theme.colors.red,
            }, '.active': {
                borderColor: theme.colors.red,
            }, ':focus': {
                outline: 'none',
                borderColor: theme.colors.red,
            }, ':disabled': {
                cursor: 'default',
                outline: 'none',
                borderColor: theme.colors.gray,
            }, ':visited': {}, '::placeholder': {
                color: theme.colors.gray,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL0JveC9Cb3gudHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uQmFzZS9CdXR0b25CYXNlLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9DaGVja2JveC9DaGVja2JveC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9DaGVja2JveEJhc2UvQ2hlY2tib3hCYXNlLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL0NoZWNrYm94R3JvdXAvQ2hlY2tib3hHcm91cC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL0ZsZXgvRmxleC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9JbWFnZS9JbWFnZS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9MaW5rL0xpbmsudHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL2NvbXBvbmVudHMvUmFkaW9CdXR0b24vUmFkaW9CdXR0b24udHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL2NvbXBvbmVudHMvUmFkaW9CdXR0b25CYXNlL1JhZGlvQnV0dG9uQmFzZS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9SYWRpb0J1dHRvbkdyb3VwL1JhZGlvQnV0dG9uR3JvdXAudHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0QmFzZS9TZWxlY3RCYXNlLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL1NtYWxsUHJlbG9hZGVyL1NtYWxsUHJlbG9hZGVyLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL1RhYkJhci9UYWJDb250ZW50LnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL1RhYkJhci9UYWJDb250cm9sbGVyLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL1RhYkJhci9UYWJzLnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi8uL3NyYy9jb21wb25lbnRzL1RleHQvVGV4dC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9UZXh0QXJlYS9UZXh0QXJlYS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwQmFzZS9Ub29sdGlwQmFzZS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwQmFzZS9Ub29sdGlwQmFzZVN0eWxlZC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL3N0eWxlcy9HbG9iYWxTdHlsZS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvc3R5bGVzL1N0eWxlVGhlbWVQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvc3R5bGVzL3ZhcmlhbnRzL2J1dHRvbnMvQnV0dG9uU2l6ZS50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvc3R5bGVzL3ZhcmlhbnRzL2J1dHRvbnMvQnV0dG9uVmFyaWFudC50c3giLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvLi9zcmMvc3R5bGVzL3ZhcmlhbnRzL2lucHV0cy9JbnB1dFNpemUudHN4Iiwid2VicGFjazovL2NvZGUtYXJ0ZWwtdWktbGliLy4vc3JjL3N0eWxlcy92YXJpYW50cy9pbnB1dHMvSW5wdXRWYXJpYW50LnRzeCIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvZXh0ZXJuYWwgXCJyZWFjdC1zZWxlY3RcIiIsIndlYnBhY2s6Ly9jb2RlLWFydGVsLXVpLWxpYi9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vY29kZS1hcnRlbC11aS1saWIvZXh0ZXJuYWwgXCJzdHlsZWQtc3lzdGVtXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUc7YUFDOUIsRUFDRCxTQUFTLEVBQUU7Z0JBQ1QsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRzthQUM5QixFQUNELFNBQVMsRUFBRTtnQkFDVCxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHO2FBQzlCLEVBQ0QsUUFBUSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxNQUFNO2dCQUNmLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUc7YUFDOUIsRUFDRCxXQUFXLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE9BQU8sRUFBRSxNQUFNO2dCQUNmLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUk7YUFDL0IsRUFDRCxVQUFVLEVBQUUsRUFBRSxFQUNkLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJO2FBQ3pCLEdBQ0Y7S0FDRjtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HRCxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gIHNwYWNlLFxuICB3aWR0aCxcbiAgY29sb3IsXG4gIGZvbnRTaXplLFxuICBib3JkZXIsXG4gIGJvcmRlclJhZGl1cyxcbiAgYm9yZGVyQ29sb3IsXG4gIGJvcmRlcnMsXG4gIG92ZXJmbG93LFxuICBkaXNwbGF5LFxuICBtYXhXaWR0aCxcbiAgbWluV2lkdGgsXG4gIGhlaWdodCxcbiAgdGV4dEFsaWduLFxuICBsaW5lSGVpZ2h0LFxuICBtaW5IZWlnaHQsXG4gIG9wYWNpdHksXG4gIGxldHRlclNwYWNpbmcsXG4gIFNwYWNlUHJvcHMsXG4gIERpc3BsYXlQcm9wcyxcbiAgTWF4V2lkdGhQcm9wcyxcbiAgTWluV2lkdGhQcm9wcyxcbiAgSGVpZ2h0UHJvcHMsXG4gIE1pbkhlaWdodFByb3BzLFxuICBPdmVyZmxvd1Byb3BzLFxuICBPcGFjaXR5UHJvcHMsXG4gIHpJbmRleCxcbiAgYmFja2dyb3VuZEltYWdlLFxuICBiYWNrZ3JvdW5kU2l6ZSxcbiAgYmFja2dyb3VuZFBvc2l0aW9uLFxuICBiYWNrZ3JvdW5kUmVwZWF0XG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJveFxuICBleHRlbmRzIFNwYWNlUHJvcHMsXG4gICAgRGlzcGxheVByb3BzLFxuXG4gICAgTWF4V2lkdGhQcm9wcyxcbiAgICBNaW5XaWR0aFByb3BzLFxuICAgIEhlaWdodFByb3BzLFxuICAgIE1pbkhlaWdodFByb3BzLFxuICAgIE92ZXJmbG93UHJvcHMsXG4gICAgT3BhY2l0eVByb3BzIHtcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2PElCb3g+YFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAke2Rpc3BsYXl9O1xuICAke3NwYWNlfTtcbiAgJHt3aWR0aH07XG4gICR7b3ZlcmZsb3d9O1xuICAke2JvcmRlclJhZGl1c307XG4gICR7Ym9yZGVyQ29sb3J9O1xuICAke2JvcmRlcnN9O1xuICAke2JvcmRlcn07XG4gICR7Zm9udFNpemV9O1xuICAke2NvbG9yfTtcbiAgJHttYXhXaWR0aH07XG4gICR7bWluV2lkdGh9O1xuICAke2hlaWdodH07XG4gICR7bWluSGVpZ2h0fTtcbiAgJHtvcGFjaXR5fTtcbiAgJHt0ZXh0QWxpZ259O1xuICAke2xpbmVIZWlnaHR9O1xuICAke2xldHRlclNwYWNpbmd9O1xuICAke3pJbmRleH07XG4gICR7YmFja2dyb3VuZEltYWdlfTtcbiAgJHtiYWNrZ3JvdW5kU2l6ZX07XG4gICR7YmFja2dyb3VuZFBvc2l0aW9ufTtcbiAgJHtiYWNrZ3JvdW5kUmVwZWF0fVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHZhcmlhbnQgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG4vKipWaWV3ICovXG5pbXBvcnQgQm94IGZyb20gXCIuLi9Cb3gvQm94XCI7XG5cbmNvbnN0IGJ1dHRvbnNWYXJpYW50ID0gdmFyaWFudCh7XG4gIGtleTogXCJ2YXJpYW50LmJ1dHRvblZhcmlhbnRcIixcbiAgcHJvcDogXCJ2YXJpYW50XCJcbn0pO1xuXG5jb25zdCBidXR0b25zU2l6ZSA9IHZhcmlhbnQoe1xuICBrZXk6IFwidmFyaWFudC5idXR0b25TaXplXCIsXG4gIHByb3A6IFwic2l6ZVwiXG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBJQnV0dG9uQmFzZSB7XG4gIHZhcmlhbnQ6IHN0cmluZztcbiAgc2l6ZTogc3RyaW5nO1xuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbn1cblxuLyoqXG4gKiDQmtC+0LzQv9C+0L3QtdC90YLQsCDQvtCx0YvRh9C90LDRjyDQutC90L7Qv9C60LBcbiAqIEBleGFtcGxlIC4vQnV0dG9uQmFzZS5leGFtcGxlLm1kXG4gKi9cbmV4cG9ydCBjb25zdCBCdXR0b25CYXNlID0gc3R5bGVkKEJveCk8SUJ1dHRvbkJhc2U+YFxuICAke2J1dHRvbnNWYXJpYW50fTtcbiAgJHtidXR0b25zU2l6ZX07XG5gO1xuXG5CdXR0b25CYXNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogXCJkZWZhdWx0XCIsXG4gIHNpemU6IFwic21hbGxcIixcbiAgYXM6IFwiYnV0dG9uXCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkJhc2U7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vKiogVmlldyAqL1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uL0JveC9Cb3hcIjtcblxuLyoqXG4gKiDQmtC+0LzQv9C+0L3QtdC90YIg0LrQsNGA0YLQvtGH0LrQuFxuICogQGV4YW1wbGUgLi9DYXJkLmV4YW1wbGUubWRcbiAqL1xuZXhwb3J0IGNvbnN0IENhcmQgPSBzdHlsZWQoQm94KWBcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbkNhcmQuZGVmYXVsdFByb3BzID0ge1xuICBib3JkZXJSYWRpdXM6IDIsXG4gIGJvcmRlcjogXCIxcHggc29saWQgI0FFQUVBRVwiLFxuICBtaW5IZWlnaHQ6IFwiMTUwcHhcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hlY2tib3hCYXNlIH0gZnJvbSBcIi4uL0NoZWNrYm94QmFzZS9DaGVja2JveEJhc2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tib3gge1xuICBsYWJlbD86IHN0cmluZztcbiAgaWQ/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGRlZmF1bHRDaGVja2VkPzogYm9vbGVhbjtcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBDaGVja2JveCA9IChwcm9wczogSUNoZWNrYm94KSA9PiB7XG4gIGNvbnN0IHsgaWQsIG5hbWUsIGRpc2FibGVkLCBjaGVja2VkLCBsYWJlbCwgb25DaGFuZ2UsIC4uLnJlc3QgfSA9IHByb3BzO1xuICAvLyBjb25zb2xlLmxvZyhcIkNoZWNrYm94XCIsIHByb3BzKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bGFiZWwgJiYgPHA+e2xhYmVsfTwvcD59XG4gICAgICA8Q2hlY2tib3hCYXNlXG4gICAgICAgIGlkPXtgY2hlY2tib3gtJHtpZH1gfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIHR5cGU9e1wiY2hlY2tib3hcIn1cbiAgICAgICAgYXM9e1wiaW5wdXRcIn1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLyoqIFZpZXcgKi9cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi9Cb3gvQm94XCI7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkKEJveClgYDtcblxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tib3hzIHtcbiAgdmFsdWU/OiBhbnk7XG4gIGlkPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IENoZWNrYm94QmFzZSA9IChwcm9wczogSUNoZWNrYm94cykgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgbmFtZSxcbiAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgIGNoZWNrZWQsXG4gICAgZGVmYXVsdENoZWNrZWQgPSBmYWxzZSxcbiAgICB2YWx1ZSxcbiAgICBvbkNoYW5nZSxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wcztcblxuICAvLyBjb25zb2xlLmxvZyhcIkNoZWNrYm94QmFzZVwiLCBwcm9wcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8SW5wdXRcbiAgICAgIGlkPXtgY2hlY2tib3gtJHtpZH1gfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgIG5hbWU9e25hbWV9XG4gICAgICB0eXBlPXtcImNoZWNrYm94XCJ9XG4gICAgICBhcz17XCJpbnB1dFwifVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgb25DaGFuZ2U9eyhldmVudDogYW55KSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9fVxuICAgICAgey4uLnJlc3R9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94QmFzZTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vKiogVmlldyAgKi9cbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi4vQ2hlY2tib3gvQ2hlY2tib3hcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tib3hHcm91cCB7XG4gIGxhYmVsUHJvcDogc3RyaW5nO1xuICB2YWx1ZVByb3A6IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgZGVmYXVsdENoZWNrZWQ/OiBib29sZWFuO1xuICBvcHRpb25zOiBJT3B0aW9uc1tdO1xuICBpbnB1dDogYW55O1xuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9ucyB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVja2JveEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElDaGVja2JveEdyb3VwPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IHtcbiAgICBsYWJlbFByb3A6IFwiZm9vXCI7XG4gIH07XG5cbiAgb25DaGFuZ2UgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgIGxldCBwcm9wc1ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICBjb25zdCB2YWx1ZUluZGV4ID0gcHJvcHNWYWx1ZS5maW5kSW5kZXgoKGl0ZW06IGFueSkgPT4gaXRlbSA9PT0gdmFsdWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiUmFkaW9CdXR0b25Hcm91cCBvbkNoYW5nZVwiLCB2YWx1ZSwgdGhpcy5wcm9wcy52YWx1ZSk7XG5cbiAgICBpZiAodmFsdWVJbmRleCA+IC0xKSB7XG4gICAgICBwcm9wc1ZhbHVlLnNwbGljZSh2YWx1ZUluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHNWYWx1ZS5wdXNoKHZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHByb3BzVmFsdWUpO1xuICB9O1xuXG4gIGNoZWNrU3RhdHVzQ2hlY2tib3ggPSAodmFsdWU6IGFueSkgPT4ge1xuICAgIGlmIChcbiAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy52YWx1ZSkgJiZcbiAgICAgIHRoaXMucHJvcHMudmFsdWUuZmluZEluZGV4KChpdGVtOiBhbnkpID0+IGl0ZW0gPT09IHZhbHVlKSA+IC0xXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb3B0aW9ucyxcbiAgICAgIGxhYmVsUHJvcCxcbiAgICAgIHZhbHVlUHJvcCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgY2hlY2tlZCxcbiAgICAgIGlucHV0LFxuICAgICAgdmFsdWUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBjb25zb2xlLmxvZyhcIkNoZWNrYm94R3JvdXAgdGhpcy5wcm9wc1wiLCB0aGlzLnByb3BzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7QXJyYXkuaXNBcnJheShvcHRpb25zKSAmJlxuICAgICAgICAgIG9wdGlvbnMubWFwKFxuICAgICAgICAgICAgKGl0ZW06IGFueSwgaW5kZXg6IGFueSk6IGFueSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBuYW1lPXtgQ2hlY2tib3hHcm91cC0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbVt2YWx1ZVByb3BdfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2l0ZW1bbGFiZWxQcm9wXX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuY2hlY2tTdGF0dXNDaGVja2JveChpdGVtW3ZhbHVlUHJvcF0pfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBrZXk9e2BDaGVja2JveEdyb3VwLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgIHsuLi5pbnB1dH1cbiAgICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hHcm91cDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8qKlZpZXcgKi9cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi9Cb3gvQm94XCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoQm94KWBgO1xuXG5Db250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICBtdDogMCxcbiAgbWI6IDAsXG4gIG1sOiBcImF1dG9cIixcbiAgbXI6IFwiYXV0b1wiLFxuICBtYXhXaWR0aDogXCI5OTJweFwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iLCJpbXBvcnQge1xuICBqdXN0aWZ5Q29udGVudCxcbiAgYWxpZ25JdGVtcyxcbiAgYWxpZ25Db250ZW50LFxuICBmbGV4LFxuICBmbGV4QmFzaXMsXG4gIGZsZXhEaXJlY3Rpb24sXG4gIGZsZXhXcmFwLFxuICBvcmRlclxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vKipWaWV3ICovXG5pbXBvcnQgQm94IGZyb20gJy4uL0JveC9Cb3gnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElGbGV4IHtcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBGbGV4ID0gc3R5bGVkKEJveCk8SUZsZXg+YFxuICBkaXNwbGF5OiBmbGV4O1xuICAke2p1c3RpZnlDb250ZW50fTtcbiAgJHthbGlnbkl0ZW1zfTtcbiAgJHthbGlnbkNvbnRlbnR9O1xuICAke2ZsZXh9O1xuICAke2ZsZXhCYXNpc307XG4gICR7ZmxleERpcmVjdGlvbn07XG4gICR7ZmxleFdyYXB9O1xuICAke29yZGVyfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZsZXg7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgd2lkdGgsIGhlaWdodCwgYm9yZGVyUmFkaXVzLCBkaXNwbGF5IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcblxuZXhwb3J0IGNvbnN0IEltYWdlOiBhbnkgPSBzdHlsZWQuaW1nYFxuICAke3dpZHRofTtcbiAgJHtoZWlnaHR9O1xuICAke2JvcmRlclJhZGl1c307XG4gICR7ZGlzcGxheX07XG5gO1xuXG5JbWFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc3BsYXk6IFwiYmxvY2tcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdmFyaWFudCB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi9Cb3gvQm94XCI7XG5cbmNvbnN0IGlucHV0VmFyaWFudCA9IHZhcmlhbnQoe1xuICBrZXk6IFwidmFyaWFudC5pbnB1dFZhcmlhbnRcIixcbiAgcHJvcDogXCJ2YXJpYW50XCJcbn0pO1xuY29uc3QgaW5wdXRTaXplID0gdmFyaWFudCh7XG4gIGtleTogXCJ2YXJpYW50LmlucHV0U2l6ZVwiLFxuICBwcm9wOiBcInNpemVcIlxufSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUlucHV0IHtcbiAgdmFyaWFudD86IHN0cmluZztcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnksXG59XG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZChCb3gpPElJbnB1dD5gXG4gICR7aW5wdXRWYXJpYW50fTtcbiAgJHtpbnB1dFNpemV9O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5gO1xuXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICBzaXplOiBcIm1lZGl1bVwiLFxuICBhczogXCJpbnB1dFwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBzcGFjZSxcbiAgd2lkdGgsXG4gIGRpc3BsYXksXG4gIGNvbG9yLFxuICBmb250U2l6ZSxcbiAgZm9udEZhbWlseSxcbiAgZm9udFdlaWdodCxcbiAgbGluZUhlaWdodFxufSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG5leHBvcnQgY29uc3QgTGluazogYW55ID0gc3R5bGVkLmFgXG4gIGNvbG9yOiAjMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgJHtzcGFjZX07XG4gICR7d2lkdGh9O1xuICAke2Rpc3BsYXl9O1xuICAke2NvbG9yfTtcbiAgJHtmb250U2l6ZX07XG4gICR7Zm9udEZhbWlseX07XG4gICR7Zm9udFdlaWdodH07XG4gICR7bGluZUhlaWdodH07XG4gIC8qICY6aG92ZXIge1xuICAgICR7cHJvcHMgPT4gY29sb3IoeyAuLi5wcm9wcywgY29sb3I6IFwiY29sb3IzXCIgfSl9O1xuICB9ICovXG5gO1xuXG5MaW5rLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmFkaW9CdXR0b25CYXNlIGZyb20gXCIuLi9SYWRpb0J1dHRvbkJhc2UvUmFkaW9CdXR0b25CYXNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJhZGlvQnV0dG9uIHtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGxhYmVsPzogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiBhbnk7XG4gIGlkPzogc3RyaW5nO1xuICAvLyBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHZhbHVlOiBhbnk7XG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY29uc3QgUmFkaW9CdXR0b24gPSAocHJvcHM6IElSYWRpb0J1dHRvbikgPT4ge1xuICBjb25zdCB7XG4gICAgbGFiZWwsXG4gICAgb25DaGFuZ2UsXG4gICAgY2hlY2tlZCxcbiAgICBuYW1lLFxuICAgIGlkLFxuICAgIC8vIGRpc2FibGVkLFxuICAgIHZhbHVlLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzO1xuICAvLyBjb25zb2xlLmxvZyhcIlJhZGlvQnV0dG9uXCIsIHByb3BzKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bGFiZWwgJiYgPHA+e2xhYmVsfTwvcD59XG4gICAgICA8UmFkaW9CdXR0b25CYXNlXG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgLy8gZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9CdXR0b247XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8qKiBWaWV3ICovXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vQm94L0JveFwiO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZChCb3gpYGA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJhZGlvQnV0dG9uQmFzZSB7XG4gIGlkPzogc3RyaW5nO1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgbmFtZT86IHN0cmluZztcbiAgaW5wdXQ/OiBhbnk7XG4gIG9uQ2hhbmdlPzogYW55O1xuICB2YWx1ZTogc3RyaW5nO1xuICBkZWZhdWx0Q2hlY2tlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBSYWRpb0J1dHRvbkJhc2UgPSAocHJvcHM6IElSYWRpb0J1dHRvbkJhc2UpID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIG5hbWUsXG4gICAgY2hlY2tlZCxcbiAgICB2YWx1ZSxcbiAgICBvbkNoYW5nZSxcbiAgICAvLyBkZWZhdWx0Q2hlY2tlZCxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wcztcbiAgLy8gY29uc29sZS5sb2coXCJSYWRpb0J1dHRvbkJhc2VcIiwgcHJvcHMpO1xuXG4gIHJldHVybiAoXG4gICAgPElucHV0XG4gICAgICBpZD17YHJhZGlvY2hlY2tib3gtJHtpZH1gfVxuICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgIG5hbWU9e25hbWV9XG4gICAgICAvLyBkZWZhdWx0Q2hlY2tlZD17ZGVmYXVsdENoZWNrZWR9XG4gICAgICBvbkNoYW5nZT17KGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH19XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICB0eXBlPXtcInJhZGlvXCJ9XG4gICAgICBhcz17XCJpbnB1dFwifVxuICAgICAgey4uLnJlc3R9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvQnV0dG9uQmFzZTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vKiogVmlldyAgKi9cbmltcG9ydCBSYWRpb0J1dHRvbiBmcm9tIFwiLi4vUmFkaW9CdXR0b24vUmFkaW9CdXR0b25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUmFkaW9CdXR0b25Hcm91cCB7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBsYWJlbD86IHN0cmluZztcbiAgbGFiZWxQcm9wOiBzdHJpbmc7XG4gIHZhbHVlUHJvcDogc3RyaW5nO1xuICBpbnB1dDogYW55O1xuICBvcHRpb25zOiBJT3B0aW9uc1tdO1xuICBkZWZhdWx0Q2hlY2tlZD86IGFueTtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9ucyB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbkdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElSYWRpb0J1dHRvbkdyb3VwPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IHtcbiAgICBsYWJlbFByb3A6IFwiZm9vXCI7XG4gIH07XG5cbiAgb25DaGFuZ2UgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvcHRpb25zLFxuICAgICAgbGFiZWxQcm9wLFxuICAgICAgdmFsdWVQcm9wLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBjaGVja2VkLFxuICAgICAgaW5wdXQsXG4gICAgICB2YWx1ZSxcbiAgICAgIG5hbWUsXG4gICAgICBpZCxcbiAgICAgIC8vIGRlZmF1bHRDaGVja2VkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gY29uc29sZS5sb2coXCJSYWRpb0J1dHRvbkdyb3VwIHRoaXMucHJvcHNcIiwgdGhpcy5wcm9wcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge0FycmF5LmlzQXJyYXkob3B0aW9ucykgJiZcbiAgICAgICAgICBvcHRpb25zLm1hcChcbiAgICAgICAgICAgIChpdGVtOiBhbnksIGluZGV4OiBhbnkpOiBhbnkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvblxuICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtW3ZhbHVlUHJvcF19XG4gICAgICAgICAgICAgICAgICBsYWJlbD17aXRlbVtsYWJlbFByb3BdfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRDaGVja2VkPXtkZWZhdWx0Q2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAga2V5PXtgUmFkaW9CdXR0b25Hcm91cC0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvQnV0dG9uR3JvdXA7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCAgUHJvcFR5cGVzICBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG4vLyBpbXBvcnQgRGVlcEVxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdEJhc2Uge1xuICBwbGFjZWhvbGRlcj86IGFueTtcbiAgb3B0aW9ucz86IGFueTtcbiAgaXNMb2FkaW5nPzogYW55O1xuICBkaXNhYmxlZD86IGFueTtcbiAgaW5wdXQ/OiBhbnk7XG4gIHZhbHVlPzogYW55O1xuICBuYW1lPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTZWxlY3RCYXNlU3RhdGUge1xuICBzZWxlY3RlZE9wdGlvbj86IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFNlbGVjdEJhc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVNlbGVjdEJhc2UsIElTZWxlY3RCYXNlU3RhdGU+IHtcbiAgc3RhdGUgPSB7XG4gICAgc2VsZWN0ZWRPcHRpb246IG51bGxcbiAgfTtcblxuICAvLyBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAvLyAgIC8qKiBpbnB1dCAqL1xuICAvLyAgIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8vICAgb3B0aW9uczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5LCBQcm9wVHlwZXMuYm9vbF0pLFxuICAvLyAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAvLyAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nXG4gIC8vIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcHRpb25zOiBbXSxcbiAgICBwbGFjZWhvbGRlcjogXCJcIlxuICB9O1xuXG4gIC8vIGhhbmRsZUNoYW5nZSA9IHNlbGVjdGVkT3B0aW9uID0+IHtcbiAgLy8gICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAvLyAgIHRoaXMuc2V0U3RhdGUoXG4gIC8vICAgICAoKSA9PiAoeyBzZWxlY3RlZE9wdGlvbiB9KSxcbiAgLy8gICAgICgpID0+IHtcbiAgLy8gICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb25cbiAgLy8gICAgICAgICA/IHRoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb25bdmFsdWVdXG4gIC8vICAgICAgICAgOiBudWxsO1xuICAvLyAgICAgfVxuICAvLyAgICk7XG4gIC8vICAgY29uc29sZS5sb2coYE9wdGlvbiBzZWxlY3RlZDpgLCBzZWxlY3RlZE9wdGlvbltcInZhbHVlXCJdKTtcbiAgLy8gfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZE9wdGlvbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHsgcGxhY2Vob2xkZXIsIG9wdGlvbnMsIGlzTG9hZGluZywgZGlzYWJsZWQsIGlucHV0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgICAgbmFtZT17aW5wdXQubmFtZX1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBibHVySW5wdXRPblNlbGVjdD17dHJ1ZX1cbiAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgLy8gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdEJhc2U7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vQm94L0JveFwiO1xuXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyV3JhcHBlciA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4yMjVzIGFsbDtcbiAgLW8tdHJhbnNpdGlvbjogMC4yMjVzIGFsbDtcbiAgdHJhbnNpdGlvbjogMC4yMjVzIGFsbDtcbmA7XG5leHBvcnQgY29uc3QgU3BlZWRpbmdXaGVlbDogYW55ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA2NDljO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNTAwbXMgaW5maW5pdGUgbGluZWFyO1xuICAtby1hbmltYXRpb246IGNzc2xvYWQtc3BpbiA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gIC1tcy1hbmltYXRpb246IGNzc2xvYWQtc3BpbiA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNTAwbXMgaW5maW5pdGUgbGluZWFyO1xuICAtbW96LWFuaW1hdGlvbjogY3NzbG9hZC1zcGluIDUwMG1zIGluZmluaXRlIGxpbmVhcjtcblxuICBAa2V5ZnJhbWVzIGNzc2xvYWQtc3BpbiB7XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG5cbiAgQC1vLWtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xuICAgIDEwMCUge1xuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cblxuICBALW1zLWtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xuICAgIDEwMCUge1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuXG4gIEAtbW96LWtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNtYWxsUHJlbG9hZGVyID0gKCkgPT4gKFxuICA8PlxuICAgIDxTcGVlZGluZ1doZWVsIC8+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU21hbGxQcmVsb2FkZXI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLyoqXG4gKiBUaGUgY29udGVudCBvZiB0aGUgVGFiQ29udGVudFxuICogQGV4YW1wbGUgLi9UYWJDb250ZW50LmV4YW1wbGUubWRcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJDb250ZW50IHtcbiAgdG9nZ2xlVGFiPzogYW55O1xuICBhY3RpdmVUYWI/OiBhbnk7XG4gIGNoaWxkcmVuPzogYW55O1xuICBDbGlja0NvbnRlbnRDbG9zZVRhYj86IGFueTtcbn1cbmV4cG9ydCBjbGFzcyBUYWJDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElUYWJDb250ZW50PiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7fTtcblxuICAvKipcbiAgICogQHJldHVybnNcbiAgICogQG1lbWJlcm9mIFRhYnNcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBhY3RpdmVUYWIsIHRvZ2dsZVRhYiwgQ2xpY2tDb250ZW50Q2xvc2VUYWIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFjaGlsZHJlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChhY3RpdmVUYWIgPj0gMCAmJiBhY3RpdmVUYWIgIT09IG51bGwpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgaWYgKENsaWNrQ29udGVudENsb3NlVGFiKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlVGFiKGFjdGl2ZVRhYik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVuW2FjdGl2ZVRhYl19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKENsaWNrQ29udGVudENsb3NlVGFiKSB7XG4gICAgICAgICAgICAgIHRvZ2dsZVRhYihhY3RpdmVUYWIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiQ29udGVudDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQmFja2Ryb3A6IGFueSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxO1xuICAkeyhwcm9wczogYW55KSA9PlxuICAgIHByb3BzLmJhY2tkcm9wICYmIHByb3BzLmlzQWN0aXZlICE9PSBudWxsXG4gICAgICA/IFwiZGlzcGxheTpibG9jaztcIlxuICAgICAgOiBcImRpc3BsYXk6bm9uZTtcIn0gYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5gO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJDb250cm9sbGVyIHtcbiAgZGVmYXVsdEFjdGl2ZVRhYj86IGFueTtcbiAgYWN0aXZlVGFiPzogYW55O1xuICBoaWRlV2hlblJlQ2xpY2tpbmc/OiBhbnk7XG4gIGJhY2tkcm9wPzogYW55O1xuICBpc0FjdGl2ZT86IGFueTtcbiAgQ2xpY2tDb250ZW50Q2xvc2VUYWI/OiBhbnk7XG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG4vKipcbiAqIFRoZSBjb21wb25lbnQgdGFiIGNvbnRyb2xsZXJcbiAqIEBleGFtcGxlIC4vVGFiQ29udHJvbGxlci5leGFtcGxlLm1kXG4gKi9cbmNsYXNzIFRhYkNvbnRyb2xsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRhYkNvbnRyb2xsZXI+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWZhdWx0QWN0aXZlVGFiOiAwLFxuICAgIGhpZGVXaGVuUmVDbGlja2luZzogZmFsc2UsXG4gICAgYmFja2Ryb3A6IGZhbHNlLFxuICAgIENsaWNrQ29udGVudENsb3NlVGFiOiBmYWxzZVxuICB9O1xuXG4gIHN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGU7XG5cbiAgZ2V0IGluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlVGFiOiB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVUYWJcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIGNoYW5nZSB0YWIgYnkgaW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBtZW1iZXJvZiBDb250cm9sbGVyXG4gICAqL1xuICB0b2dnbGVUYWIgPSAoaW5kZXg6IGFueSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZTogYW55KSA9PiB7XG4gICAgICBpZiAocHJldlN0YXRlLmFjdGl2ZVRhYiAhPT0gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhY3RpdmVUYWI6IGluZGV4XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLnByb3BzLmhpZGVXaGVuUmVDbGlja2luZyAmJlxuICAgICAgICBwcmV2U3RhdGUuYWN0aXZlVGFiID09PSBpbmRleFxuICAgICAgKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVzYyBuZWVkIGZvciBjb3JyZWN0IHdvcmtcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYWN0aXZlVGFiOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEBkZXNjIG5lZWQgZm9yIGNvcnJlY3Qgd29ya1xuICAgICAgICovXG4gICAgICByZXR1cm4gcHJldlN0YXRlLmFjdGl2ZVRhYjtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgYmFja2Ryb3AsIENsaWNrQ29udGVudENsb3NlVGFiIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgYWN0aXZlVGFiIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFjaGlsZHJlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkcmVuV2l0aFByb3BzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQ6IGFueSkgPT5cbiAgICAgIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBhY3RpdmVUYWIsXG4gICAgICAgIHRvZ2dsZVRhYjogdGhpcy50b2dnbGVUYWIsXG4gICAgICAgIENsaWNrQ29udGVudENsb3NlVGFiXG4gICAgICB9KVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEJhY2tkcm9wXG4gICAgICAgICAgYmFja2Ryb3A9e2JhY2tkcm9wfVxuICAgICAgICAgIGlzQWN0aXZlPXthY3RpdmVUYWJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVUYWIobnVsbCl9XG4gICAgICAgIC8+XG4gICAgICAgIHtjaGlsZHJlbldpdGhQcm9wc31cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiQ29udHJvbGxlcjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgVGFic1N0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgfVxuYDtcblxuZXhwb3J0IGludGVyZmFjZSBJVGFicyB7XG4gIHRvZ2dsZVRhYj86IGFueTtcbiAgYWN0aXZlVGFiPzogYW55O1xuICBjaGlsZHJlbj86IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFRhYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRhYnM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuc1xuICAgKiBAbWVtYmVyb2YgVGFic1xuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGFjdGl2ZVRhYiwgdG9nZ2xlVGFiIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZHJlbldpdGhQcm9wcyA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpbmRleCkgPT5cbiAgICAgIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBvbkNsaWNrOiBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdG9nZ2xlVGFiKGluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiBhY3RpdmVUYWIgIT09IGluZGV4XG4gICAgICB9KVxuICAgICk7XG5cbiAgICByZXR1cm4gPFRhYnNTdHlsZWQ+e2NoaWxkcmVuV2l0aFByb3BzfTwvVGFic1N0eWxlZD47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFicztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vQm94L0JveFwiO1xuXG4vLyAvKiogU3R5bGUgcHJvcGVydHkgKi9cbi8vIGltcG9ydCB7IEJhY2tncm91bmRDb2xvclByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9zdHlsZVByb3BlcnR5L0JhY2tncm91bmRDb2xvclByb3BlcnR5XCI7XG4vLyBpbXBvcnQgeyBGaWxsU3ZnUHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL3N0eWxlUHJvcGVydHkvRmlsbFN2Z1Byb3BlcnR5XCI7XG4vLyBpbXBvcnQgeyBGb250RmFtaWx5UHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0ZvbnRGYW1pbHlQcm9wZXJ0eVwiO1xuLy8gaW1wb3J0IHsgTGluZUhlaWdodFByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9zdHlsZVByb3BlcnR5L0xpbmVIZWlnaHRQcm9wZXJ0eVwiO1xuXG4vKipcbiAqINCa0L7QvNC/0L7QvdC10L3RgiDRgtC10LrRgdGC0LBcbiAqIEBleGFtcGxlIC4vVGV4dC5leGFtcGxlLm1kXG4gKi9cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkKEJveClgXG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cblRleHQuZGVmYXVsdFByb3BzID0ge1xuICBjb2xvcjogXCIjMzMzMzMzXCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHZhcmlhbnQgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuLyoqIFZpZXcgKi9cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uL0JveC9Cb3gnO1xuXG5jb25zdCBpbnB1dFZhcmlhbnQgPSB2YXJpYW50KHtcbiAga2V5OiAndmFyaWFudC5pbnB1dFZhcmlhbnQnLFxuICBwcm9wOiAndmFyaWFudCdcbn0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZXh0QXJlYSB7XG4gIHZhcmlhbnQ/OiBzdHJpbmc7XG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY29uc3QgVGV4dEFyZWEgPSBzdHlsZWQoQm94KTxJVGV4dEFyZWE+YFxuICAke2lucHV0VmFyaWFudH07XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbmA7XG5cblRleHRBcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogJ2RlZmF1bHQnLFxuICBhczogJ3RleHRhcmVhJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWE7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBXcmFwcGVyLFxuICBPdXRzaWRlVHJpYW5nbGUsXG4gIEluc2lkZVRyaWFuZ2xlLFxuICBXYXJuaW5nXG59IGZyb20gXCIuL1Rvb2x0aXBCYXNlU3R5bGVkXCI7XG5cbmNvbnN0IFJlbGF0aXZlID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuZXhwb3J0IGludGVyZmFjZSBJVG9vbHRpcEJhc2Uge1xuICBpc0FjdGl2ZT86IGFueTtcbiAgcG9zaXRpb24/OiBhbnk7XG4gIHdhcm5pbmc/OiBhbnk7XG4gIENsaWNrQ29udGVudENsb3NlVGFiPzogYW55O1xufVxuXG4vKipcbiAqINCa0L7QvNC/0L7QvdC10L3RgiDRgtGD0LvRgtC40L/QsCAoVG9vbHRpcClcbiAqIEBleGFtcGxlIC4vVG9vbHRpcEJhc2UuZXhhbXBsZS5tZFxuICovXG5leHBvcnQgY2xhc3MgVG9vbHRpcEJhc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRvb2x0aXBCYXNlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgd2FybmluZzogXCLQmNC90YTQvtGA0LzQsNGG0LjRjyDQvdC1INC00L7RgdGC0YPQv9C90LBcIixcbiAgICBwb3NpdGlvbjogXCJib3R0b21cIixcbiAgICBpc0FjdGl2ZTogZmFsc2VcbiAgfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzOiBhbnkpIHtcbiAgICBpZiAobmV4dFByb3BzLmlzQWN0aXZlICE9PSB0aGlzLnByb3BzLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgd2FybmluZywgcG9zaXRpb24sIGlzQWN0aXZlLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlbGF0aXZlPlxuICAgICAgICB7aXNBY3RpdmUgJiYgKFxuICAgICAgICAgIDxXcmFwcGVyIHBvc2l0aW9uPXtwb3NpdGlvbn0+XG4gICAgICAgICAgICA8T3V0c2lkZVRyaWFuZ2xlIHBvc2l0aW9uPXtwb3NpdGlvbn0gLz5cbiAgICAgICAgICAgIDxJbnNpZGVUcmlhbmdsZSBwb3NpdGlvbj17cG9zaXRpb259IC8+XG4gICAgICAgICAgICA8V2FybmluZz57d2FybmluZ308L1dhcm5pbmc+XG4gICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1JlbGF0aXZlPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcEJhc2U7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgY29sb3IsIGJvcmRlckNvbG9yIH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcbi8vIGltcG9ydCBCb3JkZXJDb2xvclByb3BlcnR5IGZyb20gXCIuLi8uLi9zdHlsZXMvc3R5bGVQcm9wZXJ0eS9Cb3JkZXJDb2xvclByb3BlcnR5XCI7XG4vLyBpbXBvcnQgQmFja2dyb3VuZENvbG9yUHJvcGVydHkgZnJvbSBcIi4uLy4uL3N0eWxlcy9zdHlsZVByb3BlcnR5L0JhY2tncm91bmRDb2xvclByb3BlcnR5XCI7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyOiBhbnkgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWluLXdpZHRoOiAxNDBweDtcbiAgcGFkZGluZzogNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuXG4gICR7KHsgcG9zaXRpb24gfTogYW55KSA9PiB7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgY2FzZSBcImJvdHRvbVwiOiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgbGVmdDogMTRweDtcbiAgICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDEwcHgpO1xuICAgICAgICBgO1xuICAgICAgfVxuICAgICAgY2FzZSBcInRvcFwiOiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgbGVmdDogMTRweDtcbiAgICAgICAgICBib3R0b206IGNhbGMoMTAwJSArIDEwcHgpO1xuICAgICAgICBgO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgIGxlZnQ6IDE0cHg7XG4gICAgICAgICAgdG9wOiBjYWxjKDEwMCUgKyAxMHB4KTtcbiAgICAgICAgYDtcbiAgICAgIH1cbiAgICB9XG4gIH19XG5cbiAgei1pbmRleDogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICAkeyhwcm9wczogYW55KSA9PiB7XG4gICAgcmV0dXJuIGJvcmRlckNvbG9yKHsgLi4ucHJvcHMsIGJvcmRlckNvbG9yOiBcIiNCNzFDMUNcIiB9KTtcbiAgfX1cbmA7XG5cbi8qICR7cHJvcHMgPT4gQm9yZGVyQ29sb3JQcm9wZXJ0eSh7IC4uLnByb3BzLCBib3JkZXJDb2xvcjogXCJjb2xvcjEyXCIgfSl9XG4gICR7cHJvcHMgPT5cbiAgICBCYWNrZ3JvdW5kQ29sb3JQcm9wZXJ0eSh7XG4gICAgICAuLi5wcm9wcyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJjb2xvcjBcIlxuICAgIH0pfSAqL1xuXG5leHBvcnQgY29uc3QgT3V0c2lkZVRyaWFuZ2xlOiBhbnkgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogNi41cHggMTRweCA2LjVweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNiNzFjMWMgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG5cbiAgJHsoeyBwb3NpdGlvbiB9OiBhbnkpID0+IHtcbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICBjYXNlIFwiYm90dG9tXCI6IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICAgIHRvcDogLTE0cHg7XG4gICAgICAgICAgICBsZWZ0OiAxNSU7XG4gICAgICAgICAgYDtcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJ0b3BcIjoge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgICAgYm90dG9tOiAtMTRweDtcbiAgICAgICAgICBsZWZ0OiAxNSU7XG4gICAgICAgIGA7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgdG9wOiAtMTRweDtcbiAgICAgICAgICBsZWZ0OiAxNSU7XG4gICAgICAgIGA7XG4gICAgICB9XG4gICAgfVxuICB9fVxuYDtcbi8qICR7cHJvcHMgPT4gQm9yZGVyQ29sb3JQcm9wZXJ0eSh7IC4uLnByb3BzLCBib3JkZXJUb3BDb2xvcjogXCJjb2xvcjEyXCIgfSl9ICovXG5cbmV4cG9ydCBjb25zdCBJbnNpZGVUcmlhbmdsZTogYW55ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDYuNXB4IDE0cHggNi41cHggMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuXG4gICR7KHsgcG9zaXRpb24gfTogYW55KSA9PiB7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgY2FzZSBcImJvdHRvbVwiOiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgIHRvcDogLTEycHg7XG4gICAgICAgICAgbGVmdDogMTUlO1xuICAgICAgICBgO1xuICAgICAgfVxuICAgICAgY2FzZSBcInRvcFwiOiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICAgICAgICBib3R0b206IC0xMnB4O1xuICAgICAgICAgIGxlZnQ6IDE1JTtcbiAgICAgICAgYDtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgdG9wOiAtMTJweDtcbiAgICAgICAgICBsZWZ0OiAxNSU7XG4gICAgICAgIGA7XG4gICAgICB9XG4gICAgfVxuICB9fVxuYDtcbi8qICR7cHJvcHMgPT4gQm9yZGVyQ29sb3JQcm9wZXJ0eSh7IC4uLnByb3BzLCBib3JkZXJUb3BDb2xvcjogXCJjb2xvcjEyXCIgfSl9ICovXG5cbmV4cG9ydCBjb25zdCBXYXJuaW5nOiBhbnkgPSBzdHlsZWQuZGl2YFxuICAkeyhwcm9wczogYW55KSA9PiB7XG4gICAgcmV0dXJuIGNvbG9yKHsgLi4ucHJvcHMsIGNvbG9yOiBcIiNCNzFDMUNcIiB9KTtcbiAgfX1cbiAgZm9udC1zaXplOjE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuYDtcbiIsImltcG9ydCBCb3ggZnJvbSBcIi4vY29tcG9uZW50cy9Cb3gvQm94XCI7XG5pbXBvcnQgRmxleCBmcm9tIFwiLi9jb21wb25lbnRzL0ZsZXgvRmxleFwiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuL2NvbXBvbmVudHMvSW5wdXQvSW5wdXRcIjtcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiLi9jb21wb25lbnRzL1RleHRBcmVhL1RleHRBcmVhXCI7XG5pbXBvcnQgU2VsZWN0QmFzZSBmcm9tIFwiLi9jb21wb25lbnRzL1NlbGVjdEJhc2UvU2VsZWN0QmFzZVwiO1xuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSBcIi4vY29tcG9uZW50cy9CdXR0b25CYXNlL0J1dHRvbkJhc2VcIjtcbmltcG9ydCBDaGVja2JveEJhc2UgZnJvbSBcIi4vY29tcG9uZW50cy9DaGVja2JveEJhc2UvQ2hlY2tib3hCYXNlXCI7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4vY29tcG9uZW50cy9DaGVja2JveC9DaGVja2JveFwiO1xuaW1wb3J0IENoZWNrYm94R3JvdXAgZnJvbSBcIi4vY29tcG9uZW50cy9DaGVja2JveEdyb3VwL0NoZWNrYm94R3JvdXBcIjtcbmltcG9ydCBSYWRpb0J1dHRvbkJhc2UgZnJvbSBcIi4vY29tcG9uZW50cy9SYWRpb0J1dHRvbkJhc2UvUmFkaW9CdXR0b25CYXNlXCI7XG5pbXBvcnQgUmFkaW9CdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9SYWRpb0J1dHRvbi9SYWRpb0J1dHRvblwiO1xuaW1wb3J0IFJhZGlvQnV0dG9uR3JvdXAgZnJvbSBcIi4vY29tcG9uZW50cy9SYWRpb0J1dHRvbkdyb3VwL1JhZGlvQnV0dG9uR3JvdXBcIjtcbmltcG9ydCBUYWJzIGZyb20gXCIuL2NvbXBvbmVudHMvVGFiQmFyL1RhYnNcIjtcbmltcG9ydCBUYWJDb250ZW50IGZyb20gXCIuL2NvbXBvbmVudHMvVGFiQmFyL1RhYkNvbnRlbnRcIjtcbmltcG9ydCBUYWJDb250cm9sbGVyIGZyb20gXCIuL2NvbXBvbmVudHMvVGFiQmFyL1RhYkNvbnRyb2xsZXJcIjtcbmltcG9ydCBUb29sdGlwQmFzZSBmcm9tIFwiLi9jb21wb25lbnRzL1Rvb2x0aXBCYXNlL1Rvb2x0aXBCYXNlXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi9jb21wb25lbnRzL1RleHQvVGV4dFwiO1xuaW1wb3J0IFNtYWxsUHJlbG9hZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvU21hbGxQcmVsb2FkZXIvU21hbGxQcmVsb2FkZXJcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FyZC9DYXJkXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGFpbmVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvSW1hZ2UvSW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2NvbXBvbmVudHMvTGluay9MaW5rXCI7XG4vLyBpbXBvcnQgUGFnaW5hdGlvblBhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9QYWdpbmF0aW9uL1BhZ2luYXRpb25cIjtcbi8vIGltcG9ydCBQYWdpbmF0aW9uSE9DIGZyb20gXCIuL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uSE9DXCI7XG5cbi8qKiBTdHlsZSAqL1xuaW1wb3J0IFN0eWxlZFRoZW1lUHJvdmlkZXIsIHtcbiAgQ29sb3JzLFxuICBTcGFjZSxcbiAgQm94U2hhZG93LFxuICBCb3JkZXIsXG4gIFRoZW1lQ3JlYXRlLFxufSBmcm9tIFwiLi9zdHlsZXMvU3R5bGVUaGVtZVByb3ZpZGVyXCI7XG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4vc3R5bGVzL0dsb2JhbFN0eWxlXCI7XG5cbmltcG9ydCB7QnV0dG9uU2l6ZX0gZnJvbSBcIi4vc3R5bGVzL3ZhcmlhbnRzL2J1dHRvbnMvQnV0dG9uU2l6ZVwiO1xuaW1wb3J0IHtCdXR0b25WYXJpYW50fSBmcm9tIFwiLi9zdHlsZXMvdmFyaWFudHMvYnV0dG9ucy9CdXR0b25WYXJpYW50XCI7XG5cbmltcG9ydCB7SW5wdXRWYXJpYW50fSBmcm9tIFwiLi9zdHlsZXMvdmFyaWFudHMvaW5wdXRzL0lucHV0VmFyaWFudFwiO1xuaW1wb3J0IHtJbnB1dFNpemV9IGZyb20gXCIuL3N0eWxlcy92YXJpYW50cy9pbnB1dHMvSW5wdXRTaXplXCI7XG5pbXBvcnQge1xuICBJVmFyaWFudFNpemUsXG4gIElWYXJpYW50SXRlbSxcbiAgSVZhcmlhbnRMaXN0LFxuICBJVmFyaWFudCxcbiAgSUNvbG9ycyxcbiAgSVRoZW1lLFxufSBmcm9tIFwiLi9zdHlsZXMvaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQge1xuICBGbGV4LFxuICBCb3gsXG4gIElucHV0LFxuICBUZXh0QXJlYSxcbiAgQnV0dG9uQmFzZSxcbiAgU2VsZWN0QmFzZSxcbiAgQ2hlY2tib3hCYXNlLFxuICBDaGVja2JveCxcbiAgQ2hlY2tib3hHcm91cCxcbiAgUmFkaW9CdXR0b25CYXNlLFxuICBSYWRpb0J1dHRvbixcbiAgVGFicyxcbiAgVGFiQ29udHJvbGxlcixcbiAgVGFiQ29udGVudCxcbiAgVG9vbHRpcEJhc2UsXG4gIFJhZGlvQnV0dG9uR3JvdXAsXG4gIFRleHQsXG4gIFNtYWxsUHJlbG9hZGVyLFxuICBDYXJkLFxuICBDb250YWluZXIsXG4gIEltYWdlLFxuICBMaW5rLFxuICAvLyBQYWdpbmF0aW9uUGFnZSxcbiAgLy8gUGFnaW5hdGlvbkhPQyxcblxuICAvKiogU1RZTEUgKi9cblxuICBTdHlsZWRUaGVtZVByb3ZpZGVyLFxuICBDb2xvcnMsXG4gIFNwYWNlLFxuICBCb3hTaGFkb3csXG4gIEJvcmRlcixcbiAgVGhlbWVDcmVhdGUsXG4gIEdsb2JhbFN0eWxlLFxuICBCdXR0b25TaXplLFxuICBCdXR0b25WYXJpYW50LFxuICBJbnB1dFZhcmlhbnQsXG4gIElucHV0U2l6ZSxcbiAgSVZhcmlhbnRTaXplLFxuICBJVmFyaWFudEl0ZW0sXG4gIElWYXJpYW50TGlzdCxcbiAgSVZhcmlhbnQsXG4gIElDb2xvcnMsXG4gIElUaGVtZSxcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICBib2R5LCBodG1sLCAjYXBwIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAqOmZvY3VzIHtcbiAgICBvdXRsaW5lOjBcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGU7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUaGVtZVByb3ZpZGVyfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7SUNvbG9ycywgSVRoZW1lLCBJVmFyaWFudH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuXG4vKiogVmFyaWFudHMgKi9cbmltcG9ydCB7QnV0dG9uU2l6ZX0gZnJvbSAnLi92YXJpYW50cy9idXR0b25zL0J1dHRvblNpemUnO1xuaW1wb3J0IHtJbnB1dFZhcmlhbnR9IGZyb20gJy4vdmFyaWFudHMvaW5wdXRzL0lucHV0VmFyaWFudCc7XG5pbXBvcnQge0J1dHRvblZhcmlhbnR9IGZyb20gJy4vdmFyaWFudHMvYnV0dG9ucy9CdXR0b25WYXJpYW50JztcbmltcG9ydCB7SW5wdXRTaXplfSBmcm9tIFwiLi92YXJpYW50cy9pbnB1dHMvSW5wdXRTaXplXCI7XG5cblxuZXhwb3J0IGNvbnN0IENvbG9yczogSUNvbG9ycyA9IHtcbiAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgYmx1ZTogJyMyMTk2ZjMnLFxuICByZWQ6ICcjZTEwMDUwJyxcbiAgb3JhbmdlOiAnI2Y0NDMzNicsXG4gIGJsYWNrOiAnIzAwMCcsXG4gIGRhcms6ICcjMWYxZjFmJyxcbiAgZ3JheTogJyM2ZDZkNmQnLFxuICBsaWdodEdyYXk6ICcjOTM5MzkzJyxcbn07XG5cbmV4cG9ydCBjb25zdCBTcGFjZTogbnVtYmVyW10gPSBbMCwgMiwgNCwgOCwgMTYsIDI0LCAzMiwgNDAsIDQ4LCA1NiwgNjQsIDcyLCA4MCwgODgsIDk2XTtcblxuZXhwb3J0IGNvbnN0IEJveFNoYWRvdzogc3RyaW5nW10gPSBbXG4gICdub25lJyxcbiAgJ3JnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDNweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDFweCAxcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAycHggMXB4IC0xcHgnLFxuICAncmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggNXB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMnB4IDJweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDNweCAxcHggLTJweCcsXG4gICdyZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCA4cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAzcHggNHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggM3B4IDNweCAtMnB4Jyxcbl07XG5cbmV4cG9ydCBjb25zdCBCb3JkZXI6IHN0cmluZ1tdID0gW1xuICAnbm9uZScsXG4gICcxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQyKScsXG4gICcycHggc29saWQgIzE5NzZkMicsXG5dO1xuXG5jb25zdCBkZWZhdWx0VGhlbWVQcm9wcyA9IHtcbiAgc3BhY2U6IFNwYWNlLFxuICBib3hTaGFkb3c6Qm94U2hhZG93LFxuICBjb2xvcnM6IENvbG9ycyxcbiAgYm9yZGVyOiBCb3JkZXJcbn1cblxuZXhwb3J0IGNvbnN0IFRoZW1lQ3JlYXRlID0gKHByb3BzOiBJVGhlbWUgPSBkZWZhdWx0VGhlbWVQcm9wcyk6IElUaGVtZSA9PiB7XG4gIGNvbnNvbGUubG9nKCdwcm9wczogJywgcHJvcHMpO1xuICBjb25zdCB7XG4gICAgc3BhY2UsXG4gICAgYm94U2hhZG93LFxuICAgIGNvbG9ycyxcbiAgICBib3JkZXJcbiAgfSA9IHByb3BzO1xuICBjb25zb2xlLmxvZygncHJvcHM6ICcsICBzcGFjZSxcbiAgICBib3hTaGFkb3csXG4gICAgY29sb3JzLFxuICAgIGJvcmRlcik7XG5cbiAgY29uc3QgVGhlbWUgPSB7XG4gICAgc3BhY2U6IHNwYWNlIHx8IFNwYWNlLFxuICAgIGZvbnRTaXplczogc3BhY2UgfHwgU3BhY2UgLFxuICAgIGxpbmVIZWlnaHQ6IHNwYWNlIHx8IFNwYWNlLFxuICAgIGJvcmRlclJhZGl1czogc3BhY2UgfHwgU3BhY2UsXG4gICAgYm94U2hhZG93OiBib3hTaGFkb3cgfHwgQm94U2hhZG93LFxuICAgIGJvcmRlcjogYm9yZGVyLFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMsXG4gICAgY29sb3JzOiBjb2xvcnMsXG4gICAgdmFyaWFudDoge1xuICAgICAgYnV0dG9uVmFyaWFudDoge30sXG4gICAgICBidXR0b25TaXplOiB7fSxcbiAgICAgIGlucHV0VmFyaWFudDoge30sXG4gICAgICBpbnB1dFNpemU6IHt9LFxuICAgIH1cbiAgfTtcblxuICBUaGVtZS52YXJpYW50LmJ1dHRvbiA9IEJ1dHRvblZhcmlhbnQoVGhlbWUpO1xuICBUaGVtZS52YXJpYW50LmJ1dHRvblNpemUgPSBCdXR0b25TaXplKCk7XG4gIFRoZW1lLnZhcmlhbnQuaW5wdXRWYXJpYW50ID0gSW5wdXRWYXJpYW50KFRoZW1lKTtcbiAgVGhlbWUudmFyaWFudC5pbnB1dFNpemUgPSBJbnB1dFNpemUoVGhlbWUpO1xuICByZXR1cm4gVGhlbWVcbn1cblxuXG5leHBvcnQgY29uc3QgU3R5bGVkVGhlbWVQcm92aWRlcjogYW55ID0gKHtjaGlsZHJlbiwgdGhlbWV9OiBhbnkpID0+IChcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT57Y2hpbGRyZW59PC9UaGVtZVByb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkVGhlbWVQcm92aWRlcjtcbiIsImltcG9ydCB7SVZhcmlhbnRTaXplfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uU2l6ZSA9ICgpOiBJVmFyaWFudFNpemUgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgc21hbGw6IHtcbiAgICAgIHBhZGRpbmc6ICc0cHggOHB4JyxcbiAgICAgIG1pbldpZHRoOiAnNjRweCcsXG4gICAgICBmb250U2l6ZTogJzAuODEyNXJlbSdcbiAgICB9LFxuICAgIG1lZGl1bToge1xuICAgICAgcGFkZGluZzogJzVweCAxNnB4JyxcbiAgICAgIG1pbldpZHRoOiAnNjRweCcsXG4gICAgICBmb250U2l6ZTogJzAuODc1cmVtJ1xuICAgIH0sXG4gICAgbGFyZ2U6IHtcbiAgICAgIHBhZGRpbmc6ICc4cHggMjRweCcsXG4gICAgICBtaW5XaWR0aDogJzY0cHgnLFxuICAgICAgZm9udFNpemU6ICcwLjkzNzVyZW0nXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblNpemU7XG4iLCJpbXBvcnQge0lWYXJpYW50TGlzdH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7SVRoZW1lfSBmcm9tIFwiLi4vLi4vU3R5bGVUaGVtZVByb3ZpZGVyXCI7XG5cbmNvbnN0IGJhc2VTdHlsZSA9IHtcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gIGZvbnQ6ICdpbmhlcml0Jyxcbn07XG5cblxuZXhwb3J0IGNvbnN0IEJ1dHRvblZhcmlhbnQgPSAodGhlbWU6IElUaGVtZSk6IElWYXJpYW50TGlzdCA9PiB7XG4gIGNvbnNvbGUubG9nKHRoZW1lLmJvcmRlcik7XG5cbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICAuLi5iYXNlU3R5bGUsXG4gICAgICAnOmhvdmVyJzoge30sXG4gICAgICAnOmFjdGl2ZSc6IHt9LFxuICAgICAgJzpkaXNhYmxlZCc6IHt9LFxuICAgICAgJzpmb2N1cyc6IHt9LFxuICAgICAgJzp2aXNpdGVkJzoge30sXG4gICAgICAnLmFjdGl2ZSc6IHt9LFxuICAgIH0sXG4gICAgcHJpbWFyeToge1xuICAgICAgLi4uYmFzZVN0eWxlLFxuICAgICAgJzpob3Zlcic6IHt9LFxuICAgICAgJzphY3RpdmUnOiB7fSxcbiAgICAgICc6ZGlzYWJsZWQnOiB7fSxcbiAgICAgICc6Zm9jdXMnOiB7fSxcbiAgICAgICc6dmlzaXRlZCc6IHt9LFxuICAgICAgJy5hY3RpdmUnOiB7fSxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgLi4uYmFzZVN0eWxlLFxuICAgICAgJzpob3Zlcic6IHt9LFxuICAgICAgJzphY3RpdmUnOiB7fSxcbiAgICAgICc6ZGlzYWJsZWQnOiB7fSxcbiAgICAgICc6Zm9jdXMnOiB7fSxcbiAgICAgICc6dmlzaXRlZCc6IHt9LFxuICAgICAgJy5hY3RpdmUnOiB7fSxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICAuLi5iYXNlU3R5bGUsXG4gICAgICAnOmhvdmVyJzoge30sXG4gICAgICAnOmFjdGl2ZSc6IHt9LFxuICAgICAgJzpkaXNhYmxlZCc6IHt9LFxuICAgICAgJzpmb2N1cyc6IHt9LFxuICAgICAgJzp2aXNpdGVkJzoge30sXG4gICAgICAnLmFjdGl2ZSc6IHt9LFxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblZhcmlhbnQ7XG4iLCJpbXBvcnQge0lWYXJpYW50U2l6ZSwgSVRoZW1lfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xuXG5jb25zdCBiYXNlU3R5bGUgPSB7XG4gIHBhZGRpbmc6IDAsXG59O1xuXG5leHBvcnQgY29uc3QgSW5wdXRTaXplID0gKHRoZW1lPzogSVRoZW1lID0ge30pOiBJVmFyaWFudFNpemUgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgeFNtYWxsOiB7XG4gICAgICAuLi5iYXNlU3R5bGUsXG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuXG4gICAgICAnOjpwbGFjZWhvbGRlcic6IHtcbiAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzbWFsbDoge1xuICAgICAgLi4uYmFzZVN0eWxlLFxuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgICc6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG1lZGl1bToge1xuICAgICAgLi4uYmFzZVN0eWxlLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnNwYWNlWzVdLFxuICAgICAgJzo6cGxhY2Vob2xkZXInOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGVtZS5zcGFjZVs1XSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsYXJnZToge1xuICAgICAgLi4uYmFzZVN0eWxlLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnNwYWNlWzZdLFxuICAgICAgJzo6cGxhY2Vob2xkZXInOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGVtZS5zcGFjZVs1XSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0U2l6ZTtcbiIsImltcG9ydCB7SVRoZW1lfSBmcm9tIFwiLi4vLi4vU3R5bGVUaGVtZVByb3ZpZGVyXCI7XG5pbXBvcnQge0lWYXJpYW50TGlzdH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcblxuXG5jb25zdCBiYXNlU3R5bGUgPSB7XG4gIGZvbnQ6ICdpbmhlcml0JyxcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgY3Vyc29yOiAndGV4dCcsXG5cbn07XG5cbmV4cG9ydCBjb25zdCBJbnB1dFZhcmlhbnQgPSAodGhlbWU6IElUaGVtZSk6IElWYXJpYW50TGlzdCA9PiB7XG4gIHJldHVybiB7XG4gICAgZGVmYXVsdDoge1xuICAgICAgLi4uYmFzZVN0eWxlLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5kYXJrLFxuICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJCb3R0b21XaWR0aDogJzJweCcsXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmRhcmssXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG5cbiAgICAgICc6aG92ZXInOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZSxcbiAgICAgIH0sXG4gICAgICAnOmFjdGl2ZSc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlLFxuICAgICAgfSxcbiAgICAgICcuYWN0aXZlJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmJsdWUsXG4gICAgICB9LFxuICAgICAgJzpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmJsdWUsXG4gICAgICB9LFxuXG4gICAgICAnOmRpc2FibGVkJzoge1xuICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmdyYXksXG4gICAgICB9LFxuICAgICAgJzp2aXNpdGVkJzoge30sXG4gICAgICAnOjpwbGFjZWhvbGRlcic6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHByaW1hcnk6IHtcbiAgICAgIC4uLmJhc2VTdHlsZSxcbiAgICAgICc6aG92ZXInOiB7fSxcbiAgICAgICc6YWN0aXZlJzoge30sXG4gICAgICAnOmRpc2FibGVkJzoge30sXG4gICAgICAnOmZvY3VzJzoge30sXG4gICAgICAnOnZpc2l0ZWQnOiB7fSxcbiAgICAgICcuYWN0aXZlJzoge30sXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIC4uLmJhc2VTdHlsZSxcbiAgICAgICc6aG92ZXInOiB7fSxcbiAgICAgICc6YWN0aXZlJzoge30sXG4gICAgICAnOmRpc2FibGVkJzoge30sXG4gICAgICAnOmZvY3VzJzoge30sXG4gICAgICAnOnZpc2l0ZWQnOiB7fSxcbiAgICAgICcuYWN0aXZlJzoge30sXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgLi4uYmFzZVN0eWxlLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5yZWQsXG4gICAgICBib3JkZXJCb3R0b21TdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMnB4JyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMucmVkLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuXG4gICAgICAnOmhvdmVyJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnJlZCxcbiAgICAgIH0sXG4gICAgICAnOmFjdGl2ZSc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5yZWQsXG4gICAgICB9LFxuICAgICAgJy5hY3RpdmUnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcnMucmVkLFxuICAgICAgfSxcbiAgICAgICc6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5yZWQsXG4gICAgICB9LFxuICAgICAgJzpkaXNhYmxlZCc6IHtcbiAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5LFxuICAgICAgfSxcbiAgICAgICc6dmlzaXRlZCc6IHt9LFxuICAgICAgJzo6cGxhY2Vob2xkZXInOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheSxcbiAgICAgIH0sXG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXN5c3RlbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9