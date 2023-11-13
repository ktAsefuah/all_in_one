import React from "react";
import Header from './components/header'
import Main from './components/main'
import './App.css';
import data from "./components/data";

function App() {
  const main = data.map(item => {
    return(
      <Main
      key={item.id}
      item={item}
      />
    )
})

  return (

    <div>

     <Header />
     <section className="info">
     {main}
     </section>
    
    </div>
  )
}
  
export default App;
 
