import './footer.css';

export function Footer() {
	const footerDom = document.createElement('footer');
	footerDom.id = 'contact';
	footerDom.className = 'footer';
	footerDom.role = 'contact-info';
	footerDom.innerHTML = `

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
        <a href="#">Facebook</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
      </div>
  `;
	return footerDom;
}
