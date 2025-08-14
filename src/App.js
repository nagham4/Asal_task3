import logo from "./logo.svg";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent";
import Skills from "./portfolio/skills.jsx";
import Resume from "./portfolio/resume.jsx";
import Portfolio from "./portfolio/Portfolio.jsx";

function App() {
  return (
    <div className="App">
      <Skills />
      <Resume />
      <Portfolio />
    </div>
  );
}

export default App;
