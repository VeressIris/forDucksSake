import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <section id="about">
          <About></About>
        </section>
      </div>
    </Router>
  );
}

export default App;
