import './style/reset.css';
import './style/main.css';

import { Header } from './component/header/header.js';
import { About } from './component/about/about.js';
import { Work } from './component/work/work.js';
import { Contact } from './component/contact/contact.js';
import {
	CLOSE_ICON,
	DARK_ICON,
	LIGHT_ICON,
	MENU_ICON,
} from './script/constant.js';

const main = document.querySelector('#main');

function changeAndAnimateButtonIcon(button) {
	if (button.classList.contains('show')) {
		button.classList.remove('show');
		button.classList.add('hide');
		button.innerHTML = MENU_ICON;
	} else if (button.classList.contains('hide')) {
		button.classList.remove('hide');
		button.classList.add('show');
		button.innerHTML = CLOSE_ICON;
	} else if (button.classList.contains('light')) {
		button.classList.remove('light');
		button.classList.add('dark');
		button.innerHTML = LIGHT_ICON;
	} else if (button.classList.contains('dark')) {
		button.classList.remove('dark');
		button.classList.add('light');
		button.innerHTML = DARK_ICON;
	}

	// Reset and replay animation
	button.style.animation = 'none'; // Clear current animation
	setTimeout(() => {
		button.style.animation = 'bounceIn 500ms ease'; // Re-apply animation
	}, 10); // Small delay to allow reset to take effect
}

function handleMenuToggle() {
	// Menu toggle handler
	const menuButton = document.querySelector('.menu-toggle');
	const navDom = document.querySelector('.nav');

	menuButton.addEventListener('click', () => {
		navDom.classList.toggle('show');
		changeAndAnimateButtonIcon(menuButton);
	});
}

function handleMenuItemClick() {
	const menuLinks = document.querySelectorAll('.header li');
	const menuButton = document.querySelector('.menu-toggle');
	const navDom = document.querySelector('.nav');

	menuLinks.forEach((link) => {
		link.addEventListener('click', (ev) => {
			navDom.classList.toggle('show');

			changeAndAnimateButtonIcon(menuButton);
		});
	});
}

// TODO: make the menu hide when click out of it

function setInitialTheme() {
	const button = document.querySelector('.theme-toggle');
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
	const currentTheme = localStorage.getItem('theme');

	// Set initial theme
	if (currentTheme === 'dark') {
		document.body.classList.add('dark-theme');
		button.setAttribute('aria-pressed', true);
		button.classList.add('light');
	} else if (currentTheme === 'light') {
		document.body.classList.add('light-theme');
		button.setAttribute('aria-pressed', false);
		button.classList.add('dark');
	} else if (prefersDarkScheme.matches) {
		document.body.classList.add('dark-theme');
		localStorage.setItem('theme', 'dark');
		button.setAttribute('aria-pressed', true);
		button.classList.add('light');
	} else {
		document.body.classList.add('light-theme');
		localStorage.setItem('theme', 'light');
		button.setAttribute('aria-pressed', 'false');
		button.classList.add('dark');
	}
	changeAndAnimateButtonIcon(button);

	// Handle toggle on click
	button.addEventListener('click', () => {
		const isDark = document.body.classList.contains('dark-theme');
		console.log(isDark);

		document.body.classList.remove('light-theme', 'dark-theme');
		button.classList.remove('light', 'dark');

		if (isDark) {
			document.body.classList.add('light-theme');
			localStorage.setItem('theme', 'light');
			button.setAttribute('aria-pressed', false);
			button.classList.add('light');
		} else {
			document.body.classList.add('dark-theme');
			localStorage.setItem('theme', 'dark');
			button.setAttribute('aria-pressed', true);
			button.classList.add('dark');
		}
		changeAndAnimateButtonIcon(button);
	});

	// Listen for system preference changes
	prefersDarkScheme.addEventListener('change', (ev) => {
		if (!localStorage.getItem('theme')) {
			document.body.classList.remove('light-theme', 'dark-theme');
			document.body.classList.add(ev.matches ? 'dark-theme' : 'light-theme');
			button.setAttribute('aria-pressed', ev.matches);
		}
	});
}

function handleThemeToggle() {
	const button = document.querySelector('.theme-toggle');
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

	button.addEventListener('click', () => {
		console.log('clicked');
	});
}

(function updateUI() {
	main.innerHTML = Header() + About() + Work() + Contact();

	// Menu toggle handler
	handleMenuToggle();

	// Menu item click handler
	handleMenuItemClick();

	// Theme toggle handler
	setInitialTheme();
})();

// Disable animation when loading page
setTimeout(() => {
	document.querySelector('body').className = '';
}, 500);

function handleScroll() {
	const sections = document.querySelectorAll('section');
	const headerHeight = document.querySelector('header').offsetHeight;

	document.querySelector('.nav').classList.remove('show');

	sections.forEach((section) => {
		const sectionTop = section.offsetTop - headerHeight;
		const sectionHeight = section.clientHeight;

		// Make the scroll position always be in the middle of the viewport
		// in case sections whose height is less than 100vh can not be reached
		const scrollPosition = window.scrollY + window.innerHeight / 2;

		// Check if current scroll position is within this section
		if (
			scrollPosition >= sectionTop &&
			scrollPosition < sectionTop + sectionHeight
		) {
			document.querySelectorAll(`li[data-name]`).forEach((li) => {
				const name = li.dataset.name;

				if (name === section.id && !li.classList.contains('active')) {
					li.classList.add('active');
				} else if (name !== section.id && li.classList.contains('active')) {
					li.classList.remove('active');
				}
			});
		}
	});
}

window.addEventListener('scroll', handleScroll);
