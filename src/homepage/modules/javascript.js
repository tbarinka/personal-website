import { contentBoxFactory, paragraphFactory, contentFactory, removeAllChildNodes, mainContent } from './whoIAm.js';
import { profileLoader } from '../profile.js';

let p1 = paragraphFactory("I am a front-end web developer proficient in HTML, CSS, and JavaScript. I taught myself how to use these tools with an excellent <a href='https://www.theodinproject.com/dashboard'> open source course</a> on the web, and  and I’m in the process of achieving proficiency in development on the back end.");
let p2 = paragraphFactory("I am attracted to coding for a couple of reasons. First, I like the idea of being a kind of craftsperson who can make things that people need. It’s honest work. But I also find that there is an artistry to coding which is a pleasure in itself – the process of identifying a desired result and engineering logical structures sufficient to achieve the result gives me creative satisfaction. It hits a perfect intersection between where I can be useful and what I can enjoy.")
let p3 = paragraphFactory("Here are a few projects that I have completed.")
let p4 = paragraphFactory("<a href='http://individual.utoronto.ca/rbarney/Home.html'>This is the personal website</a> of a professional acquaintance whose content I was contracted to update and publish. This involved modifying an existing codebase and composing a set of instructions to help streamline the process of modifying future iterations of the site.");
let p5 = paragraphFactory("This is a weather app that fetches data from openweather.org.");
let p6 = paragraphFactory("This is a game of battleship that you can play against an AI.");

let jsContent = contentFactory();
jsContent.appendChild(p1);
jsContent.appendChild(p2);
jsContent.appendChild(p3);
jsContent.appendChild(p4);
jsContent.appendChild(p5);
jsContent.appendChild(p6);
let jsBox = contentBoxFactory("Web Development", jsContent);

function jsPageLoader() {
    let container = document.getElementById('mainContainer');
    removeAllChildNodes(container);
    container.appendChild(profileLoader());
    container.appendChild(mainContent(jsBox));
}
export { jsBox, jsPageLoader };