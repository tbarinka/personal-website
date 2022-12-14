import './style.css';
import { headerLoader } from './site-contents/header.js';
import { homePageLoader } from './site-contents/modules/whoIAm.js';
import { jsPageLoader } from './site-contents/modules/javascript.js';
import { removeAllChildNodes } from './site-contents/modules/whoIAm.js';

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
    removeAllChildNodes(document.body);
    document.body.appendChild(headerLoader());
    document.body.appendChild(homePageLoader());
}
function loadJsPage() {
    removeAllChildNodes(document.body);
    document.body.appendChild(headerLoader());
    document.body.appendChild(jsPageLoader());
}

export { loadHomePage, loadJsPage, visitNewHTML, visitJavascriptHTML, visitHomepageHTML }