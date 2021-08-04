import React from "react";
import styled from "styled-components/macro";
import openInNewTabIcon from "../../assets/icons/open-in-new-tab.svg";
import octoIcon from "../../assets/icons/octo.svg";

function Projects() {
  return (
    <Wrapper id="projects-id">
      <h2 className="section-heading">Projects</h2>
      <div class="flex-container">
        {projectsData.map((project, index) => {
          return (
            <div class="card">
              <div class="d-flex">
                <div class="sn">
                  {index < 10 ? 0 : null}
                  {index + 1}.
                </div>
                <div class="header">{project.title}</div>
              </div>
              <div class="text">{project.description}</div>
              <div class="stack">
                {project.stack.map((tech, idx) => {
                  console.log(idx, "idx");
                  return (
                    <div class="pill">
                      {tech} {idx !== tech.length - 1 ? "|" : idx}
                    </div>
                  );
                })}
              </div>
              <div class="social-icons">
                <img src={octoIcon} alt="" />
                <img src={openInNewTabIcon} alt="" />
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
    title: "Kanban Cardz",
    description:
      "A kanban board alternative for managing and arranging your daily work at a single place in an intutive manner.",
    stack: ["react", "react-beautiful-dnd", "typescript", "nodejs"],
  },
  {
    title: "Kanban Cardz",
    description:
      "A kanban board alternative for managing and arranging your daily work at a single place in an intutive manner.",
    stack: ["react", "react-beautiful-dnd"],
  },
  {
    title: "Kanban Cardz",
    description:
      "A kanban board alternative for managing and arranging your daily work at a single place in an intutive manner.",
    stack: ["react", "react-beautiful-dnd"],
  },
  {
    title: "Kanban Cardz",
    description:
      "A kanban board alternative for managing and arranging your daily work at a single place in an intutive manner.",
    stack: ["react", "react-beautiful-dnd"],
  },
  {
    title: "Kanban Cardz",
    description:
      "A kanban board alternative for managing and arranging your daily work at a single place in an intutive manner.",
    stack: ["react", "react-beautiful-dnd"],
  },
  {
    title: "Kanban Cardz",
    description:
      "A kanban board alternative for managing and arranging your daily work at a single place in an intutive manner.",
    stack: ["react", "react-beautiful-dnd"],
  },
  {
    title: "Kanban Cardz",
    description:
      "A kanban board alternative for managing and arranging your daily work at a single place in an intutive manner.",
    stack: ["react", "react-beautiful-dnd"],
  },
  {
    title: "Kanban Cardz",
    description:
      "A kanban board alternative for managing and arranging your daily work at a single place in an intutive manner.",
    stack: ["react", "react-beautiful-dnd"],
  },
];
