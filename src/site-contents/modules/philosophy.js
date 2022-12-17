import { contentBoxFactory, paragraphFactory } from './whoIAm.js';
import { profileLoader } from '../profile.js';
import { mainContent } from './whoIAm.js';

let philPara1 = paragraphFactory("I researched and taught academic philosophy for six years at the Universities of Oxford and Toronto. My area of expertise is Ancient Greek and Roman Philosophy, and my inquiries typically seek to understand what ancient philosophers thought was the origin and nature of objective values.");
let philPara2 = paragraphFactory("You can find a sample my research in ancient philosophy here. This essay, which I presented at the Rackham Interdisciplinary Workshop in Ancient Philosophy at the University of Michigan, describes the relationship between Plato's theory of virtue, and his conception of divine law. Plato, I argue, defended the view that God's law governs virtuous conduct. It's a simple argument, but it contradicts prevailing orthodoxy in scholarship on Ancient Greek Philosophy, which holds that divine law theories of ethics first originate with the Stoics. But Plato writes in an earlier century.")
let philPara3 = paragraphFactory("My other main area of interest is philosophical theories of beauty. Here is a link to a paper where I investigate Arthur Schopenhauer's understanding of what exactly human beings grasp with their minds, when they grasp that something is beautiful. I like to think that Schopenhauer is close to the truth about this issue.")

function mainContentFactory() {
    let div = document.createElement('div');
    div.classList.add('siteContent');
    return div;
}

let philContent = mainContentFactory();
philContent.appendChild(philPara1);
philContent.appendChild(philPara2);
philContent.appendChild(philPara3);

function philosophyPageLoader() {
    let container = document.createElement('div');
    container.setAttribute('id', 'mainContainer');
    let philBox = contentBoxFactory("Philosophy", philContent);
    container.appendChild(profileLoader());
    container.appendChild(mainContent(philBox));
    return container
}


export { philosophyPageLoader }
