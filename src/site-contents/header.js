//import { jsPageLoader } from './modules/javascript.js';
import { homePageLoader } from './modules/whoIAm.js';
import { loadHomePage, loadJsPage, visitJavascriptHTML, visitHomepageHTML, visitPhilosophyHTML, visitTeachingHTML } from '../navFunctions.js';


function headerLoader() {
    let container = document.createElement('div');
    container.setAttribute('id', 'header');
    container.appendChild(myName('TAYLOR BARINKA'));
    container.appendChild(myLinks());
    return container;
}
function myName(name) {
    let myName = document.createElement('h3');
    myName.textContent = name;
    return myName;
}
function myLinks() {
    let navBar = document.createElement('div');
    navBar.setAttribute('id', 'nav');
    let list = document.createElement('ul');
    list.setAttribute('id', 'linksList');
    list.appendChild(linkFactory('ABOUT ME', visitHomepageHTML));
    list.appendChild(linkFactory('JAVASCRIPT', visitJavascriptHTML));
    list.appendChild(linkFactory('PHILOSOPHY', visitPhilosophyHTML));
    list.appendChild(linkFactory('TEACHING', visitTeachingHTML));
    //list.appendChild(linkFactory('Games Writing'));
    navBar.appendChild(list);
    return navBar;
}
    //Note to self: add 'link' as paramter to linkFactory when ready to implement links
function linkFactory(text, cb = null) {
    let listItem = document.createElement('li');
    listItem.classList.add('headerLink')
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
    loadHomePage();
}

export { exportableLoadHomePage, headerLoader };