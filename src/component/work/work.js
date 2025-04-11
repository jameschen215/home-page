import './work.css';

import { GITHUB_ICON, SHARE_ICON } from '../../script/constant.js';
import { projectData } from '../../script/data.js';

export function Work() {
	const html = `
    <main id='work' class='work'>
      <h2>My work</h2>

      <div class='project-grid'>
        ${projectData
					.sort((a, b) => b.id - a.id)
					.map(({ title, desc, link, demo, image }) => {
						return `
              <article class='project'>
                <div class='project-content'>
                  <div class='screenshot'>
                    <img src='${image}' alt='Project ${title} screenshot'>
                  </div>
                  
                  <h3 class='project-title'>${title}</h3>
                  <p class='project-desc'>${desc}</p>

                  <div class="project-links">
                    <a class='link' href="${link}" target='_blank'>
                      <span class='sr-only'>Project on Github (Open in new tab)</span>
                      <span class='link-bg' aria-hidden='true'>${GITHUB_ICON}</span>
                    </a>
                    <a class='link' href="${demo}" target='_blank'>
                      <span class='sr-only'>Project live demo (Open in new tab)</span>
                      <span class='link-bg' aria-hidden='true'>${SHARE_ICON}</span>
                    </a>
                  </div>
                </div>
              </article>
            `;
					})
					.join('')}
      </div>
    </main>
  `;
	return html;
}
