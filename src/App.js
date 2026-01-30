import './App.scss'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import styles from './App.scss';
import Root from './components/Root/root';

import Hero from './components/Hero/hero';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';


const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    
  </Route>
))


function App() {
  return (
    <RouterProvider router={AppRouter}/>
    /*<div className={styles.App}>

      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    
    </div>
    */
  );
}

export default App;
