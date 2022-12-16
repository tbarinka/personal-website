import Photo from './tempImage.jpg';

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
    profilePhoto.src = Photo;
    profilePhoto.setAttribute('id', 'profilePhoto')
    container.appendChild(profilePhoto);
    return container;
}
function introduction() {
    let div = document.createElement('div');
    div.setAttribute('id', 'profileText')
    div.appendChild(myName());
    //div.appendChild(myDescriptors("Programmer - Researcher - Educator"));
    return div;
}
function myName() {
    let h = document.createElement('h2');
    h.textContent = "TAYLOR BARINKA";
    h.setAttribute('id', 'profileName');
    return h;
}
function myDescriptors(text) {
    let p = document.createElement('p');
    p.textContent = text;
    p.classList.add('profileDescription');
    return p;
}

export { profileLoader };