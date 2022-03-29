import React from "react";
import styled from "styled-components/macro";
import OpenLink from "../../assets/icons/akar-icons_link-out.svg";
import Menda from "../../assets/images/menda.png";
import HabitBetter from "../../assets/images/habit better.png";
import GLPlus from "../../assets/images/gl plus.png";

function OfficeProjects() {
  return (
    <Wrapper>
      <h2 className="section-heading">Projects</h2>

      {[1, 1, 1].map((project, index) => {
        return (
          <div className="project-card">
            <div className="lhs">
              <div className="title">GL Plus Grocery Store</div>
              <div className="description">
                I made inventory pages and homepage for the website using react,
                redux and styled components. I solved various problems in
                inventory management pages as well.
              </div>
              <div className="link">
                <a href="#" className="txt">See website here</a>
                <img src={OpenLink} alt="open website in new tab" />
              </div>
            </div>
            <div className="rhs">
              <img src={Menda} alt="project screenshot" />
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
        color: #000000;
        margin: 1rem 0;
      }
      .link {
        display: flex;
        align-items: center;
        .txt {
          margin-right: 0.5rem;
        }
      }
    }
    .rhs {
      @media (max-width: 768px) {
        order: 1;
      }
    }
  }
`;
