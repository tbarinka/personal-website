import { jsPageLoader } from './modules/javascript.js';
import { homePageLoader } from './modules/whoIAm.js';

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
    list.appendChild(linkFactory('Who I Am', homePageLoader));
    list.appendChild(linkFactory('Front-End Development', jsPageLoader));
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

export { headerLoader };