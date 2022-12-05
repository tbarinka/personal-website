import { profileLoader } from './profile.js';

function homePageLoader() {
    let container = document.createElement('div');
    container.setAttribute('id', 'main');
    container.appendChild(profileLoader());
    container.appendChild(mainContent());
    return container;
}
function mainContent() {
    let container = document.createElement('div');
    container.appendChild(contentBoxFactory("Who I Am", "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."));
    return container;
}

function contentBoxFactory(header, para) {
    let container = document.createElement('div');
    container.classList.add('contentBox');
    container.appendChild(headerFactory(header));
    container.appendChild(paragraphFactory(para));
    return container;
}
function headerFactory(header) {
    let h = document.createElement('h2');
    h.textContent = header;
    return h;
}
function paragraphFactory(para) {
    let p = document.createElement('p');
    p.textContent = para;
    return p;
}

export { homePageLoader };