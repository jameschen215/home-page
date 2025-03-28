import './header.css';

import { updateUI } from '../../index.js';
import {
	ABOUT_ICON,
	PROJECT_ICON,
	CONTACT_ICON,
	MENU_ICON,
	CLOSE_ICON,
	DARK_ICON,
	LIGHT_ICON,
} from '../../script/constant.js';

export function Header() {
	let isMenuOpen = JSON.parse(localStorage.getItem('isMenuOpen')) ?? false;
	let isLightMode = JSON.parse(localStorage.getItem('isLightMode')) ?? true;
	let selected = JSON.parse(localStorage.getItem('selected')) ?? 'About';

	const menuLinks = [
		{
			name: 'About',
			href: '#about',
			icon: ABOUT_ICON,
		},
		{
			name: 'Work',
			href: '#projects',
			icon: PROJECT_ICON,
		},
		{
			name: 'Contact',
			href: '#contact',
			icon: CONTACT_ICON,
		},
	];

	const handleToggleMenu = () => {
		isMenuOpen = !isMenuOpen;
		localStorage.setItem('isMenuOpen', JSON.stringify(isMenuOpen));
		updateUI();
	};

	const handleMenuItemClick = (ev) => {
		const ele = ev.target.closest('li');
		selected = ele.textContent.trim();
		localStorage.setItem('selected', JSON.stringify(selected));
		isMenuOpen = !isMenuOpen;
		localStorage.setItem('isMenuOpen', JSON.stringify(isMenuOpen));
		updateUI();
	};

	// Level 1
	const headerDom = document.createElement('header');
	headerDom.className = 'header';

	// Level 2.1
	const divDom = document.createElement('div');

	// Level 2.1.1
	const brandDom = document.createElement('div');
	brandDom.className = 'brand';
	brandDom.textContent = 'James Chen';

	// Level 2.1.2
	const themeBtn = document.createElement('button');
	themeBtn.className = 'theme-toggle';
	themeBtn.innerHTML = isLightMode ? LIGHT_ICON : DARK_ICON;

	// Level 2.1.3
	const menuBtn = document.createElement('button');
	menuBtn.className = `menu-toggle ${isMenuOpen ? 'open' : 'close'}`;
	menuBtn.innerHTML = isMenuOpen ? CLOSE_ICON : MENU_ICON;
	menuBtn.addEventListener('click', handleToggleMenu);

	// End level 2.1
	divDom.appendChild(brandDom);
	divDom.appendChild(themeBtn);
	divDom.appendChild(menuBtn);

	// Level 2.2
	const navDom = document.createElement('nav');
	navDom.className = `nav ${isMenuOpen ? 'show' : ''}`;

	// 2.2.1
	const ulDom = document.createElement('ul');
	ulDom.id = 'nav-links';
	ulDom.className = 'nav-links';

	menuLinks.forEach(({ name, href, icon }) => {
		const liDom = document.createElement('li');
		liDom.className = selected === name ? 'active' : '';
		liDom.innerHTML = `
			<a href="${href}" >
				<span class='icon'>${icon}</span>
				${name}
			</a>
		`;
		liDom.addEventListener('click', handleMenuItemClick);

		ulDom.appendChild(liDom);
	});

	// End 2.2
	navDom.appendChild(ulDom);

	// End 1
	headerDom.appendChild(divDom);
	headerDom.appendChild(navDom);

	return headerDom;
}
