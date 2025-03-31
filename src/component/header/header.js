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
	const menuLinks = [
		{
			name: 'About',
			href: '#about',
			icon: ABOUT_ICON,
		},
		{
			name: 'Work',
			href: '#work',
			icon: PROJECT_ICON,
		},
		{
			name: 'Contact',
			href: '#contact',
			icon: CONTACT_ICON,
		},
	];

	const html = `
		<header class='header'>
			<div>
				<div class='brand'>James Chen</div>
				<button class='theme-toggle'>${LIGHT_ICON}</button>
				<button class='menu-toggle show'>${MENU_ICON}</button>
			</div>

			<nav class='nav'>
				<ul class='nav-links'>
				${menuLinks
					.map(
						({ name, href, icon }) =>
							`<li data-name='${name.toLowerCase()}'>
								<a href=${href}>
									<span class='icon'>${icon}</span>
									<span>${name}</span>
								</a>
							</li>`
					)
					.join('')}
				</ul>
			</nav>
		</header>
	`;

	return html;
}
