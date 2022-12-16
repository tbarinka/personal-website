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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: Arial, Helvetica, sans-serif\n}\nbody {\n\n}\n/* styles for header */\n#header {\n    display: flex;\n    align-items: center;\n    width: 98.75vw;\n    background-color: white;\n    position: sticky;\n    top: 0;\n    border: 1px solid grey;\n}\n#header > h3 {\n    margin-left: 90px;\n    margin-right: -40px;\n    width: 15%;\n    border-right: 1px solid grey;\n    width: 260px;\n    height: 30px;\n}\n#nav {\n    display: flex;\n    width: 85%;\n}\n\n#linksList {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    list-style: none;\n    width: 100%;\n    height: 40px;\n}\n.headerLink {\n    display: flex;\n    text-align: center;\n    align-items: center;\n    /*justify-content: right;\n    width: 120px;*/\n    justify-content: center;\n    width: 200px;\n    height: 10px;\n    border-left: 1px solid grey;\n    padding: 10px;\n}\n/* styles for main content */\n#mainContainer {\n    display: flex;\n    gap: 10px;\n    background-color: #f1f5f9;\n    height: 700px;\n}\n\n.contentBox {\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    border: 1px solid grey;\n    width: 800px;\n    margin-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n.homePageLoader {\n\n}\n\n/* styles for profile */\n#profile {\n    width: 400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: start;\n    margin-top: -20px;\n    margin-left: 20px;\n    padding: 50px;\n    margin-right: -110px;\n}\n#profilePhoto {\n    height: 400px;\n}\n\n#profileDescription, #profileName {\n    width: 350px;\n    display: flex;\n    justify-content: center;\n}\n#profileName {\n    font-size: 40px;\n    margin-top: 5px;\n}\n#profileText {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* styles for Philosophy */\n\n#italic {\n    font-style: italic;\n}\n\n/* styles for JS portfolio */\n#appButtonContainer {\n    display: flex;\n    gap: 15px;\n}\n.openAppButtons {\n    font-size: 18px;\n    height: 70px;\n    width: 140px;\n    border-radius: 10px;\n}\n\n/* styles for weather App */\n\n#weatherWrapper {\n    border-radius: 5px;\n    background-color: #1e293b;\n    width: 450px;\n    position: absolute;\n    top: 100px;\n}\n\n#weatherHeader,\n#weatherContent {\n    width: 390px;\n}\n\n#weatherHeader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n    gap: 15px;\n    background-color: #1e293b;\n    color: white;\n    height: 15%;\n    border-radius: 5px;\n}\n\n#weatherIcon {\n    height: 43px;\n    filter: invert(100%);\n    -webkit-filter: invert(100%);\n}\n\n#weatherHeaderLogo {\n    display: flex;\n}\n\n#removeWeatherAppBtn {\n    background-color: #1e293b;\n    color: white;\n    font-size: 24px;\n    position: relative;\n    left: 55px;\n    bottom: 20px;\n    border: none;\n    box-shadow: none;\n    background: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding-bottom: 3px;\n    padding-left: 7px;\n    padding-right: 7px;\n}\n\n#weatherContent {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    justify-content: center;\n    background-color: #93c5fd;\n    padding: 30px;\n    height: 85%;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n#weatherContent>div {\n    gap: 10px;\n    height: 7%;\n    display: flex;\n}\n\n#weatherBtn,\n#weatherInput {\n    padding: 0.5rem;\n    border: none;\n    border-radius: 5px;\n    color: inherit;\n    font-family: inherit;\n    font-size: 18px;\n    outline: none;\n    height: 37px;\n}\n#weatherBtn {\n    height: 37px;\n}\n\n#weatherBtn {\n    width: 80px;\n    margin-left: 10px;\n}\n\n#form {\n    gap: 10px;\n}\n\n.searchResultContainer {\n    /*position: absolute;\n    top: 30%;\n    left: 50%;\n    margin-left: -175px;*/\n    background-color: #1e293b;\n    width: 330px;\n    height: 285px;\n    border-radius: 10px;\n    border: solid white 3px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #93c5fd;\n    gap: 10px;\n}\n\n.searchResultContainer>h2 {\n    font-size: 36px;\n    margin-bottom: 8px;\n    color: #cbd5e1;\n}\n\n#temp {\n    font-size: 30px;\n    margin-bottom: 8px;\n}\n\n.p-info {\n    color: white;\n    font-size: 18px;\n}\n\n/*styles for battleship*/\n\n#container {\n    position: absolute;\n    background-color: #d6d3d1;\n\n}\n\n#battleShipContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 10px;\n    position: relative;\n}\n\n/*styles for the placement module */\n.placement-module-container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 10px;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    width: 800px;\n    height: 660px;\n    background-color: grey;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    padding-right: 30px;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n}\n\n.placementTextBox {\n    height: 10%;\n    margin-top: -11px;\n    margin-bottom: 23px;\n}\n\n.placementTextContent {\n    text-shadow: black 2px 2px;\n    font-size: 40px;\n    color: #22d3ee;\n}\n\n.middleSubcontainer,\n.rightInfoSubcontainer {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n}\n\n.middleSubcontainer {\n    gap: 30px;\n}\n\n.rightInfoSubcontainer {\n    gap: 25px;\n    flex-direction: column;\n    align-items: center;\n}\n\n.rightInfoButtonsContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 40px;\n    padding: 5px;\n}\n\n.bottomSubcontainer {\n    display: flex;\n    gap: 55px;\n    height: 25%;\n    margin-top: 20px;\n\n}\n\n.placementInstructionBox {\n    background-color: #d6d3d1;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border-radius: 20px;\n    padding-bottom: 5px;\n}\n\n.headingContainer {\n    display: flex;\n    justify-content: center;\n    margin-bottom: -20px;\n}\n\n.shipAllClassesContainer {\n    display: flex;\n    flex-direction: row;\n    grid-template-columns: repeat(5, 1fr);\n    background-color: rgba(0, 0, 255, 0);\n    gap: 20px;\n    width: 400px;\n\n}\n\n.singleShipClassContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.ship {\n    display: flex;\n    gap: 1px;\n}\n\n.shipAlt {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    border: solid black 2px;\n}\n\n/*styles for the two grids and coordinates */\n.doubleBoardContainer {\n    display: flex;\n    gap: 175px;\n    padding: 10px;\n}\n\n.singleBoardContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.xCoordinateContainer {\n    display: flex;\n    gap: 1px;\n    margin-left: 35px;\n    margin-bottom: -10px;\n}\n\n.yCoordinateContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    margin-top: 10px;\n}\n\n.leftSquare {\n    display: flex;\n    justify-content: center;\n}\n\n.leftSquare,\n.upperSquare {\n    height: 35px;\n    width: 35px;\n    display: flex;\n    justify-content: center;\n}\n\n.subcontainer {\n    display: flex;\n}\n\n.placementSquare {\n    height: 35px;\n    width: 35px;\n    background-color: red;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 1;\n}\n\n.square,\n.aiSquare {\n    border: solid black;\n    color: black;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.square:hover,\n.aiSquare:hover,\n.placementSquare:hover {\n    border: solid black;\n    color: black;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #cbd5e1;\n}\n\n.squareContainer {}\n\n.grid-container {\n    height: 350px;\n    width: 350px;\n    display: grid;\n    grid-template-columns: repeat(10, 35px);\n    grid-template-rows: repeat(10, 35px);\n    grid-auto-flow: column;\n    gap: 1px;\n}\n\n/* styles for score card */\n.singleBoardScoreContainer {\n    display: flex;\n    gap: 5px;\n    justify-content: left;\n}\n\n/*styles for game controller hud*/\n.scoreKeeperContainer {\n    display: flex;\n    gap: 390px;\n    text-shadow: #22d3ee 2px 2px;\n\n}\n\n.placementButton {\n    height: 60px;\n    width: 120px;\n    font-size: 20px;\n    border-radius: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #22d3ee;\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n}\n\n.buttonContainer {\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n}\n\n.formContainer {\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n    margin: 10px;\n}\n\n.winnerCard {\n    background-color: #dc2626;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n    border-radius: 20px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 10px;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    height: 276px;\n    width: 350px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n}\n\n.winnerAnnouncement {\n    font-size: 80px;\n}\n\n\n/*styles for toDoList / organizer */\n\n#body {\n    padding: 0;\n    margin: 0;\n    font-family: Arial, sans-serif;\n    height: 100%;\n    /*overflow: hidden*/\n}\n\n#content {\n    display: flex;\n}\n\n/*header*/\n#headerContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #5eead4;\n    color: white;\n    font-size: 30px;\n    height: 60px;\n    width: 100%;\n}\n\n.leftHeaderContent {\n    display: flex;\n    align-items: center;\n    height: 30px;\n    padding: 5px;\n    gap: 5px;\n    margin-left: 40px;\n}\n#organizerRightHeaderContent {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.toDo {\n    display: flex;\n    align-items: center;\n}\n\n.headerIcon {\n    height: 35px;\n    filter: brightness(0) invert(1);\n}\n\n#removeOrgnizerBtn {\n    background-color: white;\n    color: #5eead4;\n    border-radius: 10px;\n    margin-right: 10px;\n    font-size: 32px;\n    height: 40px;\n    box-shadow: none;\n    text-align: center;\n    padding-bottom: 40px;\n    padding-left: 7px;\n    padding-right: 7px;\n}\n\n\n/*sidebar*/\n.sidebar {\n    background-color: #f8fafc;\n    height: 100vh;\n    width: 21%;\n    display: flex;\n    flex-direction: column;\n    padding-top: 40px;\n    font-size: 20px;\n\n}\n\n.sidebarAddTaskButton {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding-bottom: 15px;\n}\n\n.createTask {\n    height: 70px;\n    width: 200px;\n    border-radius: 20px;\n    font-size: 25px;\n}\n\n.sidebarIntegratedItem {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 20px;\n    padding-right: 25px;\n}\n\n.sidebarItemSelected {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 10px;\n    background-color: #5eead4;\n    color: white;\n}\n\n.sidebarIntegratedItem2 {\n    display: flex;\n    flex-direction: column;\n}\n\n.sideBarRightComponentButtonContainer {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f8fafc;\n}\n\n.sideBarRightComponentButton {\n    width: 30px;\n    height: 30px;\n}\n\n.sidebarListItemContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 35px;\n    padding-right: 20px;\n}\n\n.sidebarListItemContainerSelected {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 35px;\n    padding-right: 20px;\n    background-color: #5eead4;\n    color: white;\n}\n\n.sidebarListIconButton {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.sidebarListIcon {\n    height: 25px;\n}\n\n/* new Task Popup */\n.newTaskCard {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 250px;\n    right: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n    height: 230px;\n    width: 600px;\n    border: solid black;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 5px 5px 5px black;\n    font-size: 25px;\n}\n\n.taskCardTextBorder {\n    display: flex;\n    flex-direction: column;\n    width: 75%;\n    align-items: center;\n    gap: 25px;\n    margin-bottom: 20px;\n}\n\n.taskInfoFirstRow {\n    display: flex;\n    width: 80%;\n    justify-content: center;\n    gap: 20px;\n}\n\n.taskInfoItemContainer {\n    display: flex;\n    gap: 5px;\n}\n\n.cardButtonIntegrator {\n    display: flex;\n    gap: 20px;\n}\n\n.taskCardButton {\n    width: 130px;\n    height: 50px;\n    border-radius: 20px;\n    border: solid black;\n    font-size: 20px;\n}\n\n#addTask {\n    background-color: #5eead4;\n    color: white;\n}\n\n#title,\n#date,\n#list {\n    font-size: 20px;\n}\n\n/* new List Popup */\n.newListCard {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 250px;\n    right: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n    height: 230px;\n    width: 450px;\n    border: solid black;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 5px 5px 5px black;\n    gap: 35px;\n}\n\n.cardTextBorder {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n#listName {\n    height: 30px;\n    width: 200px;\n    font-size: 20px;\n}\n\n#listNameLabel {\n    font-size: 20px;\n}\n\n.newListCardButton {\n    width: 130px;\n    height: 50px;\n    border-radius: 20px;\n    border: solid black;\n    font-size: 20px;\n}\n\n#listAdd {\n    background-color: #5eead4;\n    color: white;\n}\n\n/* main list content */\n\n.mainContainer {\n    width: 79%\n}\n\n.integratedItem {\n    padding-top: 20px;\n    padding-left: 90px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 90%;\n\n}\n\n.titleContainer {}\n\n.listContentContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n}\n\n.listItemContainer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 60%;\n    padding-left: 20px;\n    padding-right: 20px;\n    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.3);\n    padding-bottom: 5px;\n}\n\n.listItemIconContainer {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.listItemIconContainer>button {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.listItemIconContainer>button>img {\n    width: 25px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    font-family: Arial, Helvetica, sans-serif\n}\nbody {\n\n}\n/* styles for header */\n#header {\n    display: flex;\n    align-items: center;\n    width: 98.75vw;\n    background-color: white;\n    position: sticky;\n    top: 0;\n    border: 1px solid grey;\n}\n#header > h3 {\n    margin-left: 90px;\n    margin-right: -40px;\n    width: 15%;\n    border-right: 1px solid grey;\n    width: 260px;\n    height: 30px;\n}\n#nav {\n    display: flex;\n    width: 85%;\n}\n\n#linksList {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    list-style: none;\n    width: 100%;\n    height: 40px;\n}\n.headerLink {\n    display: flex;\n    text-align: center;\n    align-items: center;\n    /*justify-content: right;\n    width: 120px;*/\n    justify-content: center;\n    width: 200px;\n    height: 10px;\n    border-left: 1px solid grey;\n    padding: 10px;\n}\n/* styles for main content */\n#mainContainer {\n    display: flex;\n    gap: 10px;\n    background-color: #f1f5f9;\n    height: 700px;\n}\n\n.contentBox {\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    border: 1px solid grey;\n    width: 800px;\n    margin-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n.homePageLoader {\n\n}\n\n/* styles for profile */\n#profile {\n    width: 400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: start;\n    margin-top: -20px;\n    margin-left: 20px;\n    padding: 50px;\n    margin-right: -110px;\n}\n#profilePhoto {\n    height: 400px;\n}\n\n#profileDescription, #profileName {\n    width: 350px;\n    display: flex;\n    justify-content: center;\n}\n#profileName {\n    font-size: 40px;\n    margin-top: 5px;\n}\n#profileText {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* styles for Philosophy */\n\n#italic {\n    font-style: italic;\n}\n\n/* styles for JS portfolio */\n#appButtonContainer {\n    display: flex;\n    gap: 15px;\n}\n.openAppButtons {\n    font-size: 18px;\n    height: 70px;\n    width: 140px;\n    border-radius: 10px;\n}\n\n/* styles for weather App */\n\n#weatherWrapper {\n    border-radius: 5px;\n    background-color: #1e293b;\n    width: 450px;\n    position: absolute;\n    top: 100px;\n}\n\n#weatherHeader,\n#weatherContent {\n    width: 390px;\n}\n\n#weatherHeader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n    gap: 15px;\n    background-color: #1e293b;\n    color: white;\n    height: 15%;\n    border-radius: 5px;\n}\n\n#weatherIcon {\n    height: 43px;\n    filter: invert(100%);\n    -webkit-filter: invert(100%);\n}\n\n#weatherHeaderLogo {\n    display: flex;\n}\n\n#removeWeatherAppBtn {\n    background-color: #1e293b;\n    color: white;\n    font-size: 24px;\n    position: relative;\n    left: 55px;\n    bottom: 20px;\n    border: none;\n    box-shadow: none;\n    background: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding-bottom: 3px;\n    padding-left: 7px;\n    padding-right: 7px;\n}\n\n#weatherContent {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    justify-content: center;\n    background-color: #93c5fd;\n    padding: 30px;\n    height: 85%;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n#weatherContent>div {\n    gap: 10px;\n    height: 7%;\n    display: flex;\n}\n\n#weatherBtn,\n#weatherInput {\n    padding: 0.5rem;\n    border: none;\n    border-radius: 5px;\n    color: inherit;\n    font-family: inherit;\n    font-size: 18px;\n    outline: none;\n    height: 37px;\n}\n#weatherBtn {\n    height: 37px;\n}\n\n#weatherBtn {\n    width: 80px;\n    margin-left: 10px;\n}\n\n#form {\n    gap: 10px;\n}\n\n.searchResultContainer {\n    /*position: absolute;\n    top: 30%;\n    left: 50%;\n    margin-left: -175px;*/\n    background-color: #1e293b;\n    width: 330px;\n    height: 285px;\n    border-radius: 10px;\n    border: solid white 3px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #93c5fd;\n    gap: 10px;\n}\n\n.searchResultContainer>h2 {\n    font-size: 36px;\n    margin-bottom: 8px;\n    color: #cbd5e1;\n}\n\n#temp {\n    font-size: 30px;\n    margin-bottom: 8px;\n}\n\n.p-info {\n    color: white;\n    font-size: 18px;\n}\n\n/*styles for battleship*/\n\n#container {\n    position: absolute;\n    background-color: #d6d3d1;\n\n}\n\n#battleShipContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 10px;\n    position: relative;\n}\n\n/*styles for the placement module */\n.placement-module-container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 10px;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    width: 800px;\n    height: 660px;\n    background-color: grey;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    padding-right: 30px;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n}\n\n.placementTextBox {\n    height: 10%;\n    margin-top: -11px;\n    margin-bottom: 23px;\n}\n\n.placementTextContent {\n    text-shadow: black 2px 2px;\n    font-size: 40px;\n    color: #22d3ee;\n}\n\n.middleSubcontainer,\n.rightInfoSubcontainer {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n}\n\n.middleSubcontainer {\n    gap: 30px;\n}\n\n.rightInfoSubcontainer {\n    gap: 25px;\n    flex-direction: column;\n    align-items: center;\n}\n\n.rightInfoButtonsContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 40px;\n    padding: 5px;\n}\n\n.bottomSubcontainer {\n    display: flex;\n    gap: 55px;\n    height: 25%;\n    margin-top: 20px;\n\n}\n\n.placementInstructionBox {\n    background-color: #d6d3d1;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border-radius: 20px;\n    padding-bottom: 5px;\n}\n\n.headingContainer {\n    display: flex;\n    justify-content: center;\n    margin-bottom: -20px;\n}\n\n.shipAllClassesContainer {\n    display: flex;\n    flex-direction: row;\n    grid-template-columns: repeat(5, 1fr);\n    background-color: rgba(0, 0, 255, 0);\n    gap: 20px;\n    width: 400px;\n\n}\n\n.singleShipClassContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.ship {\n    display: flex;\n    gap: 1px;\n}\n\n.shipAlt {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    border: solid black 2px;\n}\n\n/*styles for the two grids and coordinates */\n.doubleBoardContainer {\n    display: flex;\n    gap: 175px;\n    padding: 10px;\n}\n\n.singleBoardContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.xCoordinateContainer {\n    display: flex;\n    gap: 1px;\n    margin-left: 35px;\n    margin-bottom: -10px;\n}\n\n.yCoordinateContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    margin-top: 10px;\n}\n\n.leftSquare {\n    display: flex;\n    justify-content: center;\n}\n\n.leftSquare,\n.upperSquare {\n    height: 35px;\n    width: 35px;\n    display: flex;\n    justify-content: center;\n}\n\n.subcontainer {\n    display: flex;\n}\n\n.placementSquare {\n    height: 35px;\n    width: 35px;\n    background-color: red;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 1;\n}\n\n.square,\n.aiSquare {\n    border: solid black;\n    color: black;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.square:hover,\n.aiSquare:hover,\n.placementSquare:hover {\n    border: solid black;\n    color: black;\n    font-size: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #cbd5e1;\n}\n\n.squareContainer {}\n\n.grid-container {\n    height: 350px;\n    width: 350px;\n    display: grid;\n    grid-template-columns: repeat(10, 35px);\n    grid-template-rows: repeat(10, 35px);\n    grid-auto-flow: column;\n    gap: 1px;\n}\n\n/* styles for score card */\n.singleBoardScoreContainer {\n    display: flex;\n    gap: 5px;\n    justify-content: left;\n}\n\n/*styles for game controller hud*/\n.scoreKeeperContainer {\n    display: flex;\n    gap: 390px;\n    text-shadow: #22d3ee 2px 2px;\n\n}\n\n.placementButton {\n    height: 60px;\n    width: 120px;\n    font-size: 20px;\n    border-radius: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #22d3ee;\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n}\n\n.buttonContainer {\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n}\n\n.formContainer {\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n    margin: 10px;\n}\n\n.winnerCard {\n    background-color: #dc2626;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;\n    border-radius: 20px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 10px;\n    bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    height: 276px;\n    width: 350px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n}\n\n.winnerAnnouncement {\n    font-size: 80px;\n}\n\n\n/*styles for toDoList / organizer */\n\n#body {\n    padding: 0;\n    margin: 0;\n    font-family: Arial, sans-serif;\n    height: 100%;\n    /*overflow: hidden*/\n}\n\n#content {\n    display: flex;\n}\n\n/*header*/\n#headerContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #5eead4;\n    color: white;\n    font-size: 30px;\n    height: 60px;\n    width: 100%;\n}\n\n.leftHeaderContent {\n    display: flex;\n    align-items: center;\n    height: 30px;\n    padding: 5px;\n    gap: 5px;\n    margin-left: 40px;\n}\n#organizerRightHeaderContent {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.toDo {\n    display: flex;\n    align-items: center;\n}\n\n.headerIcon {\n    height: 35px;\n    filter: brightness(0) invert(1);\n}\n\n#removeOrgnizerBtn {\n    background-color: white;\n    color: #5eead4;\n    border-radius: 10px;\n    margin-right: 10px;\n    font-size: 32px;\n    height: 40px;\n    box-shadow: none;\n    text-align: center;\n    padding-bottom: 40px;\n    padding-left: 7px;\n    padding-right: 7px;\n}\n\n\n/*sidebar*/\n.sidebar {\n    background-color: #f8fafc;\n    height: 100vh;\n    width: 21%;\n    display: flex;\n    flex-direction: column;\n    padding-top: 40px;\n    font-size: 20px;\n\n}\n\n.sidebarAddTaskButton {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding-bottom: 15px;\n}\n\n.createTask {\n    height: 70px;\n    width: 200px;\n    border-radius: 20px;\n    font-size: 25px;\n}\n\n.sidebarIntegratedItem {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 20px;\n    padding-right: 25px;\n}\n\n.sidebarItemSelected {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 10px;\n    background-color: #5eead4;\n    color: white;\n}\n\n.sidebarIntegratedItem2 {\n    display: flex;\n    flex-direction: column;\n}\n\n.sideBarRightComponentButtonContainer {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f8fafc;\n}\n\n.sideBarRightComponentButton {\n    width: 30px;\n    height: 30px;\n}\n\n.sidebarListItemContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 35px;\n    padding-right: 20px;\n}\n\n.sidebarListItemContainerSelected {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 35px;\n    padding-right: 20px;\n    background-color: #5eead4;\n    color: white;\n}\n\n.sidebarListIconButton {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.sidebarListIcon {\n    height: 25px;\n}\n\n/* new Task Popup */\n.newTaskCard {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 250px;\n    right: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n    height: 230px;\n    width: 600px;\n    border: solid black;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 5px 5px 5px black;\n    font-size: 25px;\n}\n\n.taskCardTextBorder {\n    display: flex;\n    flex-direction: column;\n    width: 75%;\n    align-items: center;\n    gap: 25px;\n    margin-bottom: 20px;\n}\n\n.taskInfoFirstRow {\n    display: flex;\n    width: 80%;\n    justify-content: center;\n    gap: 20px;\n}\n\n.taskInfoItemContainer {\n    display: flex;\n    gap: 5px;\n}\n\n.cardButtonIntegrator {\n    display: flex;\n    gap: 20px;\n}\n\n.taskCardButton {\n    width: 130px;\n    height: 50px;\n    border-radius: 20px;\n    border: solid black;\n    font-size: 20px;\n}\n\n#addTask {\n    background-color: #5eead4;\n    color: white;\n}\n\n#title,\n#date,\n#list {\n    font-size: 20px;\n}\n\n/* new List Popup */\n.newListCard {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 250px;\n    right: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n    height: 230px;\n    width: 450px;\n    border: solid black;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 5px 5px 5px black;\n    gap: 35px;\n}\n\n.cardTextBorder {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n#listName {\n    height: 30px;\n    width: 200px;\n    font-size: 20px;\n}\n\n#listNameLabel {\n    font-size: 20px;\n}\n\n.newListCardButton {\n    width: 130px;\n    height: 50px;\n    border-radius: 20px;\n    border: solid black;\n    font-size: 20px;\n}\n\n#listAdd {\n    background-color: #5eead4;\n    color: white;\n}\n\n/* main list content */\n\n.mainContainer {\n    width: 79%\n}\n\n.integratedItem {\n    padding-top: 20px;\n    padding-left: 90px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 90%;\n\n}\n\n.titleContainer {}\n\n.listContentContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 100%;\n}\n\n.listItemContainer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 60%;\n    padding-left: 20px;\n    padding-right: 20px;\n    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.3);\n    padding-bottom: 5px;\n}\n\n.listItemIconContainer {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.listItemIconContainer>button {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.listItemIconContainer>button>img {\n    width: 25px;\n}"],"sourceRoot":""}]);
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

/***/ "./src/site-contents/battleship-app/battleship-app-code.js":
/*!*****************************************************************!*\
  !*** ./src/site-contents/battleship-app/battleship-app-code.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadBattleshipApp": () => (/* binding */ loadBattleshipApp)
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
    playerArray = boards.playerBoard.grid.slice();
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
let playerArray = boards.playerBoard.grid.slice();
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

let repeatBlocker = ""

function loadBattleshipApp() {
    if (repeatBlocker == 1) {
        console.log('fuck')
        return
    } else {
        placementModuleLoader();
        loadBoards();
        repeatBlocker = 1;
        console.log('battleship test');
    }
}



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _site_contents_battleship_app_battleship_app_code_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-contents/battleship-app/battleship-app-code.js */ "./src/site-contents/battleship-app/battleship-app-code.js");
//import './site-contents/battleship/src/style.css';


//import { placementModuleLoader } from './site-contents/battleship/src/userInterface/boardDOMloader.js';
//import { loadBoards } from './site-contents/battleship/src/userInterface/controller.js';


(0,_site_contents_battleship_app_battleship_app_code_js__WEBPACK_IMPORTED_MODULE_1__.loadBattleshipApp)();
//placementModuleLoader();
//loadBoards();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLE9BQU8sT0FBTyxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxRQUFRLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsUUFBUSxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQix5QkFBeUI7QUFDekIscUNBQXFDO0FBQ3JDLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0NBQWtDO0FBQ3RGLGVBQWUscUNBQXFDO0FBQ3BELEtBQUs7QUFDTDtBQUNBLHNDQUFzQztBQUN0QyxpQkFBaUI7QUFDakIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxlQUFlO0FBQ2YsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDdmdDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3FCO0FBQ3FFO0FBQzFGLFdBQVcsd0JBQXdCO0FBQ25DLFdBQVcsYUFBYTs7O0FBR3hCLHVHQUFpQjtBQUNqQjtBQUNBLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvc2l0ZS1jb250ZW50cy9iYXR0bGVzaGlwLWFwcC9iYXR0bGVzaGlwLWFwcC1jb2RlLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9zcmMvYmF0dGxlc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlxcbn1cXG5ib2R5IHtcXG5cXG59XFxuLyogc3R5bGVzIGZvciBoZWFkZXIgKi9cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDk4Ljc1dnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxufVxcbiNoZWFkZXIgPiBoMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IC00MHB4O1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5O1xcbiAgICB3aWR0aDogMjYwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuI25hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4NSU7XFxufVxcblxcbiNsaW5rc0xpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuLmhlYWRlckxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qanVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gICAgd2lkdGg6IDEyMHB4OyovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmV5O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4vKiBzdHlsZXMgZm9yIG1haW4gY29udGVudCAqL1xcbiNtYWluQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbiAgICBoZWlnaHQ6IDcwMHB4O1xcbn1cXG5cXG4uY29udGVudEJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuLmhvbWVQYWdlTG9hZGVyIHtcXG5cXG59XFxuXFxuLyogc3R5bGVzIGZvciBwcm9maWxlICovXFxuI3Byb2ZpbGUge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMTBweDtcXG59XFxuI3Byb2ZpbGVQaG90byB7XFxuICAgIGhlaWdodDogNDAwcHg7XFxufVxcblxcbiNwcm9maWxlRGVzY3JpcHRpb24sICNwcm9maWxlTmFtZSB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNwcm9maWxlTmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4jcHJvZmlsZVRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogc3R5bGVzIGZvciBQaGlsb3NvcGh5ICovXFxuXFxuI2l0YWxpYyB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyogc3R5bGVzIGZvciBKUyBwb3J0Zm9saW8gKi9cXG4jYXBwQnV0dG9uQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG4ub3BlbkFwcEJ1dHRvbnMge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIHdlYXRoZXIgQXBwICovXFxuXFxuI3dlYXRoZXJXcmFwcGVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDBweDtcXG59XFxuXFxuI3dlYXRoZXJIZWFkZXIsXFxuI3dlYXRoZXJDb250ZW50IHtcXG4gICAgd2lkdGg6IDM5MHB4O1xcbn1cXG5cXG4jd2VhdGhlckhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3dlYXRoZXJJY29uIHtcXG4gICAgaGVpZ2h0OiA0M3B4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXFxuI3dlYXRoZXJIZWFkZXJMb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3JlbW92ZVdlYXRoZXJBcHBCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA1NXB4O1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcXG59XFxuXFxuI3dlYXRoZXJDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzYzVmZDtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3dlYXRoZXJDb250ZW50PmRpdiB7XFxuICAgIGdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiA3JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3dlYXRoZXJCdG4sXFxuI3dlYXRoZXJJbnB1dCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBoZWlnaHQ6IDM3cHg7XFxufVxcbiN3ZWF0aGVyQnRuIHtcXG4gICAgaGVpZ2h0OiAzN3B4O1xcbn1cXG5cXG4jd2VhdGhlckJ0biB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuI2Zvcm0ge1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zZWFyY2hSZXN1bHRDb250YWluZXIge1xcbiAgICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xNzVweDsqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgICB3aWR0aDogMzMwcHg7XFxuICAgIGhlaWdodDogMjg1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjOTNjNWZkO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zZWFyY2hSZXN1bHRDb250YWluZXI+aDIge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgY29sb3I6ICNjYmQ1ZTE7XFxufVxcblxcbiN0ZW1wIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5wLWluZm8ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLypzdHlsZXMgZm9yIGJhdHRsZXNoaXAqL1xcblxcbiNjb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQzZDE7XFxuXFxufVxcblxcbiNiYXR0bGVTaGlwQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKnN0eWxlcyBmb3IgdGhlIHBsYWNlbWVudCBtb2R1bGUgKi9cXG4ucGxhY2VtZW50LW1vZHVsZS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDY2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweCwgcmdiKDUxLCA1MSwgNTEpIDBweCAwcHggMHB4IDNweDtcXG59XFxuXFxuLnBsYWNlbWVudFRleHRCb3gge1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogLTExcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XFxufVxcblxcbi5wbGFjZW1lbnRUZXh0Q29udGVudCB7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAycHggMnB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGNvbG9yOiAjMjJkM2VlO1xcbn1cXG5cXG4ubWlkZGxlU3ViY29udGFpbmVyLFxcbi5yaWdodEluZm9TdWJjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubWlkZGxlU3ViY29udGFpbmVyIHtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ucmlnaHRJbmZvU3ViY29udGFpbmVyIHtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmlnaHRJbmZvQnV0dG9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogNDBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uYm90dG9tU3ViY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1NXB4O1xcbiAgICBoZWlnaHQ6IDI1JTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG5cXG59XFxuXFxuLnBsYWNlbWVudEluc3RydWN0aW9uQm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweCwgcmdiKDUxLCA1MSwgNTEpIDBweCAwcHggMHB4IDNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uaGVhZGluZ0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcXG59XFxuXFxuLnNoaXBBbGxDbGFzc2VzQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDApO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG5cXG59XFxuXFxuLnNpbmdsZVNoaXBDbGFzc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFweDtcXG59XFxuXFxuLnNoaXBBbHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XFxufVxcblxcbi8qc3R5bGVzIGZvciB0aGUgdHdvIGdyaWRzIGFuZCBjb29yZGluYXRlcyAqL1xcbi5kb3VibGVCb2FyZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTc1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zaW5nbGVCb2FyZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi54Q29vcmRpbmF0ZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxufVxcblxcbi55Q29vcmRpbmF0ZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubGVmdFNxdWFyZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubGVmdFNxdWFyZSxcXG4udXBwZXJTcXVhcmUge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN1YmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wbGFjZW1lbnRTcXVhcmUge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zcXVhcmUsXFxuLmFpU3F1YXJlIHtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3F1YXJlOmhvdmVyLFxcbi5haVNxdWFyZTpob3ZlcixcXG4ucGxhY2VtZW50U3F1YXJlOmhvdmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbn1cXG5cXG4uc3F1YXJlQ29udGFpbmVyIHt9XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzNXB4KTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbi8qIHN0eWxlcyBmb3Igc2NvcmUgY2FyZCAqL1xcbi5zaW5nbGVCb2FyZFNjb3JlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG59XFxuXFxuLypzdHlsZXMgZm9yIGdhbWUgY29udHJvbGxlciBodWQqL1xcbi5zY29yZUtlZXBlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzkwcHg7XFxuICAgIHRleHQtc2hhZG93OiAjMjJkM2VlIDJweCAycHg7XFxuXFxufVxcblxcbi5wbGFjZW1lbnRCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyZDNlZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcXG59XFxuXFxuLmJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi53aW5uZXJDYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweCwgcmdiKDUxLCA1MSwgNTEpIDBweCAwcHggMHB4IDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGhlaWdodDogMjc2cHg7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndpbm5lckFubm91bmNlbWVudCB7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG59XFxuXFxuXFxuLypzdHlsZXMgZm9yIHRvRG9MaXN0IC8gb3JnYW5pemVyICovXFxuXFxuI2JvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKm92ZXJmbG93OiBoaWRkZW4qL1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qaGVhZGVyKi9cXG4jaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVlYWQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxlZnRIZWFkZXJDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuI29yZ2FuaXplclJpZ2h0SGVhZGVyQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRvRG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVySWNvbiB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcXG59XFxuXFxuI3JlbW92ZU9yZ25pemVyQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiAjNWVlYWQ0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xcbn1cXG5cXG5cXG4vKnNpZGViYXIqL1xcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDIxJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG5cXG59XFxuXFxuLnNpZGViYXJBZGRUYXNrQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmNyZWF0ZVRhc2sge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uc2lkZWJhckludGVncmF0ZWRJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxufVxcblxcbi5zaWRlYmFySXRlbVNlbGVjdGVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZWVhZDQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXJJbnRlZ3JhdGVkSXRlbTIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZUJhclJpZ2h0Q29tcG9uZW50QnV0dG9uQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxufVxcblxcbi5zaWRlQmFyUmlnaHRDb21wb25lbnRCdXR0b24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uc2lkZWJhckxpc3RJdGVtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5zaWRlYmFyTGlzdEl0ZW1Db250YWluZXJTZWxlY3RlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVlYWQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyTGlzdEljb25CdXR0b24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXJMaXN0SWNvbiB7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLyogbmV3IFRhc2sgUG9wdXAgKi9cXG4ubmV3VGFza0NhcmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGxlZnQ6IDI1MHB4O1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLnRhc2tDYXJkVGV4dEJvcmRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRhc2tJbmZvRmlyc3RSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udGFza0luZm9JdGVtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jYXJkQnV0dG9uSW50ZWdyYXRvciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnRhc2tDYXJkQnV0dG9uIHtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2FkZFRhc2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVlYWQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiN0aXRsZSxcXG4jZGF0ZSxcXG4jbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLyogbmV3IExpc3QgUG9wdXAgKi9cXG4ubmV3TGlzdENhcmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGxlZnQ6IDI1MHB4O1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XFxuICAgIGdhcDogMzVweDtcXG59XFxuXFxuLmNhcmRUZXh0Qm9yZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2xpc3ROYW1lIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2xpc3ROYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5uZXdMaXN0Q2FyZEJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNsaXN0QWRkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlZWFkNDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBtYWluIGxpc3QgY29udGVudCAqL1xcblxcbi5tYWluQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDc5JVxcbn1cXG5cXG4uaW50ZWdyYXRlZEl0ZW0ge1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuXFxufVxcblxcbi50aXRsZUNvbnRhaW5lciB7fVxcblxcbi5saXN0Q29udGVudENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5saXN0SXRlbUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ubGlzdEl0ZW1JY29uQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdEl0ZW1JY29uQ29udGFpbmVyPmJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdEl0ZW1JY29uQ29udGFpbmVyPmJ1dHRvbj5pbWcge1xcbiAgICB3aWR0aDogMjVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkI7a0JBQ2M7SUFDZCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjtBQUNBLDRCQUE0QjtBQUM1QjtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixz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O0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlxcbn1cXG5ib2R5IHtcXG5cXG59XFxuLyogc3R5bGVzIGZvciBoZWFkZXIgKi9cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDk4Ljc1dnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxufVxcbiNoZWFkZXIgPiBoMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IC00MHB4O1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5O1xcbiAgICB3aWR0aDogMjYwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuI25hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4NSU7XFxufVxcblxcbiNsaW5rc0xpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuLmhlYWRlckxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qanVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gICAgd2lkdGg6IDEyMHB4OyovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmV5O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4vKiBzdHlsZXMgZm9yIG1haW4gY29udGVudCAqL1xcbiNtYWluQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbiAgICBoZWlnaHQ6IDcwMHB4O1xcbn1cXG5cXG4uY29udGVudEJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuLmhvbWVQYWdlTG9hZGVyIHtcXG5cXG59XFxuXFxuLyogc3R5bGVzIGZvciBwcm9maWxlICovXFxuI3Byb2ZpbGUge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMTBweDtcXG59XFxuI3Byb2ZpbGVQaG90byB7XFxuICAgIGhlaWdodDogNDAwcHg7XFxufVxcblxcbiNwcm9maWxlRGVzY3JpcHRpb24sICNwcm9maWxlTmFtZSB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNwcm9maWxlTmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4jcHJvZmlsZVRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogc3R5bGVzIGZvciBQaGlsb3NvcGh5ICovXFxuXFxuI2l0YWxpYyB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyogc3R5bGVzIGZvciBKUyBwb3J0Zm9saW8gKi9cXG4jYXBwQnV0dG9uQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG4ub3BlbkFwcEJ1dHRvbnMge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIHdlYXRoZXIgQXBwICovXFxuXFxuI3dlYXRoZXJXcmFwcGVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDBweDtcXG59XFxuXFxuI3dlYXRoZXJIZWFkZXIsXFxuI3dlYXRoZXJDb250ZW50IHtcXG4gICAgd2lkdGg6IDM5MHB4O1xcbn1cXG5cXG4jd2VhdGhlckhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3dlYXRoZXJJY29uIHtcXG4gICAgaGVpZ2h0OiA0M3B4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXFxuI3dlYXRoZXJIZWFkZXJMb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3JlbW92ZVdlYXRoZXJBcHBCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA1NXB4O1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcXG59XFxuXFxuI3dlYXRoZXJDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzYzVmZDtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3dlYXRoZXJDb250ZW50PmRpdiB7XFxuICAgIGdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiA3JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3dlYXRoZXJCdG4sXFxuI3dlYXRoZXJJbnB1dCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBoZWlnaHQ6IDM3cHg7XFxufVxcbiN3ZWF0aGVyQnRuIHtcXG4gICAgaGVpZ2h0OiAzN3B4O1xcbn1cXG5cXG4jd2VhdGhlckJ0biB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuI2Zvcm0ge1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zZWFyY2hSZXN1bHRDb250YWluZXIge1xcbiAgICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xNzVweDsqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgICB3aWR0aDogMzMwcHg7XFxuICAgIGhlaWdodDogMjg1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjOTNjNWZkO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zZWFyY2hSZXN1bHRDb250YWluZXI+aDIge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgY29sb3I6ICNjYmQ1ZTE7XFxufVxcblxcbiN0ZW1wIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5wLWluZm8ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLypzdHlsZXMgZm9yIGJhdHRsZXNoaXAqL1xcblxcbiNjb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQzZDE7XFxuXFxufVxcblxcbiNiYXR0bGVTaGlwQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKnN0eWxlcyBmb3IgdGhlIHBsYWNlbWVudCBtb2R1bGUgKi9cXG4ucGxhY2VtZW50LW1vZHVsZS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDY2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweCwgcmdiKDUxLCA1MSwgNTEpIDBweCAwcHggMHB4IDNweDtcXG59XFxuXFxuLnBsYWNlbWVudFRleHRCb3gge1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogLTExcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XFxufVxcblxcbi5wbGFjZW1lbnRUZXh0Q29udGVudCB7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAycHggMnB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGNvbG9yOiAjMjJkM2VlO1xcbn1cXG5cXG4ubWlkZGxlU3ViY29udGFpbmVyLFxcbi5yaWdodEluZm9TdWJjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubWlkZGxlU3ViY29udGFpbmVyIHtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ucmlnaHRJbmZvU3ViY29udGFpbmVyIHtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmlnaHRJbmZvQnV0dG9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogNDBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uYm90dG9tU3ViY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1NXB4O1xcbiAgICBoZWlnaHQ6IDI1JTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG5cXG59XFxuXFxuLnBsYWNlbWVudEluc3RydWN0aW9uQm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweCwgcmdiKDUxLCA1MSwgNTEpIDBweCAwcHggMHB4IDNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uaGVhZGluZ0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcXG59XFxuXFxuLnNoaXBBbGxDbGFzc2VzQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDApO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG5cXG59XFxuXFxuLnNpbmdsZVNoaXBDbGFzc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFweDtcXG59XFxuXFxuLnNoaXBBbHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XFxufVxcblxcbi8qc3R5bGVzIGZvciB0aGUgdHdvIGdyaWRzIGFuZCBjb29yZGluYXRlcyAqL1xcbi5kb3VibGVCb2FyZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTc1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zaW5nbGVCb2FyZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi54Q29vcmRpbmF0ZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxufVxcblxcbi55Q29vcmRpbmF0ZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubGVmdFNxdWFyZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubGVmdFNxdWFyZSxcXG4udXBwZXJTcXVhcmUge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN1YmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wbGFjZW1lbnRTcXVhcmUge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zcXVhcmUsXFxuLmFpU3F1YXJlIHtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3F1YXJlOmhvdmVyLFxcbi5haVNxdWFyZTpob3ZlcixcXG4ucGxhY2VtZW50U3F1YXJlOmhvdmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbn1cXG5cXG4uc3F1YXJlQ29udGFpbmVyIHt9XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzNXB4KTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbi8qIHN0eWxlcyBmb3Igc2NvcmUgY2FyZCAqL1xcbi5zaW5nbGVCb2FyZFNjb3JlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG59XFxuXFxuLypzdHlsZXMgZm9yIGdhbWUgY29udHJvbGxlciBodWQqL1xcbi5zY29yZUtlZXBlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzkwcHg7XFxuICAgIHRleHQtc2hhZG93OiAjMjJkM2VlIDJweCAycHg7XFxuXFxufVxcblxcbi5wbGFjZW1lbnRCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyZDNlZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcXG59XFxuXFxuLmJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi53aW5uZXJDYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweCwgcmdiKDUxLCA1MSwgNTEpIDBweCAwcHggMHB4IDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGhlaWdodDogMjc2cHg7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndpbm5lckFubm91bmNlbWVudCB7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG59XFxuXFxuXFxuLypzdHlsZXMgZm9yIHRvRG9MaXN0IC8gb3JnYW5pemVyICovXFxuXFxuI2JvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKm92ZXJmbG93OiBoaWRkZW4qL1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qaGVhZGVyKi9cXG4jaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVlYWQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxlZnRIZWFkZXJDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuI29yZ2FuaXplclJpZ2h0SGVhZGVyQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRvRG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVySWNvbiB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcXG59XFxuXFxuI3JlbW92ZU9yZ25pemVyQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiAjNWVlYWQ0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xcbn1cXG5cXG5cXG4vKnNpZGViYXIqL1xcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDIxJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG5cXG59XFxuXFxuLnNpZGViYXJBZGRUYXNrQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmNyZWF0ZVRhc2sge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uc2lkZWJhckludGVncmF0ZWRJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxufVxcblxcbi5zaWRlYmFySXRlbVNlbGVjdGVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZWVhZDQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXJJbnRlZ3JhdGVkSXRlbTIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZUJhclJpZ2h0Q29tcG9uZW50QnV0dG9uQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxufVxcblxcbi5zaWRlQmFyUmlnaHRDb21wb25lbnRCdXR0b24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uc2lkZWJhckxpc3RJdGVtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5zaWRlYmFyTGlzdEl0ZW1Db250YWluZXJTZWxlY3RlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVlYWQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyTGlzdEljb25CdXR0b24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXJMaXN0SWNvbiB7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLyogbmV3IFRhc2sgUG9wdXAgKi9cXG4ubmV3VGFza0NhcmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGxlZnQ6IDI1MHB4O1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLnRhc2tDYXJkVGV4dEJvcmRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRhc2tJbmZvRmlyc3RSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udGFza0luZm9JdGVtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jYXJkQnV0dG9uSW50ZWdyYXRvciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnRhc2tDYXJkQnV0dG9uIHtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2FkZFRhc2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVlYWQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiN0aXRsZSxcXG4jZGF0ZSxcXG4jbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLyogbmV3IExpc3QgUG9wdXAgKi9cXG4ubmV3TGlzdENhcmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGxlZnQ6IDI1MHB4O1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XFxuICAgIGdhcDogMzVweDtcXG59XFxuXFxuLmNhcmRUZXh0Qm9yZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2xpc3ROYW1lIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2xpc3ROYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5uZXdMaXN0Q2FyZEJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNsaXN0QWRkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlZWFkNDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBtYWluIGxpc3QgY29udGVudCAqL1xcblxcbi5tYWluQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDc5JVxcbn1cXG5cXG4uaW50ZWdyYXRlZEl0ZW0ge1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuXFxufVxcblxcbi50aXRsZUNvbnRhaW5lciB7fVxcblxcbi5saXN0Q29udGVudENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5saXN0SXRlbUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ubGlzdEl0ZW1JY29uQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdEl0ZW1JY29uQ29udGFpbmVyPmJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdEl0ZW1JY29uQ29udGFpbmVyPmJ1dHRvbj5pbWcge1xcbiAgICB3aWR0aDogMjVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5jbGFzcyBTcXVhcmUge1xuICAgIGNvbnN0cnVjdG9yKFgsIFkpIHtcbiAgICAgICAgdGhpcy5YID0gWDtcbiAgICAgICAgdGhpcy5ZID0gWTtcbiAgICAgICAgdGhpcy5pc0hpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRhaW5zU2hpcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNoaXAgPSBudWxsO1xuICAgICAgICAvL3RoaXMuc3RhcnQgPSBudWxsXG4gICAgfVxufVxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihpbnB1dCkge1xuICAgICAgICB0aGlzLnhBeGlzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ11cbiAgICAgICAgdGhpcy55QXhpcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF1cbiAgICAgICAgdGhpcy5ncmlkID0gdGhpcy5tYWtlR3JpZCgpXG4gICAgfVxuICAgIHJlY2VpdmVBdHRhY2soeExldHRlciwgeU51bSkge1xuICAgICAgICBsZXQgZm91bmQgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IHhMZXR0ZXIgJiYgc3F1YXJlLlkgPT0geU51bSkpO1xuICAgICAgICBmb3VuZC5pc0hpdCA9IHRydWU7XG4gICAgICAgIGlmIChmb3VuZC5jb250YWluc1NoaXAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm91bmQuc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHJldHVybiBmb3VuZC5zaGlwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3VuZC5zaGlwO1xuICAgIH1cbiAgICBtYWtlR3JpZCgpIHtcbiAgICAgICAgbGV0IGdyaWQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnhBeGlzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMueUF4aXMubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gbmV3IFNxdWFyZSh0aGlzLnhBeGlzW3hdLCB0aGlzLnlBeGlzW3ldKTtcbiAgICAgICAgICAgICAgICBncmlkLnB1c2goc3F1YXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICB9XG4gICAgcG9wdWxhdGVTaGlwKHNpemUsIHhTdGFydCwgeVN0YXJ0LCBkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKHNpemUgPiAxKSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwibm9ydGhcIikge1xuICAgICAgICAgICAgICAgIGlmICh5U3RhcnQgPCBzaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnb3ZlcmZsb3chJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJzb3V0aFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh5U3RhcnQgLSAxKSA+ICgxMCAtIHNpemUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnb3ZlcmZsb3chJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJ3ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy54QXhpcy5pbmRleE9mKHhTdGFydCkgPCAoc2l6ZSAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnb3ZlcmZsb3chJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJlYXN0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy54QXhpcy5pbmRleE9mKHhTdGFydCkgPiAoMTAgLSBzaXplKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ292ZXJmbG93ISdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld1NoaXAgPSBuZXcgU2hpcChzaXplLCB4U3RhcnQsIHlTdGFydCwgZGlyZWN0aW9uKTtcbiAgICAgICAgbmV3U2hpcC5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIGxldCBzdGFydGluZ1NxdWFyZSA9IHRoaXMuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gbmV3U2hpcC54U3RhcnQgJiYgc3F1YXJlLlkgPT0gbmV3U2hpcC55U3RhcnQpKTtcbiAgICAgICAgbGV0IHNxdWFyZXNDb250YWluaW5nTmV3U2hpcCA9IFtdO1xuICAgICAgICBzdGFydGluZ1NxdWFyZS5jb250YWluc1NoaXAgPSB0cnVlO1xuICAgICAgICBzdGFydGluZ1NxdWFyZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwLnB1c2goc3RhcnRpbmdTcXVhcmUpO1xuICAgICAgICBsZXQgeUluZGV4ID0gdGhpcy5ncmlkLmluZGV4T2Yoc3RhcnRpbmdTcXVhcmUpO1xuICAgICAgICB3aGlsZSAoc2l6ZSA+IDEpIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJub3J0aFwiKSB7XG4gICAgICAgICAgICAgICAgeVN0YXJ0ID0geVN0YXJ0IC0gMTtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSBuZXdTaGlwLnhTdGFydCAmJiBzcXVhcmUuWSA9PSB5U3RhcnQpKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY29udGFpbnNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgICAgICAgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwLnB1c2goc3F1YXJlKVxuICAgICAgICAgICAgICAgIHNpemUgPSBzaXplIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJzb3V0aFwiKSB7XG4gICAgICAgICAgICAgICAgLy95U3RhcnQgPSB5U3RhcnQgKyAxO1xuICAgICAgICAgICAgICAgIHlJbmRleCArPSAxXG4gICAgICAgICAgICAgICAgLy9sZXQgc3F1YXJlID0gdGhpcy5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSBuZXdTaGlwLnhTdGFydCAmJiBzcXVhcmUuWSA9PSB5U3RhcnQpKTtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5ncmlkW3lJbmRleF07XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNvbnRhaW5zU2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgICAgIHNxdWFyZXNDb250YWluaW5nTmV3U2hpcC5wdXNoKHNxdWFyZSlcbiAgICAgICAgICAgICAgICBzaXplID0gc2l6ZSAtIDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBcImVhc3RcIikge1xuICAgICAgICAgICAgICAgIHhTdGFydCA9IHRoaXMueEF4aXNbdGhpcy54QXhpcy5pbmRleE9mKHhTdGFydCkgKyAxXTtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSB4U3RhcnQgJiYgc3F1YXJlLlkgPT0gbmV3U2hpcC55U3RhcnQpKVxuICAgICAgICAgICAgICAgIHNxdWFyZS5jb250YWluc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgICAgICBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXAucHVzaChzcXVhcmUpO1xuICAgICAgICAgICAgICAgIHNpemUgPSBzaXplIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwid2VzdFwiKSB7XG4gICAgICAgICAgICAgICAgeFN0YXJ0ID0gdGhpcy54QXhpc1t0aGlzLnhBeGlzLmluZGV4T2YoeFN0YXJ0KSAtIDFdO1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IHhTdGFydCAmJiBzcXVhcmUuWSA9PSBuZXdTaGlwLnlTdGFydCkpXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNvbnRhaW5zU2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgICAgIHNxdWFyZXNDb250YWluaW5nTmV3U2hpcC5wdXNoKHNxdWFyZSlcbiAgICAgICAgICAgICAgICBzaXplID0gc2l6ZSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxdWFyZXNDb250YWluaW5nTmV3U2hpcDtcbiAgICAgICAgLy9hZGQgc29tZSBjb2RlIHRvIGFjY291bnQgZm9yIHNpemUgPiAxIGFuZCBkaXJlY3Rpb25cbiAgICB9XG4gICAgZGVwb3B1bGF0ZVNoaXAoc2l6ZSwgeFN0YXJ0LCB5U3RhcnQsIGRpcmVjdGlvbikge1xuICAgICAgICBsZXQgbmV3U2hpcCA9IG5ldyBTaGlwKHNpemUsIHhTdGFydCwgeVN0YXJ0KTtcbiAgICAgICAgbGV0IHN0YXJ0aW5nU3F1YXJlID0gdGhpcy5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSBuZXdTaGlwLnhTdGFydCAmJiBzcXVhcmUuWSA9PSBuZXdTaGlwLnlTdGFydCkpO1xuICAgICAgICBsZXQgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwID0gW107XG4gICAgICAgIHN0YXJ0aW5nU3F1YXJlLmNvbnRhaW5zU2hpcCA9IGZhbHNlO1xuICAgICAgICBzdGFydGluZ1NxdWFyZS5zaGlwID0gbnVsbDtcbiAgICAgICAgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwLnB1c2goc3RhcnRpbmdTcXVhcmUpO1xuICAgICAgICBsZXQgeUluZGV4ID0gdGhpcy5ncmlkLmluZGV4T2Yoc3RhcnRpbmdTcXVhcmUpO1xuICAgICAgICB3aGlsZSAoc2l6ZSA+IDEpIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJub3J0aFwiKSB7XG4gICAgICAgICAgICAgICAgeVN0YXJ0ID0geVN0YXJ0IC0gMTtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5ncmlkLmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSBuZXdTaGlwLnhTdGFydCAmJiBzcXVhcmUuWSA9PSB5U3RhcnQpKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY29udGFpbnNTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNxdWFyZXNDb250YWluaW5nTmV3U2hpcC5wdXNoKHNxdWFyZSlcbiAgICAgICAgICAgICAgICBzaXplID0gc2l6ZSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwic291dGhcIikge1xuICAgICAgICAgICAgICAgIC8veVN0YXJ0ID0geVN0YXJ0ICsgMTtcbiAgICAgICAgICAgICAgICB5SW5kZXggKz0gMVxuICAgICAgICAgICAgICAgIC8vbGV0IHNxdWFyZSA9IHRoaXMuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gbmV3U2hpcC54U3RhcnQgJiYgc3F1YXJlLlkgPT0geVN0YXJ0KSk7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuZ3JpZFt5SW5kZXhdO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jb250YWluc1NoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgc3F1YXJlc0NvbnRhaW5pbmdOZXdTaGlwLnB1c2goc3F1YXJlKVxuICAgICAgICAgICAgICAgIHNpemUgPSBzaXplIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwiZWFzdFwiKSB7XG4gICAgICAgICAgICAgICAgeFN0YXJ0ID0gdGhpcy54QXhpc1t0aGlzLnhBeGlzLmluZGV4T2YoeFN0YXJ0KSArIDFdO1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IHhTdGFydCAmJiBzcXVhcmUuWSA9PSBuZXdTaGlwLnlTdGFydCkpXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNvbnRhaW5zU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXAucHVzaChzcXVhcmUpO1xuICAgICAgICAgICAgICAgIHNpemUgPSBzaXplIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwid2VzdFwiKSB7XG4gICAgICAgICAgICAgICAgeFN0YXJ0ID0gdGhpcy54QXhpc1t0aGlzLnhBeGlzLmluZGV4T2YoeFN0YXJ0KSAtIDFdO1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IHhTdGFydCAmJiBzcXVhcmUuWSA9PSBuZXdTaGlwLnlTdGFydCkpXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNvbnRhaW5zU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXAucHVzaChzcXVhcmUpXG4gICAgICAgICAgICAgICAgc2l6ZSA9IHNpemUgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcXVhcmVzQ29udGFpbmluZ05ld1NoaXA7XG4gICAgICAgIC8vYWRkIHNvbWUgY29kZSB0byBhY2NvdW50IGZvciBzaXplID4gMSBhbmQgZGlyZWN0aW9uXG4gICAgfVxufVxuY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKHNpemUsIHhTdGFydCwgeVN0YXJ0LCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnNpemUgPSBzaXplXG4gICAgdGhpcy5oaXRzID0gW11cbiAgICB0aGlzLnhTdGFydCA9IHhTdGFydFxuICAgIHRoaXMueVN0YXJ0ID0geVN0YXJ0XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBudWxsXG4gIH1cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cy5wdXNoKCdoaXQnKTtcbiAgICBpZiAodGhpcy5oaXRzLmxlbmd0aCA9PSB0aGlzLnNpemUpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzU3VuaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5oaXQ7XG4gICAgfVxuICB9XG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gJ3N1bmshJ1xuICB9XG59IFxuXG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVzKGFycikge1xuICAgIHZhciB1bmlxdWUgPSBbXTtcbiAgICBhcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKCF1bmlxdWUuaW5jbHVkZXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHVuaXF1ZS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHVuaXF1ZTtcbn1cbiBcbi8vc3VpdGUgb2YgZnVuY3Rpb25zIGZvciBsb2FkaW5nIHRoZSB0d28gRE9NIGJvYXJkcyAmIHNjb3JlIGtlZXBlciBjYXJkXG5mdW5jdGlvbiBzcXVhcmVMb2FkZXIoY29vcmRpbmF0ZSwgcGxheWVyID0gXCJhaVwiKSB7XG4gICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICBpZiAoY29vcmRpbmF0ZS5pc0hpdCA9PSB0cnVlKSB7XG4gICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM2ZWU3YjdcIjtcbiAgICB9XG4gICAgaWYgKHBsYXllciA9PSBcImFpXCIpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3NxdWFyZScpO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnYWlTcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHggPSBjb29yZGluYXRlLlg7XG4gICAgICAgICAgICBsZXQgeSA9IGNvb3JkaW5hdGUuWTtcbiAgICAgICAgICAgIGF0dGFja0FJKHgsIHkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNvb3JkaW5hdGUuaXNIaXQgPT0gdHJ1ZSAmJiBjb29yZGluYXRlLmNvbnRhaW5zU2hpcCA9PSB0cnVlKSB7XG4gICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICB9XG4gICAgLy9pZiAoY29vcmRpbmF0ZS5jb250YWluc1NoaXAgPT0gdHJ1ZSkge1xuICAgICAgICAvL3NxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgIC8vfVxuICAgIGlmIChwbGF5ZXIgIT0gXCJhaVwiKSB7XG4gICAgICAgIGlmIChjb29yZGluYXRlLmNvbnRhaW5zU2hpcCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3F1YXJlO1xufVxuZnVuY3Rpb24gYm9hcmRMb2FkZXIoYm9hcmQsIHBsYXllcikge1xuICAgIGxldCBhcnJheU9mR3JpZENvb3JkaW5hdGVzID0gYm9hcmQuZ3JpZDtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY29udGFpbmVyJyk7XG4gICAgYXJyYXlPZkdyaWRDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGxldCBzcXVhcmUgPSBzcXVhcmVMb2FkZXIoY29vcmRpbmF0ZSwgcGxheWVyKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfSlcbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcbmZ1bmN0aW9uIHhDb29yZGluYXRlTG9hZGVyKCkge1xuICAgIGxldCBhcnJheU9mWENvb3JkaW5hdGVzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd4Q29vcmRpbmF0ZUNvbnRhaW5lcicpO1xuICAgIGFycmF5T2ZYQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCd1cHBlclNxdWFyZScpO1xuICAgICAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBjb29yZGluYXRlO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24geENvb3JkaW5hdGVEb3VibGVyKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgneENvb3JkaW5hdGVDb250YWluZXJEb3VibGUnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoeENvb3JkaW5hdGVMb2FkZXIoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHhDb29yZGluYXRlTG9hZGVyKCkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiB5Q29vcmRpbmF0ZUxvYWRlcigpIHtcbiAgICBsZXQgYXJyYXlPZlhDb29yZGluYXRlcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF07XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd5Q29vcmRpbmF0ZUNvbnRhaW5lcicpO1xuICAgIGFycmF5T2ZYQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdsZWZ0U3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS50ZXh0Q29udGVudCA9IGNvb3JkaW5hdGU7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiBwbGF5ZXJDb29yZGluYXRlZEJvYXJkTG9hZGVyKGJvYXJkKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaW5nbGVCb2FyZENvbnRhaW5lcicpXG4gICAgbGV0IHN1YmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1YmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWJjb250YWluZXInKTtcbiAgICAgICAgc3ViY29udGFpbmVyLmFwcGVuZENoaWxkKHlDb29yZGluYXRlTG9hZGVyKCkpO1xuICAgICAgICBzdWJjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRMb2FkZXIoYm9hcmQsIFwicGxheWVyXCIpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHhDb29yZGluYXRlTG9hZGVyKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViY29udGFpbmVyKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gYWlDb29yZGluYXRlZEJvYXJkTG9hZGVyKGJvYXJkKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaW5nbGVCb2FyZENvbnRhaW5lcicpXG4gICAgbGV0IHN1YmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1YmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWJjb250YWluZXInKTtcbiAgICAgICAgc3ViY29udGFpbmVyLmFwcGVuZENoaWxkKHlDb29yZGluYXRlTG9hZGVyKCkpO1xuICAgICAgICBzdWJjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRMb2FkZXIoYm9hcmQpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHhDb29yZGluYXRlTG9hZGVyKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViY29udGFpbmVyKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gdHdvQm9hcmRDb250ZW50R2VuZXJhdG9yKHBsYXllckJvYXJkLCBvcHBvbmVudEJvYXJkKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkb3VibGVCb2FyZENvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJDb29yZGluYXRlZEJvYXJkTG9hZGVyKHBsYXllckJvYXJkKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFpQ29vcmRpbmF0ZWRCb2FyZExvYWRlcihvcHBvbmVudEJvYXJkKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmZ1bmN0aW9uIHR3b0JvYXJkRE9NTG9hZGVyKHBsYXllckJvYXJkLCBvcHBvbmVudEJvYXJkKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodHdvQm9hcmRDb250ZW50R2VuZXJhdG9yKHBsYXllckJvYXJkLCBvcHBvbmVudEJvYXJkKSk7IFxufVxuZnVuY3Rpb24gc2NvcmVLZWVwZXJHZW5lcmF0b3IocGxheWVyLCBpbnB1dCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2luZ2xlQm9hcmRTY29yZUNvbnRhaW5lcicpXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBsZXQgc2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gcGxheWVyICsgXCIgU2NvcmU6IFwiXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2NvcmUpO1xuICAgIHNjb3JlLnRleHRDb250ZW50ID0gaW5wdXQgKyBcIi81XCI7XG4gICAgcmV0dXJuIGNvbnRhaW5lclxufVxuZnVuY3Rpb24gZG91YmxlU2NvcmVLZWVwZXJHZW5lcmF0b3IocGxheWVyMSwgaW5wdXQxLCBwbGF5ZXIyLCBpbnB1dDIpIHtcbiAgICBsZXQgc2NvcmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY29yZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzY29yZUtlZXBlckNvbnRhaW5lcicpO1xuICAgIHNjb3JlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjb3JlS2VlcGVyR2VuZXJhdG9yKHBsYXllcjEsIGlucHV0MSkpO1xuICAgIHNjb3JlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjb3JlS2VlcGVyR2VuZXJhdG9yKHBsYXllcjIsIGlucHV0MikpO1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLnByZXBlbmQoc2NvcmVDb250YWluZXIpXG59XG5mdW5jdGlvbiBhbm5vdW5jZVdpbm5lckNhcmQodGV4dCkge1xuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd3aW5uZXJDYXJkJyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChhbm5vdW5jZVdpbm5lclRleHQodGV4dCkpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQocmVzdGFydEdhbWVCdXR0b24oKSk7XG4gICAgY29udGFpbmVyLmZpcnN0Q2hpbGQuYXBwZW5kQ2hpbGQoY2FyZCk7XG59XG5mdW5jdGlvbiBhbm5vdW5jZVdpbm5lclRleHQodGV4dCkge1xuICAgIGxldCBhbm5vdW5jZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGFubm91bmNlbWVudC5jbGFzc0xpc3QuYWRkKCd3aW5uZXJBbm5vdW5jZW1lbnRUZXh0Jyk7XG4gICAgYW5ub3VuY2VtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gYW5ub3VuY2VtZW50O1xufVxuZnVuY3Rpb24gcmVzdGFydEdhbWVCdXR0b24oKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVzdGFydCBHYW1lXCI7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnRCdXR0b25cIik7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzdGFydEJvYXJkKVxuICAgIHJldHVybiBidXR0b247XG59XG5cblxuXG5jbGFzcyBnYW1lQm9hcmRMb2FkZXIge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllckJvYXJkLCBwbGF5ZXIsIGFpQm9hcmQsIGFpKSB7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQgPSBwbGF5ZXJCb2FyZDtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMuYWlCb2FyZCA9IGFpQm9hcmQ7XG4gICAgICAgIHRoaXMuYWkgPSBhaVxuICAgIH1cbiAgICByZWxvYWRCb2FyZHMoKSB7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIHRoaXMuYWlCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgdHdvQm9hcmRET01Mb2FkZXIodGhpcy5wbGF5ZXJCb2FyZCwgdGhpcy5haUJvYXJkKTtcbiAgICB9XG4gICAgcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQucG9wdWxhdGVTaGlwKHNpemUsIHgsIHksIGRpcmVjdGlvbik7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZC5uZXh0U2libGluZyk7XG4gICAgICAgIHR3b0JvYXJkRE9NTG9hZGVyKHRoaXMucGxheWVyQm9hcmQsIHRoaXMuYWlCb2FyZCk7XG4gICAgfVxuICAgIGRlcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQuZGVwb3B1bGF0ZVNoaXAoc2l6ZSwgeCwgeSwgZGlyZWN0aW9uKTtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgdHdvQm9hcmRET01Mb2FkZXIodGhpcy5wbGF5ZXJCb2FyZCwgdGhpcy5haUJvYXJkKTtcbiAgICB9XG4gICAgc2ltcGxlUG9wdWxhdGUoKSB7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQucG9wdWxhdGVTaGlwKDIsICdJJywgNCwgXCJlYXN0XCIpO1xuICAgICAgICB0aGlzLnBsYXllckJvYXJkLnBvcHVsYXRlU2hpcCg0LCAnQycsIDUsIFwiZWFzdFwiKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5wb3B1bGF0ZVNoaXAoMywgJ0onLCA2LCBcInNvdXRoXCIpO1xuICAgICAgICB0aGlzLnBsYXllckJvYXJkLnBvcHVsYXRlU2hpcCgzLCAnQicsIDgsIFwic291dGhcIik7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQucG9wdWxhdGVTaGlwKDIsICdFJywgOSwgXCJlYXN0XCIpO1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuICAgICAgICB0d29Cb2FyZERPTUxvYWRlcih0aGlzLnBsYXllckJvYXJkLCB0aGlzLmFpQm9hcmQpO1xuICAgIH1cbiAgICBhdHRhY2tBSSh4LCB5KSB7XG4gICAgICAgIHRoaXMuYWlCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuICAgICAgICB0d29Cb2FyZERPTUxvYWRlcih0aGlzLnBsYXllckJvYXJkLCB0aGlzLmFpQm9hcmQpO1xuICAgICAgICB0aGlzLmtlZXBTY29yZSgpXG4gICAgfVxuICAgIGF0dGFja1BsYXllcih4LCB5KSB7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgdHdvQm9hcmRET01Mb2FkZXIodGhpcy5wbGF5ZXJCb2FyZCwgdGhpcy5haUJvYXJkKTtcbiAgICAgICAgdGhpcy5rZWVwU2NvcmUoKVxuICAgIH1cbiAgICBwcm9kdWNlQXJyYXlPZlBsYXllclNoaXBzKCkge1xuICAgICAgICBsZXQgcGxheWVyU2hpcHMgPSBbXVxuICAgICAgICB0aGlzLnBsYXllckJvYXJkLmdyaWQuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlLnNoaXAgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBzLnB1c2goc3F1YXJlLnNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvL3BsYXllclNoaXBzIGNvbnRhaW5zIGR1cGxpY2F0ZXMgb2YgZWFjaCBzaGlwLCBzbyBJIGZpbHRlciB0aGUgYXJyYXkgYmVsb3dcbiAgICAgICAgbGV0IHBsYXllclNoaXBzRmlsdGVyZWQgPSBbXTtcbiAgICAgICAgcGxheWVyU2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmICghcGxheWVyU2hpcHNGaWx0ZXJlZC5pbmNsdWRlcyhzaGlwKSkge1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBzRmlsdGVyZWQucHVzaChzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHBsYXllclNoaXBzRmlsdGVyZWQ7XG4gICAgfVxuICAgIHByb2R1Y2VBcnJheU9mQWlTaGlwcygpIHtcbiAgICAgICAgbGV0IGFpU2hpcHMgPSBbXVxuICAgICAgICB0aGlzLmFpQm9hcmQuZ3JpZC5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIGlmIChzcXVhcmUuc2hpcCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYWlTaGlwcy5wdXNoKHNxdWFyZS5zaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLy9wbGF5ZXJTaGlwcyBjb250YWlucyBkdXBsaWNhdGVzIG9mIGVhY2ggc2hpcCwgc28gSSBmaWx0ZXIgdGhlIGFycmF5IGJlbG93XG4gICAgICAgIGxldCBhaVNoaXBzRmlsdGVyZWQgPSBbXTtcbiAgICAgICAgYWlTaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgaWYgKCFhaVNoaXBzRmlsdGVyZWQuaW5jbHVkZXMoc2hpcCkpIHtcbiAgICAgICAgICAgICAgICBhaVNoaXBzRmlsdGVyZWQucHVzaChzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFpU2hpcHNGaWx0ZXJlZDtcbiAgICB9XG4gICAga2VlcFNjb3JlKCkge1xuICAgICAgICBsZXQgcGxheWVyU2hpcHMgPSB0aGlzLnByb2R1Y2VBcnJheU9mUGxheWVyU2hpcHMoKTtcbiAgICAgICAgbGV0IGFpU2hpcHMgPSB0aGlzLnByb2R1Y2VBcnJheU9mQWlTaGlwcygpO1xuICAgICAgICBsZXQgcGxheWVyVGFsbHkgPSAwXG4gICAgICAgIGxldCBhaVRhbGx5ID0gMFxuICAgICAgICBwbGF5ZXJTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5oaXRzLmxlbmd0aCA9PSBzaGlwLnNpemUpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJUYWxseSArPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGFpU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuaGl0cy5sZW5ndGggPT0gc2hpcC5zaXplKSB7XG4gICAgICAgICAgICAgICAgYWlUYWxseSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgZG91YmxlU2NvcmVLZWVwZXJHZW5lcmF0b3IoXCJQbGF5ZXJcIiwgYWlUYWxseSwgXCJBSVwiLCBwbGF5ZXJUYWxseSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWlUYWxseSA9IFwiICsgYWlUYWxseSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyVGFsbHkgPVwiICsgcGxheWVyVGFsbHkpO1xuICAgICAgICBpZiAoYWlUYWxseSA9PSA1KSB7XG4gICAgICAgICAgICBhbm5vdW5jZVdpbm5lckNhcmQoXCJZb3Ugd2luIVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyVGFsbHkgPT0gNSkge1xuICAgICAgICAgICAgYW5ub3VuY2VXaW5uZXJDYXJkKFwiQUkgd2lucyFcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFpU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5haVNxdWFyZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhhaVNxdWFyZXMpO1xuXG5cbiAgICAgICAgLy9jb25zdHJ1Y3QgYSBsaXN0IG9mIGdhbWVib2FyZC5ncmlkIHNoaXBzXG4gICAgICAgIC8vZm9yIGFueSBzaGlwLCBpZiBzaGlwLmhpdHMgPT0gc2l6ZSwgYWRkICsxIHRvIHNjb3JlXG4gICAgICAgIC8vaW5wdXQgc2NvcmUgaW4gZG91YmxlU2NvcmVLZWVwZXJHZW5lcmF0b3JcbiAgICB9XG4gICAgY29weUFJZ3JpZCgpIHtcbiAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5haUJvYXJkLmdyaWQuc2xpY2UoKTtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICByYW5kb21QYXJhbWV0ZXJTZWxlY3RvcihhcnJheSwgc2l6ZSkge1xuICAgICAgICBsZXQgcmFuZG9tID0gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XG4gICAgICAgIGxldCB4ID0gcmFuZG9tLlg7XG4gICAgICAgIGxldCB5ID0gcmFuZG9tLlk7XG4gICAgICAgIGxldCBpbmRleCA9IGFycmF5LmluZGV4T2YocmFuZG9tKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyYW5kb20pO1xuICAgICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5yYW5kb21EaXJlY3Rpb25Qcm9kdWNlcigpO1xuICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXggKyAxLCAxKTtcbiAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4IC0gMSwgMSk7XG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCArIDEwLCAxKTtcbiAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4IC0gMTAsIDEpO1xuICAgICAgICBpZiAoc2l6ZSA+IDEgJiYgZGlyZWN0aW9uID09IFwic291dGhcIikge1xuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4ICsgMiwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemUgPiAxICYmIGRpcmVjdGlvbiA9PSBcIm5vcnRoXCIpIHtcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCAtIDIsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaXplID4gMSAmJiBkaXJlY3Rpb24gPT0gXCJlYXN0XCIpIHtcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCArIDIwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2l6ZSA+IDEgJiYgZGlyZWN0aW9uID09IFwid2VzdFwiKSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXggLSAyMCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemUgPiAyICYmIGRpcmVjdGlvbiA9PSBcInNvdXRoXCIpIHtcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCArIDMsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaXplID4gMiAmJiBkaXJlY3Rpb24gPT0gXCJub3J0aFwiKSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXggLSAzLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2l6ZSA+IDIgJiYgZGlyZWN0aW9uID09IFwiZWFzdFwiKSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXggLSAzMCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemUgPiAyICYmIGRpcmVjdGlvbiA9PSBcIndlc3RcIikge1xuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4ICsgMzAsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFpQm9hcmQucG9wdWxhdGVTaGlwKHNpemUsIHgsIHksIGRpcmVjdGlvbikgPT0gJ292ZXJmbG93IScpIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9tUGFyYW1ldGVyU2VsZWN0b3IoYXJyYXksIHNpemUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5haUJvYXJkLnBvcHVsYXRlU2hpcChzaXplLCB4LCB5LCBkaXJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmRBZGphY2VudFhDb29yZGluYXRlcyh4LCB5LCBhcnJheSkge1xuICAgICAgICBpZiAoeCA9PSAnQScpIHtcbiAgICAgICAgICAgIGxldCBhID0gXCJvdmVyZmxvd1wiO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0InICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0InKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnQScgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0MnICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0MnKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnQicgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0QnICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0QnKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnQycgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0UnICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0UnKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnRCcgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0YnICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0YnKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnRScgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0cnICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0cnKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnRicgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0gnICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0gnKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnRycgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0knICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0knKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnSCcgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBhcnJheS5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gJ0onICYmIHNxdWFyZS5ZID09IHkpKTtcbiAgICAgICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPT0gJ0onKSB7XG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LmZpbmQoc3F1YXJlID0+IChzcXVhcmUuWCA9PSAnSScgJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICAgICAgbGV0IGIgPSBcIm92ZXJmbG93XCI7XG4gICAgICAgICAgICByZXR1cm4gW2EsIGJdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJhbmRvbURpcmVjdGlvblByb2R1Y2VyKCkge1xuICAgICAgICBsZXQgbnVtID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgaWYgKG51bSA+PSAuNzUpIHsgcmV0dXJuIFwiZWFzdFwiIH1cbiAgICAgICAgaWYgKG51bSA8PSAuMjUpIHtyZXR1cm4gXCJ3ZXN0XCJ9XG4gICAgICAgIGlmIChudW0gPiAuMjUgJiYgbnVtIDwgLjUpIHsgcmV0dXJuIFwic291dGhcIiB9XG4gICAgICAgIGVsc2UgeyByZXR1cm4gXCJub3J0aFwiIH1cbiAgICB9XG4gICAgc2ltcGxlUG9wdWxhdGVBSSgpIHtcbiAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5jb3B5QUlncmlkKCk7XG4gICAgICAgIHRoaXMucmFuZG9tUGFyYW1ldGVyU2VsZWN0b3IoYXJyYXksIDIpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgICAgIHRoaXMucmFuZG9tUGFyYW1ldGVyU2VsZWN0b3IoYXJyYXksIDIpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgICAgIHRoaXMucmFuZG9tUGFyYW1ldGVyU2VsZWN0b3IoYXJyYXksIDMpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgICAgIHRoaXMucmFuZG9tUGFyYW1ldGVyU2VsZWN0b3IoYXJyYXksIDMpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgICAgIHRoaXMucmFuZG9tUGFyYW1ldGVyU2VsZWN0b3IoYXJyYXksIDQpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZC5uZXh0U2libGluZyk7XG4gICAgICAgIHR3b0JvYXJkRE9NTG9hZGVyKHRoaXMucGxheWVyQm9hcmQsIHRoaXMuYWlCb2FyZCk7XG4gICAgfVxufVxuXG4vL3N1aXRlIGZvciBsb2FkaW5nIGNhcnJpZXIgcGxhY2VtZW50IG1vZHVsZSBiZWZvcmUgZ2FtZSBiZWdpbnNcblxubGV0IHBsYWNlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucGxhY2VtZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudC1tb2R1bGUtY29udGFpbmVyJyk7XG5wbGFjZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwbGFjZW1lbnRDb250YWluZXInKTtcbmxldCBwbGFjZW1lbnRCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbmxldCBzaGlwQ291bnQgPSBbXTtcbmZ1bmN0aW9uIHBsYWNlbWVudE1vZHVsZUxvYWRlcigpIHtcbiAgICBwbGFjZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9wVGV4dExvYWRlcigpKTtcbiAgICBwbGFjZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VtZW50TW9kdWxlTWlkZGxlU3ViQ29udGFpbmVyTG9hZGVyKCkpO1xuICAgIHBsYWNlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b21TdWJjb250YWluZXJMb2FkZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGFjZW1lbnRDb250YWluZXIpO1xufVxuZnVuY3Rpb24gdG9wVGV4dExvYWRlcigpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudFRleHRCb3gnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9wVGV4dENvbnRlbnRMb2FkZXIoJ1BsYWNlIFlvdXIgU2hpcHMhJykpXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5mdW5jdGlvbiB0b3BUZXh0Q29udGVudExvYWRlcih0ZXh0KSB7XG4gICAgbGV0IGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGguY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50VGV4dENvbnRlbnQnKTtcbiAgICBoLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxhY2VtZW50SGVhZGluZycpO1xuICAgIGgudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBoO1xufVxuZnVuY3Rpb24gcGxhY2VtZW50TW9kdWxlTWlkZGxlU3ViQ29udGFpbmVyTG9hZGVyKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWlkZGxlU3ViY29udGFpbmVyJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VtZW50Qm9hcmRMb2FkZXIoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0SW5mb0xvYWRlcigpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gcmlnaHRJbmZvTG9hZGVyKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmlnaHRJbmZvU3ViY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbnNJbnRlZ3JhdG9yKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0Qm94TG9hZGVyKCkpO1xuICAgIHJldHVybiBjb250YWluZXJcbn07XG5mdW5jdGlvbiBidXR0b25zSW50ZWdyYXRvcigpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0SW5mb0J1dHRvbnNDb250YWluZXInKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNldFNoaXBCdG5Mb2FkZXIoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJlZ2luR2FtZUJ0bkxvYWRlcigpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gcmVzZXRTaGlwQnRuTG9hZGVyKCkge1xuICAgIGxldCByZXNldFNoaXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNldFNoaXBCdG4uY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50QnV0dG9uJyk7XG4gICAgcmVzZXRTaGlwQnRuLnRleHRDb250ZW50ID0gXCJSZXNldCBTaGlwc1wiO1xuICAgIHJlc2V0U2hpcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0U2hpcHMpXG4gICAgcmV0dXJuIHJlc2V0U2hpcEJ0bjtcbn07XG5mdW5jdGlvbiBiZWdpbkdhbWVCdG5Mb2FkZXIoKSB7XG4gICAgbGV0IGJlZ2luQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYmVnaW5CdG4uY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50QnV0dG9uJyk7XG4gICAgYmVnaW5CdG4udGV4dENvbnRlbnQgPSBcIkJlZ2luIEdhbWVcIjtcbiAgICBiZWdpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNraWZTaGlwc0FyZUFsbFBsYWNlZCk7XG4gICAgcmV0dXJuIGJlZ2luQnRuO1xufTtcbmZ1bmN0aW9uIHRleHRCb3hMb2FkZXIoKSB7XG4gICAgbGV0IHRleHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0Qm94LmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudEluc3RydWN0aW9uQm94Jyk7XG4gICAgdGV4dEJveC5hcHBlbmRDaGlsZCh0ZXh0Qm94SGVhZGluZ0xvYWRlcigpKTtcbiAgICB0ZXh0Qm94LmFwcGVuZENoaWxkKHRleHRCb3hDb250ZW50TG9hZGVyKFwiUGxhY2UgeW91ciBzaGlwcyBieSBkcmFnZ2luZyB0aGVtIHRvIHlvdXIgZGVzaXJlZCBsb2NhdGlvbi5cIikpO1xuICAgIHRleHRCb3guYXBwZW5kQ2hpbGQodGV4dEJveENvbnRlbnRMb2FkZXIoXCJDbGljayB0aGUgUm90YXRlIGJ1dHRvbiB0byBjaGFuZ2Ugb3JpZW50YXRpb24gb2Ygc2hpcHMgd2FpdGluZyB0byBiZSBwbGFjZWQuXCIpKTtcbiAgICB0ZXh0Qm94LmFwcGVuZENoaWxkKHRleHRCb3hDb250ZW50TG9hZGVyKFwiWW91IGNhbiBhbHNvIHJvdGF0ZSBzaGlwcyBhZnRlciBwbGFjaW5nIHRoZW0gb24gdGhlIGJvYXJkIGJ5IGNsaWNraW5nIG9uIHRoZW0uXCIpKTtcbiAgICB0ZXh0Qm94LmFwcGVuZENoaWxkKHRleHRCb3hDb250ZW50TG9hZGVyKFwiT25jZSB5b3UgaGF2ZSBwbGFjZWQgYWxsIGZpdmUgc2hpcHMsIHByZXNzIHRoZSBCZWdpbiBHYW1lIGJ1dHRvbiB0byBzdGFydC5cIikpO1xuICAgIHJldHVybiB0ZXh0Qm94O1xufVxuZnVuY3Rpb24gdGV4dEJveEhlYWRpbmdMb2FkZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nQ29udGFpbmVyJyk7XG4gICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkluc3RydWN0aW9uc1wiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gdGV4dEJveENvbnRlbnRMb2FkZXIodGV4dCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaW5zdHJ1Y3Rpb25Db250ZW50Jyk7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5mdW5jdGlvbiBzZWxlY3RTaGlwU3F1YXJlTG9hZGVyKGNvb3JkaW5hdGUpIHtcbiAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgIGlmIChjb29yZGluYXRlLmNvbnRhaW5zU2hpcCA9PSB0cnVlKSB7XG4gICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSBzcXVhcmUuaWQ7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGlkLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgbGV0IHN0YXJ0aW5nU3F1YXJlID0gcGxhY2VtZW50Qm9hcmQuZ3JpZC5maW5kKHNxdWFyZSA9PiAoc3F1YXJlLlggPT0gZGF0YVswXSAmJiBzcXVhcmUuWSA9PSBkYXRhWzFdKSk7XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IHN0YXJ0aW5nU3F1YXJlLnNoaXAuc2l6ZTtcbiAgICAgICAgICAgIGxldCB4ID0gc3RhcnRpbmdTcXVhcmUuc2hpcC54U3RhcnQ7XG4gICAgICAgICAgICBsZXQgeSA9IHN0YXJ0aW5nU3F1YXJlLnNoaXAueVN0YXJ0O1xuICAgICAgICAgICAgaWYgKHN0YXJ0aW5nU3F1YXJlLnNoaXAuZGlyZWN0aW9uID09IFwiZWFzdFwiKSB7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50Qm9hcmQuZGVwb3B1bGF0ZVNoaXAoc2l6ZSwgeCwgeSwgXCJlYXN0XCIpO1xuICAgICAgICAgICAgICAgIGRlcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgXCJlYXN0XCIpO1xuICAgICAgICAgICAgICAgIC8vd3JpdGUgZGVwb3B1bGF0ZSBwbGF5ZXIgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICBwbGFjZW1lbnRCb2FyZC5wb3B1bGF0ZVNoaXAoc2l6ZSwgeCwgeSwgXCJzb3V0aFwiKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBcInNvdXRoXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFydGluZ1NxdWFyZS5zaGlwLmRpcmVjdGlvbiA9PSBcInNvdXRoXCIpIHtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnRCb2FyZC5kZXBvcHVsYXRlU2hpcChzaXplLCB4LCB5LCBcInNvdXRoXCIpO1xuICAgICAgICAgICAgICAgIGRlcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgXCJzb3V0aFwiKTtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnRCb2FyZC5wb3B1bGF0ZVNoaXAoc2l6ZSwgeCwgeSwgXCJlYXN0XCIpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlUGxheWVyKHNpemUsIHgsIHksIFwiZWFzdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMocGxhY2VtZW50Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocGxhY2VtZW50Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHBsYWNlbWVudE1vZHVsZUxvYWRlcigpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdpZCcsIGNvb3JkaW5hdGUuWCArIGNvb3JkaW5hdGUuWSk7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmFnT3ZlclwiKTtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcFwiKTtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGRhdGEgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgICAgIGxldCBzb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSBldi50YXJnZXQuaWQ7XG4gICAgICAgIGxldCBzaXplID0gZGF0YTtcbiAgICAgICAgbGV0IHggPSBjb29yZGluYXRlWzBdO1xuICAgICAgICBsZXQgeSA9IGNvb3JkaW5hdGVbMV07XG4gICAgICAgIGlmIChjb29yZGluYXRlWzJdID09IDApIHtcbiAgICAgICAgICAgIGxldCBhcnJheSA9IFtjb29yZGluYXRlWzFdLCBjb29yZGluYXRlWzJdXVxuICAgICAgICAgICAgeSA9IGFycmF5LmpvaW4oJycpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdGFydGluZ1NxdWFyZSA9IHBsYWNlbWVudEJvYXJkLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IHggJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgICAgICBpZiAoc3RhcnRpbmdTcXVhcmUuY29udGFpbnNTaGlwID09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChyb3RhdGlvblRyYWNrZXIgPT0gMCkge1xuICAgICAgICAgICAgcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgXCJlYXN0XCIpO1xuICAgICAgICAgICAgcGxhY2VtZW50Qm9hcmQucG9wdWxhdGVTaGlwKHNpemUsIHgsIHksIFwiZWFzdFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvcHVsYXRlUGxheWVyKHNpemUsIHgsIHksIFwic291dGhcIik7XG4gICAgICAgICAgICBwbGFjZW1lbnRCb2FyZC5wb3B1bGF0ZVNoaXAoc2l6ZSwgeCwgeSwgXCJzb3V0aFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKHBsYWNlbWVudENvbnRhaW5lcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocGxhY2VtZW50Q29udGFpbmVyKTtcbiAgICAgICAgc2hpcENvdW50LnB1c2goc2l6ZSk7XG4gICAgICAgIHBsYWNlbWVudE1vZHVsZUxvYWRlcigpO1xuICAgIH0pXG4gICAgcmV0dXJuIHNxdWFyZTtcbn1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5mdW5jdGlvbiBzZWxlY3RTaGlwQm9hcmRMb2FkZXIoYm9hcmQpIHtcbiAgICBsZXQgYXJyYXlPZkdyaWRDb29yZGluYXRlcyA9IGJvYXJkLmdyaWQ7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncmlkLWNvbnRhaW5lcicpO1xuICAgIGFycmF5T2ZHcmlkQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBsZXQgc3F1YXJlID0gc2VsZWN0U2hpcFNxdWFyZUxvYWRlcihjb29yZGluYXRlKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfSlcbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcbmZ1bmN0aW9uIHNlbGVjdFNoaXBQbGF5ZXJDb29yZGluYXRlZEJvYXJkTG9hZGVyKGJvYXJkKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaW5nbGVCb2FyZENvbnRhaW5lcicpXG4gICAgbGV0IHN1YmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1YmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWJjb250YWluZXInKTtcbiAgICAgICAgc3ViY29udGFpbmVyLmFwcGVuZENoaWxkKHlDb29yZGluYXRlTG9hZGVyKCkpO1xuICAgICAgICBzdWJjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0U2hpcEJvYXJkTG9hZGVyKGJvYXJkKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh4Q29vcmRpbmF0ZUxvYWRlcigpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN1YmNvbnRhaW5lcik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5mdW5jdGlvbiBwbGFjZW1lbnRCb2FyZExvYWRlcigpIHtcbiAgICByZXR1cm4gc2VsZWN0U2hpcFBsYXllckNvb3JkaW5hdGVkQm9hcmRMb2FkZXIocGxhY2VtZW50Qm9hcmQpO1xufTtcbmNvbnN0IHNvdXJjZSA9IFwiXCI7XG5mdW5jdGlvbiByb3RhdGVTaGlwQnV0dG9uTG9hZGVyKCkge1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlJvdGF0ZVwiO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnRCdXR0b24nKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdyb3RhdGVTaGlwQnV0dG9uJyk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByb3RhdGVPbkNsaWNrKClcbiAgICB9KTtcbiAgICByZXR1cm4gYnV0dG9uO1xufVxuZnVuY3Rpb24gcm90YXRlT25DbGljaygpIHtcbiAgICAvL2xldCBjbGFzc0NvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LnNpbmdsZVNoaXBDbGFzc0NvbnRhaW5lclwiKTtcbiAgICBsZXQgaW5kaXZpZHVhbFNoaXBDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi5zaGlwXCIpO1xuICAgIGluZGl2aWR1YWxTaGlwQ29udGFpbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJjb2x1bW5cIikgeyBub2RlLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiOyByb3RhdGlvblRyYWNrZXIgPSAwOyB9XG4gICAgICAgIGVsc2UgeyBub2RlLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiOyByb3RhdGlvblRyYWNrZXIgPSAxOyB9XG4gICAgfSk7XG4gICAgLy9jbGFzc0NvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAvL2lmIChyb3RhdGlvblRyYWNrZXIgPT0gMSkgeyBub2RlLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiOyB9XG4gICAgICAgIC8vZWxzZSB7IG5vZGUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7IH1cbiAgICAvL30pXG4gICAgY2hlY2tDbGFzc0NvbnRhaW5lck9yaWVudGF0aW9uKCk7XG59XG4vL3RoaXMgZnVuY3Rpb24gY2hlY2tzIHdoZXRoZXIgdG8gYXJyYW5nZSBzaGlwcyBpbiByb3dzIG9yIGNvbHVtbnMgd2l0aGluIHRoZWlyIGNsYXNzIGNvbnRhaW5lcnNcbmZ1bmN0aW9uIGNoZWNrQ2xhc3NDb250YWluZXJPcmllbnRhdGlvbigpIHtcbiAgICBsZXQgY2xhc3NDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi5zaW5nbGVTaGlwQ2xhc3NDb250YWluZXJcIik7XG4gICAgY2xhc3NDb250YWluZXJzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKHJvdGF0aW9uVHJhY2tlciA9PSAxKSB7IG5vZGUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7IH1cbiAgICAgICAgZWxzZSB7IG5vZGUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7IH1cbiAgICB9KTtcbn1cbi8vVGhpcyByb3RhdGlvblRyYWNrZXIgdGVsbHMgdGhlIHNoaXBNYWtlcigpIHdoZXRoZXIgdG8gcG9zaXRpb24gc2hpcHMgdmVydGljYWxseSBvciBob3Jpem9udGFsbHkuXG4gICAgLy8wIGNvbW1hbmRzIHNoaXBNYWtlcigpIHRvIHBvc2l0aW9uIHNoaXBzIGhvcml6b250YWxseSwgMSB2ZXJ0aWNhbGx5LlxuICAgIC8vSXQgdHJhY2tzIHdoZXRoZXIgLyB3aGVuIHJvdGF0ZU9uQ2xpY2soKSBoYXMgcm90YXRlZCBzaGlwcyB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseS5cbmxldCByb3RhdGlvblRyYWNrZXIgPSAwO1xuZnVuY3Rpb24gc2hpcE1ha2VyKHNpemUpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgc2l6ZSk7XG4gICAgaWYgKHJvdGF0aW9uVHJhY2tlciA9PSAxKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICB9XG4gICAgaWYgKHJvdGF0aW9uVHJhY2tlciA9PSAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICB9XG4gICAgd2hpbGUgKHNpemUgPj0gMSkge1xuICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnRTcXVhcmUnKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgIHNpemUgPSBzaXplIC0gMTtcbiAgICB9XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRyYW5zZmVyRGF0YU9uRHJhZ3N0YXJ0KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZnVuY3Rpb24gdHJhbnNmZXJEYXRhT25EcmFnc3RhcnQoZXYpIHtcbiAgICAgLy8gQ2hhbmdlIHRoZSBzb3VyY2UgZWxlbWVudCdzIGJhY2tncm91bmQgY29sb3JcbiAgICAgICAgLy8gdG8gc2hvdyB0aGF0IGRyYWcgaGFzIHN0YXJ0ZWRcbiAgICAgICAgZXYuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIik7XG4gICAgICAgIC8vIENsZWFyIHRoZSBkcmFnIGRhdGEgY2FjaGUgKGZvciBhbGwgZm9ybWF0cy90eXBlcylcbiAgICAgICAgZXYuZGF0YVRyYW5zZmVyLmNsZWFyRGF0YSgpO1xuICAgICAgICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgZXYudGFyZ2V0LmlkKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICAgICAgc291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YSk7XG4gICAgICAgIGV2LmN1cnJlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgdHJhbnNmZXJEYXRhT25EcmFnc3RhcnQpO1xufVxuZnVuY3Rpb24gYm90dG9tU3ViY29udGFpbmVyTG9hZGVyKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm90dG9tU3ViY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvdGF0ZVNoaXBCdXR0b25Mb2FkZXIoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDb3VudGVyKCkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiBzaGlwQ291bnRlcigpIHtcbiAgICBsZXQgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpcEFsbENsYXNzZXNDb250YWluZXInKTtcbiAgICBsZXQgc2l6ZVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpemVUd28uY2xhc3NMaXN0LmFkZCgnc2luZ2xlU2hpcENsYXNzQ29udGFpbmVyJyk7XG4gICAgbGV0IHNpemVUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpemVUaHJlZS5jbGFzc0xpc3QuYWRkKCdzaW5nbGVTaGlwQ2xhc3NDb250YWluZXInKTtcbiAgICBsZXQgc2l6ZUZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaXplRm91ci5jbGFzc0xpc3QuYWRkKCdzaW5nbGVTaGlwQ2xhc3NDb250YWluZXInKTtcbiAgICBpZiAocm90YXRpb25UcmFja2VyID09IDEpIHtcbiAgICAgICAgc2l6ZVR3by5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgICAgc2l6ZVRocmVlLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgICBzaXplRm91ci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICB9XG4gICAgaWYgKHNoaXBDb3VudC5maWx0ZXIoeCA9PiB4ID09IDIpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHNpemVUd28uYXBwZW5kQ2hpbGQoc2hpcE1ha2VyKDIpKTtcbiAgICAgICAgc2l6ZVR3by5hcHBlbmRDaGlsZChzaGlwTWFrZXIoMikpO1xuICAgICAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpemVUd28pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzaGlwQ291bnQuZmlsdGVyKHggPT4geCA9PSAyKS5sZW5ndGggPT0gMSkge1xuICAgICAgICBzaXplVHdvLmFwcGVuZENoaWxkKHNoaXBNYWtlcigyKSk7XG4gICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2l6ZVR3byk7XG4gICAgfVxuICAgIGlmIChzaGlwQ291bnQuZmlsdGVyKHggPT4geCA9PSAzKS5sZW5ndGggPT0gMCkge1xuICAgICAgICBzaXplVGhyZWUuYXBwZW5kQ2hpbGQoc2hpcE1ha2VyKDMpKTtcbiAgICAgICAgc2l6ZVRocmVlLmFwcGVuZENoaWxkKHNoaXBNYWtlcigzKSk7XG4gICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2l6ZVRocmVlKTtcbiAgICB9IGVsc2UgaWYgKHNoaXBDb3VudC5maWx0ZXIoeCA9PiB4ID09IDMpLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHNpemVUaHJlZS5hcHBlbmRDaGlsZChzaGlwTWFrZXIoMykpO1xuICAgICAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpemVUaHJlZSk7XG4gICAgfVxuICAgIGlmIChzaGlwQ291bnQuZmlsdGVyKHggPT4geCA9PSA0KS5sZW5ndGggPT0gMCkge1xuICAgICAgICBzaXplRm91ci5hcHBlbmRDaGlsZChzaGlwTWFrZXIoNCkpO1xuICAgICAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpemVGb3VyKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoaXBDb250YWluZXI7XG59XG5mdW5jdGlvbiBjaGVja2lmU2hpcHNBcmVBbGxQbGFjZWQoKSB7XG4gICAgaWYgKHNoaXBDb3VudC5sZW5ndGggPT0gNSkge1xuICAgICAgICBzaW1wbGVQb3B1bGF0ZUFJKCk7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMocGxhY2VtZW50Q29udGFpbmVyKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwbGFjZW1lbnRDb250YWluZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2VtZW50SGVhZGluZycpO1xuICAgICAgICBoLnRleHRDb250ZW50ID0gXCJQbGFjZSBBbGwgU2hpcHMgQmVmb3JlIFN0YXJ0aW5nIHRoZSBHYW1lIVwiXG4gICAgICAgIGguc3R5bGUuY29sb3IgPSBcIiNlZjQ0NDRcIjtcbiAgICB9XG59XG5mdW5jdGlvbiByZXNldFNoaXBzKCkge1xuICAgIHBsYWNlbWVudEJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIGNsZWFyU2hpcENvdW50KCk7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhwbGFjZW1lbnRDb250YWluZXIpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocGxhY2VtZW50Q29udGFpbmVyKTtcbiAgICByZWxvYWRCb2FyZHMoKTtcbiAgICBwbGFjZW1lbnRNb2R1bGVMb2FkZXIoKTtcbn1cbmZ1bmN0aW9uIGNsZWFyU2hpcENvdW50KCkge1xuICAgIHdoaWxlIChzaGlwQ291bnQubGVuZ3RoID49IDEpIHtcbiAgICAgICAgc2hpcENvdW50LnBvcCgpO1xuICAgIH1cbn1cblxuXG5sZXQgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5sZXQgYWlCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbmxldCBwbGF5ZXIgPSBcInRheWxvclwiXG5sZXQgYWkgPSBcImNvbXB1dGVyXCJcbmxldCBib2FyZHMgPSBuZXcgZ2FtZUJvYXJkTG9hZGVyKHBsYXllckJvYXJkLCBwbGF5ZXIsIGFpQm9hcmQsIGFpKTtcblxuZnVuY3Rpb24gbG9hZEJvYXJkcygpIHtcbiAgICB0d29Cb2FyZERPTUxvYWRlcihib2FyZHMucGxheWVyQm9hcmQsIGJvYXJkcy5haUJvYXJkKTtcbiAgICBkb3VibGVTY29yZUtlZXBlckdlbmVyYXRvcihcIlBsYXllclwiLCAwLCBcIkFJXCIsIDApO1xufVxuXG5jb25zdCBwbGF5ZXJQb3B1bGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xucGxheWVyUG9wdWxhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaW1wbGVQb3B1bGF0ZSk7XG5wbGF5ZXJQb3B1bGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwb3B1bGF0ZUJ1dHRvbicpO1xucGxheWVyUG9wdWxhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIlBvcHVsYXRlIFBsYXllclwiO1xuY29uc3QgYWlQb3B1bGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYWlQb3B1bGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpbXBsZVBvcHVsYXRlQUkpO1xuYWlQb3B1bGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwb3B1bGF0ZUJ1dHRvbicpO1xuYWlQb3B1bGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUG9wdWxhdGUgQUlcIjtcbmNvbnN0IGF0dGFja0FJQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hdHRhY2tBSUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFja0FJKTtcbmF0dGFja0FJQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BvcHVsYXRlQnV0dG9uJyk7XG5hdHRhY2tBSUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQXR0YWNrIEFJXCI7XG5jb25zdCBhdHRhY2tQbGF5ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmF0dGFja1BsYXllckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFja1BsYXllcik7XG5hdHRhY2tQbGF5ZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgncG9wdWxhdGVCdXR0b24nKTtcbmF0dGFja1BsYXllckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQXR0YWNrIFBsYXllclwiXG5cbmZ1bmN0aW9uIHJlc3RhcnRCb2FyZCgpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGFpbmVyKTtcbiAgICBnZW5lcmF0ZUhVRCgpO1xuICAgIHJlc2V0U2hpcHMoKTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSFVEKCkge1xuICAgIHBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIGFpQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgcGxheWVyID0gXCJ0YXlsb3JcIjtcbiAgICBhaSA9IFwiY29tcHV0ZXJcIjtcbiAgICBkb3VibGVTY29yZUtlZXBlckdlbmVyYXRvcihcIlBsYXllclwiLCAwLCBcIkFJXCIsIDApO1xuICAgIHR3b0JvYXJkRE9NTG9hZGVyKGJvYXJkcy5wbGF5ZXJCb2FyZCwgYm9hcmRzLmFpQm9hcmQpO1xuICAgIHBsYWNlbWVudE1vZHVsZUxvYWRlcigpO1xuICAgIHBsYXllckFycmF5ID0gYm9hcmRzLnBsYXllckJvYXJkLmdyaWQuc2xpY2UoKTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlQnV0dG9ucygpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJQb3B1bGF0ZUJ1dHRvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFpUG9wdWxhdGVCdXR0b24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhdHRhY2tQbGF5ZXJCdXR0b24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhdHRhY2tBSUJ1dHRvbik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiAgICBmdW5jdGlvbiBzaW1wbGVQb3B1bGF0ZSgpIHtcbiAgICAgICAgYm9hcmRzLnNpbXBsZVBvcHVsYXRlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNpbXBsZVBvcHVsYXRlQUkoKSB7XG4gICAgICAgIGJvYXJkcy5zaW1wbGVQb3B1bGF0ZUFJKCk7XG4gICAgfVxuZnVuY3Rpb24gcG9wdWxhdGVQbGF5ZXIoc2l6ZSwgeCwgeSwgZGlyZWN0aW9uKSB7XG4gICAgYm9hcmRzLnBvcHVsYXRlUGxheWVyKHNpemUsIHgsIHksIGRpcmVjdGlvbik7XG59O1xuZnVuY3Rpb24gZGVwb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBkaXJlY3Rpb24pIHtcbiAgICBib2FyZHMuZGVwb3B1bGF0ZVBsYXllcihzaXplLCB4LCB5LCBkaXJlY3Rpb24pO1xufVxuLy90aGlzIGZ1bmN0aW9uIGlzIHVzZWQgd2l0aCB0aGUgc2hpcCBwbGFjZW1lbnQgbW9kdWxlXG4gICAgLy93aGVuZXZlciB5b3UgcmVzZXQgc2hpcCBwbGFjZW1lbnQsIHlvdSBhbHNvIG5lZWQgdG8gcmVsb2FkIHBsYXllciAmIGFpIGJvYXJkc1xuICAgIC8vdG8gZGVsZXRlIGFueSBzaGlwcyBwbGFjZWQgZHVyaW5nIHByaW9yIHNoaXAgcGxhY2VtZW50IHBoYXNlXG5mdW5jdGlvbiByZWxvYWRCb2FyZHMoKSB7XG4gICAgYm9hcmRzLnJlbG9hZEJvYXJkcygpO1xufVxuXG5cbi8vYWlBcnJheSBiZWxvdyBjb250YWlucyBnbG9iYWxseSBhdmFpbGFibGUgY29weSBvZiBwbGF5ZXJCb2FyZCBncmlkLCBmb3IgdXNlIGJ5IEFJXG4vL2V2ZXJ5IHRpbWUgdGhlIEFJIGF0dGFja3MgcGxheWVyLCBzZWxlY3RzIG9uZSBlbGVtZW50IGF0IHJhbmRvbSBmcm9tIHRoZSBhcnJheSBhbmQgdGhlbiByZW1vdmVzIGl0XG4vL3NvIHRoYXQgZnV0dXJlIGludm9jYXRpb25zIGNhbm5vdCBhdHRhY2sgdGhlIHNhbWUgbG9jYXRpb25cbmNvbnN0IGFpQXJyYXkgPSBib2FyZHMucGxheWVyQm9hcmQuZ3JpZC5zbGljZSgpO1xuZnVuY3Rpb24gYXR0YWNrQUkoeCwgeSkge1xuICAgIGxldCBmb3VuZCA9IGJvYXJkcy5haUJvYXJkLmdyaWQuZmluZChzcXVhcmUgPT4gKHNxdWFyZS5YID09IHggJiYgc3F1YXJlLlkgPT0geSkpO1xuICAgIGlmIChmb3VuZC5pc0hpdCA9PSB0cnVlKSB7IGFsZXJ0KFwiWW91IGhhdmUgYWxyZWFkeSBhdHRhY2tlZCB0aGF0IHNxdWFyZSEgVHJ5IGFub3RoZXIuXCIpIH1cbiAgICBpZiAoZm91bmQuaXNIaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gYm9hcmRzLmFpQm9hcmQuZ3JpZC5pbmRleE9mKGZvdW5kKTtcbiAgICAgICAgYWlBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBib2FyZHMuYXR0YWNrQUkoeCwgeSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYXR0YWNrUGxheWVyKCk7XG4gICAgICAgIH0sIFwiNTAwXCIpO1xuICAgIH1cbn1cblxuLy9wbGF5ZXJBcnJheSBiZWxvdyBjb250YWlucyBnbG9iYWxseSBhdmFpbGFibGUgY29weSBvZiBwbGF5ZXJCb2FyZCBncmlkLCBmb3IgdXNlIGJ5IEFJXG4vL2V2ZXJ5IHRpbWUgdGhlIEFJIGF0dGFja3MgcGxheWVyLCBzZWxlY3RzIG9uZSBlbGVtZW50IGF0IHJhbmRvbSBmcm9tIHRoZSBhcnJheSBhbmQgdGhlbiByZW1vdmVzIGl0XG4vL3NvIHRoYXQgZnV0dXJlIGludm9jYXRpb25zIGNhbm5vdCBhdHRhY2sgdGhlIHNhbWUgbG9jYXRpb25cbmxldCBwbGF5ZXJBcnJheSA9IGJvYXJkcy5wbGF5ZXJCb2FyZC5ncmlkLnNsaWNlKCk7XG5mdW5jdGlvbiBhdHRhY2tQbGF5ZXIoKSB7XG4gICAgaWYgKHBsYXllckFycmF5Lmxlbmd0aCA9PSAwKSByZXR1cm4gYWxlcnQoJ2dhbWUgb3ZlciEnKVxuICAgIGxldCByYW5kb20gPSBwbGF5ZXJBcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwbGF5ZXJBcnJheS5sZW5ndGgpXTtcbiAgICBsZXQgeCA9IHJhbmRvbS5YO1xuICAgIGxldCB5ID0gcmFuZG9tLlk7XG4gICAgbGV0IGluZGV4ID0gcGxheWVyQXJyYXkuaW5kZXhPZihyYW5kb20pO1xuICAgIHBsYXllckFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgYm9hcmRzLmF0dGFja1BsYXllcih4LCB5KTtcbn1cbi8vc2NyaXB0aW5nIGZvcm1zIGZvciBpbnB1dHRpbmcgY29vcmRpbmF0ZXNcbmxldCB4TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xueExhYmVsLmNsYXNzTGlzdC5hZGQoJ2F0dGFja0xhYmVsJyk7XG54TGFiZWwudGV4dENvbnRlbnQgPSBcIklucHV0IFggQ29vcmRpbmF0ZTogXCJcbmxldCB4SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xueElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xubGV0IHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG55TGFiZWwuY2xhc3NMaXN0LmFkZCgnYXR0YWNrTGFiZWwnKTtcbnlMYWJlbC50ZXh0Q29udGVudCA9IFwiSW5wdXQgWSBDb29yZGluYXRlOiBcIlxubGV0IHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG55SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbmZ1bmN0aW9uIHJldHVyblhGb3JtKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHhMYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHhJbnB1dCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lclxufVxuZnVuY3Rpb24gcmV0dXJuWUZvcm0oKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoeUxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoeUlucHV0KTtcbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5mdW5jdGlvbiBnZW5lcmF0ZUZvcm0oKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmV0dXJuWEZvcm0oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJldHVybllGb3JtKCkpO1xuICAgIHJldHVybiBjb250YWluZXJcbn1cblxubGV0IHJlcGVhdEJsb2NrZXIgPSBcIlwiXG5cbmZ1bmN0aW9uIGxvYWRCYXR0bGVzaGlwQXBwKCkge1xuICAgIGlmIChyZXBlYXRCbG9ja2VyID09IDEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Z1Y2snKVxuICAgICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgICBwbGFjZW1lbnRNb2R1bGVMb2FkZXIoKTtcbiAgICAgICAgbG9hZEJvYXJkcygpO1xuICAgICAgICByZXBlYXRCbG9ja2VyID0gMTtcbiAgICAgICAgY29uc29sZS5sb2coJ2JhdHRsZXNoaXAgdGVzdCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgbG9hZEJhdHRsZXNoaXBBcHAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vaW1wb3J0ICcuL3NpdGUtY29udGVudHMvYmF0dGxlc2hpcC9zcmMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgbG9hZEJhdHRsZXNoaXBBcHAgfSBmcm9tICcuL3NpdGUtY29udGVudHMvYmF0dGxlc2hpcC1hcHAvYmF0dGxlc2hpcC1hcHAtY29kZS5qcyc7XG4vL2ltcG9ydCB7IHBsYWNlbWVudE1vZHVsZUxvYWRlciB9IGZyb20gJy4vc2l0ZS1jb250ZW50cy9iYXR0bGVzaGlwL3NyYy91c2VySW50ZXJmYWNlL2JvYXJkRE9NbG9hZGVyLmpzJztcbi8vaW1wb3J0IHsgbG9hZEJvYXJkcyB9IGZyb20gJy4vc2l0ZS1jb250ZW50cy9iYXR0bGVzaGlwL3NyYy91c2VySW50ZXJmYWNlL2NvbnRyb2xsZXIuanMnO1xuXG5cbmxvYWRCYXR0bGVzaGlwQXBwKCk7XG4vL3BsYWNlbWVudE1vZHVsZUxvYWRlcigpO1xuLy9sb2FkQm9hcmRzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9