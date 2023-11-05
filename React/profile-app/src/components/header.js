
import React from "react"
import logo from './hea.jpg';

export default function Header(){
   return (
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
        <div className="start">
          <h1>Kwesi Asefuah</h1>
          <h4>Frontend Developer</h4>
          <h5>asefuahkt96@gmail.com</h5>
          <button className="email">Email</button>
          <button className="linked">LinkedIn</button>
        </div></header>

   )
   }