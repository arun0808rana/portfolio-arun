import React, {useState} from "react";
import styled from "styled-components/macro";
import openInNewTabIcon from "../../assets/icons/open-in-new-tab.svg";
import octoIcon from "../../assets/icons/octo.svg";
import RightArrow from "../../assets/icons/bi_arrow-right.svg";
import ProjectModal from "../projectModal/ProjectModal";

function Projects({isInsideModal}) {
  const [projects, setProjects] = useState(isInsideModal ? projectsData : projectsData.slice(0,6))
  const openProject = (link) => {
    window.open(link, "_blank");
  };
  
  return (
    <Wrapper id="projects-id">
      {isInsideModal ? null : <h2 className="section-heading">Side Projects</h2>}
      <div className="flex-container">
        {projects.map((project, index) => {
          return (
            <div
              className="card"
              key={`projects-card-${index}`}
              onClick={() => openProject(project.url)}
            >
              <div>
                {" "}
                <div className="d-flex">
                  <div className="sn">
                    {index < 10 ? 0 : null}
                    {index + 1}.
                  </div>
                  {/* <a
                  className="sub-heading header"
                  href={project.url}
                  target="_blank"
                >
                  {"   " + project.title}
                </a> */}

                  <div className="sub-heading header">
                    <div className="title-heading">{project.title}</div>
                    <div className="arrow">
                      <img src={RightArrow} alt="" />
                    </div>
                  </div>
                </div>
                <div className="text">
                  {project.description.substring(0, 95)}
                  {project.description.length -
                    project.description.substring(0, 95).length >
                  1
                    ? "..."
                    : ""}
                </div>
              </div>
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
              {/* <div className="social-icons">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={octoIcon} alt="" />
                </a>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img src={openInNewTabIcon} alt="" />
                </a>
              </div> */}
            </div>
          );
        })}
      </div>

      {isInsideModal ? null : <ProjectModal />}
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% - 2rem);
    padding: 0.5rem 1rem 1rem;
    margin: 1rem;
    max-width: 450px;
    min-height: 100px;
    border: 2px solid var(--tertiary-color);
    /* background: var(--primary-color); */
    color: var(--primary-color);
    border-radius: 10px;
    transition: transform 0.3s;
    &:hover {
      transition: transform 0.3s;
      transform: translate(-2px, 2px);
    }
    cursor: pointer;
    .d-flex {
      align-items: baseline;
      a {
        // color: var(--primary-color);
        text-decoration: none;
      }
    }
    .sn {
      font-family: "Roboto Mono", monospace;
      font-size: 30px;
      color: var(--tertiary-color);
    }
    .header {
      display: flex;
      align-items: center;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      font-size: 24px;
      img {
        height: 30px;
        margin: 6px 0 0 0.5rem;
      }
    }
    .text {
      margin: 0.5rem 0;
    }
    .stack {
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.5rem;
      .pill {
        /* border: 1px solid var(--primary-color); */
        width: fit-content;
        /* padding: 2px 8px; */
        border-radius: 25px;
        margin: 0 10px 0 0;
        font-family: "Roboto Mono", monospace;
        color: var(--secondary-color);
        font-weight: 700;
        font-size: 14px;
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
    title: "Radium Jobs",
    description:
      "It is a single page application which provides a platform for job hunting. The basic API that powers it is Adzuna.",
    stack: ["react", "sass", "react-bootstrap", "Material UI"],
    url: "https://arun0808rana.github.io/radium-jobs-rc-frontend/",
    repo: "https://github.com/arun0808rana/radium-jobs-rc-frontend",
  },
  {
    title: "News App",
    description: "Displays top 25 news in various fields.",
    stack: ["react", "sass", "react-bootstrap"],
    url: "https://arun0808rana.github.io/react-news/",
    repo: "https://github.com/arun0808rana/react-news",
  },
  {
    title: "Crypto Bucket",
    description:
      "A crptocurrency monitor which shows realtime data and a fusion chart analysis to track down every famous e-coin.",
    stack: ["react", "sass", "react-bootstrap", "fusion-charts"],
    url: "https://arun0808rana.github.io/cryptobucket-rc-frontend/",
    repo: "https://github.com/arun0808rana/cryptobucket-rc-frontend",
  },
  {
    title: "Code Memoirs",
    description:
      "A one spot for all your coding snippets with a easy to add feature to add your favourite or ergonomic snippets.",
    stack: ["react", "sass", "tailwindcss"],
    url: "https://arun0808rana.github.io/code-memoirs/",
    repo: "https://github.com/arun0808rana/code-memoirs",
  },
  {
    title: "Lofi Station",
    description:
      "Chill out while listening to a lofi station with a preset of selected tracks. The errie background with glitches gives you a cyberpunk site experience",
    stack: ["react", "sass", "react-bootstrap"],
    url: "https://arun0808rana.github.io/lofi-rc-frontend/",
    repo: "https://github.com/arun0808rana/lofi-rc-frontend",
  },
  {
    title: "Flix Mania",
    description: "Just a prime video clone.",
    stack: ["react", "sass", "react-bootstrap"],
    url: "https://arun0808rana.github.io/flix-mania-rc-frontend/",
    repo: "https://github.com/arun0808rana/flix-mania-rc-frontend",
  },
  {
    title: "E Cardz",
    description:
      "Its a web app for editing and downloading customizable templates for wedding, birthdays, other event, etc. You can customize from a curated list of preset designs and download them for free",
    stack: ["react", "sass", "react-bootstrap"],
    url: "https://arun0808rana.github.io/e-cardz/",
    repo: "https://github.com/arun0808rana/e-cardz",
  },

  // {
  //   title: "Kanban Cardz",
  //   description:
  //     "A kanban board alternative for managing and arranging your daily work at a single place in an intutive manner.",
  //   stack: ["react", "sass", "react-bootstrap"],
  //   url: "https://arun0808rana.github.io/flix-mania-rc-frontend/",
  //   repo: "https://github.com/arun0808rana/flix-mania-rc-frontend",
  // },

  {
    title: "HTML2JSX",
    description: "Converts HTML to react compatible JSX.",
    stack: ["react"],
    url: "http://arun0808rana.github.io/html2jsx-rc-frontend/",
    repo: "https://github.com/arun0808rana/html2jsx-rc-frontend",
  },
  {
    title: "Youtube Media Downloader",
    description: "Based on youtube-dl downloads media from youtube.",
    stack: ["react", "tailwind"],
    url: "http://arun0808rana.github.io/youtube-dl-gui-client",
    repo: "https://github.com/arun0808rana/youtube-dl-gui-client",
  },
  {
    title: "React Webpack Boilerplate",
    description:
      "A quick boilerplate reproducing ergonomic setting up of react app.",
    stack: ["react", "sass", "webpack"],
    url: "https://github.com/arun0808rana/react-webpack.git",
    repo: "https://github.com/arun0808rana/webpack-react-boilerplate",
  },
];
