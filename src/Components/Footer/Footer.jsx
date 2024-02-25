import React from 'react'
import './Footer.css'
import 'remixicon/fonts/remixicon.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <h2>Find Me On</h2>
        <div className="icons">
           <Link to='https://www.linkedin.com/in/devanshi-bilthare-773900227/'><i class="ri-linkedin-box-fill"></i></Link>
           <Link to='https://twitter.com/Devanshihihi'><i class="ri-twitter-fill"></i></Link>
           <Link to='https://github.com/Devanshi-Bilthare'><i class="ri-github-fill"></i></Link>
           <Link to='mailto:devanshibilthare@gmail.com'><i class="ri-mail-fill"></i></Link>
           <Link to='https://leetcode.com/Devanshi_Bilthare/'><i class="ri-code-s-slash-line"></i></Link>
        </div>
    </footer>
  )
}

export default Footer