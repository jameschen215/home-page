import './style/reset.css';
import './style/main.css';

import { Banner } from './component/banner/banner.js';
import { Projects } from './component/projects/projects.js';
import { Footer } from './component/footer/footer.js';
import { Header } from './component/header/header.js';

const main = document.querySelector('#main');

export function updateUI() {
	const header = Header();
	const banner = Banner();
	const projects = Projects();
	const footer = Footer();

	main.innerHTML = '';
	main.appendChild(header);
	main.appendChild(banner);
	main.appendChild(projects);
	main.appendChild(footer);
}

updateUI();

// Disable animation when loading page
setTimeout(() => {
	document.querySelector('body').className = '';
}, 500);

// Make menu close on load
window.onload = () => {
	localStorage.setItem('isMenuOpen', JSON.stringify(false));
	updateUI();
};
