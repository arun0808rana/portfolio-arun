import React from "react";
import styled from "styled-components/macro";

function Footer() {
  return (
    <Wrapper>
      <div className="footer-sm-icons">
        <a
          href="https://github.com/arun0808rana"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github-alt" aria-hidden="true"></i>
        </a>
        <a
          href="https://twitter.com/Arun_Rana01"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/arun-rana-680800180/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <div className="long-line"></div>
      </div>
      <div className="foot-note">
         <span>Designed by Arun Rana</span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* @media (max-width: 1600px) {
    padding-top: 25vh;
  } */
  .footer-sm-icons {
    display: flex;
    width: 100%;
    justify-content: center;
    max-width: 1140px;
    margin: auto;
    .fa {
      margin: 2rem;
      font-size: 20px;
      color: var(--cherry-color);
    }
    @media (min-width: 1600px) {
      display: none;
    }
  }
  .foot-note {
    text-align: center;
    font-family: "Roboto Mono", monospace;
    margin: 1rem;
    font-size: 14px;
    color: var(--primary-color);
    span {
      color: var(--cherry-color);
    }
  }
`;
export default Footer;
