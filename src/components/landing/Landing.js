import React from "react";
import styled from "styled-components/macro";

function Landing() {
  return (
    <Wrapper>
      <div class="container">
        <div class="dim-text">Hi, my name is</div>
        <div class="name">Arun Rana.</div>
        <div class="hobby">I build things for the web.</div>
      </div>
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
  padding: 0 5rem;

  .container {
    @media-query (max-width:540px) {
      max-width: 540px;
      margin: auto;
    }

    .dim-text{
        color: var(--tertiary-color);
    }
    .name {
      font-size: clamp(40px, 8vw, 80px);
      font-weight: 600;
      line-height: 1.1;
      color: var(--primary-color);
    }

    .hobby{
      margin-top: 10px;
      color: var(--primary-color-tint);
      line-height: 0.9;
      font-size: clamp(40px, 8vw, 80px);
      font-family: 'Montserrat', sans-serif;
    }
  }
`;
