import './header.css';

import {
	ABOUT_ICON,
	PROJECT_ICON,
	CONTACT_ICON,
	MENU_ICON,
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
				<a class='brand' href='#'>James Chen</a>
				<button class='theme-toggle' aria-label='Toggle dark mode' aria-pressed='false'>
					<span class='btn-bg'>
						${LIGHT_ICON}
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
