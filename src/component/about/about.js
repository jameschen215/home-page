import './about.css';

import photo from '../../images/photo-mobile-1.jpg';

import {
	GITHUB_ICON,
	LINKEDIN_ICON,
	TWITTER_ICON,
} from '../../script/constant.js';

export function About() {
	const aboutDom = document.createElement('section');
	aboutDom.id = 'about';
	aboutDom.className = 'about';

	aboutDom.innerHTML = `

    <div class='banner'>
      <div class='bg-shadow'>
        <div class='bg'></div>
      </div>

      <div class='photo'>
        <img src='${photo}' alt='James photo' />
        <div class='name'>
          <h1>James</h1>
          <h1>Chen</h1>
        </div>
      </div>
    </div>
   
    <div class='description'>
      <h2>About me</h2>
      <p>
        Lorem ipsum dolor sit amet, dolore guis consectetur adipiscing elit, sec
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam. guis nostrud exercitatior
        nisi Dus aute irure dolor In reprehenderit in volupta
        te velit esse Cillum dolore eu tugiat nulla pariatur.
      </p>
    </div>

    <div class="social-links">
      <a href="#"><div class='icon'>${GITHUB_ICON}</div></a>
      <a href="#"><div class='icon'>${LINKEDIN_ICON}</div></a>
      <a href="#"><div class='icon'>${TWITTER_ICON}</div></a>

    </div>
  `;

	return aboutDom;
}
