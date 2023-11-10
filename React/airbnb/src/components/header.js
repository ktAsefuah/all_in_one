import React from "react"
import runner from "./images/tool.jpg"


export default function Header(){
   return (
      <section className="hero">
         <img src={runner} alt="top" className="hero--photo"/>
         <h1 className="head">Online Experiences</h1>
         <p className="text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
      </section>
    
 
   
   )  
}