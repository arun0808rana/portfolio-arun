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
    <div className="App">
      <Header />
      <Landing />
      <Projects />
      <Skills />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
