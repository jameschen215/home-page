import './projects.css';

export function Projects() {
	const html = `
    <main id='projects' class='projects'>
      <h2>My work</h2>

      <div class='project-grid'>
        <article class='project'>
          <div class='screenshot'>
            Screenshot of Project
          </div>
          <h3>Project Name</h3>
          <p>Short description of the project. Just a couple sentences will do.</p>

          <div class="project-links">
            <a href="#">Github</a>
            <a href="#">Live Demo</a>
          </div>
        <article>
        </article>
      </div>
    </main>
  `;
	return html;
}
