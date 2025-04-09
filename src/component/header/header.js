import './header.css';

import {
	ABOUT_ICON,
	PROJECT_ICON,
	CONTACT_ICON,
	MENU_ICON,
	DARK_ICON,
} from '../../script/constant.js';

import logoForDarkMode from '../../images/logo@dark.png';
import logoForLightMode from '../../images/logo@light.png';

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
				<a class='brand' href='#'>
					<span class='logo-container'>
						<img class='logo light-mode-logo' src='${logoForLightMode}' alt='Light mode logo'>
						<img class='logo dark-mode-logo' src='${logoForDarkMode}' alt='Dark mode logo'>
					</span>
					<span class='name'>
						James Chen
					</span>
				</a>
				<button class='theme-toggle' aria-label='Toggle dark mode' aria-pressed='false'>
					<span class='btn-bg'>
						${DARK_ICON}
					</span>
				</button>
				<button class='menu-toggle hide'>
					<span class='btn-bg'>
						${MENU_ICON}
					</span>
				</button>

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
