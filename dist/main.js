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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: Arial, Helvetica, sans-serif\n}\n/* styles for header */\n#header {\n    display: flex;\n    width: 100%;\n}\n#nav {\n    display: flex;\n    width: 70%;\n}\n#linksList {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    justify-content: space-around;\n    list-style: none;\n}\n/* styles for main content */\n#mainContainer {\n    display: flex;\n    gap: 10px;\n}\n\n.contentBox {\n    display: flex;\n    flex-direction: column;\n}\n.homePageLoader {\n\n}\n\n/* styles for profile */\n#profile {\n    width: 400px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n#profilePhoto {\n    height: 300px;\n}\n\n#profileDescription, #profileName {\n    width: 350px;\n    display: flex;\n    justify-content: center;\n}\n\n/* styles for Philosophy */\n\n#italic {\n    font-style: italic;\n}\n\n/* styles for JS portfolio */\n#appButtonContainer {\n    display: flex;\n    gap: 15px;\n}\n.openAppButtons {\n    font-size: 18px;\n    height: 70px;\n    width: 140px;\n    border-radius: 10px;\n}\n\n/* styles for weather App */\n\n#weatherWrapper {\n    border-radius: 5px;\n    background-color: #1e293b;\n    width: 450px;\n    position: absolute;\n    top: 100px;\n}\n\n#weatherHeader,\n#weatherContent {\n    width: 390px;\n}\n\n#weatherHeader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n    gap: 15px;\n    background-color: #1e293b;\n    color: white;\n    height: 15%;\n    border-radius: 5px;\n}\n\n#weatherIcon {\n    height: 43px;\n    filter: invert(100%);\n    -webkit-filter: invert(100%);\n}\n\n#weatherHeaderLogo {\n    display: flex;\n}\n\n#removeWeatherAppBtn {\n    background-color: #1e293b;\n    color: white;\n    font-size: 24px;\n    position: relative;\n    left: 55px;\n    bottom: 20px;\n    border: none;\n    box-shadow: none;\n    background: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding-bottom: 3px;\n    padding-left: 7px;\n    padding-right: 7px;\n}\n\n#weatherContent {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    justify-content: center;\n    background-color: #93c5fd;\n    padding: 30px;\n    height: 85%;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n#weatherContent>div {\n    gap: 10px;\n    height: 7%;\n    display: flex;\n}\n\n#weatherBtn,\n#weatherInput {\n    padding: 0.5rem;\n    border: none;\n    border-radius: 5px;\n    color: inherit;\n    font-family: inherit;\n    font-size: 18px;\n    outline: none;\n    height: 37px;\n}\n#weatherBtn {\n    height: 37px;\n}\n\n#weatherBtn {\n    width: 80px;\n    margin-left: 10px;\n}\n\n#form {\n    gap: 10px;\n}\n\n.searchResultContainer {\n    /*position: absolute;\n    top: 30%;\n    left: 50%;\n    margin-left: -175px;*/\n    background-color: #1e293b;\n    width: 330px;\n    height: 285px;\n    border-radius: 10px;\n    border: solid white 3px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #93c5fd;\n    gap: 10px;\n}\n\n.searchResultContainer>h2 {\n    font-size: 36px;\n    margin-bottom: 8px;\n    color: #cbd5e1;\n}\n\n#temp {\n    font-size: 30px;\n    margin-bottom: 8px;\n}\n\n.p-info {\n    color: white;\n    font-size: 18px;\n}\n\n/*styles for battleship*/\n\n#container {\n    position: absolute;\n    background-color: #d6d3d1;\n\n}\n\n#battleShipContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 10px;\n    position: relative;\n}\n\n/*styles for the placement module */\n.placement-module-container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 10px;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    width: 800px;\n    height: 660px;\n    background-color: grey;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    padding-right: 30px;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n}\n\n.placementTextBox {\n    height: 10%;\n    margin-top: -11px;\n    margin-bottom: 23px;\n}\n\n.placementTextContent {\n    text-shadow: black 2px 2px;\n    font-size: 40px;\n    color: #22d3ee;\n}\n\n.middleSubcontainer,\n.rightInfoSubcontainer {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n}\n\n.middleSubcontainer {\n    gap: 30px;\n}\n\n.rightInfoSubcontainer {\n    gap: 25px;\n    flex-direction: column;\n    align-items: center;\n}\n\n.rightInfoButtonsContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 40px;\n    padding: 5px;\n}\n\n.bottomSubcontainer {\n    display: flex;\n    gap: 55px;\n    height: 25%;\n    margin-top: 20px;\n\n}\n\n.placementInstructionBox {\n    background-color: #d6d3d1;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border-radius: 20px;\n    padding-bottom: 5px;\n}\n\n.headingContainer {\n    display: flex;\n    justify-content: center;\n    margin-bottom: -20px;\n}\n\n.shipAllClassesContainer {\n    display: flex;\n    flex-direction: row;\n    grid-template-columns: repeat(5, 1fr);\n    background-color: rgba(0, 0, 255, 0);\n    gap: 20px;\n    width: 400px;\n\n}\n\n.singleShipClassContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.ship {\n    display: flex;\n    gap: 1px;\n}\n\n.shipAlt {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    border: solid black 2px;\n}\n\n/*styles for the two grids and coordinates */\n.doubleBoardContainer {\n    display: flex;\n    gap: 175px;\n    padding: 10px;\n}\n\n.singleBoardContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.xCoordinateContainer {\n    display: flex;\n    gap: 1px;\n    margin-left: 35px;\n    margin-bottom: -10px;\n}\n\n.yCoordinateContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    margin-top: 10px;\n}\n\n.leftSquare {\n    display: flex;\n    justify-content: center;\n}\n\n.leftSquare,\n.upperSquare {\n    height: 35px;\n    width: 35px;\n    display: flex;\n    justify-content: center;\n}\n\n.subcontainer {\n    display: flex;\n}\n\n.placementSquare {\n    height: 35px;\n    width: 35px;\n    background-color: red;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 1;\n}\n\n.square,\n.aiSquare {\n    border: solid black;\n    color: black;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.square:hover,\n.aiSquare:hover,\n.placementSquare:hover {\n    border: solid black;\n    color: black;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #cbd5e1;\n}\n\n.squareContainer {}\n\n.grid-container {\n    height: 350px;\n    width: 350px;\n    display: grid;\n    grid-template-columns: repeat(10, 35px);\n    grid-template-rows: repeat(10, 35px);\n    grid-auto-flow: column;\n    gap: 1px;\n}\n\n/* styles for score card */\n.singleBoardScoreContainer {\n    display: flex;\n    gap: 5px;\n    justify-content: left;\n}\n\n/*styles for game controller hud*/\n.scoreKeeperContainer {\n    display: flex;\n    gap: 390px;\n    text-shadow: #22d3ee 2px 2px;\n\n}\n\n.placementButton {\n    height: 60px;\n    width: 120px;\n    font-size: 20px;\n    border-radius: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #22d3ee;\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n}\n\n.buttonContainer {\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n}\n\n.formContainer {\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n    margin: 10px;\n}\n\n.winnerCard {\n    background-color: #dc2626;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n    border-radius: 20px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 10px;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    height: 276px;\n    width: 350px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n}\n\n.winnerAnnouncement {\n    font-size: 80px;\n}\n\n\n/*styles for toDoList */\n\n#body {\n    padding: 0;\n    margin: 0;\n    font-family: Arial, sans-serif;\n    height: 100%;\n    /*overflow: hidden*/\n}\n\n#content {\n    display: flex;\n}\n\n/*header*/\n#headerContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #5eead4;\n    color: white;\n    font-size: 30px;\n    height: 60px;\n    width: 100%;\n}\n\n.leftHeaderContent {\n    display: flex;\n    align-items: center;\n    height: 30px;\n    padding: 5px;\n    gap: 5px;\n    margin-left: 40px;\n}\n\n.toDo {\n    display: flex;\n    align-items: center;\n}\n\n.headerIcon {\n    height: 35px;\n    filter: brightness(0) invert(1);\n}\n\n#removeOrgnizerBtn {\n    background-color: white;\n    color: #5eead4;\n    border-radius: 10px;\n    margin-right: 10px;\n    font-size: 32px;\n    height: 40px;\n    box-shadow: none;\n    text-align: center;\n    padding-bottom: 40px;\n    padding-left: 7px;\n    padding-right: 7px;\n}\n\n\n/*sidebar*/\n.sidebar {\n    background-color: #f8fafc;\n    height: 100vh;\n    width: 21%;\n    display: flex;\n    flex-direction: column;\n    padding-top: 40px;\n    font-size: 20px;\n\n}\n\n.sidebarAddTaskButton {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding-bottom: 15px;\n}\n\n.createTask {\n    height: 70px;\n    width: 200px;\n    border-radius: 20px;\n    font-size: 25px;\n}\n\n.sidebarIntegratedItem {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 20px;\n    padding-right: 25px;\n}\n\n.sidebarItemSelected {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 10px;\n    background-color: #5eead4;\n    color: white;\n}\n\n.sidebarIntegratedItem2 {\n    display: flex;\n    flex-direction: column;\n}\n\n.sideBarRightComponentButtonContainer {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f8fafc;\n}\n\n.sideBarRightComponentButton {\n    width: 30px;\n    height: 30px;\n}\n\n.sidebarListItemContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 35px;\n    padding-right: 20px;\n}\n\n.sidebarListItemContainerSelected {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 35px;\n    padding-right: 20px;\n    background-color: #5eead4;\n    color: white;\n}\n\n.sidebarListIconButton {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.sidebarListIcon {\n    height: 25px;\n}\n\n/* new Task Popup */\n.newTaskCard {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 250px;\n    right: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n    height: 230px;\n    width: 600px;\n    border: solid black;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 5px 5px 5px black;\n    font-size: 25px;\n}\n\n.taskCardTextBorder {\n    display: flex;\n    flex-direction: column;\n    width: 75%;\n    align-items: center;\n    gap: 25px;\n    margin-bottom: 20px;\n}\n\n.taskInfoFirstRow {\n    display: flex;\n    width: 80%;\n    justify-content: center;\n    gap: 20px;\n}\n\n.taskInfoItemContainer {\n    display: flex;\n    gap: 5px;\n}\n\n.cardButtonIntegrator {\n    display: flex;\n    gap: 20px;\n}\n\n.taskCardButton {\n    width: 130px;\n    height: 50px;\n    border-radius: 20px;\n    border: solid black;\n    font-size: 20px;\n}\n\n#addTask {\n    background-color: #5eead4;\n    color: white;\n}\n\n#title,\n#date,\n#list {\n    font-size: 20px;\n}\n\n/* new List Popup */\n.newListCard {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 250px;\n    right: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n    height: 230px;\n    width: 450px;\n    border: solid black;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 5px 5px 5px black;\n    gap: 35px;\n}\n\n.cardTextBorder {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n#listName {\n    height: 30px;\n    width: 200px;\n    font-size: 20px;\n}\n\n#listNameLabel {\n    font-size: 20px;\n}\n\n.newListCardButton {\n    width: 130px;\n    height: 50px;\n    border-radius: 20px;\n    border: solid black;\n    font-size: 20px;\n}\n\n#listAdd {\n    background-color: #5eead4;\n    color: white;\n}\n\n/* main list content */\n\n.mainContainer {\n    width: 79%\n}\n\n.integratedItem {\n    padding-top: 20px;\n    padding-left: 90px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 90%;\n\n}\n\n.titleContainer {}\n\n.listContentContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n}\n\n.listItemContainer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 60%;\n    padding-left: 20px;\n    padding-right: 20px;\n    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.3);\n    padding-bottom: 5px;\n}\n\n.listItemIconContainer {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.listItemIconContainer>button {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.listItemIconContainer>button>img {\n    width: 25px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    font-family: Arial, Helvetica, sans-serif\n}\n/* styles for header */\n#header {\n    display: flex;\n    width: 100%;\n}\n#nav {\n    display: flex;\n    width: 70%;\n}\n#linksList {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    justify-content: space-around;\n    list-style: none;\n}\n/* styles for main content */\n#mainContainer {\n    display: flex;\n    gap: 10px;\n}\n\n.contentBox {\n    display: flex;\n    flex-direction: column;\n}\n.homePageLoader {\n\n}\n\n/* styles for profile */\n#profile {\n    width: 400px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n#profilePhoto {\n    height: 300px;\n}\n\n#profileDescription, #profileName {\n    width: 350px;\n    display: flex;\n    justify-content: center;\n}\n\n/* styles for Philosophy */\n\n#italic {\n    font-style: italic;\n}\n\n/* styles for JS portfolio */\n#appButtonContainer {\n    display: flex;\n    gap: 15px;\n}\n.openAppButtons {\n    font-size: 18px;\n    height: 70px;\n    width: 140px;\n    border-radius: 10px;\n}\n\n/* styles for weather App */\n\n#weatherWrapper {\n    border-radius: 5px;\n    background-color: #1e293b;\n    width: 450px;\n    position: absolute;\n    top: 100px;\n}\n\n#weatherHeader,\n#weatherContent {\n    width: 390px;\n}\n\n#weatherHeader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n    gap: 15px;\n    background-color: #1e293b;\n    color: white;\n    height: 15%;\n    border-radius: 5px;\n}\n\n#weatherIcon {\n    height: 43px;\n    filter: invert(100%);\n    -webkit-filter: invert(100%);\n}\n\n#weatherHeaderLogo {\n    display: flex;\n}\n\n#removeWeatherAppBtn {\n    background-color: #1e293b;\n    color: white;\n    font-size: 24px;\n    position: relative;\n    left: 55px;\n    bottom: 20px;\n    border: none;\n    box-shadow: none;\n    background: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding-bottom: 3px;\n    padding-left: 7px;\n    padding-right: 7px;\n}\n\n#weatherContent {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    justify-content: center;\n    background-color: #93c5fd;\n    padding: 30px;\n    height: 85%;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n#weatherContent>div {\n    gap: 10px;\n    height: 7%;\n    display: flex;\n}\n\n#weatherBtn,\n#weatherInput {\n    padding: 0.5rem;\n    border: none;\n    border-radius: 5px;\n    color: inherit;\n    font-family: inherit;\n    font-size: 18px;\n    outline: none;\n    height: 37px;\n}\n#weatherBtn {\n    height: 37px;\n}\n\n#weatherBtn {\n    width: 80px;\n    margin-left: 10px;\n}\n\n#form {\n    gap: 10px;\n}\n\n.searchResultContainer {\n    /*position: absolute;\n    top: 30%;\n    left: 50%;\n    margin-left: -175px;*/\n    background-color: #1e293b;\n    width: 330px;\n    height: 285px;\n    border-radius: 10px;\n    border: solid white 3px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #93c5fd;\n    gap: 10px;\n}\n\n.searchResultContainer>h2 {\n    font-size: 36px;\n    margin-bottom: 8px;\n    color: #cbd5e1;\n}\n\n#temp {\n    font-size: 30px;\n    margin-bottom: 8px;\n}\n\n.p-info {\n    color: white;\n    font-size: 18px;\n}\n\n/*styles for battleship*/\n\n#container {\n    position: absolute;\n    background-color: #d6d3d1;\n\n}\n\n#battleShipContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 10px;\n    position: relative;\n}\n\n/*styles for the placement module */\n.placement-module-container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 10px;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    width: 800px;\n    height: 660px;\n    background-color: grey;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    padding-right: 30px;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n}\n\n.placementTextBox {\n    height: 10%;\n    margin-top: -11px;\n    margin-bottom: 23px;\n}\n\n.placementTextContent {\n    text-shadow: black 2px 2px;\n    font-size: 40px;\n    color: #22d3ee;\n}\n\n.middleSubcontainer,\n.rightInfoSubcontainer {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n}\n\n.middleSubcontainer {\n    gap: 30px;\n}\n\n.rightInfoSubcontainer {\n    gap: 25px;\n    flex-direction: column;\n    align-items: center;\n}\n\n.rightInfoButtonsContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 40px;\n    padding: 5px;\n}\n\n.bottomSubcontainer {\n    display: flex;\n    gap: 55px;\n    height: 25%;\n    margin-top: 20px;\n\n}\n\n.placementInstructionBox {\n    background-color: #d6d3d1;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border-radius: 20px;\n    padding-bottom: 5px;\n}\n\n.headingContainer {\n    display: flex;\n    justify-content: center;\n    margin-bottom: -20px;\n}\n\n.shipAllClassesContainer {\n    display: flex;\n    flex-direction: row;\n    grid-template-columns: repeat(5, 1fr);\n    background-color: rgba(0, 0, 255, 0);\n    gap: 20px;\n    width: 400px;\n\n}\n\n.singleShipClassContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.ship {\n    display: flex;\n    gap: 1px;\n}\n\n.shipAlt {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    border: solid black 2px;\n}\n\n/*styles for the two grids and coordinates */\n.doubleBoardContainer {\n    display: flex;\n    gap: 175px;\n    padding: 10px;\n}\n\n.singleBoardContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.xCoordinateContainer {\n    display: flex;\n    gap: 1px;\n    margin-left: 35px;\n    margin-bottom: -10px;\n}\n\n.yCoordinateContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    margin-top: 10px;\n}\n\n.leftSquare {\n    display: flex;\n    justify-content: center;\n}\n\n.leftSquare,\n.upperSquare {\n    height: 35px;\n    width: 35px;\n    display: flex;\n    justify-content: center;\n}\n\n.subcontainer {\n    display: flex;\n}\n\n.placementSquare {\n    height: 35px;\n    width: 35px;\n    background-color: red;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 1;\n}\n\n.square,\n.aiSquare {\n    border: solid black;\n    color: black;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.square:hover,\n.aiSquare:hover,\n.placementSquare:hover {\n    border: solid black;\n    color: black;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #cbd5e1;\n}\n\n.squareContainer {}\n\n.grid-container {\n    height: 350px;\n    width: 350px;\n    display: grid;\n    grid-template-columns: repeat(10, 35px);\n    grid-template-rows: repeat(10, 35px);\n    grid-auto-flow: column;\n    gap: 1px;\n}\n\n/* styles for score card */\n.singleBoardScoreContainer {\n    display: flex;\n    gap: 5px;\n    justify-content: left;\n}\n\n/*styles for game controller hud*/\n.scoreKeeperContainer {\n    display: flex;\n    gap: 390px;\n    text-shadow: #22d3ee 2px 2px;\n\n}\n\n.placementButton {\n    height: 60px;\n    width: 120px;\n    font-size: 20px;\n    border-radius: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #22d3ee;\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n}\n\n.buttonContainer {\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n}\n\n.formContainer {\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n    margin: 10px;\n}\n\n.winnerCard {\n    background-color: #dc2626;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n    border-radius: 20px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 10px;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    height: 276px;\n    width: 350px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n}\n\n.winnerAnnouncement {\n    font-size: 80px;\n}\n\n\n/*styles for toDoList */\n\n#body {\n    padding: 0;\n    margin: 0;\n    font-family: Arial, sans-serif;\n    height: 100%;\n    /*overflow: hidden*/\n}\n\n#content {\n    display: flex;\n}\n\n/*header*/\n#headerContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #5eead4;\n    color: white;\n    font-size: 30px;\n    height: 60px;\n    width: 100%;\n}\n\n.leftHeaderContent {\n    display: flex;\n    align-items: center;\n    height: 30px;\n    padding: 5px;\n    gap: 5px;\n    margin-left: 40px;\n}\n\n.toDo {\n    display: flex;\n    align-items: center;\n}\n\n.headerIcon {\n    height: 35px;\n    filter: brightness(0) invert(1);\n}\n\n#removeOrgnizerBtn {\n    background-color: white;\n    color: #5eead4;\n    border-radius: 10px;\n    margin-right: 10px;\n    font-size: 32px;\n    height: 40px;\n    box-shadow: none;\n    text-align: center;\n    padding-bottom: 40px;\n    padding-left: 7px;\n    padding-right: 7px;\n}\n\n\n/*sidebar*/\n.sidebar {\n    background-color: #f8fafc;\n    height: 100vh;\n    width: 21%;\n    display: flex;\n    flex-direction: column;\n    padding-top: 40px;\n    font-size: 20px;\n\n}\n\n.sidebarAddTaskButton {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding-bottom: 15px;\n}\n\n.createTask {\n    height: 70px;\n    width: 200px;\n    border-radius: 20px;\n    font-size: 25px;\n}\n\n.sidebarIntegratedItem {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 20px;\n    padding-right: 25px;\n}\n\n.sidebarItemSelected {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 10px;\n    background-color: #5eead4;\n    color: white;\n}\n\n.sidebarIntegratedItem2 {\n    display: flex;\n    flex-direction: column;\n}\n\n.sideBarRightComponentButtonContainer {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f8fafc;\n}\n\n.sideBarRightComponentButton {\n    width: 30px;\n    height: 30px;\n}\n\n.sidebarListItemContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 35px;\n    padding-right: 20px;\n}\n\n.sidebarListItemContainerSelected {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 35px;\n    padding-right: 20px;\n    background-color: #5eead4;\n    color: white;\n}\n\n.sidebarListIconButton {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.sidebarListIcon {\n    height: 25px;\n}\n\n/* new Task Popup */\n.newTaskCard {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 250px;\n    right: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n    height: 230px;\n    width: 600px;\n    border: solid black;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 5px 5px 5px black;\n    font-size: 25px;\n}\n\n.taskCardTextBorder {\n    display: flex;\n    flex-direction: column;\n    width: 75%;\n    align-items: center;\n    gap: 25px;\n    margin-bottom: 20px;\n}\n\n.taskInfoFirstRow {\n    display: flex;\n    width: 80%;\n    justify-content: center;\n    gap: 20px;\n}\n\n.taskInfoItemContainer {\n    display: flex;\n    gap: 5px;\n}\n\n.cardButtonIntegrator {\n    display: flex;\n    gap: 20px;\n}\n\n.taskCardButton {\n    width: 130px;\n    height: 50px;\n    border-radius: 20px;\n    border: solid black;\n    font-size: 20px;\n}\n\n#addTask {\n    background-color: #5eead4;\n    color: white;\n}\n\n#title,\n#date,\n#list {\n    font-size: 20px;\n}\n\n/* new List Popup */\n.newListCard {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 250px;\n    right: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n    height: 230px;\n    width: 450px;\n    border: solid black;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 5px 5px 5px black;\n    gap: 35px;\n}\n\n.cardTextBorder {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n#listName {\n    height: 30px;\n    width: 200px;\n    font-size: 20px;\n}\n\n#listNameLabel {\n    font-size: 20px;\n}\n\n.newListCardButton {\n    width: 130px;\n    height: 50px;\n    border-radius: 20px;\n    border: solid black;\n    font-size: 20px;\n}\n\n#listAdd {\n    background-color: #5eead4;\n    color: white;\n}\n\n/* main list content */\n\n.mainContainer {\n    width: 79%\n}\n\n.integratedItem {\n    padding-top: 20px;\n    padding-left: 90px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 90%;\n\n}\n\n.titleContainer {}\n\n.listContentContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n}\n\n.listItemContainer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 60%;\n    padding-left: 20px;\n    padding-right: 20px;\n    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.3);\n    padding-bottom: 5px;\n}\n\n.listItemIconContainer {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.listItemIconContainer>button {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.listItemIconContainer>button>img {\n    width: 25px;\n}"],"sourceRoot":""}]);
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

/***/ "./src/navFunctions.js":
/*!*****************************!*\
  !*** ./src/navFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomePage": () => (/* binding */ loadHomePage),
/* harmony export */   "loadJsPage": () => (/* binding */ loadJsPage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _site_contents_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-contents/header.js */ "./src/site-contents/header.js");
/* harmony import */ var _site_contents_modules_whoIAm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site-contents/modules/whoIAm.js */ "./src/site-contents/modules/whoIAm.js");
/* harmony import */ var _site_contents_modules_javascript_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site-contents/modules/javascript.js */ "./src/site-contents/modules/javascript.js");






function loadHomePage() {
    (0,_site_contents_modules_whoIAm_js__WEBPACK_IMPORTED_MODULE_2__.removeAllChildNodes)(document.body);
    document.body.appendChild((0,_site_contents_header_js__WEBPACK_IMPORTED_MODULE_1__.headerLoader)());
    document.body.appendChild((0,_site_contents_modules_whoIAm_js__WEBPACK_IMPORTED_MODULE_2__.homePageLoader)());
}
function loadJsPage() {
    (0,_site_contents_modules_whoIAm_js__WEBPACK_IMPORTED_MODULE_2__.removeAllChildNodes)(document.body);
    document.body.appendChild((0,_site_contents_header_js__WEBPACK_IMPORTED_MODULE_1__.headerLoader)());
    document.body.appendChild((0,_site_contents_modules_javascript_js__WEBPACK_IMPORTED_MODULE_3__.jsPageLoader)());
}



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
/* harmony import */ var _navFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navFunctions.js */ "./src/navFunctions.js");





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
    list.appendChild(linkFactory('Who I Am', _navFunctions_js__WEBPACK_IMPORTED_MODULE_2__.loadHomePage));
    list.appendChild(linkFactory('Front-End Development', _navFunctions_js__WEBPACK_IMPORTED_MODULE_2__.loadJsPage));
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
/* harmony import */ var _to_do_list_personal_website_initializer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../to-do-list/personal-website-initializer.js */ "./src/site-contents/to-do-list/personal-website-initializer.js");






function jsPageLoader() {
    let container = document.createElement('div');
    container.setAttribute('id', 'mainContainer');
    let jsBox = (0,_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__.contentBoxFactory)("Web Development", jsMainContentLoader());
    container.appendChild((0,_profile_js__WEBPACK_IMPORTED_MODULE_1__.profileLoader)());
    container.appendChild((0,_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__.mainContent)(jsBox));
    return container;
}

function openAppButtonCreator(text, cb, url = null) {
    let button = document.createElement('button');
    button.textContent = text;
    button.classList.add('openAppButtons');
    if (url !== null) {
        button.setAttribute('onclick', url)
    } else {
        button.addEventListener('click', cb);
    }
    return button;
}
function openWeatherApp() {
    document.body.appendChild((0,_weather_app_src_domLogic_js__WEBPACK_IMPORTED_MODULE_2__.loadWeatherApp)());
}
function openBattleship() {
    let container = document.createElement('div');
    container.setAttribute('id', 'container');
    document.body.appendChild(container);
    (0,_battleship_app_personal_website_initializer_js__WEBPACK_IMPORTED_MODULE_3__.loadAppWindow)()
}
function openToDoList() {
    (0,_to_do_list_personal_website_initializer_js__WEBPACK_IMPORTED_MODULE_4__.personalSitePageLoader)();
}
function OpenAppButtonContainerCreator() {
    let buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'appButtonContainer')
    buttonContainer.appendChild(openAppButtonCreator("Weather App", openWeatherApp));
    buttonContainer.appendChild(openAppButtonCreator("Battleship", openBattleship))
    buttonContainer.appendChild(openAppButtonCreator("Task Organizer", openToDoList))
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
    let container = document.createElement('div');
    container.setAttribute('id', 'mainContainer');
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
    div.classList.add('siteContent');
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

/***/ "./src/site-contents/to-do-list/personal-website-initializer.js":
/*!**********************************************************************!*\
  !*** ./src/site-contents/to-do-list/personal-website-initializer.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "personalSitePageLoader": () => (/* binding */ personalSitePageLoader)
/* harmony export */ });
/* harmony import */ var _images_plus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/plus.png */ "./src/site-contents/to-do-list/images/plus.png");
/* harmony import */ var _images_clipboard_check_multiple_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/clipboard-check-multiple-outline.png */ "./src/site-contents/to-do-list/images/clipboard-check-multiple-outline.png");
/* harmony import */ var _images_mdiTrashCanOutline_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/mdiTrashCanOutline.png */ "./src/site-contents/to-do-list/images/mdiTrashCanOutline.png");




function personalSitePageLoader() {
    removeAllChildNodes(document.body);
    document.body.setAttribute('id', 'body');
    document.body.appendChild(loadHeaderforPersonalWebsite());

    let content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.body.appendChild(content);
    content.appendChild(loadSidebarDOM());
    const div = document.createElement('div');
    content.appendChild(div);
    mainDOMLoadAll();
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


//header functions

function loadHeaderforPersonalWebsite() {
    const header = document.createElement('div');
        header.setAttribute('id', 'headerContainer');
    header.appendChild(leftHeaderContent());
    header.appendChild(rightHeaderContent());
    return header;
}

function leftHeaderContent() {
    const left = document.createElement('div');
        left.classList.add('leftHeaderContent');
    const h = document.createElement('p');
        h.classList.add("toDo")
        h.textContent = "ToDo"
    left.appendChild(headerIcon())
    left.appendChild(h);
    return left
}
function headerIcon() {
    const icon = new Image();
    icon.src = _images_clipboard_check_multiple_outline_png__WEBPACK_IMPORTED_MODULE_1__;
    icon.classList.add('headerIcon');
    return icon;
}
function rightHeaderContent() {
    const right = document.createElement('div');
    right.appendChild(removeAppBtn());
    return right;
}
function removeAppBtn() {
    let btn = document.createElement('button');
    btn.textContent = "x";
    btn.setAttribute('id', 'removeOrgnizerBtn');
    btn.addEventListener('click', removeApp)
    return btn;
}
function removeApp() {
    let body = document.getElementById('body');
    body.remove();
}

//sidebar functions
function loadSidebarDOM() {
    const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');
    sidebar.appendChild(createTaskButton());
    sidebar.appendChild(createAll());
    sidebar.appendChild(createToday());
    sidebar.appendChild(createThisWeek());
    sidebar.appendChild(sidebarItemIntegrater("Lists", "y"));
    return sidebar;
}

    //These functions add create individual sidebar items with event listeners
    function createAll() {
        const all = sidebarItemIntegrater("All");
        all.addEventListener('click', () => mainDOMLoadAll());
        all.setAttribute('id', 'all');
        return all;
    }
    function createToday() {
        const today = sidebarItemIntegrater("Today")
        today.addEventListener('click', () => mainDOMLoadToday());
        today.setAttribute('id', 'today');
        return today
    }
    function createThisWeek() {
        const thisWeek = sidebarItemIntegrater("This Week")
        thisWeek.addEventListener('click', () => mainDOMLoadThisWeek());
        thisWeek.setAttribute('id', 'thisWeek');
        return thisWeek
    }


    function createTaskButton() {
        const div = document.createElement('div');
            div.classList.add('sidebarAddTaskButton')
        const button = document.createElement('button');
            button.classList.add('createTask');
            button.textContent = "+ Create a Task"
            button.addEventListener('click', () => createTaskDOMLoad());
        div.appendChild(button);
        return div;
    }

function sidebarItemIntegrater(title, toggleRightComponent) {
    const div = document.createElement('div');
    if (toggleRightComponent == "y") {
        const top = document.createElement('div');
            top.classList.add('sidebarIntegratedItem');
        top.appendChild(leftSidebarComponent(title));
        top.appendChild(rightSidebarAddItem());
        div.appendChild(top);
        div.appendChild(listsContent());
            div.classList.add('sidebarIntegratedItem2');
    } else {
        div.appendChild(leftSidebarComponent(title));
            div.classList.add('sidebarIntegratedItem');
        const item = document.createElement('div');
            item.classList.add('SideBarItemRightComponent');
        div.appendChild(item);
    } 
    return div;
}


function leftSidebarComponent(title) {
    const item = document.createElement('div');
        item.classList.add('SideBarItemLeftComponent');

    item.appendChild(header(title));
    return item;
};

    function header(title) {
        const sideHeader = document.createElement('h3')
        sideHeader.classList.add('sideBarHeader');
        sideHeader.textContent = title;
        return sideHeader;
    };

function rightSidebarAddItem() {
    const item = document.createElement('div');
        item.classList.add('sideBarItemRightComponent');
    item.appendChild(addButton());
    return item;
}
    function addButton() {
        const button = document.createElement('button');
            button.classList.add('sideBarRightComponentButtonContainer')
        const addBtn = new Image();
            addBtn.src = _images_plus_png__WEBPACK_IMPORTED_MODULE_0__;
            addBtn.classList.add('sideBarRightComponentButton')
            addBtn.addEventListener('click', () => addListCardDOMLoad("Cancel", "Create"));
        button.appendChild(addBtn);
        return button;
        }


function listsContent() {
    const div = document.createElement('div');
        div.classList.add("listContainer");
    return div;
}

//mainDOMfunctions

function mainDOMLoadList(listTitle) {
    let content = document.getElementById('content');
    const container = document.createElement('div');
        container.classList.add('mainContainer');
        container.setAttribute('id', 'mainContainer');
    
    content.lastChild.remove();
    container.appendChild(mainIntegratorListLoader(listTitle))
    content.appendChild(container);
    let lists = content.firstChild.nextSibling.lastChild.lastChild;
    lists.firstChild.remove();
    lists.appendChild(loadDOMSidebarLists());
    checkSelectedListItems();
    unselectTop3SidebarItems();
}

    function checkSelectedListItems() {
        const nodeList = document.querySelectorAll('.sidebarListItemContainer');
        const secondNodeList = document.querySelectorAll('sidebarListItemContainerSelected');
        
        for (let i = 0; i < secondNodeList.length; i++) {
            let item = nodeList[i];
            let mainContainer = document.getElementById('mainContainer');
            item.classList.remove('sidebarListItemContainerSelected');
            item.classList.add('sidebarListItemContainer');
        }

        for (let i = 0; i < nodeList.length; i++) {
            let item = nodeList[i];
            let mainContainer = document.getElementById('mainContainer');
            if (item.firstChild.textContent == mainContainer.firstChild.firstChild.textContent) {
                item.classList.remove('sidebarListItemContainer');
                item.classList.add('sidebarListItemContainerSelected');
            } 
            else {
                item.classList.remove('sidebarListItemContainerSelected');
                item.classList.add('sidebarListItemContainer');
            }
        } 

    }
    function unselectTop3SidebarItems() {
        let content = document.getElementById('content');
        const all = content.firstChild.nextSibling.firstChild.nextSibling;
        const today = content.firstChild.nextSibling.firstChild.nextSibling.nextSibling;
        const thisWeek = content.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
        if (all.classList.contains('sidebarItemSelected')) {all.classList.remove('sidebarItemSelected') && all.classList.add('sidebarIntegratedItem')}
        if (today.classList.contains('sidebarItemSelected')) {today.classList.remove('sidebarItemSelected') && today.classList.add('sidebarIntegratedItem')}
        if (thisWeek.classList.contains('sidebarItemSelected')) {thisWeek.classList.remove('sidebarItemSelected') && thisWeek.classList.add('sidebarIntegratedItem')}

    }


function mainIntegratorListLoader(title) {
    const integratedItem = document.createElement('div');
        integratedItem.classList.add('integratedItem');
    
    integratedItem.appendChild(titleLoader(title));
    integratedItem.appendChild(loadList(title));
    return integratedItem;
}

function loadList(listTitle) {
    const container = document.createElement('div');
        container.classList.add('listContentContainer');

    const array = filterTaskstoList(listTitle);
    array.forEach((element) => {
        console.log(element.date);
        container.appendChild(listItemIntegrator(element.title, element.date));
    });
    return container;
}

    //All Tasks Loader Suite

function mainDOMLoadAll() {
    let content = document.getElementById('content');
    content.lastChild.remove();
    const container = document.createElement('div');
    container.classList.add('mainContainer');
    container.appendChild(mainIntegratorAllLoader());
    content.appendChild(container);

    const all = content.firstChild.firstChild.nextSibling;
    const today = content.firstChild.firstChild.nextSibling.nextSibling;
    const thisWeek = content.firstChild.firstChild.nextSibling.nextSibling.nextSibling;
    all.classList.add('sidebarItemSelected')
    if (today.classList.contains('sidebarItemSelected')) {today.classList.remove('sidebarItemSelected') && today.classList.add('sidebarIntegratedItem')}
    if (thisWeek.classList.contains('sidebarItemSelected')) {thisWeek.classList.remove('sidebarItemSelected') && thisWeek.classList.add('sidebarIntegratedItem')}

    let lists = content.firstChild.nextSibling.lastChild.lastChild;
    if (lists.hasChildNodes() == true) {
        lists.firstChild.remove();
    }
    lists.appendChild(loadDOMSidebarLists());
    checkSelectedListItems();
}

function mainIntegratorAllLoader() {
    const integratedItem = document.createElement('div');
        integratedItem.classList.add('integratedItem');
    
    integratedItem.appendChild(titleLoader("All Tasks"));
    integratedItem.appendChild(loadAllTasks());
    return integratedItem;
}


function loadAllTasks() {
    const container = document.createElement('div');
        container.classList.add('listContentContainer');
    const array = sortTasksToAll();

    array.forEach((element) => {
        container.appendChild(listItemIntegrator(element.title, element.date));
    });
    return container;
}

    //Today Loader Suite

function mainDOMLoadToday() {
    const container = document.createElement('div');
    container.classList.add('mainContainer');
    let content = document.getElementById('content');
    content.lastChild.remove();
    container.appendChild(mainIntegratorTodayLoader());
    content.appendChild(container);


    today.classList.add('sidebarItemSelected')
    if (all.classList.contains('sidebarItemSelected')) {all.classList.remove('sidebarItemSelected') && all.classList.add('sidebarIntegratedItem')}
    if (thisWeek.classList.contains('sidebarItemSelected')) {thisWeek.classList.remove('sidebarItemSelected') && thisWeek.classList.add('sidebarIntegratedItem')}
    
    
    let lists = content.firstChild.nextSibling.lastChild.lastChild;
    lists.firstChild.remove();
    lists.appendChild(loadDOMSidebarLists());
    checkSelectedListItems();
}

function mainIntegratorTodayLoader() {
    const integratedItem = document.createElement('div');
        integratedItem.classList.add('integratedItem');

    integratedItem.appendChild(titleLoader("Today"));
    integratedItem.appendChild(loadTodayTasks());
    return integratedItem;
};

function loadTodayTasks() {
        const container = document.createElement('div');
            container.classList.add('listContentContainer');
        const array = filterTodayTasks();
        array.forEach((element) => {
            container.appendChild(listItemIntegrator(element.title, element.date));
        });
        return container;
};

    //This Week Suite

function mainDOMLoadThisWeek() {
    let content = document.getElementById('content');
    const container = document.createElement('div');
        container.classList.add('mainContainer');
    content.lastChild.remove();
    container.appendChild(mainIntegratorThisWeek());
    content.appendChild(container);

    thisWeek.classList.add('sidebarItemSelected')
    if (all.classList.contains('sidebarItemSelected')) {all.classList.remove('sidebarItemSelected') && all.classList.add('sidebarIntegratedItem')}
    if (today.classList.contains('sidebarItemSelected')) {today.classList.remove('sidebarItemSelected') && today.classList.add('sidebarIntegratedItem')}
    
    let lists = content.firstChild.nextSibling.lastChild.lastChild;
    lists.firstChild.remove();
    lists.appendChild(loadDOMSidebarLists());
    checkSelectedListItems();
}

function mainIntegratorThisWeek() {
    const integratedItem = document.createElement('div');
        integratedItem.classList.add('integratedItem');
    
    integratedItem.appendChild(titleLoader("This Week"));
    integratedItem.appendChild(loadThisWeekTasks());
    return integratedItem;
    };

function loadThisWeekTasks() {
    const container = document.createElement('div');
        container.classList.add('listContentContainer');
    const array = filterThisWeekTasks();
    array.forEach((element) => {
        container.appendChild(listItemIntegrator(element.title, element.date));
});
return container;
}

// This function is repeated in each of the loader suites above

function titleLoader(title) {
    const div = document.createElement('div');
        div.classList.add('titleContainer');
    const header = document.createElement('h1');
        header.classList.add('titleHeader')
        header.textContent = title;
    div.appendChild(header);
    return div;
}

//this function integrates icon & title under a single list unit
function listItemIntegrator(itemTitle, itemDate) {
    const container = document.createElement('div');
        container.classList.add('listItemContainer');
    container.appendChild(listItem(itemTitle));
    container.appendChild(listIcons(itemDate));
        container.lastChild.firstChild.addEventListener('click', () => {
            const taskTitle = container.firstChild.firstChild.textContent;
            userTasks.forEach(task =>  {
                if (taskTitle == task.title) {
                    userTasks.splice(userTasks.indexOf(task), 1);
                }
                container.remove();
            })
        });
    return container;
}
function listItem(itemTitle) {
    const container = document.createElement('div');
        container.classList.add('leftListItem');
    const label = document.createElement("div");
        //label.setAttribute("for", "checkbox");
        label.textContent = itemTitle;
    container.appendChild(label);
    return container;
}
function listIcons(itemDate) {
    const div = document.createElement('div');
    div.classList.add('listItemIconContainer');
    div.appendChild(itemDateProducer(itemDate));
    div.appendChild(trashCan());
    return div;
}
function itemDateProducer(itemDate) {
    let div = document.createElement('div');
    div.classList.add('listItemDate');
    div.textContent = itemDate;
    return div;
}
    function trashCan() {
        const button = document.createElement('button');
        const trash = new Image();
            trash.src = _images_mdiTrashCanOutline_png__WEBPACK_IMPORTED_MODULE_2__;
            trash.classList.add('listItemIconButton');
        button.appendChild(trash);
        return button;
    }

    function pencil() {
        const div = document.createElement('button');
        const pencil = new Image();
            pencil.src = mdiPencilOutline;
            pencil.classList.add('listItemIconButton');
        div.appendChild(pencil);
        return div;
    }
    function info() {
        const div = document.createElement('button');
        const info = new Image();
            info.src = mdiInformationOutline;
            info.classList.add('listItemIconButton');
        div.appendChild(info);
        return div
    }

//this function refreshes the main page whenever you add a new task, to make the new task appear
function refreshPage() {
    let content = document.getElementById("content");
    const mainTitle = content.firstChild.nextSibling.firstChild.firstChild.firstChild.textContent;

    if (mainTitle == "All Tasks") { mainDOMLoadAll() }
    else if (mainTitle == "Today") { mainDOMLoadToday() }
    else if (mainTitle == "This Week") { mainDOMLoadThisWeek() }
    else {
        mainDOMLoadList(mainTitle)
    }
}


//createTaskDOM from createTaskDOM.js

function createTaskDOMLoad() {
    const card = document.createElement('div');
        card.classList.add('newTaskCard');
    card.appendChild(taskInfo());
    card.appendChild(taskButtonIntegrator('Cancel', 'Add Task'));
        //cancel button event listener --> removes card from DOM
        card.lastChild.firstChild.addEventListener('click', (event) => {
            card.remove();
        });
        card.lastChild.firstChild.setAttribute("id", "cancelTask")
        //event listener on create button
    card.lastChild.lastChild.addEventListener('click', (event) => {
        const date = document.getElementById('date');
        const list = document.getElementById('list');
        const title = document.getElementById('title');
        if (title.value == "") { return }
        //this if/else construction is a bandaid for a bug that I can't figure out.
        //the bug is this: the organizer won't load a task on the DOM if userTasks has only one element
        //but once there are two elements, it will skip the first and start with the second
        //so my fix is: push the first task twice
        if (userTasks.length > 1) {
            pushTaskToArray(title.value, date.value, list.value);
        } else if (userTasks.length == 0) {
            pushTaskToArray(title.value, date.value, list.value);
            pushTaskToArray(title.value, date.value, list.value);
        }
        card.remove();
        refreshPage();
    });
    card.lastChild.lastChild.setAttribute("id", "addTask")

    if (document.body.nextSibling !== null) {
        document.body.nextSibling.remove();
    };
    document.body.after(card);
};

function taskInfo() {
    const div = document.createElement('div');
        div.classList.add('taskCardTextBorder');
    const firstRow = document.createElement('div');
        firstRow.classList.add('taskInfoFirstRow');
        firstRow.appendChild(taskTitle());
        firstRow.appendChild(taskDate());
    div.appendChild(firstRow);
    div.appendChild(taskList());
    return div;
};

    function taskTitle() {
        const div = document.createElement('div');
            div.classList.add('taskInfoItemContainer');
        const title = document.createElement('input');
            title.classList.add('cardInputText');
            title.setAttribute("id", "title");
        const titleLabel = document.createElement('label');
            titleLabel.setAttribute("for", "title");
            titleLabel.textContent = "Task: ";
        div.appendChild(titleLabel);
        div.appendChild(title);
        return div;
    }
    function taskList() {
        const div = document.createElement('div');
            div.classList.add('taskInfoItemContainer');
        const listLabel = document.createElement('label');
            listLabel.setAttribute("for", "cardInput");
            listLabel.textContent = "List: ";
        const list = document.createElement('select');
            list.classList.add('cardInputText');
            list.setAttribute("id", "list");
        userLists.forEach(userList => {
            const option = document.createElement('option');
                option.innerHTML = userList.name;
                list.appendChild(option);
        })
        div.appendChild(listLabel);
        div.appendChild(list);
        return div;
    }
    function taskDate() {
        const div = document.createElement('div');
            div.classList.add('taskInfoItemContainer');
        const date = document.createElement('input');
            date.classList.add('cardInputText');
            date.setAttribute("type", "date");
            date.setAttribute("id", "date");
        const dateLabel = document.createElement('label');
            dateLabel.setAttribute("type", "date");
            dateLabel.setAttribute("for", "date");
            dateLabel.textContent = "Date: ";
        div.appendChild(dateLabel);
        div.appendChild(date);
        return div;
    }

function taskButtonIntegrator(s1, s2) {
    const div = document.createElement('div');
        div.classList.add('cardButtonIntegrator');
    div.appendChild(cardButton(s1));
    div.appendChild(cardButton(s2));

    return div;
}

function cardButton(s) {
    const button = document.createElement('button');
        button.classList.add('taskCardButton');
    const buttonText = document.createElement('div');
        buttonText.textContent = s;
        buttonText.classList.add('taskButtonText')
    button.appendChild(buttonText);
    return button;
}

//createListDOM


function addListCardDOMLoad(s1, s2) {
    let content = document.getElementById('content');
    const card = document.createElement('div');
        card.classList.add('newListCard');
    card.appendChild(cardInput());
    card.appendChild(buttonIntegrator(s1, s2));
    //event listener: pushes user text into userLists array when click 'create';
    card.lastChild.lastChild.addEventListener('click', (event) => {
        let name = card.firstChild.lastChild.value;
        if (name == "") { return }
        pushToUserLists(name);
        let lists = content.firstChild.nextSibling.lastChild.lastChild;
        lists.textContent = "";
        lists.appendChild(loadDOMSidebarLists());
        card.remove();
        checkSelectedListItems();
        
    });
    //cancel button event listener --> removes card from DOM
    card.lastChild.firstChild.addEventListener('click', (event) => {
        let name = card.lastChild.firstChild;
        card.remove();
    });
    
    if (document.body.nextSibling !== null) {
        document.body.nextSibling.remove();
    };
    document.body.after(card);
}

function loadDOMSidebarLists() {
    const item = document.createElement("div");
    userLists.forEach((userList) => {
        let div = document.createElement('div');
            div.classList.add('sidebarListItemContainer')
        let p = document.createElement("p");
        p.textContent = userList.name;
        p.addEventListener('click', () => {
            mainDOMLoadList(p.textContent)
        });
        div.appendChild(p);
        div.appendChild(listIcon());
        item.appendChild(div);
    })

    return item;
}
function listIcon() {
    let button = document.createElement('button');
        button.classList.add('sidebarListIconButton');
        button.addEventListener('click', () => {
            button.parentNode.remove();
            deleteList();
        })
    let trashIcon = new Image();
        trashIcon.src = _images_mdiTrashCanOutline_png__WEBPACK_IMPORTED_MODULE_2__;
        trashIcon.classList.add('sidebarListIcon');
    button.appendChild(trashIcon);
    return button;

    function deleteList() {
        const listName = button.parentNode.firstChild.textContent;

        userLists.forEach(list => {
            if (list.name == listName) {
                userLists.splice(userLists.indexOf(list), 1);
            }
        });
    }
};

function cardInput() {
    const listName = document.createElement('label'); 
        listName.setAttribute("for", "listName");
        listName.setAttribute("id", "listNameLabel")
        listName.textContent = "Name Your List: "
    const div = document.createElement('div');
        div.classList.add('cardTextBorder');
    const inputText = document.createElement('input');
        inputText.classList.add('cardInputText');
        inputText.setAttribute("id", "listName");
    div.appendChild(listName);
    div.appendChild(inputText);

    return div;
}

function buttonIntegrator(s1, s2) {
    const div = document.createElement('div');
        div.classList.add('cardButtonIntegrator');
    div.appendChild(listCardButton(s1));
        div.firstChild.setAttribute("id", "listCancel");
    div.appendChild(listCardButton(s2));
        div.lastChild.setAttribute("id", "listAdd")

    return div;
}
function listCardButton(s) {
    const button = document.createElement('button');
        button.classList.add('newListCardButton');
    const buttonText = document.createElement('div');
        buttonText.textContent = s;
    button.appendChild(buttonText);
    return button;
}

//createTaskApp
let userTasks = [];

class Task {
    constructor(title, date, list, description, time) {
        this.title = title;
        this.date = date;
        this.list = list;
    } 

}
function pushTaskToArray(title, date, list) {
    let t = new Task(title, date, list);
    userTasks.push(t);
}
function filterTaskstoList(listTitle) {
    let filteredList = [];
    let filteredTasks = userTasks.filter(function(task) {
        if (task.list == listTitle) filteredList.push(task);
    });
    return filteredList;
}
function sortTasksToAll() {
    const sortedTasks = userTasks.sort(function(a, b) {
        var keyA = new Date(a.date),
            keyB = new Date(b.date);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0
    })
    return sortedTasks;
}
function filterTodayTasks() {
    var today = format(new Date(), 'YYY-MM-dd').toString();
    const filteredTasks = userTasks.filter(function(task) {
        if (today.includes(task.date)) return task;
    })
    return filteredTasks;
}
function filterThisWeekTasks() {
    const filteredTasks = userTasks.filter(function(task) {
        if (isSameWeek(new Date(), new Date(task.date.replace("-", "/")))) return task;
    });
    return filteredTasks;
}

//createListApp

const userLists = [];

function createListArrayObject(name) {
    return { name }
}

function pushToUserLists(name) {
    userLists.push(createListArrayObject(name));
    console.log(userLists);
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

/***/ "./src/site-contents/to-do-list/images/clipboard-check-multiple-outline.png":
/*!**********************************************************************************!*\
  !*** ./src/site-contents/to-do-list/images/clipboard-check-multiple-outline.png ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47162542c890210f6559.png";

/***/ }),

/***/ "./src/site-contents/to-do-list/images/mdiTrashCanOutline.png":
/*!********************************************************************!*\
  !*** ./src/site-contents/to-do-list/images/mdiTrashCanOutline.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9b992e1e15f33c82182.png";

/***/ }),

/***/ "./src/site-contents/to-do-list/images/plus.png":
/*!******************************************************!*\
  !*** ./src/site-contents/to-do-list/images/plus.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18dc9c4ac2d548f2d533.png";

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
/* harmony import */ var _navFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navFunctions.js */ "./src/navFunctions.js");







(0,_navFunctions_js__WEBPACK_IMPORTED_MODULE_3__.loadHomePage)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxhQUFhLE1BQU0sWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFFBQVEsYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxX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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQix5QkFBeUI7QUFDekIscUNBQXFDO0FBQ3JDLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0NBQWtDO0FBQ3RGLGVBQWUscUNBQXFDO0FBQ3BELEtBQUs7QUFDTDtBQUNBLHNDQUFzQztBQUN0QyxpQkFBaUI7QUFDakIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxlQUFlO0FBQ2YsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENxQztBQUNpQztBQUNMOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5RUFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVELDhEQUE4RDtBQUM5RCxpRUFBaUU7O0FBRWpFOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFELDZEQUE2RDs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHdEQUF3RDtBQUN4RCw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdEO0FBQ3hELDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyREFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DO0FBQ3BDLHFDQUFxQztBQUNyQyx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHdCQUF3QiwyREFBa0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM3VCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEM4QztBQUNBO0FBQ1I7QUFDdEM7QUFDQSxhQUFhLDhDQUFJO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBYTtBQUNyQixLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdURBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQztBQUNVO0FBQ0s7QUFDdkI7OztBQUdqRCw4REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9uYXZGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9zaXRlLWNvbnRlbnRzL2JhdHRsZXNoaXAtYXBwL3BlcnNvbmFsLXdlYnNpdGUtaW5pdGlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9zaXRlLWNvbnRlbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vc3JjL3NpdGUtY29udGVudHMvbW9kdWxlcy9qYXZhc2NyaXB0LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvc2l0ZS1jb250ZW50cy9tb2R1bGVzL3BoaWxvc29waHkuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9zaXRlLWNvbnRlbnRzL21vZHVsZXMvd2hvSUFtLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvc2l0ZS1jb250ZW50cy9wcm9maWxlLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvc2l0ZS1jb250ZW50cy90by1kby1saXN0L3BlcnNvbmFsLXdlYnNpdGUtaW5pdGlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9zaXRlLWNvbnRlbnRzL3dlYXRoZXItYXBwL3NyYy9hcGlMb2dpYy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vc3JjL3NpdGUtY29udGVudHMvd2VhdGhlci1hcHAvc3JjL2RvbUxvZ2ljLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcXG59XFxuLyogc3R5bGVzIGZvciBoZWFkZXIgKi9cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbiNuYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG4jbGlua3NMaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4vKiBzdHlsZXMgZm9yIG1haW4gY29udGVudCAqL1xcbiNtYWluQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudEJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5ob21lUGFnZUxvYWRlciB7XFxuXFxufVxcblxcbi8qIHN0eWxlcyBmb3IgcHJvZmlsZSAqL1xcbiNwcm9maWxlIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3Byb2ZpbGVQaG90byB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxufVxcblxcbiNwcm9maWxlRGVzY3JpcHRpb24sICNwcm9maWxlTmFtZSB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIHN0eWxlcyBmb3IgUGhpbG9zb3BoeSAqL1xcblxcbiNpdGFsaWMge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qIHN0eWxlcyBmb3IgSlMgcG9ydGZvbGlvICovXFxuI2FwcEJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuLm9wZW5BcHBCdXR0b25zIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogc3R5bGVzIGZvciB3ZWF0aGVyIEFwcCAqL1xcblxcbiN3ZWF0aGVyV3JhcHBlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwcHg7XFxufVxcblxcbiN3ZWF0aGVySGVhZGVyLFxcbiN3ZWF0aGVyQ29udGVudCB7XFxuICAgIHdpZHRoOiAzOTBweDtcXG59XFxuXFxuI3dlYXRoZXJIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiN3ZWF0aGVySWNvbiB7XFxuICAgIGhlaWdodDogNDNweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxufVxcblxcbiN3ZWF0aGVySGVhZGVyTG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNyZW1vdmVXZWF0aGVyQXBwQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNTVweDtcXG4gICAgYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XFxufVxcblxcbiN3ZWF0aGVyQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5M2M1ZmQ7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbiN3ZWF0aGVyQ29udGVudD5kaXYge1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogNyU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN3ZWF0aGVyQnRuLFxcbiN3ZWF0aGVySW5wdXQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAzN3B4O1xcbn1cXG4jd2VhdGhlckJ0biB7XFxuICAgIGhlaWdodDogMzdweDtcXG59XFxuXFxuI3dlYXRoZXJCdG4ge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbiNmb3JtIHtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoUmVzdWx0Q29udGFpbmVyIHtcXG4gICAgLypwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTc1cHg7Ki9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gICAgd2lkdGg6IDMzMHB4O1xcbiAgICBoZWlnaHQ6IDI4NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogIzkzYzVmZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoUmVzdWx0Q29udGFpbmVyPmgyIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIGNvbG9yOiAjY2JkNWUxO1xcbn1cXG5cXG4jdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ucC1pbmZvIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi8qc3R5bGVzIGZvciBiYXR0bGVzaGlwKi9cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkM2QxO1xcblxcbn1cXG5cXG4jYmF0dGxlU2hpcENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLypzdHlsZXMgZm9yIHRoZSBwbGFjZW1lbnQgbW9kdWxlICovXFxuLnBsYWNlbWVudC1tb2R1bGUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiA2NjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHgsIHJnYig1MSwgNTEsIDUxKSAwcHggMHB4IDBweCAzcHg7XFxufVxcblxcbi5wbGFjZW1lbnRUZXh0Qm94IHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IC0xMXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xcbn1cXG5cXG4ucGxhY2VtZW50VGV4dENvbnRlbnQge1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMnB4IDJweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogIzIyZDNlZTtcXG59XFxuXFxuLm1pZGRsZVN1YmNvbnRhaW5lcixcXG4ucmlnaHRJbmZvU3ViY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm1pZGRsZVN1YmNvbnRhaW5lciB7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLnJpZ2h0SW5mb1N1YmNvbnRhaW5lciB7XFxuICAgIGdhcDogMjVweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0SW5mb0J1dHRvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmJvdHRvbVN1YmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNTVweDtcXG4gICAgaGVpZ2h0OiAyNSU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuXFxufVxcblxcbi5wbGFjZW1lbnRJbnN0cnVjdGlvbkJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQzZDE7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHgsIHJnYig1MSwgNTEsIDUxKSAwcHggMHB4IDBweCAzcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmhlYWRpbmdDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxufVxcblxcbi5zaGlwQWxsQ2xhc3Nlc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwKTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuXFxufVxcblxcbi5zaW5nbGVTaGlwQ2xhc3NDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbi5zaGlwQWx0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMnB4O1xcbn1cXG5cXG4vKnN0eWxlcyBmb3IgdGhlIHR3byBncmlkcyBhbmQgY29vcmRpbmF0ZXMgKi9cXG4uZG91YmxlQm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE3NXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2luZ2xlQm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ueENvb3JkaW5hdGVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbn1cXG5cXG4ueUNvb3JkaW5hdGVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmxlZnRTcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnRTcXVhcmUsXFxuLnVwcGVyU3F1YXJlIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdWJjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucGxhY2VtZW50U3F1YXJlIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3F1YXJlLFxcbi5haVNxdWFyZSB7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNxdWFyZTpob3ZlcixcXG4uYWlTcXVhcmU6aG92ZXIsXFxuLnBsYWNlbWVudFNxdWFyZTpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG59XFxuXFxuLnNxdWFyZUNvbnRhaW5lciB7fVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDM1cHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzVweCk7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogMXB4O1xcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIHNjb3JlIGNhcmQgKi9cXG4uc2luZ2xlQm9hcmRTY29yZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxufVxcblxcbi8qc3R5bGVzIGZvciBnYW1lIGNvbnRyb2xsZXIgaHVkKi9cXG4uc2NvcmVLZWVwZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDM5MHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogIzIyZDNlZSAycHggMnB4O1xcblxcbn1cXG5cXG4ucGxhY2VtZW50QnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmQzZWU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7XFxufVxcblxcbi5idXR0b25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ud2lubmVyQ2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHgsIHJnYig1MSwgNTEsIDUxKSAwcHggMHB4IDBweCAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMTBweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDI3NnB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53aW5uZXJBbm5vdW5jZW1lbnQge1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxufVxcblxcblxcbi8qc3R5bGVzIGZvciB0b0RvTGlzdCAqL1xcblxcbiNib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLypvdmVyZmxvdzogaGlkZGVuKi9cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKmhlYWRlciovXFxuI2hlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlZWFkNDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5sZWZ0SGVhZGVyQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbi50b0RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlckljb24ge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XFxufVxcblxcbiNyZW1vdmVPcmduaXplckJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogIzVlZWFkNDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcXG59XFxuXFxuXFxuLypzaWRlYmFyKi9cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAyMSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuXFxufVxcblxcbi5zaWRlYmFyQWRkVGFza0J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi5jcmVhdGVUYXNrIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLnNpZGViYXJJbnRlZ3JhdGVkSXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uc2lkZWJhckl0ZW1TZWxlY3RlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVlYWQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFySW50ZWdyYXRlZEl0ZW0yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGVCYXJSaWdodENvbXBvbmVudEJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbn1cXG5cXG4uc2lkZUJhclJpZ2h0Q29tcG9uZW50QnV0dG9uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnNpZGViYXJMaXN0SXRlbUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uc2lkZWJhckxpc3RJdGVtQ29udGFpbmVyU2VsZWN0ZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlZWFkNDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhckxpc3RJY29uQnV0dG9uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyTGlzdEljb24ge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi8qIG5ldyBUYXNrIFBvcHVwICovXFxuLm5ld1Rhc2tDYXJkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAyNTBweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi50YXNrQ2FyZFRleHRCb3JkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi50YXNrSW5mb0ZpcnN0Um93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnRhc2tJbmZvSXRlbUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2FyZEJ1dHRvbkludGVncmF0b3Ige1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi50YXNrQ2FyZEJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNhZGRUYXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlZWFkNDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdGl0bGUsXFxuI2RhdGUsXFxuI2xpc3Qge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi8qIG5ldyBMaXN0IFBvcHVwICovXFxuLm5ld0xpc3RDYXJkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAyNTBweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGJsYWNrO1xcbiAgICBnYXA6IDM1cHg7XFxufVxcblxcbi5jYXJkVGV4dEJvcmRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNsaXN0TmFtZSB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNsaXN0TmFtZUxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubmV3TGlzdENhcmRCdXR0b24ge1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jbGlzdEFkZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZWVhZDQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogbWFpbiBsaXN0IGNvbnRlbnQgKi9cXG5cXG4ubWFpbkNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA3OSVcXG59XFxuXFxuLmludGVncmF0ZWRJdGVtIHtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogOTAlO1xcblxcbn1cXG5cXG4udGl0bGVDb250YWluZXIge31cXG5cXG4ubGlzdENvbnRlbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubGlzdEl0ZW1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmxpc3RJdGVtSWNvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxpc3RJdGVtSWNvbkNvbnRhaW5lcj5idXR0b24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3RJdGVtSWNvbkNvbnRhaW5lcj5idXR0b24+aW1nIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSTtBQUNKO0FBQ0Esc0JBQXNCO0FBQ3RCO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjtBQUNBLDRCQUE0QjtBQUM1QjtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQSwwQkFBMEI7O0FBRTFCO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQSwyQkFBMkI7O0FBRTNCO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSTs7O3lCQUdxQjtJQUNyQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDRDQUE0Qzs7SUFFNUMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUEsd0JBQXdCOztBQUV4QjtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUEsbUNBQW1DO0FBQ25DO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRFQUE0RTtJQUM1RSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1QsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUix1QkFBdUI7QUFDM0I7O0FBRUEsNENBQTRDO0FBQzVDO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IscUJBQXFCO0FBQ3pCOztBQUVBLGlDQUFpQztBQUNqQztJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsNEJBQTRCOztBQUVoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIscUlBQXFJO0FBQ3pJOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRFQUE0RTtJQUM1RSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBLHVCQUF1Qjs7QUFFdkI7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLFFBQVE7SUFDUixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUdBLFVBQVU7QUFDVjtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLE1BQU07SUFDTixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTs7O0lBR0ksZUFBZTtBQUNuQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsTUFBTTtJQUNOLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBLHNCQUFzQjs7QUFFdEI7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVOztBQUVkOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlxcbn1cXG4vKiBzdHlsZXMgZm9yIGhlYWRlciAqL1xcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI25hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcbiNsaW5rc0xpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi8qIHN0eWxlcyBmb3IgbWFpbiBjb250ZW50ICovXFxuI21haW5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb250ZW50Qm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmhvbWVQYWdlTG9hZGVyIHtcXG5cXG59XFxuXFxuLyogc3R5bGVzIGZvciBwcm9maWxlICovXFxuI3Byb2ZpbGUge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jcHJvZmlsZVBob3RvIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuI3Byb2ZpbGVEZXNjcmlwdGlvbiwgI3Byb2ZpbGVOYW1lIHtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogc3R5bGVzIGZvciBQaGlsb3NvcGh5ICovXFxuXFxuI2l0YWxpYyB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyogc3R5bGVzIGZvciBKUyBwb3J0Zm9saW8gKi9cXG4jYXBwQnV0dG9uQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG4ub3BlbkFwcEJ1dHRvbnMge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIHdlYXRoZXIgQXBwICovXFxuXFxuI3dlYXRoZXJXcmFwcGVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDBweDtcXG59XFxuXFxuI3dlYXRoZXJIZWFkZXIsXFxuI3dlYXRoZXJDb250ZW50IHtcXG4gICAgd2lkdGg6IDM5MHB4O1xcbn1cXG5cXG4jd2VhdGhlckhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3dlYXRoZXJJY29uIHtcXG4gICAgaGVpZ2h0OiA0M3B4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXFxuI3dlYXRoZXJIZWFkZXJMb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3JlbW92ZVdlYXRoZXJBcHBCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA1NXB4O1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcXG59XFxuXFxuI3dlYXRoZXJDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzYzVmZDtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3dlYXRoZXJDb250ZW50PmRpdiB7XFxuICAgIGdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiA3JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3dlYXRoZXJCdG4sXFxuI3dlYXRoZXJJbnB1dCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBoZWlnaHQ6IDM3cHg7XFxufVxcbiN3ZWF0aGVyQnRuIHtcXG4gICAgaGVpZ2h0OiAzN3B4O1xcbn1cXG5cXG4jd2VhdGhlckJ0biB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuI2Zvcm0ge1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zZWFyY2hSZXN1bHRDb250YWluZXIge1xcbiAgICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xNzVweDsqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgICB3aWR0aDogMzMwcHg7XFxuICAgIGhlaWdodDogMjg1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjOTNjNWZkO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zZWFyY2hSZXN1bHRDb250YWluZXI+aDIge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgY29sb3I6ICNjYmQ1ZTE7XFxufVxcblxcbiN0ZW1wIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5wLWluZm8ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLypzdHlsZXMgZm9yIGJhdHRsZXNoaXAqL1xcblxcbiNjb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQzZDE7XFxuXFxufVxcblxcbiNiYXR0bGVTaGlwQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKnN0eWxlcyBmb3IgdGhlIHBsYWNlbWVudCBtb2R1bGUgKi9cXG4ucGxhY2VtZW50LW1vZHVsZS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDY2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweCwgcmdiKDUxLCA1MSwgNTEpIDBweCAwcHggMHB4IDNweDtcXG59XFxuXFxuLnBsYWNlbWVudFRleHRCb3gge1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogLTExcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XFxufVxcblxcbi5wbGFjZW1lbnRUZXh0Q29udGVudCB7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAycHggMnB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGNvbG9yOiAjMjJkM2VlO1xcbn1cXG5cXG4ubWlkZGxlU3ViY29udGFpbmVyLFxcbi5yaWdodEluZm9TdWJjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubWlkZGxlU3ViY29udGFpbmVyIHtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ucmlnaHRJbmZvU3ViY29udGFpbmVyIHtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmlnaHRJbmZvQnV0dG9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogNDBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uYm90dG9tU3ViY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1NXB4O1xcbiAgICBoZWlnaHQ6IDI1JTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG5cXG59XFxuXFxuLnBsYWNlbWVudEluc3RydWN0aW9uQm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweCwgcmdiKDUxLCA1MSwgNTEpIDBweCAwcHggMHB4IDNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uaGVhZGluZ0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcXG59XFxuXFxuLnNoaXBBbGxDbGFzc2VzQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDApO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG5cXG59XFxuXFxuLnNpbmdsZVNoaXBDbGFzc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFweDtcXG59XFxuXFxuLnNoaXBBbHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XFxufVxcblxcbi8qc3R5bGVzIGZvciB0aGUgdHdvIGdyaWRzIGFuZCBjb29yZGluYXRlcyAqL1xcbi5kb3VibGVCb2FyZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTc1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zaW5nbGVCb2FyZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi54Q29vcmRpbmF0ZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxufVxcblxcbi55Q29vcmRpbmF0ZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubGVmdFNxdWFyZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubGVmdFNxdWFyZSxcXG4udXBwZXJTcXVhcmUge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN1YmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wbGFjZW1lbnRTcXVhcmUge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zcXVhcmUsXFxuLmFpU3F1YXJlIHtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3F1YXJlOmhvdmVyLFxcbi5haVNxdWFyZTpob3ZlcixcXG4ucGxhY2VtZW50U3F1YXJlOmhvdmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbn1cXG5cXG4uc3F1YXJlQ29udGFpbmVyIHt9XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzNXB4KTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbi8qIHN0eWxlcyBmb3Igc2NvcmUgY2FyZCAqL1xcbi5zaW5nbGVCb2FyZFNjb3JlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG59XFxuXFxuLypzdHlsZXMgZm9yIGdhbWUgY29udHJvbGxlciBodWQqL1xcbi5zY29yZUtlZXBlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzkwcHg7XFxuICAgIHRleHQtc2hhZG93OiAjMjJkM2VlIDJweCAycHg7XFxuXFxufVxcblxcbi5wbGFjZW1lbnRCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyZDNlZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcXG59XFxuXFxuLmJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi53aW5uZXJDYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweCwgcmdiKDUxLCA1MSwgNTEpIDBweCAwcHggMHB4IDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGhlaWdodDogMjc2cHg7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndpbm5lckFubm91bmNlbWVudCB7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG59XFxuXFxuXFxuLypzdHlsZXMgZm9yIHRvRG9MaXN0ICovXFxuXFxuI2JvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKm92ZXJmbG93OiBoaWRkZW4qL1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qaGVhZGVyKi9cXG4jaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVlYWQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxlZnRIZWFkZXJDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuXFxuLnRvRG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVySWNvbiB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcXG59XFxuXFxuI3JlbW92ZU9yZ25pemVyQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiAjNWVlYWQ0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xcbn1cXG5cXG5cXG4vKnNpZGViYXIqL1xcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDIxJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG5cXG59XFxuXFxuLnNpZGViYXJBZGRUYXNrQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmNyZWF0ZVRhc2sge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uc2lkZWJhckludGVncmF0ZWRJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxufVxcblxcbi5zaWRlYmFySXRlbVNlbGVjdGVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZWVhZDQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXJJbnRlZ3JhdGVkSXRlbTIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZUJhclJpZ2h0Q29tcG9uZW50QnV0dG9uQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxufVxcblxcbi5zaWRlQmFyUmlnaHRDb21wb25lbnRCdXR0b24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uc2lkZWJhckxpc3RJdGVtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5zaWRlYmFyTGlzdEl0ZW1Db250YWluZXJTZWxlY3RlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVlYWQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyTGlzdEljb25CdXR0b24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXJMaXN0SWNvbiB7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLyogbmV3IFRhc2sgUG9wdXAgKi9cXG4ubmV3VGFza0NhcmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGxlZnQ6IDI1MHB4O1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLnRhc2tDYXJkVGV4dEJvcmRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRhc2tJbmZvRmlyc3RSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udGFza0luZm9JdGVtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jYXJkQnV0dG9uSW50ZWdyYXRvciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnRhc2tDYXJkQnV0dG9uIHtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2FkZFRhc2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVlYWQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiN0aXRsZSxcXG4jZGF0ZSxcXG4jbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLyogbmV3IExpc3QgUG9wdXAgKi9cXG4ubmV3TGlzdENhcmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGxlZnQ6IDI1MHB4O1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XFxuICAgIGdhcDogMzVweDtcXG59XFxuXFxuLmNhcmRUZXh0Qm9yZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2xpc3ROYW1lIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2xpc3ROYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5uZXdMaXN0Q2FyZEJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNsaXN0QWRkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlZWFkNDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBtYWluIGxpc3QgY29udGVudCAqL1xcblxcbi5tYWluQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDc5JVxcbn1cXG5cXG4uaW50ZWdyYXRlZEl0ZW0ge1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuXFxufVxcblxcbi50aXRsZUNvbnRhaW5lciB7fVxcblxcbi5saXN0Q29udGVudENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5saXN0SXRlbUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ubGlzdEl0ZW1JY29uQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdEl0ZW1JY29uQ29udGFpbmVyPmJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdEl0ZW1JY29uQ29udGFpbmVyPmJ1dHRvbj5pbWcge1xcbiAgICB3aWR0aDogMjVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBoZWFkZXJMb2FkZXIgfSBmcm9tICcuL3NpdGUtY29udGVudHMvaGVhZGVyLmpzJztcbmltcG9ydCB7IGhvbWVQYWdlTG9hZGVyIH0gZnJvbSAnLi9zaXRlLWNvbnRlbnRzL21vZHVsZXMvd2hvSUFtLmpzJztcbmltcG9ydCB7IGpzUGFnZUxvYWRlciB9IGZyb20gJy4vc2l0ZS1jb250ZW50cy9tb2R1bGVzL2phdmFzY3JpcHQuanMnO1xuaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGROb2RlcyB9IGZyb20gJy4vc2l0ZS1jb250ZW50cy9tb2R1bGVzL3dob0lBbS5qcyc7XG5cbmZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGRvY3VtZW50LmJvZHkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyTG9hZGVyKCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaG9tZVBhZ2VMb2FkZXIoKSk7XG59XG5mdW5jdGlvbiBsb2FkSnNQYWdlKCkge1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoZG9jdW1lbnQuYm9keSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXJMb2FkZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChqc1BhZ2VMb2FkZXIoKSk7XG59XG5cbmV4cG9ydCB7IGxvYWRIb21lUGFnZSwgbG9hZEpzUGFnZSB9IiwiXG5jbGFzcyBTcXVhcmUge1xuICAgIGNvbnN0cnVjdG9yKFgsIFkpIHtcbiAgICAgICAgdGhpcy5YID0gWDtcbiAgICAgICAgdGhpcy5ZID0gWTtcbiAgICAgICAgdGhpcy5pc0hpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRhaW5zU2hpcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNoaXAgPSBudWxsO1xuICAgICAgICAvL3RoaXMuc3RhcnQgPSBudWxsXG4gICAgfVxufVxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihpbnB1dCkge1xuICAgICAgICB0aGlzLnhBeGlzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ11cbiAgICAgICAgdGhpcy55QXhpcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF1cbiAgICAgICAgdGhpcy5ncmlkID0gdGhpcy5tYWtlR3JpZCgpXG4gICAgfVxuICAgIHJlY2VpdmVBdHRhY2soeExldHRlciwgeU51bSkge1xuICAgICAgICBsZXQgZm91bmQgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IHhMZXR0ZXIgJiYgc3F1YXJlLlkgPT0geU51bSkpO1xuICAgICAgICBmb3VuZC5pc0hpdCA9IHRydWU7XG4gICAgICAgIGlmIChmb3VuZC5jb250YWluc1NoaXAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm91bmQuc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHJldHVybiBmb3VuZC5zaGlwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3VuZC5zaGlwO1xuICAgIH1cbiAgICBtYWtlR3JpZCgpIHtcbiAgICAgICAgbGV0IGdyaWQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnhBeGlzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMueUF4aXMubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gbmV3IFNxdWFyZSh0aGlzLnhBeGlzW3hdLCB0aGlzLnlBeGlzW3ldKTtcbiAgICAgICAgICAgICAgICBncmlkLnB1c2goc3F1YXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICB9XG4gICAgcG9wdWxhdGVTaGlwKHNpemUsIHhTdGFydCwgeVN0YXJ0LCBkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKHNpemUgPiAxKSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwibm9ydGhcIikge1xuICAgICAgICAgICAgICAgIGlmICh5U3RhcnQgPCBzaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnb3ZlcmZsb3chJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJzb3V0aFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh5U3RhcnQgLSAxKSA+ICgxMCAtIHNpemUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnb3ZlcmZsb3chJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJ3ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy54QXhpcy5pbmRleE9mKHhTdGFydCkgPCAoc2l6ZSAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnb3ZlcmZsb3chJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJlYXN0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy54QXhpcy5pbmRleE9mKHhTdGFydCkgPiAoMTAgLSBzaXplKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ292ZXJmbG93ISdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld1NoaXAgPSBuZXcgU2hpcChzaXplLCB4U3RhcnQsIHlTdGFydCwgZGlyZWN0aW9uKTtcbiAgICAgICAgbmV3U2hpcC5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIGxldCBzdGFydGluZ1NxdWFyZSA9IHRoaXMuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gbmV3U2hpcC54U3RhcnQgJiYgc3F1YXJlLlkgPT0gbmV3U2hpcC55U3RhcnQpKTtcbiAgICAgICAgbGV0IHNxdWFyZXNDb250YWluaW5nTmV3U2hpcCA9IFtdO1xuICAgICAgICBzdGFydGluZ1NxdWFyZS5jb250YWluc1NoaXAgPSB0cnVlO1xuICAgICAgICBzdGFydGluZ1NxdWFyZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwLnB1c2goc3RhcnRpbmdTcXVhcmUpO1xuICAgICAgICBsZXQgeUluZGV4ID0gdGhpcy5ncmlkLmluZGV4T2Yoc3RhcnRpbmdTcXVhcmUpO1xuICAgICAgICB3aGlsZSAoc2l6ZSA+IDEpIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJub3J0aFwiKSB7XG4gICAgICAgICAgICAgICAgeVN0YXJ0ID0geVN0YXJ0IC0gMTtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSBuZXdTaGlwLnhTdGFydCAmJiBzcXVhcmUuWSA9PSB5U3RhcnQpKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY29udGFpbnNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgICAgICAgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwLnB1c2goc3F1YXJlKVxuICAgICAgICAgICAgICAgIHNpemUgPSBzaXplIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJzb3V0aFwiKSB7XG4gICAgICAgICAgICAgICAgLy95U3RhcnQgPSB5U3RhcnQgKyAxO1xuICAgICAgICAgICAgICAgIHlJbmRleCArPSAxXG4gICAgICAgICAgICAgICAgLy9sZXQgc3F1YXJlID0gdGhpcy5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSBuZXdTaGlwLnhTdGFydCAmJiBzcXVhcmUuWSA9PSB5U3RhcnQpKTtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5ncmlkW3lJbmRleF07XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNvbnRhaW5zU2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgICAgIHNxdWFyZXNDb250YWluaW5nTmV3U2hpcC5wdXNoKHNxdWFyZSlcbiAgICAgICAgICAgICAgICBzaXplID0gc2l6ZSAtIDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBcImVhc3RcIikge1xuICAgICAgICAgICAgICAgIHhTdGFydCA9IHRoaXMueEF4aXNbdGhpcy54QXhpcy5pbmRleE9mKHhTdGFydCkgKyAxXTtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSB4U3RhcnQgJiYgc3F1YXJlLlkgPT0gbmV3U2hpcC55U3RhcnQpKVxuICAgICAgICAgICAgICAgIHNxdWFyZS5jb250YWluc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgICAgICBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXAucHVzaChzcXVhcmUpO1xuICAgICAgICAgICAgICAgIHNpemUgPSBzaXplIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwid2VzdFwiKSB7XG4gICAgICAgICAgICAgICAgeFN0YXJ0ID0gdGhpcy54QXhpc1t0aGlzLnhBeGlzLmluZGV4T2YoeFN0YXJ0KSAtIDFdO1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IHhTdGFydCAmJiBzcXVhcmUuWSA9PSBuZXdTaGlwLnlTdGFydCkpXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNvbnRhaW5zU2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgICAgIHNxdWFyZXNDb250YWluaW5nTmV3U2hpcC5wdXNoKHNxdWFyZSlcbiAgICAgICAgICAgICAgICBzaXplID0gc2l6ZSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxdWFyZXNDb250YWluaW5nTmV3U2hpcDtcbiAgICAgICAgLy9hZGQgc29tZSBjb2RlIHRvIGFjY291bnQgZm9yIHNpemUgPiAxIGFuZCBkaXJlY3Rpb25cbiAgICB9XG4gICAgZGVwb3B1bGF0ZVNoaXAoc2l6ZSwgeFN0YXJ0LCB5U3RhcnQsIGRpcmVjdGlvbikge1xuICAgICAgICBsZXQgbmV3U2hpcCA9IG5ldyBTaGlwKHNpemUsIHhTdGFydCwgeVN0YXJ0KTtcbiAgICAgICAgbGV0IHN0YXJ0aW5nU3F1YXJlID0gdGhpcy5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSBuZXdTaGlwLnhTdGFydCAmJiBzcXVhcmUuWSA9PSBuZXdTaGlwLnlTdGFydCkpO1xuICAgICAgICBsZXQgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwID0gW107XG4gICAgICAgIHN0YXJ0aW5nU3F1YXJlLmNvbnRhaW5zU2hpcCA9IGZhbHNlO1xuICAgICAgICBzdGFydGluZ1NxdWFyZS5zaGlwID0gbnVsbDtcbiAgICAgICAgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwLnB1c2goc3RhcnRpbmdTcXVhcmUpO1xuICAgICAgICBsZXQgeUluZGV4ID0gdGhpcy5ncmlkLmluZGV4T2Yoc3RhcnRpbmdTcXVhcmUpO1xuICAgICAgICB3aGlsZSAoc2l6ZSA+IDEpIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJub3J0aFwiKSB7XG4gICAgICAgICAgICAgICAgeVN0YXJ0ID0geVN0YXJ0IC0gMTtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSBuZXdTaGlwLnhTdGFydCAmJiBzcXVhcmUuWSA9PSB5U3RhcnQpKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY29udGFpbnNTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNxdWFyZXNDb250YWluaW5nTmV3U2hpcC5wdXNoKHNxdWFyZSlcbiAgICAgICAgICAgICAgICBzaXplID0gc2l6ZSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwic291dGhcIikge1xuICAgICAgICAgICAgICAgIC8veVN0YXJ0ID0geVN0YXJ0ICsgMTtcbiAgICAgICAgICAgICAgICB5SW5kZXggKz0gMVxuICAgICAgICAgICAgICAgIC8vbGV0IHNxdWFyZSA9IHRoaXMuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gbmV3U2hpcC54U3RhcnQgJiYgc3F1YXJlLlkgPT0geVN0YXJ0KSk7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuZ3JpZFt5SW5kZXhdO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jb250YWluc1NoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwLnB1c2goc3F1YXJlKVxuICAgICAgICAgICAgICAgIHNpemUgPSBzaXplIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwiZWFzdFwiKSB7XG4gICAgICAgICAgICAgICAgeFN0YXJ0ID0gdGhpcy54QXhpc1t0aGlzLnhBeGlzLmluZGV4T2YoeFN0YXJ0KSArIDFdO1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IHhTdGFydCAmJiBzcXVhcmUuWSA9PSBuZXdTaGlwLnlTdGFydCkpXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNvbnRhaW5zU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXAucHVzaChzcXVhcmUpO1xuICAgICAgICAgICAgICAgIHNpemUgPSBzaXplIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwid2VzdFwiKSB7XG4gICAgICAgICAgICAgICAgeFN0YXJ0ID0gdGhpcy54QXhpc1t0aGlzLnhBeGlzLmluZGV4T2YoeFN0YXJ0KSAtIDFdO1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IHhTdGFydCAmJiBzcXVhcmUuWSA9PSBuZXdTaGlwLnlTdGFydCkpXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNvbnRhaW5zU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXAucHVzaChzcXVhcmUpXG4gICAgICAgICAgICAgICAgc2l6ZSA9IHNpemUgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXA7XG4gICAgICAgIC8vYWRkIHNvbWUgY29kZSB0byBhY2NvdW50IGZvciBzaXplID4gMSBhbmQgZGlyZWN0aW9uXG4gICAgfVxufVxuY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKHNpemUsIHhTdGFydCwgeVN0YXJ0LCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnNpemUgPSBzaXplXG4gICAgdGhpcy5oaXRzID0gW11cbiAgICB0aGlzLnhTdGFydCA9IHhTdGFydFxuICAgIHRoaXMueVN0YXJ0ID0geVN0YXJ0XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBudWxsXG4gIH1cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cy5wdXNoKCdoaXQnKTtcbiAgICBpZiAodGhpcy5oaXRzLmxlbmd0aCA9PSB0aGlzLnNpemUpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzU3VuaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5oaXQ7XG4gICAgfVxuICB9XG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gJ3N1bmshJ1xuICB9XG59IFxuXG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVzKGFycikge1xuICAgIHZhciB1bmlxdWUgPSBbXTtcbiAgICBhcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKCF1bmlxdWUuaW5jbHVkZXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHVuaXF1ZS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHVuaXF1ZTtcbn1cbiBcbi8vc3VpdGUgb2YgZnVuY3Rpb25zIGZvciBsb2FkaW5nIHRoZSB0d28gRE9NIGJvYXJkcyAmIHNjb3JlIGtlZXBlciBjYXJkXG5mdW5jdGlvbiBzcXVhcmVMb2FkZXIoY29vcmRpbmF0ZSwgcGxheWVyID0gXCJhaVwiKSB7XG4gICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICBpZiAoY29vcmRpbmF0ZS5pc0hpdCA9PSB0cnVlKSB7XG4gICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM2ZWU3YjdcIjtcbiAgICB9XG4gICAgaWYgKHBsYXllciA9PSBcImFpXCIpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3NxdWFyZScpO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnYWlTcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHggPSBjb29yZGluYXRlLlg7XG4gICAgICAgICAgICBsZXQgeSA9IGNvb3JkaW5hdGUuWTtcbiAgICAgICAgICAgIGF0dGFja0FJKHgsIHkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNvb3JkaW5hdGUuaXNIaXQgPT0gdHJ1ZSAmJiBjb29yZGluYXRlLmNvbnRhaW5zU2hpcCA9PSB0cnVlKSB7XG4gICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICB9XG4gICAgLy9pZiAoY29vcmRpbmF0ZS5jb250YWluc1NoaXAgPT0gdHJ1ZSkge1xuICAgICAgICAvL3NxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgIC8vfVxuICAgIGlmIChwbGF5ZXIgIT0gXCJhaVwiKSB7XG4gICAgICAgIGlmIChjb29yZGluYXRlLmNvbnRhaW5zU2hpcCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3F1YXJlO1xufVxuZnVuY3Rpb24gYm9hcmRMb2FkZXIoYm9hcmQsIHBsYXllcikge1xuICAgIGxldCBhcnJheU9mR3JpZENvb3JkaW5hdGVzID0gYm9hcmQuZ3JpZDtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY29udGFpbmVyJyk7XG4gICAgYXJyYXlPZkdyaWRDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGxldCBzcXVhcmUgPSBzcXVhcmVMb2FkZXIoY29vcmRpbmF0ZSwgcGxheWVyKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfSlcbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcbmZ1bmN0aW9uIHhDb29yZGluYXRlTG9hZGVyKCkge1xuICAgIGxldCBhcnJheU9mWENvb3JkaW5hdGVzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd4Q29vcmRpbmF0ZUNvbnRhaW5lcicpO1xuICAgIGFycmF5T2ZYQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCd1cHBlclNxdWFyZScpO1xuICAgICAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBjb29yZGluYXRlO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24geENvb3JkaW5hdGVEb3VibGVyKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgneENvb3JkaW5hdGVDb250YWluZXJEb3VibGUnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoeENvb3JkaW5hdGVMb2FkZXIoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHhDb29yZGluYXRlTG9hZGVyKCkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiB5Q29vcmRpbmF0ZUxvYWRlcigpIHtcbiAgICBsZXQgYXJyYXlPZlhDb29yZGluYXRlcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF07XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd5Q29vcmRpbmF0ZUNvbnRhaW5lcicpO1xuICAgIGFycmF5T2ZYQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdsZWZ0U3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS50ZXh0Q29udGVudCA9IGNvb3JkaW5hdGU7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiBwbGF5ZXJDb29yZGluYXRlZEJvYXJkTG9hZGVyKGJvYXJkKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaW5nbGVCb2FyZENvbnRhaW5lcicpXG4gICAgbGV0IHN1YmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1YmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWJjb250YWluZXInKTtcbiAgICAgICAgc3ViY29udGFpbmVyLmFwcGVuZENoaWxkKHlDb29yZGluYXRlTG9hZGVyKCkpO1xuICAgICAgICBzdWJjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRMb2FkZXIoYm9hcmQsIFwicGxheWVyXCIpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHhDb29yZGluYXRlTG9hZGVyKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViY29udGFpbmVyKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gYWlDb29yZGluYXRlZEJvYXJkTG9hZGVyKGJvYXJkKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaW5nbGVCb2FyZENvbnRhaW5lcicpXG4gICAgbGV0IHN1YmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1YmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWJjb250YWluZXInKTtcbiAgICAgICAgc3ViY29udGFpbmVyLmFwcGVuZENoaWxkKHlDb29yZGluYXRlTG9hZGVyKCkpO1xuICAgICAgICBzdWJjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRMb2FkZXIoYm9hcmQpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHhDb29yZGluYXRlTG9hZGVyKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViY29udGFpbmVyKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gdHdvQm9hcmRDb250ZW50R2VuZXJhdG9yKHBsYXllckJvYXJkLCBvcHBvbmVudEJvYXJkKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkb3VibGVCb2FyZENvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJDb29yZGluYXRlZEJvYXJkTG9hZGVyKHBsYXllckJvYXJkKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFpQ29vcmRpbmF0ZWRCb2FyZExvYWRlcihvcHBvbmVudEJvYXJkKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIHR3b0JvYXJkRE9NTG9hZGVyKHBsYXllckJvYXJkLCBvcHBvbmVudEJvYXJkKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodHdvQm9hcmRDb250ZW50R2VuZXJhdG9yKHBsYXllckJvYXJkLCBvcHBvbmVudEJvYXJkKSk7IFxufVxuZnVuY3Rpb24gc2NvcmVLZWVwZXJHZW5lcmF0b3IocGxheWVyLCBpbnB1dCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2luZ2xlQm9hcmRTY29yZUNvbnRhaW5lcicpXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBsZXQgc2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gcGxheWVyICsgXCIgU2NvcmU6IFwiXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2NvcmUpO1xuICAgIHNjb3JlLnRleHRDb250ZW50ID0gaW5wdXQgKyBcIi81XCI7XG4gICAgcmV0dXJuIGNvbnRhaW5lclxufVxuZnVuY3Rpb24gZG91YmxlU2NvcmVLZWVwZXJHZW5lcmF0b3IocGxheWVyMSwgaW5wdXQxLCBwbGF5ZXIyLCBpbnB1dDIpIHtcbiAgICBsZXQgc2NvcmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY29yZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzY29yZUtlZXBlckNvbnRhaW5lcicpO1xuICAgIHNjb3JlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjb3JlS2VlcGVyR2VuZXJhdG9yKHBsYXllcjEsIGlucHV0MSkpO1xuICAgIHNjb3JlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjb3JlS2VlcGVyR2VuZXJhdG9yKHBsYXllcjIsIGlucHV0MikpO1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLnByZXBlbmQoc2NvcmVDb250YWluZXIpXG59XG5mdW5jdGlvbiBhbm5vdW5jZVdpbm5lckNhcmQodGV4dCkge1xuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd3aW5uZXJDYXJkJyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChhbm5vdW5jZVdpbm5lclRleHQodGV4dCkpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQocmVzdGFydEdhbWVCdXR0b24oKSk7XG4gICAgY29udGFpbmVyLmZpcnN0Q2hpbGQuYXBwZW5kQ2hpbGQoY2FyZCk7XG59XG5mdW5jdGlvbiBhbm5vdW5jZVdpbm5lclRleHQodGV4dCkge1xuICAgIGxldCBhbm5vdW5jZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGFubm91bmNlbWVudC5jbGFzc0xpc3QuYWRkKCd3aW5uZXJBbm5vdW5jZW1lbnRUZXh0Jyk7XG4gICAgYW5ub3VuY2VtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gYW5ub3VuY2VtZW50O1xufVxuZnVuY3Rpb24gcmVzdGFydEdhbWVCdXR0b24oKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVzdGFydCBHYW1lXCI7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnRCdXR0b25cIik7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzdGFydEJvYXJkKVxuICAgIHJldHVybiBidXR0b247XG59XG5cblxuXG5jbGFzcyBnYW1lQm9hcmRMb2FkZXIge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllckJvYXJkLCBwbGF5ZXIsIGFpQm9hcmQsIGFpKSB7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQgPSBwbGF5ZXJCb2FyZDtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMuYWlCb2FyZCA9IGFpQm9hcmQ7XG4gICAgICAgIHRoaXMuYWkgPSBhaVxuICAgIH1cbiAgICByZWxvYWRCb2FyZHMoKSB7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIHRoaXMuYWlCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgdHdvQm9hcmRET01Mb2FkZXIodGhpcy5wbGF5ZXJCb2FyZCwgdGhpcy5haUJvYXJkKTtcbiAgICB9XG4gICAgcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQucG9wdWxhdGVTaGlwKHNpemUsIHgsIHksIGRpcmVjdGlvbik7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZC5uZXh0U2libGluZyk7XG4gICAgICAgIHR3b0JvYXJkRE9NTG9hZGVyKHRoaXMucGxheWVyQm9hcmQsIHRoaXMuYWlCb2FyZCk7XG4gICAgfVxuICAgIGRlcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQuZGVwb3B1bGF0ZVNoaXAoc2l6ZSwgeCwgeSwgZGlyZWN0aW9uKTtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgdHdvQm9hcmRET01Mb2FkZXIodGhpcy5wbGF5ZXJCb2FyZCwgdGhpcy5haUJvYXJkKTtcbiAgICB9XG4gICAgc2ltcGxlUG9wdWxhdGUoKSB7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQucG9wdWxhdGVTaGlwKDIsICdJJywgNCwgXCJlYXN0XCIpO1xuICAgICAgICB0aGlzLnBsYXllckJvYXJkLnBvcHVsYXRlU2hpcCg0LCAnQycsIDUsIFwiZWFzdFwiKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5wb3B1bGF0ZVNoaXAoMywgJ0onLCA2LCBcInNvdXRoXCIpO1xuICAgICAgICB0aGlzLnBsYXllckJvYXJkLnBvcHVsYXRlU2hpcCgzLCAnQicsIDgsIFwic291dGhcIik7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQucG9wdWxhdGVTaGlwKDIsICdFJywgOSwgXCJlYXN0XCIpO1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuICAgICAgICB0d29Cb2FyZERPTUxvYWRlcih0aGlzLnBsYXllckJvYXJkLCB0aGlzLmFpQm9hcmQpO1xuICAgIH1cbiAgICBhdHRhY2tBSSh4LCB5KSB7XG4gICAgICAgIHRoaXMuYWlCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuICAgICAgICB0d29Cb2FyZERPTUxvYWRlcih0aGlzLnBsYXllckJvYXJkLCB0aGlzLmFpQm9hcmQpO1xuICAgICAgICB0aGlzLmtlZXBTY29yZSgpXG4gICAgfVxuICAgIGF0dGFja1BsYXllcih4LCB5KSB7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgdHdvQm9hcmRET01Mb2FkZXIodGhpcy5wbGF5ZXJCb2FyZCwgdGhpcy5haUJvYXJkKTtcbiAgICAgICAgdGhpcy5rZWVwU2NvcmUoKVxuICAgIH1cbiAgICBwcm9kdWNlQXJyYXlPZlBsYXllclNoaXBzKCkge1xuICAgICAgICBsZXQgcGxheWVyU2hpcHMgPSBbXVxuICAgICAgICB0aGlzLnBsYXllckJvYXJkLmdyaWQuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlLnNoaXAgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBzLnB1c2goc3F1YXJlLnNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvL3BsYXllclNoaXBzIGNvbnRhaW5zIGR1cGxpY2F0ZXMgb2YgZWFjaCBzaGlwLCBzbyBJIGZpbHRlciB0aGUgYXJyYXkgYmVsb3dcbiAgICAgICAgbGV0IHBsYXllclNoaXBzRmlsdGVyZWQgPSBbXTtcbiAgICAgICAgcGxheWVyU2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmICghcGxheWVyU2hpcHNGaWx0ZXJlZC5pbmNsdWRlcyhzaGlwKSkge1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBzRmlsdGVyZWQucHVzaChzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHBsYXllclNoaXBzRmlsdGVyZWQ7XG4gICAgfVxuICAgIHByb2R1Y2VBcnJheU9mQWlTaGlwcygpIHtcbiAgICAgICAgbGV0IGFpU2hpcHMgPSBbXVxuICAgICAgICB0aGlzLmFpQm9hcmQuZ3JpZC5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIGlmIChzcXVhcmUuc2hpcCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYWlTaGlwcy5wdXNoKHNxdWFyZS5zaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLy9wbGF5ZXJTaGlwcyBjb250YWlucyBkdXBsaWNhdGVzIG9mIGVhY2ggc2hpcCwgc28gSSBmaWx0ZXIgdGhlIGFycmF5IGJlbG93XG4gICAgICAgIGxldCBhaVNoaXBzRmlsdGVyZWQgPSBbXTtcbiAgICAgICAgYWlTaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgaWYgKCFhaVNoaXBzRmlsdGVyZWQuaW5jbHVkZXMoc2hpcCkpIHtcbiAgICAgICAgICAgICAgICBhaVNoaXBzRmlsdGVyZWQucHVzaChzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFpU2hpcHNGaWx0ZXJlZDtcbiAgICB9XG4gICAga2VlcFNjb3JlKCkge1xuICAgICAgICBsZXQgcGxheWVyU2hpcHMgPSB0aGlzLnByb2R1Y2VBcnJheU9mUGxheWVyU2hpcHMoKTtcbiAgICAgICAgbGV0IGFpU2hpcHMgPSB0aGlzLnByb2R1Y2VBcnJheU9mQWlTaGlwcygpO1xuICAgICAgICBsZXQgcGxheWVyVGFsbHkgPSAwXG4gICAgICAgIGxldCBhaVRhbGx5ID0gMFxuICAgICAgICBwbGF5ZXJTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5oaXRzLmxlbmd0aCA9PSBzaGlwLnNpemUpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJUYWxseSArPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGFpU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuaGl0cy5sZW5ndGggPT0gc2hpcC5zaXplKSB7XG4gICAgICAgICAgICAgICAgYWlUYWxseSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgZG91YmxlU2NvcmVLZWVwZXJHZW5lcmF0b3IoXCJQbGF5ZXJcIiwgYWlUYWxseSwgXCJBSVwiLCBwbGF5ZXJUYWxseSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWlUYWxseSA9IFwiICsgYWlUYWxseSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyVGFsbHkgPVwiICsgcGxheWVyVGFsbHkpO1xuICAgICAgICBpZiAoYWlUYWxseSA9PSA1KSB7XG4gICAgICAgICAgICBhbm5vdW5jZVdpbm5lckNhcmQoXCJZb3Ugd2luIVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyVGFsbHkgPT0gNSkge1xuICAgICAgICAgICAgYW5ub3VuY2VXaW5uZXJDYXJkKFwiQUkgd2lucyFcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFpU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5haVNxdWFyZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhhaVNxdWFyZXMpO1xuXG5cbiAgICAgICAgLy9jb25zdHJ1Y3QgYSBsaXN0IG9mIGdhbWVib2FyZC5ncmlkIHNoaXBzXG4gICAgICAgIC8vZm9yIGFueSBzaGlwLCBpZiBzaGlwLmhpdHMgPT0gc2l6ZSwgYWRkICsxIHRvIHNjb3JlXG4gICAgICAgIC8vaW5wdXQgc2NvcmUgaW4gZG91YmxlU2NvcmVLZWVwZXJHZW5lcmF0b3JcbiAgICB9XG4gICAgY29weUFJZ3JpZCgpIHtcbiAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5haUJvYXJkLmdyaWQuc2xpY2UoKTtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICByYW5kb21QYXJhbWV0ZXJTZWxlY3RvcihhcnJheSwgc2l6ZSkge1xuICAgICAgICBsZXQgcmFuZG9tID0gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XG4gICAgICAgIGxldCB4ID0gcmFuZG9tLlg7XG4gICAgICAgIGxldCB5ID0gcmFuZG9tLlk7XG4gICAgICAgIGxldCBpbmRleCA9IGFycmF5LmluZGV4T2YocmFuZG9tKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyYW5kb20pO1xuICAgICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5yYW5kb21EaXJlY3Rpb25Qcm9kdWNlcigpO1xuICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXggKyAxLCAxKTtcbiAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4IC0gMSwgMSk7XG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCArIDEwLCAxKTtcbiAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4IC0gMTAsIDEpO1xuICAgICAgICBpZiAoc2l6ZSA+IDEgJiYgZGlyZWN0aW9uID09IFwic291dGhcIikge1xuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4ICsgMiwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemUgPiAxICYmIGRpcmVjdGlvbiA9PSBcIm5vcnRoXCIpIHtcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCAtIDIsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaXplID4gMSAmJiBkaXJlY3Rpb24gPT0gXCJlYXN0XCIpIHtcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCArIDIwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2l6ZSA+IDEgJiYgZGlyZWN0aW9uID09IFwid2VzdFwiKSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXggLSAyMCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemUgPiAyICYmIGRpcmVjdGlvbiA9PSBcInNvdXRoXCIpIHtcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCArIDMsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaXplID4gMiAmJiBkaXJlY3Rpb24gPT0gXCJub3J0aFwiKSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXggLSAzLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2l6ZSA+IDIgJiYgZGlyZWN0aW9uID09IFwiZWFzdFwiKSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXggLSAzMCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemUgPiAyICYmIGRpcmVjdGlvbiA9PSBcIndlc3RcIikge1xuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4ICsgMzAsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFpQm9hcmQucG9wdWxhdGVTaGlwKHNpemUsIHgsIHksIGRpcmVjdGlvbikgPT0gJ292ZXJmbG93IScpIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9tUGFyYW1ldGVyU2VsZWN0b3IoYXJyYXksIHNpemUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5haUJvYXJkLnBvcHVsYXRlU2hpcChzaXplLCB4LCB5LCBkaXJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmRBZGphY2VudFhDb29yZGluYXRlcyh4LCB5LCBhcnJheSkge1xuICAgICAgICBpZiAoeCA9PSAnQScpIHtcbiAgICAgICAgICAgIGxldCBhID0gXCJvdmVyZmxvd1wiO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0InICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0InKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnQScgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0MnICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0MnKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnQicgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0QnICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0QnKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnQycgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0UnICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0UnKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnRCcgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0YnICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0YnKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnRScgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0cnICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0cnKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnRicgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0gnICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0gnKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnRycgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0knICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0knKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnSCcgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0onICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0onKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnSScgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBcIm92ZXJmbG93XCI7XG4gICAgICAgICAgICByZXR1cm4gW2EsIGJdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJhbmRvbURpcmVjdGlvblByb2R1Y2VyKCkge1xuICAgICAgICBsZXQgbnVtID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgaWYgKG51bSA+PSAuNzUpIHsgcmV0dXJuIFwiZWFzdFwiIH1cbiAgICAgICAgaWYgKG51bSA8PSAuMjUpIHtyZXR1cm4gXCJ3ZXN0XCJ9XG4gICAgICAgIGlmIChudW0gPiAuMjUgJiYgbnVtIDwgLjUpIHsgcmV0dXJuIFwic291dGhcIiB9XG4gICAgICAgIGVsc2UgeyByZXR1cm4gXCJub3J0aFwiIH1cbiAgICB9XG4gICAgc2ltcGxlUG9wdWxhdGVBSSgpIHtcbiAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5jb3B5QUlncmlkKCk7XG4gICAgICAgIHRoaXMucmFuZG9tUGFyYW1ldGVyU2VsZWN0b3IoYXJyYXksIDIpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgICAgIHRoaXMucmFuZG9tUGFyYW1ldGVyU2VsZWN0b3IoYXJyYXksIDIpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgICAgIHRoaXMucmFuZG9tUGFyYW1ldGVyU2VsZWN0b3IoYXJyYXksIDMpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgICAgIHRoaXMucmFuZG9tUGFyYW1ldGVyU2VsZWN0b3IoYXJyYXksIDMpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgICAgIHRoaXMucmFuZG9tUGFyYW1ldGVyU2VsZWN0b3IoYXJyYXksIDQpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZC5uZXh0U2libGluZyk7XG4gICAgICAgIHR3b0JvYXJkRE9NTG9hZGVyKHRoaXMucGxheWVyQm9hcmQsIHRoaXMuYWlCb2FyZCk7XG4gICAgfVxufVxuXG4vL3N1aXRlIGZvciBsb2FkaW5nIGNhcnJpZXIgcGxhY2VtZW50IG1vZHVsZSBiZWZvcmUgZ2FtZSBiZWdpbnNcblxubGV0IHBsYWNlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucGxhY2VtZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudC1tb2R1bGUtY29udGFpbmVyJyk7XG5wbGFjZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwbGFjZW1lbnRDb250YWluZXInKTtcbmxldCBwbGFjZW1lbnRCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbmxldCBzaGlwQ291bnQgPSBbXTtcbmZ1bmN0aW9uIHBsYWNlbWVudE1vZHVsZUxvYWRlcigpIHtcbiAgICBwbGFjZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9wVGV4dExvYWRlcigpKTtcbiAgICBwbGFjZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VtZW50TW9kdWxlTWlkZGxlU3ViQ29udGFpbmVyTG9hZGVyKCkpO1xuICAgIHBsYWNlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b21TdWJjb250YWluZXJMb2FkZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGFjZW1lbnRDb250YWluZXIpO1xufVxuZnVuY3Rpb24gdG9wVGV4dExvYWRlcigpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudFRleHRCb3gnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9wVGV4dENvbnRlbnRMb2FkZXIoJ1BsYWNlIFlvdXIgU2hpcHMhJykpXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5mdW5jdGlvbiB0b3BUZXh0Q29udGVudExvYWRlcih0ZXh0KSB7XG4gICAgbGV0IGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGguY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50VGV4dENvbnRlbnQnKTtcbiAgICBoLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxhY2VtZW50SGVhZGluZycpO1xuICAgIGgudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBoO1xufVxuZnVuY3Rpb24gcGxhY2VtZW50TW9kdWxlTWlkZGxlU3ViQ29udGFpbmVyTG9hZGVyKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWlkZGxlU3ViY29udGFpbmVyJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VtZW50Qm9hcmRMb2FkZXIoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0SW5mb0xvYWRlcigpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gcmlnaHRJbmZvTG9hZGVyKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmlnaHRJbmZvU3ViY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbnNJbnRlZ3JhdG9yKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0Qm94TG9hZGVyKCkpO1xuICAgIHJldHVybiBjb250YWluZXJcbn07XG5mdW5jdGlvbiBidXR0b25zSW50ZWdyYXRvcigpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0SW5mb0J1dHRvbnNDb250YWluZXInKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNldFNoaXBCdG5Mb2FkZXIoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJlZ2luR2FtZUJ0bkxvYWRlcigpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gcmVzZXRTaGlwQnRuTG9hZGVyKCkge1xuICAgIGxldCByZXNldFNoaXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNldFNoaXBCdG4uY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50QnV0dG9uJyk7XG4gICAgcmVzZXRTaGlwQnRuLnRleHRDb250ZW50ID0gXCJSZXNldCBTaGlwc1wiO1xuICAgIHJlc2V0U2hpcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0U2hpcHMpXG4gICAgcmV0dXJuIHJlc2V0U2hpcEJ0bjtcbn07XG5mdW5jdGlvbiBiZWdpbkdhbWVCdG5Mb2FkZXIoKSB7XG4gICAgbGV0IGJlZ2luQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYmVnaW5CdG4uY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50QnV0dG9uJyk7XG4gICAgYmVnaW5CdG4udGV4dENvbnRlbnQgPSBcIkJlZ2luIEdhbWVcIjtcbiAgICBiZWdpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNraWZTaGlwc0FyZUFsbFBsYWNlZCk7XG4gICAgcmV0dXJuIGJlZ2luQnRuO1xufTtcbmZ1bmN0aW9uIHRleHRCb3hMb2FkZXIoKSB7XG4gICAgbGV0IHRleHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0Qm94LmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudEluc3RydWN0aW9uQm94Jyk7XG4gICAgdGV4dEJveC5hcHBlbmRDaGlsZCh0ZXh0Qm94SGVhZGluZ0xvYWRlcigpKTtcbiAgICB0ZXh0Qm94LmFwcGVuZENoaWxkKHRleHRCb3hDb250ZW50TG9hZGVyKFwiUGxhY2UgeW91ciBzaGlwcyBieSBkcmFnZ2luZyB0aGVtIHRvIHlvdXIgZGVzaXJlZCBsb2NhdGlvbi5cIikpO1xuICAgIHRleHRCb3guYXBwZW5kQ2hpbGQodGV4dEJveENvbnRlbnRMb2FkZXIoXCJDbGljayB0aGUgUm90YXRlIGJ1dHRvbiB0byBjaGFuZ2Ugb3JpZW50YXRpb24gb2Ygc2hpcHMgd2FpdGluZyB0byBiZSBwbGFjZWQuXCIpKTtcbiAgICB0ZXh0Qm94LmFwcGVuZENoaWxkKHRleHRCb3hDb250ZW50TG9hZGVyKFwiWW91IGNhbiBhbHNvIHJvdGF0ZSBzaGlwcyBhZnRlciBwbGFjaW5nIHRoZW0gb24gdGhlIGJvYXJkIGJ5IGNsaWNraW5nIG9uIHRoZW0uXCIpKTtcbiAgICB0ZXh0Qm94LmFwcGVuZENoaWxkKHRleHRCb3hDb250ZW50TG9hZGVyKFwiT25jZSB5b3UgaGF2ZSBwbGFjZWQgYWxsIGZpdmUgc2hpcHMsIHByZXNzIHRoZSBCZWdpbiBHYW1lIGJ1dHRvbiB0byBzdGFydC5cIikpO1xuICAgIHJldHVybiB0ZXh0Qm94O1xufVxuZnVuY3Rpb24gdGV4dEJveEhlYWRpbmdMb2FkZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nQ29udGFpbmVyJyk7XG4gICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkluc3RydWN0aW9uc1wiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gdGV4dEJveENvbnRlbnRMb2FkZXIodGV4dCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaW5zdHJ1Y3Rpb25Db250ZW50Jyk7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5mdW5jdGlvbiBzZWxlY3RTaGlwU3F1YXJlTG9hZGVyKGNvb3JkaW5hdGUpIHtcbiAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgIGlmIChjb29yZGluYXRlLmNvbnRhaW5zU2hpcCA9PSB0cnVlKSB7XG4gICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSBzcXVhcmUuaWQ7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGlkLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgbGV0IHN0YXJ0aW5nU3F1YXJlID0gcGxhY2VtZW50Qm9hcmQuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gZGF0YVswXSAmJiBzcXVhcmUuWSA9PSBkYXRhWzFdKSk7XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IHN0YXJ0aW5nU3F1YXJlLnNoaXAuc2l6ZTtcbiAgICAgICAgICAgIGxldCB4ID0gc3RhcnRpbmdTcXVhcmUuc2hpcC54U3RhcnQ7XG4gICAgICAgICAgICBsZXQgeSA9IHN0YXJ0aW5nU3F1YXJlLnNoaXAueVN0YXJ0O1xuICAgICAgICAgICAgaWYgKHN0YXJ0aW5nU3F1YXJlLnNoaXAuZGlyZWN0aW9uID09IFwiZWFzdFwiKSB7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50Qm9hcmQuZGVwb3B1bGF0ZVNoaXAoc2l6ZSwgeCwgeSwgXCJlYXN0XCIpO1xuICAgICAgICAgICAgICAgIGRlcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgXCJlYXN0XCIpO1xuICAgICAgICAgICAgICAgIC8vd3JpdGUgZGVwb3B1bGF0ZSBwbGF5ZXIgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICBwbGFjZW1lbnRCb2FyZC5wb3B1bGF0ZVNoaXAoc2l6ZSwgeCwgeSwgXCJzb3V0aFwiKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBcInNvdXRoXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFydGluZ1NxdWFyZS5zaGlwLmRpcmVjdGlvbiA9PSBcInNvdXRoXCIpIHtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnRCb2FyZC5kZXBvcHVsYXRlU2hpcChzaXplLCB4LCB5LCBcInNvdXRoXCIpO1xuICAgICAgICAgICAgICAgIGRlcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgXCJzb3V0aFwiKTtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnRCb2FyZC5wb3B1bGF0ZVNoaXAoc2l6ZSwgeCwgeSwgXCJlYXN0XCIpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlUGxheWVyKHNpemUsIHgsIHksIFwiZWFzdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMocGxhY2VtZW50Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocGxhY2VtZW50Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHBsYWNlbWVudE1vZHVsZUxvYWRlcigpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdpZCcsIGNvb3JkaW5hdGUuWCArIGNvb3JkaW5hdGUuWSk7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmFnT3ZlclwiKTtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcFwiKTtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGRhdGEgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgICAgIGxldCBzb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSBldi50YXJnZXQuaWQ7XG4gICAgICAgIGxldCBzaXplID0gZGF0YTtcbiAgICAgICAgbGV0IHggPSBjb29yZGluYXRlWzBdO1xuICAgICAgICBsZXQgeSA9IGNvb3JkaW5hdGVbMV07XG4gICAgICAgIGlmIChjb29yZGluYXRlWzJdID09IDApIHtcbiAgICAgICAgICAgIGxldCBhcnJheSA9IFtjb29yZGluYXRlWzFdLCBjb29yZGluYXRlWzJdXVxuICAgICAgICAgICAgeSA9IGFycmF5LmpvaW4oJycpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdGFydGluZ1NxdWFyZSA9IHBsYWNlbWVudEJvYXJkLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IHggJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICBpZiAoc3RhcnRpbmdTcXVhcmUuY29udGFpbnNTaGlwID09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChyb3RhdGlvblRyYWNrZXIgPT0gMCkge1xuICAgICAgICAgICAgcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgXCJlYXN0XCIpO1xuICAgICAgICAgICAgcGxhY2VtZW50Qm9hcmQucG9wdWxhdGVTaGlwKHNpemUsIHgsIHksIFwiZWFzdFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvcHVsYXRlUGxheWVyKHNpemUsIHgsIHksIFwic291dGhcIik7XG4gICAgICAgICAgICBwbGFjZW1lbnRCb2FyZC5wb3B1bGF0ZVNoaXAoc2l6ZSwgeCwgeSwgXCJzb3V0aFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKHBsYWNlbWVudENvbnRhaW5lcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocGxhY2VtZW50Q29udGFpbmVyKTtcbiAgICAgICAgc2hpcENvdW50LnB1c2goc2l6ZSk7XG4gICAgICAgIHBsYWNlbWVudE1vZHVsZUxvYWRlcigpO1xuICAgIH0pXG4gICAgcmV0dXJuIHNxdWFyZTtcbn1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5mdW5jdGlvbiBzZWxlY3RTaGlwQm9hcmRMb2FkZXIoYm9hcmQpIHtcbiAgICBsZXQgYXJyYXlPZkdyaWRDb29yZGluYXRlcyA9IGJvYXJkLmdyaWQ7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncmlkLWNvbnRhaW5lcicpO1xuICAgIGFycmF5T2ZHcmlkQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBsZXQgc3F1YXJlID0gc2VsZWN0U2hpcFNxdWFyZUxvYWRlcihjb29yZGluYXRlKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfSlcbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcbmZ1bmN0aW9uIHNlbGVjdFNoaXBQbGF5ZXJDb29yZGluYXRlZEJvYXJkTG9hZGVyKGJvYXJkKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaW5nbGVCb2FyZENvbnRhaW5lcicpXG4gICAgbGV0IHN1YmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1YmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWJjb250YWluZXInKTtcbiAgICAgICAgc3ViY29udGFpbmVyLmFwcGVuZENoaWxkKHlDb29yZGluYXRlTG9hZGVyKCkpO1xuICAgICAgICBzdWJjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0U2hpcEJvYXJkTG9hZGVyKGJvYXJkKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh4Q29vcmRpbmF0ZUxvYWRlcigpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN1YmNvbnRhaW5lcik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5mdW5jdGlvbiBwbGFjZW1lbnRCb2FyZExvYWRlcigpIHtcbiAgICByZXR1cm4gc2VsZWN0U2hpcFBsYXllckNvb3JkaW5hdGVkQm9hcmRMb2FkZXIocGxhY2VtZW50Qm9hcmQpO1xufTtcbmNvbnN0IHNvdXJjZSA9IFwiXCI7XG5mdW5jdGlvbiByb3RhdGVTaGlwQnV0dG9uTG9hZGVyKCkge1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlJvdGF0ZVwiO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnRCdXR0b24nKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdyb3RhdGVTaGlwQnV0dG9uJyk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByb3RhdGVPbkNsaWNrKClcbiAgICB9KTtcbiAgICByZXR1cm4gYnV0dG9uO1xufVxuZnVuY3Rpb24gcm90YXRlT25DbGljaygpIHtcbiAgICAvL2xldCBjbGFzc0NvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LnNpbmdsZVNoaXBDbGFzc0NvbnRhaW5lclwiKTtcbiAgICBsZXQgaW5kaXZpZHVhbFNoaXBDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi5zaGlwXCIpO1xuICAgIGluZGl2aWR1YWxTaGlwQ29udGFpbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJjb2x1bW5cIikgeyBub2RlLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiOyByb3RhdGlvblRyYWNrZXIgPSAwOyB9XG4gICAgICAgIGVsc2UgeyBub2RlLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiOyByb3RhdGlvblRyYWNrZXIgPSAxOyB9XG4gICAgfSk7XG4gICAgLy9jbGFzc0NvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAvL2lmIChyb3RhdGlvblRyYWNrZXIgPT0gMSkgeyBub2RlLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiOyB9XG4gICAgICAgIC8vZWxzZSB7IG5vZGUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7IH1cbiAgICAvL30pXG4gICAgY2hlY2tDbGFzc0NvbnRhaW5lck9yaWVudGF0aW9uKCk7XG59XG4vL3RoaXMgZnVuY3Rpb24gY2hlY2tzIHdoZXRoZXIgdG8gYXJyYW5nZSBzaGlwcyBpbiByb3dzIG9yIGNvbHVtbnMgd2l0aGluIHRoZWlyIGNsYXNzIGNvbnRhaW5lcnNcbmZ1bmN0aW9uIGNoZWNrQ2xhc3NDb250YWluZXJPcmllbnRhdGlvbigpIHtcbiAgICBsZXQgY2xhc3NDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi5zaW5nbGVTaGlwQ2xhc3NDb250YWluZXJcIik7XG4gICAgY2xhc3NDb250YWluZXJzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKHJvdGF0aW9uVHJhY2tlciA9PSAxKSB7IG5vZGUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7IH1cbiAgICAgICAgZWxzZSB7IG5vZGUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7IH1cbiAgICB9KTtcbn1cbi8vVGhpcyByb3RhdGlvblRyYWNrZXIgdGVsbHMgdGhlIHNoaXBNYWtlcigpIHdoZXRoZXIgdG8gcG9zaXRpb24gc2hpcHMgdmVydGljYWxseSBvciBob3Jpem9udGFsbHkuXG4gICAgLy8wIGNvbW1hbmRzIHNoaXBNYWtlcigpIHRvIHBvc2l0aW9uIHNoaXBzIGhvcml6b250YWxseSwgMSB2ZXJ0aWNhbGx5LlxuICAgIC8vSXQgdHJhY2tzIHdoZXRoZXIgLyB3aGVuIHJvdGF0ZU9uQ2xpY2soKSBoYXMgcm90YXRlZCBzaGlwcyB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseS5cbmxldCByb3RhdGlvblRyYWNrZXIgPSAwO1xuZnVuY3Rpb24gc2hpcE1ha2VyKHNpemUpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgc2l6ZSk7XG4gICAgaWYgKHJvdGF0aW9uVHJhY2tlciA9PSAxKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICB9XG4gICAgaWYgKHJvdGF0aW9uVHJhY2tlciA9PSAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICB9XG4gICAgd2hpbGUgKHNpemUgPj0gMSkge1xuICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnRTcXVhcmUnKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgIHNpemUgPSBzaXplIC0gMTtcbiAgICB9XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRyYW5zZmVyRGF0YU9uRHJhZ3N0YXJ0KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gdHJhbnNmZXJEYXRhT25EcmFnc3RhcnQoZXYpIHtcbiAgICAgLy8gQ2hhbmdlIHRoZSBzb3VyY2UgZWxlbWVudCdzIGJhY2tncm91bmQgY29sb3JcbiAgICAgICAgLy8gdG8gc2hvdyB0aGF0IGRyYWcgaGFzIHN0YXJ0ZWRcbiAgICAgICAgZXYuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIik7XG4gICAgICAgIC8vIENsZWFyIHRoZSBkcmFnIGRhdGEgY2FjaGUgKGZvciBhbGwgZm9ybWF0cy90eXBlcylcbiAgICAgICAgZXYuZGF0YVRyYW5zZmVyLmNsZWFyRGF0YSgpO1xuICAgICAgICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgZXYudGFyZ2V0LmlkKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICAgICAgc291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YSk7XG4gICAgICAgIGV2LmN1cnJlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgdHJhbnNmZXJEYXRhT25EcmFnc3RhcnQpO1xufVxuZnVuY3Rpb24gYm90dG9tU3ViY29udGFpbmVyTG9hZGVyKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm90dG9tU3ViY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvdGF0ZVNoaXBCdXR0b25Mb2FkZXIoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDb3VudGVyKCkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiBzaGlwQ291bnRlcigpIHtcbiAgICBsZXQgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpcEFsbENsYXNzZXNDb250YWluZXInKTtcbiAgICBsZXQgc2l6ZVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpemVUd28uY2xhc3NMaXN0LmFkZCgnc2luZ2xlU2hpcENsYXNzQ29udGFpbmVyJyk7XG4gICAgbGV0IHNpemVUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpemVUaHJlZS5jbGFzc0xpc3QuYWRkKCdzaW5nbGVTaGlwQ2xhc3NDb250YWluZXInKTtcbiAgICBsZXQgc2l6ZUZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaXplRm91ci5jbGFzc0xpc3QuYWRkKCdzaW5nbGVTaGlwQ2xhc3NDb250YWluZXInKTtcbiAgICBpZiAocm90YXRpb25UcmFja2VyID09IDEpIHtcbiAgICAgICAgc2l6ZVR3by5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgICAgc2l6ZVRocmVlLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgICBzaXplRm91ci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICB9XG4gICAgaWYgKHNoaXBDb3VudC5maWx0ZXIoeCA9PiB4ID09IDIpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHNpemVUd28uYXBwZW5kQ2hpbGQoc2hpcE1ha2VyKDIpKTtcbiAgICAgICAgc2l6ZVR3by5hcHBlbmRDaGlsZChzaGlwTWFrZXIoMikpO1xuICAgICAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpemVUd28pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzaGlwQ291bnQuZmlsdGVyKHggPT4geCA9PSAyKS5sZW5ndGggPT0gMSkge1xuICAgICAgICBzaXplVHdvLmFwcGVuZENoaWxkKHNoaXBNYWtlcigyKSk7XG4gICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2l6ZVR3byk7XG4gICAgfVxuICAgIGlmIChzaGlwQ291bnQuZmlsdGVyKHggPT4geCA9PSAzKS5sZW5ndGggPT0gMCkge1xuICAgICAgICBzaXplVGhyZWUuYXBwZW5kQ2hpbGQoc2hpcE1ha2VyKDMpKTtcbiAgICAgICAgc2l6ZVRocmVlLmFwcGVuZENoaWxkKHNoaXBNYWtlcigzKSk7XG4gICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2l6ZVRocmVlKTtcbiAgICB9IGVsc2UgaWYgKHNoaXBDb3VudC5maWx0ZXIoeCA9PiB4ID09IDMpLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHNpemVUaHJlZS5hcHBlbmRDaGlsZChzaGlwTWFrZXIoMykpO1xuICAgICAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpemVUaHJlZSk7XG4gICAgfVxuICAgIGlmIChzaGlwQ291bnQuZmlsdGVyKHggPT4geCA9PSA0KS5sZW5ndGggPT0gMCkge1xuICAgICAgICBzaXplRm91ci5hcHBlbmRDaGlsZChzaGlwTWFrZXIoNCkpO1xuICAgICAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpemVGb3VyKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoaXBDb250YWluZXI7XG59XG5mdW5jdGlvbiBjaGVja2lmU2hpcHNBcmVBbGxQbGFjZWQoKSB7XG4gICAgaWYgKHNoaXBDb3VudC5sZW5ndGggPT0gNSkge1xuICAgICAgICBzaW1wbGVQb3B1bGF0ZUFJKCk7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMocGxhY2VtZW50Q29udGFpbmVyKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwbGFjZW1lbnRDb250YWluZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2VtZW50SGVhZGluZycpO1xuICAgICAgICBoLnRleHRDb250ZW50ID0gXCJQbGFjZSBBbGwgU2hpcHMgQmVmb3JlIFN0YXJ0aW5nIHRoZSBHYW1lIVwiXG4gICAgICAgIGguc3R5bGUuY29sb3IgPSBcIiNlZjQ0NDRcIjtcbiAgICB9XG59XG5mdW5jdGlvbiByZXNldFNoaXBzKCkge1xuICAgIHBsYWNlbWVudEJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIGNsZWFyU2hpcENvdW50KCk7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhwbGFjZW1lbnRDb250YWluZXIpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocGxhY2VtZW50Q29udGFpbmVyKTtcbiAgICByZWxvYWRCb2FyZHMoKTtcbiAgICBwbGFjZW1lbnRNb2R1bGVMb2FkZXIoKTtcbn1cbmZ1bmN0aW9uIGNsZWFyU2hpcENvdW50KCkge1xuICAgIHdoaWxlIChzaGlwQ291bnQubGVuZ3RoID49IDEpIHtcbiAgICAgICAgc2hpcENvdW50LnBvcCgpO1xuICAgIH1cbn1cblxuXG5sZXQgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5sZXQgYWlCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbmxldCBwbGF5ZXIgPSBcInRheWxvclwiXG5sZXQgYWkgPSBcImNvbXB1dGVyXCJcbmxldCBib2FyZHMgPSBuZXcgZ2FtZUJvYXJkTG9hZGVyKHBsYXllckJvYXJkLCBwbGF5ZXIsIGFpQm9hcmQsIGFpKTtcblxuZnVuY3Rpb24gbG9hZEJvYXJkcygpIHtcbiAgICB0d29Cb2FyZERPTUxvYWRlcihib2FyZHMucGxheWVyQm9hcmQsIGJvYXJkcy5haUJvYXJkKTtcbiAgICBkb3VibGVTY29yZUtlZXBlckdlbmVyYXRvcihcIlBsYXllclwiLCAwLCBcIkFJXCIsIDApO1xufVxuXG5jb25zdCBwbGF5ZXJQb3B1bGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xucGxheWVyUG9wdWxhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaW1wbGVQb3B1bGF0ZSk7XG5wbGF5ZXJQb3B1bGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwb3B1bGF0ZUJ1dHRvbicpO1xucGxheWVyUG9wdWxhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIlBvcHVsYXRlIFBsYXllclwiO1xuY29uc3QgYWlQb3B1bGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYWlQb3B1bGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpbXBsZVBvcHVsYXRlQUkpO1xuYWlQb3B1bGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwb3B1bGF0ZUJ1dHRvbicpO1xuYWlQb3B1bGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUG9wdWxhdGUgQUlcIjtcbmNvbnN0IGF0dGFja0FJQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hdHRhY2tBSUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFja0FJKTtcbmF0dGFja0FJQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BvcHVsYXRlQnV0dG9uJyk7XG5hdHRhY2tBSUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQXR0YWNrIEFJXCI7XG5jb25zdCBhdHRhY2tQbGF5ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmF0dGFja1BsYXllckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFja1BsYXllcik7XG5hdHRhY2tQbGF5ZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgncG9wdWxhdGVCdXR0b24nKTtcbmF0dGFja1BsYXllckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQXR0YWNrIFBsYXllclwiXG5cbmZ1bmN0aW9uIHJlc3RhcnRCb2FyZCgpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGFpbmVyKTtcbiAgICBnZW5lcmF0ZUhVRCgpO1xuICAgIHJlc2V0U2hpcHMoKTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSFVEKCkge1xuICAgIHBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIGFpQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgcGxheWVyID0gXCJ0YXlsb3JcIjtcbiAgICBhaSA9IFwiY29tcHV0ZXJcIjtcbiAgICBkb3VibGVTY29yZUtlZXBlckdlbmVyYXRvcihcIlBsYXllclwiLCAwLCBcIkFJXCIsIDApO1xuICAgIHR3b0JvYXJkRE9NTG9hZGVyKGJvYXJkcy5wbGF5ZXJCb2FyZCwgYm9hcmRzLmFpQm9hcmQpO1xuICAgIHBsYWNlbWVudE1vZHVsZUxvYWRlcigpO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVCdXR0b25zKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclBvcHVsYXRlQnV0dG9uKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWlQb3B1bGF0ZUJ1dHRvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGF0dGFja1BsYXllckJ1dHRvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGF0dGFja0FJQnV0dG9uKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuICAgIGZ1bmN0aW9uIHNpbXBsZVBvcHVsYXRlKCkge1xuICAgICAgICBib2FyZHMuc2ltcGxlUG9wdWxhdGUoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2ltcGxlUG9wdWxhdGVBSSgpIHtcbiAgICAgICAgYm9hcmRzLnNpbXBsZVBvcHVsYXRlQUkoKTtcbiAgICB9XG5mdW5jdGlvbiBwb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBkaXJlY3Rpb24pIHtcbiAgICBib2FyZHMucG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgZGlyZWN0aW9uKTtcbn07XG5mdW5jdGlvbiBkZXBvcHVsYXRlUGxheWVyKHNpemUsIHgsIHksIGRpcmVjdGlvbikge1xuICAgIGJvYXJkcy5kZXBvcHVsYXRlUGxheWVyKHNpemUsIHgsIHksIGRpcmVjdGlvbik7XG59XG4vL3RoaXMgZnVuY3Rpb24gaXMgdXNlZCB3aXRoIHRoZSBzaGlwIHBsYWNlbWVudCBtb2R1bGVcbiAgICAvL3doZW5ldmVyIHlvdSByZXNldCBzaGlwIHBsYWNlbWVudCwgeW91IGFsc28gbmVlZCB0byByZWxvYWQgcGxheWVyICYgYWkgYm9hcmRzXG4gICAgLy90byBkZWxldGUgYW55IHNoaXBzIHBsYWNlZCBkdXJpbmcgcHJpb3Igc2hpcCBwbGFjZW1lbnQgcGhhc2VcbmZ1bmN0aW9uIHJlbG9hZEJvYXJkcygpIHtcbiAgICBib2FyZHMucmVsb2FkQm9hcmRzKCk7XG59XG5cblxuLy9haUFycmF5IGJlbG93IGNvbnRhaW5zIGdsb2JhbGx5IGF2YWlsYWJsZSBjb3B5IG9mIHBsYXllckJvYXJkIGdyaWQsIGZvciB1c2UgYnkgQUlcbi8vZXZlcnkgdGltZSB0aGUgQUkgYXR0YWNrcyBwbGF5ZXIsIHNlbGVjdHMgb25lIGVsZW1lbnQgYXQgcmFuZG9tIGZyb20gdGhlIGFycmF5IGFuZCB0aGVuIHJlbW92ZXMgaXRcbi8vc28gdGhhdCBmdXR1cmUgaW52b2NhdGlvbnMgY2Fubm90IGF0dGFjayB0aGUgc2FtZSBsb2NhdGlvblxuY29uc3QgYWlBcnJheSA9IGJvYXJkcy5wbGF5ZXJCb2FyZC5ncmlkLnNsaWNlKCk7XG5mdW5jdGlvbiBhdHRhY2tBSSh4LCB5KSB7XG4gICAgbGV0IGZvdW5kID0gYm9hcmRzLmFpQm9hcmQuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0geCAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgaWYgKGZvdW5kLmlzSGl0ID09IHRydWUpIHsgYWxlcnQoXCJZb3UgaGF2ZSBhbHJlYWR5IGF0dGFja2VkIHRoYXQgc3F1YXJlISBUcnkgYW5vdGhlci5cIikgfVxuICAgIGlmIChmb3VuZC5pc0hpdCA9PSBmYWxzZSkge1xuICAgICAgICBsZXQgaW5kZXggPSBib2FyZHMuYWlCb2FyZC5ncmlkLmluZGV4T2YoZm91bmQpO1xuICAgICAgICBhaUFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGJvYXJkcy5hdHRhY2tBSSh4LCB5KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhdHRhY2tQbGF5ZXIoKTtcbiAgICAgICAgfSwgXCI1MDBcIik7XG4gICAgfVxufVxuXG4vL3BsYXllckFycmF5IGJlbG93IGNvbnRhaW5zIGdsb2JhbGx5IGF2YWlsYWJsZSBjb3B5IG9mIHBsYXllckJvYXJkIGdyaWQsIGZvciB1c2UgYnkgQUlcbi8vZXZlcnkgdGltZSB0aGUgQUkgYXR0YWNrcyBwbGF5ZXIsIHNlbGVjdHMgb25lIGVsZW1lbnQgYXQgcmFuZG9tIGZyb20gdGhlIGFycmF5IGFuZCB0aGVuIHJlbW92ZXMgaXRcbi8vc28gdGhhdCBmdXR1cmUgaW52b2NhdGlvbnMgY2Fubm90IGF0dGFjayB0aGUgc2FtZSBsb2NhdGlvblxuY29uc3QgcGxheWVyQXJyYXkgPSBib2FyZHMucGxheWVyQm9hcmQuZ3JpZC5zbGljZSgpO1xuZnVuY3Rpb24gYXR0YWNrUGxheWVyKCkge1xuICAgIGlmIChwbGF5ZXJBcnJheS5sZW5ndGggPT0gMCkgcmV0dXJuIGFsZXJ0KCdnYW1lIG92ZXIhJylcbiAgICBsZXQgcmFuZG9tID0gcGxheWVyQXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxheWVyQXJyYXkubGVuZ3RoKV07XG4gICAgbGV0IHggPSByYW5kb20uWDtcbiAgICBsZXQgeSA9IHJhbmRvbS5ZO1xuICAgIGxldCBpbmRleCA9IHBsYXllckFycmF5LmluZGV4T2YocmFuZG9tKTtcbiAgICBwbGF5ZXJBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGJvYXJkcy5hdHRhY2tQbGF5ZXIoeCwgeSk7XG59XG4vL3NjcmlwdGluZyBmb3JtcyBmb3IgaW5wdXR0aW5nIGNvb3JkaW5hdGVzXG5sZXQgeExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbnhMYWJlbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2tMYWJlbCcpO1xueExhYmVsLnRleHRDb250ZW50ID0gXCJJbnB1dCBYIENvb3JkaW5hdGU6IFwiXG5sZXQgeElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnhJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbmxldCB5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xueUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2F0dGFja0xhYmVsJyk7XG55TGFiZWwudGV4dENvbnRlbnQgPSBcIklucHV0IFkgQ29vcmRpbmF0ZTogXCJcbmxldCB5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xueUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG5mdW5jdGlvbiByZXR1cm5YRm9ybSgpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db250YWluZXInKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh4TGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh4SW5wdXQpO1xuICAgIHJldHVybiBjb250YWluZXJcbn1cbmZ1bmN0aW9uIHJldHVybllGb3JtKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHlMYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHlJbnB1dCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lclxufVxuZnVuY3Rpb24gZ2VuZXJhdGVGb3JtKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJldHVyblhGb3JtKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXR1cm5ZRm9ybSgpKTtcbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIGxvYWRBcHBXaW5kb3coKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuICAgIHBsYWNlbWVudE1vZHVsZUxvYWRlcigpO1xuICAgIGxvYWRCb2FyZHMoKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBsb2FkQXBwV2luZG93IH0iLCJpbXBvcnQgeyBqc1BhZ2VMb2FkZXIgfSBmcm9tICcuL21vZHVsZXMvamF2YXNjcmlwdC5qcyc7XG5pbXBvcnQgeyBob21lUGFnZUxvYWRlciB9IGZyb20gJy4vbW9kdWxlcy93aG9JQW0uanMnO1xuaW1wb3J0IHsgbG9hZEhvbWVQYWdlLCBsb2FkSnNQYWdlIH0gZnJvbSAnLi4vbmF2RnVuY3Rpb25zLmpzJztcblxuXG5mdW5jdGlvbiBoZWFkZXJMb2FkZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChteU5hbWUoJ1RheWxvciBCYXJpbmthJykpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChteUxpbmtzKCkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiBteU5hbWUobmFtZSkge1xuICAgIGxldCBteU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG15TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgcmV0dXJuIG15TmFtZTtcbn1cbmZ1bmN0aW9uIG15TGlua3MoKSB7XG4gICAgbGV0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdicpO1xuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbGlua3NMaXN0Jyk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaW5rRmFjdG9yeSgnV2hvIEkgQW0nLCBsb2FkSG9tZVBhZ2UpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpbmtGYWN0b3J5KCdGcm9udC1FbmQgRGV2ZWxvcG1lbnQnLCBsb2FkSnNQYWdlKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaW5rRmFjdG9yeSgnUGhpbG9zb3BoeScpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpbmtGYWN0b3J5KCdUZWFjaGluZycpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpbmtGYWN0b3J5KCdHYW1lcyBXcml0aW5nJykpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICByZXR1cm4gbmF2QmFyO1xufVxuICAgIC8vTm90ZSB0byBzZWxmOiBhZGQgJ2xpbmsnIGFzIHBhcmFtdGVyIHRvIGxpbmtGYWN0b3J5IHdoZW4gcmVhZHkgdG8gaW1wbGVtZW50IGxpbmtzXG5mdW5jdGlvbiBsaW5rRmFjdG9yeSh0ZXh0LCBjYiA9IG51bGwpIHtcbiAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBteUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIG15TGluay5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIGlmIChjYiAhPT0gbnVsbCkge1xuICAgICAgICBteUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYik7XG4gICAgfSBcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChteUxpbmspO1xuICAgIHJldHVybiBsaXN0SXRlbTtcbn1cblxuZXhwb3J0IHsgaGVhZGVyTG9hZGVyIH07IiwiaW1wb3J0IHsgY29udGVudEJveEZhY3RvcnksIHBhcmFncmFwaEZhY3RvcnksIG1haW5Db250ZW50RmFjdG9yeSwgcmVtb3ZlQWxsQ2hpbGROb2RlcywgbWFpbkNvbnRlbnQgfSBmcm9tICcuL3dob0lBbS5qcyc7XG5pbXBvcnQgeyBwcm9maWxlTG9hZGVyIH0gZnJvbSAnLi4vcHJvZmlsZS5qcyc7XG5pbXBvcnQgeyBsb2FkV2VhdGhlckFwcCB9IGZyb20gJy4uL3dlYXRoZXItYXBwL3NyYy9kb21Mb2dpYy5qcyc7XG5pbXBvcnQgeyBsb2FkQXBwV2luZG93IH0gZnJvbSAnLi4vYmF0dGxlc2hpcC1hcHAvcGVyc29uYWwtd2Vic2l0ZS1pbml0aWFsaXplci5qcyc7XG5pbXBvcnQgeyBwZXJzb25hbFNpdGVQYWdlTG9hZGVyIH0gZnJvbSAnLi4vdG8tZG8tbGlzdC9wZXJzb25hbC13ZWJzaXRlLWluaXRpYWxpemVyLmpzJztcblxuZnVuY3Rpb24ganNQYWdlTG9hZGVyKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluQ29udGFpbmVyJyk7XG4gICAgbGV0IGpzQm94ID0gY29udGVudEJveEZhY3RvcnkoXCJXZWIgRGV2ZWxvcG1lbnRcIiwganNNYWluQ29udGVudExvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZmlsZUxvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQoanNCb3gpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBvcGVuQXBwQnV0dG9uQ3JlYXRvcih0ZXh0LCBjYiwgdXJsID0gbnVsbCkge1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdvcGVuQXBwQnV0dG9ucycpO1xuICAgIGlmICh1cmwgIT09IG51bGwpIHtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnb25jbGljaycsIHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYik7XG4gICAgfVxuICAgIHJldHVybiBidXR0b247XG59XG5mdW5jdGlvbiBvcGVuV2VhdGhlckFwcCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRXZWF0aGVyQXBwKCkpO1xufVxuZnVuY3Rpb24gb3BlbkJhdHRsZXNoaXAoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBsb2FkQXBwV2luZG93KClcbn1cbmZ1bmN0aW9uIG9wZW5Ub0RvTGlzdCgpIHtcbiAgICBwZXJzb25hbFNpdGVQYWdlTG9hZGVyKCk7XG59XG5mdW5jdGlvbiBPcGVuQXBwQnV0dG9uQ29udGFpbmVyQ3JlYXRvcigpIHtcbiAgICBsZXQgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYXBwQnV0dG9uQ29udGFpbmVyJylcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQob3BlbkFwcEJ1dHRvbkNyZWF0b3IoXCJXZWF0aGVyIEFwcFwiLCBvcGVuV2VhdGhlckFwcCkpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVuQXBwQnV0dG9uQ3JlYXRvcihcIkJhdHRsZXNoaXBcIiwgb3BlbkJhdHRsZXNoaXApKVxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVuQXBwQnV0dG9uQ3JlYXRvcihcIlRhc2sgT3JnYW5pemVyXCIsIG9wZW5Ub0RvTGlzdCkpXG4gICAgcmV0dXJuIGJ1dHRvbkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24ganNNYWluQ29udGVudExvYWRlcigpIHtcbiAgICBsZXQgcDEgPSBwYXJhZ3JhcGhGYWN0b3J5KFwiSSBhbSBhIGZyb250LWVuZCB3ZWIgZGV2ZWxvcGVyIHByb2ZpY2llbnQgaW4gSFRNTCwgQ1NTLCBhbmQgSmF2YVNjcmlwdC4gSSB0YXVnaHQgbXlzZWxmIGhvdyB0byB1c2UgdGhlc2UgdG9vbHMgd2l0aCBhbiBleGNlbGxlbnQgPGEgaHJlZj0naHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL2Rhc2hib2FyZCc+IG9wZW4gc291cmNlIGNvdXJzZTwvYT4sIGFuZCBJ4oCZbSBpbiB0aGUgcHJvY2VzcyBvZiBhY2hpZXZpbmcgcHJvZmljaWVuY3kgaW4gZGV2ZWxvcG1lbnQgb24gdGhlIGJhY2sgZW5kLlwiKTtcbiAgICBsZXQgcDIgPSBwYXJhZ3JhcGhGYWN0b3J5KFwiSSBhbSBhdHRyYWN0ZWQgdG8gY29kaW5nIGZvciBhIGNvdXBsZSBvZiByZWFzb25zLiBGaXJzdCwgSSBsaWtlIHRoZSBpZGVhIG9mIGJlaW5nIGEga2luZCBvZiBjcmFmdHNwZXJzb24gd2hvIGNhbiBtYWtlIHRoaW5ncyB0aGF0IHBlb3BsZSBuZWVkLiBJdOKAmXMgaG9uZXN0IHdvcmsuIEJ1dCBJIGFsc28gZmluZCB0aGF0IHRoZXJlIGlzIGFuIGFydGlzdHJ5IHRvIGNvZGluZyB3aGljaCBpcyBhIHBsZWFzdXJlIGluIGl0c2VsZiDigJMgdGhlIHByb2Nlc3Mgb2YgaWRlbnRpZnlpbmcgYSBkZXNpcmVkIHJlc3VsdCBhbmQgZW5naW5lZXJpbmcgbG9naWNhbCBzdHJ1Y3R1cmVzIHN1ZmZpY2llbnQgdG8gYWNoaWV2ZSB0aGUgcmVzdWx0IGdpdmVzIG1lIGNyZWF0aXZlIHNhdGlzZmFjdGlvbi4gSXQgaGl0cyBhIHBlcmZlY3QgaW50ZXJzZWN0aW9uIGJldHdlZW4gd2hlcmUgSSBjYW4gYmUgdXNlZnVsIGFuZCB3aGF0IEkgY2FuIGVuam95LlwiKVxuICAgIGxldCBwMyA9IHBhcmFncmFwaEZhY3RvcnkoXCJIZXJlIGFyZSBhIGZldyBwcm9qZWN0cyB0aGF0IEkgaGF2ZSBjb21wbGV0ZWQuXCIpXG4gICAgbGV0IHA0ID0gcGFyYWdyYXBoRmFjdG9yeShcIjxhIGhyZWY9J2h0dHA6Ly9pbmRpdmlkdWFsLnV0b3JvbnRvLmNhL3JiYXJuZXkvSG9tZS5odG1sJz5UaGlzIGlzIHRoZSBwZXJzb25hbCB3ZWJzaXRlPC9hPiBvZiBhIHByb2Zlc3Npb25hbCBhY3F1YWludGFuY2Ugd2hvc2UgY29udGVudCBJIHdhcyBjb250cmFjdGVkIHRvIHVwZGF0ZSBhbmQgcHVibGlzaC4gVGhpcyBpbnZvbHZlZCBtb2RpZnlpbmcgYW4gZXhpc3RpbmcgY29kZWJhc2UgYW5kIGNvbXBvc2luZyBhIHNldCBvZiBpbnN0cnVjdGlvbnMgdG8gaGVscCBzdHJlYW1saW5lIHRoZSBwcm9jZXNzIG9mIG1vZGlmeWluZyBmdXR1cmUgaXRlcmF0aW9ucyBvZiB0aGUgc2l0ZS5cIik7XG4gICAgbGV0IHA1ID0gcGFyYWdyYXBoRmFjdG9yeShcIkhlcmUgYXJlIGEgZmV3IG90aGVyIHByb2plY3RzIHRoYXQgSSd2ZSBjcmVhdGVkLiBTZWxlY3QgdGhlIG9uZSB0aGF0IHlvdSB3YW50IHRvIHNlZS5cIilcbiAgICBcbiAgICBsZXQganNDb250ZW50ID0gbWFpbkNvbnRlbnRGYWN0b3J5KCk7XG4gICAganNDb250ZW50LmFwcGVuZENoaWxkKHAxKTtcbiAgICBqc0NvbnRlbnQuYXBwZW5kQ2hpbGQocDIpO1xuICAgIGpzQ29udGVudC5hcHBlbmRDaGlsZChwMyk7XG4gICAganNDb250ZW50LmFwcGVuZENoaWxkKHA0KTtcbiAgICBqc0NvbnRlbnQuYXBwZW5kQ2hpbGQocDUpO1xuICAgIGpzQ29udGVudC5hcHBlbmRDaGlsZChPcGVuQXBwQnV0dG9uQ29udGFpbmVyQ3JlYXRvcigpKTtcbiAgICByZXR1cm4ganNDb250ZW50O1xufVxuXG5cbmV4cG9ydCB7IGpzUGFnZUxvYWRlciB9OyIsImltcG9ydCB7IGNvbnRlbnRCb3hGYWN0b3J5LCBwYXJhZ3JhcGhGYWN0b3J5LCBtYWluQ29udGVudEZhY3RvcnkgfSBmcm9tICcuL3dob0lBbS5qcyc7XG5cbmxldCBwaGlsUGFyYTEgPSBwYXJhZ3JhcGhGYWN0b3J5KFwiSSBkaWQgc2l4IHllYXJzIG9mIGdyYWR1YXRlIHdvcmsgaW4gUGhpbG9zb3BoeSBhdCB0aGUgVW5pdmVyc2l0aWVzIG9mIE94Zm9yZCBhbmQgVG9yb250by4gTXkgYXJlYSBvZiBleHBlcnRpc2UgaXMgQW5jaWVudCBHcmVlayBhbmQgUm9tYW4gUGhpbG9zb3BoeSwgYW5kIG15IGlucXVpcmllcyB0eXBpY2FsbHkgc2VlayB0byB1bmRlcnN0YW5kIHdoYXQgYW5jaWVudCBwaGlsb3NvcGhlcnMgdGhvdWdodCB3YXMgdGhlIG9yaWdpbiBhbmQgbmF0dXJlIG9mIG9iamVjdGl2ZSB2YWx1ZXMuXCIpO1xubGV0IHBoaWxQYXJhMiA9IHBhcmFncmFwaEZhY3RvcnkoXCJZb3UgY2FuIGZpbmQgYSBzYW1wbGUgbXkgcmVzZWFyY2ggaGVyZS4gVGhpcyBlc3NheSwgd2hpY2ggSSBwcmVzZW50ZWQgYXQgdGhlIFJhY2toYW0gSW50ZXJkaXNjaXBsaW5hcnkgV29ya3Nob3AgaW4gQW5jaWVudCBQaGlsb3NvcGh5IGF0IHRoZSBVbml2ZXJzaXR5IG9mIE1pY2hpZ2FuLCBkZXNjcmliZXMgdGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIFBsYXRvJ3MgdGhlb3J5IG9mIHZpcnR1ZSwgYW5kIGhpcyBjb25jZXB0aW9uIG9mIGRpdmluZSBsYXcuIFBsYXRvLCBJIGFyZ3VlLCBkZWZlbmRlZCB0aGUgdmlldyB0aGF0IEdvZCdzIGxhdyBnb3Zlcm5zIHZpcnR1b3VzIGNvbmR1Y3QuIEl0J3MgYSBzaW1wbGUgYXJndW1lbnQsIGJ1dCBpdCBjb250cmFkaWN0cyBwcmV2YWlsaW5nIG9ydGhvZG94eSBpbiBzY2hvbGFyc2hpcCBvbiBBbmNpZW50IEdyZWVrIFBoaWxvc29waHksIHdoaWNoIGhvbGRzIHRoYXQgZGl2aW5lIGxhdyB0aGVvcmllcyBvZiBldGhpY3MgZmlyc3Qgb3JpZ2luYXRlIHdpdGggdGhlIFN0b2ljcy4gQnV0IFBsYXRvIHdyaXRlcyBpbiBhbiBlYXJsaWVyIGNlbnR1cnkuXCIpXG5sZXQgcGhpbFBhcmEzID0gcGFyYWdyYXBoRmFjdG9yeShcIk15IG90aGVyIG1haW4gYXJlYSBvZiBpbnRlcmVzdCBpcyB0aGUgaGlzdG9yeSBvZiBwaGlsb3NvcGhpY2FsIHRoZW9yaWVzIG9mIGJlYXV0eS4gSGVyZSBpcyBhIGxpbmsgdG8gYSBwYXBlciB3aGVyZSBJIGludmVzdGlnYXRlIEFydGh1ciBTY2hvcGVuaGF1ZXIncyB1bmRlcnN0YW5kaW5nIG9mIHdoYXQgZXhhY3RseSBodW1hbiBiZWluZ3MgZ3Jhc3Agd2l0aCB0aGVpciBtaW5kcyB3aGVuIHRoZXkgZ3Jhc3AgdGhhdCBzb21ldGhpbmcgaXMgYmVhdXRpZnVsLiBJIGxpa2UgdG8gdGhpbmsgdGhhdCBTY2hvcGVuaGF1ZXIgaXMgY2xvc2UgdG8gdGhlIHRydXRoIGFib3V0IHRoaXMgaXNzdWUuXCIpXG5cblxubGV0IHBoaWxDb250ZW50ID0gbWFpbkNvbnRlbnRGYWN0b3J5KCk7XG5waGlsQ29udGVudC5hcHBlbmRDaGlsZChwaGlsUGFyYTEpO1xucGhpbENvbnRlbnQuYXBwZW5kQ2hpbGQocGhpbFBhcmEyKTtcbnBoaWxDb250ZW50LmFwcGVuZENoaWxkKHBoaWxQYXJhMyk7XG5cbmxldCBwaGlsb3NvcGh5Qm94ID0gY29udGVudEJveEZhY3RvcnkoXCJQaGlsb3NvcGh5XCIsIHBoaWxDb250ZW50KTtcblxuZXhwb3J0IHsgcGhpbG9zb3BoeUJveCB9IiwiaW1wb3J0IHsgcHJvZmlsZUxvYWRlciB9IGZyb20gJy4uL3Byb2ZpbGUuanMnO1xuaW1wb3J0IHsgcGhpbG9zb3BoeUJveCB9IGZyb20gJy4vcGhpbG9zb3BoeS5qcyc7XG4vL2ltcG9ydCB7IGpzQm94IH0gZnJvbSAnLi9tb2R1bGVzL2phdmFzY3JpcHQuanMnO1xuXG5mdW5jdGlvbiBob21lUGFnZUxvYWRlcigpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbkNvbnRhaW5lcicpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZmlsZUxvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQod2hvSUFtKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIG1haW5Db250ZW50KG5vZGUpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIC8vY29udGFpbmVyLmFwcGVuZENoaWxkKGpzQm94KTtcbiAgICAvL2NvbnRhaW5lci5hcHBlbmRDaGlsZChwaGlsb3NvcGh5Qm94KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxubGV0IHdob0lBbVBhcmExID0gcGFyYWdyYXBoRmFjdG9yeShcIkF0IHZlcm8gZW9zIGV0IGFjY3VzYW11cyBldCBpdXN0byBvZGlvIGRpZ25pc3NpbW9zIGR1Y2ltdXMgcXVpIGJsYW5kaXRpaXMgcHJhZXNlbnRpdW0gdm9sdXB0YXR1bSBkZWxlbml0aSBhdHF1ZSBjb3JydXB0aSBxdW9zIGRvbG9yZXMgZXQgcXVhcyBtb2xlc3RpYXMgZXhjZXB0dXJpIHNpbnQgb2NjYWVjYXRpIGN1cGlkaXRhdGUgbm9uIHByb3ZpZGVudCwgc2ltaWxpcXVlIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0aWEgYW5pbWksIGlkIGVzdCBsYWJvcnVtIGV0IGRvbG9ydW0gZnVnYS4gRXQgaGFydW0gcXVpZGVtIHJlcnVtIGZhY2lsaXMgZXN0IGV0IGV4cGVkaXRhIGRpc3RpbmN0aW8uXCIpO1xubGV0IHdob0lBbSA9IGNvbnRlbnRCb3hGYWN0b3J5KFwiV2hvIEkgQW1cIiwgd2hvSUFtUGFyYTEpO1xuXG5cbmZ1bmN0aW9uIGhlYWRlckZhY3RvcnkoaGVhZGVyKSB7XG4gICAgbGV0IGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGguY2xhc3NMaXN0LmFkZCgnY29udGVudEhlYWRlcicpO1xuICAgIGgudGV4dENvbnRlbnQgPSBoZWFkZXI7XG4gICAgcmV0dXJuIGg7XG59XG5mdW5jdGlvbiBwYXJhZ3JhcGhGYWN0b3J5KHBhcmEpIHtcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRQYXJhZ3JhcGgnKTtcbiAgICBwLmlubmVySFRNTCA9IHBhcmE7XG4gICAgcmV0dXJuIHA7XG59XG5mdW5jdGlvbiBtYWluQ29udGVudEZhY3RvcnkoKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdzaXRlQ29udGVudCcpO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBjb250ZW50Qm94RmFjdG9yeShoZWFkZXIsIGNvbnRlbnQpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRCb3gnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyRmFjdG9yeShoZWFkZXIpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgaG9tZVBhZ2VMb2FkZXIsIGNvbnRlbnRCb3hGYWN0b3J5LCBwYXJhZ3JhcGhGYWN0b3J5LCBtYWluQ29udGVudEZhY3RvcnksIG1haW5Db250ZW50LCByZW1vdmVBbGxDaGlsZE5vZGVzIH07IiwiaW1wb3J0IFBob3RvIGZyb20gJy4vdGVtcEltYWdlLmpwZyc7XG5cbmZ1bmN0aW9uIHByb2ZpbGVMb2FkZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2ZpbGUnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZmlsZVBob3RvKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRyb2R1Y3Rpb24oKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIHByb2ZpbGVQaG90bygpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHByb2ZpbGVQaG90byA9IG5ldyBJbWFnZSgpO1xuICAgIHByb2ZpbGVQaG90by5zcmMgPSBQaG90bztcbiAgICBwcm9maWxlUGhvdG8uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9maWxlUGhvdG8nKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9maWxlUGhvdG8pO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiBpbnRyb2R1Y3Rpb24oKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChteU5hbWUoKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKG15RGVzY3JpcHRvcnMoKSk7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIG15TmFtZSgpIHtcbiAgICBsZXQgaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaC50ZXh0Q29udGVudCA9IFwiVGF5bG9yIEJhcmlua2FcIjtcbiAgICBoLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvZmlsZU5hbWUnKTtcbiAgICByZXR1cm4gaDtcbn1cbmZ1bmN0aW9uIG15RGVzY3JpcHRvcnMoKSB7XG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9IFwiUmVzZWFyY2hlciAtIEVkdWNhdG9yIC0gV3JpdGVyIC0gUHJvZ3JhbW1lci5cIlxuICAgIHAuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9maWxlRGVzY3JpcHRpb24nKVxuICAgIHJldHVybiBwO1xufVxuZXhwb3J0IHsgcHJvZmlsZUxvYWRlciB9OyIsImltcG9ydCBwbHVzIGZyb20gJy4vaW1hZ2VzL3BsdXMucG5nJztcbmltcG9ydCBjaGVja2xpc3QgZnJvbSAnLi9pbWFnZXMvY2xpcGJvYXJkLWNoZWNrLW11bHRpcGxlLW91dGxpbmUucG5nJztcbmltcG9ydCBtZGlUcmFzaENhbk91dGxpbmUgZnJvbSAnLi9pbWFnZXMvbWRpVHJhc2hDYW5PdXRsaW5lLnBuZyc7XG5cbmZ1bmN0aW9uIHBlcnNvbmFsU2l0ZVBhZ2VMb2FkZXIoKSB7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhkb2N1bWVudC5ib2R5KTtcbiAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnaWQnLCAnYm9keScpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZEhlYWRlcmZvclBlcnNvbmFsV2Vic2l0ZSgpKTtcblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZFNpZGViYXJET00oKSk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIG1haW5ET01Mb2FkQWxsKCk7XG59XG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuXG4vL2hlYWRlciBmdW5jdGlvbnNcblxuZnVuY3Rpb24gbG9hZEhlYWRlcmZvclBlcnNvbmFsV2Vic2l0ZSgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyQ29udGFpbmVyJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxlZnRIZWFkZXJDb250ZW50KCkpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyaWdodEhlYWRlckNvbnRlbnQoKSk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gbGVmdEhlYWRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnRIZWFkZXJDb250ZW50Jyk7XG4gICAgY29uc3QgaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaC5jbGFzc0xpc3QuYWRkKFwidG9Eb1wiKVxuICAgICAgICBoLnRleHRDb250ZW50ID0gXCJUb0RvXCJcbiAgICBsZWZ0LmFwcGVuZENoaWxkKGhlYWRlckljb24oKSlcbiAgICBsZWZ0LmFwcGVuZENoaWxkKGgpO1xuICAgIHJldHVybiBsZWZ0XG59XG5mdW5jdGlvbiBoZWFkZXJJY29uKCkge1xuICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBpY29uLnNyYyA9IGNoZWNrbGlzdDtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckljb24nKTtcbiAgICByZXR1cm4gaWNvbjtcbn1cbmZ1bmN0aW9uIHJpZ2h0SGVhZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0LmFwcGVuZENoaWxkKHJlbW92ZUFwcEJ0bigpKTtcbiAgICByZXR1cm4gcmlnaHQ7XG59XG5mdW5jdGlvbiByZW1vdmVBcHBCdG4oKSB7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlbW92ZU9yZ25pemVyQnRuJyk7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlQXBwKVxuICAgIHJldHVybiBidG47XG59XG5mdW5jdGlvbiByZW1vdmVBcHAoKSB7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xuICAgIGJvZHkucmVtb3ZlKCk7XG59XG5cbi8vc2lkZWJhciBmdW5jdGlvbnNcbmZ1bmN0aW9uIGxvYWRTaWRlYmFyRE9NKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQnV0dG9uKCkpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoY3JlYXRlQWxsKCkpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kYXkoKSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVUaGlzV2VlaygpKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJJdGVtSW50ZWdyYXRlcihcIkxpc3RzXCIsIFwieVwiKSk7XG4gICAgcmV0dXJuIHNpZGViYXI7XG59XG5cbiAgICAvL1RoZXNlIGZ1bmN0aW9ucyBhZGQgY3JlYXRlIGluZGl2aWR1YWwgc2lkZWJhciBpdGVtcyB3aXRoIGV2ZW50IGxpc3RlbmVyc1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUFsbCgpIHtcbiAgICAgICAgY29uc3QgYWxsID0gc2lkZWJhckl0ZW1JbnRlZ3JhdGVyKFwiQWxsXCIpO1xuICAgICAgICBhbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtYWluRE9NTG9hZEFsbCgpKTtcbiAgICAgICAgYWxsLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxsJyk7XG4gICAgICAgIHJldHVybiBhbGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZGF5KCkge1xuICAgICAgICBjb25zdCB0b2RheSA9IHNpZGViYXJJdGVtSW50ZWdyYXRlcihcIlRvZGF5XCIpXG4gICAgICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWFpbkRPTUxvYWRUb2RheSgpKTtcbiAgICAgICAgdG9kYXkuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RheScpO1xuICAgICAgICByZXR1cm4gdG9kYXlcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlVGhpc1dlZWsoKSB7XG4gICAgICAgIGNvbnN0IHRoaXNXZWVrID0gc2lkZWJhckl0ZW1JbnRlZ3JhdGVyKFwiVGhpcyBXZWVrXCIpXG4gICAgICAgIHRoaXNXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWFpbkRPTUxvYWRUaGlzV2VlaygpKTtcbiAgICAgICAgdGhpc1dlZWsuc2V0QXR0cmlidXRlKCdpZCcsICd0aGlzV2VlaycpO1xuICAgICAgICByZXR1cm4gdGhpc1dlZWtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJBZGRUYXNrQnV0dG9uJylcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnY3JlYXRlVGFzaycpO1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCIrIENyZWF0ZSBhIFRhc2tcIlxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlVGFza0RPTUxvYWQoKSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cblxuZnVuY3Rpb24gc2lkZWJhckl0ZW1JbnRlZ3JhdGVyKHRpdGxlLCB0b2dnbGVSaWdodENvbXBvbmVudCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmICh0b2dnbGVSaWdodENvbXBvbmVudCA9PSBcInlcIikge1xuICAgICAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRvcC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFySW50ZWdyYXRlZEl0ZW0nKTtcbiAgICAgICAgdG9wLmFwcGVuZENoaWxkKGxlZnRTaWRlYmFyQ29tcG9uZW50KHRpdGxlKSk7XG4gICAgICAgIHRvcC5hcHBlbmRDaGlsZChyaWdodFNpZGViYXJBZGRJdGVtKCkpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodG9wKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpc3RzQ29udGVudCgpKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdzaWRlYmFySW50ZWdyYXRlZEl0ZW0yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxlZnRTaWRlYmFyQ29tcG9uZW50KHRpdGxlKSk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckludGVncmF0ZWRJdGVtJyk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnU2lkZUJhckl0ZW1SaWdodENvbXBvbmVudCcpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfSBcbiAgICByZXR1cm4gZGl2O1xufVxuXG5cbmZ1bmN0aW9uIGxlZnRTaWRlYmFyQ29tcG9uZW50KHRpdGxlKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ1NpZGVCYXJJdGVtTGVmdENvbXBvbmVudCcpO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChoZWFkZXIodGl0bGUpKTtcbiAgICByZXR1cm4gaXRlbTtcbn07XG5cbiAgICBmdW5jdGlvbiBoZWFkZXIodGl0bGUpIHtcbiAgICAgICAgY29uc3Qgc2lkZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgc2lkZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdzaWRlQmFySGVhZGVyJyk7XG4gICAgICAgIHNpZGVIZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgcmV0dXJuIHNpZGVIZWFkZXI7XG4gICAgfTtcblxuZnVuY3Rpb24gcmlnaHRTaWRlYmFyQWRkSXRlbSgpIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnc2lkZUJhckl0ZW1SaWdodENvbXBvbmVudCcpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKCkpO1xuICAgIHJldHVybiBpdGVtO1xufVxuICAgIGZ1bmN0aW9uIGFkZEJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2lkZUJhclJpZ2h0Q29tcG9uZW50QnV0dG9uQ29udGFpbmVyJylcbiAgICAgICAgY29uc3QgYWRkQnRuID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBhZGRCdG4uc3JjID0gcGx1cztcbiAgICAgICAgICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdzaWRlQmFyUmlnaHRDb21wb25lbnRCdXR0b24nKVxuICAgICAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWRkTGlzdENhcmRET01Mb2FkKFwiQ2FuY2VsXCIsIFwiQ3JlYXRlXCIpKTtcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGFkZEJ0bik7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgICAgIH1cblxuXG5mdW5jdGlvbiBsaXN0c0NvbnRlbnQoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibGlzdENvbnRhaW5lclwiKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG4vL21haW5ET01mdW5jdGlvbnNcblxuZnVuY3Rpb24gbWFpbkRPTUxvYWRMaXN0KGxpc3RUaXRsZSkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW5Db250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbkNvbnRhaW5lcicpO1xuICAgIFxuICAgIGNvbnRlbnQubGFzdENoaWxkLnJlbW92ZSgpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluSW50ZWdyYXRvckxpc3RMb2FkZXIobGlzdFRpdGxlKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgbGV0IGxpc3RzID0gY29udGVudC5maXJzdENoaWxkLm5leHRTaWJsaW5nLmxhc3RDaGlsZC5sYXN0Q2hpbGQ7XG4gICAgbGlzdHMuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICBsaXN0cy5hcHBlbmRDaGlsZChsb2FkRE9NU2lkZWJhckxpc3RzKCkpO1xuICAgIGNoZWNrU2VsZWN0ZWRMaXN0SXRlbXMoKTtcbiAgICB1bnNlbGVjdFRvcDNTaWRlYmFySXRlbXMoKTtcbn1cblxuICAgIGZ1bmN0aW9uIGNoZWNrU2VsZWN0ZWRMaXN0SXRlbXMoKSB7XG4gICAgICAgIGNvbnN0IG5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXJMaXN0SXRlbUNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBzZWNvbmROb2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NpZGViYXJMaXN0SXRlbUNvbnRhaW5lclNlbGVjdGVkJyk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY29uZE5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IG5vZGVMaXN0W2ldO1xuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRhaW5lcicpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyTGlzdEl0ZW1Db250YWluZXJTZWxlY3RlZCcpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyTGlzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gbm9kZUxpc3RbaV07XG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJyk7XG4gICAgICAgICAgICBpZiAoaXRlbS5maXJzdENoaWxkLnRleHRDb250ZW50ID09IG1haW5Db250YWluZXIuZmlyc3RDaGlsZC5maXJzdENoaWxkLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyTGlzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJMaXN0SXRlbUNvbnRhaW5lclNlbGVjdGVkJyk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyTGlzdEl0ZW1Db250YWluZXJTZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnc2lkZWJhckxpc3RJdGVtQ29udGFpbmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICB9XG4gICAgZnVuY3Rpb24gdW5zZWxlY3RUb3AzU2lkZWJhckl0ZW1zKCkge1xuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGFsbCA9IGNvbnRlbnQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5maXJzdENoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICBjb25zdCB0b2RheSA9IGNvbnRlbnQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5maXJzdENoaWxkLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgICBjb25zdCB0aGlzV2VlayA9IGNvbnRlbnQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5maXJzdENoaWxkLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgICBpZiAoYWxsLmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhckl0ZW1TZWxlY3RlZCcpKSB7YWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXJJdGVtU2VsZWN0ZWQnKSAmJiBhbGwuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckludGVncmF0ZWRJdGVtJyl9XG4gICAgICAgIGlmICh0b2RheS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXJJdGVtU2VsZWN0ZWQnKSkge3RvZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXJJdGVtU2VsZWN0ZWQnKSAmJiB0b2RheS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFySW50ZWdyYXRlZEl0ZW0nKX1cbiAgICAgICAgaWYgKHRoaXNXZWVrLmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhckl0ZW1TZWxlY3RlZCcpKSB7dGhpc1dlZWsuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhckl0ZW1TZWxlY3RlZCcpICYmIHRoaXNXZWVrLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJJbnRlZ3JhdGVkSXRlbScpfVxuXG4gICAgfVxuXG5cbmZ1bmN0aW9uIG1haW5JbnRlZ3JhdG9yTGlzdExvYWRlcih0aXRsZSkge1xuICAgIGNvbnN0IGludGVncmF0ZWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGludGVncmF0ZWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2ludGVncmF0ZWRJdGVtJyk7XG4gICAgXG4gICAgaW50ZWdyYXRlZEl0ZW0uYXBwZW5kQ2hpbGQodGl0bGVMb2FkZXIodGl0bGUpKTtcbiAgICBpbnRlZ3JhdGVkSXRlbS5hcHBlbmRDaGlsZChsb2FkTGlzdCh0aXRsZSkpO1xuICAgIHJldHVybiBpbnRlZ3JhdGVkSXRlbTtcbn1cblxuZnVuY3Rpb24gbG9hZExpc3QobGlzdFRpdGxlKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0Q29udGVudENvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYXJyYXkgPSBmaWx0ZXJUYXNrc3RvTGlzdChsaXN0VGl0bGUpO1xuICAgIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5kYXRlKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtSW50ZWdyYXRvcihlbGVtZW50LnRpdGxlLCBlbGVtZW50LmRhdGUpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4gICAgLy9BbGwgVGFza3MgTG9hZGVyIFN1aXRlXG5cbmZ1bmN0aW9uIG1haW5ET01Mb2FkQWxsKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50Lmxhc3RDaGlsZC5yZW1vdmUoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbkNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluSW50ZWdyYXRvckFsbExvYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBhbGwgPSBjb250ZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5uZXh0U2libGluZztcbiAgICBjb25zdCB0b2RheSA9IGNvbnRlbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgIGNvbnN0IHRoaXNXZWVrID0gY29udGVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgYWxsLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJJdGVtU2VsZWN0ZWQnKVxuICAgIGlmICh0b2RheS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXJJdGVtU2VsZWN0ZWQnKSkge3RvZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXJJdGVtU2VsZWN0ZWQnKSAmJiB0b2RheS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFySW50ZWdyYXRlZEl0ZW0nKX1cbiAgICBpZiAodGhpc1dlZWsuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFySXRlbVNlbGVjdGVkJykpIHt0aGlzV2Vlay5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFySXRlbVNlbGVjdGVkJykgJiYgdGhpc1dlZWsuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckludGVncmF0ZWRJdGVtJyl9XG5cbiAgICBsZXQgbGlzdHMgPSBjb250ZW50LmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcubGFzdENoaWxkLmxhc3RDaGlsZDtcbiAgICBpZiAobGlzdHMuaGFzQ2hpbGROb2RlcygpID09IHRydWUpIHtcbiAgICAgICAgbGlzdHMuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgbGlzdHMuYXBwZW5kQ2hpbGQobG9hZERPTVNpZGViYXJMaXN0cygpKTtcbiAgICBjaGVja1NlbGVjdGVkTGlzdEl0ZW1zKCk7XG59XG5cbmZ1bmN0aW9uIG1haW5JbnRlZ3JhdG9yQWxsTG9hZGVyKCkge1xuICAgIGNvbnN0IGludGVncmF0ZWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGludGVncmF0ZWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2ludGVncmF0ZWRJdGVtJyk7XG4gICAgXG4gICAgaW50ZWdyYXRlZEl0ZW0uYXBwZW5kQ2hpbGQodGl0bGVMb2FkZXIoXCJBbGwgVGFza3NcIikpO1xuICAgIGludGVncmF0ZWRJdGVtLmFwcGVuZENoaWxkKGxvYWRBbGxUYXNrcygpKTtcbiAgICByZXR1cm4gaW50ZWdyYXRlZEl0ZW07XG59XG5cblxuZnVuY3Rpb24gbG9hZEFsbFRhc2tzKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlzdENvbnRlbnRDb250YWluZXInKTtcbiAgICBjb25zdCBhcnJheSA9IHNvcnRUYXNrc1RvQWxsKCk7XG5cbiAgICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbUludGVncmF0b3IoZWxlbWVudC50aXRsZSwgZWxlbWVudC5kYXRlKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuICAgIC8vVG9kYXkgTG9hZGVyIFN1aXRlXG5cbmZ1bmN0aW9uIG1haW5ET01Mb2FkVG9kYXkoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW5Db250YWluZXInKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5JbnRlZ3JhdG9yVG9kYXlMb2FkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5cbiAgICB0b2RheS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFySXRlbVNlbGVjdGVkJylcbiAgICBpZiAoYWxsLmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhckl0ZW1TZWxlY3RlZCcpKSB7YWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXJJdGVtU2VsZWN0ZWQnKSAmJiBhbGwuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckludGVncmF0ZWRJdGVtJyl9XG4gICAgaWYgKHRoaXNXZWVrLmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhckl0ZW1TZWxlY3RlZCcpKSB7dGhpc1dlZWsuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhckl0ZW1TZWxlY3RlZCcpICYmIHRoaXNXZWVrLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJJbnRlZ3JhdGVkSXRlbScpfVxuICAgIFxuICAgIFxuICAgIGxldCBsaXN0cyA9IGNvbnRlbnQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5sYXN0Q2hpbGQubGFzdENoaWxkO1xuICAgIGxpc3RzLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgbGlzdHMuYXBwZW5kQ2hpbGQobG9hZERPTVNpZGViYXJMaXN0cygpKTtcbiAgICBjaGVja1NlbGVjdGVkTGlzdEl0ZW1zKCk7XG59XG5cbmZ1bmN0aW9uIG1haW5JbnRlZ3JhdG9yVG9kYXlMb2FkZXIoKSB7XG4gICAgY29uc3QgaW50ZWdyYXRlZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW50ZWdyYXRlZEl0ZW0uY2xhc3NMaXN0LmFkZCgnaW50ZWdyYXRlZEl0ZW0nKTtcblxuICAgIGludGVncmF0ZWRJdGVtLmFwcGVuZENoaWxkKHRpdGxlTG9hZGVyKFwiVG9kYXlcIikpO1xuICAgIGludGVncmF0ZWRJdGVtLmFwcGVuZENoaWxkKGxvYWRUb2RheVRhc2tzKCkpO1xuICAgIHJldHVybiBpbnRlZ3JhdGVkSXRlbTtcbn07XG5cbmZ1bmN0aW9uIGxvYWRUb2RheVRhc2tzKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0Q29udGVudENvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBhcnJheSA9IGZpbHRlclRvZGF5VGFza3MoKTtcbiAgICAgICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtSW50ZWdyYXRvcihlbGVtZW50LnRpdGxlLCBlbGVtZW50LmRhdGUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG59O1xuXG4gICAgLy9UaGlzIFdlZWsgU3VpdGVcblxuZnVuY3Rpb24gbWFpbkRPTUxvYWRUaGlzV2VlaygpIHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluQ29udGFpbmVyJyk7XG4gICAgY29udGVudC5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5JbnRlZ3JhdG9yVGhpc1dlZWsoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgdGhpc1dlZWsuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckl0ZW1TZWxlY3RlZCcpXG4gICAgaWYgKGFsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXJJdGVtU2VsZWN0ZWQnKSkge2FsbC5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFySXRlbVNlbGVjdGVkJykgJiYgYWxsLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJJbnRlZ3JhdGVkSXRlbScpfVxuICAgIGlmICh0b2RheS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXJJdGVtU2VsZWN0ZWQnKSkge3RvZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXJJdGVtU2VsZWN0ZWQnKSAmJiB0b2RheS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFySW50ZWdyYXRlZEl0ZW0nKX1cbiAgICBcbiAgICBsZXQgbGlzdHMgPSBjb250ZW50LmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcubGFzdENoaWxkLmxhc3RDaGlsZDtcbiAgICBsaXN0cy5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIGxpc3RzLmFwcGVuZENoaWxkKGxvYWRET01TaWRlYmFyTGlzdHMoKSk7XG4gICAgY2hlY2tTZWxlY3RlZExpc3RJdGVtcygpO1xufVxuXG5mdW5jdGlvbiBtYWluSW50ZWdyYXRvclRoaXNXZWVrKCkge1xuICAgIGNvbnN0IGludGVncmF0ZWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGludGVncmF0ZWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2ludGVncmF0ZWRJdGVtJyk7XG4gICAgXG4gICAgaW50ZWdyYXRlZEl0ZW0uYXBwZW5kQ2hpbGQodGl0bGVMb2FkZXIoXCJUaGlzIFdlZWtcIikpO1xuICAgIGludGVncmF0ZWRJdGVtLmFwcGVuZENoaWxkKGxvYWRUaGlzV2Vla1Rhc2tzKCkpO1xuICAgIHJldHVybiBpbnRlZ3JhdGVkSXRlbTtcbiAgICB9O1xuXG5mdW5jdGlvbiBsb2FkVGhpc1dlZWtUYXNrcygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3RDb250ZW50Q29udGFpbmVyJyk7XG4gICAgY29uc3QgYXJyYXkgPSBmaWx0ZXJUaGlzV2Vla1Rhc2tzKCk7XG4gICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW1JbnRlZ3JhdG9yKGVsZW1lbnQudGl0bGUsIGVsZW1lbnQuZGF0ZSkpO1xufSk7XG5yZXR1cm4gY29udGFpbmVyO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHJlcGVhdGVkIGluIGVhY2ggb2YgdGhlIGxvYWRlciBzdWl0ZXMgYWJvdmVcblxuZnVuY3Rpb24gdGl0bGVMb2FkZXIodGl0bGUpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlQ29udGFpbmVyJyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlSGVhZGVyJylcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuLy90aGlzIGZ1bmN0aW9uIGludGVncmF0ZXMgaWNvbiAmIHRpdGxlIHVuZGVyIGEgc2luZ2xlIGxpc3QgdW5pdFxuZnVuY3Rpb24gbGlzdEl0ZW1JbnRlZ3JhdG9yKGl0ZW1UaXRsZSwgaXRlbURhdGUpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3RJdGVtQ29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKGl0ZW1UaXRsZSkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SWNvbnMoaXRlbURhdGUpKTtcbiAgICAgICAgY29udGFpbmVyLmxhc3RDaGlsZC5maXJzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gY29udGFpbmVyLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHVzZXJUYXNrcy5mb3JFYWNoKHRhc2sgPT4gIHtcbiAgICAgICAgICAgICAgICBpZiAodGFza1RpdGxlID09IHRhc2sudGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlclRhc2tzLnNwbGljZSh1c2VyVGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiBsaXN0SXRlbShpdGVtVGl0bGUpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xlZnRMaXN0SXRlbScpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgLy9sYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpdGVtVGl0bGU7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gbGlzdEljb25zKGl0ZW1EYXRlKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2xpc3RJdGVtSWNvbkNvbnRhaW5lcicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpdGVtRGF0ZVByb2R1Y2VyKGl0ZW1EYXRlKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRyYXNoQ2FuKCkpO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBpdGVtRGF0ZVByb2R1Y2VyKGl0ZW1EYXRlKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsaXN0SXRlbURhdGUnKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBpdGVtRGF0ZTtcbiAgICByZXR1cm4gZGl2O1xufVxuICAgIGZ1bmN0aW9uIHRyYXNoQ2FuKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgdHJhc2ggPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHRyYXNoLnNyYyA9IG1kaVRyYXNoQ2FuT3V0bGluZTtcbiAgICAgICAgICAgIHRyYXNoLmNsYXNzTGlzdC5hZGQoJ2xpc3RJdGVtSWNvbkJ1dHRvbicpO1xuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQodHJhc2gpO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlbmNpbCgpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHBlbmNpbCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgcGVuY2lsLnNyYyA9IG1kaVBlbmNpbE91dGxpbmU7XG4gICAgICAgICAgICBwZW5jaWwuY2xhc3NMaXN0LmFkZCgnbGlzdEl0ZW1JY29uQnV0dG9uJyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwZW5jaWwpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbmZvKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgaW5mbyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW5mby5zcmMgPSBtZGlJbmZvcm1hdGlvbk91dGxpbmU7XG4gICAgICAgICAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2xpc3RJdGVtSWNvbkJ1dHRvbicpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgICAgIHJldHVybiBkaXZcbiAgICB9XG5cbi8vdGhpcyBmdW5jdGlvbiByZWZyZXNoZXMgdGhlIG1haW4gcGFnZSB3aGVuZXZlciB5b3UgYWRkIGEgbmV3IHRhc2ssIHRvIG1ha2UgdGhlIG5ldyB0YXNrIGFwcGVhclxuZnVuY3Rpb24gcmVmcmVzaFBhZ2UoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgbWFpblRpdGxlID0gY29udGVudC5maXJzdENoaWxkLm5leHRTaWJsaW5nLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5maXJzdENoaWxkLnRleHRDb250ZW50O1xuXG4gICAgaWYgKG1haW5UaXRsZSA9PSBcIkFsbCBUYXNrc1wiKSB7IG1haW5ET01Mb2FkQWxsKCkgfVxuICAgIGVsc2UgaWYgKG1haW5UaXRsZSA9PSBcIlRvZGF5XCIpIHsgbWFpbkRPTUxvYWRUb2RheSgpIH1cbiAgICBlbHNlIGlmIChtYWluVGl0bGUgPT0gXCJUaGlzIFdlZWtcIikgeyBtYWluRE9NTG9hZFRoaXNXZWVrKCkgfVxuICAgIGVsc2Uge1xuICAgICAgICBtYWluRE9NTG9hZExpc3QobWFpblRpdGxlKVxuICAgIH1cbn1cblxuXG4vL2NyZWF0ZVRhc2tET00gZnJvbSBjcmVhdGVUYXNrRE9NLmpzXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tET01Mb2FkKCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCduZXdUYXNrQ2FyZCcpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGFza0luZm8oKSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uSW50ZWdyYXRvcignQ2FuY2VsJywgJ0FkZCBUYXNrJykpO1xuICAgICAgICAvL2NhbmNlbCBidXR0b24gZXZlbnQgbGlzdGVuZXIgLS0+IHJlbW92ZXMgY2FyZCBmcm9tIERPTVxuICAgICAgICBjYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjYXJkLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2FyZC5sYXN0Q2hpbGQuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbmNlbFRhc2tcIilcbiAgICAgICAgLy9ldmVudCBsaXN0ZW5lciBvbiBjcmVhdGUgYnV0dG9uXG4gICAgY2FyZC5sYXN0Q2hpbGQubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpO1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICAgICAgaWYgKHRpdGxlLnZhbHVlID09IFwiXCIpIHsgcmV0dXJuIH1cbiAgICAgICAgLy90aGlzIGlmL2Vsc2UgY29uc3RydWN0aW9uIGlzIGEgYmFuZGFpZCBmb3IgYSBidWcgdGhhdCBJIGNhbid0IGZpZ3VyZSBvdXQuXG4gICAgICAgIC8vdGhlIGJ1ZyBpcyB0aGlzOiB0aGUgb3JnYW5pemVyIHdvbid0IGxvYWQgYSB0YXNrIG9uIHRoZSBET00gaWYgdXNlclRhc2tzIGhhcyBvbmx5IG9uZSBlbGVtZW50XG4gICAgICAgIC8vYnV0IG9uY2UgdGhlcmUgYXJlIHR3byBlbGVtZW50cywgaXQgd2lsbCBza2lwIHRoZSBmaXJzdCBhbmQgc3RhcnQgd2l0aCB0aGUgc2Vjb25kXG4gICAgICAgIC8vc28gbXkgZml4IGlzOiBwdXNoIHRoZSBmaXJzdCB0YXNrIHR3aWNlXG4gICAgICAgIGlmICh1c2VyVGFza3MubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcHVzaFRhc2tUb0FycmF5KHRpdGxlLnZhbHVlLCBkYXRlLnZhbHVlLCBsaXN0LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyVGFza3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHB1c2hUYXNrVG9BcnJheSh0aXRsZS52YWx1ZSwgZGF0ZS52YWx1ZSwgbGlzdC52YWx1ZSk7XG4gICAgICAgICAgICBwdXNoVGFza1RvQXJyYXkodGl0bGUudmFsdWUsIGRhdGUudmFsdWUsIGxpc3QudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICAgIHJlZnJlc2hQYWdlKCk7XG4gICAgfSk7XG4gICAgY2FyZC5sYXN0Q2hpbGQubGFzdENoaWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkVGFza1wiKVxuXG4gICAgaWYgKGRvY3VtZW50LmJvZHkubmV4dFNpYmxpbmcgIT09IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5uZXh0U2libGluZy5yZW1vdmUoKTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmJvZHkuYWZ0ZXIoY2FyZCk7XG59O1xuXG5mdW5jdGlvbiB0YXNrSW5mbygpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tDYXJkVGV4dEJvcmRlcicpO1xuICAgIGNvbnN0IGZpcnN0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZpcnN0Um93LmNsYXNzTGlzdC5hZGQoJ3Rhc2tJbmZvRmlyc3RSb3cnKTtcbiAgICAgICAgZmlyc3RSb3cuYXBwZW5kQ2hpbGQodGFza1RpdGxlKCkpO1xuICAgICAgICBmaXJzdFJvdy5hcHBlbmRDaGlsZCh0YXNrRGF0ZSgpKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZmlyc3RSb3cpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdCgpKTtcbiAgICByZXR1cm4gZGl2O1xufTtcblxuICAgIGZ1bmN0aW9uIHRhc2tUaXRsZSgpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFza0luZm9JdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmRJbnB1dFRleHQnKTtcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2s6IFwiO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRhc2tMaXN0KCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrSW5mb0l0ZW1Db250YWluZXInKTtcbiAgICAgICAgY29uc3QgbGlzdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxpc3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjYXJkSW5wdXRcIik7XG4gICAgICAgICAgICBsaXN0TGFiZWwudGV4dENvbnRlbnQgPSBcIkxpc3Q6IFwiO1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2NhcmRJbnB1dFRleHQnKTtcbiAgICAgICAgICAgIGxpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0XCIpO1xuICAgICAgICB1c2VyTGlzdHMuZm9yRWFjaCh1c2VyTGlzdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gdXNlckxpc3QubmFtZTtcbiAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH0pXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0TGFiZWwpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRhc2tEYXRlKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrSW5mb0l0ZW1Db250YWluZXInKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2NhcmRJbnB1dFRleHQnKTtcbiAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZVwiKTtcbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkYXRlXCIpO1xuICAgICAgICAgICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlOiBcIjtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbmZ1bmN0aW9uIHRhc2tCdXR0b25JbnRlZ3JhdG9yKHMxLCBzMikge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2FyZEJ1dHRvbkludGVncmF0b3InKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2FyZEJ1dHRvbihzMSkpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjYXJkQnV0dG9uKHMyKSk7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjYXJkQnV0dG9uKHMpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDYXJkQnV0dG9uJyk7XG4gICAgY29uc3QgYnV0dG9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25UZXh0LnRleHRDb250ZW50ID0gcztcbiAgICAgICAgYnV0dG9uVGV4dC5jbGFzc0xpc3QuYWRkKCd0YXNrQnV0dG9uVGV4dCcpXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvblRleHQpO1xuICAgIHJldHVybiBidXR0b247XG59XG5cbi8vY3JlYXRlTGlzdERPTVxuXG5cbmZ1bmN0aW9uIGFkZExpc3RDYXJkRE9NTG9hZChzMSwgczIpIHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ25ld0xpc3RDYXJkJyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSW5wdXQoKSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25JbnRlZ3JhdG9yKHMxLCBzMikpO1xuICAgIC8vZXZlbnQgbGlzdGVuZXI6IHB1c2hlcyB1c2VyIHRleHQgaW50byB1c2VyTGlzdHMgYXJyYXkgd2hlbiBjbGljayAnY3JlYXRlJztcbiAgICBjYXJkLmxhc3RDaGlsZC5sYXN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBjYXJkLmZpcnN0Q2hpbGQubGFzdENoaWxkLnZhbHVlO1xuICAgICAgICBpZiAobmFtZSA9PSBcIlwiKSB7IHJldHVybiB9XG4gICAgICAgIHB1c2hUb1VzZXJMaXN0cyhuYW1lKTtcbiAgICAgICAgbGV0IGxpc3RzID0gY29udGVudC5maXJzdENoaWxkLm5leHRTaWJsaW5nLmxhc3RDaGlsZC5sYXN0Q2hpbGQ7XG4gICAgICAgIGxpc3RzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgbGlzdHMuYXBwZW5kQ2hpbGQobG9hZERPTVNpZGViYXJMaXN0cygpKTtcbiAgICAgICAgY2FyZC5yZW1vdmUoKTtcbiAgICAgICAgY2hlY2tTZWxlY3RlZExpc3RJdGVtcygpO1xuICAgICAgICBcbiAgICB9KTtcbiAgICAvL2NhbmNlbCBidXR0b24gZXZlbnQgbGlzdGVuZXIgLS0+IHJlbW92ZXMgY2FyZCBmcm9tIERPTVxuICAgIGNhcmQubGFzdENoaWxkLmZpcnN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBjYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkO1xuICAgICAgICBjYXJkLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIFxuICAgIGlmIChkb2N1bWVudC5ib2R5Lm5leHRTaWJsaW5nICE9PSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkubmV4dFNpYmxpbmcucmVtb3ZlKCk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5ib2R5LmFmdGVyKGNhcmQpO1xufVxuXG5mdW5jdGlvbiBsb2FkRE9NU2lkZWJhckxpc3RzKCkge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHVzZXJMaXN0cy5mb3JFYWNoKCh1c2VyTGlzdCkgPT4ge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckxpc3RJdGVtQ29udGFpbmVyJylcbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IHVzZXJMaXN0Lm5hbWU7XG4gICAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtYWluRE9NTG9hZExpc3QocC50ZXh0Q29udGVudClcbiAgICAgICAgfSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpc3RJY29uKCkpO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSlcblxuICAgIHJldHVybiBpdGVtO1xufVxuZnVuY3Rpb24gbGlzdEljb24oKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2lkZWJhckxpc3RJY29uQnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgZGVsZXRlTGlzdCgpO1xuICAgICAgICB9KVxuICAgIGxldCB0cmFzaEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdHJhc2hJY29uLnNyYyA9IG1kaVRyYXNoQ2FuT3V0bGluZTtcbiAgICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJMaXN0SWNvbicpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0cmFzaEljb24pO1xuICAgIHJldHVybiBidXR0b247XG5cbiAgICBmdW5jdGlvbiBkZWxldGVMaXN0KCkge1xuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IGJ1dHRvbi5wYXJlbnROb2RlLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgdXNlckxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBpZiAobGlzdC5uYW1lID09IGxpc3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgdXNlckxpc3RzLnNwbGljZSh1c2VyTGlzdHMuaW5kZXhPZihsaXN0KSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGNhcmRJbnB1dCgpIHtcbiAgICBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IFxuICAgICAgICBsaXN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsaXN0TmFtZVwiKTtcbiAgICAgICAgbGlzdE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0TmFtZUxhYmVsXCIpXG4gICAgICAgIGxpc3ROYW1lLnRleHRDb250ZW50ID0gXCJOYW1lIFlvdXIgTGlzdDogXCJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmRUZXh0Qm9yZGVyJyk7XG4gICAgY29uc3QgaW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ2NhcmRJbnB1dFRleHQnKTtcbiAgICAgICAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdE5hbWVcIik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxpc3ROYW1lKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXRUZXh0KTtcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGJ1dHRvbkludGVncmF0b3IoczEsIHMyKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjYXJkQnV0dG9uSW50ZWdyYXRvcicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0Q2FyZEJ1dHRvbihzMSkpO1xuICAgICAgICBkaXYuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3RDYW5jZWxcIik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxpc3RDYXJkQnV0dG9uKHMyKSk7XG4gICAgICAgIGRpdi5sYXN0Q2hpbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0QWRkXCIpXG5cbiAgICByZXR1cm4gZGl2O1xufVxuZnVuY3Rpb24gbGlzdENhcmRCdXR0b24ocykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3TGlzdENhcmRCdXR0b24nKTtcbiAgICBjb25zdCBidXR0b25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvblRleHQudGV4dENvbnRlbnQgPSBzO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25UZXh0KTtcbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG4vL2NyZWF0ZVRhc2tBcHBcbmxldCB1c2VyVGFza3MgPSBbXTtcblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRhdGUsIGxpc3QsIGRlc2NyaXB0aW9uLCB0aW1lKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICB9IFxuXG59XG5mdW5jdGlvbiBwdXNoVGFza1RvQXJyYXkodGl0bGUsIGRhdGUsIGxpc3QpIHtcbiAgICBsZXQgdCA9IG5ldyBUYXNrKHRpdGxlLCBkYXRlLCBsaXN0KTtcbiAgICB1c2VyVGFza3MucHVzaCh0KTtcbn1cbmZ1bmN0aW9uIGZpbHRlclRhc2tzdG9MaXN0KGxpc3RUaXRsZSkge1xuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBbXTtcbiAgICBsZXQgZmlsdGVyZWRUYXNrcyA9IHVzZXJUYXNrcy5maWx0ZXIoZnVuY3Rpb24odGFzaykge1xuICAgICAgICBpZiAodGFzay5saXN0ID09IGxpc3RUaXRsZSkgZmlsdGVyZWRMaXN0LnB1c2godGFzayk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkTGlzdDtcbn1cbmZ1bmN0aW9uIHNvcnRUYXNrc1RvQWxsKCkge1xuICAgIGNvbnN0IHNvcnRlZFRhc2tzID0gdXNlclRhc2tzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICB2YXIga2V5QSA9IG5ldyBEYXRlKGEuZGF0ZSksXG4gICAgICAgICAgICBrZXlCID0gbmV3IERhdGUoYi5kYXRlKTtcbiAgICAgICAgaWYgKGtleUEgPCBrZXlCKSByZXR1cm4gLTE7XG4gICAgICAgIGlmIChrZXlBID4ga2V5QikgcmV0dXJuIDE7XG4gICAgICAgIHJldHVybiAwXG4gICAgfSlcbiAgICByZXR1cm4gc29ydGVkVGFza3M7XG59XG5mdW5jdGlvbiBmaWx0ZXJUb2RheVRhc2tzKCkge1xuICAgIHZhciB0b2RheSA9IGZvcm1hdChuZXcgRGF0ZSgpLCAnWVlZLU1NLWRkJykudG9TdHJpbmcoKTtcbiAgICBjb25zdCBmaWx0ZXJlZFRhc2tzID0gdXNlclRhc2tzLmZpbHRlcihmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgIGlmICh0b2RheS5pbmNsdWRlcyh0YXNrLmRhdGUpKSByZXR1cm4gdGFzaztcbiAgICB9KVxuICAgIHJldHVybiBmaWx0ZXJlZFRhc2tzO1xufVxuZnVuY3Rpb24gZmlsdGVyVGhpc1dlZWtUYXNrcygpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFRhc2tzID0gdXNlclRhc2tzLmZpbHRlcihmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgIGlmIChpc1NhbWVXZWVrKG5ldyBEYXRlKCksIG5ldyBEYXRlKHRhc2suZGF0ZS5yZXBsYWNlKFwiLVwiLCBcIi9cIikpKSkgcmV0dXJuIHRhc2s7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkVGFza3M7XG59XG5cbi8vY3JlYXRlTGlzdEFwcFxuXG5jb25zdCB1c2VyTGlzdHMgPSBbXTtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdEFycmF5T2JqZWN0KG5hbWUpIHtcbiAgICByZXR1cm4geyBuYW1lIH1cbn1cblxuZnVuY3Rpb24gcHVzaFRvVXNlckxpc3RzKG5hbWUpIHtcbiAgICB1c2VyTGlzdHMucHVzaChjcmVhdGVMaXN0QXJyYXlPYmplY3QobmFtZSkpO1xuICAgIGNvbnNvbGUubG9nKHVzZXJMaXN0cyk7XG59XG5cblxuXG5cbmV4cG9ydCB7IHBlcnNvbmFsU2l0ZVBhZ2VMb2FkZXIgfSIsIi8vYXJyYXkgdG8gc3RvcmUgd2VhdGhlciBpbmZvIHdoZW4gZmV0Y2hlZCAmIHByb2Nlc3NlZFxubGV0IHdlYXRoZXJEYXRhQXJyYXkgPSBbXTtcblxuLy90cnktY2F0Y2ggYmxvY2sgdG8gc3VibWl0ICYgcHJvY2VzcyB1c2VyIHJlcXVlc3QgZm9yIHdlYXRoZXIgaW5mb1xuYXN5bmMgZnVuY3Rpb24gc3VibWl0UmVxdWVzdChzZWFyY2hJbnB1dCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKHNlYXJjaElucHV0KTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coZGF0YS53ZWF0aGVyWzBdKTtcbiAgICAgICAgd2VhdGhlckRhdGFBcnJheSA9IGF3YWl0IHByb2Nlc3NEYXRhKGRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YUFycmF5KTtcbiAgICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhQXJyYXk7XG4gICAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KFwiSW52YWxpZCBDaXR5IE5hbWVcIik7XG4gICAgfVxufSBcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0nICsgY2l0eSArICcmdW5pdHM9bWV0cmljJmFwcGlkPWM2ZjVlZjIyNWFkOTc4MGRjNWNmMzczMmFkYzYzZDgxJywge1xuICAgICAgICBtb2RlOiAnY29ycydcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xufTtcbmZ1bmN0aW9uIHByb2Nlc3NEYXRhKGRhdGEpIHtcbiAgICBsZXQgY2l0eU5hbWUgPSBkYXRhLm5hbWU7XG4gICAgbGV0IHRlbXAgPSBkYXRhLm1haW4udGVtcDtcbiAgICBsZXQgdGVtcEZlZWwgPSBkYXRhLm1haW4uZmVlbHNfbGlrZTtcbiAgICBsZXQgc2t5Q292ZXIgPSBkYXRhLndlYXRoZXJbMF1bJ2Rlc2NyaXB0aW9uJ107XG4gICAgbGV0IHdpbmRTcGVlZCA9IGRhdGEud2luZC5zcGVlZDtcbiAgICBsZXQgaHVtaWRpdHkgPSBkYXRhLm1haW4uaHVtaWRpdHk7XG4gICAgbGV0IHdlYXRoZXJEYXRhID0gW2NpdHlOYW1lLCB0ZW1wLCB0ZW1wRmVlbCwgc2t5Q292ZXIsIHdpbmRTcGVlZCwgaHVtaWRpdHldO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cblxuZXhwb3J0IHsgc3VibWl0UmVxdWVzdCwgd2VhdGhlckRhdGFBcnJheSB9IiwiaW1wb3J0IHsgd2VhdGhlckRhdGFBcnJheSB9IGZyb20gJy4vYXBpTG9naWMnO1xuaW1wb3J0IHsgc3VibWl0UmVxdWVzdCB9IGZyb20gJy4vYXBpTG9naWMuanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9pbWFnZXMvaWNvbjIucG5nJztcbmNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xubXlJY29uLnNyYyA9IEljb247XG5teUljb24uc2V0QXR0cmlidXRlKCdpZCcsICd3ZWF0aGVySWNvbicpO1xuXG5cbmZ1bmN0aW9uIGxvYWRXZWF0aGVyQXBwKCkge1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlYXRoZXJXcmFwcGVyJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcHBIZWFkZXJMb2FkZXIoKSk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZCh3ZWF0aGVyQXBwQ29udGVudExvYWRlcigpKTtcbiAgICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gYXBwSGVhZGVyTG9hZGVyKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd3ZWF0aGVySGVhZGVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnQoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUFwcEJ0bigpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gaGVhZGVyQ29udGVudCgpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VhdGhlckhlYWRlckxvZ28nKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobXlJY29uKTtcbiAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ1dlYXRoZXIgQXBwJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiByZW1vdmVBcHBCdG4oKSB7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlbW92ZVdlYXRoZXJBcHBCdG4nKTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVBcHApXG4gICAgcmV0dXJuIGJ0bjtcbn1cbmZ1bmN0aW9uIHJlbW92ZUFwcCgpIHtcbiAgICBsZXQgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJXcmFwcGVyJyk7XG4gICAgd2hpbGUoIGFwcC5oYXNDaGlsZE5vZGVzKCkgKXtcbiAgICBhcHAucmVtb3ZlQ2hpbGQoYXBwLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGFwcC5yZW1vdmUoKTtcbn1cbi8vY3JlYXRpbmcgc2VhcmNoRGlzcGxheSBvdXRzaWRlIG9mIHdlYXRoZXJBcHBDb250ZW50TG9hZGVyKCkgc28gaXQgY2FuIGJlIGFjY2Vzc2libGUgdG8gbG9hZFNlYXJjaFRvRG9tKClcbmxldCBzZWFyY2hEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZWFyY2hEaXNwbGF5LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoRGlzcGxheScpO1xuZnVuY3Rpb24gd2VhdGhlckFwcENvbnRlbnRMb2FkZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGludGVyZmFjZUNvbnRhaW5lckxvYWRlcigpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyRm9ybUxvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoRGlzcGxheSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gaW50ZXJmYWNlQ29udGFpbmVyTG9hZGVyKCkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICd3ZWF0aGVyQ29udGVudCcpO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiB3ZWF0aGVyRm9ybUxvYWRlcigpIHtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybScpO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlYXRoZXJJbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQ2l0eSBOYW1lJyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIC8vYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICd3ZWF0aGVyQnRuJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB2YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdLnZhbHVlO1xuICAgICAgICBzdWJtaXRSZXF1ZXN0KHZhbCkudGhlbihsb2FkU2VhcmNoVG9ET00pOyAgXG4gICAgfSk7XG4gICAgcmV0dXJuIGZvcm07XG59XG5cblxubGV0IHNlYXJjaFJlc3VsdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2VhcmNoUmVzdWx0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaFJlc3VsdENvbnRhaW5lcicpO1xubGV0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xubGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGVtcC5jbGFzc0xpc3QuYWRkKCdwLWluZm8nKTtcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZSgnaWQnLCAndGVtcCcpO1xubGV0IHRlbXBGZWVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRlbXBGZWVsLmNsYXNzTGlzdC5hZGQoJ3AtaW5mbycpO1xubGV0IHNreUNvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNreUNvdmVyLmNsYXNzTGlzdC5hZGQoJ3AtaW5mbycpO1xubGV0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZCgncC1pbmZvJyk7XG5sZXQgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgncC1pbmZvJyk7XG5cblxuZnVuY3Rpb24gZ2l2ZVRleHRUb0VsZW1lbnRzKGFycmF5KSB7XG4gICAgbGV0IHNreUNvdmVyVGV4dCA9IGFycmF5WzNdO1xuICAgIHNreUNvdmVyVGV4dCA9IHNreUNvdmVyVGV4dC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5tYXAoKHMpID0+IHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnN1YnN0cmluZygxKSlcbiAgICAgICAgLmpvaW4oJyAnKTtcbiAgICBjb25zb2xlLmxvZyhza3lDb3ZlclRleHQpO1xuICAgIFxuICAgIGNpdHkudGV4dENvbnRlbnQgPSBhcnJheVswXTtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYXJyYXlbMV0gKyBcIsKwQ1wiO1xuICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gXCJGZWVscyBsaWtlOiBcIiArIGFycmF5WzJdKyBcIsKwQ1wiO1xuICAgIHNreUNvdmVyLnRleHRDb250ZW50ID0gXCJTa3kgQ292ZXI6IFwiICsgc2t5Q292ZXJUZXh0O1xuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IFwiV2luZDogXCIgKyBhcnJheVs0XSArIFwiICBrbS9oXCI7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBcIkh1bWlkaXR5OiBcIiArIGFycmF5WzVdICsgXCIlXCJcbn1cbmFzeW5jIGZ1bmN0aW9uIGxvYWRTZWFyY2hUb0RPTSgpIHtcbiAgICBnaXZlVGV4dFRvRWxlbWVudHMod2VhdGhlckRhdGFBcnJheSk7XG4gICAgc2VhcmNoUmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHkpO1xuICAgIHNlYXJjaFJlc3VsdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICBzZWFyY2hSZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcEZlZWwpO1xuICAgIHNlYXJjaFJlc3VsdENvbnRhaW5lci5hcHBlbmRDaGlsZChza3lDb3Zlcik7XG4gICAgc2VhcmNoUmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XG4gICAgc2VhcmNoUmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcbiAgICBzZWFyY2hEaXNwbGF5LmFwcGVuZENoaWxkKHNlYXJjaFJlc3VsdENvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgeyBsb2FkU2VhcmNoVG9ET00sIHdlYXRoZXJBcHBDb250ZW50TG9hZGVyLCBsb2FkV2VhdGhlckFwcCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhlYWRlckxvYWRlciB9IGZyb20gJy4vc2l0ZS1jb250ZW50cy9oZWFkZXIuanMnO1xuaW1wb3J0IHsgaG9tZVBhZ2VMb2FkZXIgfSBmcm9tICcuL3NpdGUtY29udGVudHMvbW9kdWxlcy93aG9JQW0uanMnO1xuaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGROb2RlcyB9IGZyb20gJy4vc2l0ZS1jb250ZW50cy9tb2R1bGVzL3dob0lBbS5qcyc7XG5pbXBvcnQgeyBsb2FkSG9tZVBhZ2UgfSBmcm9tICcuL25hdkZ1bmN0aW9ucy5qcyc7XG5cblxubG9hZEhvbWVQYWdlKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==