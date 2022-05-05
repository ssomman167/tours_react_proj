import React from 'react'
import { useState } from 'react'

function Tour({tour,removeTour}) {
    const [readmore,setReadmore]=useState(false)
    return (
             
        <div  key={tour.id}>
            
          <h1> {tour.name}</h1>
          <img style={{ height:'100%',width:'100%'}}src={tour.image}/>
          <h4>Price:{tour.price}</h4>
          <p style={{color:'blueviolet'}}>
              {readmore?tour.info:tour.info.substr(0,150)}
           <button style={{backgroundColor:'transparent',border:'0',color:'blue'}}
           onClick={()=>setReadmore(!readmore)}
           >{readmore?"showless":"showmore"}</button>  
          
          </p>
          <button style={{color:'brown'}} 
          onClick={()=>removeTour(tour.id)}
          >Not Interested</button>
         </div>
       )
}

export default Tour