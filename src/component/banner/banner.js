import './banner.css';

import photo from '../../images/photo-1-portrait-mobile.jpg';

import {
	GITHUB_ICON,
	LINKEDIN_ICON,
	TWITTER_ICON,
} from '../../script/constant.js';

export function Banner() {
	const bannerDom = document.createElement('section');
	bannerDom.className = 'banner';
	bannerDom.role = 'banner';

	bannerDom.innerHTML = `

    <div>
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
   
    <div id='about' class='description'>
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

	return bannerDom;
}
