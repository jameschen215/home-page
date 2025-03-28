const html = `
    <header class="header">
      <div>
        <div class='brand'>Home Page</div>

        <button class='theme-toggle light'>
          ${LIGHT_ICON}
        </button>

        <button class="menu-toggle">
           ${isMenuOpen ? CLOSE_ICON : MENU_ICON}
        </button>
      </div>

      <nav class='nav ${isMenuOpen ? 'show' : ''}'>
        <ul id="nav-links" class="nav-links">
        ${menuLinks
					.map(({ name, href, icon }) => {
						return `
            <li>
              <a href="${href}">
                <span class='icon'>${icon}</span>
                ${name}
              </a>
            </li>
          `;
					})
					.join('')}
        </ul>
      </nav>

    </header>
  `;
