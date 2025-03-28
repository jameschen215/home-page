import './projects.css';

import { GITHUB_ICON, SHARE_ICON } from '../../script/constant.js';
import { projectData } from '../../script/data.js';

export function Projects() {
	const projectsDom = document.createElement('section');
	projectsDom.id = 'projects';
	projectsDom.className = 'projects';

	projectsDom.innerHTML = `
      <h2>My work</h2>

      <div class='project-grid'>
        ${projectData
					.sort((a, b) => b.id - a.id)
					.map(({ title, desc, link, demo, image }) => {
						return `
              <article class='project'>
                <div class='screenshot'>
                  <img src='${image}' alt='Project ${title} screenshot'>
                </div>
                <h3 class='project-title'>${title}</h3>
                <p class='project-desc'>${desc}</p>

                <div class="project-links">
                  <a href="${link}">
                    <span class='icon'>${GITHUB_ICON}</span>
                  </a>
                  <a href="${demo}">
                    <span class='icon'>${SHARE_ICON}</span>
                  </a>
                </div>
              </article>
            `;
					})
					.join('')}
        
        
      </div>
  `;
	return projectsDom;
}
