import React from "react"
import fb from './facebook.png'
import git from './git.png'
import act from './react.png'
import twitter from './x.png'

export default function Footer(){
   return (
    
    <footer>
    <ul className="end">
      <li><img src={twitter} className="icon" alt="twitter"></img></li>
      <li><img src={fb} className="icon" alt="facebook"></img></li>
      <li><img src={act} className="icon" alt="react"></img></li>
      <li><img src={git} className="icon" alt="github"></img></li>
    </ul>
  </footer>
  
   )  
}