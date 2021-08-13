import "./App.css";
import GetInTouch from "./components/get-in-touch/GetInTouch";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import React from "react";
import chevronUp from "./assets/icons/chevron-up.svg";

function App() {
  const scrollerRef = React.useRef();
  const doc = document.querySelector("body");

  const toggleScrollToTop = (e) => {
    if (window.pageYOffset > 300) {
      scrollerRef.current.classList.add("active");
    } else {
      scrollerRef.current.classList.remove("active");
    }
  };

  React.useEffect(() => {
    document.addEventListener("scroll", toggleScrollToTop);
    return () => {
      document.removeEventListener("scroll", toggleScrollToTop);
    };
  }, []);

  const handleScrollToTop = () => {
    const headerEl = document.querySelector("#header-id");
    headerEl.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <>
      <div className="App">
        <Header />
        <Landing />
        <Experience />
        <Projects />
        <Skills />
        <GetInTouch />
        <Footer />
        {/* <a
        href="https://wa.me/9412306627"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a> */}
        {/* <a href="https://twitter.com/messages/compose?recipient_id=3805104374"
  class="twitter-dm-button" data-screen-name="@furni">
Message @furni</a> */}
      </div>
      <div className="sm-icons">
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
        {/* <a
          href="https://www.linkedin.com/in/arun-rana-680800180/"
          target="_blank" rel="noreferrer"
        >
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a> */}
        <div className="long-line"></div>
      </div>
      <img
        ref={scrollerRef}
        className="scrollToTop"
        src={chevronUp}
        alt="scroll to top"
        onClick={handleScrollToTop}
      />
    </>
  );
}

export default App;
