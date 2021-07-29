import logo from "./logo.svg";
import "./App.css";
import GetInTouch from "./components/get-in-touch/GetInTouch";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <div className="App">
      <Landing/>
      <Projects />
      <GetInTouch />
      <Footer/>
    </div>
  );
}

export default App;
