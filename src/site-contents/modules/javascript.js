import { contentBoxFactory, paragraphFactory, removeAllChildNodes, mainContent } from './whoIAm.js';
import { profileLoader } from '../profile.js';
import { loadWeatherApp } from '../weather-app/src/domLogic.js';
//import { loadBattleshipApp } from '../battleship-app/battleship-app-code.js';
import { personalSitePageLoader } from '../to-do-list/personal-website-initializer.js';

function jsPageLoader() {
    let container = document.createElement('div');
    container.setAttribute('id', 'mainContainer');
    let jsBox = contentBoxFactory("Web Development", jsMainContentLoader());
    container.appendChild(profileLoader());
    container.appendChild(mainContent(jsBox));
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
    document.body.appendChild(loadWeatherApp());
}
function openBattleship() {
    window.location = 'battleship.html';
}
function openToDoList() {
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

function mainContentFactory() {
    let div = document.createElement('div');
    div.classList.add('siteContent');
    return div;
}

function jsMainContentLoader() {
    let p1 = paragraphFactory("I am a front-end web developer proficient in JavaScript, HTML, and CSS. I taught myself how to use these tools using <a href='https://www.theodinproject.com/dashboard'> open source materials</a>, and I’m in the process of achieving proficiency in the back-end as well.");
    let p2 = paragraphFactory("I was attracted to programming because it involves a kind of intellectual work that was familiar to me from my experience with academic philosophy. It consists of breaking hard problems down into their simple logical components, solving the simple components, and then assembling them all back together again into a single complex structure. I love that kind of work.")
    let p3 = paragraphFactory("Here are a few projects that I have completed.")
    let p4 = paragraphFactory("<a href='http://individual.utoronto.ca/rbarney/Home.html'>This is the personal website</a> of a professional acquaintance that I was contracted to update and publish. This involved modifying an existing codebase and composing a set of instructions to help streamline the process of modifying future iterations of the site.");
    let p5 = paragraphFactory("You can also check out a few apps that I've built for fun:")
    
    let jsContent = mainContentFactory();
    jsContent.appendChild(p1);
    jsContent.appendChild(p2);
    jsContent.appendChild(p3);
    jsContent.appendChild(p4);
    jsContent.appendChild(p5);
    jsContent.appendChild(OpenAppButtonContainerCreator());
    return jsContent;
}


export { jsPageLoader };