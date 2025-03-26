import './style/reset.css';
import './style/main.css';
import { Navbar } from './component/nav/navbar.js';
import { Banner } from './component/banner/banner.js';
import { Projects } from './component/projects/projects.js';
import { Footer } from './component/footer/footer.js';

const container = document.querySelector('#container');

const nav = Navbar();
const banner = Banner();
const projects = Projects();
const footer = Footer();

container.innerHTML = nav + banner + projects + footer;
