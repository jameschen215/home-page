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
          Hey there! I’m James, a 43-year-old Chinese guy passionate about computer science and web development. I enjoyed Harvard’s CS50 course and am currently exploring The Odin Project to enhance my skills. Whether debugging a tricky problem or building something new, I love chasing cool web ideas and tech when I'm not gaming!
        </p>

        <div class="social-links">
          ${SOCIAL_LINKS.map(
						({ href, icon }) => `<a href="${href}" target='_blank'>
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
