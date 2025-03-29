import './footer.css';

import photoMobile2 from '../../images/photo-mobile-2.jpg';

import {
	GITHUB_ICON,
	LINKEDIN_ICON,
	TWITTER_ICON,
} from '../../script/constant.js';

export function Footer() {
	const footerDom = document.createElement('footer');
	footerDom.id = 'contact';
	footerDom.className = 'footer';
	footerDom.role = 'contact-info';
	footerDom.innerHTML = `
    <div class='contact-info'>
      <h2>Contact me</h2>
      <p>
        Please get in touch if you think our work could be mutually beneficial!
      </p>
      <address>
        <p>1234 Random Road<br>Random Town, California 12345</p>
        <p><a href="tel:+15555555555">555-555-5555</a></p>
        <p>
          <a href="mailto:ashleywilliams.is.not.real@gmail.com">
            ashleywilliams.is.not.real@gmail.com
          </a>
        </p>
      </address>
      <div class="social-links">
        <a href="#"><div class='icon'>${GITHUB_ICON}</div></a>
        <a href="#"><div class='icon'>${LINKEDIN_ICON}</div></a>
        <a href="#"><div class='icon'>${TWITTER_ICON}</div></a>
      </div>
    </div>

    <div class='contact-photo'>
      <img src='${photoMobile2}' alt='James photo'>
    </div>
  `;
	return footerDom;
}
