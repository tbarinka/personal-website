/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: Arial, Helvetica, sans-serif\n}\n/* styles for header */\n#header {\n    display: flex;\n    width: 100%;\n}\n#nav {\n    display: flex;\n    width: 70%;\n}\n#linksList {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    justify-content: space-around;\n    list-style: none;\n}\n/* styles for main content */\n#mainContainer {\n    display: flex;\n    gap: 10px;\n}\n\n.contentBox {\n    display: flex;\n    flex-direction: column;\n}\n.homePageLoader {\n\n}\n\n/* styles for profile */\n#profile {\n    width: 400px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n#profilePhoto {\n    height: 300px;\n}\n\n#profileDescription, #profileName {\n    width: 350px;\n    display: flex;\n    justify-content: center;\n}\n\n/* styles for Philosophy */\n\n#italic {\n    font-style: italic;\n}\n\n/* styles for JS portfolio */\n#appButtonContainer {\n    display: flex;\n    gap: 15px;\n}\n.openAppButtons {\n    font-size: 18px;\n    height: 70px;\n    width: 140px;\n    border-radius: 10px;\n}\n\n/* styles for weather App */\n\n#weatherWrapper {\n    border-radius: 5px;\n    background-color: #1e293b;\n    width: 450px;\n    position: absolute;\n    top: 100px;\n}\n\n#weatherHeader,\n#weatherContent {\n    width: 390px;\n}\n\n#weatherHeader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n    gap: 15px;\n    background-color: #1e293b;\n    color: white;\n    height: 15%;\n    border-radius: 5px;\n}\n\n#weatherIcon {\n    height: 43px;\n    filter: invert(100%);\n    -webkit-filter: invert(100%);\n}\n\n#weatherHeaderLogo {\n    display: flex;\n}\n\n#removeWeatherAppBtn {\n    background-color: #1e293b;\n    color: white;\n    font-size: 24px;\n    position: relative;\n    left: 55px;\n    bottom: 20px;\n    border: none;\n    box-shadow: none;\n    background: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding-bottom: 3px;\n    padding-left: 7px;\n    padding-right: 7px;\n}\n\n#weatherContent {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    justify-content: center;\n    background-color: #93c5fd;\n    padding: 30px;\n    height: 85%;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n#weatherContent>div {\n    gap: 10px;\n    height: 7%;\n    display: flex;\n}\n\n#weatherBtn,\n#weatherInput {\n    padding: 0.5rem;\n    border: none;\n    border-radius: 5px;\n    color: inherit;\n    font-family: inherit;\n    font-size: 18px;\n    outline: none;\n    height: 37px;\n}\n#weatherBtn {\n    height: 37px;\n}\n\n#weatherBtn {\n    width: 80px;\n    margin-left: 10px;\n}\n\n#form {\n    gap: 10px;\n}\n\n.searchResultContainer {\n    /*position: absolute;\n    top: 30%;\n    left: 50%;\n    margin-left: -175px;*/\n    background-color: #1e293b;\n    width: 330px;\n    height: 285px;\n    border-radius: 10px;\n    border: solid white 3px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #93c5fd;\n    gap: 10px;\n}\n\n.searchResultContainer>h2 {\n    font-size: 36px;\n    margin-bottom: 8px;\n    color: #cbd5e1;\n}\n\n#temp {\n    font-size: 30px;\n    margin-bottom: 8px;\n}\n\n.p-info {\n    color: white;\n    font-size: 18px;\n}\n\n/*styles for battleship*/\n\n#container {\n    position: absolute;\n    background-color: #d6d3d1;\n\n}\n\n#battleShipContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 10px;\n    position: relative;\n}\n\n/*styles for the placement module */\n.placement-module-container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 10px;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    width: 800px;\n    height: 660px;\n    background-color: grey;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    padding-right: 30px;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n}\n\n.placementTextBox {\n    height: 10%;\n    margin-top: -11px;\n    margin-bottom: 23px;\n}\n\n.placementTextContent {\n    text-shadow: black 2px 2px;\n    font-size: 40px;\n    color: #22d3ee;\n}\n\n.middleSubcontainer,\n.rightInfoSubcontainer {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n}\n\n.middleSubcontainer {\n    gap: 30px;\n}\n\n.rightInfoSubcontainer {\n    gap: 25px;\n    flex-direction: column;\n    align-items: center;\n}\n\n.rightInfoButtonsContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 40px;\n    padding: 5px;\n}\n\n.bottomSubcontainer {\n    display: flex;\n    gap: 55px;\n    height: 25%;\n    margin-top: 20px;\n\n}\n\n.placementInstructionBox {\n    background-color: #d6d3d1;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border-radius: 20px;\n    padding-bottom: 5px;\n}\n\n.headingContainer {\n    display: flex;\n    justify-content: center;\n    margin-bottom: -20px;\n}\n\n.shipAllClassesContainer {\n    display: flex;\n    flex-direction: row;\n    grid-template-columns: repeat(5, 1fr);\n    background-color: rgba(0, 0, 255, 0);\n    gap: 20px;\n    width: 400px;\n\n}\n\n.singleShipClassContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.ship {\n    display: flex;\n    gap: 1px;\n}\n\n.shipAlt {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    border: solid black 2px;\n}\n\n/*styles for the two grids and coordinates */\n.doubleBoardContainer {\n    display: flex;\n    gap: 175px;\n    padding: 10px;\n}\n\n.singleBoardContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.xCoordinateContainer {\n    display: flex;\n    gap: 1px;\n    margin-left: 35px;\n    margin-bottom: -10px;\n}\n\n.yCoordinateContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    margin-top: 10px;\n}\n\n.leftSquare {\n    display: flex;\n    justify-content: center;\n}\n\n.leftSquare,\n.upperSquare {\n    height: 35px;\n    width: 35px;\n    display: flex;\n    justify-content: center;\n}\n\n.subcontainer {\n    display: flex;\n}\n\n.placementSquare {\n    height: 35px;\n    width: 35px;\n    background-color: red;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 1;\n}\n\n.square,\n.aiSquare {\n    border: solid black;\n    color: black;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.square:hover,\n.aiSquare:hover,\n.placementSquare:hover {\n    border: solid black;\n    color: black;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #cbd5e1;\n}\n\n.squareContainer {}\n\n.grid-container {\n    height: 350px;\n    width: 350px;\n    display: grid;\n    grid-template-columns: repeat(10, 35px);\n    grid-template-rows: repeat(10, 35px);\n    grid-auto-flow: column;\n    gap: 1px;\n}\n\n/* styles for score card */\n.singleBoardScoreContainer {\n    display: flex;\n    gap: 5px;\n    justify-content: left;\n}\n\n/*styles for game controller hud*/\n.scoreKeeperContainer {\n    display: flex;\n    gap: 390px;\n    text-shadow: #22d3ee 2px 2px;\n\n}\n\n.placementButton {\n    height: 60px;\n    width: 120px;\n    font-size: 20px;\n    border-radius: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #22d3ee;\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n}\n\n.buttonContainer {\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n}\n\n.formContainer {\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n    margin: 10px;\n}\n\n.winnerCard {\n    background-color: #dc2626;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n    border-radius: 20px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 10px;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    height: 276px;\n    width: 350px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n}\n\n.winnerAnnouncement {\n    font-size: 80px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    font-family: Arial, Helvetica, sans-serif\n}\n/* styles for header */\n#header {\n    display: flex;\n    width: 100%;\n}\n#nav {\n    display: flex;\n    width: 70%;\n}\n#linksList {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    justify-content: space-around;\n    list-style: none;\n}\n/* styles for main content */\n#mainContainer {\n    display: flex;\n    gap: 10px;\n}\n\n.contentBox {\n    display: flex;\n    flex-direction: column;\n}\n.homePageLoader {\n\n}\n\n/* styles for profile */\n#profile {\n    width: 400px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n#profilePhoto {\n    height: 300px;\n}\n\n#profileDescription, #profileName {\n    width: 350px;\n    display: flex;\n    justify-content: center;\n}\n\n/* styles for Philosophy */\n\n#italic {\n    font-style: italic;\n}\n\n/* styles for JS portfolio */\n#appButtonContainer {\n    display: flex;\n    gap: 15px;\n}\n.openAppButtons {\n    font-size: 18px;\n    height: 70px;\n    width: 140px;\n    border-radius: 10px;\n}\n\n/* styles for weather App */\n\n#weatherWrapper {\n    border-radius: 5px;\n    background-color: #1e293b;\n    width: 450px;\n    position: absolute;\n    top: 100px;\n}\n\n#weatherHeader,\n#weatherContent {\n    width: 390px;\n}\n\n#weatherHeader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n    gap: 15px;\n    background-color: #1e293b;\n    color: white;\n    height: 15%;\n    border-radius: 5px;\n}\n\n#weatherIcon {\n    height: 43px;\n    filter: invert(100%);\n    -webkit-filter: invert(100%);\n}\n\n#weatherHeaderLogo {\n    display: flex;\n}\n\n#removeWeatherAppBtn {\n    background-color: #1e293b;\n    color: white;\n    font-size: 24px;\n    position: relative;\n    left: 55px;\n    bottom: 20px;\n    border: none;\n    box-shadow: none;\n    background: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding-bottom: 3px;\n    padding-left: 7px;\n    padding-right: 7px;\n}\n\n#weatherContent {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    justify-content: center;\n    background-color: #93c5fd;\n    padding: 30px;\n    height: 85%;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n#weatherContent>div {\n    gap: 10px;\n    height: 7%;\n    display: flex;\n}\n\n#weatherBtn,\n#weatherInput {\n    padding: 0.5rem;\n    border: none;\n    border-radius: 5px;\n    color: inherit;\n    font-family: inherit;\n    font-size: 18px;\n    outline: none;\n    height: 37px;\n}\n#weatherBtn {\n    height: 37px;\n}\n\n#weatherBtn {\n    width: 80px;\n    margin-left: 10px;\n}\n\n#form {\n    gap: 10px;\n}\n\n.searchResultContainer {\n    /*position: absolute;\n    top: 30%;\n    left: 50%;\n    margin-left: -175px;*/\n    background-color: #1e293b;\n    width: 330px;\n    height: 285px;\n    border-radius: 10px;\n    border: solid white 3px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #93c5fd;\n    gap: 10px;\n}\n\n.searchResultContainer>h2 {\n    font-size: 36px;\n    margin-bottom: 8px;\n    color: #cbd5e1;\n}\n\n#temp {\n    font-size: 30px;\n    margin-bottom: 8px;\n}\n\n.p-info {\n    color: white;\n    font-size: 18px;\n}\n\n/*styles for battleship*/\n\n#container {\n    position: absolute;\n    background-color: #d6d3d1;\n\n}\n\n#battleShipContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 10px;\n    position: relative;\n}\n\n/*styles for the placement module */\n.placement-module-container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 10px;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    width: 800px;\n    height: 660px;\n    background-color: grey;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    padding-right: 30px;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n}\n\n.placementTextBox {\n    height: 10%;\n    margin-top: -11px;\n    margin-bottom: 23px;\n}\n\n.placementTextContent {\n    text-shadow: black 2px 2px;\n    font-size: 40px;\n    color: #22d3ee;\n}\n\n.middleSubcontainer,\n.rightInfoSubcontainer {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n}\n\n.middleSubcontainer {\n    gap: 30px;\n}\n\n.rightInfoSubcontainer {\n    gap: 25px;\n    flex-direction: column;\n    align-items: center;\n}\n\n.rightInfoButtonsContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 40px;\n    padding: 5px;\n}\n\n.bottomSubcontainer {\n    display: flex;\n    gap: 55px;\n    height: 25%;\n    margin-top: 20px;\n\n}\n\n.placementInstructionBox {\n    background-color: #d6d3d1;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border-radius: 20px;\n    padding-bottom: 5px;\n}\n\n.headingContainer {\n    display: flex;\n    justify-content: center;\n    margin-bottom: -20px;\n}\n\n.shipAllClassesContainer {\n    display: flex;\n    flex-direction: row;\n    grid-template-columns: repeat(5, 1fr);\n    background-color: rgba(0, 0, 255, 0);\n    gap: 20px;\n    width: 400px;\n\n}\n\n.singleShipClassContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.ship {\n    display: flex;\n    gap: 1px;\n}\n\n.shipAlt {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    border: solid black 2px;\n}\n\n/*styles for the two grids and coordinates */\n.doubleBoardContainer {\n    display: flex;\n    gap: 175px;\n    padding: 10px;\n}\n\n.singleBoardContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.xCoordinateContainer {\n    display: flex;\n    gap: 1px;\n    margin-left: 35px;\n    margin-bottom: -10px;\n}\n\n.yCoordinateContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    margin-top: 10px;\n}\n\n.leftSquare {\n    display: flex;\n    justify-content: center;\n}\n\n.leftSquare,\n.upperSquare {\n    height: 35px;\n    width: 35px;\n    display: flex;\n    justify-content: center;\n}\n\n.subcontainer {\n    display: flex;\n}\n\n.placementSquare {\n    height: 35px;\n    width: 35px;\n    background-color: red;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 1;\n}\n\n.square,\n.aiSquare {\n    border: solid black;\n    color: black;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.square:hover,\n.aiSquare:hover,\n.placementSquare:hover {\n    border: solid black;\n    color: black;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #cbd5e1;\n}\n\n.squareContainer {}\n\n.grid-container {\n    height: 350px;\n    width: 350px;\n    display: grid;\n    grid-template-columns: repeat(10, 35px);\n    grid-template-rows: repeat(10, 35px);\n    grid-auto-flow: column;\n    gap: 1px;\n}\n\n/* styles for score card */\n.singleBoardScoreContainer {\n    display: flex;\n    gap: 5px;\n    justify-content: left;\n}\n\n/*styles for game controller hud*/\n.scoreKeeperContainer {\n    display: flex;\n    gap: 390px;\n    text-shadow: #22d3ee 2px 2px;\n\n}\n\n.placementButton {\n    height: 60px;\n    width: 120px;\n    font-size: 20px;\n    border-radius: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #22d3ee;\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n}\n\n.buttonContainer {\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n}\n\n.formContainer {\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n    margin: 10px;\n}\n\n.winnerCard {\n    background-color: #dc2626;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n    border-radius: 20px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 10px;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    height: 276px;\n    width: 350px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n}\n\n.winnerAnnouncement {\n    font-size: 80px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/site-contents/battleship-app/personal-website-initializer.js":
/*!**************************************************************************!*\
  !*** ./src/site-contents/battleship-app/personal-website-initializer.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAppWindow": () => (/* binding */ loadAppWindow)
/* harmony export */ });

class Square {
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
        this.isHit = false;
        this.containsShip = false;
        this.ship = null;
        //this.start = null
    }
}
class Gameboard {
    constructor(input) {
        this.xAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        this.yAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        this.grid = this.makeGrid()
    }
    receiveAttack(xLetter, yNum) {
        let found = this.grid.find(square => (square.X == xLetter && square.Y == yNum));
        found.isHit = true;
        if (found.containsShip == true) {
            found.ship.hit();
            return found.ship;
        }
        return found.ship;
    }
    makeGrid() {
        let grid = [];
        for (let x = 0; x < this.xAxis.length; x++) {
            for (let y = 0; y < this.yAxis.length; y++) {
                let square = new Square(this.xAxis[x], this.yAxis[y]);
                grid.push(square);
            }
        }
        return grid;
    }
    populateShip(size, xStart, yStart, direction) {
        if (size > 1) {
            if (direction == "north") {
                if (yStart < size) {
                    return 'overflow!'
                }
            }
            if (direction == "south") {
                if ((yStart - 1) > (10 - size)) {
                    return 'overflow!'
                }
            }
            if (direction == "west") {
                if (this.xAxis.indexOf(xStart) < (size - 1)) {
                    return 'overflow!'
                }
            }
            if (direction == "east") {
                if (this.xAxis.indexOf(xStart) > (10 - size)) {
                    return 'overflow!'
                }
            }
        }
        let newShip = new Ship(size, xStart, yStart, direction);
        newShip.direction = direction;
        let startingSquare = this.grid.find(square => (square.X == newShip.xStart && square.Y == newShip.yStart));
        let squaresContainingNewShip = [];
        startingSquare.containsShip = true;
        startingSquare.ship = newShip;
        squaresContainingNewShip.push(startingSquare);
        let yIndex = this.grid.indexOf(startingSquare);
        while (size > 1) {
            if (direction == "north") {
                yStart = yStart - 1;
                let square = this.grid.find(square => (square.X == newShip.xStart && square.Y == yStart));
                square.containsShip = true;
                square.ship = newShip;
                squaresContainingNewShip.push(square)
                size = size - 1;
            }
            if (direction == "south") {
                //yStart = yStart + 1;
                yIndex += 1
                //let square = this.grid.find(square => (square.X == newShip.xStart && square.Y == yStart));
                let square = this.grid[yIndex];
                square.containsShip = true;
                square.ship = newShip;
                squaresContainingNewShip.push(square)
                size = size - 1;
            } else if (direction == "east") {
                xStart = this.xAxis[this.xAxis.indexOf(xStart) + 1];
                let square = this.grid.find(square => (square.X == xStart && square.Y == newShip.yStart))
                square.containsShip = true;
                square.ship = newShip;
                squaresContainingNewShip.push(square);
                size = size - 1;
            } else if (direction == "west") {
                xStart = this.xAxis[this.xAxis.indexOf(xStart) - 1];
                let square = this.grid.find(square => (square.X == xStart && square.Y == newShip.yStart))
                square.containsShip = true;
                square.ship = newShip;
                squaresContainingNewShip.push(square)
                size = size - 1;
            }
        }
        return squaresContainingNewShip;
        //add some code to account for size > 1 and direction
    }
    depopulateShip(size, xStart, yStart, direction) {
        let newShip = new Ship(size, xStart, yStart);
        let startingSquare = this.grid.find(square => (square.X == newShip.xStart && square.Y == newShip.yStart));
        let squaresContainingNewShip = [];
        startingSquare.containsShip = false;
        startingSquare.ship = null;
        squaresContainingNewShip.push(startingSquare);
        let yIndex = this.grid.indexOf(startingSquare);
        while (size > 1) {
            if (direction == "north") {
                yStart = yStart - 1;
                let square = this.grid.find(square => (square.X == newShip.xStart && square.Y == yStart));
                square.containsShip = false;
                square.ship = null;
                squaresContainingNewShip.push(square)
                size = size - 1;
            }
            if (direction == "south") {
                //yStart = yStart + 1;
                yIndex += 1
                //let square = this.grid.find(square => (square.X == newShip.xStart && square.Y == yStart));
                let square = this.grid[yIndex];
                square.containsShip = false;
                square.ship = null;
                squaresContainingNewShip.push(square)
                size = size - 1;
            } else if (direction == "east") {
                xStart = this.xAxis[this.xAxis.indexOf(xStart) + 1];
                let square = this.grid.find(square => (square.X == xStart && square.Y == newShip.yStart))
                square.containsShip = false;
                square.ship = null;
                squaresContainingNewShip.push(square);
                size = size - 1;
            } else if (direction == "west") {
                xStart = this.xAxis[this.xAxis.indexOf(xStart) - 1];
                let square = this.grid.find(square => (square.X == xStart && square.Y == newShip.yStart))
                square.containsShip = false;
                square.ship = null;
                squaresContainingNewShip.push(square)
                size = size - 1;
            }
        }
        return squaresContainingNewShip;
        //add some code to account for size > 1 and direction
    }
}
class Ship {
  constructor(size, xStart, yStart, direction) {
    this.size = size
    this.hits = []
    this.xStart = xStart
    this.yStart = yStart
    this.direction = null
  }
  hit() {
    this.hits.push('hit');
    if (this.hits.length == this.size) {
      return this.isSunk();
    } else {
      return this.hit;
    }
  }
  isSunk() {
    return 'sunk!'
  }
} 

function removeDuplicates(arr) {
    var unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
 
//suite of functions for loading the two DOM boards & score keeper card
function squareLoader(coordinate, player = "ai") {
    let square = document.createElement('div');
    square.classList.add('square');
    if (coordinate.isHit == true) {
        square.style.backgroundColor = "#6ee7b7";
    }
    if (player == "ai") {
        square.classList.remove('square');
        square.classList.add('aiSquare');
        square.addEventListener('click', function () {
            let x = coordinate.X;
            let y = coordinate.Y;
            attackAI(x, y);
        });
    }
    if (coordinate.isHit == true && coordinate.containsShip == true) {
        square.style.backgroundColor = "red";
        square.textContent = "X";
    }
    //if (coordinate.containsShip == true) {
        //square.style.backgroundColor = "red";
    //}
    if (player != "ai") {
        if (coordinate.containsShip == true) {
            square.style.backgroundColor = "red";
        }
    }
    return square;
}
function boardLoader(board, player) {
    let arrayOfGridCoordinates = board.grid;
    let container = document.createElement('div');
    container.classList.add('grid-container');
    arrayOfGridCoordinates.forEach((coordinate) => {
        let square = squareLoader(coordinate, player);
        container.appendChild(square);
    })
    return container;
};
function xCoordinateLoader() {
    let arrayOfXCoordinates = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let container = document.createElement('div');
    container.classList.add('xCoordinateContainer');
    arrayOfXCoordinates.forEach((coordinate) => {
        let square = document.createElement('div');
        square.classList.add('upperSquare');
        square.textContent = coordinate;
        container.appendChild(square);
    });
    return container;
}
function xCoordinateDoubler() {
    let container = document.createElement('div');
    container.classList.add('xCoordinateContainerDouble');
    container.appendChild(xCoordinateLoader());
    container.appendChild(xCoordinateLoader());
    return container;
}
function yCoordinateLoader() {
    let arrayOfXCoordinates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let container = document.createElement('div');
    container.classList.add('yCoordinateContainer');
    arrayOfXCoordinates.forEach((coordinate) => {
        let square = document.createElement('div');
        square.classList.add('leftSquare');
        square.textContent = coordinate;
        container.appendChild(square);
    });
    return container;
}
function playerCoordinatedBoardLoader(board) {
    let container = document.createElement('div');
    container.classList.add('singleBoardContainer')
    let subcontainer = document.createElement('div');
    subcontainer.classList.add('subcontainer');
        subcontainer.appendChild(yCoordinateLoader());
        subcontainer.appendChild(boardLoader(board, "player"));
        container.appendChild(xCoordinateLoader());
        container.appendChild(subcontainer);
    return container;
}
function aiCoordinatedBoardLoader(board) {
    let container = document.createElement('div');
    container.classList.add('singleBoardContainer')
    let subcontainer = document.createElement('div');
    subcontainer.classList.add('subcontainer');
        subcontainer.appendChild(yCoordinateLoader());
        subcontainer.appendChild(boardLoader(board));
        container.appendChild(xCoordinateLoader());
        container.appendChild(subcontainer);
    return container;
}
function twoBoardContentGenerator(playerBoard, opponentBoard) {
    let container = document.createElement('div');
    container.classList.add('doubleBoardContainer');
    container.appendChild(playerCoordinatedBoardLoader(playerBoard));
    container.appendChild(aiCoordinatedBoardLoader(opponentBoard));
    return container;
}
function twoBoardDOMLoader(playerBoard, opponentBoard) {
    let container = document.getElementById('container');
    container.appendChild(twoBoardContentGenerator(playerBoard, opponentBoard)); 
}
function scoreKeeperGenerator(player, input) {
    let container = document.createElement('div');
    container.classList.add('singleBoardScoreContainer')
    let label = document.createElement('h2');
    let score = document.createElement('h2');
    label.textContent = player + " Score: "
    container.appendChild(label);
    container.appendChild(score);
    score.textContent = input + "/5";
    return container
}
function doubleScoreKeeperGenerator(player1, input1, player2, input2) {
    let scoreContainer = document.createElement('div');
    scoreContainer.classList.add('scoreKeeperContainer');
    scoreContainer.appendChild(scoreKeeperGenerator(player1, input1));
    scoreContainer.appendChild(scoreKeeperGenerator(player2, input2));
    let container = document.getElementById('container');
    container.prepend(scoreContainer)
}
function announceWinnerCard(text) {
    let card = document.createElement('div');
    card.classList.add('winnerCard');
    card.appendChild(announceWinnerText(text));
    card.appendChild(restartGameButton());
    container.firstChild.appendChild(card);
}
function announceWinnerText(text) {
    let announcement = document.createElement('h1');
    announcement.classList.add('winnerAnnouncementText');
    announcement.textContent = text;
    return announcement;
}
function restartGameButton() {
    let button = document.createElement('button');
    button.textContent = "Restart Game";
    button.classList.add("placementButton");
    button.addEventListener('click', restartBoard)
    return button;
}



class gameBoardLoader {
    constructor(playerBoard, player, aiBoard, ai) {
        this.playerBoard = playerBoard;
        this.player = player;
        this.aiBoard = aiBoard;
        this.ai = ai
    }
    reloadBoards() {
        this.playerBoard = new Gameboard();
        this.aiBoard = new Gameboard();
        let container = document.getElementById('container');
        container.removeChild(container.firstChild.nextSibling);
        twoBoardDOMLoader(this.playerBoard, this.aiBoard);
    }
    populatePlayer(size, x, y, direction) {
        this.playerBoard.populateShip(size, x, y, direction);
        let container = document.getElementById('container');
        container.removeChild(container.firstChild.nextSibling);
        twoBoardDOMLoader(this.playerBoard, this.aiBoard);
    }
    depopulatePlayer(size, x, y, direction) {
        this.playerBoard.depopulateShip(size, x, y, direction);
        let container = document.getElementById('container');
        container.removeChild(container.firstChild.nextSibling);
        twoBoardDOMLoader(this.playerBoard, this.aiBoard);
    }
    simplePopulate() {
        this.playerBoard.populateShip(2, 'I', 4, "east");
        this.playerBoard.populateShip(4, 'C', 5, "east");
        this.playerBoard.populateShip(3, 'J', 6, "south");
        this.playerBoard.populateShip(3, 'B', 8, "south");
        this.playerBoard.populateShip(2, 'E', 9, "east");
        let container = document.getElementById('container');
        container.removeChild(container.firstChild.nextSibling);
        twoBoardDOMLoader(this.playerBoard, this.aiBoard);
    }
    attackAI(x, y) {
        this.aiBoard.receiveAttack(x, y);
        container.removeChild(container.firstChild.nextSibling);
        twoBoardDOMLoader(this.playerBoard, this.aiBoard);
        this.keepScore()
    }
    attackPlayer(x, y) {
        this.playerBoard.receiveAttack(x, y);
        container.removeChild(container.firstChild.nextSibling);
        twoBoardDOMLoader(this.playerBoard, this.aiBoard);
        this.keepScore()
    }
    produceArrayOfPlayerShips() {
        let playerShips = []
        this.playerBoard.grid.forEach((square) => {
            if (square.ship != null) {
                playerShips.push(square.ship);
            }
        })
        //playerShips contains duplicates of each ship, so I filter the array below
        let playerShipsFiltered = [];
        playerShips.forEach(ship => {
            if (!playerShipsFiltered.includes(ship)) {
                playerShipsFiltered.push(ship);
            }
        })
        return playerShipsFiltered;
    }
    produceArrayOfAiShips() {
        let aiShips = []
        this.aiBoard.grid.forEach((square) => {
            if (square.ship != null) {
                aiShips.push(square.ship);
            }
        })
        //playerShips contains duplicates of each ship, so I filter the array below
        let aiShipsFiltered = [];
        aiShips.forEach(ship => {
            if (!aiShipsFiltered.includes(ship)) {
                aiShipsFiltered.push(ship);
            }
        })
        return aiShipsFiltered;
    }
    keepScore() {
        let playerShips = this.produceArrayOfPlayerShips();
        let aiShips = this.produceArrayOfAiShips();
        let playerTally = 0
        let aiTally = 0
        playerShips.forEach((ship) => {
            if (ship.hits.length == ship.size) {
                playerTally += 1
            }
        })
        aiShips.forEach((ship) => {
            if (ship.hits.length == ship.size) {
                aiTally += 1;
            }
        });
        container.removeChild(container.firstChild);
        doubleScoreKeeperGenerator("Player", aiTally, "AI", playerTally);
        console.log("aiTally = " + aiTally);
        console.log("playerTally =" + playerTally);
        if (aiTally == 5) {
            announceWinnerCard("You win!");
        }
        if (playerTally == 5) {
            announceWinnerCard("AI wins!");
        }
        let aiSquares = document.querySelectorAll('.aiSquare');
        console.log(aiSquares);


        //construct a list of gameboard.grid ships
        //for any ship, if ship.hits == size, add +1 to score
        //input score in doubleScoreKeeperGenerator
    }
    copyAIgrid() {
        let array = this.aiBoard.grid.slice();
        return array;
    }
    randomParameterSelector(array, size) {
        let random = array[Math.floor(Math.random() * array.length)];
        let x = random.X;
        let y = random.Y;
        let index = array.indexOf(random);
        console.log(index);
        console.log(random);
        let direction = this.randomDirectionProducer();
        array.splice(index, 1);
        array.splice(index + 1, 1);
        array.splice(index - 1, 1);
        array.splice(index + 10, 1);
        array.splice(index - 10, 1);
        if (size > 1 && direction == "south") {
            array.splice(index + 2, 1);
        }
        if (size > 1 && direction == "north") {
            array.splice(index - 2, 1);
        }
        if (size > 1 && direction == "east") {
            array.splice(index + 20);
        }
        if (size > 1 && direction == "west") {
            array.splice(index - 20, 1);
        }
        if (size > 2 && direction == "south") {
            array.splice(index + 3, 1);
        }
        if (size > 2 && direction == "north") {
            array.splice(index - 3, 1);
        }
        if (size > 2 && direction == "east") {
            array.splice(index - 30, 1);
        }
        if (size > 2 && direction == "west") {
            array.splice(index + 30, 1);
        }
        if (this.aiBoard.populateShip(size, x, y, direction) == 'overflow!') {
            this.randomParameterSelector(array, size);
        }
        else {
            this.aiBoard.populateShip(size, x, y, direction);
        }
    }
    findAdjacentXCoordinates(x, y, array) {
        if (x == 'A') {
            let a = "overflow";
            let b = array.find(square => (square.X == 'B' && square.Y == y));
            return [a, b];
        }
        if (x == 'B') {
            let a = array.find(square => (square.X == 'A' && square.Y == y));
            let b = array.find(square => (square.X == 'C' && square.Y == y));
            return [a, b];
        }
        if (x == 'C') {
            let a = array.find(square => (square.X == 'B' && square.Y == y));
            let b = array.find(square => (square.X == 'D' && square.Y == y));
            return [a, b];
        }
        if (x == 'D') {
            let a = array.find(square => (square.X == 'C' && square.Y == y));
            let b = array.find(square => (square.X == 'E' && square.Y == y));
            return [a, b];
        }
        if (x == 'E') {
            let a = array.find(square => (square.X == 'D' && square.Y == y));
            let b = array.find(square => (square.X == 'F' && square.Y == y));
            return [a, b];
        }
        if (x == 'F') {
            let a = array.find(square => (square.X == 'E' && square.Y == y));
            let b = array.find(square => (square.X == 'G' && square.Y == y));
            return [a, b];
        }
        if (x == 'G') {
            let a = array.find(square => (square.X == 'F' && square.Y == y));
            let b = array.find(square => (square.X == 'H' && square.Y == y));
            return [a, b];
        }
        if (x == 'H') {
            let a = array.find(square => (square.X == 'G' && square.Y == y));
            let b = array.find(square => (square.X == 'I' && square.Y == y));
            return [a, b];
        }
        if (x == 'I') {
            let a = array.find(square => (square.X == 'H' && square.Y == y));
            let b = array.find(square => (square.X == 'J' && square.Y == y));
            return [a, b];
        }
        if (x == 'J') {
            let a = array.find(square => (square.X == 'I' && square.Y == y));
            let b = "overflow";
            return [a, b];
        }
    }
    randomDirectionProducer() {
        let num = Math.random();
        if (num >= .75) { return "east" }
        if (num <= .25) {return "west"}
        if (num > .25 && num < .5) { return "south" }
        else { return "north" }
    }
    simplePopulateAI() {
        let array = this.copyAIgrid();
        this.randomParameterSelector(array, 2);
        console.log(array);
        this.randomParameterSelector(array, 2);
        console.log(array);
        this.randomParameterSelector(array, 3);
        console.log(array);
        this.randomParameterSelector(array, 3);
        console.log(array);
        this.randomParameterSelector(array, 4);
        console.log(array);
        let container = document.getElementById('container');
        container.removeChild(container.firstChild.nextSibling);
        twoBoardDOMLoader(this.playerBoard, this.aiBoard);
    }
}

//suite for loading carrier placement module before game begins

let placementContainer = document.createElement('div');
placementContainer.classList.add('placement-module-container');
placementContainer.setAttribute('id', 'placementContainer');
let placementBoard = new Gameboard();
let shipCount = [];
function placementModuleLoader() {
    placementContainer.appendChild(topTextLoader());
    placementContainer.appendChild(placementModuleMiddleSubContainerLoader());
    placementContainer.appendChild(bottomSubcontainerLoader());
    document.body.appendChild(placementContainer);
}
function topTextLoader() {
    let container = document.createElement('div');
    container.classList.add('placementTextBox');
    container.appendChild(topTextContentLoader('Place Your Ships!'))
    return container;
};
function topTextContentLoader(text) {
    let h = document.createElement('h1');
    h.classList.add('placementTextContent');
    h.setAttribute('id', 'placementHeading');
    h.textContent = text;
    return h;
}
function placementModuleMiddleSubContainerLoader() {
    let container = document.createElement('div');
    container.classList.add('middleSubcontainer')
    container.appendChild(placementBoardLoader());
    container.appendChild(rightInfoLoader());
    return container;
}
function rightInfoLoader() {
    let container = document.createElement('div');
    container.classList.add('rightInfoSubcontainer');
    container.appendChild(buttonsIntegrator());
    container.appendChild(textBoxLoader());
    return container
};
function buttonsIntegrator() {
    let container = document.createElement('div');
    container.classList.add('rightInfoButtonsContainer')
    container.appendChild(resetShipBtnLoader());
    container.appendChild(beginGameBtnLoader());
    return container;
}
function resetShipBtnLoader() {
    let resetShipBtn = document.createElement('button');
    resetShipBtn.classList.add('placementButton');
    resetShipBtn.textContent = "Reset Ships";
    resetShipBtn.addEventListener('click', resetShips)
    return resetShipBtn;
};
function beginGameBtnLoader() {
    let beginBtn = document.createElement('button');
    beginBtn.classList.add('placementButton');
    beginBtn.textContent = "Begin Game";
    beginBtn.addEventListener('click', checkifShipsAreAllPlaced);
    return beginBtn;
};
function textBoxLoader() {
    let textBox = document.createElement('div');
    textBox.classList.add('placementInstructionBox');
    textBox.appendChild(textBoxHeadingLoader());
    textBox.appendChild(textBoxContentLoader("Place your ships by dragging them to your desired location."));
    textBox.appendChild(textBoxContentLoader("Click the Rotate button to change orientation of ships waiting to be placed."));
    textBox.appendChild(textBoxContentLoader("You can also rotate ships after placing them on the board by clicking on them."));
    textBox.appendChild(textBoxContentLoader("Once you have placed all five ships, press the Begin Game button to start."));
    return textBox;
}
function textBoxHeadingLoader() {
    let container = document.createElement('div');
    container.classList.add('headingContainer');
    let heading = document.createElement('h3');
    heading.textContent = "Instructions";
    container.appendChild(heading);
    return container;
}
function textBoxContentLoader(text) {
    let content = document.createElement('p');
    content.classList.add('instructionContent');
    content.textContent = text;
    return content;
}
function selectShipSquareLoader(coordinate) {
    let square = document.createElement('div');
    square.classList.add('square');
    if (coordinate.containsShip == true) {
        square.style.backgroundColor = "red";
        square.addEventListener('click', function () {
            let id = square.id;
            let data = id.split("");
            let startingSquare = placementBoard.grid.find(square => (square.X == data[0] && square.Y == data[1]));
            let size = startingSquare.ship.size;
            let x = startingSquare.ship.xStart;
            let y = startingSquare.ship.yStart;
            if (startingSquare.ship.direction == "east") {
                placementBoard.depopulateShip(size, x, y, "east");
                depopulatePlayer(size, x, y, "east");
                //write depopulate player function
                placementBoard.populateShip(size, x, y, "south");
                populatePlayer(size, x, y, "south");
            } else if (startingSquare.ship.direction == "south") {
                placementBoard.depopulateShip(size, x, y, "south");
                depopulatePlayer(size, x, y, "south");
                placementBoard.populateShip(size, x, y, "east");
                populatePlayer(size, x, y, "east");
            }
            removeAllChildNodes(placementContainer);
            document.body.removeChild(placementContainer);
            placementModuleLoader();
        })
    }
    square.setAttribute('id', coordinate.X + coordinate.Y);
    square.addEventListener("dragover", function (ev) {
        console.log("dragOver");
        ev.preventDefault();
    });
    square.addEventListener("drop", function (ev) {
        console.log("Drop");
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        let source = document.getElementById(data);
        let coordinate = ev.target.id;
        let size = data;
        let x = coordinate[0];
        let y = coordinate[1];
        if (coordinate[2] == 0) {
            let array = [coordinate[1], coordinate[2]]
            y = array.join('');
        }
        let startingSquare = placementBoard.grid.find(square => (square.X == x && square.Y == y));
        if (startingSquare.containsShip == true) {
            return
        }
        if (rotationTracker == 0) {
            populatePlayer(size, x, y, "east");
            placementBoard.populateShip(size, x, y, "east");
        } else {
            populatePlayer(size, x, y, "south");
            placementBoard.populateShip(size, x, y, "south");
        }
        removeAllChildNodes(placementContainer);
        document.body.removeChild(placementContainer);
        shipCount.push(size);
        placementModuleLoader();
    })
    return square;
}
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
function selectShipBoardLoader(board) {
    let arrayOfGridCoordinates = board.grid;
    let container = document.createElement('div');
    container.classList.add('grid-container');
    arrayOfGridCoordinates.forEach((coordinate) => {
        let square = selectShipSquareLoader(coordinate);
        container.appendChild(square);
    })
    return container;
};
function selectShipPlayerCoordinatedBoardLoader(board) {
    let container = document.createElement('div');
    container.classList.add('singleBoardContainer')
    let subcontainer = document.createElement('div');
    subcontainer.classList.add('subcontainer');
        subcontainer.appendChild(yCoordinateLoader());
        subcontainer.appendChild(selectShipBoardLoader(board));
        container.appendChild(xCoordinateLoader());
        container.appendChild(subcontainer);
    return container;
};
function placementBoardLoader() {
    return selectShipPlayerCoordinatedBoardLoader(placementBoard);
};
const source = "";
function rotateShipButtonLoader() {
    let button = document.createElement('button');
    button.textContent = "Rotate";
    button.classList.add('placementButton');
    button.setAttribute('id', 'rotateShipButton');
    button.addEventListener('click', () => {
        rotateOnClick()
    });
    return button;
}
function rotateOnClick() {
    //let classContainers = document.querySelectorAll("div.singleShipClassContainer");
    let individualShipContainers = document.querySelectorAll("div.ship");
    individualShipContainers.forEach(function (node) {
        if (node.style.flexDirection == "column") { node.style.flexDirection = "row"; rotationTracker = 0; }
        else { node.style.flexDirection = "column"; rotationTracker = 1; }
    });
    //classContainers.forEach(function (node) {
        //if (rotationTracker == 1) { node.style.flexDirection = "row"; }
        //else { node.style.flexDirection = "column"; }
    //})
    checkClassContainerOrientation();
}
//this function checks whether to arrange ships in rows or columns within their class containers
function checkClassContainerOrientation() {
    let classContainers = document.querySelectorAll("div.singleShipClassContainer");
    classContainers.forEach(function (node) {
        if (rotationTracker == 1) { node.style.flexDirection = "row"; }
        else { node.style.flexDirection = "column"; }
    });
}
//This rotationTracker tells the shipMaker() whether to position ships vertically or horizontally.
    //0 commands shipMaker() to position ships horizontally, 1 vertically.
    //It tracks whether / when rotateOnClick() has rotated ships vertically or horizontally.
let rotationTracker = 0;
function shipMaker(size) {
    let container = document.createElement('div');
    container.classList.add('ship');
    container.setAttribute('draggable', 'true');
    container.setAttribute('id', size);
    if (rotationTracker == 1) {
        container.style.flexDirection = "column";
    }
    if (rotationTracker == 0) {
        container.style.flexDirection = "row";
    }
    while (size >= 1) {
        let square = document.createElement('div');
        square.classList.add('placementSquare');
        container.appendChild(square);
        size = size - 1;
    }
    container.addEventListener('dragstart', transferDataOnDragstart);
    return container;
}
function transferDataOnDragstart(ev) {
     // Change the source element's background color
        // to show that drag has started
        ev.currentTarget.classList.add("dragging");
        // Clear the drag data cache (for all formats/types)
        ev.dataTransfer.clearData();
        ev.dataTransfer.setData("text/plain", ev.target.id);
        const data = ev.dataTransfer.getData("text");
        source = document.getElementById(data);
        ev.currentTarget.removeEventListener("dragend", transferDataOnDragstart);
}
function bottomSubcontainerLoader() {
    let container = document.createElement('div');
    container.classList.add('bottomSubcontainer');
    container.appendChild(rotateShipButtonLoader());
    container.appendChild(shipCounter());
    return container;
}
function shipCounter() {
    let shipContainer = document.createElement('div');
    shipContainer.classList.add('shipAllClassesContainer');
    let sizeTwo = document.createElement('div');
    sizeTwo.classList.add('singleShipClassContainer');
    let sizeThree = document.createElement('div');
    sizeThree.classList.add('singleShipClassContainer');
    let sizeFour = document.createElement('div');
    sizeFour.classList.add('singleShipClassContainer');
    if (rotationTracker == 1) {
        sizeTwo.style.flexDirection = "row";
        sizeThree.style.flexDirection = "row";
        sizeFour.style.flexDirection = "row";
    }
    if (shipCount.filter(x => x == 2).length == 0) {
        sizeTwo.appendChild(shipMaker(2));
        sizeTwo.appendChild(shipMaker(2));
        shipContainer.appendChild(sizeTwo);
    }
    else if (shipCount.filter(x => x == 2).length == 1) {
        sizeTwo.appendChild(shipMaker(2));
        shipContainer.appendChild(sizeTwo);
    }
    if (shipCount.filter(x => x == 3).length == 0) {
        sizeThree.appendChild(shipMaker(3));
        sizeThree.appendChild(shipMaker(3));
        shipContainer.appendChild(sizeThree);
    } else if (shipCount.filter(x => x == 3).length == 1) {
        sizeThree.appendChild(shipMaker(3));
        shipContainer.appendChild(sizeThree);
    }
    if (shipCount.filter(x => x == 4).length == 0) {
        sizeFour.appendChild(shipMaker(4));
        shipContainer.appendChild(sizeFour);
    }
    return shipContainer;
}
function checkifShipsAreAllPlaced() {
    if (shipCount.length == 5) {
        simplePopulateAI();
        removeAllChildNodes(placementContainer);
        document.body.removeChild(placementContainer);
    }
    else {
        let h = document.getElementById('placementHeading');
        h.textContent = "Place All Ships Before Starting the Game!"
        h.style.color = "#ef4444";
    }
}
function resetShips() {
    placementBoard = new Gameboard();
    clearShipCount();
    removeAllChildNodes(placementContainer);
    document.body.removeChild(placementContainer);
    reloadBoards();
    placementModuleLoader();
}
function clearShipCount() {
    while (shipCount.length >= 1) {
        shipCount.pop();
    }
}


let playerBoard = new Gameboard();
let aiBoard = new Gameboard();
let player = "taylor"
let ai = "computer"
let boards = new gameBoardLoader(playerBoard, player, aiBoard, ai);

function loadBoards() {
    twoBoardDOMLoader(boards.playerBoard, boards.aiBoard);
    doubleScoreKeeperGenerator("Player", 0, "AI", 0);
}

const playerPopulateButton = document.createElement('button');
playerPopulateButton.addEventListener('click', simplePopulate);
playerPopulateButton.classList.add('populateButton');
playerPopulateButton.textContent = "Populate Player";
const aiPopulateButton = document.createElement('button');
aiPopulateButton.addEventListener('click', simplePopulateAI);
aiPopulateButton.classList.add('populateButton');
aiPopulateButton.textContent = "Populate AI";
const attackAIButton = document.createElement('button');
attackAIButton.addEventListener('click', attackAI);
attackAIButton.classList.add('populateButton');
attackAIButton.textContent = "Attack AI";
const attackPlayerButton = document.createElement('button');
attackPlayerButton.addEventListener('click', attackPlayer);
attackPlayerButton.classList.add('populateButton');
attackPlayerButton.textContent = "Attack Player"

function restartBoard() {
    let container = document.getElementById('container');
    removeAllChildNodes(container);
    generateHUD();
    resetShips();
}
function generateHUD() {
    playerBoard = new Gameboard();
    aiBoard = new Gameboard();
    player = "taylor";
    ai = "computer";
    doubleScoreKeeperGenerator("Player", 0, "AI", 0);
    twoBoardDOMLoader(boards.playerBoard, boards.aiBoard);
    placementModuleLoader();
}
function generateButtons() {
    let container = document.createElement('div');
    container.classList.add('buttonContainer');
    container.appendChild(playerPopulateButton);
    container.appendChild(aiPopulateButton);
    container.appendChild(attackPlayerButton);
    container.appendChild(attackAIButton);
    return container;
}
    function simplePopulate() {
        boards.simplePopulate();
    }
    function simplePopulateAI() {
        boards.simplePopulateAI();
    }
function populatePlayer(size, x, y, direction) {
    boards.populatePlayer(size, x, y, direction);
};
function depopulatePlayer(size, x, y, direction) {
    boards.depopulatePlayer(size, x, y, direction);
}
//this function is used with the ship placement module
    //whenever you reset ship placement, you also need to reload player & ai boards
    //to delete any ships placed during prior ship placement phase
function reloadBoards() {
    boards.reloadBoards();
}


//aiArray below contains globally available copy of playerBoard grid, for use by AI
//every time the AI attacks player, selects one element at random from the array and then removes it
//so that future invocations cannot attack the same location
const aiArray = boards.playerBoard.grid.slice();
function attackAI(x, y) {
    let found = boards.aiBoard.grid.find(square => (square.X == x && square.Y == y));
    if (found.isHit == true) { alert("You have already attacked that square! Try another.") }
    if (found.isHit == false) {
        let index = boards.aiBoard.grid.indexOf(found);
        aiArray.splice(index, 1);
        boards.attackAI(x, y);
        setTimeout(() => {
            attackPlayer();
        }, "500");
    }
}

//playerArray below contains globally available copy of playerBoard grid, for use by AI
//every time the AI attacks player, selects one element at random from the array and then removes it
//so that future invocations cannot attack the same location
const playerArray = boards.playerBoard.grid.slice();
function attackPlayer() {
    if (playerArray.length == 0) return alert('game over!')
    let random = playerArray[Math.floor(Math.random() * playerArray.length)];
    let x = random.X;
    let y = random.Y;
    let index = playerArray.indexOf(random);
    playerArray.splice(index, 1);
    boards.attackPlayer(x, y);
}
//scripting forms for inputting coordinates
let xLabel = document.createElement('label');
xLabel.classList.add('attackLabel');
xLabel.textContent = "Input X Coordinate: "
let xInput = document.createElement('input');
xInput.setAttribute("type", "text");
let yLabel = document.createElement('label');
yLabel.classList.add('attackLabel');
yLabel.textContent = "Input Y Coordinate: "
let yInput = document.createElement('input');
yInput.setAttribute("type", "text");

function returnXForm() {
    let container = document.createElement('div');
    container.classList.add('formContainer')
    container.appendChild(xLabel);
    container.appendChild(xInput);
    return container
}
function returnYForm() {
    let container = document.createElement('div');
    container.classList.add('formContainer')
    container.appendChild(yLabel);
    container.appendChild(yInput);
    return container
}
function generateForm() {
    let container = document.createElement('div');
    container.classList.add('formContainer')
    container.appendChild(returnXForm());
    container.appendChild(returnYForm());
    return container
}

function loadAppWindow() {
    let container = document.createElement('div');
    container.setAttribute('id', 'container');
    placementModuleLoader();
    loadBoards();
    return container;
}



/***/ }),

/***/ "./src/site-contents/header.js":
/*!*************************************!*\
  !*** ./src/site-contents/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerLoader": () => (/* binding */ headerLoader)
/* harmony export */ });
/* harmony import */ var _modules_javascript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/javascript.js */ "./src/site-contents/modules/javascript.js");
/* harmony import */ var _modules_whoIAm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/whoIAm.js */ "./src/site-contents/modules/whoIAm.js");



function headerLoader() {
    let container = document.createElement('div');
    container.setAttribute('id', 'header');
    container.appendChild(myName('Taylor Barinka'));
    container.appendChild(myLinks());
    return container;
}
function myName(name) {
    let myName = document.createElement('h1');
    myName.textContent = name;
    return myName;
}
function myLinks() {
    let navBar = document.createElement('div');
    navBar.setAttribute('id', 'nav');
    let list = document.createElement('ul');
    list.setAttribute('id', 'linksList');
    list.appendChild(linkFactory('Who I Am', _modules_whoIAm_js__WEBPACK_IMPORTED_MODULE_1__.homePageLoader));
    list.appendChild(linkFactory('Front-End Development', _modules_javascript_js__WEBPACK_IMPORTED_MODULE_0__.jsPageLoader));
    list.appendChild(linkFactory('Philosophy'));
    list.appendChild(linkFactory('Teaching'));
    list.appendChild(linkFactory('Games Writing'));
    navBar.appendChild(list);
    return navBar;
}
    //Note to self: add 'link' as paramter to linkFactory when ready to implement links
function linkFactory(text, cb = null) {
    let listItem = document.createElement('li');
    let myLink = document.createElement('h4');
    myLink.innerHTML = text;
    if (cb !== null) {
        myLink.addEventListener('click', cb);
    } 
    listItem.appendChild(myLink);
    return listItem;
}



/***/ }),

/***/ "./src/site-contents/modules/javascript.js":
/*!*************************************************!*\
  !*** ./src/site-contents/modules/javascript.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jsPageLoader": () => (/* binding */ jsPageLoader)
/* harmony export */ });
/* harmony import */ var _whoIAm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./whoIAm.js */ "./src/site-contents/modules/whoIAm.js");
/* harmony import */ var _profile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.js */ "./src/site-contents/profile.js");
/* harmony import */ var _weather_app_src_domLogic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather-app/src/domLogic.js */ "./src/site-contents/weather-app/src/domLogic.js");
/* harmony import */ var _battleship_app_personal_website_initializer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../battleship-app/personal-website-initializer.js */ "./src/site-contents/battleship-app/personal-website-initializer.js");





function openAppButtonCreator(text, cb) {
    let button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', cb);
    button.classList.add('openAppButtons');
    return button;
}
function appendWeatherApp() {
    document.body.appendChild((0,_weather_app_src_domLogic_js__WEBPACK_IMPORTED_MODULE_2__.loadWeatherApp)());
}
function appendBattleship() {
    let container = document.createElement('div');
    container.setAttribute('id', 'container');
    document.body.appendChild(container);
    (0,_battleship_app_personal_website_initializer_js__WEBPACK_IMPORTED_MODULE_3__.loadAppWindow)()
}
function OpenAppButtonContainerCreator() {
    let buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'appButtonContainer')
    buttonContainer.appendChild(openAppButtonCreator("Weather App", appendWeatherApp));
    buttonContainer.appendChild(openAppButtonCreator("Battleship", appendBattleship))
    return buttonContainer;
}

function jsMainContentLoader() {
    let p1 = (0,_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__.paragraphFactory)("I am a front-end web developer proficient in HTML, CSS, and JavaScript. I taught myself how to use these tools with an excellent <a href='https://www.theodinproject.com/dashboard'> open source course</a>, and I’m in the process of achieving proficiency in development on the back end.");
    let p2 = (0,_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__.paragraphFactory)("I am attracted to coding for a couple of reasons. First, I like the idea of being a kind of craftsperson who can make things that people need. It’s honest work. But I also find that there is an artistry to coding which is a pleasure in itself – the process of identifying a desired result and engineering logical structures sufficient to achieve the result gives me creative satisfaction. It hits a perfect intersection between where I can be useful and what I can enjoy.")
    let p3 = (0,_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__.paragraphFactory)("Here are a few projects that I have completed.")
    let p4 = (0,_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__.paragraphFactory)("<a href='http://individual.utoronto.ca/rbarney/Home.html'>This is the personal website</a> of a professional acquaintance whose content I was contracted to update and publish. This involved modifying an existing codebase and composing a set of instructions to help streamline the process of modifying future iterations of the site.");
    let p5 = (0,_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__.paragraphFactory)("Here are a few other projects that I've created. Select the one that you want to see.")
    
    let jsContent = (0,_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__.mainContentFactory)();
    jsContent.appendChild(p1);
    jsContent.appendChild(p2);
    jsContent.appendChild(p3);
    jsContent.appendChild(p4);
    jsContent.appendChild(p5);
    jsContent.appendChild(OpenAppButtonContainerCreator());
    return jsContent;
}

function jsPageLoader() {
    let container = document.getElementById('mainContainer');
    (0,_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(container);
    let jsBox = (0,_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__.contentBoxFactory)("Web Development", jsMainContentLoader());
    container.appendChild((0,_profile_js__WEBPACK_IMPORTED_MODULE_1__.profileLoader)());
    container.appendChild((0,_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__.mainContent)(jsBox));
}



/***/ }),

/***/ "./src/site-contents/modules/philosophy.js":
/*!*************************************************!*\
  !*** ./src/site-contents/modules/philosophy.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "philosophyBox": () => (/* binding */ philosophyBox)
/* harmony export */ });
/* harmony import */ var _whoIAm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./whoIAm.js */ "./src/site-contents/modules/whoIAm.js");


let philPara1 = (0,_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__.paragraphFactory)("I did six years of graduate work in Philosophy at the Universities of Oxford and Toronto. My area of expertise is Ancient Greek and Roman Philosophy, and my inquiries typically seek to understand what ancient philosophers thought was the origin and nature of objective values.");
let philPara2 = (0,_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__.paragraphFactory)("You can find a sample my research here. This essay, which I presented at the Rackham Interdisciplinary Workshop in Ancient Philosophy at the University of Michigan, describes the relationship between Plato's theory of virtue, and his conception of divine law. Plato, I argue, defended the view that God's law governs virtuous conduct. It's a simple argument, but it contradicts prevailing orthodoxy in scholarship on Ancient Greek Philosophy, which holds that divine law theories of ethics first originate with the Stoics. But Plato writes in an earlier century.")
let philPara3 = (0,_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__.paragraphFactory)("My other main area of interest is the history of philosophical theories of beauty. Here is a link to a paper where I investigate Arthur Schopenhauer's understanding of what exactly human beings grasp with their minds when they grasp that something is beautiful. I like to think that Schopenhauer is close to the truth about this issue.")


let philContent = (0,_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__.mainContentFactory)();
philContent.appendChild(philPara1);
philContent.appendChild(philPara2);
philContent.appendChild(philPara3);

let philosophyBox = (0,_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__.contentBoxFactory)("Philosophy", philContent);



/***/ }),

/***/ "./src/site-contents/modules/whoIAm.js":
/*!*********************************************!*\
  !*** ./src/site-contents/modules/whoIAm.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentBoxFactory": () => (/* binding */ contentBoxFactory),
/* harmony export */   "homePageLoader": () => (/* binding */ homePageLoader),
/* harmony export */   "mainContent": () => (/* binding */ mainContent),
/* harmony export */   "mainContentFactory": () => (/* binding */ mainContentFactory),
/* harmony export */   "paragraphFactory": () => (/* binding */ paragraphFactory),
/* harmony export */   "removeAllChildNodes": () => (/* binding */ removeAllChildNodes)
/* harmony export */ });
/* harmony import */ var _profile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../profile.js */ "./src/site-contents/profile.js");
/* harmony import */ var _philosophy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./philosophy.js */ "./src/site-contents/modules/philosophy.js");


//import { jsBox } from './modules/javascript.js';

function homePageLoader() {
    let container = document.getElementById('mainContainer');
    removeAllChildNodes(container);
    container.appendChild((0,_profile_js__WEBPACK_IMPORTED_MODULE_0__.profileLoader)());
    container.appendChild(mainContent(whoIAm));
    return container;
}
function mainContent(node) {
    let container = document.createElement('div');
    container.appendChild(node);
    //container.appendChild(jsBox);
    //container.appendChild(philosophyBox);
    return container;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let whoIAmPara1 = paragraphFactory("At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.");
let whoIAm = contentBoxFactory("Who I Am", whoIAmPara1);


function headerFactory(header) {
    let h = document.createElement('h2');
    h.classList.add('contentHeader');
    h.textContent = header;
    return h;
}
function paragraphFactory(para) {
    let p = document.createElement('p');
    p.classList.add('contentParagraph');
    p.innerHTML = para;
    return p;
}
function mainContentFactory() {
    let div = document.createElement('div');
    div.classList.add('content');
    return div;
}
function contentBoxFactory(header, content) {
    let container = document.createElement('div');
    container.classList.add('contentBox');
    container.appendChild(headerFactory(header));
    container.appendChild(content);
    return container;
}



/***/ }),

/***/ "./src/site-contents/profile.js":
/*!**************************************!*\
  !*** ./src/site-contents/profile.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "profileLoader": () => (/* binding */ profileLoader)
/* harmony export */ });
/* harmony import */ var _tempImage_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempImage.jpg */ "./src/site-contents/tempImage.jpg");


function profileLoader() {
    let container = document.createElement('div');
    container.setAttribute('id', 'profile');
    container.appendChild(profilePhoto());
    container.appendChild(introduction());
    return container;
}
function profilePhoto() {
    let container = document.createElement('div');
    let profilePhoto = new Image();
    profilePhoto.src = _tempImage_jpg__WEBPACK_IMPORTED_MODULE_0__;
    profilePhoto.setAttribute('id', 'profilePhoto')
    container.appendChild(profilePhoto);
    return container;
}
function introduction() {
    let div = document.createElement('div');
    div.appendChild(myName());
    div.appendChild(myDescriptors());
    return div;
}
function myName() {
    let h = document.createElement('h2');
    h.textContent = "Taylor Barinka";
    h.setAttribute('id', 'profileName');
    return h;
}
function myDescriptors() {
    let p = document.createElement('p');
    p.textContent = "Researcher - Educator - Writer - Programmer."
    p.setAttribute('id', 'profileDescription')
    return p;
}


/***/ }),

/***/ "./src/site-contents/weather-app/src/apiLogic.js":
/*!*******************************************************!*\
  !*** ./src/site-contents/weather-app/src/apiLogic.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitRequest": () => (/* binding */ submitRequest),
/* harmony export */   "weatherDataArray": () => (/* binding */ weatherDataArray)
/* harmony export */ });
//array to store weather info when fetched & processed
let weatherDataArray = [];

//try-catch block to submit & process user request for weather info
async function submitRequest(searchInput) {
    try {
        const data = await getData(searchInput);
        console.log(data);
        //console.log(data.weather[0]);
        weatherDataArray = await processData(data);
        console.log(weatherDataArray);
        return weatherDataArray;
        
    } catch (error) {
        alert("Invalid City Name");
    }
} 

async function getData(city) {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=c6f5ef225ad9780dc5cf3732adc63d81', {
        mode: 'cors'
    });
    const data = await response.json();
    return data;
};
function processData(data) {
    let cityName = data.name;
    let temp = data.main.temp;
    let tempFeel = data.main.feels_like;
    let skyCover = data.weather[0]['description'];
    let windSpeed = data.wind.speed;
    let humidity = data.main.humidity;
    let weatherData = [cityName, temp, tempFeel, skyCover, windSpeed, humidity];
    return weatherData;
}



/***/ }),

/***/ "./src/site-contents/weather-app/src/domLogic.js":
/*!*******************************************************!*\
  !*** ./src/site-contents/weather-app/src/domLogic.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadSearchToDOM": () => (/* binding */ loadSearchToDOM),
/* harmony export */   "loadWeatherApp": () => (/* binding */ loadWeatherApp),
/* harmony export */   "weatherAppContentLoader": () => (/* binding */ weatherAppContentLoader)
/* harmony export */ });
/* harmony import */ var _apiLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiLogic.js */ "./src/site-contents/weather-app/src/apiLogic.js");
/* harmony import */ var _images_icon2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icon2.png */ "./src/site-contents/weather-app/src/images/icon2.png");



const myIcon = new Image();
myIcon.src = _images_icon2_png__WEBPACK_IMPORTED_MODULE_1__;
myIcon.setAttribute('id', 'weatherIcon');


function loadWeatherApp() {
    let wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'weatherWrapper');
    wrapper.appendChild(appHeaderLoader());
    wrapper.appendChild(weatherAppContentLoader());
    return wrapper;
}

function appHeaderLoader() {
    let container = document.createElement('div');
    container.setAttribute('id', 'weatherHeader');
    container.appendChild(headerContent());
    container.appendChild(removeAppBtn());
    return container;
}
function headerContent() {
    let container = document.createElement('div');
    container.setAttribute('id', 'weatherHeaderLogo');
    container.appendChild(myIcon);
    let h1 = document.createElement('h1');
    h1.textContent = 'Weather App';
    container.appendChild(h1);
    return container;
}
function removeAppBtn() {
    let btn = document.createElement('button');
    btn.textContent = "x";
    btn.setAttribute('id', 'removeWeatherAppBtn');
    btn.addEventListener('click', removeApp)
    return btn;
}
function removeApp() {
    let app = document.getElementById('weatherWrapper');
    while( app.hasChildNodes() ){
    app.removeChild(app.lastChild);
    }
    app.remove();
}
//creating searchDisplay outside of weatherAppContentLoader() so it can be accessible to loadSearchToDom()
let searchDisplay = document.createElement('div');
searchDisplay.setAttribute('id', 'searchDisplay');
function weatherAppContentLoader() {
    let container = interfaceContainerLoader();
    container.appendChild(weatherFormLoader());
    container.appendChild(searchDisplay);
    return container;
}

function interfaceContainerLoader() {
    let div = document.createElement('div');
    div.setAttribute('id', 'weatherContent');
    return div;
}
function weatherFormLoader() {
    let form = document.createElement('form');
    form.setAttribute('id', 'form');
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'weatherInput');
    input.setAttribute('placeholder', 'City Name');
    let button = document.createElement('button');
    //button.setAttribute('type', 'submit');
    button.setAttribute('id', 'weatherBtn');
    button.textContent = "Search";
    form.appendChild(input);
    form.appendChild(button);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let val = document.getElementsByTagName("input")[0].value;
        (0,_apiLogic__WEBPACK_IMPORTED_MODULE_0__.submitRequest)(val).then(loadSearchToDOM);  
    });
    return form;
}


let searchResultContainer = document.createElement('div');
searchResultContainer.classList.add('searchResultContainer');
let city = document.createElement('h2');
let temp = document.createElement('p');
    temp.classList.add('p-info');
    temp.setAttribute('id', 'temp');
let tempFeel = document.createElement('p');
    tempFeel.classList.add('p-info');
let skyCover = document.createElement('p');
    skyCover.classList.add('p-info');
let windSpeed = document.createElement('p');
    windSpeed.classList.add('p-info');
let humidity = document.createElement('p');
    humidity.classList.add('p-info');


function giveTextToElements(array) {
    let skyCoverText = array[3];
    skyCoverText = skyCoverText.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    console.log(skyCoverText);
    
    city.textContent = array[0];
    temp.textContent = array[1] + "°C";
    tempFeel.textContent = "Feels like: " + array[2]+ "°C";
    skyCover.textContent = "Sky Cover: " + skyCoverText;
    windSpeed.textContent = "Wind: " + array[4] + "  km/h";
    humidity.textContent = "Humidity: " + array[5] + "%"
}
async function loadSearchToDOM() {
    giveTextToElements(_apiLogic__WEBPACK_IMPORTED_MODULE_0__.weatherDataArray);
    searchResultContainer.appendChild(city);
    searchResultContainer.appendChild(temp);
    searchResultContainer.appendChild(tempFeel);
    searchResultContainer.appendChild(skyCover);
    searchResultContainer.appendChild(windSpeed);
    searchResultContainer.appendChild(humidity);
    searchDisplay.appendChild(searchResultContainer);
};



/***/ }),

/***/ "./src/site-contents/tempImage.jpg":
/*!*****************************************!*\
  !*** ./src/site-contents/tempImage.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "615de79f3979fc7ea775.jpg";

/***/ }),

/***/ "./src/site-contents/weather-app/src/images/icon2.png":
/*!************************************************************!*\
  !*** ./src/site-contents/weather-app/src/images/icon2.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a8a405822205a5f6974.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _site_contents_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-contents/header.js */ "./src/site-contents/header.js");
/* harmony import */ var _site_contents_modules_whoIAm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site-contents/modules/whoIAm.js */ "./src/site-contents/modules/whoIAm.js");





document.body.appendChild((0,_site_contents_header_js__WEBPACK_IMPORTED_MODULE_1__.headerLoader)());
document.body.appendChild((0,_site_contents_modules_whoIAm_js__WEBPACK_IMPORTED_MODULE_2__.homePageLoader)());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxX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NEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIseUJBQXlCO0FBQ3pCLHFDQUFxQztBQUNyQyxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGtDQUFrQztBQUN0RixlQUFlLHFDQUFxQztBQUNwRCxLQUFLO0FBQ0w7QUFDQSxzQ0FBc0M7QUFDdEMsaUJBQWlCO0FBQ2pCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsZUFBZTtBQUNmLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoZ0N1RDtBQUNGOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLDhEQUFjO0FBQzNELDBEQUEwRCxnRUFBWTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDd0g7QUFDMUU7QUFDa0I7QUFDa0I7O0FBRWxGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNEVBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOEZBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsNERBQWdCO0FBQzdCLGFBQWEsNERBQWdCO0FBQzdCLGFBQWEsNERBQWdCO0FBQzdCLGFBQWEsNERBQWdCO0FBQzdCLGFBQWEsNERBQWdCO0FBQzdCO0FBQ0Esb0JBQW9CLDhEQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLCtEQUFtQjtBQUN2QixnQkFBZ0IsNkRBQWlCO0FBQ2pDLDBCQUEwQiwwREFBYTtBQUN2QywwQkFBMEIsdURBQVc7QUFDckM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERzRjs7QUFFdEYsZ0JBQWdCLDREQUFnQjtBQUNoQyxnQkFBZ0IsNERBQWdCO0FBQ2hDLGdCQUFnQiw0REFBZ0I7OztBQUdoQyxrQkFBa0IsOERBQWtCO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNkRBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pTO0FBQ0U7QUFDaEQsV0FBVyxRQUFROztBQUVuQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMERBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkNBQUs7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDOEM7QUFDQTtBQUNSO0FBQ3RDO0FBQ0EsYUFBYSw4Q0FBSTtBQUNqQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQWE7QUFDckIsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVEQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQztBQUNVOzs7QUFHbkUsMEJBQTBCLHNFQUFZO0FBQ3RDLDBCQUEwQixnRkFBYyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vc3JjL3NpdGUtY29udGVudHMvYmF0dGxlc2hpcC1hcHAvcGVyc29uYWwtd2Vic2l0ZS1pbml0aWFsaXplci5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vc3JjL3NpdGUtY29udGVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvc2l0ZS1jb250ZW50cy9tb2R1bGVzL2phdmFzY3JpcHQuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9zaXRlLWNvbnRlbnRzL21vZHVsZXMvcGhpbG9zb3BoeS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vc3JjL3NpdGUtY29udGVudHMvbW9kdWxlcy93aG9JQW0uanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9zaXRlLWNvbnRlbnRzL3Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9zaXRlLWNvbnRlbnRzL3dlYXRoZXItYXBwL3NyYy9hcGlMb2dpYy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vc3JjL3NpdGUtY29udGVudHMvd2VhdGhlci1hcHAvc3JjL2RvbUxvZ2ljLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcXG59XFxuLyogc3R5bGVzIGZvciBoZWFkZXIgKi9cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbiNuYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG4jbGlua3NMaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4vKiBzdHlsZXMgZm9yIG1haW4gY29udGVudCAqL1xcbiNtYWluQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudEJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5ob21lUGFnZUxvYWRlciB7XFxuXFxufVxcblxcbi8qIHN0eWxlcyBmb3IgcHJvZmlsZSAqL1xcbiNwcm9maWxlIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3Byb2ZpbGVQaG90byB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxufVxcblxcbiNwcm9maWxlRGVzY3JpcHRpb24sICNwcm9maWxlTmFtZSB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIHN0eWxlcyBmb3IgUGhpbG9zb3BoeSAqL1xcblxcbiNpdGFsaWMge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qIHN0eWxlcyBmb3IgSlMgcG9ydGZvbGlvICovXFxuI2FwcEJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuLm9wZW5BcHBCdXR0b25zIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogc3R5bGVzIGZvciB3ZWF0aGVyIEFwcCAqL1xcblxcbiN3ZWF0aGVyV3JhcHBlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwcHg7XFxufVxcblxcbiN3ZWF0aGVySGVhZGVyLFxcbiN3ZWF0aGVyQ29udGVudCB7XFxuICAgIHdpZHRoOiAzOTBweDtcXG59XFxuXFxuI3dlYXRoZXJIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiN3ZWF0aGVySWNvbiB7XFxuICAgIGhlaWdodDogNDNweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxufVxcblxcbiN3ZWF0aGVySGVhZGVyTG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNyZW1vdmVXZWF0aGVyQXBwQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNTVweDtcXG4gICAgYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XFxufVxcblxcbiN3ZWF0aGVyQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5M2M1ZmQ7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbiN3ZWF0aGVyQ29udGVudD5kaXYge1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogNyU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN3ZWF0aGVyQnRuLFxcbiN3ZWF0aGVySW5wdXQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAzN3B4O1xcbn1cXG4jd2VhdGhlckJ0biB7XFxuICAgIGhlaWdodDogMzdweDtcXG59XFxuXFxuI3dlYXRoZXJCdG4ge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbiNmb3JtIHtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoUmVzdWx0Q29udGFpbmVyIHtcXG4gICAgLypwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTc1cHg7Ki9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gICAgd2lkdGg6IDMzMHB4O1xcbiAgICBoZWlnaHQ6IDI4NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogIzkzYzVmZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoUmVzdWx0Q29udGFpbmVyPmgyIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIGNvbG9yOiAjY2JkNWUxO1xcbn1cXG5cXG4jdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ucC1pbmZvIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi8qc3R5bGVzIGZvciBiYXR0bGVzaGlwKi9cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkM2QxO1xcblxcbn1cXG5cXG4jYmF0dGxlU2hpcENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLypzdHlsZXMgZm9yIHRoZSBwbGFjZW1lbnQgbW9kdWxlICovXFxuLnBsYWNlbWVudC1tb2R1bGUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiA2NjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHgsIHJnYig1MSwgNTEsIDUxKSAwcHggMHB4IDBweCAzcHg7XFxufVxcblxcbi5wbGFjZW1lbnRUZXh0Qm94IHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IC0xMXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xcbn1cXG5cXG4ucGxhY2VtZW50VGV4dENvbnRlbnQge1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMnB4IDJweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogIzIyZDNlZTtcXG59XFxuXFxuLm1pZGRsZVN1YmNvbnRhaW5lcixcXG4ucmlnaHRJbmZvU3ViY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm1pZGRsZVN1YmNvbnRhaW5lciB7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLnJpZ2h0SW5mb1N1YmNvbnRhaW5lciB7XFxuICAgIGdhcDogMjVweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0SW5mb0J1dHRvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmJvdHRvbVN1YmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNTVweDtcXG4gICAgaGVpZ2h0OiAyNSU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuXFxufVxcblxcbi5wbGFjZW1lbnRJbnN0cnVjdGlvbkJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQzZDE7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHgsIHJnYig1MSwgNTEsIDUxKSAwcHggMHB4IDBweCAzcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmhlYWRpbmdDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxufVxcblxcbi5zaGlwQWxsQ2xhc3Nlc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwKTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuXFxufVxcblxcbi5zaW5nbGVTaGlwQ2xhc3NDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbi5zaGlwQWx0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMnB4O1xcbn1cXG5cXG4vKnN0eWxlcyBmb3IgdGhlIHR3byBncmlkcyBhbmQgY29vcmRpbmF0ZXMgKi9cXG4uZG91YmxlQm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE3NXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2luZ2xlQm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ueENvb3JkaW5hdGVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbn1cXG5cXG4ueUNvb3JkaW5hdGVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmxlZnRTcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnRTcXVhcmUsXFxuLnVwcGVyU3F1YXJlIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdWJjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucGxhY2VtZW50U3F1YXJlIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3F1YXJlLFxcbi5haVNxdWFyZSB7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNxdWFyZTpob3ZlcixcXG4uYWlTcXVhcmU6aG92ZXIsXFxuLnBsYWNlbWVudFNxdWFyZTpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG59XFxuXFxuLnNxdWFyZUNvbnRhaW5lciB7fVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDM1cHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzVweCk7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogMXB4O1xcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIHNjb3JlIGNhcmQgKi9cXG4uc2luZ2xlQm9hcmRTY29yZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxufVxcblxcbi8qc3R5bGVzIGZvciBnYW1lIGNvbnRyb2xsZXIgaHVkKi9cXG4uc2NvcmVLZWVwZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDM5MHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogIzIyZDNlZSAycHggMnB4O1xcblxcbn1cXG5cXG4ucGxhY2VtZW50QnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmQzZWU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7XFxufVxcblxcbi5idXR0b25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ud2lubmVyQ2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHgsIHJnYig1MSwgNTEsIDUxKSAwcHggMHB4IDBweCAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMTBweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDI3NnB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53aW5uZXJBbm5vdW5jZW1lbnQge1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSTtBQUNKO0FBQ0Esc0JBQXNCO0FBQ3RCO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjtBQUNBLDRCQUE0QjtBQUM1QjtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFB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SGVsdmV0aWNhLCBzYW5zLXNlcmlmXFxufVxcbi8qIHN0eWxlcyBmb3IgaGVhZGVyICovXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4jbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuI2xpbmtzTGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLyogc3R5bGVzIGZvciBtYWluIGNvbnRlbnQgKi9cXG4jbWFpbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNvbnRlbnRCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaG9tZVBhZ2VMb2FkZXIge1xcblxcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIHByb2ZpbGUgKi9cXG4jcHJvZmlsZSB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNwcm9maWxlUGhvdG8ge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4jcHJvZmlsZURlc2NyaXB0aW9uLCAjcHJvZmlsZU5hbWUge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIFBoaWxvc29waHkgKi9cXG5cXG4jaXRhbGljIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIEpTIHBvcnRmb2xpbyAqL1xcbiNhcHBCdXR0b25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcbi5vcGVuQXBwQnV0dG9ucyB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogMTQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIHN0eWxlcyBmb3Igd2VhdGhlciBBcHAgKi9cXG5cXG4jd2VhdGhlcldyYXBwZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMHB4O1xcbn1cXG5cXG4jd2VhdGhlckhlYWRlcixcXG4jd2VhdGhlckNvbnRlbnQge1xcbiAgICB3aWR0aDogMzkwcHg7XFxufVxcblxcbiN3ZWF0aGVySGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jd2VhdGhlckljb24ge1xcbiAgICBoZWlnaHQ6IDQzcHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbiAgICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbn1cXG5cXG4jd2VhdGhlckhlYWRlckxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jcmVtb3ZlV2VhdGhlckFwcEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDU1cHg7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xcbn1cXG5cXG4jd2VhdGhlckNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNjNWZkO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4jd2VhdGhlckNvbnRlbnQ+ZGl2IHtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDclO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jd2VhdGhlckJ0bixcXG4jd2VhdGhlcklucHV0IHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGhlaWdodDogMzdweDtcXG59XFxuI3dlYXRoZXJCdG4ge1xcbiAgICBoZWlnaHQ6IDM3cHg7XFxufVxcblxcbiN3ZWF0aGVyQnRuIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jZm9ybSB7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNlYXJjaFJlc3VsdENvbnRhaW5lciB7XFxuICAgIC8qcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTE3NXB4OyovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxuICAgIHdpZHRoOiAzMzBweDtcXG4gICAgaGVpZ2h0OiAyODVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICM5M2M1ZmQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNlYXJjaFJlc3VsdENvbnRhaW5lcj5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICBjb2xvcjogI2NiZDVlMTtcXG59XFxuXFxuI3RlbXAge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLnAtaW5mbyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4vKnN0eWxlcyBmb3IgYmF0dGxlc2hpcCovXFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG5cXG59XFxuXFxuI2JhdHRsZVNoaXBDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qc3R5bGVzIGZvciB0aGUgcGxhY2VtZW50IG1vZHVsZSAqL1xcbi5wbGFjZW1lbnQtbW9kdWxlLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMTBweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogNjYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4LCByZ2IoNTEsIDUxLCA1MSkgMHB4IDBweCAwcHggM3B4O1xcbn1cXG5cXG4ucGxhY2VtZW50VGV4dEJveCB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAtMTFweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjNweDtcXG59XFxuXFxuLnBsYWNlbWVudFRleHRDb250ZW50IHtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDJweCAycHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgY29sb3I6ICMyMmQzZWU7XFxufVxcblxcbi5taWRkbGVTdWJjb250YWluZXIsXFxuLnJpZ2h0SW5mb1N1YmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5taWRkbGVTdWJjb250YWluZXIge1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5yaWdodEluZm9TdWJjb250YWluZXIge1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yaWdodEluZm9CdXR0b25zQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5ib3R0b21TdWJjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDU1cHg7XFxuICAgIGhlaWdodDogMjUlO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcblxcbn1cXG5cXG4ucGxhY2VtZW50SW5zdHJ1Y3Rpb25Cb3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkM2QxO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4LCByZ2IoNTEsIDUxLCA1MSkgMHB4IDBweCAwcHggM3B4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5oZWFkaW5nQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xcbn1cXG5cXG4uc2hpcEFsbENsYXNzZXNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMCk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcblxcbn1cXG5cXG4uc2luZ2xlU2hpcENsYXNzQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXB4O1xcbn1cXG5cXG4uc2hpcEFsdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDJweDtcXG59XFxuXFxuLypzdHlsZXMgZm9yIHRoZSB0d28gZ3JpZHMgYW5kIGNvb3JkaW5hdGVzICovXFxuLmRvdWJsZUJvYXJkQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNzVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNpbmdsZUJvYXJkQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnhDb29yZGluYXRlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcXG59XFxuXFxuLnlDb29yZGluYXRlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5sZWZ0U3F1YXJlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0U3F1YXJlLFxcbi51cHBlclNxdWFyZSB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc3ViY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnBsYWNlbWVudFNxdWFyZSB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNxdWFyZSxcXG4uYWlTcXVhcmUge1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zcXVhcmU6aG92ZXIsXFxuLmFpU3F1YXJlOmhvdmVyLFxcbi5wbGFjZW1lbnRTcXVhcmU6aG92ZXIge1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxufVxcblxcbi5zcXVhcmVDb250YWluZXIge31cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzNXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDM1cHgpO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG59XFxuXFxuLyogc3R5bGVzIGZvciBzY29yZSBjYXJkICovXFxuLnNpbmdsZUJvYXJkU2NvcmVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbn1cXG5cXG4vKnN0eWxlcyBmb3IgZ2FtZSBjb250cm9sbGVyIGh1ZCovXFxuLnNjb3JlS2VlcGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzOTBweDtcXG4gICAgdGV4dC1zaGFkb3c6ICMyMmQzZWUgMnB4IDJweDtcXG5cXG59XFxuXFxuLnBsYWNlbWVudEJ1dHRvbiB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJkM2VlO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcbn1cXG5cXG4uYnV0dG9uQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLndpbm5lckNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4LCByZ2IoNTEsIDUxLCA1MSkgMHB4IDBweCAwcHggM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgaGVpZ2h0OiAyNzZweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2lubmVyQW5ub3VuY2VtZW50IHtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmNsYXNzIFNxdWFyZSB7XG4gICAgY29uc3RydWN0b3IoWCwgWSkge1xuICAgICAgICB0aGlzLlggPSBYO1xuICAgICAgICB0aGlzLlkgPSBZO1xuICAgICAgICB0aGlzLmlzSGl0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udGFpbnNTaGlwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hpcCA9IG51bGw7XG4gICAgICAgIC8vdGhpcy5zdGFydCA9IG51bGxcbiAgICB9XG59XG5jbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgICAgIHRoaXMueEF4aXMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXVxuICAgICAgICB0aGlzLnlBeGlzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXVxuICAgICAgICB0aGlzLmdyaWQgPSB0aGlzLm1ha2VHcmlkKClcbiAgICB9XG4gICAgcmVjZWl2ZUF0dGFjayh4TGV0dGVyLCB5TnVtKSB7XG4gICAgICAgIGxldCBmb3VuZCA9IHRoaXMuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0geExldHRlciAmJiBzcXVhcmUuWSA9PSB5TnVtKSk7XG4gICAgICAgIGZvdW5kLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKGZvdW5kLmNvbnRhaW5zU2hpcCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBmb3VuZC5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZvdW5kLnNoaXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvdW5kLnNoaXA7XG4gICAgfVxuICAgIG1ha2VHcmlkKCkge1xuICAgICAgICBsZXQgZ3JpZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMueEF4aXMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy55QXhpcy5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBuZXcgU3F1YXJlKHRoaXMueEF4aXNbeF0sIHRoaXMueUF4aXNbeV0pO1xuICAgICAgICAgICAgICAgIGdyaWQucHVzaChzcXVhcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncmlkO1xuICAgIH1cbiAgICBwb3B1bGF0ZVNoaXAoc2l6ZSwgeFN0YXJ0LCB5U3RhcnQsIGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoc2l6ZSA+IDEpIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJub3J0aFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHlTdGFydCA8IHNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdvdmVyZmxvdyEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcInNvdXRoXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHlTdGFydCAtIDEpID4gKDEwIC0gc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdvdmVyZmxvdyEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIndlc3RcIikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnhBeGlzLmluZGV4T2YoeFN0YXJ0KSA8IChzaXplIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdvdmVyZmxvdyEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImVhc3RcIikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnhBeGlzLmluZGV4T2YoeFN0YXJ0KSA+ICgxMCAtIHNpemUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnb3ZlcmZsb3chJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV3U2hpcCA9IG5ldyBTaGlwKHNpemUsIHhTdGFydCwgeVN0YXJ0LCBkaXJlY3Rpb24pO1xuICAgICAgICBuZXdTaGlwLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgbGV0IHN0YXJ0aW5nU3F1YXJlID0gdGhpcy5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSBuZXdTaGlwLnhTdGFydCAmJiBzcXVhcmUuWSA9PSBuZXdTaGlwLnlTdGFydCkpO1xuICAgICAgICBsZXQgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwID0gW107XG4gICAgICAgIHN0YXJ0aW5nU3F1YXJlLmNvbnRhaW5zU2hpcCA9IHRydWU7XG4gICAgICAgIHN0YXJ0aW5nU3F1YXJlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXAucHVzaChzdGFydGluZ1NxdWFyZSk7XG4gICAgICAgIGxldCB5SW5kZXggPSB0aGlzLmdyaWQuaW5kZXhPZihzdGFydGluZ1NxdWFyZSk7XG4gICAgICAgIHdoaWxlIChzaXplID4gMSkge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm5vcnRoXCIpIHtcbiAgICAgICAgICAgICAgICB5U3RhcnQgPSB5U3RhcnQgLSAxO1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IG5ld1NoaXAueFN0YXJ0ICYmIHNxdWFyZS5ZID09IHlTdGFydCkpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jb250YWluc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgICAgICBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXAucHVzaChzcXVhcmUpXG4gICAgICAgICAgICAgICAgc2l6ZSA9IHNpemUgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcInNvdXRoXCIpIHtcbiAgICAgICAgICAgICAgICAvL3lTdGFydCA9IHlTdGFydCArIDE7XG4gICAgICAgICAgICAgICAgeUluZGV4ICs9IDFcbiAgICAgICAgICAgICAgICAvL2xldCBzcXVhcmUgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IG5ld1NoaXAueFN0YXJ0ICYmIHNxdWFyZS5ZID09IHlTdGFydCkpO1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWRbeUluZGV4XTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY29udGFpbnNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgICAgICAgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwLnB1c2goc3F1YXJlKVxuICAgICAgICAgICAgICAgIHNpemUgPSBzaXplIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwiZWFzdFwiKSB7XG4gICAgICAgICAgICAgICAgeFN0YXJ0ID0gdGhpcy54QXhpc1t0aGlzLnhBeGlzLmluZGV4T2YoeFN0YXJ0KSArIDFdO1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IHhTdGFydCAmJiBzcXVhcmUuWSA9PSBuZXdTaGlwLnlTdGFydCkpXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNvbnRhaW5zU2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgICAgIHNxdWFyZXNDb250YWluaW5nTmV3U2hpcC5wdXNoKHNxdWFyZSk7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IHNpemUgLSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJ3ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICB4U3RhcnQgPSB0aGlzLnhBeGlzW3RoaXMueEF4aXMuaW5kZXhPZih4U3RhcnQpIC0gMV07XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0geFN0YXJ0ICYmIHNxdWFyZS5ZID09IG5ld1NoaXAueVN0YXJ0KSlcbiAgICAgICAgICAgICAgICBzcXVhcmUuY29udGFpbnNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgICAgICAgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwLnB1c2goc3F1YXJlKVxuICAgICAgICAgICAgICAgIHNpemUgPSBzaXplIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwO1xuICAgICAgICAvL2FkZCBzb21lIGNvZGUgdG8gYWNjb3VudCBmb3Igc2l6ZSA+IDEgYW5kIGRpcmVjdGlvblxuICAgIH1cbiAgICBkZXBvcHVsYXRlU2hpcChzaXplLCB4U3RhcnQsIHlTdGFydCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGxldCBuZXdTaGlwID0gbmV3IFNoaXAoc2l6ZSwgeFN0YXJ0LCB5U3RhcnQpO1xuICAgICAgICBsZXQgc3RhcnRpbmdTcXVhcmUgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IG5ld1NoaXAueFN0YXJ0ICYmIHNxdWFyZS5ZID09IG5ld1NoaXAueVN0YXJ0KSk7XG4gICAgICAgIGxldCBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXAgPSBbXTtcbiAgICAgICAgc3RhcnRpbmdTcXVhcmUuY29udGFpbnNTaGlwID0gZmFsc2U7XG4gICAgICAgIHN0YXJ0aW5nU3F1YXJlLnNoaXAgPSBudWxsO1xuICAgICAgICBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXAucHVzaChzdGFydGluZ1NxdWFyZSk7XG4gICAgICAgIGxldCB5SW5kZXggPSB0aGlzLmdyaWQuaW5kZXhPZihzdGFydGluZ1NxdWFyZSk7XG4gICAgICAgIHdoaWxlIChzaXplID4gMSkge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm5vcnRoXCIpIHtcbiAgICAgICAgICAgICAgICB5U3RhcnQgPSB5U3RhcnQgLSAxO1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IG5ld1NoaXAueFN0YXJ0ICYmIHNxdWFyZS5ZID09IHlTdGFydCkpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jb250YWluc1NoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwLnB1c2goc3F1YXJlKVxuICAgICAgICAgICAgICAgIHNpemUgPSBzaXplIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJzb3V0aFwiKSB7XG4gICAgICAgICAgICAgICAgLy95U3RhcnQgPSB5U3RhcnQgKyAxO1xuICAgICAgICAgICAgICAgIHlJbmRleCArPSAxXG4gICAgICAgICAgICAgICAgLy9sZXQgc3F1YXJlID0gdGhpcy5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSBuZXdTaGlwLnhTdGFydCAmJiBzcXVhcmUuWSA9PSB5U3RhcnQpKTtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5ncmlkW3lJbmRleF07XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNvbnRhaW5zU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXAucHVzaChzcXVhcmUpXG4gICAgICAgICAgICAgICAgc2l6ZSA9IHNpemUgLSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJlYXN0XCIpIHtcbiAgICAgICAgICAgICAgICB4U3RhcnQgPSB0aGlzLnhBeGlzW3RoaXMueEF4aXMuaW5kZXhPZih4U3RhcnQpICsgMV07XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0geFN0YXJ0ICYmIHNxdWFyZS5ZID09IG5ld1NoaXAueVN0YXJ0KSlcbiAgICAgICAgICAgICAgICBzcXVhcmUuY29udGFpbnNTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNxdWFyZXNDb250YWluaW5nTmV3U2hpcC5wdXNoKHNxdWFyZSk7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IHNpemUgLSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJ3ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICB4U3RhcnQgPSB0aGlzLnhBeGlzW3RoaXMueEF4aXMuaW5kZXhPZih4U3RhcnQpIC0gMV07XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0geFN0YXJ0ICYmIHNxdWFyZS5ZID09IG5ld1NoaXAueVN0YXJ0KSlcbiAgICAgICAgICAgICAgICBzcXVhcmUuY29udGFpbnNTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNxdWFyZXNDb250YWluaW5nTmV3U2hpcC5wdXNoKHNxdWFyZSlcbiAgICAgICAgICAgICAgICBzaXplID0gc2l6ZSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxdWFyZXNDb250YWluaW5nTmV3U2hpcDtcbiAgICAgICAgLy9hZGQgc29tZSBjb2RlIHRvIGFjY291bnQgZm9yIHNpemUgPiAxIGFuZCBkaXJlY3Rpb25cbiAgICB9XG59XG5jbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3Ioc2l6ZSwgeFN0YXJ0LCB5U3RhcnQsIGRpcmVjdGlvbikge1xuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgICB0aGlzLmhpdHMgPSBbXVxuICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0XG4gICAgdGhpcy55U3RhcnQgPSB5U3RhcnRcbiAgICB0aGlzLmRpcmVjdGlvbiA9IG51bGxcbiAgfVxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzLnB1c2goJ2hpdCcpO1xuICAgIGlmICh0aGlzLmhpdHMubGVuZ3RoID09IHRoaXMuc2l6ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNTdW5rKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmhpdDtcbiAgICB9XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiAnc3VuayEnXG4gIH1cbn0gXG5cbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZXMoYXJyKSB7XG4gICAgdmFyIHVuaXF1ZSA9IFtdO1xuICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoIXVuaXF1ZS5pbmNsdWRlcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgdW5pcXVlLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdW5pcXVlO1xufVxuIFxuLy9zdWl0ZSBvZiBmdW5jdGlvbnMgZm9yIGxvYWRpbmcgdGhlIHR3byBET00gYm9hcmRzICYgc2NvcmUga2VlcGVyIGNhcmRcbmZ1bmN0aW9uIHNxdWFyZUxvYWRlcihjb29yZGluYXRlLCBwbGF5ZXIgPSBcImFpXCIpIHtcbiAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgIGlmIChjb29yZGluYXRlLmlzSGl0ID09IHRydWUpIHtcbiAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzZlZTdiN1wiO1xuICAgIH1cbiAgICBpZiAocGxheWVyID09IFwiYWlcIikge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnc3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdhaVNxdWFyZScpO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGNvb3JkaW5hdGUuWDtcbiAgICAgICAgICAgIGxldCB5ID0gY29vcmRpbmF0ZS5ZO1xuICAgICAgICAgICAgYXR0YWNrQUkoeCwgeSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY29vcmRpbmF0ZS5pc0hpdCA9PSB0cnVlICYmIGNvb3JkaW5hdGUuY29udGFpbnNTaGlwID09IHRydWUpIHtcbiAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIHNxdWFyZS50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgIH1cbiAgICAvL2lmIChjb29yZGluYXRlLmNvbnRhaW5zU2hpcCA9PSB0cnVlKSB7XG4gICAgICAgIC8vc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgLy99XG4gICAgaWYgKHBsYXllciAhPSBcImFpXCIpIHtcbiAgICAgICAgaWYgKGNvb3JkaW5hdGUuY29udGFpbnNTaGlwID09IHRydWUpIHtcbiAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzcXVhcmU7XG59XG5mdW5jdGlvbiBib2FyZExvYWRlcihib2FyZCwgcGxheWVyKSB7XG4gICAgbGV0IGFycmF5T2ZHcmlkQ29vcmRpbmF0ZXMgPSBib2FyZC5ncmlkO1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JpZC1jb250YWluZXInKTtcbiAgICBhcnJheU9mR3JpZENvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgbGV0IHNxdWFyZSA9IHNxdWFyZUxvYWRlcihjb29yZGluYXRlLCBwbGF5ZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9KVxuICAgIHJldHVybiBjb250YWluZXI7XG59O1xuZnVuY3Rpb24geENvb3JkaW5hdGVMb2FkZXIoKSB7XG4gICAgbGV0IGFycmF5T2ZYQ29vcmRpbmF0ZXMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3hDb29yZGluYXRlQ29udGFpbmVyJyk7XG4gICAgYXJyYXlPZlhDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3VwcGVyU3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS50ZXh0Q29udGVudCA9IGNvb3JkaW5hdGU7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiB4Q29vcmRpbmF0ZURvdWJsZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd4Q29vcmRpbmF0ZUNvbnRhaW5lckRvdWJsZScpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh4Q29vcmRpbmF0ZUxvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoeENvb3JkaW5hdGVMb2FkZXIoKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIHlDb29yZGluYXRlTG9hZGVyKCkge1xuICAgIGxldCBhcnJheU9mWENvb3JkaW5hdGVzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3lDb29yZGluYXRlQ29udGFpbmVyJyk7XG4gICAgYXJyYXlPZlhDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2xlZnRTcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlLnRleHRDb250ZW50ID0gY29vcmRpbmF0ZTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIHBsYXllckNvb3JkaW5hdGVkQm9hcmRMb2FkZXIoYm9hcmQpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZUJvYXJkQ29udGFpbmVyJylcbiAgICBsZXQgc3ViY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1YmNvbnRhaW5lcicpO1xuICAgICAgICBzdWJjb250YWluZXIuYXBwZW5kQ2hpbGQoeUNvb3JkaW5hdGVMb2FkZXIoKSk7XG4gICAgICAgIHN1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZExvYWRlcihib2FyZCwgXCJwbGF5ZXJcIikpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoeENvb3JkaW5hdGVMb2FkZXIoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJjb250YWluZXIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiBhaUNvb3JkaW5hdGVkQm9hcmRMb2FkZXIoYm9hcmQpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZUJvYXJkQ29udGFpbmVyJylcbiAgICBsZXQgc3ViY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1YmNvbnRhaW5lcicpO1xuICAgICAgICBzdWJjb250YWluZXIuYXBwZW5kQ2hpbGQoeUNvb3JkaW5hdGVMb2FkZXIoKSk7XG4gICAgICAgIHN1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZExvYWRlcihib2FyZCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoeENvb3JkaW5hdGVMb2FkZXIoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJjb250YWluZXIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiB0d29Cb2FyZENvbnRlbnRHZW5lcmF0b3IocGxheWVyQm9hcmQsIG9wcG9uZW50Qm9hcmQpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RvdWJsZUJvYXJkQ29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckNvb3JkaW5hdGVkQm9hcmRMb2FkZXIocGxheWVyQm9hcmQpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWlDb29yZGluYXRlZEJvYXJkTG9hZGVyKG9wcG9uZW50Qm9hcmQpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gdHdvQm9hcmRET01Mb2FkZXIocGxheWVyQm9hcmQsIG9wcG9uZW50Qm9hcmQpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0d29Cb2FyZENvbnRlbnRHZW5lcmF0b3IocGxheWVyQm9hcmQsIG9wcG9uZW50Qm9hcmQpKTsgXG59XG5mdW5jdGlvbiBzY29yZUtlZXBlckdlbmVyYXRvcihwbGF5ZXIsIGlucHV0KSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaW5nbGVCb2FyZFNjb3JlQ29udGFpbmVyJylcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxldCBzY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBwbGF5ZXIgKyBcIiBTY29yZTogXCJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzY29yZSk7XG4gICAgc2NvcmUudGV4dENvbnRlbnQgPSBpbnB1dCArIFwiLzVcIjtcbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5mdW5jdGlvbiBkb3VibGVTY29yZUtlZXBlckdlbmVyYXRvcihwbGF5ZXIxLCBpbnB1dDEsIHBsYXllcjIsIGlucHV0Mikge1xuICAgIGxldCBzY29yZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjb3JlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Njb3JlS2VlcGVyQ29udGFpbmVyJyk7XG4gICAgc2NvcmVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NvcmVLZWVwZXJHZW5lcmF0b3IocGxheWVyMSwgaW5wdXQxKSk7XG4gICAgc2NvcmVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NvcmVLZWVwZXJHZW5lcmF0b3IocGxheWVyMiwgaW5wdXQyKSk7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIucHJlcGVuZChzY29yZUNvbnRhaW5lcilcbn1cbmZ1bmN0aW9uIGFubm91bmNlV2lubmVyQ2FyZCh0ZXh0KSB7XG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3dpbm5lckNhcmQnKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGFubm91bmNlV2lubmVyVGV4dCh0ZXh0KSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChyZXN0YXJ0R2FtZUJ1dHRvbigpKTtcbiAgICBjb250YWluZXIuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChjYXJkKTtcbn1cbmZ1bmN0aW9uIGFubm91bmNlV2lubmVyVGV4dCh0ZXh0KSB7XG4gICAgbGV0IGFubm91bmNlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgYW5ub3VuY2VtZW50LmNsYXNzTGlzdC5hZGQoJ3dpbm5lckFubm91bmNlbWVudFRleHQnKTtcbiAgICBhbm5vdW5jZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBhbm5vdW5jZW1lbnQ7XG59XG5mdW5jdGlvbiByZXN0YXJ0R2FtZUJ1dHRvbigpIHtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJSZXN0YXJ0IEdhbWVcIjtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudEJ1dHRvblwiKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0Qm9hcmQpXG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuXG5cbmNsYXNzIGdhbWVCb2FyZExvYWRlciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyQm9hcmQsIHBsYXllciwgYWlCb2FyZCwgYWkpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZCA9IHBsYXllckJvYXJkO1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgdGhpcy5haUJvYXJkID0gYWlCb2FyZDtcbiAgICAgICAgdGhpcy5haSA9IGFpXG4gICAgfVxuICAgIHJlbG9hZEJvYXJkcygpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5haUJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuICAgICAgICB0d29Cb2FyZERPTUxvYWRlcih0aGlzLnBsYXllckJvYXJkLCB0aGlzLmFpQm9hcmQpO1xuICAgIH1cbiAgICBwb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5wb3B1bGF0ZVNoaXAoc2l6ZSwgeCwgeSwgZGlyZWN0aW9uKTtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgdHdvQm9hcmRET01Mb2FkZXIodGhpcy5wbGF5ZXJCb2FyZCwgdGhpcy5haUJvYXJkKTtcbiAgICB9XG4gICAgZGVwb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5kZXBvcHVsYXRlU2hpcChzaXplLCB4LCB5LCBkaXJlY3Rpb24pO1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuICAgICAgICB0d29Cb2FyZERPTUxvYWRlcih0aGlzLnBsYXllckJvYXJkLCB0aGlzLmFpQm9hcmQpO1xuICAgIH1cbiAgICBzaW1wbGVQb3B1bGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5wb3B1bGF0ZVNoaXAoMiwgJ0knLCA0LCBcImVhc3RcIik7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQucG9wdWxhdGVTaGlwKDQsICdDJywgNSwgXCJlYXN0XCIpO1xuICAgICAgICB0aGlzLnBsYXllckJvYXJkLnBvcHVsYXRlU2hpcCgzLCAnSicsIDYsIFwic291dGhcIik7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQucG9wdWxhdGVTaGlwKDMsICdCJywgOCwgXCJzb3V0aFwiKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5wb3B1bGF0ZVNoaXAoMiwgJ0UnLCA5LCBcImVhc3RcIik7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZC5uZXh0U2libGluZyk7XG4gICAgICAgIHR3b0JvYXJkRE9NTG9hZGVyKHRoaXMucGxheWVyQm9hcmQsIHRoaXMuYWlCb2FyZCk7XG4gICAgfVxuICAgIGF0dGFja0FJKHgsIHkpIHtcbiAgICAgICAgdGhpcy5haUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZC5uZXh0U2libGluZyk7XG4gICAgICAgIHR3b0JvYXJkRE9NTG9hZGVyKHRoaXMucGxheWVyQm9hcmQsIHRoaXMuYWlCb2FyZCk7XG4gICAgICAgIHRoaXMua2VlcFNjb3JlKClcbiAgICB9XG4gICAgYXR0YWNrUGxheWVyKHgsIHkpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuICAgICAgICB0d29Cb2FyZERPTUxvYWRlcih0aGlzLnBsYXllckJvYXJkLCB0aGlzLmFpQm9hcmQpO1xuICAgICAgICB0aGlzLmtlZXBTY29yZSgpXG4gICAgfVxuICAgIHByb2R1Y2VBcnJheU9mUGxheWVyU2hpcHMoKSB7XG4gICAgICAgIGxldCBwbGF5ZXJTaGlwcyA9IFtdXG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQuZ3JpZC5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIGlmIChzcXVhcmUuc2hpcCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyU2hpcHMucHVzaChzcXVhcmUuc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vcGxheWVyU2hpcHMgY29udGFpbnMgZHVwbGljYXRlcyBvZiBlYWNoIHNoaXAsIHNvIEkgZmlsdGVyIHRoZSBhcnJheSBiZWxvd1xuICAgICAgICBsZXQgcGxheWVyU2hpcHNGaWx0ZXJlZCA9IFtdO1xuICAgICAgICBwbGF5ZXJTaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgaWYgKCFwbGF5ZXJTaGlwc0ZpbHRlcmVkLmluY2x1ZGVzKHNoaXApKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyU2hpcHNGaWx0ZXJlZC5wdXNoKHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcGxheWVyU2hpcHNGaWx0ZXJlZDtcbiAgICB9XG4gICAgcHJvZHVjZUFycmF5T2ZBaVNoaXBzKCkge1xuICAgICAgICBsZXQgYWlTaGlwcyA9IFtdXG4gICAgICAgIHRoaXMuYWlCb2FyZC5ncmlkLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNxdWFyZS5zaGlwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhaVNoaXBzLnB1c2goc3F1YXJlLnNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvL3BsYXllclNoaXBzIGNvbnRhaW5zIGR1cGxpY2F0ZXMgb2YgZWFjaCBzaGlwLCBzbyBJIGZpbHRlciB0aGUgYXJyYXkgYmVsb3dcbiAgICAgICAgbGV0IGFpU2hpcHNGaWx0ZXJlZCA9IFtdO1xuICAgICAgICBhaVNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBpZiAoIWFpU2hpcHNGaWx0ZXJlZC5pbmNsdWRlcyhzaGlwKSkge1xuICAgICAgICAgICAgICAgIGFpU2hpcHNGaWx0ZXJlZC5wdXNoKHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYWlTaGlwc0ZpbHRlcmVkO1xuICAgIH1cbiAgICBrZWVwU2NvcmUoKSB7XG4gICAgICAgIGxldCBwbGF5ZXJTaGlwcyA9IHRoaXMucHJvZHVjZUFycmF5T2ZQbGF5ZXJTaGlwcygpO1xuICAgICAgICBsZXQgYWlTaGlwcyA9IHRoaXMucHJvZHVjZUFycmF5T2ZBaVNoaXBzKCk7XG4gICAgICAgIGxldCBwbGF5ZXJUYWxseSA9IDBcbiAgICAgICAgbGV0IGFpVGFsbHkgPSAwXG4gICAgICAgIHBsYXllclNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmhpdHMubGVuZ3RoID09IHNoaXAuc2l6ZSkge1xuICAgICAgICAgICAgICAgIHBsYXllclRhbGx5ICs9IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgYWlTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5oaXRzLmxlbmd0aCA9PSBzaGlwLnNpemUpIHtcbiAgICAgICAgICAgICAgICBhaVRhbGx5ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICBkb3VibGVTY29yZUtlZXBlckdlbmVyYXRvcihcIlBsYXllclwiLCBhaVRhbGx5LCBcIkFJXCIsIHBsYXllclRhbGx5KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhaVRhbGx5ID0gXCIgKyBhaVRhbGx5KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXJUYWxseSA9XCIgKyBwbGF5ZXJUYWxseSk7XG4gICAgICAgIGlmIChhaVRhbGx5ID09IDUpIHtcbiAgICAgICAgICAgIGFubm91bmNlV2lubmVyQ2FyZChcIllvdSB3aW4hXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF5ZXJUYWxseSA9PSA1KSB7XG4gICAgICAgICAgICBhbm5vdW5jZVdpbm5lckNhcmQoXCJBSSB3aW5zIVwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWlTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFpU3F1YXJlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFpU3F1YXJlcyk7XG5cblxuICAgICAgICAvL2NvbnN0cnVjdCBhIGxpc3Qgb2YgZ2FtZWJvYXJkLmdyaWQgc2hpcHNcbiAgICAgICAgLy9mb3IgYW55IHNoaXAsIGlmIHNoaXAuaGl0cyA9PSBzaXplLCBhZGQgKzEgdG8gc2NvcmVcbiAgICAgICAgLy9pbnB1dCBzY29yZSBpbiBkb3VibGVTY29yZUtlZXBlckdlbmVyYXRvclxuICAgIH1cbiAgICBjb3B5QUlncmlkKCkge1xuICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLmFpQm9hcmQuZ3JpZC5zbGljZSgpO1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHJhbmRvbVBhcmFtZXRlclNlbGVjdG9yKGFycmF5LCBzaXplKSB7XG4gICAgICAgIGxldCByYW5kb20gPSBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcbiAgICAgICAgbGV0IHggPSByYW5kb20uWDtcbiAgICAgICAgbGV0IHkgPSByYW5kb20uWTtcbiAgICAgICAgbGV0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihyYW5kb20pO1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJhbmRvbSk7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLnJhbmRvbURpcmVjdGlvblByb2R1Y2VyKCk7XG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCArIDEsIDEpO1xuICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXggLSAxLCAxKTtcbiAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4ICsgMTAsIDEpO1xuICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXggLSAxMCwgMSk7XG4gICAgICAgIGlmIChzaXplID4gMSAmJiBkaXJlY3Rpb24gPT0gXCJzb3V0aFwiKSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXggKyAyLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2l6ZSA+IDEgJiYgZGlyZWN0aW9uID09IFwibm9ydGhcIikge1xuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4IC0gMiwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemUgPiAxICYmIGRpcmVjdGlvbiA9PSBcImVhc3RcIikge1xuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4ICsgMjApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaXplID4gMSAmJiBkaXJlY3Rpb24gPT0gXCJ3ZXN0XCIpIHtcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCAtIDIwLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2l6ZSA+IDIgJiYgZGlyZWN0aW9uID09IFwic291dGhcIikge1xuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4ICsgMywgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemUgPiAyICYmIGRpcmVjdGlvbiA9PSBcIm5vcnRoXCIpIHtcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCAtIDMsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaXplID4gMiAmJiBkaXJlY3Rpb24gPT0gXCJlYXN0XCIpIHtcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCAtIDMwLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2l6ZSA+IDIgJiYgZGlyZWN0aW9uID09IFwid2VzdFwiKSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXggKyAzMCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWlCb2FyZC5wb3B1bGF0ZVNoaXAoc2l6ZSwgeCwgeSwgZGlyZWN0aW9uKSA9PSAnb3ZlcmZsb3chJykge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21QYXJhbWV0ZXJTZWxlY3RvcihhcnJheSwgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFpQm9hcmQucG9wdWxhdGVTaGlwKHNpemUsIHgsIHksIGRpcmVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmluZEFkamFjZW50WENvb3JkaW5hdGVzKHgsIHksIGFycmF5KSB7XG4gICAgICAgIGlmICh4ID09ICdBJykge1xuICAgICAgICAgICAgbGV0IGEgPSBcIm92ZXJmbG93XCI7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnQicgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnQicpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdBJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnQycgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnQycpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdCJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnRCcgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnRCcpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdDJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnRScgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnRScpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdEJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnRicgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnRicpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdFJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnRycgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnRycpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdGJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnSCcgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnSCcpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdHJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnSScgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnSScpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdIJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnSicgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnSicpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdJJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IFwib3ZlcmZsb3dcIjtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmFuZG9tRGlyZWN0aW9uUHJvZHVjZXIoKSB7XG4gICAgICAgIGxldCBudW0gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBpZiAobnVtID49IC43NSkgeyByZXR1cm4gXCJlYXN0XCIgfVxuICAgICAgICBpZiAobnVtIDw9IC4yNSkge3JldHVybiBcIndlc3RcIn1cbiAgICAgICAgaWYgKG51bSA+IC4yNSAmJiBudW0gPCAuNSkgeyByZXR1cm4gXCJzb3V0aFwiIH1cbiAgICAgICAgZWxzZSB7IHJldHVybiBcIm5vcnRoXCIgfVxuICAgIH1cbiAgICBzaW1wbGVQb3B1bGF0ZUFJKCkge1xuICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLmNvcHlBSWdyaWQoKTtcbiAgICAgICAgdGhpcy5yYW5kb21QYXJhbWV0ZXJTZWxlY3RvcihhcnJheSwgMik7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICAgICAgdGhpcy5yYW5kb21QYXJhbWV0ZXJTZWxlY3RvcihhcnJheSwgMik7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICAgICAgdGhpcy5yYW5kb21QYXJhbWV0ZXJTZWxlY3RvcihhcnJheSwgMyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICAgICAgdGhpcy5yYW5kb21QYXJhbWV0ZXJTZWxlY3RvcihhcnJheSwgMyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICAgICAgdGhpcy5yYW5kb21QYXJhbWV0ZXJTZWxlY3RvcihhcnJheSwgNCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgdHdvQm9hcmRET01Mb2FkZXIodGhpcy5wbGF5ZXJCb2FyZCwgdGhpcy5haUJvYXJkKTtcbiAgICB9XG59XG5cbi8vc3VpdGUgZm9yIGxvYWRpbmcgY2FycmllciBwbGFjZW1lbnQgbW9kdWxlIGJlZm9yZSBnYW1lIGJlZ2luc1xuXG5sZXQgcGxhY2VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wbGFjZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50LW1vZHVsZS1jb250YWluZXInKTtcbnBsYWNlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYWNlbWVudENvbnRhaW5lcicpO1xubGV0IHBsYWNlbWVudEJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xubGV0IHNoaXBDb3VudCA9IFtdO1xuZnVuY3Rpb24gcGxhY2VtZW50TW9kdWxlTG9hZGVyKCkge1xuICAgIHBsYWNlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BUZXh0TG9hZGVyKCkpO1xuICAgIHBsYWNlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZW1lbnRNb2R1bGVNaWRkbGVTdWJDb250YWluZXJMb2FkZXIoKSk7XG4gICAgcGxhY2VtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbVN1YmNvbnRhaW5lckxvYWRlcigpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBsYWNlbWVudENvbnRhaW5lcik7XG59XG5mdW5jdGlvbiB0b3BUZXh0TG9hZGVyKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50VGV4dEJveCcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BUZXh0Q29udGVudExvYWRlcignUGxhY2UgWW91ciBTaGlwcyEnKSlcbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcbmZ1bmN0aW9uIHRvcFRleHRDb250ZW50TG9hZGVyKHRleHQpIHtcbiAgICBsZXQgaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaC5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnRUZXh0Q29udGVudCcpO1xuICAgIGguc2V0QXR0cmlidXRlKCdpZCcsICdwbGFjZW1lbnRIZWFkaW5nJyk7XG4gICAgaC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIGg7XG59XG5mdW5jdGlvbiBwbGFjZW1lbnRNb2R1bGVNaWRkbGVTdWJDb250YWluZXJMb2FkZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtaWRkbGVTdWJjb250YWluZXInKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZW1lbnRCb2FyZExvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRJbmZvTG9hZGVyKCkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiByaWdodEluZm9Mb2FkZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyaWdodEluZm9TdWJjb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uc0ludGVncmF0b3IoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRCb3hMb2FkZXIoKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lclxufTtcbmZ1bmN0aW9uIGJ1dHRvbnNJbnRlZ3JhdG9yKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmlnaHRJbmZvQnV0dG9uc0NvbnRhaW5lcicpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2V0U2hpcEJ0bkxvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmVnaW5HYW1lQnRuTG9hZGVyKCkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiByZXNldFNoaXBCdG5Mb2FkZXIoKSB7XG4gICAgbGV0IHJlc2V0U2hpcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc2V0U2hpcEJ0bi5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnRCdXR0b24nKTtcbiAgICByZXNldFNoaXBCdG4udGV4dENvbnRlbnQgPSBcIlJlc2V0IFNoaXBzXCI7XG4gICAgcmVzZXRTaGlwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRTaGlwcylcbiAgICByZXR1cm4gcmVzZXRTaGlwQnRuO1xufTtcbmZ1bmN0aW9uIGJlZ2luR2FtZUJ0bkxvYWRlcigpIHtcbiAgICBsZXQgYmVnaW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBiZWdpbkJ0bi5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnRCdXR0b24nKTtcbiAgICBiZWdpbkJ0bi50ZXh0Q29udGVudCA9IFwiQmVnaW4gR2FtZVwiO1xuICAgIGJlZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tpZlNoaXBzQXJlQWxsUGxhY2VkKTtcbiAgICByZXR1cm4gYmVnaW5CdG47XG59O1xuZnVuY3Rpb24gdGV4dEJveExvYWRlcigpIHtcbiAgICBsZXQgdGV4dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRCb3guY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50SW5zdHJ1Y3Rpb25Cb3gnKTtcbiAgICB0ZXh0Qm94LmFwcGVuZENoaWxkKHRleHRCb3hIZWFkaW5nTG9hZGVyKCkpO1xuICAgIHRleHRCb3guYXBwZW5kQ2hpbGQodGV4dEJveENvbnRlbnRMb2FkZXIoXCJQbGFjZSB5b3VyIHNoaXBzIGJ5IGRyYWdnaW5nIHRoZW0gdG8geW91ciBkZXNpcmVkIGxvY2F0aW9uLlwiKSk7XG4gICAgdGV4dEJveC5hcHBlbmRDaGlsZCh0ZXh0Qm94Q29udGVudExvYWRlcihcIkNsaWNrIHRoZSBSb3RhdGUgYnV0dG9uIHRvIGNoYW5nZSBvcmllbnRhdGlvbiBvZiBzaGlwcyB3YWl0aW5nIHRvIGJlIHBsYWNlZC5cIikpO1xuICAgIHRleHRCb3guYXBwZW5kQ2hpbGQodGV4dEJveENvbnRlbnRMb2FkZXIoXCJZb3UgY2FuIGFsc28gcm90YXRlIHNoaXBzIGFmdGVyIHBsYWNpbmcgdGhlbSBvbiB0aGUgYm9hcmQgYnkgY2xpY2tpbmcgb24gdGhlbS5cIikpO1xuICAgIHRleHRCb3guYXBwZW5kQ2hpbGQodGV4dEJveENvbnRlbnRMb2FkZXIoXCJPbmNlIHlvdSBoYXZlIHBsYWNlZCBhbGwgZml2ZSBzaGlwcywgcHJlc3MgdGhlIEJlZ2luIEdhbWUgYnV0dG9uIHRvIHN0YXJ0LlwiKSk7XG4gICAgcmV0dXJuIHRleHRCb3g7XG59XG5mdW5jdGlvbiB0ZXh0Qm94SGVhZGluZ0xvYWRlcigpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmdDb250YWluZXInKTtcbiAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiSW5zdHJ1Y3Rpb25zXCI7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiB0ZXh0Qm94Q29udGVudExvYWRlcih0ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdpbnN0cnVjdGlvbkNvbnRlbnQnKTtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gY29udGVudDtcbn1cbmZ1bmN0aW9uIHNlbGVjdFNoaXBTcXVhcmVMb2FkZXIoY29vcmRpbmF0ZSkge1xuICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgaWYgKGNvb3JkaW5hdGUuY29udGFpbnNTaGlwID09IHRydWUpIHtcbiAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBpZCA9IHNxdWFyZS5pZDtcbiAgICAgICAgICAgIGxldCBkYXRhID0gaWQuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICBsZXQgc3RhcnRpbmdTcXVhcmUgPSBwbGFjZW1lbnRCb2FyZC5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSBkYXRhWzBdICYmIHNxdWFyZS5ZID09IGRhdGFbMV0pKTtcbiAgICAgICAgICAgIGxldCBzaXplID0gc3RhcnRpbmdTcXVhcmUuc2hpcC5zaXplO1xuICAgICAgICAgICAgbGV0IHggPSBzdGFydGluZ1NxdWFyZS5zaGlwLnhTdGFydDtcbiAgICAgICAgICAgIGxldCB5ID0gc3RhcnRpbmdTcXVhcmUuc2hpcC55U3RhcnQ7XG4gICAgICAgICAgICBpZiAoc3RhcnRpbmdTcXVhcmUuc2hpcC5kaXJlY3Rpb24gPT0gXCJlYXN0XCIpIHtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnRCb2FyZC5kZXBvcHVsYXRlU2hpcChzaXplLCB4LCB5LCBcImVhc3RcIik7XG4gICAgICAgICAgICAgICAgZGVwb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBcImVhc3RcIik7XG4gICAgICAgICAgICAgICAgLy93cml0ZSBkZXBvcHVsYXRlIHBsYXllciBmdW5jdGlvblxuICAgICAgICAgICAgICAgIHBsYWNlbWVudEJvYXJkLnBvcHVsYXRlU2hpcChzaXplLCB4LCB5LCBcInNvdXRoXCIpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlUGxheWVyKHNpemUsIHgsIHksIFwic291dGhcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXJ0aW5nU3F1YXJlLnNoaXAuZGlyZWN0aW9uID09IFwic291dGhcIikge1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudEJvYXJkLmRlcG9wdWxhdGVTaGlwKHNpemUsIHgsIHksIFwic291dGhcIik7XG4gICAgICAgICAgICAgICAgZGVwb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBcInNvdXRoXCIpO1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudEJvYXJkLnBvcHVsYXRlU2hpcChzaXplLCB4LCB5LCBcImVhc3RcIik7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgXCJlYXN0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhwbGFjZW1lbnRDb250YWluZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwbGFjZW1lbnRDb250YWluZXIpO1xuICAgICAgICAgICAgcGxhY2VtZW50TW9kdWxlTG9hZGVyKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2lkJywgY29vcmRpbmF0ZS5YICsgY29vcmRpbmF0ZS5ZKTtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYWdPdmVyXCIpO1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEcm9wXCIpO1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZGF0YSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICAgICAgbGV0IHNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZSA9IGV2LnRhcmdldC5pZDtcbiAgICAgICAgbGV0IHNpemUgPSBkYXRhO1xuICAgICAgICBsZXQgeCA9IGNvb3JkaW5hdGVbMF07XG4gICAgICAgIGxldCB5ID0gY29vcmRpbmF0ZVsxXTtcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVbMl0gPT0gMCkge1xuICAgICAgICAgICAgbGV0IGFycmF5ID0gW2Nvb3JkaW5hdGVbMV0sIGNvb3JkaW5hdGVbMl1dXG4gICAgICAgICAgICB5ID0gYXJyYXkuam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0YXJ0aW5nU3F1YXJlID0gcGxhY2VtZW50Qm9hcmQuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0geCAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgIGlmIChzdGFydGluZ1NxdWFyZS5jb250YWluc1NoaXAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdGF0aW9uVHJhY2tlciA9PSAwKSB7XG4gICAgICAgICAgICBwb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBcImVhc3RcIik7XG4gICAgICAgICAgICBwbGFjZW1lbnRCb2FyZC5wb3B1bGF0ZVNoaXAoc2l6ZSwgeCwgeSwgXCJlYXN0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgXCJzb3V0aFwiKTtcbiAgICAgICAgICAgIHBsYWNlbWVudEJvYXJkLnBvcHVsYXRlU2hpcChzaXplLCB4LCB5LCBcInNvdXRoXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMocGxhY2VtZW50Q29udGFpbmVyKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwbGFjZW1lbnRDb250YWluZXIpO1xuICAgICAgICBzaGlwQ291bnQucHVzaChzaXplKTtcbiAgICAgICAgcGxhY2VtZW50TW9kdWxlTG9hZGVyKCk7XG4gICAgfSlcbiAgICByZXR1cm4gc3F1YXJlO1xufVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbmZ1bmN0aW9uIHNlbGVjdFNoaXBCb2FyZExvYWRlcihib2FyZCkge1xuICAgIGxldCBhcnJheU9mR3JpZENvb3JkaW5hdGVzID0gYm9hcmQuZ3JpZDtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY29udGFpbmVyJyk7XG4gICAgYXJyYXlPZkdyaWRDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGxldCBzcXVhcmUgPSBzZWxlY3RTaGlwU3F1YXJlTG9hZGVyKGNvb3JkaW5hdGUpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9KVxuICAgIHJldHVybiBjb250YWluZXI7XG59O1xuZnVuY3Rpb24gc2VsZWN0U2hpcFBsYXllckNvb3JkaW5hdGVkQm9hcmRMb2FkZXIoYm9hcmQpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZUJvYXJkQ29udGFpbmVyJylcbiAgICBsZXQgc3ViY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1YmNvbnRhaW5lcicpO1xuICAgICAgICBzdWJjb250YWluZXIuYXBwZW5kQ2hpbGQoeUNvb3JkaW5hdGVMb2FkZXIoKSk7XG4gICAgICAgIHN1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RTaGlwQm9hcmRMb2FkZXIoYm9hcmQpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHhDb29yZGluYXRlTG9hZGVyKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViY29udGFpbmVyKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcbmZ1bmN0aW9uIHBsYWNlbWVudEJvYXJkTG9hZGVyKCkge1xuICAgIHJldHVybiBzZWxlY3RTaGlwUGxheWVyQ29vcmRpbmF0ZWRCb2FyZExvYWRlcihwbGFjZW1lbnRCb2FyZCk7XG59O1xuY29uc3Qgc291cmNlID0gXCJcIjtcbmZ1bmN0aW9uIHJvdGF0ZVNoaXBCdXR0b25Mb2FkZXIoKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUm90YXRlXCI7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudEJ1dHRvbicpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvdGF0ZVNoaXBCdXR0b24nKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJvdGF0ZU9uQ2xpY2soKVxuICAgIH0pO1xuICAgIHJldHVybiBidXR0b247XG59XG5mdW5jdGlvbiByb3RhdGVPbkNsaWNrKCkge1xuICAgIC8vbGV0IGNsYXNzQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYuc2luZ2xlU2hpcENsYXNzQ29udGFpbmVyXCIpO1xuICAgIGxldCBpbmRpdmlkdWFsU2hpcENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LnNoaXBcIik7XG4gICAgaW5kaXZpZHVhbFNoaXBDb250YWluZXJzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcImNvbHVtblwiKSB7IG5vZGUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7IHJvdGF0aW9uVHJhY2tlciA9IDA7IH1cbiAgICAgICAgZWxzZSB7IG5vZGUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7IHJvdGF0aW9uVHJhY2tlciA9IDE7IH1cbiAgICB9KTtcbiAgICAvL2NsYXNzQ29udGFpbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIC8vaWYgKHJvdGF0aW9uVHJhY2tlciA9PSAxKSB7IG5vZGUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7IH1cbiAgICAgICAgLy9lbHNlIHsgbm9kZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjsgfVxuICAgIC8vfSlcbiAgICBjaGVja0NsYXNzQ29udGFpbmVyT3JpZW50YXRpb24oKTtcbn1cbi8vdGhpcyBmdW5jdGlvbiBjaGVja3Mgd2hldGhlciB0byBhcnJhbmdlIHNoaXBzIGluIHJvd3Mgb3IgY29sdW1ucyB3aXRoaW4gdGhlaXIgY2xhc3MgY29udGFpbmVyc1xuZnVuY3Rpb24gY2hlY2tDbGFzc0NvbnRhaW5lck9yaWVudGF0aW9uKCkge1xuICAgIGxldCBjbGFzc0NvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LnNpbmdsZVNoaXBDbGFzc0NvbnRhaW5lclwiKTtcbiAgICBjbGFzc0NvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAocm90YXRpb25UcmFja2VyID09IDEpIHsgbm9kZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjsgfVxuICAgICAgICBlbHNlIHsgbm9kZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjsgfVxuICAgIH0pO1xufVxuLy9UaGlzIHJvdGF0aW9uVHJhY2tlciB0ZWxscyB0aGUgc2hpcE1ha2VyKCkgd2hldGhlciB0byBwb3NpdGlvbiBzaGlwcyB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseS5cbiAgICAvLzAgY29tbWFuZHMgc2hpcE1ha2VyKCkgdG8gcG9zaXRpb24gc2hpcHMgaG9yaXpvbnRhbGx5LCAxIHZlcnRpY2FsbHkuXG4gICAgLy9JdCB0cmFja3Mgd2hldGhlciAvIHdoZW4gcm90YXRlT25DbGljaygpIGhhcyByb3RhdGVkIHNoaXBzIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LlxubGV0IHJvdGF0aW9uVHJhY2tlciA9IDA7XG5mdW5jdGlvbiBzaGlwTWFrZXIoc2l6ZSkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBzaXplKTtcbiAgICBpZiAocm90YXRpb25UcmFja2VyID09IDEpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgIH1cbiAgICBpZiAocm90YXRpb25UcmFja2VyID09IDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgIH1cbiAgICB3aGlsZSAoc2l6ZSA+PSAxKSB7XG4gICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudFNxdWFyZScpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgICAgc2l6ZSA9IHNpemUgLSAxO1xuICAgIH1cbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdHJhbnNmZXJEYXRhT25EcmFnc3RhcnQpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiB0cmFuc2ZlckRhdGFPbkRyYWdzdGFydChldikge1xuICAgICAvLyBDaGFuZ2UgdGhlIHNvdXJjZSBlbGVtZW50J3MgYmFja2dyb3VuZCBjb2xvclxuICAgICAgICAvLyB0byBzaG93IHRoYXQgZHJhZyBoYXMgc3RhcnRlZFxuICAgICAgICBldi5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKTtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIGRyYWcgZGF0YSBjYWNoZSAoZm9yIGFsbCBmb3JtYXRzL3R5cGVzKVxuICAgICAgICBldi5kYXRhVHJhbnNmZXIuY2xlYXJEYXRhKCk7XG4gICAgICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBldi50YXJnZXQuaWQpO1xuICAgICAgICBjb25zdCBkYXRhID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgICBzb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKTtcbiAgICAgICAgZXYuY3VycmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCB0cmFuc2ZlckRhdGFPbkRyYWdzdGFydCk7XG59XG5mdW5jdGlvbiBib3R0b21TdWJjb250YWluZXJMb2FkZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib3R0b21TdWJjb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm90YXRlU2hpcEJ1dHRvbkxvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENvdW50ZXIoKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIHNoaXBDb3VudGVyKCkge1xuICAgIGxldCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlwQWxsQ2xhc3Nlc0NvbnRhaW5lcicpO1xuICAgIGxldCBzaXplVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2l6ZVR3by5jbGFzc0xpc3QuYWRkKCdzaW5nbGVTaGlwQ2xhc3NDb250YWluZXInKTtcbiAgICBsZXQgc2l6ZVRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2l6ZVRocmVlLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZVNoaXBDbGFzc0NvbnRhaW5lcicpO1xuICAgIGxldCBzaXplRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpemVGb3VyLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZVNoaXBDbGFzc0NvbnRhaW5lcicpO1xuICAgIGlmIChyb3RhdGlvblRyYWNrZXIgPT0gMSkge1xuICAgICAgICBzaXplVHdvLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgICBzaXplVGhyZWUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICAgIHNpemVGb3VyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgIH1cbiAgICBpZiAoc2hpcENvdW50LmZpbHRlcih4ID0+IHggPT0gMikubGVuZ3RoID09IDApIHtcbiAgICAgICAgc2l6ZVR3by5hcHBlbmRDaGlsZChzaGlwTWFrZXIoMikpO1xuICAgICAgICBzaXplVHdvLmFwcGVuZENoaWxkKHNoaXBNYWtlcigyKSk7XG4gICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2l6ZVR3byk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNoaXBDb3VudC5maWx0ZXIoeCA9PiB4ID09IDIpLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHNpemVUd28uYXBwZW5kQ2hpbGQoc2hpcE1ha2VyKDIpKTtcbiAgICAgICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaXplVHdvKTtcbiAgICB9XG4gICAgaWYgKHNoaXBDb3VudC5maWx0ZXIoeCA9PiB4ID09IDMpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHNpemVUaHJlZS5hcHBlbmRDaGlsZChzaGlwTWFrZXIoMykpO1xuICAgICAgICBzaXplVGhyZWUuYXBwZW5kQ2hpbGQoc2hpcE1ha2VyKDMpKTtcbiAgICAgICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaXplVGhyZWUpO1xuICAgIH0gZWxzZSBpZiAoc2hpcENvdW50LmZpbHRlcih4ID0+IHggPT0gMykubGVuZ3RoID09IDEpIHtcbiAgICAgICAgc2l6ZVRocmVlLmFwcGVuZENoaWxkKHNoaXBNYWtlcigzKSk7XG4gICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2l6ZVRocmVlKTtcbiAgICB9XG4gICAgaWYgKHNoaXBDb3VudC5maWx0ZXIoeCA9PiB4ID09IDQpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHNpemVGb3VyLmFwcGVuZENoaWxkKHNoaXBNYWtlcig0KSk7XG4gICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2l6ZUZvdXIpO1xuICAgIH1cbiAgICByZXR1cm4gc2hpcENvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIGNoZWNraWZTaGlwc0FyZUFsbFBsYWNlZCgpIHtcbiAgICBpZiAoc2hpcENvdW50Lmxlbmd0aCA9PSA1KSB7XG4gICAgICAgIHNpbXBsZVBvcHVsYXRlQUkoKTtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhwbGFjZW1lbnRDb250YWluZXIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHBsYWNlbWVudENvbnRhaW5lcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZW1lbnRIZWFkaW5nJyk7XG4gICAgICAgIGgudGV4dENvbnRlbnQgPSBcIlBsYWNlIEFsbCBTaGlwcyBCZWZvcmUgU3RhcnRpbmcgdGhlIEdhbWUhXCJcbiAgICAgICAgaC5zdHlsZS5jb2xvciA9IFwiI2VmNDQ0NFwiO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlc2V0U2hpcHMoKSB7XG4gICAgcGxhY2VtZW50Qm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgY2xlYXJTaGlwQ291bnQoKTtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKHBsYWNlbWVudENvbnRhaW5lcik7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwbGFjZW1lbnRDb250YWluZXIpO1xuICAgIHJlbG9hZEJvYXJkcygpO1xuICAgIHBsYWNlbWVudE1vZHVsZUxvYWRlcigpO1xufVxuZnVuY3Rpb24gY2xlYXJTaGlwQ291bnQoKSB7XG4gICAgd2hpbGUgKHNoaXBDb3VudC5sZW5ndGggPj0gMSkge1xuICAgICAgICBzaGlwQ291bnQucG9wKCk7XG4gICAgfVxufVxuXG5cbmxldCBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbmxldCBhaUJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xubGV0IHBsYXllciA9IFwidGF5bG9yXCJcbmxldCBhaSA9IFwiY29tcHV0ZXJcIlxubGV0IGJvYXJkcyA9IG5ldyBnYW1lQm9hcmRMb2FkZXIocGxheWVyQm9hcmQsIHBsYXllciwgYWlCb2FyZCwgYWkpO1xuXG5mdW5jdGlvbiBsb2FkQm9hcmRzKCkge1xuICAgIHR3b0JvYXJkRE9NTG9hZGVyKGJvYXJkcy5wbGF5ZXJCb2FyZCwgYm9hcmRzLmFpQm9hcmQpO1xuICAgIGRvdWJsZVNjb3JlS2VlcGVyR2VuZXJhdG9yKFwiUGxheWVyXCIsIDAsIFwiQUlcIiwgMCk7XG59XG5cbmNvbnN0IHBsYXllclBvcHVsYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5wbGF5ZXJQb3B1bGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpbXBsZVBvcHVsYXRlKTtcbnBsYXllclBvcHVsYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BvcHVsYXRlQnV0dG9uJyk7XG5wbGF5ZXJQb3B1bGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUG9wdWxhdGUgUGxheWVyXCI7XG5jb25zdCBhaVBvcHVsYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5haVBvcHVsYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2ltcGxlUG9wdWxhdGVBSSk7XG5haVBvcHVsYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BvcHVsYXRlQnV0dG9uJyk7XG5haVBvcHVsYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJQb3B1bGF0ZSBBSVwiO1xuY29uc3QgYXR0YWNrQUlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmF0dGFja0FJQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXR0YWNrQUkpO1xuYXR0YWNrQUlCdXR0b24uY2xhc3NMaXN0LmFkZCgncG9wdWxhdGVCdXR0b24nKTtcbmF0dGFja0FJQnV0dG9uLnRleHRDb250ZW50ID0gXCJBdHRhY2sgQUlcIjtcbmNvbnN0IGF0dGFja1BsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYXR0YWNrUGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXR0YWNrUGxheWVyKTtcbmF0dGFja1BsYXllckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwb3B1bGF0ZUJ1dHRvbicpO1xuYXR0YWNrUGxheWVyQnV0dG9uLnRleHRDb250ZW50ID0gXCJBdHRhY2sgUGxheWVyXCJcblxuZnVuY3Rpb24gcmVzdGFydEJvYXJkKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250YWluZXIpO1xuICAgIGdlbmVyYXRlSFVEKCk7XG4gICAgcmVzZXRTaGlwcygpO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVIVUQoKSB7XG4gICAgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgYWlCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICBwbGF5ZXIgPSBcInRheWxvclwiO1xuICAgIGFpID0gXCJjb21wdXRlclwiO1xuICAgIGRvdWJsZVNjb3JlS2VlcGVyR2VuZXJhdG9yKFwiUGxheWVyXCIsIDAsIFwiQUlcIiwgMCk7XG4gICAgdHdvQm9hcmRET01Mb2FkZXIoYm9hcmRzLnBsYXllckJvYXJkLCBib2FyZHMuYWlCb2FyZCk7XG4gICAgcGxhY2VtZW50TW9kdWxlTG9hZGVyKCk7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUJ1dHRvbnMoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25Db250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyUG9wdWxhdGVCdXR0b24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhaVBvcHVsYXRlQnV0dG9uKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXR0YWNrUGxheWVyQnV0dG9uKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXR0YWNrQUlCdXR0b24pO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG4gICAgZnVuY3Rpb24gc2ltcGxlUG9wdWxhdGUoKSB7XG4gICAgICAgIGJvYXJkcy5zaW1wbGVQb3B1bGF0ZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzaW1wbGVQb3B1bGF0ZUFJKCkge1xuICAgICAgICBib2FyZHMuc2ltcGxlUG9wdWxhdGVBSSgpO1xuICAgIH1cbmZ1bmN0aW9uIHBvcHVsYXRlUGxheWVyKHNpemUsIHgsIHksIGRpcmVjdGlvbikge1xuICAgIGJvYXJkcy5wb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBkaXJlY3Rpb24pO1xufTtcbmZ1bmN0aW9uIGRlcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgZGlyZWN0aW9uKSB7XG4gICAgYm9hcmRzLmRlcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgZGlyZWN0aW9uKTtcbn1cbi8vdGhpcyBmdW5jdGlvbiBpcyB1c2VkIHdpdGggdGhlIHNoaXAgcGxhY2VtZW50IG1vZHVsZVxuICAgIC8vd2hlbmV2ZXIgeW91IHJlc2V0IHNoaXAgcGxhY2VtZW50LCB5b3UgYWxzbyBuZWVkIHRvIHJlbG9hZCBwbGF5ZXIgJiBhaSBib2FyZHNcbiAgICAvL3RvIGRlbGV0ZSBhbnkgc2hpcHMgcGxhY2VkIGR1cmluZyBwcmlvciBzaGlwIHBsYWNlbWVudCBwaGFzZVxuZnVuY3Rpb24gcmVsb2FkQm9hcmRzKCkge1xuICAgIGJvYXJkcy5yZWxvYWRCb2FyZHMoKTtcbn1cblxuXG4vL2FpQXJyYXkgYmVsb3cgY29udGFpbnMgZ2xvYmFsbHkgYXZhaWxhYmxlIGNvcHkgb2YgcGxheWVyQm9hcmQgZ3JpZCwgZm9yIHVzZSBieSBBSVxuLy9ldmVyeSB0aW1lIHRoZSBBSSBhdHRhY2tzIHBsYXllciwgc2VsZWN0cyBvbmUgZWxlbWVudCBhdCByYW5kb20gZnJvbSB0aGUgYXJyYXkgYW5kIHRoZW4gcmVtb3ZlcyBpdFxuLy9zbyB0aGF0IGZ1dHVyZSBpbnZvY2F0aW9ucyBjYW5ub3QgYXR0YWNrIHRoZSBzYW1lIGxvY2F0aW9uXG5jb25zdCBhaUFycmF5ID0gYm9hcmRzLnBsYXllckJvYXJkLmdyaWQuc2xpY2UoKTtcbmZ1bmN0aW9uIGF0dGFja0FJKHgsIHkpIHtcbiAgICBsZXQgZm91bmQgPSBib2FyZHMuYWlCb2FyZC5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSB4ICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICBpZiAoZm91bmQuaXNIaXQgPT0gdHJ1ZSkgeyBhbGVydChcIllvdSBoYXZlIGFscmVhZHkgYXR0YWNrZWQgdGhhdCBzcXVhcmUhIFRyeSBhbm90aGVyLlwiKSB9XG4gICAgaWYgKGZvdW5kLmlzSGl0ID09IGZhbHNlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IGJvYXJkcy5haUJvYXJkLmdyaWQuaW5kZXhPZihmb3VuZCk7XG4gICAgICAgIGFpQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgYm9hcmRzLmF0dGFja0FJKHgsIHkpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGF0dGFja1BsYXllcigpO1xuICAgICAgICB9LCBcIjUwMFwiKTtcbiAgICB9XG59XG5cbi8vcGxheWVyQXJyYXkgYmVsb3cgY29udGFpbnMgZ2xvYmFsbHkgYXZhaWxhYmxlIGNvcHkgb2YgcGxheWVyQm9hcmQgZ3JpZCwgZm9yIHVzZSBieSBBSVxuLy9ldmVyeSB0aW1lIHRoZSBBSSBhdHRhY2tzIHBsYXllciwgc2VsZWN0cyBvbmUgZWxlbWVudCBhdCByYW5kb20gZnJvbSB0aGUgYXJyYXkgYW5kIHRoZW4gcmVtb3ZlcyBpdFxuLy9zbyB0aGF0IGZ1dHVyZSBpbnZvY2F0aW9ucyBjYW5ub3QgYXR0YWNrIHRoZSBzYW1lIGxvY2F0aW9uXG5jb25zdCBwbGF5ZXJBcnJheSA9IGJvYXJkcy5wbGF5ZXJCb2FyZC5ncmlkLnNsaWNlKCk7XG5mdW5jdGlvbiBhdHRhY2tQbGF5ZXIoKSB7XG4gICAgaWYgKHBsYXllckFycmF5Lmxlbmd0aCA9PSAwKSByZXR1cm4gYWxlcnQoJ2dhbWUgb3ZlciEnKVxuICAgIGxldCByYW5kb20gPSBwbGF5ZXJBcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwbGF5ZXJBcnJheS5sZW5ndGgpXTtcbiAgICBsZXQgeCA9IHJhbmRvbS5YO1xuICAgIGxldCB5ID0gcmFuZG9tLlk7XG4gICAgbGV0IGluZGV4ID0gcGxheWVyQXJyYXkuaW5kZXhPZihyYW5kb20pO1xuICAgIHBsYXllckFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgYm9hcmRzLmF0dGFja1BsYXllcih4LCB5KTtcbn1cbi8vc2NyaXB0aW5nIGZvcm1zIGZvciBpbnB1dHRpbmcgY29vcmRpbmF0ZXNcbmxldCB4TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xueExhYmVsLmNsYXNzTGlzdC5hZGQoJ2F0dGFja0xhYmVsJyk7XG54TGFiZWwudGV4dENvbnRlbnQgPSBcIklucHV0IFggQ29vcmRpbmF0ZTogXCJcbmxldCB4SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xueElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xubGV0IHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG55TGFiZWwuY2xhc3NMaXN0LmFkZCgnYXR0YWNrTGFiZWwnKTtcbnlMYWJlbC50ZXh0Q29udGVudCA9IFwiSW5wdXQgWSBDb29yZGluYXRlOiBcIlxubGV0IHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG55SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbmZ1bmN0aW9uIHJldHVyblhGb3JtKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHhMYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHhJbnB1dCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lclxufVxuZnVuY3Rpb24gcmV0dXJuWUZvcm0oKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoeUxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoeUlucHV0KTtcbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5mdW5jdGlvbiBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmV0dXJuWEZvcm0oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJldHVybllGb3JtKCkpO1xuICAgIHJldHVybiBjb250YWluZXJcbn1cblxuZnVuY3Rpb24gbG9hZEFwcFdpbmRvdygpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFpbmVyJyk7XG4gICAgcGxhY2VtZW50TW9kdWxlTG9hZGVyKCk7XG4gICAgbG9hZEJvYXJkcygpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGxvYWRBcHBXaW5kb3cgfSIsImltcG9ydCB7IGpzUGFnZUxvYWRlciB9IGZyb20gJy4vbW9kdWxlcy9qYXZhc2NyaXB0LmpzJztcbmltcG9ydCB7IGhvbWVQYWdlTG9hZGVyIH0gZnJvbSAnLi9tb2R1bGVzL3dob0lBbS5qcyc7XG5cbmZ1bmN0aW9uIGhlYWRlckxvYWRlcigpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG15TmFtZSgnVGF5bG9yIEJhcmlua2EnKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG15TGlua3MoKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIG15TmFtZShuYW1lKSB7XG4gICAgbGV0IG15TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbXlOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICByZXR1cm4gbXlOYW1lO1xufVxuZnVuY3Rpb24gbXlMaW5rcygpIHtcbiAgICBsZXQgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2QmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2Jyk7XG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdsaW5rc0xpc3QnKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpbmtGYWN0b3J5KCdXaG8gSSBBbScsIGhvbWVQYWdlTG9hZGVyKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaW5rRmFjdG9yeSgnRnJvbnQtRW5kIERldmVsb3BtZW50JywganNQYWdlTG9hZGVyKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaW5rRmFjdG9yeSgnUGhpbG9zb3BoeScpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpbmtGYWN0b3J5KCdUZWFjaGluZycpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpbmtGYWN0b3J5KCdHYW1lcyBXcml0aW5nJykpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICByZXR1cm4gbmF2QmFyO1xufVxuICAgIC8vTm90ZSB0byBzZWxmOiBhZGQgJ2xpbmsnIGFzIHBhcmFtdGVyIHRvIGxpbmtGYWN0b3J5IHdoZW4gcmVhZHkgdG8gaW1wbGVtZW50IGxpbmtzXG5mdW5jdGlvbiBsaW5rRmFjdG9yeSh0ZXh0LCBjYiA9IG51bGwpIHtcbiAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBteUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIG15TGluay5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIGlmIChjYiAhPT0gbnVsbCkge1xuICAgICAgICBteUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYik7XG4gICAgfSBcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChteUxpbmspO1xuICAgIHJldHVybiBsaXN0SXRlbTtcbn1cblxuZXhwb3J0IHsgaGVhZGVyTG9hZGVyIH07IiwiaW1wb3J0IHsgY29udGVudEJveEZhY3RvcnksIHBhcmFncmFwaEZhY3RvcnksIG1haW5Db250ZW50RmFjdG9yeSwgcmVtb3ZlQWxsQ2hpbGROb2RlcywgbWFpbkNvbnRlbnQgfSBmcm9tICcuL3dob0lBbS5qcyc7XG5pbXBvcnQgeyBwcm9maWxlTG9hZGVyIH0gZnJvbSAnLi4vcHJvZmlsZS5qcyc7XG5pbXBvcnQgeyBsb2FkV2VhdGhlckFwcCB9IGZyb20gJy4uL3dlYXRoZXItYXBwL3NyYy9kb21Mb2dpYy5qcyc7XG5pbXBvcnQgeyBsb2FkQXBwV2luZG93IH0gZnJvbSAnLi4vYmF0dGxlc2hpcC1hcHAvcGVyc29uYWwtd2Vic2l0ZS1pbml0aWFsaXplci5qcyc7XG5cbmZ1bmN0aW9uIG9wZW5BcHBCdXR0b25DcmVhdG9yKHRleHQsIGNiKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2IpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdvcGVuQXBwQnV0dG9ucycpO1xuICAgIHJldHVybiBidXR0b247XG59XG5mdW5jdGlvbiBhcHBlbmRXZWF0aGVyQXBwKCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZFdlYXRoZXJBcHAoKSk7XG59XG5mdW5jdGlvbiBhcHBlbmRCYXR0bGVzaGlwKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgbG9hZEFwcFdpbmRvdygpXG59XG5mdW5jdGlvbiBPcGVuQXBwQnV0dG9uQ29udGFpbmVyQ3JlYXRvcigpIHtcbiAgICBsZXQgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYXBwQnV0dG9uQ29udGFpbmVyJylcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQob3BlbkFwcEJ1dHRvbkNyZWF0b3IoXCJXZWF0aGVyIEFwcFwiLCBhcHBlbmRXZWF0aGVyQXBwKSk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wZW5BcHBCdXR0b25DcmVhdG9yKFwiQmF0dGxlc2hpcFwiLCBhcHBlbmRCYXR0bGVzaGlwKSlcbiAgICByZXR1cm4gYnV0dG9uQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBqc01haW5Db250ZW50TG9hZGVyKCkge1xuICAgIGxldCBwMSA9IHBhcmFncmFwaEZhY3RvcnkoXCJJIGFtIGEgZnJvbnQtZW5kIHdlYiBkZXZlbG9wZXIgcHJvZmljaWVudCBpbiBIVE1MLCBDU1MsIGFuZCBKYXZhU2NyaXB0LiBJIHRhdWdodCBteXNlbGYgaG93IHRvIHVzZSB0aGVzZSB0b29scyB3aXRoIGFuIGV4Y2VsbGVudCA8YSBocmVmPSdodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vZGFzaGJvYXJkJz4gb3BlbiBzb3VyY2UgY291cnNlPC9hPiwgYW5kIEnigJltIGluIHRoZSBwcm9jZXNzIG9mIGFjaGlldmluZyBwcm9maWNpZW5jeSBpbiBkZXZlbG9wbWVudCBvbiB0aGUgYmFjayBlbmQuXCIpO1xuICAgIGxldCBwMiA9IHBhcmFncmFwaEZhY3RvcnkoXCJJIGFtIGF0dHJhY3RlZCB0byBjb2RpbmcgZm9yIGEgY291cGxlIG9mIHJlYXNvbnMuIEZpcnN0LCBJIGxpa2UgdGhlIGlkZWEgb2YgYmVpbmcgYSBraW5kIG9mIGNyYWZ0c3BlcnNvbiB3aG8gY2FuIG1ha2UgdGhpbmdzIHRoYXQgcGVvcGxlIG5lZWQuIEl04oCZcyBob25lc3Qgd29yay4gQnV0IEkgYWxzbyBmaW5kIHRoYXQgdGhlcmUgaXMgYW4gYXJ0aXN0cnkgdG8gY29kaW5nIHdoaWNoIGlzIGEgcGxlYXN1cmUgaW4gaXRzZWxmIOKAkyB0aGUgcHJvY2VzcyBvZiBpZGVudGlmeWluZyBhIGRlc2lyZWQgcmVzdWx0IGFuZCBlbmdpbmVlcmluZyBsb2dpY2FsIHN0cnVjdHVyZXMgc3VmZmljaWVudCB0byBhY2hpZXZlIHRoZSByZXN1bHQgZ2l2ZXMgbWUgY3JlYXRpdmUgc2F0aXNmYWN0aW9uLiBJdCBoaXRzIGEgcGVyZmVjdCBpbnRlcnNlY3Rpb24gYmV0d2VlbiB3aGVyZSBJIGNhbiBiZSB1c2VmdWwgYW5kIHdoYXQgSSBjYW4gZW5qb3kuXCIpXG4gICAgbGV0IHAzID0gcGFyYWdyYXBoRmFjdG9yeShcIkhlcmUgYXJlIGEgZmV3IHByb2plY3RzIHRoYXQgSSBoYXZlIGNvbXBsZXRlZC5cIilcbiAgICBsZXQgcDQgPSBwYXJhZ3JhcGhGYWN0b3J5KFwiPGEgaHJlZj0naHR0cDovL2luZGl2aWR1YWwudXRvcm9udG8uY2EvcmJhcm5leS9Ib21lLmh0bWwnPlRoaXMgaXMgdGhlIHBlcnNvbmFsIHdlYnNpdGU8L2E+IG9mIGEgcHJvZmVzc2lvbmFsIGFjcXVhaW50YW5jZSB3aG9zZSBjb250ZW50IEkgd2FzIGNvbnRyYWN0ZWQgdG8gdXBkYXRlIGFuZCBwdWJsaXNoLiBUaGlzIGludm9sdmVkIG1vZGlmeWluZyBhbiBleGlzdGluZyBjb2RlYmFzZSBhbmQgY29tcG9zaW5nIGEgc2V0IG9mIGluc3RydWN0aW9ucyB0byBoZWxwIHN0cmVhbWxpbmUgdGhlIHByb2Nlc3Mgb2YgbW9kaWZ5aW5nIGZ1dHVyZSBpdGVyYXRpb25zIG9mIHRoZSBzaXRlLlwiKTtcbiAgICBsZXQgcDUgPSBwYXJhZ3JhcGhGYWN0b3J5KFwiSGVyZSBhcmUgYSBmZXcgb3RoZXIgcHJvamVjdHMgdGhhdCBJJ3ZlIGNyZWF0ZWQuIFNlbGVjdCB0aGUgb25lIHRoYXQgeW91IHdhbnQgdG8gc2VlLlwiKVxuICAgIFxuICAgIGxldCBqc0NvbnRlbnQgPSBtYWluQ29udGVudEZhY3RvcnkoKTtcbiAgICBqc0NvbnRlbnQuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGpzQ29udGVudC5hcHBlbmRDaGlsZChwMik7XG4gICAganNDb250ZW50LmFwcGVuZENoaWxkKHAzKTtcbiAgICBqc0NvbnRlbnQuYXBwZW5kQ2hpbGQocDQpO1xuICAgIGpzQ29udGVudC5hcHBlbmRDaGlsZChwNSk7XG4gICAganNDb250ZW50LmFwcGVuZENoaWxkKE9wZW5BcHBCdXR0b25Db250YWluZXJDcmVhdG9yKCkpO1xuICAgIHJldHVybiBqc0NvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGpzUGFnZUxvYWRlcigpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKTtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRhaW5lcik7XG4gICAgbGV0IGpzQm94ID0gY29udGVudEJveEZhY3RvcnkoXCJXZWIgRGV2ZWxvcG1lbnRcIiwganNNYWluQ29udGVudExvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZmlsZUxvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQoanNCb3gpKTtcbn1cblxuZXhwb3J0IHsganNQYWdlTG9hZGVyIH07IiwiaW1wb3J0IHsgY29udGVudEJveEZhY3RvcnksIHBhcmFncmFwaEZhY3RvcnksIG1haW5Db250ZW50RmFjdG9yeSB9IGZyb20gJy4vd2hvSUFtLmpzJztcblxubGV0IHBoaWxQYXJhMSA9IHBhcmFncmFwaEZhY3RvcnkoXCJJIGRpZCBzaXggeWVhcnMgb2YgZ3JhZHVhdGUgd29yayBpbiBQaGlsb3NvcGh5IGF0IHRoZSBVbml2ZXJzaXRpZXMgb2YgT3hmb3JkIGFuZCBUb3JvbnRvLiBNeSBhcmVhIG9mIGV4cGVydGlzZSBpcyBBbmNpZW50IEdyZWVrIGFuZCBSb21hbiBQaGlsb3NvcGh5LCBhbmQgbXkgaW5xdWlyaWVzIHR5cGljYWxseSBzZWVrIHRvIHVuZGVyc3RhbmQgd2hhdCBhbmNpZW50IHBoaWxvc29waGVycyB0aG91Z2h0IHdhcyB0aGUgb3JpZ2luIGFuZCBuYXR1cmUgb2Ygb2JqZWN0aXZlIHZhbHVlcy5cIik7XG5sZXQgcGhpbFBhcmEyID0gcGFyYWdyYXBoRmFjdG9yeShcIllvdSBjYW4gZmluZCBhIHNhbXBsZSBteSByZXNlYXJjaCBoZXJlLiBUaGlzIGVzc2F5LCB3aGljaCBJIHByZXNlbnRlZCBhdCB0aGUgUmFja2hhbSBJbnRlcmRpc2NpcGxpbmFyeSBXb3Jrc2hvcCBpbiBBbmNpZW50IFBoaWxvc29waHkgYXQgdGhlIFVuaXZlcnNpdHkgb2YgTWljaGlnYW4sIGRlc2NyaWJlcyB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4gUGxhdG8ncyB0aGVvcnkgb2YgdmlydHVlLCBhbmQgaGlzIGNvbmNlcHRpb24gb2YgZGl2aW5lIGxhdy4gUGxhdG8sIEkgYXJndWUsIGRlZmVuZGVkIHRoZSB2aWV3IHRoYXQgR29kJ3MgbGF3IGdvdmVybnMgdmlydHVvdXMgY29uZHVjdC4gSXQncyBhIHNpbXBsZSBhcmd1bWVudCwgYnV0IGl0IGNvbnRyYWRpY3RzIHByZXZhaWxpbmcgb3J0aG9kb3h5IGluIHNjaG9sYXJzaGlwIG9uIEFuY2llbnQgR3JlZWsgUGhpbG9zb3BoeSwgd2hpY2ggaG9sZHMgdGhhdCBkaXZpbmUgbGF3IHRoZW9yaWVzIG9mIGV0aGljcyBmaXJzdCBvcmlnaW5hdGUgd2l0aCB0aGUgU3RvaWNzLiBCdXQgUGxhdG8gd3JpdGVzIGluIGFuIGVhcmxpZXIgY2VudHVyeS5cIilcbmxldCBwaGlsUGFyYTMgPSBwYXJhZ3JhcGhGYWN0b3J5KFwiTXkgb3RoZXIgbWFpbiBhcmVhIG9mIGludGVyZXN0IGlzIHRoZSBoaXN0b3J5IG9mIHBoaWxvc29waGljYWwgdGhlb3JpZXMgb2YgYmVhdXR5LiBIZXJlIGlzIGEgbGluayB0byBhIHBhcGVyIHdoZXJlIEkgaW52ZXN0aWdhdGUgQXJ0aHVyIFNjaG9wZW5oYXVlcidzIHVuZGVyc3RhbmRpbmcgb2Ygd2hhdCBleGFjdGx5IGh1bWFuIGJlaW5ncyBncmFzcCB3aXRoIHRoZWlyIG1pbmRzIHdoZW4gdGhleSBncmFzcCB0aGF0IHNvbWV0aGluZyBpcyBiZWF1dGlmdWwuIEkgbGlrZSB0byB0aGluayB0aGF0IFNjaG9wZW5oYXVlciBpcyBjbG9zZSB0byB0aGUgdHJ1dGggYWJvdXQgdGhpcyBpc3N1ZS5cIilcblxuXG5sZXQgcGhpbENvbnRlbnQgPSBtYWluQ29udGVudEZhY3RvcnkoKTtcbnBoaWxDb250ZW50LmFwcGVuZENoaWxkKHBoaWxQYXJhMSk7XG5waGlsQ29udGVudC5hcHBlbmRDaGlsZChwaGlsUGFyYTIpO1xucGhpbENvbnRlbnQuYXBwZW5kQ2hpbGQocGhpbFBhcmEzKTtcblxubGV0IHBoaWxvc29waHlCb3ggPSBjb250ZW50Qm94RmFjdG9yeShcIlBoaWxvc29waHlcIiwgcGhpbENvbnRlbnQpO1xuXG5leHBvcnQgeyBwaGlsb3NvcGh5Qm94IH0iLCJpbXBvcnQgeyBwcm9maWxlTG9hZGVyIH0gZnJvbSAnLi4vcHJvZmlsZS5qcyc7XG5pbXBvcnQgeyBwaGlsb3NvcGh5Qm94IH0gZnJvbSAnLi9waGlsb3NvcGh5LmpzJztcbi8vaW1wb3J0IHsganNCb3ggfSBmcm9tICcuL21vZHVsZXMvamF2YXNjcmlwdC5qcyc7XG5cbmZ1bmN0aW9uIGhvbWVQYWdlTG9hZGVyKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRhaW5lcicpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZmlsZUxvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQod2hvSUFtKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIG1haW5Db250ZW50KG5vZGUpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIC8vY29udGFpbmVyLmFwcGVuZENoaWxkKGpzQm94KTtcbiAgICAvL2NvbnRhaW5lci5hcHBlbmRDaGlsZChwaGlsb3NvcGh5Qm94KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxubGV0IHdob0lBbVBhcmExID0gcGFyYWdyYXBoRmFjdG9yeShcIkF0IHZlcm8gZW9zIGV0IGFjY3VzYW11cyBldCBpdXN0byBvZGlvIGRpZ25pc3NpbW9zIGR1Y2ltdXMgcXVpIGJsYW5kaXRpaXMgcHJhZXNlbnRpdW0gdm9sdXB0YXR1bSBkZWxlbml0aSBhdHF1ZSBjb3JydXB0aSBxdW9zIGRvbG9yZXMgZXQgcXVhcyBtb2xlc3RpYXMgZXhjZXB0dXJpIHNpbnQgb2NjYWVjYXRpIGN1cGlkaXRhdGUgbm9uIHByb3ZpZGVudCwgc2ltaWxpcXVlIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0aWEgYW5pbWksIGlkIGVzdCBsYWJvcnVtIGV0IGRvbG9ydW0gZnVnYS4gRXQgaGFydW0gcXVpZGVtIHJlcnVtIGZhY2lsaXMgZXN0IGV0IGV4cGVkaXRhIGRpc3RpbmN0aW8uXCIpO1xubGV0IHdob0lBbSA9IGNvbnRlbnRCb3hGYWN0b3J5KFwiV2hvIEkgQW1cIiwgd2hvSUFtUGFyYTEpO1xuXG5cbmZ1bmN0aW9uIGhlYWRlckZhY3RvcnkoaGVhZGVyKSB7XG4gICAgbGV0IGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGguY2xhc3NMaXN0LmFkZCgnY29udGVudEhlYWRlcicpO1xuICAgIGgudGV4dENvbnRlbnQgPSBoZWFkZXI7XG4gICAgcmV0dXJuIGg7XG59XG5mdW5jdGlvbiBwYXJhZ3JhcGhGYWN0b3J5KHBhcmEpIHtcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRQYXJhZ3JhcGgnKTtcbiAgICBwLmlubmVySFRNTCA9IHBhcmE7XG4gICAgcmV0dXJuIHA7XG59XG5mdW5jdGlvbiBtYWluQ29udGVudEZhY3RvcnkoKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIGNvbnRlbnRCb3hGYWN0b3J5KGhlYWRlciwgY29udGVudCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudEJveCcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJGYWN0b3J5KGhlYWRlcikpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBob21lUGFnZUxvYWRlciwgY29udGVudEJveEZhY3RvcnksIHBhcmFncmFwaEZhY3RvcnksIG1haW5Db250ZW50RmFjdG9yeSwgbWFpbkNvbnRlbnQsIHJlbW92ZUFsbENoaWxkTm9kZXMgfTsiLCJpbXBvcnQgUGhvdG8gZnJvbSAnLi90ZW1wSW1hZ2UuanBnJztcblxuZnVuY3Rpb24gcHJvZmlsZUxvYWRlcigpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvZmlsZScpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9maWxlUGhvdG8oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGludHJvZHVjdGlvbigpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gcHJvZmlsZVBob3RvKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcHJvZmlsZVBob3RvID0gbmV3IEltYWdlKCk7XG4gICAgcHJvZmlsZVBob3RvLnNyYyA9IFBob3RvO1xuICAgIHByb2ZpbGVQaG90by5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2ZpbGVQaG90bycpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2ZpbGVQaG90byk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIGludHJvZHVjdGlvbigpIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKG15TmFtZSgpKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobXlEZXNjcmlwdG9ycygpKTtcbiAgICByZXR1cm4gZGl2O1xufVxuZnVuY3Rpb24gbXlOYW1lKCkge1xuICAgIGxldCBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoLnRleHRDb250ZW50ID0gXCJUYXlsb3IgQmFyaW5rYVwiO1xuICAgIGguc2V0QXR0cmlidXRlKCdpZCcsICdwcm9maWxlTmFtZScpO1xuICAgIHJldHVybiBoO1xufVxuZnVuY3Rpb24gbXlEZXNjcmlwdG9ycygpIHtcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gXCJSZXNlYXJjaGVyIC0gRWR1Y2F0b3IgLSBXcml0ZXIgLSBQcm9ncmFtbWVyLlwiXG4gICAgcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2ZpbGVEZXNjcmlwdGlvbicpXG4gICAgcmV0dXJuIHA7XG59XG5leHBvcnQgeyBwcm9maWxlTG9hZGVyIH07IiwiLy9hcnJheSB0byBzdG9yZSB3ZWF0aGVyIGluZm8gd2hlbiBmZXRjaGVkICYgcHJvY2Vzc2VkXG5sZXQgd2VhdGhlckRhdGFBcnJheSA9IFtdO1xuXG4vL3RyeS1jYXRjaCBibG9jayB0byBzdWJtaXQgJiBwcm9jZXNzIHVzZXIgcmVxdWVzdCBmb3Igd2VhdGhlciBpbmZvXG5hc3luYyBmdW5jdGlvbiBzdWJtaXRSZXF1ZXN0KHNlYXJjaElucHV0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoc2VhcmNoSW5wdXQpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLndlYXRoZXJbMF0pO1xuICAgICAgICB3ZWF0aGVyRGF0YUFycmF5ID0gYXdhaXQgcHJvY2Vzc0RhdGEoZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhQXJyYXkpO1xuICAgICAgICByZXR1cm4gd2VhdGhlckRhdGFBcnJheTtcbiAgICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoXCJJbnZhbGlkIENpdHkgTmFtZVwiKTtcbiAgICB9XG59IFxuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKGNpdHkpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPScgKyBjaXR5ICsgJyZ1bml0cz1tZXRyaWMmYXBwaWQ9YzZmNWVmMjI1YWQ5NzgwZGM1Y2YzNzMyYWRjNjNkODEnLCB7XG4gICAgICAgIG1vZGU6ICdjb3JzJ1xuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuZnVuY3Rpb24gcHJvY2Vzc0RhdGEoZGF0YSkge1xuICAgIGxldCBjaXR5TmFtZSA9IGRhdGEubmFtZTtcbiAgICBsZXQgdGVtcCA9IGRhdGEubWFpbi50ZW1wO1xuICAgIGxldCB0ZW1wRmVlbCA9IGRhdGEubWFpbi5mZWVsc19saWtlO1xuICAgIGxldCBza3lDb3ZlciA9IGRhdGEud2VhdGhlclswXVsnZGVzY3JpcHRpb24nXTtcbiAgICBsZXQgd2luZFNwZWVkID0gZGF0YS53aW5kLnNwZWVkO1xuICAgIGxldCBodW1pZGl0eSA9IGRhdGEubWFpbi5odW1pZGl0eTtcbiAgICBsZXQgd2VhdGhlckRhdGEgPSBbY2l0eU5hbWUsIHRlbXAsIHRlbXBGZWVsLCBza3lDb3Zlciwgd2luZFNwZWVkLCBodW1pZGl0eV07XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG5leHBvcnQgeyBzdWJtaXRSZXF1ZXN0LCB3ZWF0aGVyRGF0YUFycmF5IH0iLCJpbXBvcnQgeyB3ZWF0aGVyRGF0YUFycmF5IH0gZnJvbSAnLi9hcGlMb2dpYyc7XG5pbXBvcnQgeyBzdWJtaXRSZXF1ZXN0IH0gZnJvbSAnLi9hcGlMb2dpYy5qcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL2ltYWdlcy9pY29uMi5wbmcnO1xuY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG5teUljb24uc3JjID0gSWNvbjtcbm15SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlYXRoZXJJY29uJyk7XG5cblxuZnVuY3Rpb24gbG9hZFdlYXRoZXJBcHAoKSB7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VhdGhlcldyYXBwZXInKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFwcEhlYWRlckxvYWRlcigpKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHdlYXRoZXJBcHBDb250ZW50TG9hZGVyKCkpO1xuICAgIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiBhcHBIZWFkZXJMb2FkZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlYXRoZXJIZWFkZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGVudCgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQXBwQnRuKCkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiBoZWFkZXJDb250ZW50KCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd3ZWF0aGVySGVhZGVyTG9nbycpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChteUljb24pO1xuICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnV2VhdGhlciBBcHAnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoMSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIHJlbW92ZUFwcEJ0bigpIHtcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVtb3ZlV2VhdGhlckFwcEJ0bicpO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUFwcClcbiAgICByZXR1cm4gYnRuO1xufVxuZnVuY3Rpb24gcmVtb3ZlQXBwKCkge1xuICAgIGxldCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcldyYXBwZXInKTtcbiAgICB3aGlsZSggYXBwLmhhc0NoaWxkTm9kZXMoKSApe1xuICAgIGFwcC5yZW1vdmVDaGlsZChhcHAubGFzdENoaWxkKTtcbiAgICB9XG4gICAgYXBwLnJlbW92ZSgpO1xufVxuLy9jcmVhdGluZyBzZWFyY2hEaXNwbGF5IG91dHNpZGUgb2Ygd2VhdGhlckFwcENvbnRlbnRMb2FkZXIoKSBzbyBpdCBjYW4gYmUgYWNjZXNzaWJsZSB0byBsb2FkU2VhcmNoVG9Eb20oKVxubGV0IHNlYXJjaERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNlYXJjaERpc3BsYXkuc2V0QXR0cmlidXRlKCdpZCcsICdzZWFyY2hEaXNwbGF5Jyk7XG5mdW5jdGlvbiB3ZWF0aGVyQXBwQ29udGVudExvYWRlcigpIHtcbiAgICBsZXQgY29udGFpbmVyID0gaW50ZXJmYWNlQ29udGFpbmVyTG9hZGVyKCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJGb3JtTG9hZGVyKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hEaXNwbGF5KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBpbnRlcmZhY2VDb250YWluZXJMb2FkZXIoKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlYXRoZXJDb250ZW50Jyk7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIHdlYXRoZXJGb3JtTG9hZGVyKCkge1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtJyk7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VhdGhlcklucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdDaXR5IE5hbWUnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgLy9idXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlYXRoZXJCdG4nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlNlYXJjaFwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0udmFsdWU7XG4gICAgICAgIHN1Ym1pdFJlcXVlc3QodmFsKS50aGVuKGxvYWRTZWFyY2hUb0RPTSk7ICBcbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybTtcbn1cblxuXG5sZXQgc2VhcmNoUmVzdWx0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZWFyY2hSZXN1bHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VhcmNoUmVzdWx0Q29udGFpbmVyJyk7XG5sZXQgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5sZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ3AtaW5mbycpO1xuICAgIHRlbXAuc2V0QXR0cmlidXRlKCdpZCcsICd0ZW1wJyk7XG5sZXQgdGVtcEZlZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGVtcEZlZWwuY2xhc3NMaXN0LmFkZCgncC1pbmZvJyk7XG5sZXQgc2t5Q292ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc2t5Q292ZXIuY2xhc3NMaXN0LmFkZCgncC1pbmZvJyk7XG5sZXQgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKCdwLWluZm8nKTtcbmxldCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKCdwLWluZm8nKTtcblxuXG5mdW5jdGlvbiBnaXZlVGV4dFRvRWxlbWVudHMoYXJyYXkpIHtcbiAgICBsZXQgc2t5Q292ZXJUZXh0ID0gYXJyYXlbM107XG4gICAgc2t5Q292ZXJUZXh0ID0gc2t5Q292ZXJUZXh0LnRvTG93ZXJDYXNlKClcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLm1hcCgocykgPT4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc3Vic3RyaW5nKDEpKVxuICAgICAgICAuam9pbignICcpO1xuICAgIGNvbnNvbGUubG9nKHNreUNvdmVyVGV4dCk7XG4gICAgXG4gICAgY2l0eS50ZXh0Q29udGVudCA9IGFycmF5WzBdO1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSBhcnJheVsxXSArIFwiwrBDXCI7XG4gICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSBcIkZlZWxzIGxpa2U6IFwiICsgYXJyYXlbMl0rIFwiwrBDXCI7XG4gICAgc2t5Q292ZXIudGV4dENvbnRlbnQgPSBcIlNreSBDb3ZlcjogXCIgKyBza3lDb3ZlclRleHQ7XG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gXCJXaW5kOiBcIiArIGFycmF5WzRdICsgXCIgIGttL2hcIjtcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IFwiSHVtaWRpdHk6IFwiICsgYXJyYXlbNV0gKyBcIiVcIlxufVxuYXN5bmMgZnVuY3Rpb24gbG9hZFNlYXJjaFRvRE9NKCkge1xuICAgIGdpdmVUZXh0VG9FbGVtZW50cyh3ZWF0aGVyRGF0YUFycmF5KTtcbiAgICBzZWFyY2hSZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eSk7XG4gICAgc2VhcmNoUmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXApO1xuICAgIHNlYXJjaFJlc3VsdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wRmVlbCk7XG4gICAgc2VhcmNoUmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNreUNvdmVyKTtcbiAgICBzZWFyY2hSZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcbiAgICBzZWFyY2hSZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xuICAgIHNlYXJjaERpc3BsYXkuYXBwZW5kQ2hpbGQoc2VhcmNoUmVzdWx0Q29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCB7IGxvYWRTZWFyY2hUb0RPTSwgd2VhdGhlckFwcENvbnRlbnRMb2FkZXIsIGxvYWRXZWF0aGVyQXBwIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaGVhZGVyTG9hZGVyIH0gZnJvbSAnLi9zaXRlLWNvbnRlbnRzL2hlYWRlci5qcyc7XG5pbXBvcnQgeyBob21lUGFnZUxvYWRlciB9IGZyb20gJy4vc2l0ZS1jb250ZW50cy9tb2R1bGVzL3dob0lBbS5qcyc7XG5cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXJMb2FkZXIoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhvbWVQYWdlTG9hZGVyKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==