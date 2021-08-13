import React from "react";
import styled from "styled-components/macro";
import openInNewTabIcon from "../../assets/icons/open-in-new-tab.svg";
import octoIcon from "../../assets/icons/octo.svg";

function Projects() {
  return (
    <Wrapper id="projects-id">
      <h2 className="section-heading">Projects</h2>
      <div className="flex-container">
        {projectsData.map((project, index) => {
          return (
            <div className="card" key={`projects-card-${index}`}>
              <div className="d-flex">
                <div className="sn">
                  {index < 10 ? 0 : null}
                  {index + 1}.
                </div>
                <a href={project.url} target="_blank" className="header">{project.title}</a>
              </div>
              <div className="text">{project.description}</div>
              <div className="stack">
                {project.stack.map((tech, idx) => {
                  return (
                    <div
                      className="pill"
                      key={`project-pills-${Math.random()}`}
                    >
                      {tech} {idx < project.stack.length - 1 ? "|" : null}
                    </div>
                  );
                })}
              </div>
              <div className="social-icons">
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  <img src={octoIcon} alt="" />
                </a>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img src={openInNewTabIcon} alt="" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Projects;

const Wrapper = styled.div`
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 1112px) {
      justify-content: center;
    }
  }
  .card {
    width: calc(100% - 2rem);
    padding: 1rem;
    margin: 1rem;
    max-width: 300px;
    min-height: 250px;
    border: 7px solid var(--tertiary-color);
    color: var(--primary-color);
    border-radius: 25px;
    transition: width 5s;
    &:hover {
      transition: width 5s;
      transform: translateY(-2px);
    }
    .d-flex {
      align-items: baseline;
      a{
        color: var(--primary-color);
        text-decoration: none;
      }
    }
    .sn {
      font-family: "Roboto Mono", monospace;
      font-size: 30px;
    }
    .header {
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      font-size: 24px;
    }
    .text {
      margin: 1rem 0;
    }
    .stack {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1rem;
      .pill {
        /* border: 1px solid var(--primary-color); */
        width: fit-content;
        /* padding: 2px 8px; */
        border-radius: 25px;
        margin: 0 10px 0 0;
        font-family: "Roboto Mono", monospace;
        color: var(--cherry-color);
      }
    }

    .social-icons {
      margin: 2rem 0 0;
      a {
        text-decoration: none;
      }
      img {
        height: 20px;
        margin: 0 15px 0 0;
        cursor: pointer;
      }
    }
  }
`;

const projectsData = [
  {
    title: "Crypto Bucket",
    description:
      "A crptocurrency monitor which shows realtime data and a fusion chart analysis to track down every famous e-coin.",
    stack: ["react", "sass", "react-bootstrap", "fusion-charts"],
    url: "https://arun0808rana.github.io/cryptobucket-rc-frontend/",
    repo:"https://github.com/arun0808rana/cryptobucket-rc-frontend"
  },
  {
    title: "Code Memoirs",
    description:
      "A one spot for all your coding snippets with a easy to add feature to add your favourite or ergonomic snippets.",
    stack: ["react", "sass", "tailwindcss"],
    url: "https://arun0808rana.github.io/code-memoirs/",
    repo:"https://github.com/arun0808rana/code-memoirs"
  },
  {
    title: "Lofi Station",
    description:
      "Chill out while listening to a lofi station with a preset of selected tracks. The errie background with glitches gives you a cyberpunk site experience",
    stack: ["react", "sass", "react-bootstrap"],
    url: "https://arun0808rana.github.io/lofi-rc-frontend/",
    repo:"https://github.com/arun0808rana/lofi-rc-frontend"
  },
  {
    title: "E Cardz",
    description:
      "Its a web app for editing and downloading customizable templates for wedding, birthdays, other event, etc. You can customize from a curated list of preset designs and download them for free",
    stack: ["react", "sass", "react-bootstrap"],
    url: "https://arun0808rana.github.io/e-cardz/",
    repo: "https://github.com/arun0808rana/e-cardz",
  },
  {
    title: "Flix Mania",
    description:
      "Just a prime video clone.",
    stack: ["react", "sass", "react-bootstrap"],
    url: "https://arun0808rana.github.io/flix-mania-rc-frontend/",
    repo: "https://github.com/arun0808rana/flix-mania-rc-frontend",
  },
  {
    title: "Kanban Cardz",
    description:
      "A kanban board alternative for managing and arranging your daily work at a single place in an intutive manner.",
    stack: ["react", "sass", "react-bootstrap"],
    url: "https://arun0808rana.github.io/flix-mania-rc-frontend/",
    repo: "https://github.com/arun0808rana/flix-mania-rc-frontend",
  },
  {
    title: "Radium Jobs",
    description:
      "It is a single page application which provides a platform for job hunting. The basic API that powers it is Adzuna.",
    stack: ["react", "sass", "react-bootstrap", "Material UI"],
    url: "https://arun0808rana.github.io/radium-jobs-rc-frontend/",
    repo: "https://github.com/arun0808rana/radium-jobs-rc-frontend",
  },
  {
    title: "UI Form",
    description:
      "Just a fun repo.",
    stack: ["react", "sass", "react-bootstrap"],
    url: "https://arun0808rana.github.io/ui-form/",
    repo: "https://github.com/arun0808rana/ui-form",
  },
];
