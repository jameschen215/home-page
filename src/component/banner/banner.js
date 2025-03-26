import './banner.css';

export function Banner() {
	const html = `
    <header class='banner' role='banner'>
      <h1>James Chen</h1>
      <h2>About me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sec
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam. guis nostrud exercitatior
        nisi Dus aute irure dolor In reprehenderit in volupta
        te velit esse Cillum dolore eu tugiat nulla pariatur.
      </p>

      <div class="social-links">
        <a href="#">Facebook</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
      </div>
    </header>
  `;
	return html;
}
