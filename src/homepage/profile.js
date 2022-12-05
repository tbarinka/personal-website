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
    div.appendChild(myName());
    div.appendChild(myDescriptors());
    return div;
}
function myName() {
    let h = document.createElement('h2');
    h.textContent = "Taylor Barinka";
    h.setAttribute('id', 'profileName');
    return h;
}
function myDescriptors() {
    let p = document.createElement('p');
    p.textContent = "Researcher - Educator - Writer - Programmer."
    p.setAttribute('id', 'profileDescription')
    return p;
}
export { profileLoader };