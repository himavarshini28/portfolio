import './App.css';
import Navbar from './components/Navbar.js';
import {Banner} from './components/Banner.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { Footer } from './components/Footer.js';
import { Contact } from './components/Contact.js';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
