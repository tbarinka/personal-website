import './style.css';
import { headerLoader } from './site-contents/header.js';
import { homePageLoader } from './site-contents/modules/whoIAm.js';


document.body.appendChild(headerLoader());
document.body.appendChild(homePageLoader());