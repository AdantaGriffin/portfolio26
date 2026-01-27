import './App.scss'
import styles from './App.scss';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className={styles.App}>

      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    
    </div>
  );
}

export default App;
