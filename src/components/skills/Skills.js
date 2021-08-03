import React from "react";
import styled from "styled-components/macro";
import skillsBanner from "../../assets/images/bro.svg";
import figma from "../../assets/images/figma.svg";
import react from "../../assets/images/react.svg";
import redux from "../../assets/images/redux.svg";
import angular from "../../assets/images/ng.svg";
import sass from "../../assets/images/sass.svg";
import storybook from "../../assets/images/storybook.svg";
import tailwind from "../../assets/images/tailwind.svg";
import xd from "../../assets/images/xd.svg";
import jsImg from "../../assets/images/js.svg";
import cssImg from "../../assets/images/css.svg";
import htmlImg from "../../assets/images/html.svg";
import bootstrap from "../../assets/images/bootstrap.svg";
import photoshop from "../../assets/images/photoshop.svg";
import git from "../../assets/images/git.svg";

function Skills() {
  return (
    <>
      <div class="section-heading">Skills</div>
      <Wrapper>
        <div class="lhs">
          <div class="blobs-container d-flex">
            <div class="blob white">
              <img src={figma} alt="" />
            </div>
            <div class="blob red">
              <img src={react} alt="" />
            </div>
            <div class="blob orange">
              <img src={redux} alt="" />
            </div>
            <div class="blob yellow">
              <img src={angular} alt="" />
            </div>
            <div class="blob blue">
              <img src={sass} alt="" />
            </div>
            <div class="blob green">
              <img src={storybook} alt="" />
            </div>
            <div class="blob purple">
              <img src={bootstrap} alt="" />
            </div>
            <div class="blob">
              <img src={cssImg} alt="" />
            </div>
            <div class="blob">
              <img src={git} alt="" />
            </div>
            <div class="blob">
              <img src={jsImg} alt="" />
            </div>
            <div class="blob">
              <img src={tailwind} alt="" />
            </div>
            <div class="blob">
              <img src={photoshop} alt="" />
            </div>
            <div class="blob">
              <img src={htmlImg} alt="" />
            </div>
          </div>
        </div>
        <div class="rhs">
          <img src={skillsBanner} alt="skills" className="skills-banner" />
        </div>
      </Wrapper>
    </>
  );
}

export default Skills;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .lhs {
    .blobs-container {
      /* justify-content: space-between; */
      flex-wrap: wrap;
      max-width: 576px;
    }
  }

  .rhs {
    img {
      max-width: 100%;
      height: 50vh;
    }
  }
  .blob {
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    margin: 2rem;
    height: 70px;
    width: 70px;
    transform: scale(1);
    animation: pulse-black 2s infinite;
    img {
      height: 70px;
      max-width: 100%;
    }
  }

  @keyframes pulse-black {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }

  .blob.white {
    background: var(--primary-bg);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
    animation: pulse-white 2s infinite;
  }

  @keyframes pulse-white {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  .blob.red {
    background: var(--primary-bg);
    box-shadow: 0 0 0 0 rgba(147, 129, 255, 1);
    animation: pulse-red 2s infinite;
  }

  @keyframes pulse-red {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(147, 129, 255, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(147, 129, 255, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(147, 129, 255, 0);
    }
  }

  .blob.orange {
    background: var(--primary-bg);
    box-shadow: 0 0 0 0 rgba(184, 184, 255, 1);
    animation: pulse-orange 2s infinite;
  }

  @keyframes pulse-orange {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(184, 184, 255, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(184, 184, 255, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(184, 184, 255, 0);
    }
  }

  .blob.yellow {
    background: var(--primary-bg);
    box-shadow: 0 0 0 0 rgba(255, 177, 66, 1);
    animation: pulse-yellow 2s infinite;
  }

  @keyframes pulse-yellow {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 177, 66, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 177, 66, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 177, 66, 0);
    }
  }

  .blob.blue {
    background: var(--primary-bg);
    box-shadow: 0 0 0 0 rgba(52, 172, 224, 1);
    animation: pulse-blue 2s infinite;
  }

  @keyframes pulse-blue {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);
    }
  }

  .blob.green {
    background: var(--primary-bg);
    box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);
    animation: pulse-green 2s infinite;
  }

  @keyframes pulse-green {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
    }
  }

  .blob.purple {
    background: var(--primary-bg);
    box-shadow: 0 0 0 0 rgba(142, 68, 173, 1);
    animation: pulse-purple 2s infinite;
  }

  @keyframes pulse-purple {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(142, 68, 173, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(142, 68, 173, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(142, 68, 173, 0);
    }
  }
`;