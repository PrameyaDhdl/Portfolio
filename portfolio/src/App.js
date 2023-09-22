import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/UI/Hero";
import Academics from "./Components/UI/Academics";
import AboutMe from "./Components/UI/AboutMe";
import Skills from "./Components/UI/Skills";
import ContactMe from "./Components/UI/ContactMe";
import Portfolio from "./Components/UI/Portfolio";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="sm:p-0 px-4 ">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Academics />
        <Skills />
        <Portfolio/>
        <ContactMe/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
