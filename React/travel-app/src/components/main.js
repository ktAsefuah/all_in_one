import React from "react"
import './data'

export default function Main(props){
  return(

    <div className="card">
      <p>
    <img src={`${props.item.coverImg}`}
    alt="icon" className="pic" />
   </p>
     <div >
     <p className="title">{props.item.title}</p>
       <span className="place">{props.item.location} </span>
      <span>Package duration - ({props.item.date.start}) </span>
      <span>({props.item.date.end}) *  </span>
     
     <p className="card--title">{props.item.title}</p>
     <p className="card--price"><span className="bold">
       From ${props.item.GoogleMap}</span> / person</p>
    </div>
    
   </div>
  )
}