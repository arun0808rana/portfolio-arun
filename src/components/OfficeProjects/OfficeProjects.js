import React from "react";
import styled from "styled-components/macro";
import OpenLink from "../../assets/icons/akar-icons_link-out.svg";
import Menda from "../../assets/images/menda.png";
import HabitBetter from "../../assets/images/habit better.png";
import GLPlus from "../../assets/images/gl plus.png";
import ProjectData from "./ProjectData";

function OfficeProjects() {
  return (
    <Wrapper id="projects-id">
      <h2 className="section-heading">Projects</h2>

      {ProjectData.map((project, index) => {
        return (
          <div className="project-card" key={`office-projects=${index}`}>
            <div className="lhs">
              <div className="title">{project.title}</div>
              <div className="description">{project.description}</div>
              <div className="link">
                <a href={project.url} target="_blank" className="txt">
                  See website here
                  <img src={OpenLink} alt="open website in new tab" />
                </a>
              </div>
            </div>
            <div className="rhs">
              <img
                src={index == 0 ? Menda : index == 1 ? GLPlus : HabitBetter}
                alt="project screenshot"
              />
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default OfficeProjects;

const Wrapper = styled.div`
  padding: 1rem;
  .project-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      justify-content: center;
    }
    flex-wrap: wrap;
    margin: 2rem 0;
    .lhs {
      @media (max-width: 768px) {
        order: 2;
        margin: 1rem 0;
      }
      max-width: 576px;
      .title {
        font-weight: 500;
        font-size: 40px;
        line-height: 99.8%;
        color: var(--primary-color);
      }
      .description {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: var(--primary-color);
        margin: 1rem 0;

        @media (max-width: 768px) {
          max-width: 265px;
        }
      }
      .link {
        display: flex;
        align-items: center;
        .txt {
          margin-right: 0.5rem;
          color: var(--primary-color);
          &:visited {
            color: var(--primary-color);
          }
          display: flex;
        }
        img {
          display: block;
          margin: 2px 0 0 0.5rem;
        }
      }
    }
    .rhs {
      @media (max-width: 768px) {
        order: 1;
      }
      img {
        filter: grayscale(100%);
        &:hover {
          filter: none;
        }
        transition-duration: 0.3s;
      }
    }
  }
`;
