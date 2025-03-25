import React, { useState } from "react";

import Proyects from "./Proyects.jsx";
import Curriculum from "./Curriculum.jsx";
import Contact from "./Contact.jsx";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("projects");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  /*
 
 */
  return (
    <>
      <nav>
        <a
          href="#projects"
          className={activeLink === "projects" ? "active SubT" : "SubT"}
          onClick={() => handleSetActive("projects")}
        >
          Proyects
        </a>
        <a
          href="#curriculum"
          className={activeLink === "curriculum" ? "active SubT" : "SubT"}
          onClick={() => handleSetActive("curriculum")}
        >
          Curriculum
        </a>
        <a
          href="#contact"
          className={activeLink === "contact" ? "active SubT" : "SubT"}
          onClick={() => handleSetActive("contact")}
        >
          Contact
        </a>
      </nav>
      {activeLink === "projects" && <Proyects />}
      {activeLink === "curriculum" && <Curriculum />}
      {activeLink === "contact" && <Contact />}
    </>
  );
};
export default Nav;
