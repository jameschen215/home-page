import './projects.css';

import { GITHUB_ICON, SHARE_ICON } from '../../script/constant.js';

export function Projects() {
	const projectsDom = document.createElement('section');
	projectsDom.id = 'projects';
	projectsDom.className = 'projects';

	projectsDom.innerHTML = `
      <h2>My work</h2>

      <div class='project-grid'>
        <article class='project'>
          <div class='screenshot'>
            Screenshot of Project
          </div>
          <h3 class='project-title'>Project Name</h3>
          <p class='project-desc'>Short description of the project. Just a couple sentences will do.</p>

          <div class="project-links">
            <a href="#">
              <span class='icon'>${GITHUB_ICON}</span>
            </a>
            <a href="#">
              <span class='icon'>${SHARE_ICON}</span>
            </a>
          </div>
        </article>
        <article class='project'>
          <div class='screenshot'>
            Screenshot of Project
          </div>
          <h3 class='project-title'>Project Name</h3>
          <p class='project-desc'>Short description of the project. Just a couple sentences will do.</p>

          <div class="project-links">
            <a href="#">
              <span class='icon'>${GITHUB_ICON}</span>
            </a>
            <a href="#">
              <span class='icon'>${SHARE_ICON}</span>
            </a>
          </div>
        </article>
      </div>
  `;
	return projectsDom;
}
