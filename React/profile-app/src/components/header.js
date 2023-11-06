
import React from "react"
import logo from './hea.jpg';
import linked from './in.jpg'
import mail from './mail.png'

export default function Header(){
   return (
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
        <div className="start">
          <h1>Kwesi Asefuah</h1>
          <h4>Frontend Developer</h4>
          <h5>asefuahkt96@gmail.com</h5>
          <button className="email"><img src={mail} className="icon" alt="mail"></img>Email</button>
          <button className="linked"><img src={linked} className="icon" alt="in"></img>LinkedIn</button>
        </div></header>

   )
   }