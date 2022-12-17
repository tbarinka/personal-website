import './style.css';
import { headerLoader } from './site-contents/header.js';
import { homePageLoader, removeAllChildNodes } from './site-contents/modules/whoIAm.js';
import { jsPageLoader } from './site-contents/modules/javascript.js';
import { philosophyPageLoader } from './site-contents/modules/philosophy.js';

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
function visitPhilosophyHTML() {
    visitNewHTML('philosophy.html');
}

//these functions initialize appropriate DOM elements after navigating to html page
function loadHomePage() {
    removeAllChildNodes(document.body);
    document.body.appendChild(headerLoader());
    document.body.appendChild(homePageLoader());
}
function loadJsPage() {
    removeAllChildNodes(document.body);
    document.body.appendChild(headerLoader());
    document.body.appendChild(jsPageLoader());
}
function loadPhilosophyPage() {
    removeAllChildNodes(document.body);
    document.body.appendChild(headerLoader());
    document.body.appendChild(philosophyPageLoader());
}

export { loadHomePage, loadJsPage, visitNewHTML, visitJavascriptHTML, visitHomepageHTML, visitPhilosophyHTML, loadPhilosophyPage }