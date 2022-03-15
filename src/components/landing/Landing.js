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

  const downloadResume = () => { 
    window.open('https://github.com/arun0808rana/resumee/raw/main/Arun%20Rana%20Nov%202021%20Resume.pdf', '_blank')
   }

  return (
    <Wrapper id="about-me-id">
      <div className="container">
        <div className="dim-text">Hi, my name is</div>
        <div className="name">Arun Rana.</div>
        <div className="hobby">I build modern solutions for the web.</div>
        <div className="">
        <button className="cta-btn-outline" onClick={downloadResume}>
          Download Resume
        </button>

        <button className="cta-btn-filled" onClick={scollToProjects}>
          See Projects
        </button>
        </div>
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
      color: var(--text-color);
    }
    .name {
      font-size: clamp(50px, 8vw, 80px);
      font-weight: 600;
      line-height: 1.1;
      color: var(--primary-color);
    }

    .hobby {
      margin: 1rem auto 3rem;
      
      color: var(--primary-color-tint);
      line-height: 0.9;
      font-size: clamp(40px, 8vw, 80px);
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
    }

    /* .cta-btn {
      margin-top: 2rem;
      width: fit-content;
      padding: 16px 32px;
      background-color:var(--secondary-color);
      color:var(--primary-bg);
      height:auto;
      border:none;
      border-radius:4px;
    } */
  }
`;
