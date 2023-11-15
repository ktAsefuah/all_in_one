import React from "react";
import logo from './images/icon.jpg'

export default  function Header () {
    return(
        <div className="head">
            <img src={logo}alt="icon" className="logo"/>
            <h2>
            My Travel Journal</h2> 
        </div>
    )

}