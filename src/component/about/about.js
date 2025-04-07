import './about.css';

import photoMobile from '../../images/banner-photo@mobile.jpg';
import photoTablet from '../../images/banner-photo@tablet.jpg';
import photoDesktop from '../../images/banner-photo@desktop.jpg';

import { SOCIAL_LINKS } from '../../script/constant.js';

export function About() {
	const html = `
    <section id='about' class='about'> 
      <div class='bg-shadow'>
        <div class='bg'></div>
      </div> 

      <div class='banner'>
        <div class='photo'>
          <picture>
            <source media='(min-width: 481px)' srcset='${photoTablet}'>
            <source media='(min-width: 961px)' srcset='${photoDesktop}'>
            <img src='${photoMobile}' alt='James photo' />
          </picture>

          <h1 class='name'>
            <span>James</span>
            <span>Chen</span>
          </h1>
        </div>
      </div>
    
      <div class='description'>
        <div class='placeholder'></div>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, dolore guis consectetur adipiscing elit, sec
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam. guis nostrud exercitatior
          nisi Dus aute irure dolor In reprehenderit in volupta
          te velit esse Cillum dolore eu tugiat nulla pariatur.
        </p>

        <div class="social-links">
          ${SOCIAL_LINKS.map(
						({ href, icon }) => `<a href="${href}">
            <span class='link-bg'>
              <div class='icon'>${icon}</div>
            </span>
          </a>`
					).join('')}
          
        </div>
      </div>
    </section>
  `;

	return html;
}
