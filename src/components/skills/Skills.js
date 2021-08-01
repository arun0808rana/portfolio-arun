import React from "react";
import styled from "styled-components/macro";
import skillsBanner from "../../assets/images/bro.svg";

function Skills() {
  return (
    <Wrapper>
        <div class="section-heading">Skills</div>
      <div class="d-flex">
        <div class="lhs">
          <div class="blobs-container">
            <div class="blob white"></div>
            <div class="blob red"></div>
            <div class="blob orange"></div>
            <div class="blob yellow"></div>
            <div class="blob blue"></div>
            <div class="blob green"></div>
            <div class="blob purple"></div>
            <div class="blob"></div>
          </div>
        </div>
        <div class="rhs">
          <img src={skillsBanner} alt="skills" className="skills-banner" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Skills;

const Wrapper = styled.div`
  .lhs {
  }

  .rhs {
    img {
      max-width: 100%;
    }
  }
  .blob {
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    margin: 10px;
    height: 20px;
    width: 20px;
    transform: scale(1);
    animation: pulse-black 2s infinite;
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
    background: white;
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
    background: rgba(255, 82, 82, 1);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);
    animation: pulse-red 2s infinite;
  }

  @keyframes pulse-red {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
    }
  }

  .blob.orange {
    background: rgba(255, 121, 63, 1);
    box-shadow: 0 0 0 0 rgba(255, 121, 63, 1);
    animation: pulse-orange 2s infinite;
  }

  @keyframes pulse-orange {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 121, 63, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 121, 63, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 121, 63, 0);
    }
  }

  .blob.yellow {
    background: rgba(255, 177, 66, 1);
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
    background: rgba(52, 172, 224, 1);
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
    background: rgba(51, 217, 178, 1);
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
    background: rgba(142, 68, 173, 1);
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
