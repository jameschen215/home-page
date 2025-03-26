import './navbar.css';

export function Navbar() {
	const html = `
    <nav class='nav'>
      <ul>
        <li class='nav-item'>
          <a href='#about'>About</a>
          <a href='#work'>Work</a>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  `;

	return html;
}
