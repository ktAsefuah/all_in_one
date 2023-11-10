import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Header from './components/header'
import Card from './components/card'
import data from './components/data'

function App() { 
  
      const card = data.map(item => {
      return (
       

      <Card 
      key={item.id}
      item={item}
       />
       )
      })
      
      return(
        <div>
         <Navbar />
      <Header />
      <section className='cards-list'>
        {card}
      </section>
      
        </div>
      )} 
    

export default App;
