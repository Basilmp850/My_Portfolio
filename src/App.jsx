import styles from "./App.module.css";
import { About } from "./components/About/About";
import Certifications from "./components/Certfications/Certifications";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import {Publications} from "./components/Publications/Publications";



function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Publications/>
      <Experience />
      <Projects />
      <Certifications/>
      <Contact />
    </div>
  );
}

export default App;
