import './style.css';
import { headerLoader } from './homepage/header.js';
import { homePageLoader } from './homepage/homePageLoader.js';

console.log('test');

document.body.appendChild(headerLoader());
document.body.appendChild(homePageLoader());