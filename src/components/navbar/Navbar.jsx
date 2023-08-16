import{AiOutlineUser,AiOutlineHome} from "react-icons/ai";
import {BiMessageSquareDetail,BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri"
import {useState} from "react";
import "./navbar.css"


const Navbar = () => {
    const [activeNav,setActiveNav]= useState("#")
 
  return (
    <nav >
        <div className="logo">
            <span><h2>Springer</h2></span>
        </div>
        <div className="navbar">
    <a href="#home" onClick={()=> setActiveNav("#")} className={activeNav=== "#" ? "active": ""}><AiOutlineHome/>Home</a>
    <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav=== "#about" ? "active": ""}><AiOutlineUser/>About</a>
    <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav=== "#experience" ? "active": ""}><BiBook/>Experience</a>
    <a href="#portfolio" onClick={()=> setActiveNav("#portfolio")} className={activeNav=== "#portfolio" ? "active": ""}><RiServiceLine/>Portfolio</a>
    <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav=== "#contact" ? "active": ""}><BiMessageSquareDetail/>Contact</a>
    </div>
  </nav>
  )
}

export default Navbar
