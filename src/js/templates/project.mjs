import { projectsData } from "../data/projects.mjs";

export const projectTemplate = (projectData) => {
  console.log(projectData);
  const { title, media, tools, description, github, netlify } = projectData;

  const mainDiv = document.createElement("div");
  mainDiv.className = "snap-align h-100";

  const cardTitleContainer = document.createElement("h3");
  const cardTitle = document.createTextNode(title);
  cardTitleContainer.appendChild(cardTitle);

  const cardToolsContainer = document.createElement("small");
  const cardTools = document.createTextNode(tools);
  cardToolsContainer.appendChild(cardTools);

  const cardImg = document.createElement("img");
  cardImg.src = media;

  const cardDescription = document.createElement("p");
};

const renderProjectsTemplate = (projectData, parent) => {
  projectData.forEach((project) => {
    parent.append(projectTemplate(project));
  });
};

export const displayProjects = () => {
  const projectsWrapper = document.getElementById("projectsWrapper");
  let html = "";

  // const {title, media, tools, description, github, netlify} = projectsData;

  projectsData.forEach((project) => {
    const { title, media, tools, description, github, netlify } = project;

    html += `<div class="snap-align h-100">
        <h3>${title}</h3>
        <small>${tools}</small>
        <img src=${media} alt="${title} screenshot" />
        <p>${description}</p>
       <div>
        <a href=${github}>repository</a>
        <a href=${netlify}>netlify</a>
        </div>
        </div>`;
  });
  projectsWrapper.innerHTML = html;
};
