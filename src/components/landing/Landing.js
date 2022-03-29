import React from "react";
import styled from "styled-components/macro";
import ScrollDown from "./components/scrollDown/ScrollDown";
import LandingBanner from "../../assets/images/landing_banner.png";
function Landing() {
  const scollToProjects = () => {
    const projectEl = document.querySelector("#projects-id");
    projectEl.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const downloadResume = () => {
    window.open(
      "https://github.com/arun0808rana/resumee/raw/main/Arun%20Rana%20Nov%202021%20Resume.pdf",
      "_blank"
    );
  };

  return (
    <Wrapper id="about-me-id">
      <div className="outer-wrapper">
        <TextWrapper>
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
        </TextWrapper>
        <div className="landing-banner">
          <img src={LandingBanner} alt="" />
        </div>
      </div>
      <ScrollDown />
    </Wrapper>
  );
}

export default Landing;

const Wrapper = styled.div`
  /* margin-top: 10rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    justify-content: center;
    height: calc(100vh - 50px);
  }
  
  .outer-wrapper {
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .landing-banner {
    width: 100%;
    img {
      width: 100%;
      max-width: 400px;
      height: auto;
      display: block;
      margin: auto;
    }
  }
`;
const TextWrapper = styled.div`
  max-width: 1140px;
  margin: auto;
  /* height: calc(100vh - 50px); */
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2.5rem;

  @media (max-width: 768px) {
    order: 1;
  }
  .container {
    margin-bottom: 20vh;
    .dim-text {
      color: var(--text-color);
    }
    .name {
      font-size: clamp(50px, 8vw, 75px);
      font-weight: 600;
      line-height: 1.1;
      color: var(--primary-color);
    }

    .hobby {
      margin: 1rem auto 3rem;

      color: var(--secondary-color);
      line-height: 0.9;
      font-size: clamp(40px, 8vw, 60px);
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
