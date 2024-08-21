import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Ducks from "./Components/Ducks";
import Footer from "./Components/Footer";
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
        <section id="save">
          <div className="flex justify-center">
            <div className="w-fit flex items-center px-12">
              <h1 className="text-3xl">
                For each <span className="text-yellow-400">duck</span> you
                press,
              </h1>
            </div>
            <Ducks></Ducks>
            <div className="w-fit flex items-center px-12">
              <h1 className="text-3xl">
                we clean a <span className="text-blue-500">pond</span>.
              </h1>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
