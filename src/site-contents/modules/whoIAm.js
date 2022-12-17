import { profileLoader } from '../profile.js';
import { philosophyBox } from './philosophy.js';
//import { jsBox } from './modules/javascript.js';

function homePageLoader() {
    let container = document.createElement('div');
    container.setAttribute('id', 'mainContainer');
    container.appendChild(profileLoader());
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

let whoIAm = contentBoxFactory("About Me", mainContentFactory());



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
    div.appendChild(paragraphFactory('Hi – I’m Taylor.'));
    div.appendChild(paragraphFactory("I have a bachelor’s degree in Classical Languages (Ancient Greek and Latin) from the University of Michigan, and a master’s degree in Ancient Philosophy from the University of Oxford. My master's was funded through the <a href='https://classicalstudies.org/awards-and-fellowships/lionel-pearson-fellowship-award-winners'>Lionel Pearson Fellowship</a>, which awards one North American student full tuition for year of graduate study in the. I also did five years of graduate work at the University of Toronto, where I researched and taught in the field of Philosophy."));
    //div.appendChild(paragraphFactory('I find creative satisfaction in the rigors of logic, and in the way in which that rigor can yield simple solutions to complex problems. It’s the satisfaction that drove my stint in academic philosophy. Writing a good philosophy paper, or teaching a good philosophy class, is almost like a magic trick: you take up a question that your audience finds difficult to answer, and then you work out an approach that makes it look easy, by breaking it down into simpler and more tractable component problems. I love to take an audience through that process, and walk them from a position of confusion to clarity of understanding.'));
    div.appendChild(paragraphFactory('If you’re interested in some of my philosophical work, you can sample my writing here and my teaching here.'));
    div.appendChild(paragraphFactory("I'm also a developer proficient in JavaScript. I do work on the front-end, but I'm in the process of achieving proficiency in the back-end as well. You can check out a portfolio <a href='javascript.html'>here</a>."));
    //div.appendChild(paragraphFactory("I'm drawn to programming because it affords that a satisfaction similar to the one I find in philosophy: the beauty of reducing complex problems to simple solutions. So often a programing challenge at first appears impossible to resolve, but with a little bit of patience, and with an eye for breaking the problem down into its parts, the problem suddenly just – disappears!"));
    //div.appendChild(paragraphFactory("I would also argue, somewhat more fancifully, that the programming is also similar to philosophy in so far as it affords insight into very basic questions about the realities of our world. But whereas philosophy has historically sought to understand the natural world, the programer has insight into the inner workings of the digitial world into which so much of our life and activity has been integrated in the age of information."));
    return div;
}
function contentBoxFactory(header, content) {
    let container = document.createElement('div');
    container.classList.add('contentBox');
    container.appendChild(headerFactory(header));
    container.appendChild(content);
    return container;
}

export { homePageLoader, contentBoxFactory, paragraphFactory, mainContentFactory, mainContent, removeAllChildNodes };