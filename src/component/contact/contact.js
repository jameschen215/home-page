import './contact.css';

import photoMobile from '../../images/contact-photo@mobile.jpg';
import photoTablet from '../../images/contact-photo@tablet.jpg';
import photoDesktop from '../../images/contact-photo@desktop.jpg';

import { SOCIAL_LINKS } from '../../script/constant.js';

export function Contact() {
	const html = `
    <section id='contact' class='contact'>
      <div class='contact-info'>
        <h2>Contact me</h2>
        <p>
          Please get in touch if you think our work could be mutually beneficial!
        </p>
        <address>
          <p>
            <a href="mailto:chenjames215@gmail.com">
              chenjames215@gmail.com
            </a>
          </p>
        </address>
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

      <div class='contact-photo'>
        <picture>
        <source media='(min-width: 1025px)' srcset='${photoDesktop}'>
          <source media='(min-width: 513px)' srcset='${photoTablet}'>
          <img src='${photoMobile}' alt='James photo' />
        </picture>
      </div>
    </section>
  `;
	return html;
}
