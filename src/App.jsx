import './app.css';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portifolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import Menu from './components/menu/Menu';


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        <Intro></Intro>
        <Portifolio></Portifolio>
        <Works></Works>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
