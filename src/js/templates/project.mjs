import { projectsData } from "../data/projects.mjs";

export const displayProjects = () => {
  const projectsWrapper = document.getElementById("projectsWrapper");
  let html = "";

  projectsData.forEach((project) => {
    const { title, media, tools, description, github, netlify } = project;

    html += `<div class="snap-align h-full projectCard grid justify-center">
    <div class="w-11/12 lg:w-3/4 grid">
    <div class="text-center">
        <h3>${title}</h3>
        <small>${tools}</small>
        </div>
        <div class="lg:grid lg:grid-cols-2 lg:gap-3">
        <img class="max-w-full my-2 rounded-2xl" src=${media} alt="${title} screenshot" />
        <p class="py-3">${description}</p>
        </div>
       <div class="flex gap-8 justify-self-center font-sans  hover:text-flower-purple transition ease-in-out duration-300 md:mt-5">
        <a href=${github} class="flex flex-col items-center text-flower-purple-dark no-underline hover:text-flower-purple"><i class="fa-brands fa-github text-3xl"></i><small>repository</small></a>
        <a href=${netlify} class="flex flex-col items-center text-flower-purple-dark no-underline hover:text-flower-purple"><i class="fa-solid fa-globe text-3xl"></i><small>netlify</small></a>
        </div>
        </div></div>`;
  });
  projectsWrapper.innerHTML = html;
};
