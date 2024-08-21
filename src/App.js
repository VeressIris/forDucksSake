import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero id="home"></Hero>
      <About id="about"></About>
    </div>
  );
}

export default App;
