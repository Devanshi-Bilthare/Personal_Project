import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
   <Link to='/' > <h2>DB</h2></Link>
        <div class="right_nav">
            <Link to='/about'><h4>About</h4></Link>
            <Link to='/Projects'><h4>Projects</h4></Link>
            <Link to="https://drive.google.com/file/d/1a_o3lK87exe28rCHBWoBMZH1XK57iH1Z/view?usp=sharing"><h4>Resume</h4></Link>
        </div>
    </nav>
  )
}

export default Navbar