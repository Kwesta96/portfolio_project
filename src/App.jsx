import "./app.scss";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Services } from "./components/services/Services";
import { Work } from "./components/work/Work";
import { Contact } from "./components/contact/Contact";
import Menu from "./components/resMenu/ResMenu";
import { useState } from "react";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="sections">
        <Home />
        {/* <Services /> */}
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
