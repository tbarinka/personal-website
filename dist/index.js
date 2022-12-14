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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: Arial, Helvetica, sans-serif\n}\n/* styles for header */\n#header {\n    display: flex;\n    width: 100%;\n}\n#nav {\n    display: flex;\n    width: 70%;\n}\n#linksList {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    justify-content: space-around;\n    list-style: none;\n}\n/* styles for main content */\n#mainContainer {\n    display: flex;\n    gap: 10px;\n}\n\n.contentBox {\n    display: flex;\n    flex-direction: column;\n}\n.homePageLoader {\n\n}\n\n/* styles for profile */\n#profile {\n    width: 400px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n#profilePhoto {\n    height: 300px;\n}\n\n#profileDescription, #profileName {\n    width: 350px;\n    display: flex;\n    justify-content: center;\n}\n\n/* styles for Philosophy */\n\n#italic {\n    font-style: italic;\n}\n\n/* styles for JS portfolio */\n#appButtonContainer {\n    display: flex;\n    gap: 15px;\n}\n.openAppButtons {\n    font-size: 18px;\n    height: 70px;\n    width: 140px;\n    border-radius: 10px;\n}\n\n/* styles for weather App */\n\n#weatherWrapper {\n    border-radius: 5px;\n    background-color: #1e293b;\n    width: 450px;\n    position: absolute;\n    top: 100px;\n}\n\n#weatherHeader,\n#weatherContent {\n    width: 390px;\n}\n\n#weatherHeader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n    gap: 15px;\n    background-color: #1e293b;\n    color: white;\n    height: 15%;\n    border-radius: 5px;\n}\n\n#weatherIcon {\n    height: 43px;\n    filter: invert(100%);\n    -webkit-filter: invert(100%);\n}\n\n#weatherHeaderLogo {\n    display: flex;\n}\n\n#removeWeatherAppBtn {\n    background-color: #1e293b;\n    color: white;\n    font-size: 24px;\n    position: relative;\n    left: 55px;\n    bottom: 20px;\n    border: none;\n    box-shadow: none;\n    background: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding-bottom: 3px;\n    padding-left: 7px;\n    padding-right: 7px;\n}\n\n#weatherContent {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    justify-content: center;\n    background-color: #93c5fd;\n    padding: 30px;\n    height: 85%;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n#weatherContent>div {\n    gap: 10px;\n    height: 7%;\n    display: flex;\n}\n\n#weatherBtn,\n#weatherInput {\n    padding: 0.5rem;\n    border: none;\n    border-radius: 5px;\n    color: inherit;\n    font-family: inherit;\n    font-size: 18px;\n    outline: none;\n    height: 37px;\n}\n#weatherBtn {\n    height: 37px;\n}\n\n#weatherBtn {\n    width: 80px;\n    margin-left: 10px;\n}\n\n#form {\n    gap: 10px;\n}\n\n.searchResultContainer {\n    /*position: absolute;\n    top: 30%;\n    left: 50%;\n    margin-left: -175px;*/\n    background-color: #1e293b;\n    width: 330px;\n    height: 285px;\n    border-radius: 10px;\n    border: solid white 3px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #93c5fd;\n    gap: 10px;\n}\n\n.searchResultContainer>h2 {\n    font-size: 36px;\n    margin-bottom: 8px;\n    color: #cbd5e1;\n}\n\n#temp {\n    font-size: 30px;\n    margin-bottom: 8px;\n}\n\n.p-info {\n    color: white;\n    font-size: 18px;\n}\n\n/*styles for battleship*/\n\n#container {\n    position: absolute;\n    background-color: #d6d3d1;\n\n}\n\n#battleShipContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 10px;\n    position: relative;\n}\n\n/*styles for the placement module */\n.placement-module-container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 10px;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    width: 800px;\n    height: 660px;\n    background-color: grey;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    padding-right: 30px;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n}\n\n.placementTextBox {\n    height: 10%;\n    margin-top: -11px;\n    margin-bottom: 23px;\n}\n\n.placementTextContent {\n    text-shadow: black 2px 2px;\n    font-size: 40px;\n    color: #22d3ee;\n}\n\n.middleSubcontainer,\n.rightInfoSubcontainer {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n}\n\n.middleSubcontainer {\n    gap: 30px;\n}\n\n.rightInfoSubcontainer {\n    gap: 25px;\n    flex-direction: column;\n    align-items: center;\n}\n\n.rightInfoButtonsContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 40px;\n    padding: 5px;\n}\n\n.bottomSubcontainer {\n    display: flex;\n    gap: 55px;\n    height: 25%;\n    margin-top: 20px;\n\n}\n\n.placementInstructionBox {\n    background-color: #d6d3d1;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border-radius: 20px;\n    padding-bottom: 5px;\n}\n\n.headingContainer {\n    display: flex;\n    justify-content: center;\n    margin-bottom: -20px;\n}\n\n.shipAllClassesContainer {\n    display: flex;\n    flex-direction: row;\n    grid-template-columns: repeat(5, 1fr);\n    background-color: rgba(0, 0, 255, 0);\n    gap: 20px;\n    width: 400px;\n\n}\n\n.singleShipClassContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.ship {\n    display: flex;\n    gap: 1px;\n}\n\n.shipAlt {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    border: solid black 2px;\n}\n\n/*styles for the two grids and coordinates */\n.doubleBoardContainer {\n    display: flex;\n    gap: 175px;\n    padding: 10px;\n}\n\n.singleBoardContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.xCoordinateContainer {\n    display: flex;\n    gap: 1px;\n    margin-left: 35px;\n    margin-bottom: -10px;\n}\n\n.yCoordinateContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    margin-top: 10px;\n}\n\n.leftSquare {\n    display: flex;\n    justify-content: center;\n}\n\n.leftSquare,\n.upperSquare {\n    height: 35px;\n    width: 35px;\n    display: flex;\n    justify-content: center;\n}\n\n.subcontainer {\n    display: flex;\n}\n\n.placementSquare {\n    height: 35px;\n    width: 35px;\n    background-color: red;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 1;\n}\n\n.square,\n.aiSquare {\n    border: solid black;\n    color: black;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.square:hover,\n.aiSquare:hover,\n.placementSquare:hover {\n    border: solid black;\n    color: black;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #cbd5e1;\n}\n\n.squareContainer {}\n\n.grid-container {\n    height: 350px;\n    width: 350px;\n    display: grid;\n    grid-template-columns: repeat(10, 35px);\n    grid-template-rows: repeat(10, 35px);\n    grid-auto-flow: column;\n    gap: 1px;\n}\n\n/* styles for score card */\n.singleBoardScoreContainer {\n    display: flex;\n    gap: 5px;\n    justify-content: left;\n}\n\n/*styles for game controller hud*/\n.scoreKeeperContainer {\n    display: flex;\n    gap: 390px;\n    text-shadow: #22d3ee 2px 2px;\n\n}\n\n.placementButton {\n    height: 60px;\n    width: 120px;\n    font-size: 20px;\n    border-radius: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #22d3ee;\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n}\n\n.buttonContainer {\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n}\n\n.formContainer {\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n    margin: 10px;\n}\n\n.winnerCard {\n    background-color: #dc2626;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n    border-radius: 20px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 10px;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    height: 276px;\n    width: 350px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n}\n\n.winnerAnnouncement {\n    font-size: 80px;\n}\n\n\n/*styles for toDoList / organizer */\n\n#body {\n    padding: 0;\n    margin: 0;\n    font-family: Arial, sans-serif;\n    height: 100%;\n    /*overflow: hidden*/\n}\n\n#content {\n    display: flex;\n}\n\n/*header*/\n#headerContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #5eead4;\n    color: white;\n    font-size: 30px;\n    height: 60px;\n    width: 100%;\n}\n\n.leftHeaderContent {\n    display: flex;\n    align-items: center;\n    height: 30px;\n    padding: 5px;\n    gap: 5px;\n    margin-left: 40px;\n}\n#organizerRightHeaderContent {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.toDo {\n    display: flex;\n    align-items: center;\n}\n\n.headerIcon {\n    height: 35px;\n    filter: brightness(0) invert(1);\n}\n\n#removeOrgnizerBtn {\n    background-color: white;\n    color: #5eead4;\n    border-radius: 10px;\n    margin-right: 10px;\n    font-size: 32px;\n    height: 40px;\n    box-shadow: none;\n    text-align: center;\n    padding-bottom: 40px;\n    padding-left: 7px;\n    padding-right: 7px;\n}\n\n\n/*sidebar*/\n.sidebar {\n    background-color: #f8fafc;\n    height: 100vh;\n    width: 21%;\n    display: flex;\n    flex-direction: column;\n    padding-top: 40px;\n    font-size: 20px;\n\n}\n\n.sidebarAddTaskButton {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding-bottom: 15px;\n}\n\n.createTask {\n    height: 70px;\n    width: 200px;\n    border-radius: 20px;\n    font-size: 25px;\n}\n\n.sidebarIntegratedItem {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 20px;\n    padding-right: 25px;\n}\n\n.sidebarItemSelected {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 10px;\n    background-color: #5eead4;\n    color: white;\n}\n\n.sidebarIntegratedItem2 {\n    display: flex;\n    flex-direction: column;\n}\n\n.sideBarRightComponentButtonContainer {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f8fafc;\n}\n\n.sideBarRightComponentButton {\n    width: 30px;\n    height: 30px;\n}\n\n.sidebarListItemContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 35px;\n    padding-right: 20px;\n}\n\n.sidebarListItemContainerSelected {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 35px;\n    padding-right: 20px;\n    background-color: #5eead4;\n    color: white;\n}\n\n.sidebarListIconButton {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.sidebarListIcon {\n    height: 25px;\n}\n\n/* new Task Popup */\n.newTaskCard {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 250px;\n    right: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n    height: 230px;\n    width: 600px;\n    border: solid black;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 5px 5px 5px black;\n    font-size: 25px;\n}\n\n.taskCardTextBorder {\n    display: flex;\n    flex-direction: column;\n    width: 75%;\n    align-items: center;\n    gap: 25px;\n    margin-bottom: 20px;\n}\n\n.taskInfoFirstRow {\n    display: flex;\n    width: 80%;\n    justify-content: center;\n    gap: 20px;\n}\n\n.taskInfoItemContainer {\n    display: flex;\n    gap: 5px;\n}\n\n.cardButtonIntegrator {\n    display: flex;\n    gap: 20px;\n}\n\n.taskCardButton {\n    width: 130px;\n    height: 50px;\n    border-radius: 20px;\n    border: solid black;\n    font-size: 20px;\n}\n\n#addTask {\n    background-color: #5eead4;\n    color: white;\n}\n\n#title,\n#date,\n#list {\n    font-size: 20px;\n}\n\n/* new List Popup */\n.newListCard {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 250px;\n    right: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n    height: 230px;\n    width: 450px;\n    border: solid black;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 5px 5px 5px black;\n    gap: 35px;\n}\n\n.cardTextBorder {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n#listName {\n    height: 30px;\n    width: 200px;\n    font-size: 20px;\n}\n\n#listNameLabel {\n    font-size: 20px;\n}\n\n.newListCardButton {\n    width: 130px;\n    height: 50px;\n    border-radius: 20px;\n    border: solid black;\n    font-size: 20px;\n}\n\n#listAdd {\n    background-color: #5eead4;\n    color: white;\n}\n\n/* main list content */\n\n.mainContainer {\n    width: 79%\n}\n\n.integratedItem {\n    padding-top: 20px;\n    padding-left: 90px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 90%;\n\n}\n\n.titleContainer {}\n\n.listContentContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n}\n\n.listItemContainer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 60%;\n    padding-left: 20px;\n    padding-right: 20px;\n    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.3);\n    padding-bottom: 5px;\n}\n\n.listItemIconContainer {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.listItemIconContainer>button {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.listItemIconContainer>button>img {\n    width: 25px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    font-family: Arial, Helvetica, sans-serif\n}\n/* styles for header */\n#header {\n    display: flex;\n    width: 100%;\n}\n#nav {\n    display: flex;\n    width: 70%;\n}\n#linksList {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    justify-content: space-around;\n    list-style: none;\n}\n/* styles for main content */\n#mainContainer {\n    display: flex;\n    gap: 10px;\n}\n\n.contentBox {\n    display: flex;\n    flex-direction: column;\n}\n.homePageLoader {\n\n}\n\n/* styles for profile */\n#profile {\n    width: 400px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n#profilePhoto {\n    height: 300px;\n}\n\n#profileDescription, #profileName {\n    width: 350px;\n    display: flex;\n    justify-content: center;\n}\n\n/* styles for Philosophy */\n\n#italic {\n    font-style: italic;\n}\n\n/* styles for JS portfolio */\n#appButtonContainer {\n    display: flex;\n    gap: 15px;\n}\n.openAppButtons {\n    font-size: 18px;\n    height: 70px;\n    width: 140px;\n    border-radius: 10px;\n}\n\n/* styles for weather App */\n\n#weatherWrapper {\n    border-radius: 5px;\n    background-color: #1e293b;\n    width: 450px;\n    position: absolute;\n    top: 100px;\n}\n\n#weatherHeader,\n#weatherContent {\n    width: 390px;\n}\n\n#weatherHeader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n    gap: 15px;\n    background-color: #1e293b;\n    color: white;\n    height: 15%;\n    border-radius: 5px;\n}\n\n#weatherIcon {\n    height: 43px;\n    filter: invert(100%);\n    -webkit-filter: invert(100%);\n}\n\n#weatherHeaderLogo {\n    display: flex;\n}\n\n#removeWeatherAppBtn {\n    background-color: #1e293b;\n    color: white;\n    font-size: 24px;\n    position: relative;\n    left: 55px;\n    bottom: 20px;\n    border: none;\n    box-shadow: none;\n    background: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding-bottom: 3px;\n    padding-left: 7px;\n    padding-right: 7px;\n}\n\n#weatherContent {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    justify-content: center;\n    background-color: #93c5fd;\n    padding: 30px;\n    height: 85%;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n#weatherContent>div {\n    gap: 10px;\n    height: 7%;\n    display: flex;\n}\n\n#weatherBtn,\n#weatherInput {\n    padding: 0.5rem;\n    border: none;\n    border-radius: 5px;\n    color: inherit;\n    font-family: inherit;\n    font-size: 18px;\n    outline: none;\n    height: 37px;\n}\n#weatherBtn {\n    height: 37px;\n}\n\n#weatherBtn {\n    width: 80px;\n    margin-left: 10px;\n}\n\n#form {\n    gap: 10px;\n}\n\n.searchResultContainer {\n    /*position: absolute;\n    top: 30%;\n    left: 50%;\n    margin-left: -175px;*/\n    background-color: #1e293b;\n    width: 330px;\n    height: 285px;\n    border-radius: 10px;\n    border: solid white 3px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #93c5fd;\n    gap: 10px;\n}\n\n.searchResultContainer>h2 {\n    font-size: 36px;\n    margin-bottom: 8px;\n    color: #cbd5e1;\n}\n\n#temp {\n    font-size: 30px;\n    margin-bottom: 8px;\n}\n\n.p-info {\n    color: white;\n    font-size: 18px;\n}\n\n/*styles for battleship*/\n\n#container {\n    position: absolute;\n    background-color: #d6d3d1;\n\n}\n\n#battleShipContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 10px;\n    position: relative;\n}\n\n/*styles for the placement module */\n.placement-module-container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 10px;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    width: 800px;\n    height: 660px;\n    background-color: grey;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    padding-right: 30px;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n}\n\n.placementTextBox {\n    height: 10%;\n    margin-top: -11px;\n    margin-bottom: 23px;\n}\n\n.placementTextContent {\n    text-shadow: black 2px 2px;\n    font-size: 40px;\n    color: #22d3ee;\n}\n\n.middleSubcontainer,\n.rightInfoSubcontainer {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n}\n\n.middleSubcontainer {\n    gap: 30px;\n}\n\n.rightInfoSubcontainer {\n    gap: 25px;\n    flex-direction: column;\n    align-items: center;\n}\n\n.rightInfoButtonsContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 40px;\n    padding: 5px;\n}\n\n.bottomSubcontainer {\n    display: flex;\n    gap: 55px;\n    height: 25%;\n    margin-top: 20px;\n\n}\n\n.placementInstructionBox {\n    background-color: #d6d3d1;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border-radius: 20px;\n    padding-bottom: 5px;\n}\n\n.headingContainer {\n    display: flex;\n    justify-content: center;\n    margin-bottom: -20px;\n}\n\n.shipAllClassesContainer {\n    display: flex;\n    flex-direction: row;\n    grid-template-columns: repeat(5, 1fr);\n    background-color: rgba(0, 0, 255, 0);\n    gap: 20px;\n    width: 400px;\n\n}\n\n.singleShipClassContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.ship {\n    display: flex;\n    gap: 1px;\n}\n\n.shipAlt {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    border: solid black 2px;\n}\n\n/*styles for the two grids and coordinates */\n.doubleBoardContainer {\n    display: flex;\n    gap: 175px;\n    padding: 10px;\n}\n\n.singleBoardContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.xCoordinateContainer {\n    display: flex;\n    gap: 1px;\n    margin-left: 35px;\n    margin-bottom: -10px;\n}\n\n.yCoordinateContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    margin-top: 10px;\n}\n\n.leftSquare {\n    display: flex;\n    justify-content: center;\n}\n\n.leftSquare,\n.upperSquare {\n    height: 35px;\n    width: 35px;\n    display: flex;\n    justify-content: center;\n}\n\n.subcontainer {\n    display: flex;\n}\n\n.placementSquare {\n    height: 35px;\n    width: 35px;\n    background-color: red;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 1;\n}\n\n.square,\n.aiSquare {\n    border: solid black;\n    color: black;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.square:hover,\n.aiSquare:hover,\n.placementSquare:hover {\n    border: solid black;\n    color: black;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #cbd5e1;\n}\n\n.squareContainer {}\n\n.grid-container {\n    height: 350px;\n    width: 350px;\n    display: grid;\n    grid-template-columns: repeat(10, 35px);\n    grid-template-rows: repeat(10, 35px);\n    grid-auto-flow: column;\n    gap: 1px;\n}\n\n/* styles for score card */\n.singleBoardScoreContainer {\n    display: flex;\n    gap: 5px;\n    justify-content: left;\n}\n\n/*styles for game controller hud*/\n.scoreKeeperContainer {\n    display: flex;\n    gap: 390px;\n    text-shadow: #22d3ee 2px 2px;\n\n}\n\n.placementButton {\n    height: 60px;\n    width: 120px;\n    font-size: 20px;\n    border-radius: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #22d3ee;\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n}\n\n.buttonContainer {\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n}\n\n.formContainer {\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n    margin: 10px;\n}\n\n.winnerCard {\n    background-color: #dc2626;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n    border-radius: 20px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 10px;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    height: 276px;\n    width: 350px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n}\n\n.winnerAnnouncement {\n    font-size: 80px;\n}\n\n\n/*styles for toDoList / organizer */\n\n#body {\n    padding: 0;\n    margin: 0;\n    font-family: Arial, sans-serif;\n    height: 100%;\n    /*overflow: hidden*/\n}\n\n#content {\n    display: flex;\n}\n\n/*header*/\n#headerContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #5eead4;\n    color: white;\n    font-size: 30px;\n    height: 60px;\n    width: 100%;\n}\n\n.leftHeaderContent {\n    display: flex;\n    align-items: center;\n    height: 30px;\n    padding: 5px;\n    gap: 5px;\n    margin-left: 40px;\n}\n#organizerRightHeaderContent {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.toDo {\n    display: flex;\n    align-items: center;\n}\n\n.headerIcon {\n    height: 35px;\n    filter: brightness(0) invert(1);\n}\n\n#removeOrgnizerBtn {\n    background-color: white;\n    color: #5eead4;\n    border-radius: 10px;\n    margin-right: 10px;\n    font-size: 32px;\n    height: 40px;\n    box-shadow: none;\n    text-align: center;\n    padding-bottom: 40px;\n    padding-left: 7px;\n    padding-right: 7px;\n}\n\n\n/*sidebar*/\n.sidebar {\n    background-color: #f8fafc;\n    height: 100vh;\n    width: 21%;\n    display: flex;\n    flex-direction: column;\n    padding-top: 40px;\n    font-size: 20px;\n\n}\n\n.sidebarAddTaskButton {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding-bottom: 15px;\n}\n\n.createTask {\n    height: 70px;\n    width: 200px;\n    border-radius: 20px;\n    font-size: 25px;\n}\n\n.sidebarIntegratedItem {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 20px;\n    padding-right: 25px;\n}\n\n.sidebarItemSelected {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 10px;\n    background-color: #5eead4;\n    color: white;\n}\n\n.sidebarIntegratedItem2 {\n    display: flex;\n    flex-direction: column;\n}\n\n.sideBarRightComponentButtonContainer {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f8fafc;\n}\n\n.sideBarRightComponentButton {\n    width: 30px;\n    height: 30px;\n}\n\n.sidebarListItemContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 35px;\n    padding-right: 20px;\n}\n\n.sidebarListItemContainerSelected {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 35px;\n    padding-right: 20px;\n    background-color: #5eead4;\n    color: white;\n}\n\n.sidebarListIconButton {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.sidebarListIcon {\n    height: 25px;\n}\n\n/* new Task Popup */\n.newTaskCard {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 250px;\n    right: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n    height: 230px;\n    width: 600px;\n    border: solid black;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 5px 5px 5px black;\n    font-size: 25px;\n}\n\n.taskCardTextBorder {\n    display: flex;\n    flex-direction: column;\n    width: 75%;\n    align-items: center;\n    gap: 25px;\n    margin-bottom: 20px;\n}\n\n.taskInfoFirstRow {\n    display: flex;\n    width: 80%;\n    justify-content: center;\n    gap: 20px;\n}\n\n.taskInfoItemContainer {\n    display: flex;\n    gap: 5px;\n}\n\n.cardButtonIntegrator {\n    display: flex;\n    gap: 20px;\n}\n\n.taskCardButton {\n    width: 130px;\n    height: 50px;\n    border-radius: 20px;\n    border: solid black;\n    font-size: 20px;\n}\n\n#addTask {\n    background-color: #5eead4;\n    color: white;\n}\n\n#title,\n#date,\n#list {\n    font-size: 20px;\n}\n\n/* new List Popup */\n.newListCard {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 250px;\n    right: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n    height: 230px;\n    width: 450px;\n    border: solid black;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 5px 5px 5px black;\n    gap: 35px;\n}\n\n.cardTextBorder {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n#listName {\n    height: 30px;\n    width: 200px;\n    font-size: 20px;\n}\n\n#listNameLabel {\n    font-size: 20px;\n}\n\n.newListCardButton {\n    width: 130px;\n    height: 50px;\n    border-radius: 20px;\n    border: solid black;\n    font-size: 20px;\n}\n\n#listAdd {\n    background-color: #5eead4;\n    color: white;\n}\n\n/* main list content */\n\n.mainContainer {\n    width: 79%\n}\n\n.integratedItem {\n    padding-top: 20px;\n    padding-left: 90px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 90%;\n\n}\n\n.titleContainer {}\n\n.listContentContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n}\n\n.listItemContainer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 60%;\n    padding-left: 20px;\n    padding-right: 20px;\n    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.3);\n    padding-bottom: 5px;\n}\n\n.listItemIconContainer {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.listItemIconContainer>button {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.listItemIconContainer>button>img {\n    width: 25px;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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
/* harmony export */   "loadJsPage": () => (/* binding */ loadJsPage),
/* harmony export */   "visitHomepageHTML": () => (/* binding */ visitHomepageHTML),
/* harmony export */   "visitJavascriptHTML": () => (/* binding */ visitJavascriptHTML),
/* harmony export */   "visitNewHTML": () => (/* binding */ visitNewHTML)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _site_contents_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-contents/header.js */ "./src/site-contents/header.js");
/* harmony import */ var _site_contents_modules_whoIAm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site-contents/modules/whoIAm.js */ "./src/site-contents/modules/whoIAm.js");
/* harmony import */ var _site_contents_modules_javascript_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site-contents/modules/javascript.js */ "./src/site-contents/modules/javascript.js");






//this function navigates to new html pages
function visitNewHTML(url) {
    window.location=url;
}
function visitJavascriptHTML() {
    visitNewHTML('javascript.html');
}
function visitHomepageHTML() {
    visitNewHTML('index.html');
}

//these functions initialize appropriate DOM elements after navigating to html page
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
/* harmony export */   "exportableLoadHomePage": () => (/* binding */ exportableLoadHomePage),
/* harmony export */   "headerLoader": () => (/* binding */ headerLoader)
/* harmony export */ });
/* harmony import */ var _modules_whoIAm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/whoIAm.js */ "./src/site-contents/modules/whoIAm.js");
/* harmony import */ var _navFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navFunctions.js */ "./src/navFunctions.js");
//import { jsPageLoader } from './modules/javascript.js';




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
    list.appendChild(linkFactory('About Me', _navFunctions_js__WEBPACK_IMPORTED_MODULE_1__.visitHomepageHTML));
    list.appendChild(linkFactory('Javascript', _navFunctions_js__WEBPACK_IMPORTED_MODULE_1__.visitJavascriptHTML));
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

//I need to import loadHomePage() from navFunctions.js to to-do-list/personal-website-initializer
//and I am using this function below as an intermediary, because the two files are too far from each other
//in the file system
function exportableLoadHomePage() {
    (0,_navFunctions_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();
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

function visitPage(){
    window.location='task-organizer.html';
}

function openToDoList() {
    //personalSitePageLoader();
    //visitPage();
    window.location='task-organizer.html';
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
    while (parent.hasChildNodes() == true) {
        parent.firstChild.remove();
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header.js */ "./src/site-contents/header.js");






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
        h.textContent = "ToDoList"
    left.appendChild(headerIcon())
    left.appendChild(h);
    return left
}
function headerIcon() {
    let icon = new Image();
    icon.src = _images_clipboard_check_multiple_outline_png__WEBPACK_IMPORTED_MODULE_1__;
    icon.classList.add('headerIcon');
    return icon;
}
function rightHeaderContent() {
    let right = document.createElement('div');
    right.setAttribute('id', 'organizerRightHeaderContent');
    right.appendChild(removeAppText());
    right.appendChild(removeAppBtn());
    return right;
}
function removeAppText() {
    let div = document.createElement('div');
    div.textContent = "Exit to Website";
    return div
}
function removeAppBtn() {
    let btn = document.createElement('button');
    btn.textContent = "x";
    btn.setAttribute('id', 'removeOrgnizerBtn');
    btn.addEventListener('click', removeApp)
    return btn;
}
function removeApp() {
    window.location='index.html';
    //let body = document.getElementById('body');
    //removeAllChildNodes(body);
    //while (userTasks.length > 0) {
    //    userTasks.pop();
    //}
    //exportableLoadHomePage(); //this calls loadHomePage() from navFunctions.js,
                              //but through an intermediary exported from site-contents/header.js
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
    let lists = content.firstChild.lastChild.lastChild;
    if (lists.hasChildNodes() == true) {
        lists.firstChild.remove();
    }
    lists.appendChild(loadDOMSidebarLists());
    checkSelectedListItems();
    unselectTop3SidebarItems();
}

    function checkSelectedListItems() {
        let nodeList = document.querySelectorAll('.sidebarListItemContainer');
        let secondNodeList = document.querySelectorAll('sidebarListItemContainerSelected');
        
        for (let i = 0; i < secondNodeList.length; i++) {
            let item = nodeList[i];
            let mainContainer = document.getElementById('mainContainer');
            item.classList.remove('sidebarListItemContainerSelected');
            item.classList.add('sidebarListItemContainer');
        }

        for (let i = 0; i < nodeList.length; i++) {
            let item = nodeList[i];
            let mainContainer = document.querySelector('.mainContainer');
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
        let all = content.firstChild.firstChild.nextSibling;
        let today = content.firstChild.firstChild.nextSibling.nextSibling;
        let thisWeek = content.firstChild.firstChild.nextSibling.nextSibling.nextSibling;
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
    let lists = content.firstChild.lastChild.lastChild;
    //let lists = content.firstChild.nextSibling.lastChild.lastChild;
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
    let content = document.getElementById('content');
    content.lastChild.remove();
    let container = document.createElement('div');
    container.classList.add('mainContainer');
    container.appendChild(mainIntegratorTodayLoader());
    content.appendChild(container);

    let all = content.firstChild.firstChild.nextSibling;
    let today = content.firstChild.firstChild.nextSibling.nextSibling;
    let thisWeek = content.firstChild.firstChild.nextSibling.nextSibling.nextSibling;
    today.classList.add('sidebarItemSelected')
    if (all.classList.contains('sidebarItemSelected')) {all.classList.remove('sidebarItemSelected') && all.classList.add('sidebarIntegratedItem')}
    if (thisWeek.classList.contains('sidebarItemSelected')) {thisWeek.classList.remove('sidebarItemSelected') && thisWeek.classList.add('sidebarIntegratedItem')}
    
    let lists = content.firstChild.lastChild.lastChild;
    //let lists = content.firstChild.nextSibling.lastChild.lastChild;
    if (lists.hasChildNodes() == true) {
        lists.firstChild.remove();
    }
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
    console.log('loadTodayTasks test');
    console.log(array);
    array.forEach((element) => {
        container.appendChild(listItemIntegrator(element.title, element.date));
    });
    return container;
};

    //This Week Suite

function mainDOMLoadThisWeek() {
    let content = document.getElementById('content');
    content.lastChild.remove();
    const container = document.createElement('div');
    container.classList.add('mainContainer');
    container.appendChild(mainIntegratorThisWeek());
    content.appendChild(container);
    let all = content.firstChild.firstChild.nextSibling;
    let today = content.firstChild.firstChild.nextSibling.nextSibling;
    let thisWeek = content.firstChild.firstChild.nextSibling.nextSibling.nextSibling;
    thisWeek.classList.add('sidebarItemSelected')
    if (all.classList.contains('sidebarItemSelected')) {all.classList.remove('sidebarItemSelected') && all.classList.add('sidebarIntegratedItem')}
    if (today.classList.contains('sidebarItemSelected')) {today.classList.remove('sidebarItemSelected') && today.classList.add('sidebarIntegratedItem')}
    //let lists = content.firstChild.nextSibling.lastChild.lastChild;
    let lists = content.firstChild.lastChild.lastChild;
    if (lists.hasChildNodes() == true) {
        lists.firstChild.remove();
    }
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
        button.addEventListener('click', () => {
            button.parentNode.parentNode.remove();
            ///code to delete the corresponding array item from userTasks
            let itemTitle = button.parentNode.parentNode.firstChild.firstChild.textContent;
            let correspondingArrayItem = userTasks.find(task => task.title == itemTitle);
            let arrayItemIndex = userTasks.indexOf(arrayItem);
            userTasks.splice(index, 1);
        })
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
    let mainTitle = content.firstChild.nextSibling.firstChild.firstChild.firstChild.textContent;
    console.log('test refresh page');
    console.log(mainTitle);

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
        pushTaskToArray(title.value, date.value, list.value);
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
        let lists = content.firstChild.lastChild.lastChild;
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
    let today = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'yyyy-LL-dd');
    const filteredTasks = userTasks.filter(function(task) {
        if (today == task.date) return task;
    })
    return filteredTasks;
}
function filterThisWeekTasks() {
    const filteredTasks = userTasks.filter(function(task) {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), new Date(task.date.replace("-", "/")))) return task;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxRQUFRLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsUUFBUSxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsNEJBQTRCLGtEQUFrRCxvQ0FBb0Msb0JBQW9C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QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUVBQWU7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFFQUFlO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHFFQUFlO0FBQzdCLGdCQUFnQixxRUFBZTtBQUMvQjtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ2oyQm9DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QztBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxxRUFBZTtBQUM5RCxHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ25GekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSxtQ0FBbUMsTUFBTSwwREFBMEQsTUFBTTtBQUN6Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDL0Y3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNTO0FBQ3BEO0FBQ2U7QUFDZixFQUFFLGtFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjJDO0FBQ21CO0FBQ1E7QUFDbEI7QUFDcEQ7QUFDZTtBQUNmLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLGFBQWEsdUVBQWlCLG1CQUFtQiwyRUFBcUIsa0JBQWtCO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMkM7QUFDUztBQUNVO0FBQy9DO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUVBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1RUFBaUI7O0FBRXpDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjJDO0FBQ2E7QUFDUTtBQUNaO0FBQ3BEO0FBQ2U7QUFDZixFQUFFLGtFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQixhQUFhLG9FQUFjLDRCQUE0Qix3RUFBa0IsMkJBQTJCO0FBQ3BHO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2IyQztBQUNTO0FBQ0k7QUFDVjtBQUNpQjtBQUNoRDtBQUNmOztBQUVBLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0EsdUJBQXVCLDJFQUFpQjtBQUN4Qyw4QkFBOEIsK0RBQVMsKzRCQUErNEI7O0FBRXQ3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9FQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvRUFBYzs7QUFFdEM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQSx5SUFBeUk7QUFDekksSUFBSTtBQUNKLHFJQUFxSTtBQUNySSxJQUFJO0FBQ0osK0lBQStJO0FBQy9JLElBQUk7QUFDSixpSkFBaUo7QUFDako7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0oyQztBQUNTO0FBQ3JDO0FBQ2YsRUFBRSxrRUFBWTtBQUNkO0FBQ0EsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDhEO0FBQ0E7QUFDVjtBQUNyQztBQUNmLEVBQUUsa0VBQVk7QUFDZCxhQUFhLHVFQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVFQUFpQjtBQUM5QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYMkM7QUFDUztBQUNOO0FBQ2lCO0FBQ2hEO0FBQ2Y7O0FBRUEsRUFBRSxrRUFBWTtBQUNkLHVCQUF1QiwyRUFBaUI7QUFDeEMscUJBQXFCLCtEQUFTLDIyQkFBMjJCOztBQUV6NEI7QUFDQTtBQUNBOztBQUVBLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJ3RDtBQUNKO0FBQ0k7QUFDVjtBQUNpQjtBQUNoRDtBQUNmOztBQUVBLEVBQUUsa0VBQVk7QUFDZCx1QkFBdUIsMkVBQWlCO0FBQ3hDLDhCQUE4QiwrREFBUztBQUN2QyxhQUFhLG9FQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0VBQWM7QUFDM0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWm1EO0FBQ1g7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2Qsa0JBQWtCLDREQUFNO0FBQ3hCLGVBQWUsbUVBQVM7QUFDeEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCMEM7QUFDZ0I7QUFDbEI7QUFDb0I7QUFDUTtBQUMyQjtBQUM2QjtBQUN6RTtBQUNNO0FBQ1c7QUFDVCxDQUFDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNGQUFzRjtBQUN0Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFLHdCQUF3Qiw0Q0FBNEM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUSxpRUFBaUU7QUFDcEYsV0FBVyxlQUFlO0FBQzFCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhLFFBQVE7QUFDckIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZLHlHQUF5RztBQUNqSSxZQUFZLFlBQVkscUdBQXFHO0FBQzdILFlBQVksWUFBWSwrR0FBK0c7QUFDdkksWUFBWSxZQUFZLGlIQUFpSDtBQUN6SSxZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7O0FBRUEsRUFBRSxzRUFBWTtBQUNkO0FBQ0EsdUJBQXVCLCtFQUFpQjtBQUN4QyxtT0FBbU8sbUVBQWE7QUFDaFAsOEJBQThCLG1FQUFTLHE1QkFBcTVCOztBQUU1N0I7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixtRUFBUyxvM0JBQW8zQjs7QUFFbDVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiw0REFBTTs7QUFFM0IsT0FBTyw2REFBTztBQUNkO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7OztBQUdBLHVCQUF1Qix5RkFBK0I7QUFDdEQsZ0JBQWdCLHFFQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsMkVBQWM7QUFDeEM7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHVFQUFVOztBQUU5QjtBQUNBLDhGQUE4Rix3RkFBd0I7QUFDdEgsUUFBUSxtRkFBbUI7QUFDM0I7O0FBRUEsK0ZBQStGLHlGQUF5QjtBQUN4SCxRQUFRLG1GQUFtQjtBQUMzQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2phQSx3QkFBd0IsMkJBQTJCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFM1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDa0Q7QUFDTzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUSxpRUFBaUU7QUFDcEYsV0FBVyxlQUFlO0FBQzFCLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCw0QkFBNEIsaUVBQVc7QUFDdkMsNkJBQTZCLGlFQUFXO0FBQ3hDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0N3QztBQUNBO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7O0FBRWQsT0FBTyw0REFBTTtBQUNiO0FBQ0E7O0FBRUEsYUFBYSw0REFBTTtBQUNuQjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx3RkFBd0Y7O0FBRXhGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0oseUNBQXlDLE9BQU87QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGNEM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU8sT0FBTyxNQUFNO0FBQy9CLFdBQVcsT0FBTyxPQUFPLE1BQU07QUFDL0IsYUFBYSxNQUFNLElBQUksTUFBTTtBQUM3QixZQUFZLE1BQU0sSUFBSSxNQUFNO0FBQzVCO0FBQ0E7QUFDQSxRQUFRLDJFQUFpQjtBQUN6QjtBQUNBO0FBQ0EsR0FBRztBQUNILFFBQVEsMkVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsWUFBWSwyRUFBaUI7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDakN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUNid0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyx5RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRztBQUNILFdBQVcseUVBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLHlFQUFlO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyx5RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRztBQUNILGFBQWEseUVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FDakp3QztBQUNjO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2RUFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLHNFQUFZO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFdBQVcsc0VBQVk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsU0FBUyxzRUFBWTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLHNFQUFZO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGFBQWEsc0VBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakd3QztBQUNSO0FBQ1E7QUFDWjtBQUNOOztBQUUxQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9FQUFjO0FBQ2hDLGNBQWMsZ0VBQVU7QUFDeEIsa0JBQWtCLG9FQUFjO0FBQ2hDLFlBQVksOERBQVE7QUFDcEIsU0FBUywyREFBSztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JtQjtBQUNXO0FBQ007QUFDVztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUSxpRUFBaUU7QUFDcEYsV0FBVyxlQUFlO0FBQzFCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsaUJBQWlCO0FBQ2xGO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQSxFQUFFLHNFQUFZO0FBQ2QsdUJBQXVCLCtFQUFpQjtBQUN4QyxxQkFBcUIsbUVBQVMsMjJCQUEyMkI7O0FBRXo0QjtBQUNBO0FBQ0E7O0FBRUEsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakQwRDtBQUNEO0FBQ047QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsZUFBZSxtRUFBUztBQUN4QixTQUFTLHFFQUFlO0FBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkEsd0JBQXdCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLHdCQUF3QixPQUFPLGtDQUFrQyxtSUFBbUk7O0FBRTNTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsME9BQTBPOztBQUUxTztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNvQztBQUNVO0FBQ0U7QUFDRzs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkscUZBQW1CO0FBQ3ZCLDhCQUE4QixzRUFBWTtBQUMxQyw4QkFBOEIsZ0ZBQWM7QUFDNUM7QUFDQTtBQUNBLElBQUkscUZBQW1CO0FBQ3ZCLDhCQUE4QixzRUFBWTtBQUMxQyw4QkFBOEIsa0ZBQVk7QUFDMUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0MsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIseUJBQXlCO0FBQ3pCLHFDQUFxQztBQUNyQyxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGtDQUFrQztBQUN0RixlQUFlLHFDQUFxQztBQUNwRCxLQUFLO0FBQ0w7QUFDQSxzQ0FBc0M7QUFDdEMsaUJBQWlCO0FBQ2pCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsZUFBZTtBQUNmLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaGdDQSxXQUFXLGVBQWU7QUFDMkI7QUFDaUQ7OztBQUd0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLCtEQUFpQjtBQUM5RCwrQ0FBK0MsaUVBQW1CO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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Q0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx3QkFBd0IsMkRBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEMscUNBQXFDO0FBQ3JDLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7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Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQztBQUNVO0FBQ0s7QUFDdkI7OztBQUdqRCw4REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9uYXZGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9zaXRlLWNvbnRlbnRzL2JhdHRsZXNoaXAtYXBwL3BlcnNvbmFsLXdlYnNpdGUtaW5pdGlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9zaXRlLWNvbnRlbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vc3JjL3NpdGUtY29udGVudHMvbW9kdWxlcy9qYXZhc2NyaXB0LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvc2l0ZS1jb250ZW50cy9tb2R1bGVzL3BoaWxvc29waHkuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9zaXRlLWNvbnRlbnRzL21vZHVsZXMvd2hvSUFtLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvc2l0ZS1jb250ZW50cy9wcm9maWxlLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvc2l0ZS1jb250ZW50cy90by1kby1saXN0L3BlcnNvbmFsLXdlYnNpdGUtaW5pdGlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9zaXRlLWNvbnRlbnRzL3dlYXRoZXItYXBwL3NyYy9hcGlMb2dpYy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vc3JjL3NpdGUtY29udGVudHMvd2VhdGhlci1hcHAvc3JjL2RvbUxvZ2ljLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcXG59XFxuLyogc3R5bGVzIGZvciBoZWFkZXIgKi9cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbiNuYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG4jbGlua3NMaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4vKiBzdHlsZXMgZm9yIG1haW4gY29udGVudCAqL1xcbiNtYWluQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudEJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5ob21lUGFnZUxvYWRlciB7XFxuXFxufVxcblxcbi8qIHN0eWxlcyBmb3IgcHJvZmlsZSAqL1xcbiNwcm9maWxlIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3Byb2ZpbGVQaG90byB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxufVxcblxcbiNwcm9maWxlRGVzY3JpcHRpb24sICNwcm9maWxlTmFtZSB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIHN0eWxlcyBmb3IgUGhpbG9zb3BoeSAqL1xcblxcbiNpdGFsaWMge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qIHN0eWxlcyBmb3IgSlMgcG9ydGZvbGlvICovXFxuI2FwcEJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuLm9wZW5BcHBCdXR0b25zIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogc3R5bGVzIGZvciB3ZWF0aGVyIEFwcCAqL1xcblxcbiN3ZWF0aGVyV3JhcHBlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwcHg7XFxufVxcblxcbiN3ZWF0aGVySGVhZGVyLFxcbiN3ZWF0aGVyQ29udGVudCB7XFxuICAgIHdpZHRoOiAzOTBweDtcXG59XFxuXFxuI3dlYXRoZXJIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiN3ZWF0aGVySWNvbiB7XFxuICAgIGhlaWdodDogNDNweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxufVxcblxcbiN3ZWF0aGVySGVhZGVyTG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNyZW1vdmVXZWF0aGVyQXBwQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNTVweDtcXG4gICAgYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XFxufVxcblxcbiN3ZWF0aGVyQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5M2M1ZmQ7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbiN3ZWF0aGVyQ29udGVudD5kaXYge1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogNyU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN3ZWF0aGVyQnRuLFxcbiN3ZWF0aGVySW5wdXQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAzN3B4O1xcbn1cXG4jd2VhdGhlckJ0biB7XFxuICAgIGhlaWdodDogMzdweDtcXG59XFxuXFxuI3dlYXRoZXJCdG4ge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbiNmb3JtIHtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoUmVzdWx0Q29udGFpbmVyIHtcXG4gICAgLypwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTc1cHg7Ki9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gICAgd2lkdGg6IDMzMHB4O1xcbiAgICBoZWlnaHQ6IDI4NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogIzkzYzVmZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoUmVzdWx0Q29udGFpbmVyPmgyIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIGNvbG9yOiAjY2JkNWUxO1xcbn1cXG5cXG4jdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ucC1pbmZvIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi8qc3R5bGVzIGZvciBiYXR0bGVzaGlwKi9cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkM2QxO1xcblxcbn1cXG5cXG4jYmF0dGxlU2hpcENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLypzdHlsZXMgZm9yIHRoZSBwbGFjZW1lbnQgbW9kdWxlICovXFxuLnBsYWNlbWVudC1tb2R1bGUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiA2NjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHgsIHJnYig1MSwgNTEsIDUxKSAwcHggMHB4IDBweCAzcHg7XFxufVxcblxcbi5wbGFjZW1lbnRUZXh0Qm94IHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IC0xMXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xcbn1cXG5cXG4ucGxhY2VtZW50VGV4dENvbnRlbnQge1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMnB4IDJweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogIzIyZDNlZTtcXG59XFxuXFxuLm1pZGRsZVN1YmNvbnRhaW5lcixcXG4ucmlnaHRJbmZvU3ViY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm1pZGRsZVN1YmNvbnRhaW5lciB7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLnJpZ2h0SW5mb1N1YmNvbnRhaW5lciB7XFxuICAgIGdhcDogMjVweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0SW5mb0J1dHRvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmJvdHRvbVN1YmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNTVweDtcXG4gICAgaGVpZ2h0OiAyNSU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuXFxufVxcblxcbi5wbGFjZW1lbnRJbnN0cnVjdGlvbkJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQzZDE7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHgsIHJnYig1MSwgNTEsIDUxKSAwcHggMHB4IDBweCAzcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmhlYWRpbmdDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxufVxcblxcbi5zaGlwQWxsQ2xhc3Nlc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwKTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuXFxufVxcblxcbi5zaW5nbGVTaGlwQ2xhc3NDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbi5zaGlwQWx0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMnB4O1xcbn1cXG5cXG4vKnN0eWxlcyBmb3IgdGhlIHR3byBncmlkcyBhbmQgY29vcmRpbmF0ZXMgKi9cXG4uZG91YmxlQm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE3NXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2luZ2xlQm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ueENvb3JkaW5hdGVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbn1cXG5cXG4ueUNvb3JkaW5hdGVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmxlZnRTcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnRTcXVhcmUsXFxuLnVwcGVyU3F1YXJlIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdWJjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucGxhY2VtZW50U3F1YXJlIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3F1YXJlLFxcbi5haVNxdWFyZSB7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNxdWFyZTpob3ZlcixcXG4uYWlTcXVhcmU6aG92ZXIsXFxuLnBsYWNlbWVudFNxdWFyZTpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG59XFxuXFxuLnNxdWFyZUNvbnRhaW5lciB7fVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDM1cHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzVweCk7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogMXB4O1xcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIHNjb3JlIGNhcmQgKi9cXG4uc2luZ2xlQm9hcmRTY29yZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxufVxcblxcbi8qc3R5bGVzIGZvciBnYW1lIGNvbnRyb2xsZXIgaHVkKi9cXG4uc2NvcmVLZWVwZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDM5MHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogIzIyZDNlZSAycHggMnB4O1xcblxcbn1cXG5cXG4ucGxhY2VtZW50QnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmQzZWU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7XFxufVxcblxcbi5idXR0b25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ud2lubmVyQ2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHgsIHJnYig1MSwgNTEsIDUxKSAwcHggMHB4IDBweCAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMTBweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDI3NnB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53aW5uZXJBbm5vdW5jZW1lbnQge1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxufVxcblxcblxcbi8qc3R5bGVzIGZvciB0b0RvTGlzdCAvIG9yZ2FuaXplciAqL1xcblxcbiNib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLypvdmVyZmxvdzogaGlkZGVuKi9cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKmhlYWRlciovXFxuI2hlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlZWFkNDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5sZWZ0SGVhZGVyQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcbiNvcmdhbml6ZXJSaWdodEhlYWRlckNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi50b0RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlckljb24ge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XFxufVxcblxcbiNyZW1vdmVPcmduaXplckJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogIzVlZWFkNDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcXG59XFxuXFxuXFxuLypzaWRlYmFyKi9cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAyMSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuXFxufVxcblxcbi5zaWRlYmFyQWRkVGFza0J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi5jcmVhdGVUYXNrIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLnNpZGViYXJJbnRlZ3JhdGVkSXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uc2lkZWJhckl0ZW1TZWxlY3RlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVlYWQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFySW50ZWdyYXRlZEl0ZW0yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGVCYXJSaWdodENvbXBvbmVudEJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbn1cXG5cXG4uc2lkZUJhclJpZ2h0Q29tcG9uZW50QnV0dG9uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnNpZGViYXJMaXN0SXRlbUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uc2lkZWJhckxpc3RJdGVtQ29udGFpbmVyU2VsZWN0ZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlZWFkNDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhckxpc3RJY29uQnV0dG9uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyTGlzdEljb24ge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi8qIG5ldyBUYXNrIFBvcHVwICovXFxuLm5ld1Rhc2tDYXJkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAyNTBweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi50YXNrQ2FyZFRleHRCb3JkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi50YXNrSW5mb0ZpcnN0Um93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnRhc2tJbmZvSXRlbUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2FyZEJ1dHRvbkludGVncmF0b3Ige1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi50YXNrQ2FyZEJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNhZGRUYXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlZWFkNDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdGl0bGUsXFxuI2RhdGUsXFxuI2xpc3Qge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi8qIG5ldyBMaXN0IFBvcHVwICovXFxuLm5ld0xpc3RDYXJkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAyNTBweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGJsYWNrO1xcbiAgICBnYXA6IDM1cHg7XFxufVxcblxcbi5jYXJkVGV4dEJvcmRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNsaXN0TmFtZSB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNsaXN0TmFtZUxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubmV3TGlzdENhcmRCdXR0b24ge1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jbGlzdEFkZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZWVhZDQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogbWFpbiBsaXN0IGNvbnRlbnQgKi9cXG5cXG4ubWFpbkNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA3OSVcXG59XFxuXFxuLmludGVncmF0ZWRJdGVtIHtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogOTAlO1xcblxcbn1cXG5cXG4udGl0bGVDb250YWluZXIge31cXG5cXG4ubGlzdENvbnRlbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubGlzdEl0ZW1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmxpc3RJdGVtSWNvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxpc3RJdGVtSWNvbkNvbnRhaW5lcj5idXR0b24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3RJdGVtSWNvbkNvbnRhaW5lcj5idXR0b24+aW1nIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSTtBQUNKO0FBQ0Esc0JBQXNCO0FBQ3RCO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjtBQUNBLDRCQUE0QjtBQUM1QjtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQSwwQkFBMEI7O0FBRTFCO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQSwyQkFBMkI7O0FBRTNCO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSTs7O3lCQUdxQjtJQUNyQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDRDQUE0Qzs7SUFFNUMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUEsd0JBQXdCOztBQUV4QjtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUEsbUNBQW1DO0FBQ25DO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRFQUE0RTtJQUM1RSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1QsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUix1QkFBdUI7QUFDM0I7O0FBRUEsNENBQTRDO0FBQzVDO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IscUJBQXFCO0FBQ3pCOztBQUVBLGlDQUFpQztBQUNqQztJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsNEJBQTRCOztBQUVoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIscUlBQXFJO0FBQ3pJOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRFQUE0RTtJQUM1RSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBLG1DQUFtQzs7QUFFbkM7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLFFBQVE7SUFDUixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7QUFHQSxVQUFVO0FBQ1Y7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixNQUFNO0lBQ04sU0FBUztJQUNULGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJLGVBQWU7QUFDbkI7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLE1BQU07SUFDTixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQSxzQkFBc0I7O0FBRXRCO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTs7QUFFZDs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcXG59XFxuLyogc3R5bGVzIGZvciBoZWFkZXIgKi9cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbiNuYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG4jbGlua3NMaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4vKiBzdHlsZXMgZm9yIG1haW4gY29udGVudCAqL1xcbiNtYWluQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudEJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5ob21lUGFnZUxvYWRlciB7XFxuXFxufVxcblxcbi8qIHN0eWxlcyBmb3IgcHJvZmlsZSAqL1xcbiNwcm9maWxlIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3Byb2ZpbGVQaG90byB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxufVxcblxcbiNwcm9maWxlRGVzY3JpcHRpb24sICNwcm9maWxlTmFtZSB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIHN0eWxlcyBmb3IgUGhpbG9zb3BoeSAqL1xcblxcbiNpdGFsaWMge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qIHN0eWxlcyBmb3IgSlMgcG9ydGZvbGlvICovXFxuI2FwcEJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuLm9wZW5BcHBCdXR0b25zIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogc3R5bGVzIGZvciB3ZWF0aGVyIEFwcCAqL1xcblxcbiN3ZWF0aGVyV3JhcHBlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwcHg7XFxufVxcblxcbiN3ZWF0aGVySGVhZGVyLFxcbiN3ZWF0aGVyQ29udGVudCB7XFxuICAgIHdpZHRoOiAzOTBweDtcXG59XFxuXFxuI3dlYXRoZXJIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiN3ZWF0aGVySWNvbiB7XFxuICAgIGhlaWdodDogNDNweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxufVxcblxcbiN3ZWF0aGVySGVhZGVyTG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNyZW1vdmVXZWF0aGVyQXBwQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNTVweDtcXG4gICAgYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XFxufVxcblxcbiN3ZWF0aGVyQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5M2M1ZmQ7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbiN3ZWF0aGVyQ29udGVudD5kaXYge1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogNyU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN3ZWF0aGVyQnRuLFxcbiN3ZWF0aGVySW5wdXQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAzN3B4O1xcbn1cXG4jd2VhdGhlckJ0biB7XFxuICAgIGhlaWdodDogMzdweDtcXG59XFxuXFxuI3dlYXRoZXJCdG4ge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbiNmb3JtIHtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoUmVzdWx0Q29udGFpbmVyIHtcXG4gICAgLypwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTc1cHg7Ki9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gICAgd2lkdGg6IDMzMHB4O1xcbiAgICBoZWlnaHQ6IDI4NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogIzkzYzVmZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoUmVzdWx0Q29udGFpbmVyPmgyIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIGNvbG9yOiAjY2JkNWUxO1xcbn1cXG5cXG4jdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ucC1pbmZvIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi8qc3R5bGVzIGZvciBiYXR0bGVzaGlwKi9cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkM2QxO1xcblxcbn1cXG5cXG4jYmF0dGxlU2hpcENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLypzdHlsZXMgZm9yIHRoZSBwbGFjZW1lbnQgbW9kdWxlICovXFxuLnBsYWNlbWVudC1tb2R1bGUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiA2NjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHgsIHJnYig1MSwgNTEsIDUxKSAwcHggMHB4IDBweCAzcHg7XFxufVxcblxcbi5wbGFjZW1lbnRUZXh0Qm94IHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IC0xMXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xcbn1cXG5cXG4ucGxhY2VtZW50VGV4dENvbnRlbnQge1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMnB4IDJweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogIzIyZDNlZTtcXG59XFxuXFxuLm1pZGRsZVN1YmNvbnRhaW5lcixcXG4ucmlnaHRJbmZvU3ViY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm1pZGRsZVN1YmNvbnRhaW5lciB7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLnJpZ2h0SW5mb1N1YmNvbnRhaW5lciB7XFxuICAgIGdhcDogMjVweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0SW5mb0J1dHRvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmJvdHRvbVN1YmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNTVweDtcXG4gICAgaGVpZ2h0OiAyNSU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuXFxufVxcblxcbi5wbGFjZW1lbnRJbnN0cnVjdGlvbkJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQzZDE7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHgsIHJnYig1MSwgNTEsIDUxKSAwcHggMHB4IDBweCAzcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmhlYWRpbmdDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxufVxcblxcbi5zaGlwQWxsQ2xhc3Nlc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwKTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuXFxufVxcblxcbi5zaW5nbGVTaGlwQ2xhc3NDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbi5zaGlwQWx0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMnB4O1xcbn1cXG5cXG4vKnN0eWxlcyBmb3IgdGhlIHR3byBncmlkcyBhbmQgY29vcmRpbmF0ZXMgKi9cXG4uZG91YmxlQm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE3NXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2luZ2xlQm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ueENvb3JkaW5hdGVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbn1cXG5cXG4ueUNvb3JkaW5hdGVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmxlZnRTcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnRTcXVhcmUsXFxuLnVwcGVyU3F1YXJlIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdWJjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucGxhY2VtZW50U3F1YXJlIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3F1YXJlLFxcbi5haVNxdWFyZSB7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNxdWFyZTpob3ZlcixcXG4uYWlTcXVhcmU6aG92ZXIsXFxuLnBsYWNlbWVudFNxdWFyZTpob3ZlciB7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG59XFxuXFxuLnNxdWFyZUNvbnRhaW5lciB7fVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDM1cHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzVweCk7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogMXB4O1xcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIHNjb3JlIGNhcmQgKi9cXG4uc2luZ2xlQm9hcmRTY29yZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxufVxcblxcbi8qc3R5bGVzIGZvciBnYW1lIGNvbnRyb2xsZXIgaHVkKi9cXG4uc2NvcmVLZWVwZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDM5MHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogIzIyZDNlZSAycHggMnB4O1xcblxcbn1cXG5cXG4ucGxhY2VtZW50QnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmQzZWU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7XFxufVxcblxcbi5idXR0b25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ud2lubmVyQ2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHgsIHJnYig1MSwgNTEsIDUxKSAwcHggMHB4IDBweCAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMTBweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDI3NnB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53aW5uZXJBbm5vdW5jZW1lbnQge1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxufVxcblxcblxcbi8qc3R5bGVzIGZvciB0b0RvTGlzdCAvIG9yZ2FuaXplciAqL1xcblxcbiNib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLypvdmVyZmxvdzogaGlkZGVuKi9cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKmhlYWRlciovXFxuI2hlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlZWFkNDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5sZWZ0SGVhZGVyQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcbiNvcmdhbml6ZXJSaWdodEhlYWRlckNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi50b0RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlckljb24ge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XFxufVxcblxcbiNyZW1vdmVPcmduaXplckJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogIzVlZWFkNDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcXG59XFxuXFxuXFxuLypzaWRlYmFyKi9cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAyMSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuXFxufVxcblxcbi5zaWRlYmFyQWRkVGFza0J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi5jcmVhdGVUYXNrIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLnNpZGViYXJJbnRlZ3JhdGVkSXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uc2lkZWJhckl0ZW1TZWxlY3RlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVlYWQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFySW50ZWdyYXRlZEl0ZW0yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGVCYXJSaWdodENvbXBvbmVudEJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbn1cXG5cXG4uc2lkZUJhclJpZ2h0Q29tcG9uZW50QnV0dG9uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnNpZGViYXJMaXN0SXRlbUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uc2lkZWJhckxpc3RJdGVtQ29udGFpbmVyU2VsZWN0ZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlZWFkNDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhckxpc3RJY29uQnV0dG9uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyTGlzdEljb24ge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi8qIG5ldyBUYXNrIFBvcHVwICovXFxuLm5ld1Rhc2tDYXJkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAyNTBweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi50YXNrQ2FyZFRleHRCb3JkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi50YXNrSW5mb0ZpcnN0Um93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnRhc2tJbmZvSXRlbUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2FyZEJ1dHRvbkludGVncmF0b3Ige1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi50YXNrQ2FyZEJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNhZGRUYXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlZWFkNDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdGl0bGUsXFxuI2RhdGUsXFxuI2xpc3Qge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi8qIG5ldyBMaXN0IFBvcHVwICovXFxuLm5ld0xpc3RDYXJkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAyNTBweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGJsYWNrO1xcbiAgICBnYXA6IDM1cHg7XFxufVxcblxcbi5jYXJkVGV4dEJvcmRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNsaXN0TmFtZSB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNsaXN0TmFtZUxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubmV3TGlzdENhcmRCdXR0b24ge1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jbGlzdEFkZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZWVhZDQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogbWFpbiBsaXN0IGNvbnRlbnQgKi9cXG5cXG4ubWFpbkNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA3OSVcXG59XFxuXFxuLmludGVncmF0ZWRJdGVtIHtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogOTAlO1xcblxcbn1cXG5cXG4udGl0bGVDb250YWluZXIge31cXG5cXG4ubGlzdENvbnRlbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubGlzdEl0ZW1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmxpc3RJdGVtSWNvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxpc3RJdGVtSWNvbkNvbnRhaW5lcj5idXR0b24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3RJdGVtSWNvbkNvbnRhaW5lcj5idXR0b24+aW1nIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIFIoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gdShkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiBRKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIHEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIEkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIEQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gRShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gZShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIGkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiBCKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIEsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gayhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gWChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24geChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiBPKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIHQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gVChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG5cbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaGVhZGVyTG9hZGVyIH0gZnJvbSAnLi9zaXRlLWNvbnRlbnRzL2hlYWRlci5qcyc7XG5pbXBvcnQgeyBob21lUGFnZUxvYWRlciB9IGZyb20gJy4vc2l0ZS1jb250ZW50cy9tb2R1bGVzL3dob0lBbS5qcyc7XG5pbXBvcnQgeyBqc1BhZ2VMb2FkZXIgfSBmcm9tICcuL3NpdGUtY29udGVudHMvbW9kdWxlcy9qYXZhc2NyaXB0LmpzJztcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkTm9kZXMgfSBmcm9tICcuL3NpdGUtY29udGVudHMvbW9kdWxlcy93aG9JQW0uanMnO1xuXG4vL3RoaXMgZnVuY3Rpb24gbmF2aWdhdGVzIHRvIG5ldyBodG1sIHBhZ2VzXG5mdW5jdGlvbiB2aXNpdE5ld0hUTUwodXJsKSB7XG4gICAgd2luZG93LmxvY2F0aW9uPXVybDtcbn1cbmZ1bmN0aW9uIHZpc2l0SmF2YXNjcmlwdEhUTUwoKSB7XG4gICAgdmlzaXROZXdIVE1MKCdqYXZhc2NyaXB0Lmh0bWwnKTtcbn1cbmZ1bmN0aW9uIHZpc2l0SG9tZXBhZ2VIVE1MKCkge1xuICAgIHZpc2l0TmV3SFRNTCgnaW5kZXguaHRtbCcpO1xufVxuXG4vL3RoZXNlIGZ1bmN0aW9ucyBpbml0aWFsaXplIGFwcHJvcHJpYXRlIERPTSBlbGVtZW50cyBhZnRlciBuYXZpZ2F0aW5nIHRvIGh0bWwgcGFnZVxuZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoZG9jdW1lbnQuYm9keSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXJMb2FkZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChob21lUGFnZUxvYWRlcigpKTtcbn1cbmZ1bmN0aW9uIGxvYWRKc1BhZ2UoKSB7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhkb2N1bWVudC5ib2R5KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlckxvYWRlcigpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGpzUGFnZUxvYWRlcigpKTtcbn1cblxuZXhwb3J0IHsgbG9hZEhvbWVQYWdlLCBsb2FkSnNQYWdlLCB2aXNpdE5ld0hUTUwsIHZpc2l0SmF2YXNjcmlwdEhUTUwsIHZpc2l0SG9tZXBhZ2VIVE1MIH0iLCJcbmNsYXNzIFNxdWFyZSB7XG4gICAgY29uc3RydWN0b3IoWCwgWSkge1xuICAgICAgICB0aGlzLlggPSBYO1xuICAgICAgICB0aGlzLlkgPSBZO1xuICAgICAgICB0aGlzLmlzSGl0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udGFpbnNTaGlwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hpcCA9IG51bGw7XG4gICAgICAgIC8vdGhpcy5zdGFydCA9IG51bGxcbiAgICB9XG59XG5jbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgICAgIHRoaXMueEF4aXMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXVxuICAgICAgICB0aGlzLnlBeGlzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXVxuICAgICAgICB0aGlzLmdyaWQgPSB0aGlzLm1ha2VHcmlkKClcbiAgICB9XG4gICAgcmVjZWl2ZUF0dGFjayh4TGV0dGVyLCB5TnVtKSB7XG4gICAgICAgIGxldCBmb3VuZCA9IHRoaXMuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0geExldHRlciAmJiBzcXVhcmUuWSA9PSB5TnVtKSk7XG4gICAgICAgIGZvdW5kLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKGZvdW5kLmNvbnRhaW5zU2hpcCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBmb3VuZC5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZvdW5kLnNoaXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvdW5kLnNoaXA7XG4gICAgfVxuICAgIG1ha2VHcmlkKCkge1xuICAgICAgICBsZXQgZ3JpZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMueEF4aXMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy55QXhpcy5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBuZXcgU3F1YXJlKHRoaXMueEF4aXNbeF0sIHRoaXMueUF4aXNbeV0pO1xuICAgICAgICAgICAgICAgIGdyaWQucHVzaChzcXVhcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncmlkO1xuICAgIH1cbiAgICBwb3B1bGF0ZVNoaXAoc2l6ZSwgeFN0YXJ0LCB5U3RhcnQsIGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoc2l6ZSA+IDEpIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJub3J0aFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHlTdGFydCA8IHNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdvdmVyZmxvdyEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcInNvdXRoXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHlTdGFydCAtIDEpID4gKDEwIC0gc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdvdmVyZmxvdyEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIndlc3RcIikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnhBeGlzLmluZGV4T2YoeFN0YXJ0KSA8IChzaXplIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdvdmVyZmxvdyEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImVhc3RcIikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnhBeGlzLmluZGV4T2YoeFN0YXJ0KSA+ICgxMCAtIHNpemUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnb3ZlcmZsb3chJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV3U2hpcCA9IG5ldyBTaGlwKHNpemUsIHhTdGFydCwgeVN0YXJ0LCBkaXJlY3Rpb24pO1xuICAgICAgICBuZXdTaGlwLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgbGV0IHN0YXJ0aW5nU3F1YXJlID0gdGhpcy5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSBuZXdTaGlwLnhTdGFydCAmJiBzcXVhcmUuWSA9PSBuZXdTaGlwLnlTdGFydCkpO1xuICAgICAgICBsZXQgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwID0gW107XG4gICAgICAgIHN0YXJ0aW5nU3F1YXJlLmNvbnRhaW5zU2hpcCA9IHRydWU7XG4gICAgICAgIHN0YXJ0aW5nU3F1YXJlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXAucHVzaChzdGFydGluZ1NxdWFyZSk7XG4gICAgICAgIGxldCB5SW5kZXggPSB0aGlzLmdyaWQuaW5kZXhPZihzdGFydGluZ1NxdWFyZSk7XG4gICAgICAgIHdoaWxlIChzaXplID4gMSkge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm5vcnRoXCIpIHtcbiAgICAgICAgICAgICAgICB5U3RhcnQgPSB5U3RhcnQgLSAxO1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IG5ld1NoaXAueFN0YXJ0ICYmIHNxdWFyZS5ZID09IHlTdGFydCkpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jb250YWluc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgICAgICBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXAucHVzaChzcXVhcmUpXG4gICAgICAgICAgICAgICAgc2l6ZSA9IHNpemUgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcInNvdXRoXCIpIHtcbiAgICAgICAgICAgICAgICAvL3lTdGFydCA9IHlTdGFydCArIDE7XG4gICAgICAgICAgICAgICAgeUluZGV4ICs9IDFcbiAgICAgICAgICAgICAgICAvL2xldCBzcXVhcmUgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IG5ld1NoaXAueFN0YXJ0ICYmIHNxdWFyZS5ZID09IHlTdGFydCkpO1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWRbeUluZGV4XTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY29udGFpbnNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgICAgICAgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwLnB1c2goc3F1YXJlKVxuICAgICAgICAgICAgICAgIHNpemUgPSBzaXplIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwiZWFzdFwiKSB7XG4gICAgICAgICAgICAgICAgeFN0YXJ0ID0gdGhpcy54QXhpc1t0aGlzLnhBeGlzLmluZGV4T2YoeFN0YXJ0KSArIDFdO1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IHhTdGFydCAmJiBzcXVhcmUuWSA9PSBuZXdTaGlwLnlTdGFydCkpXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNvbnRhaW5zU2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgICAgIHNxdWFyZXNDb250YWluaW5nTmV3U2hpcC5wdXNoKHNxdWFyZSk7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IHNpemUgLSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJ3ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICB4U3RhcnQgPSB0aGlzLnhBeGlzW3RoaXMueEF4aXMuaW5kZXhPZih4U3RhcnQpIC0gMV07XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0geFN0YXJ0ICYmIHNxdWFyZS5ZID09IG5ld1NoaXAueVN0YXJ0KSlcbiAgICAgICAgICAgICAgICBzcXVhcmUuY29udGFpbnNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgICAgICAgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwLnB1c2goc3F1YXJlKVxuICAgICAgICAgICAgICAgIHNpemUgPSBzaXplIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwO1xuICAgICAgICAvL2FkZCBzb21lIGNvZGUgdG8gYWNjb3VudCBmb3Igc2l6ZSA+IDEgYW5kIGRpcmVjdGlvblxuICAgIH1cbiAgICBkZXBvcHVsYXRlU2hpcChzaXplLCB4U3RhcnQsIHlTdGFydCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGxldCBuZXdTaGlwID0gbmV3IFNoaXAoc2l6ZSwgeFN0YXJ0LCB5U3RhcnQpO1xuICAgICAgICBsZXQgc3RhcnRpbmdTcXVhcmUgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IG5ld1NoaXAueFN0YXJ0ICYmIHNxdWFyZS5ZID09IG5ld1NoaXAueVN0YXJ0KSk7XG4gICAgICAgIGxldCBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXAgPSBbXTtcbiAgICAgICAgc3RhcnRpbmdTcXVhcmUuY29udGFpbnNTaGlwID0gZmFsc2U7XG4gICAgICAgIHN0YXJ0aW5nU3F1YXJlLnNoaXAgPSBudWxsO1xuICAgICAgICBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXAucHVzaChzdGFydGluZ1NxdWFyZSk7XG4gICAgICAgIGxldCB5SW5kZXggPSB0aGlzLmdyaWQuaW5kZXhPZihzdGFydGluZ1NxdWFyZSk7XG4gICAgICAgIHdoaWxlIChzaXplID4gMSkge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm5vcnRoXCIpIHtcbiAgICAgICAgICAgICAgICB5U3RhcnQgPSB5U3RhcnQgLSAxO1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IG5ld1NoaXAueFN0YXJ0ICYmIHNxdWFyZS5ZID09IHlTdGFydCkpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jb250YWluc1NoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwLnB1c2goc3F1YXJlKVxuICAgICAgICAgICAgICAgIHNpemUgPSBzaXplIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJzb3V0aFwiKSB7XG4gICAgICAgICAgICAgICAgLy95U3RhcnQgPSB5U3RhcnQgKyAxO1xuICAgICAgICAgICAgICAgIHlJbmRleCArPSAxXG4gICAgICAgICAgICAgICAgLy9sZXQgc3F1YXJlID0gdGhpcy5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSBuZXdTaGlwLnhTdGFydCAmJiBzcXVhcmUuWSA9PSB5U3RhcnQpKTtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5ncmlkW3lJbmRleF07XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNvbnRhaW5zU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXAucHVzaChzcXVhcmUpXG4gICAgICAgICAgICAgICAgc2l6ZSA9IHNpemUgLSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJlYXN0XCIpIHtcbiAgICAgICAgICAgICAgICB4U3RhcnQgPSB0aGlzLnhBeGlzW3RoaXMueEF4aXMuaW5kZXhPZih4U3RhcnQpICsgMV07XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0geFN0YXJ0ICYmIHNxdWFyZS5ZID09IG5ld1NoaXAueVN0YXJ0KSlcbiAgICAgICAgICAgICAgICBzcXVhcmUuY29udGFpbnNTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNxdWFyZXNDb250YWluaW5nTmV3U2hpcC5wdXNoKHNxdWFyZSk7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IHNpemUgLSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJ3ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICB4U3RhcnQgPSB0aGlzLnhBeGlzW3RoaXMueEF4aXMuaW5kZXhPZih4U3RhcnQpIC0gMV07XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0geFN0YXJ0ICYmIHNxdWFyZS5ZID09IG5ld1NoaXAueVN0YXJ0KSlcbiAgICAgICAgICAgICAgICBzcXVhcmUuY29udGFpbnNTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNxdWFyZXNDb250YWluaW5nTmV3U2hpcC5wdXNoKHNxdWFyZSlcbiAgICAgICAgICAgICAgICBzaXplID0gc2l6ZSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxdWFyZXNDb250YWluaW5nTmV3U2hpcDtcbiAgICAgICAgLy9hZGQgc29tZSBjb2RlIHRvIGFjY291bnQgZm9yIHNpemUgPiAxIGFuZCBkaXJlY3Rpb25cbiAgICB9XG59XG5jbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3Ioc2l6ZSwgeFN0YXJ0LCB5U3RhcnQsIGRpcmVjdGlvbikge1xuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgICB0aGlzLmhpdHMgPSBbXVxuICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0XG4gICAgdGhpcy55U3RhcnQgPSB5U3RhcnRcbiAgICB0aGlzLmRpcmVjdGlvbiA9IG51bGxcbiAgfVxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzLnB1c2goJ2hpdCcpO1xuICAgIGlmICh0aGlzLmhpdHMubGVuZ3RoID09IHRoaXMuc2l6ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNTdW5rKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmhpdDtcbiAgICB9XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiAnc3VuayEnXG4gIH1cbn0gXG5cbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZXMoYXJyKSB7XG4gICAgdmFyIHVuaXF1ZSA9IFtdO1xuICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoIXVuaXF1ZS5pbmNsdWRlcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgdW5pcXVlLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdW5pcXVlO1xufVxuIFxuLy9zdWl0ZSBvZiBmdW5jdGlvbnMgZm9yIGxvYWRpbmcgdGhlIHR3byBET00gYm9hcmRzICYgc2NvcmUga2VlcGVyIGNhcmRcbmZ1bmN0aW9uIHNxdWFyZUxvYWRlcihjb29yZGluYXRlLCBwbGF5ZXIgPSBcImFpXCIpIHtcbiAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgIGlmIChjb29yZGluYXRlLmlzSGl0ID09IHRydWUpIHtcbiAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzZlZTdiN1wiO1xuICAgIH1cbiAgICBpZiAocGxheWVyID09IFwiYWlcIikge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnc3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdhaVNxdWFyZScpO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGNvb3JkaW5hdGUuWDtcbiAgICAgICAgICAgIGxldCB5ID0gY29vcmRpbmF0ZS5ZO1xuICAgICAgICAgICAgYXR0YWNrQUkoeCwgeSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY29vcmRpbmF0ZS5pc0hpdCA9PSB0cnVlICYmIGNvb3JkaW5hdGUuY29udGFpbnNTaGlwID09IHRydWUpIHtcbiAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIHNxdWFyZS50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgIH1cbiAgICAvL2lmIChjb29yZGluYXRlLmNvbnRhaW5zU2hpcCA9PSB0cnVlKSB7XG4gICAgICAgIC8vc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgLy99XG4gICAgaWYgKHBsYXllciAhPSBcImFpXCIpIHtcbiAgICAgICAgaWYgKGNvb3JkaW5hdGUuY29udGFpbnNTaGlwID09IHRydWUpIHtcbiAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzcXVhcmU7XG59XG5mdW5jdGlvbiBib2FyZExvYWRlcihib2FyZCwgcGxheWVyKSB7XG4gICAgbGV0IGFycmF5T2ZHcmlkQ29vcmRpbmF0ZXMgPSBib2FyZC5ncmlkO1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JpZC1jb250YWluZXInKTtcbiAgICBhcnJheU9mR3JpZENvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgbGV0IHNxdWFyZSA9IHNxdWFyZUxvYWRlcihjb29yZGluYXRlLCBwbGF5ZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9KVxuICAgIHJldHVybiBjb250YWluZXI7XG59O1xuZnVuY3Rpb24geENvb3JkaW5hdGVMb2FkZXIoKSB7XG4gICAgbGV0IGFycmF5T2ZYQ29vcmRpbmF0ZXMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3hDb29yZGluYXRlQ29udGFpbmVyJyk7XG4gICAgYXJyYXlPZlhDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3VwcGVyU3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS50ZXh0Q29udGVudCA9IGNvb3JkaW5hdGU7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiB4Q29vcmRpbmF0ZURvdWJsZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd4Q29vcmRpbmF0ZUNvbnRhaW5lckRvdWJsZScpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh4Q29vcmRpbmF0ZUxvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoeENvb3JkaW5hdGVMb2FkZXIoKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIHlDb29yZGluYXRlTG9hZGVyKCkge1xuICAgIGxldCBhcnJheU9mWENvb3JkaW5hdGVzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3lDb29yZGluYXRlQ29udGFpbmVyJyk7XG4gICAgYXJyYXlPZlhDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2xlZnRTcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlLnRleHRDb250ZW50ID0gY29vcmRpbmF0ZTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIHBsYXllckNvb3JkaW5hdGVkQm9hcmRMb2FkZXIoYm9hcmQpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZUJvYXJkQ29udGFpbmVyJylcbiAgICBsZXQgc3ViY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1YmNvbnRhaW5lcicpO1xuICAgICAgICBzdWJjb250YWluZXIuYXBwZW5kQ2hpbGQoeUNvb3JkaW5hdGVMb2FkZXIoKSk7XG4gICAgICAgIHN1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZExvYWRlcihib2FyZCwgXCJwbGF5ZXJcIikpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoeENvb3JkaW5hdGVMb2FkZXIoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJjb250YWluZXIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiBhaUNvb3JkaW5hdGVkQm9hcmRMb2FkZXIoYm9hcmQpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZUJvYXJkQ29udGFpbmVyJylcbiAgICBsZXQgc3ViY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1YmNvbnRhaW5lcicpO1xuICAgICAgICBzdWJjb250YWluZXIuYXBwZW5kQ2hpbGQoeUNvb3JkaW5hdGVMb2FkZXIoKSk7XG4gICAgICAgIHN1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZExvYWRlcihib2FyZCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoeENvb3JkaW5hdGVMb2FkZXIoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJjb250YWluZXIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiB0d29Cb2FyZENvbnRlbnRHZW5lcmF0b3IocGxheWVyQm9hcmQsIG9wcG9uZW50Qm9hcmQpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RvdWJsZUJvYXJkQ29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckNvb3JkaW5hdGVkQm9hcmRMb2FkZXIocGxheWVyQm9hcmQpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWlDb29yZGluYXRlZEJvYXJkTG9hZGVyKG9wcG9uZW50Qm9hcmQpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gdHdvQm9hcmRET01Mb2FkZXIocGxheWVyQm9hcmQsIG9wcG9uZW50Qm9hcmQpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0d29Cb2FyZENvbnRlbnRHZW5lcmF0b3IocGxheWVyQm9hcmQsIG9wcG9uZW50Qm9hcmQpKTsgXG59XG5mdW5jdGlvbiBzY29yZUtlZXBlckdlbmVyYXRvcihwbGF5ZXIsIGlucHV0KSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaW5nbGVCb2FyZFNjb3JlQ29udGFpbmVyJylcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxldCBzY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBwbGF5ZXIgKyBcIiBTY29yZTogXCJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzY29yZSk7XG4gICAgc2NvcmUudGV4dENvbnRlbnQgPSBpbnB1dCArIFwiLzVcIjtcbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5mdW5jdGlvbiBkb3VibGVTY29yZUtlZXBlckdlbmVyYXRvcihwbGF5ZXIxLCBpbnB1dDEsIHBsYXllcjIsIGlucHV0Mikge1xuICAgIGxldCBzY29yZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjb3JlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Njb3JlS2VlcGVyQ29udGFpbmVyJyk7XG4gICAgc2NvcmVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NvcmVLZWVwZXJHZW5lcmF0b3IocGxheWVyMSwgaW5wdXQxKSk7XG4gICAgc2NvcmVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NvcmVLZWVwZXJHZW5lcmF0b3IocGxheWVyMiwgaW5wdXQyKSk7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIucHJlcGVuZChzY29yZUNvbnRhaW5lcilcbn1cbmZ1bmN0aW9uIGFubm91bmNlV2lubmVyQ2FyZCh0ZXh0KSB7XG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3dpbm5lckNhcmQnKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGFubm91bmNlV2lubmVyVGV4dCh0ZXh0KSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChyZXN0YXJ0R2FtZUJ1dHRvbigpKTtcbiAgICBjb250YWluZXIuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChjYXJkKTtcbn1cbmZ1bmN0aW9uIGFubm91bmNlV2lubmVyVGV4dCh0ZXh0KSB7XG4gICAgbGV0IGFubm91bmNlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgYW5ub3VuY2VtZW50LmNsYXNzTGlzdC5hZGQoJ3dpbm5lckFubm91bmNlbWVudFRleHQnKTtcbiAgICBhbm5vdW5jZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBhbm5vdW5jZW1lbnQ7XG59XG5mdW5jdGlvbiByZXN0YXJ0R2FtZUJ1dHRvbigpIHtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJSZXN0YXJ0IEdhbWVcIjtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudEJ1dHRvblwiKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0Qm9hcmQpXG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuXG5cbmNsYXNzIGdhbWVCb2FyZExvYWRlciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyQm9hcmQsIHBsYXllciwgYWlCb2FyZCwgYWkpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZCA9IHBsYXllckJvYXJkO1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgdGhpcy5haUJvYXJkID0gYWlCb2FyZDtcbiAgICAgICAgdGhpcy5haSA9IGFpXG4gICAgfVxuICAgIHJlbG9hZEJvYXJkcygpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5haUJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuICAgICAgICB0d29Cb2FyZERPTUxvYWRlcih0aGlzLnBsYXllckJvYXJkLCB0aGlzLmFpQm9hcmQpO1xuICAgIH1cbiAgICBwb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5wb3B1bGF0ZVNoaXAoc2l6ZSwgeCwgeSwgZGlyZWN0aW9uKTtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgdHdvQm9hcmRET01Mb2FkZXIodGhpcy5wbGF5ZXJCb2FyZCwgdGhpcy5haUJvYXJkKTtcbiAgICB9XG4gICAgZGVwb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5kZXBvcHVsYXRlU2hpcChzaXplLCB4LCB5LCBkaXJlY3Rpb24pO1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuICAgICAgICB0d29Cb2FyZERPTUxvYWRlcih0aGlzLnBsYXllckJvYXJkLCB0aGlzLmFpQm9hcmQpO1xuICAgIH1cbiAgICBzaW1wbGVQb3B1bGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5wb3B1bGF0ZVNoaXAoMiwgJ0knLCA0LCBcImVhc3RcIik7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQucG9wdWxhdGVTaGlwKDQsICdDJywgNSwgXCJlYXN0XCIpO1xuICAgICAgICB0aGlzLnBsYXllckJvYXJkLnBvcHVsYXRlU2hpcCgzLCAnSicsIDYsIFwic291dGhcIik7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQucG9wdWxhdGVTaGlwKDMsICdCJywgOCwgXCJzb3V0aFwiKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5wb3B1bGF0ZVNoaXAoMiwgJ0UnLCA5LCBcImVhc3RcIik7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZC5uZXh0U2libGluZyk7XG4gICAgICAgIHR3b0JvYXJkRE9NTG9hZGVyKHRoaXMucGxheWVyQm9hcmQsIHRoaXMuYWlCb2FyZCk7XG4gICAgfVxuICAgIGF0dGFja0FJKHgsIHkpIHtcbiAgICAgICAgdGhpcy5haUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZC5uZXh0U2libGluZyk7XG4gICAgICAgIHR3b0JvYXJkRE9NTG9hZGVyKHRoaXMucGxheWVyQm9hcmQsIHRoaXMuYWlCb2FyZCk7XG4gICAgICAgIHRoaXMua2VlcFNjb3JlKClcbiAgICB9XG4gICAgYXR0YWNrUGxheWVyKHgsIHkpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuICAgICAgICB0d29Cb2FyZERPTUxvYWRlcih0aGlzLnBsYXllckJvYXJkLCB0aGlzLmFpQm9hcmQpO1xuICAgICAgICB0aGlzLmtlZXBTY29yZSgpXG4gICAgfVxuICAgIHByb2R1Y2VBcnJheU9mUGxheWVyU2hpcHMoKSB7XG4gICAgICAgIGxldCBwbGF5ZXJTaGlwcyA9IFtdXG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQuZ3JpZC5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIGlmIChzcXVhcmUuc2hpcCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyU2hpcHMucHVzaChzcXVhcmUuc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vcGxheWVyU2hpcHMgY29udGFpbnMgZHVwbGljYXRlcyBvZiBlYWNoIHNoaXAsIHNvIEkgZmlsdGVyIHRoZSBhcnJheSBiZWxvd1xuICAgICAgICBsZXQgcGxheWVyU2hpcHNGaWx0ZXJlZCA9IFtdO1xuICAgICAgICBwbGF5ZXJTaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgaWYgKCFwbGF5ZXJTaGlwc0ZpbHRlcmVkLmluY2x1ZGVzKHNoaXApKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyU2hpcHNGaWx0ZXJlZC5wdXNoKHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcGxheWVyU2hpcHNGaWx0ZXJlZDtcbiAgICB9XG4gICAgcHJvZHVjZUFycmF5T2ZBaVNoaXBzKCkge1xuICAgICAgICBsZXQgYWlTaGlwcyA9IFtdXG4gICAgICAgIHRoaXMuYWlCb2FyZC5ncmlkLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNxdWFyZS5zaGlwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhaVNoaXBzLnB1c2goc3F1YXJlLnNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvL3BsYXllclNoaXBzIGNvbnRhaW5zIGR1cGxpY2F0ZXMgb2YgZWFjaCBzaGlwLCBzbyBJIGZpbHRlciB0aGUgYXJyYXkgYmVsb3dcbiAgICAgICAgbGV0IGFpU2hpcHNGaWx0ZXJlZCA9IFtdO1xuICAgICAgICBhaVNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBpZiAoIWFpU2hpcHNGaWx0ZXJlZC5pbmNsdWRlcyhzaGlwKSkge1xuICAgICAgICAgICAgICAgIGFpU2hpcHNGaWx0ZXJlZC5wdXNoKHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYWlTaGlwc0ZpbHRlcmVkO1xuICAgIH1cbiAgICBrZWVwU2NvcmUoKSB7XG4gICAgICAgIGxldCBwbGF5ZXJTaGlwcyA9IHRoaXMucHJvZHVjZUFycmF5T2ZQbGF5ZXJTaGlwcygpO1xuICAgICAgICBsZXQgYWlTaGlwcyA9IHRoaXMucHJvZHVjZUFycmF5T2ZBaVNoaXBzKCk7XG4gICAgICAgIGxldCBwbGF5ZXJUYWxseSA9IDBcbiAgICAgICAgbGV0IGFpVGFsbHkgPSAwXG4gICAgICAgIHBsYXllclNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmhpdHMubGVuZ3RoID09IHNoaXAuc2l6ZSkge1xuICAgICAgICAgICAgICAgIHBsYXllclRhbGx5ICs9IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgYWlTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5oaXRzLmxlbmd0aCA9PSBzaGlwLnNpemUpIHtcbiAgICAgICAgICAgICAgICBhaVRhbGx5ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICBkb3VibGVTY29yZUtlZXBlckdlbmVyYXRvcihcIlBsYXllclwiLCBhaVRhbGx5LCBcIkFJXCIsIHBsYXllclRhbGx5KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhaVRhbGx5ID0gXCIgKyBhaVRhbGx5KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXJUYWxseSA9XCIgKyBwbGF5ZXJUYWxseSk7XG4gICAgICAgIGlmIChhaVRhbGx5ID09IDUpIHtcbiAgICAgICAgICAgIGFubm91bmNlV2lubmVyQ2FyZChcIllvdSB3aW4hXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF5ZXJUYWxseSA9PSA1KSB7XG4gICAgICAgICAgICBhbm5vdW5jZVdpbm5lckNhcmQoXCJBSSB3aW5zIVwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWlTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFpU3F1YXJlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFpU3F1YXJlcyk7XG5cblxuICAgICAgICAvL2NvbnN0cnVjdCBhIGxpc3Qgb2YgZ2FtZWJvYXJkLmdyaWQgc2hpcHNcbiAgICAgICAgLy9mb3IgYW55IHNoaXAsIGlmIHNoaXAuaGl0cyA9PSBzaXplLCBhZGQgKzEgdG8gc2NvcmVcbiAgICAgICAgLy9pbnB1dCBzY29yZSBpbiBkb3VibGVTY29yZUtlZXBlckdlbmVyYXRvclxuICAgIH1cbiAgICBjb3B5QUlncmlkKCkge1xuICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLmFpQm9hcmQuZ3JpZC5zbGljZSgpO1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHJhbmRvbVBhcmFtZXRlclNlbGVjdG9yKGFycmF5LCBzaXplKSB7XG4gICAgICAgIGxldCByYW5kb20gPSBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcbiAgICAgICAgbGV0IHggPSByYW5kb20uWDtcbiAgICAgICAgbGV0IHkgPSByYW5kb20uWTtcbiAgICAgICAgbGV0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihyYW5kb20pO1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJhbmRvbSk7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLnJhbmRvbURpcmVjdGlvblByb2R1Y2VyKCk7XG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCArIDEsIDEpO1xuICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXggLSAxLCAxKTtcbiAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4ICsgMTAsIDEpO1xuICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXggLSAxMCwgMSk7XG4gICAgICAgIGlmIChzaXplID4gMSAmJiBkaXJlY3Rpb24gPT0gXCJzb3V0aFwiKSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXggKyAyLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2l6ZSA+IDEgJiYgZGlyZWN0aW9uID09IFwibm9ydGhcIikge1xuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4IC0gMiwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemUgPiAxICYmIGRpcmVjdGlvbiA9PSBcImVhc3RcIikge1xuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4ICsgMjApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaXplID4gMSAmJiBkaXJlY3Rpb24gPT0gXCJ3ZXN0XCIpIHtcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCAtIDIwLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2l6ZSA+IDIgJiYgZGlyZWN0aW9uID09IFwic291dGhcIikge1xuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4ICsgMywgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemUgPiAyICYmIGRpcmVjdGlvbiA9PSBcIm5vcnRoXCIpIHtcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCAtIDMsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaXplID4gMiAmJiBkaXJlY3Rpb24gPT0gXCJlYXN0XCIpIHtcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCAtIDMwLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2l6ZSA+IDIgJiYgZGlyZWN0aW9uID09IFwid2VzdFwiKSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXggKyAzMCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWlCb2FyZC5wb3B1bGF0ZVNoaXAoc2l6ZSwgeCwgeSwgZGlyZWN0aW9uKSA9PSAnb3ZlcmZsb3chJykge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21QYXJhbWV0ZXJTZWxlY3RvcihhcnJheSwgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFpQm9hcmQucG9wdWxhdGVTaGlwKHNpemUsIHgsIHksIGRpcmVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmluZEFkamFjZW50WENvb3JkaW5hdGVzKHgsIHksIGFycmF5KSB7XG4gICAgICAgIGlmICh4ID09ICdBJykge1xuICAgICAgICAgICAgbGV0IGEgPSBcIm92ZXJmbG93XCI7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnQicgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnQicpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdBJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnQycgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnQycpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdCJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnRCcgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnRCcpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdDJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnRScgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnRScpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdEJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnRicgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnRicpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdFJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnRycgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnRycpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdGJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnSCcgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnSCcpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdHJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnSScgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnSScpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdIJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnSicgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgcmV0dXJuIFthLCBiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA9PSAnSicpIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyYXkuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09ICdJJyAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgICAgICBsZXQgYiA9IFwib3ZlcmZsb3dcIjtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmFuZG9tRGlyZWN0aW9uUHJvZHVjZXIoKSB7XG4gICAgICAgIGxldCBudW0gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBpZiAobnVtID49IC43NSkgeyByZXR1cm4gXCJlYXN0XCIgfVxuICAgICAgICBpZiAobnVtIDw9IC4yNSkge3JldHVybiBcIndlc3RcIn1cbiAgICAgICAgaWYgKG51bSA+IC4yNSAmJiBudW0gPCAuNSkgeyByZXR1cm4gXCJzb3V0aFwiIH1cbiAgICAgICAgZWxzZSB7IHJldHVybiBcIm5vcnRoXCIgfVxuICAgIH1cbiAgICBzaW1wbGVQb3B1bGF0ZUFJKCkge1xuICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLmNvcHlBSWdyaWQoKTtcbiAgICAgICAgdGhpcy5yYW5kb21QYXJhbWV0ZXJTZWxlY3RvcihhcnJheSwgMik7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICAgICAgdGhpcy5yYW5kb21QYXJhbWV0ZXJTZWxlY3RvcihhcnJheSwgMik7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICAgICAgdGhpcy5yYW5kb21QYXJhbWV0ZXJTZWxlY3RvcihhcnJheSwgMyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICAgICAgdGhpcy5yYW5kb21QYXJhbWV0ZXJTZWxlY3RvcihhcnJheSwgMyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICAgICAgdGhpcy5yYW5kb21QYXJhbWV0ZXJTZWxlY3RvcihhcnJheSwgNCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgdHdvQm9hcmRET01Mb2FkZXIodGhpcy5wbGF5ZXJCb2FyZCwgdGhpcy5haUJvYXJkKTtcbiAgICB9XG59XG5cbi8vc3VpdGUgZm9yIGxvYWRpbmcgY2FycmllciBwbGFjZW1lbnQgbW9kdWxlIGJlZm9yZSBnYW1lIGJlZ2luc1xuXG5sZXQgcGxhY2VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wbGFjZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50LW1vZHVsZS1jb250YWluZXInKTtcbnBsYWNlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYWNlbWVudENvbnRhaW5lcicpO1xubGV0IHBsYWNlbWVudEJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xubGV0IHNoaXBDb3VudCA9IFtdO1xuZnVuY3Rpb24gcGxhY2VtZW50TW9kdWxlTG9hZGVyKCkge1xuICAgIHBsYWNlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BUZXh0TG9hZGVyKCkpO1xuICAgIHBsYWNlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZW1lbnRNb2R1bGVNaWRkbGVTdWJDb250YWluZXJMb2FkZXIoKSk7XG4gICAgcGxhY2VtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbVN1YmNvbnRhaW5lckxvYWRlcigpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBsYWNlbWVudENvbnRhaW5lcik7XG59XG5mdW5jdGlvbiB0b3BUZXh0TG9hZGVyKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50VGV4dEJveCcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BUZXh0Q29udGVudExvYWRlcignUGxhY2UgWW91ciBTaGlwcyEnKSlcbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcbmZ1bmN0aW9uIHRvcFRleHRDb250ZW50TG9hZGVyKHRleHQpIHtcbiAgICBsZXQgaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaC5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnRUZXh0Q29udGVudCcpO1xuICAgIGguc2V0QXR0cmlidXRlKCdpZCcsICdwbGFjZW1lbnRIZWFkaW5nJyk7XG4gICAgaC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIGg7XG59XG5mdW5jdGlvbiBwbGFjZW1lbnRNb2R1bGVNaWRkbGVTdWJDb250YWluZXJMb2FkZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtaWRkbGVTdWJjb250YWluZXInKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZW1lbnRCb2FyZExvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRJbmZvTG9hZGVyKCkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiByaWdodEluZm9Mb2FkZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyaWdodEluZm9TdWJjb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uc0ludGVncmF0b3IoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRCb3hMb2FkZXIoKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lclxufTtcbmZ1bmN0aW9uIGJ1dHRvbnNJbnRlZ3JhdG9yKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmlnaHRJbmZvQnV0dG9uc0NvbnRhaW5lcicpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2V0U2hpcEJ0bkxvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmVnaW5HYW1lQnRuTG9hZGVyKCkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiByZXNldFNoaXBCdG5Mb2FkZXIoKSB7XG4gICAgbGV0IHJlc2V0U2hpcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc2V0U2hpcEJ0bi5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnRCdXR0b24nKTtcbiAgICByZXNldFNoaXBCdG4udGV4dENvbnRlbnQgPSBcIlJlc2V0IFNoaXBzXCI7XG4gICAgcmVzZXRTaGlwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRTaGlwcylcbiAgICByZXR1cm4gcmVzZXRTaGlwQnRuO1xufTtcbmZ1bmN0aW9uIGJlZ2luR2FtZUJ0bkxvYWRlcigpIHtcbiAgICBsZXQgYmVnaW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBiZWdpbkJ0bi5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnRCdXR0b24nKTtcbiAgICBiZWdpbkJ0bi50ZXh0Q29udGVudCA9IFwiQmVnaW4gR2FtZVwiO1xuICAgIGJlZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tpZlNoaXBzQXJlQWxsUGxhY2VkKTtcbiAgICByZXR1cm4gYmVnaW5CdG47XG59O1xuZnVuY3Rpb24gdGV4dEJveExvYWRlcigpIHtcbiAgICBsZXQgdGV4dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRCb3guY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50SW5zdHJ1Y3Rpb25Cb3gnKTtcbiAgICB0ZXh0Qm94LmFwcGVuZENoaWxkKHRleHRCb3hIZWFkaW5nTG9hZGVyKCkpO1xuICAgIHRleHRCb3guYXBwZW5kQ2hpbGQodGV4dEJveENvbnRlbnRMb2FkZXIoXCJQbGFjZSB5b3VyIHNoaXBzIGJ5IGRyYWdnaW5nIHRoZW0gdG8geW91ciBkZXNpcmVkIGxvY2F0aW9uLlwiKSk7XG4gICAgdGV4dEJveC5hcHBlbmRDaGlsZCh0ZXh0Qm94Q29udGVudExvYWRlcihcIkNsaWNrIHRoZSBSb3RhdGUgYnV0dG9uIHRvIGNoYW5nZSBvcmllbnRhdGlvbiBvZiBzaGlwcyB3YWl0aW5nIHRvIGJlIHBsYWNlZC5cIikpO1xuICAgIHRleHRCb3guYXBwZW5kQ2hpbGQodGV4dEJveENvbnRlbnRMb2FkZXIoXCJZb3UgY2FuIGFsc28gcm90YXRlIHNoaXBzIGFmdGVyIHBsYWNpbmcgdGhlbSBvbiB0aGUgYm9hcmQgYnkgY2xpY2tpbmcgb24gdGhlbS5cIikpO1xuICAgIHRleHRCb3guYXBwZW5kQ2hpbGQodGV4dEJveENvbnRlbnRMb2FkZXIoXCJPbmNlIHlvdSBoYXZlIHBsYWNlZCBhbGwgZml2ZSBzaGlwcywgcHJlc3MgdGhlIEJlZ2luIEdhbWUgYnV0dG9uIHRvIHN0YXJ0LlwiKSk7XG4gICAgcmV0dXJuIHRleHRCb3g7XG59XG5mdW5jdGlvbiB0ZXh0Qm94SGVhZGluZ0xvYWRlcigpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmdDb250YWluZXInKTtcbiAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiSW5zdHJ1Y3Rpb25zXCI7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiB0ZXh0Qm94Q29udGVudExvYWRlcih0ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdpbnN0cnVjdGlvbkNvbnRlbnQnKTtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gY29udGVudDtcbn1cbmZ1bmN0aW9uIHNlbGVjdFNoaXBTcXVhcmVMb2FkZXIoY29vcmRpbmF0ZSkge1xuICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgaWYgKGNvb3JkaW5hdGUuY29udGFpbnNTaGlwID09IHRydWUpIHtcbiAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBpZCA9IHNxdWFyZS5pZDtcbiAgICAgICAgICAgIGxldCBkYXRhID0gaWQuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICBsZXQgc3RhcnRpbmdTcXVhcmUgPSBwbGFjZW1lbnRCb2FyZC5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSBkYXRhWzBdICYmIHNxdWFyZS5ZID09IGRhdGFbMV0pKTtcbiAgICAgICAgICAgIGxldCBzaXplID0gc3RhcnRpbmdTcXVhcmUuc2hpcC5zaXplO1xuICAgICAgICAgICAgbGV0IHggPSBzdGFydGluZ1NxdWFyZS5zaGlwLnhTdGFydDtcbiAgICAgICAgICAgIGxldCB5ID0gc3RhcnRpbmdTcXVhcmUuc2hpcC55U3RhcnQ7XG4gICAgICAgICAgICBpZiAoc3RhcnRpbmdTcXVhcmUuc2hpcC5kaXJlY3Rpb24gPT0gXCJlYXN0XCIpIHtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnRCb2FyZC5kZXBvcHVsYXRlU2hpcChzaXplLCB4LCB5LCBcImVhc3RcIik7XG4gICAgICAgICAgICAgICAgZGVwb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBcImVhc3RcIik7XG4gICAgICAgICAgICAgICAgLy93cml0ZSBkZXBvcHVsYXRlIHBsYXllciBmdW5jdGlvblxuICAgICAgICAgICAgICAgIHBsYWNlbWVudEJvYXJkLnBvcHVsYXRlU2hpcChzaXplLCB4LCB5LCBcInNvdXRoXCIpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlUGxheWVyKHNpemUsIHgsIHksIFwic291dGhcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXJ0aW5nU3F1YXJlLnNoaXAuZGlyZWN0aW9uID09IFwic291dGhcIikge1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudEJvYXJkLmRlcG9wdWxhdGVTaGlwKHNpemUsIHgsIHksIFwic291dGhcIik7XG4gICAgICAgICAgICAgICAgZGVwb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBcInNvdXRoXCIpO1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudEJvYXJkLnBvcHVsYXRlU2hpcChzaXplLCB4LCB5LCBcImVhc3RcIik7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgXCJlYXN0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhwbGFjZW1lbnRDb250YWluZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwbGFjZW1lbnRDb250YWluZXIpO1xuICAgICAgICAgICAgcGxhY2VtZW50TW9kdWxlTG9hZGVyKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2lkJywgY29vcmRpbmF0ZS5YICsgY29vcmRpbmF0ZS5ZKTtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYWdPdmVyXCIpO1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEcm9wXCIpO1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZGF0YSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICAgICAgbGV0IHNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZSA9IGV2LnRhcmdldC5pZDtcbiAgICAgICAgbGV0IHNpemUgPSBkYXRhO1xuICAgICAgICBsZXQgeCA9IGNvb3JkaW5hdGVbMF07XG4gICAgICAgIGxldCB5ID0gY29vcmRpbmF0ZVsxXTtcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVbMl0gPT0gMCkge1xuICAgICAgICAgICAgbGV0IGFycmF5ID0gW2Nvb3JkaW5hdGVbMV0sIGNvb3JkaW5hdGVbMl1dXG4gICAgICAgICAgICB5ID0gYXJyYXkuam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0YXJ0aW5nU3F1YXJlID0gcGxhY2VtZW50Qm9hcmQuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0geCAmJiBzcXVhcmUuWSA9PSB5KSk7XG4gICAgICAgIGlmIChzdGFydGluZ1NxdWFyZS5jb250YWluc1NoaXAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdGF0aW9uVHJhY2tlciA9PSAwKSB7XG4gICAgICAgICAgICBwb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBcImVhc3RcIik7XG4gICAgICAgICAgICBwbGFjZW1lbnRCb2FyZC5wb3B1bGF0ZVNoaXAoc2l6ZSwgeCwgeSwgXCJlYXN0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgXCJzb3V0aFwiKTtcbiAgICAgICAgICAgIHBsYWNlbWVudEJvYXJkLnBvcHVsYXRlU2hpcChzaXplLCB4LCB5LCBcInNvdXRoXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMocGxhY2VtZW50Q29udGFpbmVyKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwbGFjZW1lbnRDb250YWluZXIpO1xuICAgICAgICBzaGlwQ291bnQucHVzaChzaXplKTtcbiAgICAgICAgcGxhY2VtZW50TW9kdWxlTG9hZGVyKCk7XG4gICAgfSlcbiAgICByZXR1cm4gc3F1YXJlO1xufVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbmZ1bmN0aW9uIHNlbGVjdFNoaXBCb2FyZExvYWRlcihib2FyZCkge1xuICAgIGxldCBhcnJheU9mR3JpZENvb3JkaW5hdGVzID0gYm9hcmQuZ3JpZDtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY29udGFpbmVyJyk7XG4gICAgYXJyYXlPZkdyaWRDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGxldCBzcXVhcmUgPSBzZWxlY3RTaGlwU3F1YXJlTG9hZGVyKGNvb3JkaW5hdGUpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9KVxuICAgIHJldHVybiBjb250YWluZXI7XG59O1xuZnVuY3Rpb24gc2VsZWN0U2hpcFBsYXllckNvb3JkaW5hdGVkQm9hcmRMb2FkZXIoYm9hcmQpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZUJvYXJkQ29udGFpbmVyJylcbiAgICBsZXQgc3ViY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1YmNvbnRhaW5lcicpO1xuICAgICAgICBzdWJjb250YWluZXIuYXBwZW5kQ2hpbGQoeUNvb3JkaW5hdGVMb2FkZXIoKSk7XG4gICAgICAgIHN1YmNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RTaGlwQm9hcmRMb2FkZXIoYm9hcmQpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHhDb29yZGluYXRlTG9hZGVyKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViY29udGFpbmVyKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcbmZ1bmN0aW9uIHBsYWNlbWVudEJvYXJkTG9hZGVyKCkge1xuICAgIHJldHVybiBzZWxlY3RTaGlwUGxheWVyQ29vcmRpbmF0ZWRCb2FyZExvYWRlcihwbGFjZW1lbnRCb2FyZCk7XG59O1xuY29uc3Qgc291cmNlID0gXCJcIjtcbmZ1bmN0aW9uIHJvdGF0ZVNoaXBCdXR0b25Mb2FkZXIoKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUm90YXRlXCI7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudEJ1dHRvbicpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvdGF0ZVNoaXBCdXR0b24nKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJvdGF0ZU9uQ2xpY2soKVxuICAgIH0pO1xuICAgIHJldHVybiBidXR0b247XG59XG5mdW5jdGlvbiByb3RhdGVPbkNsaWNrKCkge1xuICAgIC8vbGV0IGNsYXNzQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYuc2luZ2xlU2hpcENsYXNzQ29udGFpbmVyXCIpO1xuICAgIGxldCBpbmRpdmlkdWFsU2hpcENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LnNoaXBcIik7XG4gICAgaW5kaXZpZHVhbFNoaXBDb250YWluZXJzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcImNvbHVtblwiKSB7IG5vZGUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7IHJvdGF0aW9uVHJhY2tlciA9IDA7IH1cbiAgICAgICAgZWxzZSB7IG5vZGUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7IHJvdGF0aW9uVHJhY2tlciA9IDE7IH1cbiAgICB9KTtcbiAgICAvL2NsYXNzQ29udGFpbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIC8vaWYgKHJvdGF0aW9uVHJhY2tlciA9PSAxKSB7IG5vZGUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7IH1cbiAgICAgICAgLy9lbHNlIHsgbm9kZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjsgfVxuICAgIC8vfSlcbiAgICBjaGVja0NsYXNzQ29udGFpbmVyT3JpZW50YXRpb24oKTtcbn1cbi8vdGhpcyBmdW5jdGlvbiBjaGVja3Mgd2hldGhlciB0byBhcnJhbmdlIHNoaXBzIGluIHJvd3Mgb3IgY29sdW1ucyB3aXRoaW4gdGhlaXIgY2xhc3MgY29udGFpbmVyc1xuZnVuY3Rpb24gY2hlY2tDbGFzc0NvbnRhaW5lck9yaWVudGF0aW9uKCkge1xuICAgIGxldCBjbGFzc0NvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LnNpbmdsZVNoaXBDbGFzc0NvbnRhaW5lclwiKTtcbiAgICBjbGFzc0NvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAocm90YXRpb25UcmFja2VyID09IDEpIHsgbm9kZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjsgfVxuICAgICAgICBlbHNlIHsgbm9kZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjsgfVxuICAgIH0pO1xufVxuLy9UaGlzIHJvdGF0aW9uVHJhY2tlciB0ZWxscyB0aGUgc2hpcE1ha2VyKCkgd2hldGhlciB0byBwb3NpdGlvbiBzaGlwcyB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseS5cbiAgICAvLzAgY29tbWFuZHMgc2hpcE1ha2VyKCkgdG8gcG9zaXRpb24gc2hpcHMgaG9yaXpvbnRhbGx5LCAxIHZlcnRpY2FsbHkuXG4gICAgLy9JdCB0cmFja3Mgd2hldGhlciAvIHdoZW4gcm90YXRlT25DbGljaygpIGhhcyByb3RhdGVkIHNoaXBzIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LlxubGV0IHJvdGF0aW9uVHJhY2tlciA9IDA7XG5mdW5jdGlvbiBzaGlwTWFrZXIoc2l6ZSkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBzaXplKTtcbiAgICBpZiAocm90YXRpb25UcmFja2VyID09IDEpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgIH1cbiAgICBpZiAocm90YXRpb25UcmFja2VyID09IDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgIH1cbiAgICB3aGlsZSAoc2l6ZSA+PSAxKSB7XG4gICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudFNxdWFyZScpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgICAgc2l6ZSA9IHNpemUgLSAxO1xuICAgIH1cbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdHJhbnNmZXJEYXRhT25EcmFnc3RhcnQpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiB0cmFuc2ZlckRhdGFPbkRyYWdzdGFydChldikge1xuICAgICAvLyBDaGFuZ2UgdGhlIHNvdXJjZSBlbGVtZW50J3MgYmFja2dyb3VuZCBjb2xvclxuICAgICAgICAvLyB0byBzaG93IHRoYXQgZHJhZyBoYXMgc3RhcnRlZFxuICAgICAgICBldi5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKTtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIGRyYWcgZGF0YSBjYWNoZSAoZm9yIGFsbCBmb3JtYXRzL3R5cGVzKVxuICAgICAgICBldi5kYXRhVHJhbnNmZXIuY2xlYXJEYXRhKCk7XG4gICAgICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBldi50YXJnZXQuaWQpO1xuICAgICAgICBjb25zdCBkYXRhID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgICBzb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKTtcbiAgICAgICAgZXYuY3VycmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCB0cmFuc2ZlckRhdGFPbkRyYWdzdGFydCk7XG59XG5mdW5jdGlvbiBib3R0b21TdWJjb250YWluZXJMb2FkZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib3R0b21TdWJjb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm90YXRlU2hpcEJ1dHRvbkxvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENvdW50ZXIoKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIHNoaXBDb3VudGVyKCkge1xuICAgIGxldCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlwQWxsQ2xhc3Nlc0NvbnRhaW5lcicpO1xuICAgIGxldCBzaXplVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2l6ZVR3by5jbGFzc0xpc3QuYWRkKCdzaW5nbGVTaGlwQ2xhc3NDb250YWluZXInKTtcbiAgICBsZXQgc2l6ZVRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2l6ZVRocmVlLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZVNoaXBDbGFzc0NvbnRhaW5lcicpO1xuICAgIGxldCBzaXplRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpemVGb3VyLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZVNoaXBDbGFzc0NvbnRhaW5lcicpO1xuICAgIGlmIChyb3RhdGlvblRyYWNrZXIgPT0gMSkge1xuICAgICAgICBzaXplVHdvLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgICBzaXplVGhyZWUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICAgIHNpemVGb3VyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgIH1cbiAgICBpZiAoc2hpcENvdW50LmZpbHRlcih4ID0+IHggPT0gMikubGVuZ3RoID09IDApIHtcbiAgICAgICAgc2l6ZVR3by5hcHBlbmRDaGlsZChzaGlwTWFrZXIoMikpO1xuICAgICAgICBzaXplVHdvLmFwcGVuZENoaWxkKHNoaXBNYWtlcigyKSk7XG4gICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2l6ZVR3byk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNoaXBDb3VudC5maWx0ZXIoeCA9PiB4ID09IDIpLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHNpemVUd28uYXBwZW5kQ2hpbGQoc2hpcE1ha2VyKDIpKTtcbiAgICAgICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaXplVHdvKTtcbiAgICB9XG4gICAgaWYgKHNoaXBDb3VudC5maWx0ZXIoeCA9PiB4ID09IDMpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHNpemVUaHJlZS5hcHBlbmRDaGlsZChzaGlwTWFrZXIoMykpO1xuICAgICAgICBzaXplVGhyZWUuYXBwZW5kQ2hpbGQoc2hpcE1ha2VyKDMpKTtcbiAgICAgICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaXplVGhyZWUpO1xuICAgIH0gZWxzZSBpZiAoc2hpcENvdW50LmZpbHRlcih4ID0+IHggPT0gMykubGVuZ3RoID09IDEpIHtcbiAgICAgICAgc2l6ZVRocmVlLmFwcGVuZENoaWxkKHNoaXBNYWtlcigzKSk7XG4gICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2l6ZVRocmVlKTtcbiAgICB9XG4gICAgaWYgKHNoaXBDb3VudC5maWx0ZXIoeCA9PiB4ID09IDQpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHNpemVGb3VyLmFwcGVuZENoaWxkKHNoaXBNYWtlcig0KSk7XG4gICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2l6ZUZvdXIpO1xuICAgIH1cbiAgICByZXR1cm4gc2hpcENvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIGNoZWNraWZTaGlwc0FyZUFsbFBsYWNlZCgpIHtcbiAgICBpZiAoc2hpcENvdW50Lmxlbmd0aCA9PSA1KSB7XG4gICAgICAgIHNpbXBsZVBvcHVsYXRlQUkoKTtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhwbGFjZW1lbnRDb250YWluZXIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHBsYWNlbWVudENvbnRhaW5lcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZW1lbnRIZWFkaW5nJyk7XG4gICAgICAgIGgudGV4dENvbnRlbnQgPSBcIlBsYWNlIEFsbCBTaGlwcyBCZWZvcmUgU3RhcnRpbmcgdGhlIEdhbWUhXCJcbiAgICAgICAgaC5zdHlsZS5jb2xvciA9IFwiI2VmNDQ0NFwiO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlc2V0U2hpcHMoKSB7XG4gICAgcGxhY2VtZW50Qm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgY2xlYXJTaGlwQ291bnQoKTtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKHBsYWNlbWVudENvbnRhaW5lcik7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwbGFjZW1lbnRDb250YWluZXIpO1xuICAgIHJlbG9hZEJvYXJkcygpO1xuICAgIHBsYWNlbWVudE1vZHVsZUxvYWRlcigpO1xufVxuZnVuY3Rpb24gY2xlYXJTaGlwQ291bnQoKSB7XG4gICAgd2hpbGUgKHNoaXBDb3VudC5sZW5ndGggPj0gMSkge1xuICAgICAgICBzaGlwQ291bnQucG9wKCk7XG4gICAgfVxufVxuXG5cbmxldCBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbmxldCBhaUJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xubGV0IHBsYXllciA9IFwidGF5bG9yXCJcbmxldCBhaSA9IFwiY29tcHV0ZXJcIlxubGV0IGJvYXJkcyA9IG5ldyBnYW1lQm9hcmRMb2FkZXIocGxheWVyQm9hcmQsIHBsYXllciwgYWlCb2FyZCwgYWkpO1xuXG5mdW5jdGlvbiBsb2FkQm9hcmRzKCkge1xuICAgIHR3b0JvYXJkRE9NTG9hZGVyKGJvYXJkcy5wbGF5ZXJCb2FyZCwgYm9hcmRzLmFpQm9hcmQpO1xuICAgIGRvdWJsZVNjb3JlS2VlcGVyR2VuZXJhdG9yKFwiUGxheWVyXCIsIDAsIFwiQUlcIiwgMCk7XG59XG5cbmNvbnN0IHBsYXllclBvcHVsYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5wbGF5ZXJQb3B1bGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpbXBsZVBvcHVsYXRlKTtcbnBsYXllclBvcHVsYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BvcHVsYXRlQnV0dG9uJyk7XG5wbGF5ZXJQb3B1bGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUG9wdWxhdGUgUGxheWVyXCI7XG5jb25zdCBhaVBvcHVsYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5haVBvcHVsYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2ltcGxlUG9wdWxhdGVBSSk7XG5haVBvcHVsYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BvcHVsYXRlQnV0dG9uJyk7XG5haVBvcHVsYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJQb3B1bGF0ZSBBSVwiO1xuY29uc3QgYXR0YWNrQUlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmF0dGFja0FJQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXR0YWNrQUkpO1xuYXR0YWNrQUlCdXR0b24uY2xhc3NMaXN0LmFkZCgncG9wdWxhdGVCdXR0b24nKTtcbmF0dGFja0FJQnV0dG9uLnRleHRDb250ZW50ID0gXCJBdHRhY2sgQUlcIjtcbmNvbnN0IGF0dGFja1BsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYXR0YWNrUGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXR0YWNrUGxheWVyKTtcbmF0dGFja1BsYXllckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwb3B1bGF0ZUJ1dHRvbicpO1xuYXR0YWNrUGxheWVyQnV0dG9uLnRleHRDb250ZW50ID0gXCJBdHRhY2sgUGxheWVyXCJcblxuZnVuY3Rpb24gcmVzdGFydEJvYXJkKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250YWluZXIpO1xuICAgIGdlbmVyYXRlSFVEKCk7XG4gICAgcmVzZXRTaGlwcygpO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVIVUQoKSB7XG4gICAgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgYWlCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICBwbGF5ZXIgPSBcInRheWxvclwiO1xuICAgIGFpID0gXCJjb21wdXRlclwiO1xuICAgIGRvdWJsZVNjb3JlS2VlcGVyR2VuZXJhdG9yKFwiUGxheWVyXCIsIDAsIFwiQUlcIiwgMCk7XG4gICAgdHdvQm9hcmRET01Mb2FkZXIoYm9hcmRzLnBsYXllckJvYXJkLCBib2FyZHMuYWlCb2FyZCk7XG4gICAgcGxhY2VtZW50TW9kdWxlTG9hZGVyKCk7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUJ1dHRvbnMoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25Db250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyUG9wdWxhdGVCdXR0b24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhaVBvcHVsYXRlQnV0dG9uKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXR0YWNrUGxheWVyQnV0dG9uKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXR0YWNrQUlCdXR0b24pO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG4gICAgZnVuY3Rpb24gc2ltcGxlUG9wdWxhdGUoKSB7XG4gICAgICAgIGJvYXJkcy5zaW1wbGVQb3B1bGF0ZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzaW1wbGVQb3B1bGF0ZUFJKCkge1xuICAgICAgICBib2FyZHMuc2ltcGxlUG9wdWxhdGVBSSgpO1xuICAgIH1cbmZ1bmN0aW9uIHBvcHVsYXRlUGxheWVyKHNpemUsIHgsIHksIGRpcmVjdGlvbikge1xuICAgIGJvYXJkcy5wb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBkaXJlY3Rpb24pO1xufTtcbmZ1bmN0aW9uIGRlcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgZGlyZWN0aW9uKSB7XG4gICAgYm9hcmRzLmRlcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgZGlyZWN0aW9uKTtcbn1cbi8vdGhpcyBmdW5jdGlvbiBpcyB1c2VkIHdpdGggdGhlIHNoaXAgcGxhY2VtZW50IG1vZHVsZVxuICAgIC8vd2hlbmV2ZXIgeW91IHJlc2V0IHNoaXAgcGxhY2VtZW50LCB5b3UgYWxzbyBuZWVkIHRvIHJlbG9hZCBwbGF5ZXIgJiBhaSBib2FyZHNcbiAgICAvL3RvIGRlbGV0ZSBhbnkgc2hpcHMgcGxhY2VkIGR1cmluZyBwcmlvciBzaGlwIHBsYWNlbWVudCBwaGFzZVxuZnVuY3Rpb24gcmVsb2FkQm9hcmRzKCkge1xuICAgIGJvYXJkcy5yZWxvYWRCb2FyZHMoKTtcbn1cblxuXG4vL2FpQXJyYXkgYmVsb3cgY29udGFpbnMgZ2xvYmFsbHkgYXZhaWxhYmxlIGNvcHkgb2YgcGxheWVyQm9hcmQgZ3JpZCwgZm9yIHVzZSBieSBBSVxuLy9ldmVyeSB0aW1lIHRoZSBBSSBhdHRhY2tzIHBsYXllciwgc2VsZWN0cyBvbmUgZWxlbWVudCBhdCByYW5kb20gZnJvbSB0aGUgYXJyYXkgYW5kIHRoZW4gcmVtb3ZlcyBpdFxuLy9zbyB0aGF0IGZ1dHVyZSBpbnZvY2F0aW9ucyBjYW5ub3QgYXR0YWNrIHRoZSBzYW1lIGxvY2F0aW9uXG5jb25zdCBhaUFycmF5ID0gYm9hcmRzLnBsYXllckJvYXJkLmdyaWQuc2xpY2UoKTtcbmZ1bmN0aW9uIGF0dGFja0FJKHgsIHkpIHtcbiAgICBsZXQgZm91bmQgPSBib2FyZHMuYWlCb2FyZC5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSB4ICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICBpZiAoZm91bmQuaXNIaXQgPT0gdHJ1ZSkgeyBhbGVydChcIllvdSBoYXZlIGFscmVhZHkgYXR0YWNrZWQgdGhhdCBzcXVhcmUhIFRyeSBhbm90aGVyLlwiKSB9XG4gICAgaWYgKGZvdW5kLmlzSGl0ID09IGZhbHNlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IGJvYXJkcy5haUJvYXJkLmdyaWQuaW5kZXhPZihmb3VuZCk7XG4gICAgICAgIGFpQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgYm9hcmRzLmF0dGFja0FJKHgsIHkpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGF0dGFja1BsYXllcigpO1xuICAgICAgICB9LCBcIjUwMFwiKTtcbiAgICB9XG59XG5cbi8vcGxheWVyQXJyYXkgYmVsb3cgY29udGFpbnMgZ2xvYmFsbHkgYXZhaWxhYmxlIGNvcHkgb2YgcGxheWVyQm9hcmQgZ3JpZCwgZm9yIHVzZSBieSBBSVxuLy9ldmVyeSB0aW1lIHRoZSBBSSBhdHRhY2tzIHBsYXllciwgc2VsZWN0cyBvbmUgZWxlbWVudCBhdCByYW5kb20gZnJvbSB0aGUgYXJyYXkgYW5kIHRoZW4gcmVtb3ZlcyBpdFxuLy9zbyB0aGF0IGZ1dHVyZSBpbnZvY2F0aW9ucyBjYW5ub3QgYXR0YWNrIHRoZSBzYW1lIGxvY2F0aW9uXG5jb25zdCBwbGF5ZXJBcnJheSA9IGJvYXJkcy5wbGF5ZXJCb2FyZC5ncmlkLnNsaWNlKCk7XG5mdW5jdGlvbiBhdHRhY2tQbGF5ZXIoKSB7XG4gICAgaWYgKHBsYXllckFycmF5Lmxlbmd0aCA9PSAwKSByZXR1cm4gYWxlcnQoJ2dhbWUgb3ZlciEnKVxuICAgIGxldCByYW5kb20gPSBwbGF5ZXJBcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwbGF5ZXJBcnJheS5sZW5ndGgpXTtcbiAgICBsZXQgeCA9IHJhbmRvbS5YO1xuICAgIGxldCB5ID0gcmFuZG9tLlk7XG4gICAgbGV0IGluZGV4ID0gcGxheWVyQXJyYXkuaW5kZXhPZihyYW5kb20pO1xuICAgIHBsYXllckFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgYm9hcmRzLmF0dGFja1BsYXllcih4LCB5KTtcbn1cbi8vc2NyaXB0aW5nIGZvcm1zIGZvciBpbnB1dHRpbmcgY29vcmRpbmF0ZXNcbmxldCB4TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xueExhYmVsLmNsYXNzTGlzdC5hZGQoJ2F0dGFja0xhYmVsJyk7XG54TGFiZWwudGV4dENvbnRlbnQgPSBcIklucHV0IFggQ29vcmRpbmF0ZTogXCJcbmxldCB4SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xueElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xubGV0IHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG55TGFiZWwuY2xhc3NMaXN0LmFkZCgnYXR0YWNrTGFiZWwnKTtcbnlMYWJlbC50ZXh0Q29udGVudCA9IFwiSW5wdXQgWSBDb29yZGluYXRlOiBcIlxubGV0IHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG55SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbmZ1bmN0aW9uIHJldHVyblhGb3JtKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHhMYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHhJbnB1dCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lclxufVxuZnVuY3Rpb24gcmV0dXJuWUZvcm0oKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoeUxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoeUlucHV0KTtcbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5mdW5jdGlvbiBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmV0dXJuWEZvcm0oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJldHVybllGb3JtKCkpO1xuICAgIHJldHVybiBjb250YWluZXJcbn1cblxuZnVuY3Rpb24gbG9hZEFwcFdpbmRvdygpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFpbmVyJyk7XG4gICAgcGxhY2VtZW50TW9kdWxlTG9hZGVyKCk7XG4gICAgbG9hZEJvYXJkcygpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGxvYWRBcHBXaW5kb3cgfSIsIi8vaW1wb3J0IHsganNQYWdlTG9hZGVyIH0gZnJvbSAnLi9tb2R1bGVzL2phdmFzY3JpcHQuanMnO1xuaW1wb3J0IHsgaG9tZVBhZ2VMb2FkZXIgfSBmcm9tICcuL21vZHVsZXMvd2hvSUFtLmpzJztcbmltcG9ydCB7IGxvYWRIb21lUGFnZSwgbG9hZEpzUGFnZSwgdmlzaXRKYXZhc2NyaXB0SFRNTCwgdmlzaXRIb21lcGFnZUhUTUwgfSBmcm9tICcuLi9uYXZGdW5jdGlvbnMuanMnO1xuXG5cbmZ1bmN0aW9uIGhlYWRlckxvYWRlcigpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG15TmFtZSgnVGF5bG9yIEJhcmlua2EnKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG15TGlua3MoKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIG15TmFtZShuYW1lKSB7XG4gICAgbGV0IG15TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbXlOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICByZXR1cm4gbXlOYW1lO1xufVxuZnVuY3Rpb24gbXlMaW5rcygpIHtcbiAgICBsZXQgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2QmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2Jyk7XG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdsaW5rc0xpc3QnKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpbmtGYWN0b3J5KCdBYm91dCBNZScsIHZpc2l0SG9tZXBhZ2VIVE1MKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaW5rRmFjdG9yeSgnSmF2YXNjcmlwdCcsIHZpc2l0SmF2YXNjcmlwdEhUTUwpKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpbmtGYWN0b3J5KCdQaGlsb3NvcGh5JykpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlua0ZhY3RvcnkoJ1RlYWNoaW5nJykpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlua0ZhY3RvcnkoJ0dhbWVzIFdyaXRpbmcnKSk7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgIHJldHVybiBuYXZCYXI7XG59XG4gICAgLy9Ob3RlIHRvIHNlbGY6IGFkZCAnbGluaycgYXMgcGFyYW10ZXIgdG8gbGlua0ZhY3Rvcnkgd2hlbiByZWFkeSB0byBpbXBsZW1lbnQgbGlua3NcbmZ1bmN0aW9uIGxpbmtGYWN0b3J5KHRleHQsIGNiID0gbnVsbCkge1xuICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IG15TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgbXlMaW5rLmlubmVySFRNTCA9IHRleHQ7XG4gICAgaWYgKGNiICE9PSBudWxsKSB7XG4gICAgICAgIG15TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNiKTtcbiAgICB9IFxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKG15TGluayk7XG4gICAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG4vL0kgbmVlZCB0byBpbXBvcnQgbG9hZEhvbWVQYWdlKCkgZnJvbSBuYXZGdW5jdGlvbnMuanMgdG8gdG8tZG8tbGlzdC9wZXJzb25hbC13ZWJzaXRlLWluaXRpYWxpemVyXG4vL2FuZCBJIGFtIHVzaW5nIHRoaXMgZnVuY3Rpb24gYmVsb3cgYXMgYW4gaW50ZXJtZWRpYXJ5LCBiZWNhdXNlIHRoZSB0d28gZmlsZXMgYXJlIHRvbyBmYXIgZnJvbSBlYWNoIG90aGVyXG4vL2luIHRoZSBmaWxlIHN5c3RlbVxuZnVuY3Rpb24gZXhwb3J0YWJsZUxvYWRIb21lUGFnZSgpIHtcbiAgICBsb2FkSG9tZVBhZ2UoKTtcbn1cblxuZXhwb3J0IHsgZXhwb3J0YWJsZUxvYWRIb21lUGFnZSwgaGVhZGVyTG9hZGVyIH07IiwiaW1wb3J0IHsgY29udGVudEJveEZhY3RvcnksIHBhcmFncmFwaEZhY3RvcnksIG1haW5Db250ZW50RmFjdG9yeSwgcmVtb3ZlQWxsQ2hpbGROb2RlcywgbWFpbkNvbnRlbnQgfSBmcm9tICcuL3dob0lBbS5qcyc7XG5pbXBvcnQgeyBwcm9maWxlTG9hZGVyIH0gZnJvbSAnLi4vcHJvZmlsZS5qcyc7XG5pbXBvcnQgeyBsb2FkV2VhdGhlckFwcCB9IGZyb20gJy4uL3dlYXRoZXItYXBwL3NyYy9kb21Mb2dpYy5qcyc7XG5pbXBvcnQgeyBsb2FkQXBwV2luZG93IH0gZnJvbSAnLi4vYmF0dGxlc2hpcC1hcHAvcGVyc29uYWwtd2Vic2l0ZS1pbml0aWFsaXplci5qcyc7XG5pbXBvcnQgeyBwZXJzb25hbFNpdGVQYWdlTG9hZGVyIH0gZnJvbSAnLi4vdG8tZG8tbGlzdC9wZXJzb25hbC13ZWJzaXRlLWluaXRpYWxpemVyLmpzJztcblxuZnVuY3Rpb24ganNQYWdlTG9hZGVyKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluQ29udGFpbmVyJyk7XG4gICAgbGV0IGpzQm94ID0gY29udGVudEJveEZhY3RvcnkoXCJXZWIgRGV2ZWxvcG1lbnRcIiwganNNYWluQ29udGVudExvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZmlsZUxvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQoanNCb3gpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBvcGVuQXBwQnV0dG9uQ3JlYXRvcih0ZXh0LCBjYiwgdXJsID0gbnVsbCkge1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdvcGVuQXBwQnV0dG9ucycpO1xuICAgIGlmICh1cmwgIT09IG51bGwpIHtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnb25jbGljaycsIHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYik7XG4gICAgfVxuICAgIHJldHVybiBidXR0b247XG59XG5mdW5jdGlvbiBvcGVuV2VhdGhlckFwcCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRXZWF0aGVyQXBwKCkpO1xufVxuZnVuY3Rpb24gb3BlbkJhdHRsZXNoaXAoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBsb2FkQXBwV2luZG93KClcbn1cblxuZnVuY3Rpb24gdmlzaXRQYWdlKCl7XG4gICAgd2luZG93LmxvY2F0aW9uPSd0YXNrLW9yZ2FuaXplci5odG1sJztcbn1cblxuZnVuY3Rpb24gb3BlblRvRG9MaXN0KCkge1xuICAgIC8vcGVyc29uYWxTaXRlUGFnZUxvYWRlcigpO1xuICAgIC8vdmlzaXRQYWdlKCk7XG4gICAgd2luZG93LmxvY2F0aW9uPSd0YXNrLW9yZ2FuaXplci5odG1sJztcbn1cbmZ1bmN0aW9uIE9wZW5BcHBCdXR0b25Db250YWluZXJDcmVhdG9yKCkge1xuICAgIGxldCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhcHBCdXR0b25Db250YWluZXInKVxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVuQXBwQnV0dG9uQ3JlYXRvcihcIldlYXRoZXIgQXBwXCIsIG9wZW5XZWF0aGVyQXBwKSk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wZW5BcHBCdXR0b25DcmVhdG9yKFwiQmF0dGxlc2hpcFwiLCBvcGVuQmF0dGxlc2hpcCkpXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wZW5BcHBCdXR0b25DcmVhdG9yKFwiVGFzayBPcmdhbml6ZXJcIiwgb3BlblRvRG9MaXN0KSlcbiAgICByZXR1cm4gYnV0dG9uQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBqc01haW5Db250ZW50TG9hZGVyKCkge1xuICAgIGxldCBwMSA9IHBhcmFncmFwaEZhY3RvcnkoXCJJIGFtIGEgZnJvbnQtZW5kIHdlYiBkZXZlbG9wZXIgcHJvZmljaWVudCBpbiBIVE1MLCBDU1MsIGFuZCBKYXZhU2NyaXB0LiBJIHRhdWdodCBteXNlbGYgaG93IHRvIHVzZSB0aGVzZSB0b29scyB3aXRoIGFuIGV4Y2VsbGVudCA8YSBocmVmPSdodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vZGFzaGJvYXJkJz4gb3BlbiBzb3VyY2UgY291cnNlPC9hPiwgYW5kIEnigJltIGluIHRoZSBwcm9jZXNzIG9mIGFjaGlldmluZyBwcm9maWNpZW5jeSBpbiBkZXZlbG9wbWVudCBvbiB0aGUgYmFjayBlbmQuXCIpO1xuICAgIGxldCBwMiA9IHBhcmFncmFwaEZhY3RvcnkoXCJJIGFtIGF0dHJhY3RlZCB0byBjb2RpbmcgZm9yIGEgY291cGxlIG9mIHJlYXNvbnMuIEZpcnN0LCBJIGxpa2UgdGhlIGlkZWEgb2YgYmVpbmcgYSBraW5kIG9mIGNyYWZ0c3BlcnNvbiB3aG8gY2FuIG1ha2UgdGhpbmdzIHRoYXQgcGVvcGxlIG5lZWQuIEl04oCZcyBob25lc3Qgd29yay4gQnV0IEkgYWxzbyBmaW5kIHRoYXQgdGhlcmUgaXMgYW4gYXJ0aXN0cnkgdG8gY29kaW5nIHdoaWNoIGlzIGEgcGxlYXN1cmUgaW4gaXRzZWxmIOKAkyB0aGUgcHJvY2VzcyBvZiBpZGVudGlmeWluZyBhIGRlc2lyZWQgcmVzdWx0IGFuZCBlbmdpbmVlcmluZyBsb2dpY2FsIHN0cnVjdHVyZXMgc3VmZmljaWVudCB0byBhY2hpZXZlIHRoZSByZXN1bHQgZ2l2ZXMgbWUgY3JlYXRpdmUgc2F0aXNmYWN0aW9uLiBJdCBoaXRzIGEgcGVyZmVjdCBpbnRlcnNlY3Rpb24gYmV0d2VlbiB3aGVyZSBJIGNhbiBiZSB1c2VmdWwgYW5kIHdoYXQgSSBjYW4gZW5qb3kuXCIpXG4gICAgbGV0IHAzID0gcGFyYWdyYXBoRmFjdG9yeShcIkhlcmUgYXJlIGEgZmV3IHByb2plY3RzIHRoYXQgSSBoYXZlIGNvbXBsZXRlZC5cIilcbiAgICBsZXQgcDQgPSBwYXJhZ3JhcGhGYWN0b3J5KFwiPGEgaHJlZj0naHR0cDovL2luZGl2aWR1YWwudXRvcm9udG8uY2EvcmJhcm5leS9Ib21lLmh0bWwnPlRoaXMgaXMgdGhlIHBlcnNvbmFsIHdlYnNpdGU8L2E+IG9mIGEgcHJvZmVzc2lvbmFsIGFjcXVhaW50YW5jZSB3aG9zZSBjb250ZW50IEkgd2FzIGNvbnRyYWN0ZWQgdG8gdXBkYXRlIGFuZCBwdWJsaXNoLiBUaGlzIGludm9sdmVkIG1vZGlmeWluZyBhbiBleGlzdGluZyBjb2RlYmFzZSBhbmQgY29tcG9zaW5nIGEgc2V0IG9mIGluc3RydWN0aW9ucyB0byBoZWxwIHN0cmVhbWxpbmUgdGhlIHByb2Nlc3Mgb2YgbW9kaWZ5aW5nIGZ1dHVyZSBpdGVyYXRpb25zIG9mIHRoZSBzaXRlLlwiKTtcbiAgICBsZXQgcDUgPSBwYXJhZ3JhcGhGYWN0b3J5KFwiSGVyZSBhcmUgYSBmZXcgb3RoZXIgcHJvamVjdHMgdGhhdCBJJ3ZlIGNyZWF0ZWQuIFNlbGVjdCB0aGUgb25lIHRoYXQgeW91IHdhbnQgdG8gc2VlLlwiKVxuICAgIFxuICAgIGxldCBqc0NvbnRlbnQgPSBtYWluQ29udGVudEZhY3RvcnkoKTtcbiAgICBqc0NvbnRlbnQuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGpzQ29udGVudC5hcHBlbmRDaGlsZChwMik7XG4gICAganNDb250ZW50LmFwcGVuZENoaWxkKHAzKTtcbiAgICBqc0NvbnRlbnQuYXBwZW5kQ2hpbGQocDQpO1xuICAgIGpzQ29udGVudC5hcHBlbmRDaGlsZChwNSk7XG4gICAganNDb250ZW50LmFwcGVuZENoaWxkKE9wZW5BcHBCdXR0b25Db250YWluZXJDcmVhdG9yKCkpO1xuICAgIHJldHVybiBqc0NvbnRlbnQ7XG59XG5cblxuZXhwb3J0IHsganNQYWdlTG9hZGVyIH07IiwiaW1wb3J0IHsgY29udGVudEJveEZhY3RvcnksIHBhcmFncmFwaEZhY3RvcnksIG1haW5Db250ZW50RmFjdG9yeSB9IGZyb20gJy4vd2hvSUFtLmpzJztcblxubGV0IHBoaWxQYXJhMSA9IHBhcmFncmFwaEZhY3RvcnkoXCJJIGRpZCBzaXggeWVhcnMgb2YgZ3JhZHVhdGUgd29yayBpbiBQaGlsb3NvcGh5IGF0IHRoZSBVbml2ZXJzaXRpZXMgb2YgT3hmb3JkIGFuZCBUb3JvbnRvLiBNeSBhcmVhIG9mIGV4cGVydGlzZSBpcyBBbmNpZW50IEdyZWVrIGFuZCBSb21hbiBQaGlsb3NvcGh5LCBhbmQgbXkgaW5xdWlyaWVzIHR5cGljYWxseSBzZWVrIHRvIHVuZGVyc3RhbmQgd2hhdCBhbmNpZW50IHBoaWxvc29waGVycyB0aG91Z2h0IHdhcyB0aGUgb3JpZ2luIGFuZCBuYXR1cmUgb2Ygb2JqZWN0aXZlIHZhbHVlcy5cIik7XG5sZXQgcGhpbFBhcmEyID0gcGFyYWdyYXBoRmFjdG9yeShcIllvdSBjYW4gZmluZCBhIHNhbXBsZSBteSByZXNlYXJjaCBoZXJlLiBUaGlzIGVzc2F5LCB3aGljaCBJIHByZXNlbnRlZCBhdCB0aGUgUmFja2hhbSBJbnRlcmRpc2NpcGxpbmFyeSBXb3Jrc2hvcCBpbiBBbmNpZW50IFBoaWxvc29waHkgYXQgdGhlIFVuaXZlcnNpdHkgb2YgTWljaGlnYW4sIGRlc2NyaWJlcyB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4gUGxhdG8ncyB0aGVvcnkgb2YgdmlydHVlLCBhbmQgaGlzIGNvbmNlcHRpb24gb2YgZGl2aW5lIGxhdy4gUGxhdG8sIEkgYXJndWUsIGRlZmVuZGVkIHRoZSB2aWV3IHRoYXQgR29kJ3MgbGF3IGdvdmVybnMgdmlydHVvdXMgY29uZHVjdC4gSXQncyBhIHNpbXBsZSBhcmd1bWVudCwgYnV0IGl0IGNvbnRyYWRpY3RzIHByZXZhaWxpbmcgb3J0aG9kb3h5IGluIHNjaG9sYXJzaGlwIG9uIEFuY2llbnQgR3JlZWsgUGhpbG9zb3BoeSwgd2hpY2ggaG9sZHMgdGhhdCBkaXZpbmUgbGF3IHRoZW9yaWVzIG9mIGV0aGljcyBmaXJzdCBvcmlnaW5hdGUgd2l0aCB0aGUgU3RvaWNzLiBCdXQgUGxhdG8gd3JpdGVzIGluIGFuIGVhcmxpZXIgY2VudHVyeS5cIilcbmxldCBwaGlsUGFyYTMgPSBwYXJhZ3JhcGhGYWN0b3J5KFwiTXkgb3RoZXIgbWFpbiBhcmVhIG9mIGludGVyZXN0IGlzIHRoZSBoaXN0b3J5IG9mIHBoaWxvc29waGljYWwgdGhlb3JpZXMgb2YgYmVhdXR5LiBIZXJlIGlzIGEgbGluayB0byBhIHBhcGVyIHdoZXJlIEkgaW52ZXN0aWdhdGUgQXJ0aHVyIFNjaG9wZW5oYXVlcidzIHVuZGVyc3RhbmRpbmcgb2Ygd2hhdCBleGFjdGx5IGh1bWFuIGJlaW5ncyBncmFzcCB3aXRoIHRoZWlyIG1pbmRzIHdoZW4gdGhleSBncmFzcCB0aGF0IHNvbWV0aGluZyBpcyBiZWF1dGlmdWwuIEkgbGlrZSB0byB0aGluayB0aGF0IFNjaG9wZW5oYXVlciBpcyBjbG9zZSB0byB0aGUgdHJ1dGggYWJvdXQgdGhpcyBpc3N1ZS5cIilcblxuXG5sZXQgcGhpbENvbnRlbnQgPSBtYWluQ29udGVudEZhY3RvcnkoKTtcbnBoaWxDb250ZW50LmFwcGVuZENoaWxkKHBoaWxQYXJhMSk7XG5waGlsQ29udGVudC5hcHBlbmRDaGlsZChwaGlsUGFyYTIpO1xucGhpbENvbnRlbnQuYXBwZW5kQ2hpbGQocGhpbFBhcmEzKTtcblxubGV0IHBoaWxvc29waHlCb3ggPSBjb250ZW50Qm94RmFjdG9yeShcIlBoaWxvc29waHlcIiwgcGhpbENvbnRlbnQpO1xuXG5leHBvcnQgeyBwaGlsb3NvcGh5Qm94IH0iLCJpbXBvcnQgeyBwcm9maWxlTG9hZGVyIH0gZnJvbSAnLi4vcHJvZmlsZS5qcyc7XG5pbXBvcnQgeyBwaGlsb3NvcGh5Qm94IH0gZnJvbSAnLi9waGlsb3NvcGh5LmpzJztcbi8vaW1wb3J0IHsganNCb3ggfSBmcm9tICcuL21vZHVsZXMvamF2YXNjcmlwdC5qcyc7XG5cbmZ1bmN0aW9uIGhvbWVQYWdlTG9hZGVyKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluQ29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2ZpbGVMb2FkZXIoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db250ZW50KHdob0lBbSkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiBtYWluQ29udGVudChub2RlKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAvL2NvbnRhaW5lci5hcHBlbmRDaGlsZChqc0JveCk7XG4gICAgLy9jb250YWluZXIuYXBwZW5kQ2hpbGQocGhpbG9zb3BoeUJveCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50Lmhhc0NoaWxkTm9kZXMoKSA9PSB0cnVlKSB7XG4gICAgICAgIHBhcmVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbn1cblxubGV0IHdob0lBbVBhcmExID0gcGFyYWdyYXBoRmFjdG9yeShcIkF0IHZlcm8gZW9zIGV0IGFjY3VzYW11cyBldCBpdXN0byBvZGlvIGRpZ25pc3NpbW9zIGR1Y2ltdXMgcXVpIGJsYW5kaXRpaXMgcHJhZXNlbnRpdW0gdm9sdXB0YXR1bSBkZWxlbml0aSBhdHF1ZSBjb3JydXB0aSBxdW9zIGRvbG9yZXMgZXQgcXVhcyBtb2xlc3RpYXMgZXhjZXB0dXJpIHNpbnQgb2NjYWVjYXRpIGN1cGlkaXRhdGUgbm9uIHByb3ZpZGVudCwgc2ltaWxpcXVlIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0aWEgYW5pbWksIGlkIGVzdCBsYWJvcnVtIGV0IGRvbG9ydW0gZnVnYS4gRXQgaGFydW0gcXVpZGVtIHJlcnVtIGZhY2lsaXMgZXN0IGV0IGV4cGVkaXRhIGRpc3RpbmN0aW8uXCIpO1xubGV0IHdob0lBbSA9IGNvbnRlbnRCb3hGYWN0b3J5KFwiV2hvIEkgQW1cIiwgd2hvSUFtUGFyYTEpO1xuXG5cbmZ1bmN0aW9uIGhlYWRlckZhY3RvcnkoaGVhZGVyKSB7XG4gICAgbGV0IGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGguY2xhc3NMaXN0LmFkZCgnY29udGVudEhlYWRlcicpO1xuICAgIGgudGV4dENvbnRlbnQgPSBoZWFkZXI7XG4gICAgcmV0dXJuIGg7XG59XG5mdW5jdGlvbiBwYXJhZ3JhcGhGYWN0b3J5KHBhcmEpIHtcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRQYXJhZ3JhcGgnKTtcbiAgICBwLmlubmVySFRNTCA9IHBhcmE7XG4gICAgcmV0dXJuIHA7XG59XG5mdW5jdGlvbiBtYWluQ29udGVudEZhY3RvcnkoKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdzaXRlQ29udGVudCcpO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBjb250ZW50Qm94RmFjdG9yeShoZWFkZXIsIGNvbnRlbnQpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRCb3gnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyRmFjdG9yeShoZWFkZXIpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgaG9tZVBhZ2VMb2FkZXIsIGNvbnRlbnRCb3hGYWN0b3J5LCBwYXJhZ3JhcGhGYWN0b3J5LCBtYWluQ29udGVudEZhY3RvcnksIG1haW5Db250ZW50LCByZW1vdmVBbGxDaGlsZE5vZGVzIH07IiwiaW1wb3J0IFBob3RvIGZyb20gJy4vdGVtcEltYWdlLmpwZyc7XG5cbmZ1bmN0aW9uIHByb2ZpbGVMb2FkZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2ZpbGUnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZmlsZVBob3RvKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRyb2R1Y3Rpb24oKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIHByb2ZpbGVQaG90bygpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHByb2ZpbGVQaG90byA9IG5ldyBJbWFnZSgpO1xuICAgIHByb2ZpbGVQaG90by5zcmMgPSBQaG90bztcbiAgICBwcm9maWxlUGhvdG8uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9maWxlUGhvdG8nKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9maWxlUGhvdG8pO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiBpbnRyb2R1Y3Rpb24oKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChteU5hbWUoKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKG15RGVzY3JpcHRvcnMoKSk7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIG15TmFtZSgpIHtcbiAgICBsZXQgaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaC50ZXh0Q29udGVudCA9IFwiVGF5bG9yIEJhcmlua2FcIjtcbiAgICBoLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvZmlsZU5hbWUnKTtcbiAgICByZXR1cm4gaDtcbn1cbmZ1bmN0aW9uIG15RGVzY3JpcHRvcnMoKSB7XG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9IFwiUmVzZWFyY2hlciAtIEVkdWNhdG9yIC0gV3JpdGVyIC0gUHJvZ3JhbW1lci5cIlxuICAgIHAuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9maWxlRGVzY3JpcHRpb24nKVxuICAgIHJldHVybiBwO1xufVxuZXhwb3J0IHsgcHJvZmlsZUxvYWRlciB9OyIsImltcG9ydCBwbHVzIGZyb20gJy4vaW1hZ2VzL3BsdXMucG5nJztcbmltcG9ydCBjaGVja2xpc3QgZnJvbSAnLi9pbWFnZXMvY2xpcGJvYXJkLWNoZWNrLW11bHRpcGxlLW91dGxpbmUucG5nJztcbmltcG9ydCBtZGlUcmFzaENhbk91dGxpbmUgZnJvbSAnLi9pbWFnZXMvbWRpVHJhc2hDYW5PdXRsaW5lLnBuZyc7XG5pbXBvcnQgeyBpc1NhbWVXZWVrLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBleHBvcnRhYmxlTG9hZEhvbWVQYWdlIH0gZnJvbSAnLi4vaGVhZGVyLmpzJztcblxuZnVuY3Rpb24gcGVyc29uYWxTaXRlUGFnZUxvYWRlcigpIHtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGRvY3VtZW50LmJvZHkpO1xuICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdpZCcsICdib2R5Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2FkSGVhZGVyZm9yUGVyc29uYWxXZWJzaXRlKCkpO1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2FkU2lkZWJhckRPTSgpKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgbWFpbkRPTUxvYWRBbGwoKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5cbi8vaGVhZGVyIGZ1bmN0aW9uc1xuXG5mdW5jdGlvbiBsb2FkSGVhZGVyZm9yUGVyc29uYWxXZWJzaXRlKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXJDb250YWluZXInKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobGVmdEhlYWRlckNvbnRlbnQoKSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJpZ2h0SGVhZGVyQ29udGVudCgpKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBsZWZ0SGVhZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdEhlYWRlckNvbnRlbnQnKTtcbiAgICBjb25zdCBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBoLmNsYXNzTGlzdC5hZGQoXCJ0b0RvXCIpXG4gICAgICAgIGgudGV4dENvbnRlbnQgPSBcIlRvRG9MaXN0XCJcbiAgICBsZWZ0LmFwcGVuZENoaWxkKGhlYWRlckljb24oKSlcbiAgICBsZWZ0LmFwcGVuZENoaWxkKGgpO1xuICAgIHJldHVybiBsZWZ0XG59XG5mdW5jdGlvbiBoZWFkZXJJY29uKCkge1xuICAgIGxldCBpY29uID0gbmV3IEltYWdlKCk7XG4gICAgaWNvbi5zcmMgPSBjaGVja2xpc3Q7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJJY29uJyk7XG4gICAgcmV0dXJuIGljb247XG59XG5mdW5jdGlvbiByaWdodEhlYWRlckNvbnRlbnQoKSB7XG4gICAgbGV0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHQuc2V0QXR0cmlidXRlKCdpZCcsICdvcmdhbml6ZXJSaWdodEhlYWRlckNvbnRlbnQnKTtcbiAgICByaWdodC5hcHBlbmRDaGlsZChyZW1vdmVBcHBUZXh0KCkpO1xuICAgIHJpZ2h0LmFwcGVuZENoaWxkKHJlbW92ZUFwcEJ0bigpKTtcbiAgICByZXR1cm4gcmlnaHQ7XG59XG5mdW5jdGlvbiByZW1vdmVBcHBUZXh0KCkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIkV4aXQgdG8gV2Vic2l0ZVwiO1xuICAgIHJldHVybiBkaXZcbn1cbmZ1bmN0aW9uIHJlbW92ZUFwcEJ0bigpIHtcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVtb3ZlT3Jnbml6ZXJCdG4nKTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVBcHApXG4gICAgcmV0dXJuIGJ0bjtcbn1cbmZ1bmN0aW9uIHJlbW92ZUFwcCgpIHtcbiAgICB3aW5kb3cubG9jYXRpb249J2luZGV4Lmh0bWwnO1xuICAgIC8vbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xuICAgIC8vcmVtb3ZlQWxsQ2hpbGROb2Rlcyhib2R5KTtcbiAgICAvL3doaWxlICh1c2VyVGFza3MubGVuZ3RoID4gMCkge1xuICAgIC8vICAgIHVzZXJUYXNrcy5wb3AoKTtcbiAgICAvL31cbiAgICAvL2V4cG9ydGFibGVMb2FkSG9tZVBhZ2UoKTsgLy90aGlzIGNhbGxzIGxvYWRIb21lUGFnZSgpIGZyb20gbmF2RnVuY3Rpb25zLmpzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9idXQgdGhyb3VnaCBhbiBpbnRlcm1lZGlhcnkgZXhwb3J0ZWQgZnJvbSBzaXRlLWNvbnRlbnRzL2hlYWRlci5qc1xufVxuXG4vL3NpZGViYXIgZnVuY3Rpb25zXG5mdW5jdGlvbiBsb2FkU2lkZWJhckRPTSgpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0J1dHRvbigpKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGNyZWF0ZUFsbCgpKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGNyZWF0ZVRvZGF5KCkpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGhpc1dlZWsoKSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFySXRlbUludGVncmF0ZXIoXCJMaXN0c1wiLCBcInlcIikpO1xuICAgIHJldHVybiBzaWRlYmFyO1xufVxuXG4gICAgLy9UaGVzZSBmdW5jdGlvbnMgYWRkIGNyZWF0ZSBpbmRpdmlkdWFsIHNpZGViYXIgaXRlbXMgd2l0aCBldmVudCBsaXN0ZW5lcnNcbiAgICBmdW5jdGlvbiBjcmVhdGVBbGwoKSB7XG4gICAgICAgIGNvbnN0IGFsbCA9IHNpZGViYXJJdGVtSW50ZWdyYXRlcihcIkFsbFwiKTtcbiAgICAgICAgYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWFpbkRPTUxvYWRBbGwoKSk7XG4gICAgICAgIGFsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FsbCcpO1xuICAgICAgICByZXR1cm4gYWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVUb2RheSgpIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBzaWRlYmFySXRlbUludGVncmF0ZXIoXCJUb2RheVwiKVxuICAgICAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1haW5ET01Mb2FkVG9kYXkoKSk7XG4gICAgICAgIHRvZGF5LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kYXknKTtcbiAgICAgICAgcmV0dXJuIHRvZGF5XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRoaXNXZWVrKCkge1xuICAgICAgICBjb25zdCB0aGlzV2VlayA9IHNpZGViYXJJdGVtSW50ZWdyYXRlcihcIlRoaXMgV2Vla1wiKVxuICAgICAgICB0aGlzV2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1haW5ET01Mb2FkVGhpc1dlZWsoKSk7XG4gICAgICAgIHRoaXNXZWVrLnNldEF0dHJpYnV0ZSgnaWQnLCAndGhpc1dlZWsnKTtcbiAgICAgICAgcmV0dXJuIHRoaXNXZWVrXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyQWRkVGFza0J1dHRvbicpXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVRhc2snKTtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBDcmVhdGUgYSBUYXNrXCJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZVRhc2tET01Mb2FkKCkpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbmZ1bmN0aW9uIHNpZGViYXJJdGVtSW50ZWdyYXRlcih0aXRsZSwgdG9nZ2xlUmlnaHRDb21wb25lbnQpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZiAodG9nZ2xlUmlnaHRDb21wb25lbnQgPT0gXCJ5XCIpIHtcbiAgICAgICAgY29uc3QgdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b3AuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckludGVncmF0ZWRJdGVtJyk7XG4gICAgICAgIHRvcC5hcHBlbmRDaGlsZChsZWZ0U2lkZWJhckNvbXBvbmVudCh0aXRsZSkpO1xuICAgICAgICB0b3AuYXBwZW5kQ2hpbGQocmlnaHRTaWRlYmFyQWRkSXRlbSgpKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRvcCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0c0NvbnRlbnQoKSk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckludGVncmF0ZWRJdGVtMicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsZWZ0U2lkZWJhckNvbXBvbmVudCh0aXRsZSkpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJJbnRlZ3JhdGVkSXRlbScpO1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ1NpZGVCYXJJdGVtUmlnaHRDb21wb25lbnQnKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH0gXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuXG5mdW5jdGlvbiBsZWZ0U2lkZWJhckNvbXBvbmVudCh0aXRsZSkge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdTaWRlQmFySXRlbUxlZnRDb21wb25lbnQnKTtcblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaGVhZGVyKHRpdGxlKSk7XG4gICAgcmV0dXJuIGl0ZW07XG59O1xuXG4gICAgZnVuY3Rpb24gaGVhZGVyKHRpdGxlKSB7XG4gICAgICAgIGNvbnN0IHNpZGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgICAgIHNpZGVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2lkZUJhckhlYWRlcicpO1xuICAgICAgICBzaWRlSGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIHJldHVybiBzaWRlSGVhZGVyO1xuICAgIH07XG5cbmZ1bmN0aW9uIHJpZ2h0U2lkZWJhckFkZEl0ZW0oKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3NpZGVCYXJJdGVtUmlnaHRDb21wb25lbnQnKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGFkZEJ1dHRvbigpKTtcbiAgICByZXR1cm4gaXRlbTtcbn1cbiAgICBmdW5jdGlvbiBhZGRCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NpZGVCYXJSaWdodENvbXBvbmVudEJ1dHRvbkNvbnRhaW5lcicpXG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgYWRkQnRuLnNyYyA9IHBsdXM7XG4gICAgICAgICAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnc2lkZUJhclJpZ2h0Q29tcG9uZW50QnV0dG9uJylcbiAgICAgICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZExpc3RDYXJkRE9NTG9hZChcIkNhbmNlbFwiLCBcIkNyZWF0ZVwiKSk7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChhZGRCdG4pO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgICAgICB9XG5cblxuZnVuY3Rpb24gbGlzdHNDb250ZW50KCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImxpc3RDb250YWluZXJcIik7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuLy9tYWluRE9NZnVuY3Rpb25zXG5cbmZ1bmN0aW9uIG1haW5ET01Mb2FkTGlzdChsaXN0VGl0bGUpIHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5Db250YWluZXInKTtcbiAgICBcbiAgICBjb250ZW50Lmxhc3RDaGlsZC5yZW1vdmUoKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkludGVncmF0b3JMaXN0TG9hZGVyKGxpc3RUaXRsZSkpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGxldCBsaXN0cyA9IGNvbnRlbnQuZmlyc3RDaGlsZC5sYXN0Q2hpbGQubGFzdENoaWxkO1xuICAgIGlmIChsaXN0cy5oYXNDaGlsZE5vZGVzKCkgPT0gdHJ1ZSkge1xuICAgICAgICBsaXN0cy5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgICBsaXN0cy5hcHBlbmRDaGlsZChsb2FkRE9NU2lkZWJhckxpc3RzKCkpO1xuICAgIGNoZWNrU2VsZWN0ZWRMaXN0SXRlbXMoKTtcbiAgICB1bnNlbGVjdFRvcDNTaWRlYmFySXRlbXMoKTtcbn1cblxuICAgIGZ1bmN0aW9uIGNoZWNrU2VsZWN0ZWRMaXN0SXRlbXMoKSB7XG4gICAgICAgIGxldCBub2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyTGlzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgbGV0IHNlY29uZE5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2lkZWJhckxpc3RJdGVtQ29udGFpbmVyU2VsZWN0ZWQnKTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Vjb25kTm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gbm9kZUxpc3RbaV07XG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJyk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXJMaXN0SXRlbUNvbnRhaW5lclNlbGVjdGVkJyk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJMaXN0SXRlbUNvbnRhaW5lcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBub2RlTGlzdFtpXTtcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5Db250YWluZXInKTtcbiAgICAgICAgICAgIGlmIChpdGVtLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPT0gbWFpbkNvbnRhaW5lci5maXJzdENoaWxkLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXJMaXN0SXRlbUNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnc2lkZWJhckxpc3RJdGVtQ29udGFpbmVyU2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXJMaXN0SXRlbUNvbnRhaW5lclNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyTGlzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgIH1cbiAgICBmdW5jdGlvbiB1bnNlbGVjdFRvcDNTaWRlYmFySXRlbXMoKSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgbGV0IGFsbCA9IGNvbnRlbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICBsZXQgdG9kYXkgPSBjb250ZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5uZXh0U2libGluZztcbiAgICAgICAgbGV0IHRoaXNXZWVrID0gY29udGVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICAgIGlmIChhbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFySXRlbVNlbGVjdGVkJykpIHthbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhckl0ZW1TZWxlY3RlZCcpICYmIGFsbC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFySW50ZWdyYXRlZEl0ZW0nKX1cbiAgICAgICAgaWYgKHRvZGF5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhckl0ZW1TZWxlY3RlZCcpKSB7dG9kYXkuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhckl0ZW1TZWxlY3RlZCcpICYmIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJJbnRlZ3JhdGVkSXRlbScpfVxuICAgICAgICBpZiAodGhpc1dlZWsuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFySXRlbVNlbGVjdGVkJykpIHt0aGlzV2Vlay5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFySXRlbVNlbGVjdGVkJykgJiYgdGhpc1dlZWsuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckludGVncmF0ZWRJdGVtJyl9XG5cbiAgICB9XG5cblxuZnVuY3Rpb24gbWFpbkludGVncmF0b3JMaXN0TG9hZGVyKHRpdGxlKSB7XG4gICAgY29uc3QgaW50ZWdyYXRlZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW50ZWdyYXRlZEl0ZW0uY2xhc3NMaXN0LmFkZCgnaW50ZWdyYXRlZEl0ZW0nKTtcbiAgICBcbiAgICBpbnRlZ3JhdGVkSXRlbS5hcHBlbmRDaGlsZCh0aXRsZUxvYWRlcih0aXRsZSkpO1xuICAgIGludGVncmF0ZWRJdGVtLmFwcGVuZENoaWxkKGxvYWRMaXN0KHRpdGxlKSk7XG4gICAgcmV0dXJuIGludGVncmF0ZWRJdGVtO1xufVxuXG5mdW5jdGlvbiBsb2FkTGlzdChsaXN0VGl0bGUpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3RDb250ZW50Q29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBhcnJheSA9IGZpbHRlclRhc2tzdG9MaXN0KGxpc3RUaXRsZSk7XG4gICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW1JbnRlZ3JhdG9yKGVsZW1lbnQudGl0bGUsIGVsZW1lbnQuZGF0ZSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbiAgICAvL0FsbCBUYXNrcyBMb2FkZXIgU3VpdGVcblxuZnVuY3Rpb24gbWFpbkRPTUxvYWRBbGwoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQubGFzdENoaWxkLnJlbW92ZSgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluQ29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5JbnRlZ3JhdG9yQWxsTG9hZGVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGFsbCA9IGNvbnRlbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRTaWJsaW5nO1xuICAgIGNvbnN0IHRvZGF5ID0gY29udGVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgY29uc3QgdGhpc1dlZWsgPSBjb250ZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5uZXh0U2libGluZy5uZXh0U2libGluZztcbiAgICBhbGwuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckl0ZW1TZWxlY3RlZCcpXG4gICAgaWYgKHRvZGF5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhckl0ZW1TZWxlY3RlZCcpKSB7dG9kYXkuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhckl0ZW1TZWxlY3RlZCcpICYmIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJJbnRlZ3JhdGVkSXRlbScpfVxuICAgIGlmICh0aGlzV2Vlay5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXJJdGVtU2VsZWN0ZWQnKSkge3RoaXNXZWVrLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXJJdGVtU2VsZWN0ZWQnKSAmJiB0aGlzV2Vlay5jbGFzc0xpc3QuYWRkKCdzaWRlYmFySW50ZWdyYXRlZEl0ZW0nKX1cbiAgICBsZXQgbGlzdHMgPSBjb250ZW50LmZpcnN0Q2hpbGQubGFzdENoaWxkLmxhc3RDaGlsZDtcbiAgICAvL2xldCBsaXN0cyA9IGNvbnRlbnQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5sYXN0Q2hpbGQubGFzdENoaWxkO1xuICAgIGlmIChsaXN0cy5oYXNDaGlsZE5vZGVzKCkgPT0gdHJ1ZSkge1xuICAgICAgICBsaXN0cy5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgICBsaXN0cy5hcHBlbmRDaGlsZChsb2FkRE9NU2lkZWJhckxpc3RzKCkpO1xuICAgIGNoZWNrU2VsZWN0ZWRMaXN0SXRlbXMoKTtcbn1cblxuZnVuY3Rpb24gbWFpbkludGVncmF0b3JBbGxMb2FkZXIoKSB7XG4gICAgY29uc3QgaW50ZWdyYXRlZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW50ZWdyYXRlZEl0ZW0uY2xhc3NMaXN0LmFkZCgnaW50ZWdyYXRlZEl0ZW0nKTtcbiAgICBcbiAgICBpbnRlZ3JhdGVkSXRlbS5hcHBlbmRDaGlsZCh0aXRsZUxvYWRlcihcIkFsbCBUYXNrc1wiKSk7XG4gICAgaW50ZWdyYXRlZEl0ZW0uYXBwZW5kQ2hpbGQobG9hZEFsbFRhc2tzKCkpO1xuICAgIHJldHVybiBpbnRlZ3JhdGVkSXRlbTtcbn1cblxuXG5mdW5jdGlvbiBsb2FkQWxsVGFza3MoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0Q29udGVudENvbnRhaW5lcicpO1xuICAgIGNvbnN0IGFycmF5ID0gc29ydFRhc2tzVG9BbGwoKTtcblxuICAgIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtSW50ZWdyYXRvcihlbGVtZW50LnRpdGxlLCBlbGVtZW50LmRhdGUpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4gICAgLy9Ub2RheSBMb2FkZXIgU3VpdGVcblxuZnVuY3Rpb24gbWFpbkRPTUxvYWRUb2RheSgpIHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluQ29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5JbnRlZ3JhdG9yVG9kYXlMb2FkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgbGV0IGFsbCA9IGNvbnRlbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRTaWJsaW5nO1xuICAgIGxldCB0b2RheSA9IGNvbnRlbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgIGxldCB0aGlzV2VlayA9IGNvbnRlbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJJdGVtU2VsZWN0ZWQnKVxuICAgIGlmIChhbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFySXRlbVNlbGVjdGVkJykpIHthbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhckl0ZW1TZWxlY3RlZCcpICYmIGFsbC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFySW50ZWdyYXRlZEl0ZW0nKX1cbiAgICBpZiAodGhpc1dlZWsuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFySXRlbVNlbGVjdGVkJykpIHt0aGlzV2Vlay5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFySXRlbVNlbGVjdGVkJykgJiYgdGhpc1dlZWsuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckludGVncmF0ZWRJdGVtJyl9XG4gICAgXG4gICAgbGV0IGxpc3RzID0gY29udGVudC5maXJzdENoaWxkLmxhc3RDaGlsZC5sYXN0Q2hpbGQ7XG4gICAgLy9sZXQgbGlzdHMgPSBjb250ZW50LmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcubGFzdENoaWxkLmxhc3RDaGlsZDtcbiAgICBpZiAobGlzdHMuaGFzQ2hpbGROb2RlcygpID09IHRydWUpIHtcbiAgICAgICAgbGlzdHMuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgbGlzdHMuYXBwZW5kQ2hpbGQobG9hZERPTVNpZGViYXJMaXN0cygpKTtcbiAgICBjaGVja1NlbGVjdGVkTGlzdEl0ZW1zKCk7XG59XG5cbmZ1bmN0aW9uIG1haW5JbnRlZ3JhdG9yVG9kYXlMb2FkZXIoKSB7XG4gICAgY29uc3QgaW50ZWdyYXRlZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW50ZWdyYXRlZEl0ZW0uY2xhc3NMaXN0LmFkZCgnaW50ZWdyYXRlZEl0ZW0nKTtcblxuICAgIGludGVncmF0ZWRJdGVtLmFwcGVuZENoaWxkKHRpdGxlTG9hZGVyKFwiVG9kYXlcIikpO1xuICAgIGludGVncmF0ZWRJdGVtLmFwcGVuZENoaWxkKGxvYWRUb2RheVRhc2tzKCkpO1xuICAgIHJldHVybiBpbnRlZ3JhdGVkSXRlbTtcbn07XG5cbmZ1bmN0aW9uIGxvYWRUb2RheVRhc2tzKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlzdENvbnRlbnRDb250YWluZXInKTtcbiAgICBjb25zdCBhcnJheSA9IGZpbHRlclRvZGF5VGFza3MoKTtcbiAgICBjb25zb2xlLmxvZygnbG9hZFRvZGF5VGFza3MgdGVzdCcpO1xuICAgIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbUludGVncmF0b3IoZWxlbWVudC50aXRsZSwgZWxlbWVudC5kYXRlKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbiAgICAvL1RoaXMgV2VlayBTdWl0ZVxuXG5mdW5jdGlvbiBtYWluRE9NTG9hZFRoaXNXZWVrKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50Lmxhc3RDaGlsZC5yZW1vdmUoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbkNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluSW50ZWdyYXRvclRoaXNXZWVrKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBsZXQgYWxsID0gY29udGVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmc7XG4gICAgbGV0IHRvZGF5ID0gY29udGVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgbGV0IHRoaXNXZWVrID0gY29udGVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgdGhpc1dlZWsuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckl0ZW1TZWxlY3RlZCcpXG4gICAgaWYgKGFsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXJJdGVtU2VsZWN0ZWQnKSkge2FsbC5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFySXRlbVNlbGVjdGVkJykgJiYgYWxsLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJJbnRlZ3JhdGVkSXRlbScpfVxuICAgIGlmICh0b2RheS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXJJdGVtU2VsZWN0ZWQnKSkge3RvZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXJJdGVtU2VsZWN0ZWQnKSAmJiB0b2RheS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFySW50ZWdyYXRlZEl0ZW0nKX1cbiAgICAvL2xldCBsaXN0cyA9IGNvbnRlbnQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5sYXN0Q2hpbGQubGFzdENoaWxkO1xuICAgIGxldCBsaXN0cyA9IGNvbnRlbnQuZmlyc3RDaGlsZC5sYXN0Q2hpbGQubGFzdENoaWxkO1xuICAgIGlmIChsaXN0cy5oYXNDaGlsZE5vZGVzKCkgPT0gdHJ1ZSkge1xuICAgICAgICBsaXN0cy5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgICBsaXN0cy5hcHBlbmRDaGlsZChsb2FkRE9NU2lkZWJhckxpc3RzKCkpO1xuICAgIGNoZWNrU2VsZWN0ZWRMaXN0SXRlbXMoKTtcbn1cblxuZnVuY3Rpb24gbWFpbkludGVncmF0b3JUaGlzV2VlaygpIHtcbiAgICBjb25zdCBpbnRlZ3JhdGVkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbnRlZ3JhdGVkSXRlbS5jbGFzc0xpc3QuYWRkKCdpbnRlZ3JhdGVkSXRlbScpO1xuICAgIFxuICAgIGludGVncmF0ZWRJdGVtLmFwcGVuZENoaWxkKHRpdGxlTG9hZGVyKFwiVGhpcyBXZWVrXCIpKTtcbiAgICBpbnRlZ3JhdGVkSXRlbS5hcHBlbmRDaGlsZChsb2FkVGhpc1dlZWtUYXNrcygpKTtcbiAgICByZXR1cm4gaW50ZWdyYXRlZEl0ZW07XG4gICAgfTtcblxuZnVuY3Rpb24gbG9hZFRoaXNXZWVrVGFza3MoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0Q29udGVudENvbnRhaW5lcicpO1xuICAgIGNvbnN0IGFycmF5ID0gZmlsdGVyVGhpc1dlZWtUYXNrcygpO1xuICAgIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtSW50ZWdyYXRvcihlbGVtZW50LnRpdGxlLCBlbGVtZW50LmRhdGUpKTtcbn0pO1xucmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyByZXBlYXRlZCBpbiBlYWNoIG9mIHRoZSBsb2FkZXIgc3VpdGVzIGFib3ZlXG5cbmZ1bmN0aW9uIHRpdGxlTG9hZGVyKHRpdGxlKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZUNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd0aXRsZUhlYWRlcicpXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIHJldHVybiBkaXY7XG59XG5cbi8vdGhpcyBmdW5jdGlvbiBpbnRlZ3JhdGVzIGljb24gJiB0aXRsZSB1bmRlciBhIHNpbmdsZSBsaXN0IHVuaXRcbmZ1bmN0aW9uIGxpc3RJdGVtSW50ZWdyYXRvcihpdGVtVGl0bGUsIGl0ZW1EYXRlKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0SXRlbUNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbShpdGVtVGl0bGUpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEljb25zKGl0ZW1EYXRlKSk7XG4gICAgICAgIGNvbnRhaW5lci5sYXN0Q2hpbGQuZmlyc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGNvbnRhaW5lci5maXJzdENoaWxkLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB1c2VyVGFza3MuZm9yRWFjaCh0YXNrID0+ICB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tUaXRsZSA9PSB0YXNrLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJUYXNrcy5zcGxpY2UodXNlclRhc2tzLmluZGV4T2YodGFzayksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gbGlzdEl0ZW0oaXRlbVRpdGxlKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsZWZ0TGlzdEl0ZW0nKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIC8vbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gaXRlbVRpdGxlO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIGxpc3RJY29ucyhpdGVtRGF0ZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsaXN0SXRlbUljb25Db250YWluZXInKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbURhdGVQcm9kdWNlcihpdGVtRGF0ZSkpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0cmFzaENhbigpKTtcbiAgICByZXR1cm4gZGl2O1xufVxuZnVuY3Rpb24gaXRlbURhdGVQcm9kdWNlcihpdGVtRGF0ZSkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbGlzdEl0ZW1EYXRlJyk7XG4gICAgZGl2LnRleHRDb250ZW50ID0gaXRlbURhdGU7XG4gICAgcmV0dXJuIGRpdjtcbn1cbiAgICBmdW5jdGlvbiB0cmFzaENhbigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLy9jb2RlIHRvIGRlbGV0ZSB0aGUgY29ycmVzcG9uZGluZyBhcnJheSBpdGVtIGZyb20gdXNlclRhc2tzXG4gICAgICAgICAgICBsZXQgaXRlbVRpdGxlID0gYnV0dG9uLnBhcmVudE5vZGUucGFyZW50Tm9kZS5maXJzdENoaWxkLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBsZXQgY29ycmVzcG9uZGluZ0FycmF5SXRlbSA9IHVzZXJUYXNrcy5maW5kKHRhc2sgPT4gdGFzay50aXRsZSA9PSBpdGVtVGl0bGUpO1xuICAgICAgICAgICAgbGV0IGFycmF5SXRlbUluZGV4ID0gdXNlclRhc2tzLmluZGV4T2YoYXJyYXlJdGVtKTtcbiAgICAgICAgICAgIHVzZXJUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCB0cmFzaCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgdHJhc2guc3JjID0gbWRpVHJhc2hDYW5PdXRsaW5lO1xuICAgICAgICAgICAgdHJhc2guY2xhc3NMaXN0LmFkZCgnbGlzdEl0ZW1JY29uQnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0cmFzaCk7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVuY2lsKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgcGVuY2lsID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBwZW5jaWwuc3JjID0gbWRpUGVuY2lsT3V0bGluZTtcbiAgICAgICAgICAgIHBlbmNpbC5jbGFzc0xpc3QuYWRkKCdsaXN0SXRlbUljb25CdXR0b24nKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHBlbmNpbCk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluZm8oKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBpbmZvID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbmZvLnNyYyA9IG1kaUluZm9ybWF0aW9uT3V0bGluZTtcbiAgICAgICAgICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnbGlzdEl0ZW1JY29uQnV0dG9uJyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICAgICAgcmV0dXJuIGRpdlxuICAgIH1cblxuLy90aGlzIGZ1bmN0aW9uIHJlZnJlc2hlcyB0aGUgbWFpbiBwYWdlIHdoZW5ldmVyIHlvdSBhZGQgYSBuZXcgdGFzaywgdG8gbWFrZSB0aGUgbmV3IHRhc2sgYXBwZWFyXG5mdW5jdGlvbiByZWZyZXNoUGFnZSgpIHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBsZXQgbWFpblRpdGxlID0gY29udGVudC5maXJzdENoaWxkLm5leHRTaWJsaW5nLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5maXJzdENoaWxkLnRleHRDb250ZW50O1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0IHJlZnJlc2ggcGFnZScpO1xuICAgIGNvbnNvbGUubG9nKG1haW5UaXRsZSk7XG5cbiAgICBpZiAobWFpblRpdGxlID09IFwiQWxsIFRhc2tzXCIpIHsgbWFpbkRPTUxvYWRBbGwoKSB9XG4gICAgZWxzZSBpZiAobWFpblRpdGxlID09IFwiVG9kYXlcIikgeyBtYWluRE9NTG9hZFRvZGF5KCkgfVxuICAgIGVsc2UgaWYgKG1haW5UaXRsZSA9PSBcIlRoaXMgV2Vla1wiKSB7IG1haW5ET01Mb2FkVGhpc1dlZWsoKSB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1haW5ET01Mb2FkTGlzdChtYWluVGl0bGUpXG4gICAgfVxufVxuXG5cbi8vY3JlYXRlVGFza0RPTSBmcm9tIGNyZWF0ZVRhc2tET00uanNcblxuZnVuY3Rpb24gY3JlYXRlVGFza0RPTUxvYWQoKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ25ld1Rhc2tDYXJkJyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0YXNrSW5mbygpKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRhc2tCdXR0b25JbnRlZ3JhdG9yKCdDYW5jZWwnLCAnQWRkIFRhc2snKSk7XG4gICAgICAgIC8vY2FuY2VsIGJ1dHRvbiBldmVudCBsaXN0ZW5lciAtLT4gcmVtb3ZlcyBjYXJkIGZyb20gRE9NXG4gICAgICAgIGNhcmQubGFzdENoaWxkLmZpcnN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FuY2VsVGFza1wiKVxuICAgICAgICAvL2V2ZW50IGxpc3RlbmVyIG9uIGNyZWF0ZSBidXR0b25cbiAgICBjYXJkLmxhc3RDaGlsZC5sYXN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuICAgICAgICBpZiAodGl0bGUudmFsdWUgPT0gXCJcIikgeyByZXR1cm4gfVxuICAgICAgICBwdXNoVGFza1RvQXJyYXkodGl0bGUudmFsdWUsIGRhdGUudmFsdWUsIGxpc3QudmFsdWUpO1xuICAgICAgICBjYXJkLnJlbW92ZSgpO1xuICAgICAgICByZWZyZXNoUGFnZSgpO1xuICAgIH0pO1xuICAgIGNhcmQubGFzdENoaWxkLmxhc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFRhc2tcIilcblxuICAgIGlmIChkb2N1bWVudC5ib2R5Lm5leHRTaWJsaW5nICE9PSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkubmV4dFNpYmxpbmcucmVtb3ZlKCk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5ib2R5LmFmdGVyKGNhcmQpO1xufTtcblxuZnVuY3Rpb24gdGFza0luZm8oKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZFRleHRCb3JkZXInKTtcbiAgICBjb25zdCBmaXJzdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmaXJzdFJvdy5jbGFzc0xpc3QuYWRkKCd0YXNrSW5mb0ZpcnN0Um93Jyk7XG4gICAgICAgIGZpcnN0Um93LmFwcGVuZENoaWxkKHRhc2tUaXRsZSgpKTtcbiAgICAgICAgZmlyc3RSb3cuYXBwZW5kQ2hpbGQodGFza0RhdGUoKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGZpcnN0Um93KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza0xpc3QoKSk7XG4gICAgcmV0dXJuIGRpdjtcbn07XG5cbiAgICBmdW5jdGlvbiB0YXNrVGl0bGUoKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tJbmZvSXRlbUNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkSW5wdXRUZXh0Jyk7XG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpO1xuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVcIik7XG4gICAgICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrOiBcIjtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0YXNrTGlzdCgpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFza0luZm9JdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGxpc3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsaXN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY2FyZElucHV0XCIpO1xuICAgICAgICAgICAgbGlzdExhYmVsLnRleHRDb250ZW50ID0gXCJMaXN0OiBcIjtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdjYXJkSW5wdXRUZXh0Jyk7XG4gICAgICAgICAgICBsaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdFwiKTtcbiAgICAgICAgdXNlckxpc3RzLmZvckVhY2godXNlckxpc3QgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmlubmVySFRNTCA9IHVzZXJMaXN0Lm5hbWU7XG4gICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGlzdExhYmVsKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0YXNrRGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFza0luZm9JdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdjYXJkSW5wdXRUZXh0Jyk7XG4gICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGVcIik7XG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgICAgICAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRGF0ZTogXCI7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG5mdW5jdGlvbiB0YXNrQnV0dG9uSW50ZWdyYXRvcihzMSwgczIpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmRCdXR0b25JbnRlZ3JhdG9yJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNhcmRCdXR0b24oczEpKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2FyZEJ1dHRvbihzMikpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY2FyZEJ1dHRvbihzKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZEJ1dHRvbicpO1xuICAgIGNvbnN0IGJ1dHRvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uVGV4dC50ZXh0Q29udGVudCA9IHM7XG4gICAgICAgIGJ1dHRvblRleHQuY2xhc3NMaXN0LmFkZCgndGFza0J1dHRvblRleHQnKVxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25UZXh0KTtcbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG4vL2NyZWF0ZUxpc3RET01cblxuXG5mdW5jdGlvbiBhZGRMaXN0Q2FyZERPTUxvYWQoczEsIHMyKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCduZXdMaXN0Q2FyZCcpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZElucHV0KCkpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uSW50ZWdyYXRvcihzMSwgczIpKTtcbiAgICAvL2V2ZW50IGxpc3RlbmVyOiBwdXNoZXMgdXNlciB0ZXh0IGludG8gdXNlckxpc3RzIGFycmF5IHdoZW4gY2xpY2sgJ2NyZWF0ZSc7XG4gICAgY2FyZC5sYXN0Q2hpbGQubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gY2FyZC5maXJzdENoaWxkLmxhc3RDaGlsZC52YWx1ZTtcbiAgICAgICAgaWYgKG5hbWUgPT0gXCJcIikgeyByZXR1cm4gfVxuICAgICAgICBwdXNoVG9Vc2VyTGlzdHMobmFtZSk7XG4gICAgICAgIGxldCBsaXN0cyA9IGNvbnRlbnQuZmlyc3RDaGlsZC5sYXN0Q2hpbGQubGFzdENoaWxkO1xuICAgICAgICBsaXN0cy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGxpc3RzLmFwcGVuZENoaWxkKGxvYWRET01TaWRlYmFyTGlzdHMoKSk7XG4gICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICAgIGNoZWNrU2VsZWN0ZWRMaXN0SXRlbXMoKTtcbiAgICAgICAgXG4gICAgfSk7XG4gICAgLy9jYW5jZWwgYnV0dG9uIGV2ZW50IGxpc3RlbmVyIC0tPiByZW1vdmVzIGNhcmQgZnJvbSBET01cbiAgICBjYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gY2FyZC5sYXN0Q2hpbGQuZmlyc3RDaGlsZDtcbiAgICAgICAgY2FyZC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICBcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5Lm5leHRTaWJsaW5nLnJlbW92ZSgpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuYm9keS5hZnRlcihjYXJkKTtcbn1cblxuZnVuY3Rpb24gbG9hZERPTVNpZGViYXJMaXN0cygpIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB1c2VyTGlzdHMuZm9yRWFjaCgodXNlckxpc3QpID0+IHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJMaXN0SXRlbUNvbnRhaW5lcicpXG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSB1c2VyTGlzdC5uYW1lO1xuICAgICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWFpbkRPTUxvYWRMaXN0KHAudGV4dENvbnRlbnQpXG4gICAgICAgIH0pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0SWNvbigpKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gaXRlbTtcbn1cbmZ1bmN0aW9uIGxpc3RJY29uKCkge1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJMaXN0SWNvbkJ1dHRvbicpO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBidXR0b24ucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGRlbGV0ZUxpc3QoKTtcbiAgICAgICAgfSlcbiAgICBsZXQgdHJhc2hJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRyYXNoSWNvbi5zcmMgPSBtZGlUcmFzaENhbk91dGxpbmU7XG4gICAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyTGlzdEljb24nKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQodHJhc2hJY29uKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlTGlzdCgpIHtcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBidXR0b24ucGFyZW50Tm9kZS5maXJzdENoaWxkLnRleHRDb250ZW50O1xuXG4gICAgICAgIHVzZXJMaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgaWYgKGxpc3QubmFtZSA9PSBsaXN0TmFtZSkge1xuICAgICAgICAgICAgICAgIHVzZXJMaXN0cy5zcGxpY2UodXNlckxpc3RzLmluZGV4T2YobGlzdCksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjYXJkSW5wdXQoKSB7XG4gICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyBcbiAgICAgICAgbGlzdE5hbWUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibGlzdE5hbWVcIik7XG4gICAgICAgIGxpc3ROYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdE5hbWVMYWJlbFwiKVxuICAgICAgICBsaXN0TmFtZS50ZXh0Q29udGVudCA9IFwiTmFtZSBZb3VyIExpc3Q6IFwiXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjYXJkVGV4dEJvcmRlcicpO1xuICAgIGNvbnN0IGlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0VGV4dC5jbGFzc0xpc3QuYWRkKCdjYXJkSW5wdXRUZXh0Jyk7XG4gICAgICAgIGlucHV0VGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3ROYW1lXCIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0TmFtZSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0VGV4dCk7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBidXR0b25JbnRlZ3JhdG9yKHMxLCBzMikge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2FyZEJ1dHRvbkludGVncmF0b3InKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGlzdENhcmRCdXR0b24oczEpKTtcbiAgICAgICAgZGl2LmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0Q2FuY2VsXCIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0Q2FyZEJ1dHRvbihzMikpO1xuICAgICAgICBkaXYubGFzdENoaWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdEFkZFwiKVxuXG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIGxpc3RDYXJkQnV0dG9uKHMpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ld0xpc3RDYXJkQnV0dG9uJyk7XG4gICAgY29uc3QgYnV0dG9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25UZXh0LnRleHRDb250ZW50ID0gcztcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uVGV4dCk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuLy9jcmVhdGVUYXNrQXBwXG5sZXQgdXNlclRhc2tzID0gW107XG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkYXRlLCBsaXN0LCBkZXNjcmlwdGlvbiwgdGltZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgfSBcblxufVxuZnVuY3Rpb24gcHVzaFRhc2tUb0FycmF5KHRpdGxlLCBkYXRlLCBsaXN0KSB7XG4gICAgbGV0IHQgPSBuZXcgVGFzayh0aXRsZSwgZGF0ZSwgbGlzdCk7XG4gICAgdXNlclRhc2tzLnB1c2godCk7XG59XG5mdW5jdGlvbiBmaWx0ZXJUYXNrc3RvTGlzdChsaXN0VGl0bGUpIHtcbiAgICBsZXQgZmlsdGVyZWRMaXN0ID0gW107XG4gICAgbGV0IGZpbHRlcmVkVGFza3MgPSB1c2VyVGFza3MuZmlsdGVyKGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgaWYgKHRhc2subGlzdCA9PSBsaXN0VGl0bGUpIGZpbHRlcmVkTGlzdC5wdXNoKHRhc2spO1xuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZExpc3Q7XG59XG5mdW5jdGlvbiBzb3J0VGFza3NUb0FsbCgpIHtcbiAgICBjb25zdCBzb3J0ZWRUYXNrcyA9IHVzZXJUYXNrcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgdmFyIGtleUEgPSBuZXcgRGF0ZShhLmRhdGUpLFxuICAgICAgICAgICAga2V5QiA9IG5ldyBEYXRlKGIuZGF0ZSk7XG4gICAgICAgIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xuICAgICAgICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xuICAgICAgICByZXR1cm4gMFxuICAgIH0pXG4gICAgcmV0dXJuIHNvcnRlZFRhc2tzO1xufVxuZnVuY3Rpb24gZmlsdGVyVG9kYXlUYXNrcygpIHtcbiAgICBsZXQgdG9kYXkgPSBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTEwtZGQnKTtcbiAgICBjb25zdCBmaWx0ZXJlZFRhc2tzID0gdXNlclRhc2tzLmZpbHRlcihmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgIGlmICh0b2RheSA9PSB0YXNrLmRhdGUpIHJldHVybiB0YXNrO1xuICAgIH0pXG4gICAgcmV0dXJuIGZpbHRlcmVkVGFza3M7XG59XG5mdW5jdGlvbiBmaWx0ZXJUaGlzV2Vla1Rhc2tzKCkge1xuICAgIGNvbnN0IGZpbHRlcmVkVGFza3MgPSB1c2VyVGFza3MuZmlsdGVyKGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgaWYgKGlzU2FtZVdlZWsobmV3IERhdGUoKSwgbmV3IERhdGUodGFzay5kYXRlLnJlcGxhY2UoXCItXCIsIFwiL1wiKSkpKSByZXR1cm4gdGFzaztcbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRUYXNrcztcbn1cblxuLy9jcmVhdGVMaXN0QXBwXG5cbmNvbnN0IHVzZXJMaXN0cyA9IFtdO1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0QXJyYXlPYmplY3QobmFtZSkge1xuICAgIHJldHVybiB7IG5hbWUgfVxufVxuXG5mdW5jdGlvbiBwdXNoVG9Vc2VyTGlzdHMobmFtZSkge1xuICAgIHVzZXJMaXN0cy5wdXNoKGNyZWF0ZUxpc3RBcnJheU9iamVjdChuYW1lKSk7XG59XG5cblxuXG5cbmV4cG9ydCB7IHBlcnNvbmFsU2l0ZVBhZ2VMb2FkZXIgfSIsIi8vYXJyYXkgdG8gc3RvcmUgd2VhdGhlciBpbmZvIHdoZW4gZmV0Y2hlZCAmIHByb2Nlc3NlZFxubGV0IHdlYXRoZXJEYXRhQXJyYXkgPSBbXTtcblxuLy90cnktY2F0Y2ggYmxvY2sgdG8gc3VibWl0ICYgcHJvY2VzcyB1c2VyIHJlcXVlc3QgZm9yIHdlYXRoZXIgaW5mb1xuYXN5bmMgZnVuY3Rpb24gc3VibWl0UmVxdWVzdChzZWFyY2hJbnB1dCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKHNlYXJjaElucHV0KTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coZGF0YS53ZWF0aGVyWzBdKTtcbiAgICAgICAgd2VhdGhlckRhdGFBcnJheSA9IGF3YWl0IHByb2Nlc3NEYXRhKGRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YUFycmF5KTtcbiAgICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhQXJyYXk7XG4gICAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KFwiSW52YWxpZCBDaXR5IE5hbWVcIik7XG4gICAgfVxufSBcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0nICsgY2l0eSArICcmdW5pdHM9bWV0cmljJmFwcGlkPWM2ZjVlZjIyNWFkOTc4MGRjNWNmMzczMmFkYzYzZDgxJywge1xuICAgICAgICBtb2RlOiAnY29ycydcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xufTtcbmZ1bmN0aW9uIHByb2Nlc3NEYXRhKGRhdGEpIHtcbiAgICBsZXQgY2l0eU5hbWUgPSBkYXRhLm5hbWU7XG4gICAgbGV0IHRlbXAgPSBkYXRhLm1haW4udGVtcDtcbiAgICBsZXQgdGVtcEZlZWwgPSBkYXRhLm1haW4uZmVlbHNfbGlrZTtcbiAgICBsZXQgc2t5Q292ZXIgPSBkYXRhLndlYXRoZXJbMF1bJ2Rlc2NyaXB0aW9uJ107XG4gICAgbGV0IHdpbmRTcGVlZCA9IGRhdGEud2luZC5zcGVlZDtcbiAgICBsZXQgaHVtaWRpdHkgPSBkYXRhLm1haW4uaHVtaWRpdHk7XG4gICAgbGV0IHdlYXRoZXJEYXRhID0gW2NpdHlOYW1lLCB0ZW1wLCB0ZW1wRmVlbCwgc2t5Q292ZXIsIHdpbmRTcGVlZCwgaHVtaWRpdHldO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cblxuZXhwb3J0IHsgc3VibWl0UmVxdWVzdCwgd2VhdGhlckRhdGFBcnJheSB9IiwiaW1wb3J0IHsgd2VhdGhlckRhdGFBcnJheSB9IGZyb20gJy4vYXBpTG9naWMnO1xuaW1wb3J0IHsgc3VibWl0UmVxdWVzdCB9IGZyb20gJy4vYXBpTG9naWMuanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9pbWFnZXMvaWNvbjIucG5nJztcbmNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xubXlJY29uLnNyYyA9IEljb247XG5teUljb24uc2V0QXR0cmlidXRlKCdpZCcsICd3ZWF0aGVySWNvbicpO1xuXG5cbmZ1bmN0aW9uIGxvYWRXZWF0aGVyQXBwKCkge1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlYXRoZXJXcmFwcGVyJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcHBIZWFkZXJMb2FkZXIoKSk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZCh3ZWF0aGVyQXBwQ29udGVudExvYWRlcigpKTtcbiAgICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gYXBwSGVhZGVyTG9hZGVyKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd3ZWF0aGVySGVhZGVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnQoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUFwcEJ0bigpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gaGVhZGVyQ29udGVudCgpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VhdGhlckhlYWRlckxvZ28nKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobXlJY29uKTtcbiAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ1dlYXRoZXIgQXBwJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiByZW1vdmVBcHBCdG4oKSB7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlbW92ZVdlYXRoZXJBcHBCdG4nKTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVBcHApXG4gICAgcmV0dXJuIGJ0bjtcbn1cbmZ1bmN0aW9uIHJlbW92ZUFwcCgpIHtcbiAgICBsZXQgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJXcmFwcGVyJyk7XG4gICAgd2hpbGUoIGFwcC5oYXNDaGlsZE5vZGVzKCkgKXtcbiAgICBhcHAucmVtb3ZlQ2hpbGQoYXBwLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGFwcC5yZW1vdmUoKTtcbn1cbi8vY3JlYXRpbmcgc2VhcmNoRGlzcGxheSBvdXRzaWRlIG9mIHdlYXRoZXJBcHBDb250ZW50TG9hZGVyKCkgc28gaXQgY2FuIGJlIGFjY2Vzc2libGUgdG8gbG9hZFNlYXJjaFRvRG9tKClcbmxldCBzZWFyY2hEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZWFyY2hEaXNwbGF5LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoRGlzcGxheScpO1xuZnVuY3Rpb24gd2VhdGhlckFwcENvbnRlbnRMb2FkZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGludGVyZmFjZUNvbnRhaW5lckxvYWRlcigpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyRm9ybUxvYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoRGlzcGxheSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gaW50ZXJmYWNlQ29udGFpbmVyTG9hZGVyKCkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICd3ZWF0aGVyQ29udGVudCcpO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiB3ZWF0aGVyRm9ybUxvYWRlcigpIHtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybScpO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlYXRoZXJJbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQ2l0eSBOYW1lJyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIC8vYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICd3ZWF0aGVyQnRuJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB2YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdLnZhbHVlO1xuICAgICAgICBzdWJtaXRSZXF1ZXN0KHZhbCkudGhlbihsb2FkU2VhcmNoVG9ET00pOyAgXG4gICAgfSk7XG4gICAgcmV0dXJuIGZvcm07XG59XG5cblxubGV0IHNlYXJjaFJlc3VsdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2VhcmNoUmVzdWx0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaFJlc3VsdENvbnRhaW5lcicpO1xubGV0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xubGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGVtcC5jbGFzc0xpc3QuYWRkKCdwLWluZm8nKTtcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZSgnaWQnLCAndGVtcCcpO1xubGV0IHRlbXBGZWVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRlbXBGZWVsLmNsYXNzTGlzdC5hZGQoJ3AtaW5mbycpO1xubGV0IHNreUNvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNreUNvdmVyLmNsYXNzTGlzdC5hZGQoJ3AtaW5mbycpO1xubGV0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZCgncC1pbmZvJyk7XG5sZXQgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgncC1pbmZvJyk7XG5cblxuZnVuY3Rpb24gZ2l2ZVRleHRUb0VsZW1lbnRzKGFycmF5KSB7XG4gICAgbGV0IHNreUNvdmVyVGV4dCA9IGFycmF5WzNdO1xuICAgIHNreUNvdmVyVGV4dCA9IHNreUNvdmVyVGV4dC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5tYXAoKHMpID0+IHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnN1YnN0cmluZygxKSlcbiAgICAgICAgLmpvaW4oJyAnKTtcbiAgICBjb25zb2xlLmxvZyhza3lDb3ZlclRleHQpO1xuICAgIFxuICAgIGNpdHkudGV4dENvbnRlbnQgPSBhcnJheVswXTtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYXJyYXlbMV0gKyBcIsKwQ1wiO1xuICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gXCJGZWVscyBsaWtlOiBcIiArIGFycmF5WzJdKyBcIsKwQ1wiO1xuICAgIHNreUNvdmVyLnRleHRDb250ZW50ID0gXCJTa3kgQ292ZXI6IFwiICsgc2t5Q292ZXJUZXh0O1xuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IFwiV2luZDogXCIgKyBhcnJheVs0XSArIFwiICBrbS9oXCI7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBcIkh1bWlkaXR5OiBcIiArIGFycmF5WzVdICsgXCIlXCJcbn1cbmFzeW5jIGZ1bmN0aW9uIGxvYWRTZWFyY2hUb0RPTSgpIHtcbiAgICBnaXZlVGV4dFRvRWxlbWVudHMod2VhdGhlckRhdGFBcnJheSk7XG4gICAgc2VhcmNoUmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHkpO1xuICAgIHNlYXJjaFJlc3VsdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICBzZWFyY2hSZXN1bHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcEZlZWwpO1xuICAgIHNlYXJjaFJlc3VsdENvbnRhaW5lci5hcHBlbmRDaGlsZChza3lDb3Zlcik7XG4gICAgc2VhcmNoUmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XG4gICAgc2VhcmNoUmVzdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcbiAgICBzZWFyY2hEaXNwbGF5LmFwcGVuZENoaWxkKHNlYXJjaFJlc3VsdENvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgeyBsb2FkU2VhcmNoVG9ET00sIHdlYXRoZXJBcHBDb250ZW50TG9hZGVyLCBsb2FkV2VhdGhlckFwcCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhlYWRlckxvYWRlciB9IGZyb20gJy4vc2l0ZS1jb250ZW50cy9oZWFkZXIuanMnO1xuaW1wb3J0IHsgaG9tZVBhZ2VMb2FkZXIgfSBmcm9tICcuL3NpdGUtY29udGVudHMvbW9kdWxlcy93aG9JQW0uanMnO1xuaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGROb2RlcyB9IGZyb20gJy4vc2l0ZS1jb250ZW50cy9tb2R1bGVzL3dob0lBbS5qcyc7XG5pbXBvcnQgeyBsb2FkSG9tZVBhZ2UgfSBmcm9tICcuL25hdkZ1bmN0aW9ucy5qcyc7XG5cblxubG9hZEhvbWVQYWdlKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==