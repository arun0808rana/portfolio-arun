import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  text-align: center;
  margin: auto;

  .section-heading {
    text-align: center;
    margin-bottom: 0;
  }

  .content {
    margin: 2rem auto;
    max-width: 800px;
    width: calc(100% - 2rem);
    padding: 0 1rem;
  }

  .cta-btn-filled {
    margin-bottom: 2rem;
  }
`;

function GetInTouch() {
  return (
    <Wrapper>
      <h2 className="section-heading">Get In Touch</h2>
      <div className="">
        <div className="content text">
          I am always open to new opportunities and domains to invest myself.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you! And if you are a coder we will quickly become
          friends. We can always connect on twitter or linkedin. Handles are in
          footer.
        </div>
        <a href="https://arun0808rana.github.io/contact-form/" target="_blank">
          <button className="cta-btn-filled">Say Hi</button>
        </a>
      </div>
    </Wrapper>
  );
}

export default GetInTouch;
