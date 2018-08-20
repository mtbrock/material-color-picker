webpackHotUpdate("main",{

/***/ "./js/ColorPreferences.jsx":
/*!*********************************!*\
  !*** ./js/ColorPreferences.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/styles/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors */ \"./node_modules/@material-ui/core/colors/index.js\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/Button/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ \"./node_modules/@material-ui/core/ButtonBase/index.js\");\n/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Input */ \"./node_modules/@material-ui/core/Input/index.js\");\n/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/Slider */ \"./node_modules/@material-ui/lab/Slider/index.js\");\n/* harmony import */ var _material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ColorLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ColorLabel */ \"./js/ColorLabel.jsx\");\n/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ColorPicker */ \"./js/ColorPicker.jsx\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./App.scss */ \"./js/App.scss\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass ColorPreferences extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeId: 'primary',\n      primary: this.paletteForColor(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__[\"blue\"][300]),\n      secondary: this.paletteForColor(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__[\"green\"][300]),\n      accent: this.paletteForColor(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__[\"blueGrey\"][400]),\n      error: this.paletteForColor(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__[\"red\"][500])\n    };\n    this.onColorClick = this.onColorClick.bind(this);\n    this.onLabelClick = this.onLabelClick.bind(this);\n  }\n\n  onLabelClick(event, id) {\n    this.setState({\n      activeId: id\n    });\n  }\n\n  paletteForColor(color) {\n    const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createMuiTheme\"])({\n      palette: {\n        primary: { main: color }\n      }\n    });\n    return theme.palette;\n  }\n\n  onColorClick(event, color) {\n    const palette = this.paletteForColor(color);\n    this.props.onColorChange([this.state.activeId], palette.primary);\n    this.setState((prevState, props) => ({\n      [prevState.activeId]: palette\n    }));\n  }\n\n  createColorLabel(id) {\n    return React.createElement(_ColorLabel__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      active: this.state.activeId === id,\n      palette: this.state[id],\n      colorKey: id,\n      key: id,\n      onClick: this.onLabelClick,\n      children: id\n    });\n  }\n\n  render() {\n    return React.createElement(\n      'div',\n      { className: 'color-prefs-container' },\n      React.createElement(\n        'div',\n        { className: 'color-prefs-label-container' },\n        this.createColorLabel('primary'),\n        this.createColorLabel('secondary'),\n        this.createColorLabel('accent'),\n        this.createColorLabel('error')\n      ),\n      React.createElement(\n        'div',\n        { className: 'color-prefs-picker-container' },\n        React.createElement(_ColorPicker__WEBPACK_IMPORTED_MODULE_9__[\"default\"], { onClick: this.onColorClick })\n      )\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorPreferences);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"./node_modules/react/index.js\")))\n\n//# sourceURL=webpack:///./js/ColorPreferences.jsx?");

/***/ })

})