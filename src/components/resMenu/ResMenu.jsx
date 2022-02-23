import React from 'react'
import "./resMenu.scss"

export default function ResMenu({menuOpen, setMenuOpen}) {
  return (
    <div className={"res-menu " + (menuOpen && "active")}>
        <ul className="res-menu-items">
            <li onClick={()=> setMenuOpen(false)}><a href="#home" className="res-menu-btn">Home</a></li>
            <li onClick={()=> setMenuOpen(false)}><a href="#services" className="res-menu-btn">Services</a></li>
            <li onClick={()=> setMenuOpen(false)}><a href="#work" className="-res-menu-btn">My Work</a></li>
            <li onClick={()=> setMenuOpen(false)}><a href="#contact" className="res-menu-btn">Contact</a></li>
          </ul>
    </div>
  )
}
