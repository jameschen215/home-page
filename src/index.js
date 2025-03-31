import './style/reset.css';
import './style/main.css';

import { capitalizeFirstLetter } from './script/helper.js';

import { Header } from './component/header/header.js';
import { About } from './component/about/about.js';
import { Work } from './component/work/work.js';
import { Contact } from './component/contact/contact.js';
import { CLOSE_ICON, MENU_ICON } from './script/constant.js';

const main = document.querySelector('#main');

function updateUI() {
	main.innerHTML = Header() + About() + Work() + Contact();

	// Menu toggle handler
	const menuButton = document.querySelector('.menu-toggle');
	const navDom = document.querySelector('.nav');
	const menuLinks = document.querySelectorAll('.header li');

	menuButton.addEventListener('click', () => {
		menuButton.classList.toggle('show');
		navDom.classList.toggle('show');

		if (menuButton.classList.contains('show')) {
			menuButton.innerHTML = MENU_ICON;
		} else {
			menuButton.innerHTML = CLOSE_ICON;
		}

		// Reset and replay animation
		menuButton.style.animation = 'none'; // Clear current animation
		setTimeout(() => {
			menuButton.style.animation = 'bounceIn 500ms ease'; // Re-apply animation
		}, 10); // Small delay to allow reset to take effect
	});

	menuLinks.forEach((link) => {
		link.addEventListener('click', (ev) => {
			navDom.classList.toggle('show');
		});
	});
}

updateUI();

function handleScroll() {
	const sections = document.querySelectorAll('section');
	const headerHeight = document.querySelector('header').offsetHeight;

	document.querySelector('.nav').classList.remove('show');

	sections.forEach((section) => {
		const sectionTop = section.offsetTop - headerHeight;
		const sectionHeight = section.clientHeight;
		const scrollPosition = window.scrollY;

		// Check if current scroll position is within this section
		if (
			scrollPosition >= sectionTop &&
			scrollPosition < sectionTop + sectionHeight
		) {
			document.querySelectorAll(`li[data-name]`).forEach((li) => {
				const name = li.dataset.name;

				if (name === section.id) {
					li.classList.add('active');
				} else {
					li.classList.remove('active');
				}
			});
		}
	});
}

// Disable animation when loading page
setTimeout(() => {
	document.querySelector('body').className = '';
}, 500);

window.addEventListener('scroll', handleScroll);
