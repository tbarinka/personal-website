import './style.css';
import { headerLoader } from './homepage/header.js';
import { homePageLoader } from './homepage/modules/whoIAm.js';


document.body.appendChild(headerLoader());
document.body.appendChild(homePageLoader());