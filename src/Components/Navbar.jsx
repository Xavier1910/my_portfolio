import React from "react";
import DownloadButton from "./Animations/DownloadButton";

function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home", icon: "bi-house-fill" },
    { name: "Skills", href: "#skills", icon: "bi-code-slash" },
    { name: "Projects", href: "#projects", icon: "bi-folder-fill" },
    { name: "Contact", href: "#contact", icon: "bi-person-rolodex" },
  ];


  return (
    <>
      <nav className="navbar">
        <div className="NavLogo">
          <a href="#home">
            <img src="images/logo.png" alt="Logo" />
          </a>
        </div>
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <DownloadButton />
        </ul>
        <div className="downloadbutton">
          <DownloadButton />
        </div>
      </nav>

     
    </>
  );
}

export default Navbar;
