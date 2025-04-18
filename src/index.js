import './style/reset.css';
import './style/main.css';

import { Nav } from './component/nav/nav.js';
import { Banner } from './component/banner/banner.js';
import { Work } from './component/work/work.js';
import { Contact } from './component/contact/contact.js';
import {
	CLOSE_ICON,
	DARK_ICON,
	LIGHT_ICON,
	MENU_ICON,
} from './script/constant.js';

const container = document.querySelector('#container');

function changeAndAnimateButtonIcon(button) {
	if (button.classList.contains('show')) {
		button.setAttribute('aria-pressed', true);
		button.innerHTML = `<span class='btn-bg'>${CLOSE_ICON}</span>`;
	} else if (button.classList.contains('hide')) {
		button.setAttribute('aria-pressed', false);
		button.innerHTML = `<span class='btn-bg'>${MENU_ICON}</span>`;
	} else if (button.classList.contains('light')) {
		button.setAttribute('aria-pressed', false);
		button.innerHTML = `<span class='btn-bg'>${LIGHT_ICON}</span>`;
	} else if (button.classList.contains('dark')) {
		button.setAttribute('aria-pressed', true);
		button.innerHTML = `<span class='btn-bg'>${DARK_ICON}</span>`;
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
	const menu = document.querySelector('.nav-links');

	menuButton.addEventListener('click', (ev) => {
		ev.stopPropagation();

		menu.classList.toggle('show');

		if (menuButton.classList.contains('show')) {
			menuButton.classList.remove('show');
			menuButton.classList.add('hide');
		} else if (menuButton.classList.contains('hide')) {
			menuButton.classList.remove('hide');
			menuButton.classList.add('show');
		}

		changeAndAnimateButtonIcon(menuButton);
	});
}

function handleMenuItemClick() {
	const menuLinks = document.querySelectorAll('.nav-links li');
	const menuButton = document.querySelector('.menu-toggle');
	const menu = document.querySelector('.nav-links');

	menuLinks.forEach((link) => {
		link.addEventListener('click', (ev) => {
			menu.classList.toggle('show');

			if (menuButton.classList.contains('show')) {
				menuButton.classList.remove('show');
				menuButton.classList.add('hide');
			} else if (menuButton.classList.contains('hide')) {
				menuButton.classList.remove('hide');
				menuButton.classList.add('show');
			}

			changeAndAnimateButtonIcon(menuButton);
		});
	});
}

// TODO: make the menu hide when click out of it
function handleClickOutOfTheMenu() {
	const menuButton = document.querySelector('.menu-toggle');
	const menu = document.querySelector('.nav-links');

	document.addEventListener('click', (ev) => {
		// Check if the click is outside both the menu and the button that opens it
		const clickedOutside =
			!menu.contains(ev.target) && !menuButton.contains(ev.target);

		// If the menu is open and the click was outside, close it
		if (menu.classList.contains('show') && clickedOutside) {
			menu.classList.remove('show');

			if (menuButton.classList.contains('show')) {
				menuButton.classList.remove('show');
				menuButton.classList.add('hide');
			} else if (menuButton.classList.contains('hide')) {
				menuButton.classList.remove('hide');
				menuButton.classList.add('show');
			}

			changeAndAnimateButtonIcon(menuButton);
		}
	});
}

function setInitialTheme() {
	const button = document.querySelector('.theme-toggle');
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
	const currentTheme = localStorage.getItem('theme');

	// Set initial theme
	if (currentTheme === 'dark') {
		document.body.classList.add('dark-theme');
		button.classList.add('dark');
		button.innerHTML = `<span class='btn-bg'>${DARK_ICON}</span>`;
	} else if (currentTheme === 'light') {
		document.body.classList.add('light-theme');
		button.classList.add('light');
		button.innerHTML = `<span class='btn-bg'>${LIGHT_ICON}</span>`;
	} else if (prefersDarkScheme.matches) {
		document.body.classList.add('dark-theme');
		localStorage.setItem('theme', 'dark');
		button.classList.add('dark');
		button.innerHTML = `<span class='btn-bg'>${DARK_ICON}</span>`;
	} else {
		document.body.classList.add('light-theme');
		localStorage.setItem('theme', 'light');
		button.classList.add('light');
		button.innerHTML = `<span class='btn-bg'>${LIGHT_ICON}</span>`;
	}
}

function handleThemeToggle() {
	const button = document.querySelector('.theme-toggle');

	// Handle toggle on click
	button.addEventListener('click', () => {
		const isDark = document.body.classList.contains('dark-theme');

		document.body.classList.remove('light-theme', 'dark-theme');
		button.classList.remove('light', 'dark');

		if (isDark) {
			document.body.classList.add('light-theme');
			localStorage.setItem('theme', 'light');
			button.classList.add('light');
		} else {
			document.body.classList.add('dark-theme');
			localStorage.setItem('theme', 'dark');
			button.classList.add('dark');
		}

		changeAndAnimateButtonIcon(button);
	});
}

function handlePreferDarkSchemeChange() {
	const button = document.querySelector('.theme-toggle');
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

	// Listen for system preference changes
	prefersDarkScheme.addEventListener('change', (ev) => {
		if (!localStorage.getItem('theme')) {
			document.body.classList.remove('light-theme', 'dark-theme');
			document.body.classList.add(ev.matches ? 'dark-theme' : 'light-theme');
			button.classList.add(ev.matches ? 'dark' : 'light');
			changeAndAnimateButtonIcon(button);
		}
	});
}

(function updateUI() {
	container.innerHTML = Nav() + Banner() + Work() + Contact();

	// Theme toggle handler
	setInitialTheme();
	handleThemeToggle();
	handlePreferDarkSchemeChange();

	// Menu toggle handler
	handleMenuToggle();

	// Menu item click handler
	handleMenuItemClick();

	// Hide the menu when clicking outside
	handleClickOutOfTheMenu();
})();

// Disable animation when loading page
setTimeout(() => {
	document.body.classList.remove('preload');
}, 500);

function handleScroll() {
	const sections = document.querySelectorAll('header,main,footer');
	const headerHeight = document.querySelector('.nav').offsetHeight;

	// document.querySelector('.nav-links').classList.remove('show');

	sections.forEach((section) => {
		const sectionTop = section.offsetTop - headerHeight;
		const sectionHeight = section.clientHeight;

		// Make the scroll position always be in the 3 quarters down of the viewport
		// in case sections whose height is less than 100vh can not be reached
		const scrollPosition = window.scrollY + (window.innerHeight / 4) * 3;

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

// Set the 'About' navigation item as the default active option.
window.addEventListener('load', () => {
	document.querySelector('.nav li[data-name="about"]').classList.add('active');
});
