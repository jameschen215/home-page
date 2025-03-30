import './style/reset.css';
import './style/main.css';

import { capitalizeFirstLetter } from './script/helper.js';

import { Header } from './component/header/header.js';
import { About } from './component/about/about.js';
import { Work } from './component/work/work.js';
import { Contact } from './component/contact/contact.js';

const main = document.querySelector('#main');

let selected = JSON.parse(localStorage.getItem('selected')) ?? 'About';
let isMenuOpen = JSON.parse(localStorage.getItem('isMenuOpen')) ?? false;

export function updateUI() {
	const header = Header();
	const about = About();
	const work = Work();
	const contact = Contact();

	main.innerHTML = '';
	main.appendChild(header);
	main.appendChild(about);
	main.appendChild(work);
	main.appendChild(contact);
}

updateUI();

function handleScroll() {
	const sections = document.querySelectorAll('section');
	const headerHeight = document.querySelector('header').offsetHeight;

	sections.forEach((section) => {
		const sectionTop = section.offsetTop - headerHeight;
		const sectionHeight = section.clientHeight;
		const scrollPosition = window.scrollY;

		// Check if current scroll position is within this section
		if (
			scrollPosition >= sectionTop &&
			scrollPosition < sectionTop + sectionHeight
		) {
			if (selected.toLowerCase() !== section.id.toLowerCase()) {
				selected = capitalizeFirstLetter(section.id);
				localStorage.setItem('selected', JSON.stringify(selected));
			}
		}
	});
}

// Disable animation when loading page
setTimeout(() => {
	document.querySelector('body').className = '';
}, 500);

// Make menu close on load
window.onload = () => {
	localStorage.setItem('isMenuOpen', JSON.stringify(false));
	updateUI();
};

window.addEventListener('scroll', handleScroll);
