import { projectsData } from "../data/projects.mjs";

export const displayProjects = () => {
  const projectsWrapper = document.getElementById("projectsWrapper");
  let html = "";

  projectsData.forEach((project) => {
    const { title, media, tools, description, github, netlify } = project;

    html += `<div class="snap-align h-100 projectCard">
        <h3>${title}</h3>
        <small>${tools}</small>
        <img src=${media} alt="${title} screenshot" />
        <p>${description}</p>
       <div class="flex links">
        <a href=${github} class="flex-column align-items-center"><i class="fa-brands fa-github"></i><small>repository</small></a>
        <a href=${netlify} class="flex-column align-items-center"><i class="fa-solid fa-globe"></i><small>netlify</small></a>
        </div>
        </div>`;
  });
  projectsWrapper.innerHTML = html;
};
