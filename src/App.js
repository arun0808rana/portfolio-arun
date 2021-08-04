import logo from "./logo.svg";
import "./App.css";
import GetInTouch from "./components/get-in-touch/GetInTouch";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Landing />
        <Projects />
        <Skills />
        <GetInTouch />
        <Footer />
        {/* <a
        href="https://wa.me/9412306627"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a> */}
      </div>
      <div className="sm-icons">
        <a
          href="https://www.linkedin.com/in/arun-rana-680800180/"
          target="_blank"
        >
          <i class="fa fa-github-alt" aria-hidden="true"></i>
        </a>
        <a
          href="https://twitter.com/Arun_Rana01"
          target="_blank"
        >
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/arun-rana-680800180/"
          target="_blank"
        >
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        {/* <a
          href="https://www.linkedin.com/in/arun-rana-680800180/"
          target="_blank"
        >
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </a> */}
        <div class="long-line"></div>
      </div>
    </>
  );
}

export default App;
