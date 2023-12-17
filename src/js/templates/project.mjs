import { projectsData } from "../data/projects.mjs";

export const displayProjects = () => {
  const projectsWrapper = document.getElementById("projectsWrapper");
  let html = "";

  projectsData.forEach((project) => {
    const { title, media, tools, description, github, netlify } = project;

    html += `<div class="snap-align h-100 projectCard">
        <h3>${title}</h3>
        <small>${tools}</small>
        <div class="md:grid md:grid-cols-2 md:gap-3">
        <img class src=${media} alt="${title} screenshot" />
        <p class="py-3">${description}</p>
        </div>
       <div class="flex links">
        <a href=${github} class="flex-column align-items-center"><i class="fa-brands fa-github"></i><small>repository</small></a>
        <a href=${netlify} class="flex-column align-items-center"><i class="fa-solid fa-globe"></i><small>netlify</small></a>
        </div>
        </div>`;
  });
  projectsWrapper.innerHTML = html;
};
