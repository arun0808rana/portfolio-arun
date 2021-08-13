import React, { useState } from "react";
import styled from "styled-components/macro";
import ham from "../../assets/icons/menu.png";
import logo from "../../assets/images/logo.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Wrapper>
      <div className="logo">
        <img src={logo} alt="logo" className="img-fluid logo" />
      </div>

      <ul className="desktop-menu">
        <li>
          <a href="#">About </a>
        </li>
        <li>
          <a href="#projects-id">Projects</a>
        </li>
        <li>
          <a href="#experience-id">Experience</a>
        </li>
        <li>
          <a
            href="https://arun0808rana.github.io/contact-form/"
            target="_blank"
          >
            <button className="cta-btn">Contact</button>
          </a>
        </li>
      </ul>

      <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
        <img src={ham} alt="menu" className="ham img-fluid" />
      </div>

      {!!showMenu && (
        <ul className="mobile-menu">
          <li>
            <a href="">About </a>
          </li>
          <li>
            <a href="#projects-id">Projects</a>
          </li>
          <li>
            <a href="#experience-id">Experience</a>
          </li>
          <li>
            <a
              href="https://arun0808rana.github.io/contact-form/"
              target="_blank"
            >
              <button className="cta-btn">Contact</button>
            </a>
          </li>
        </ul>
      )}
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-content: center;
  padding: 1rem;
  @media (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;

    img.logo {
      width: 60px;
      height: 60px;
      border: 4px solid var(--primary-color);
      padding: 4px;
      border-radius: 100%;
      @media (max-width: 540px) {
        margin-left: 1rem;
      }
    }
  }

  .hamburger {
    display: block;
    position: absolute;
    right: 20px;
    top: 10px;
    @media (min-width: 540px) {
      display: none;
    }
    .ham {
      height: 30px;
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    &.desktop-menu {
      display: none;
      align-items: center;
      @media (min-width: 540px) {
        display: flex;
      }
    }
    &.mobile-menu {
      width: calc(100% - 40px);
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      @media (min-width: 540px) {
        display: none;
      }
      a {
        /* padding: 1rem 0 1rem 0.6rem; */
        display: block;
      }
    }
    li {
      a {
        padding: 1rem;
        text-decoration: none;
        color: var(--tertiary-color);
        letter-spacing: 0.1rem;
      }
      .cta-btn {
        border: 2px solid var(--cherry-color);
        color: var(--cherry-color);
        font-size: 16px;
        font-weight: bold;
        border-radius: 25px;
        width: 116px;
        height: 50px;
        cursor: pointer;
        letter-spacing: 0.1rem;

        &:hover {
          background-color: var(--chery-color-tint);
        }
      }
    }
  }
`;
