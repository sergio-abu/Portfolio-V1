import './app.css';
import Navbar from "./components/navbar/Navbar";
import Cover from "./components/cover/Cover";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import Menu from './components/menu/Menu';
import Loading from './components/loading/Loading'

function App() {
  const [isReady, setIsReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLoading = () => {
    setIsReady(true);
    }
    
  setInterval(handleLoading, 2000); 

  if(!isReady) {
    return <Loading></Loading>
  };
    
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        <Cover></Cover>
        <Projects></Projects>
        <About></About>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
