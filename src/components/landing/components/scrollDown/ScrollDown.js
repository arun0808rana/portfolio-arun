import React from "react";
import styled from "styled-components";

function ScrollDown() {
  return (
    <Wrapper>
      <svg
        width="40px"
        height="100%"
        viewBox="0 0 247 390"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "1.5",
        }}
      >
        <path
          id="wheel"
          d="M123.359,79.775l0,72.843"
          style={{ fill: "none", stroke: "var(--cherry-color)", strokeWidth: "20px" }}
        />
        <path
          id="mouse"
          d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          style={{ fill: "none", stroke: "var(--cherry-color)", strokeWidth: "20px" }}
        />
      </svg>
    </Wrapper>
  );
}

export default ScrollDown;

const Wrapper = styled.div`
  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(60px);
    }
  }

  svg #wheel {
    animation: scroll ease 2s infinite;
  }
`;
