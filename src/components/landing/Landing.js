import React from "react";
import styled from "styled-components/macro";
import ScrollDown from "./components/scrollDown/ScrollDown";

function Landing() {
  const scollToProjects = () => {
    const projectEl = document.querySelector("#projects-id");
    projectEl.scrollIntoView({ 
      behavior: "smooth", 
      block: "nearest"
   });
  };

  return (
    <Wrapper>
      <div class="container">
        <div class="dim-text">Hi, my name is</div>
        <div class="name">Arun Rana.</div>
        <div class="hobby">I build things for the web.</div>
        <button class="cta-btn" onClick={scollToProjects}>
          See Projects
        </button>
      </div>
      <ScrollDown />
    </Wrapper>
  );
}

export default Landing;

const Wrapper = styled.div`
  max-width: 1140px;
  margin: auto;
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2.5rem;

  .container {
    margin-bottom: 20vh;
    .dim-text {
      color: var(--tertiary-color);
    }
    .name {
      font-size: clamp(50px, 8vw, 80px);
      font-weight: 600;
      line-height: 1.1;
      color: var(--primary-color);
    }

    .hobby {
      margin-top: 10px;
      color: var(--primary-color-tint);
      line-height: 0.9;
      font-size: clamp(40px, 8vw, 80px);
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
    }

    .cta-btn {
      margin-top: 2rem;
      width: fit-content;
      padding: 1rem;
    }
  }
`;
