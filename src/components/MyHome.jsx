import React from 'react';
import Cunde from '../assest/hero-abs-2.png'
import App from '../App';

const MyHome = ({x}) => {

  let MyTask = [

    {
        id:1,
        name: 'John',
        state:'Lagos'
    },
    {
        id:2,
        name: 'Victor',
        state:'Delta'
    },
    {
        id:3,
        name: 'Joy',
        state:'Abia'
    },
    {
        id:4,
        name: 'Lola',
        state:'Osun'
    },
   
]
  return (
    <>
     <div>
      This is my home page

      <h3>{x}</h3>
      <App y= 'Yes boss'/>
  
    </div>
    
    
    
    <img src={Cunde} alt={Cunde} />

    {MyTask.map((x) => {
      return(

        <div key={x.id}>
        <h1>{x.name}</h1>
        <p>{x.state}</p>
      </div>

      )
   
})}


    </>
   
     
  )
}

export default MyHome