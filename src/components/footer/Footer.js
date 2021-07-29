import React from "react";
import styled from "styled-components/macro";

function Footer() {
  return (
    <Wrapper>
      <div class="foot-note">
        Designed by <span>Arun Rana</span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 25vh;
  .foot-note {
    text-align: center;
    font-family: "Roboto Mono", monospace;
    margin: 1rem;
    font-size: 14px;
    color: var(--primary-color);
    span {
      color: var(--secondary-color);
    }
  }
`;
export default Footer;
