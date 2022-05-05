import "../App.css"
import { useState } from "react"
import Tour from "./Tour"

function Tours({tours,removeTour}) {

    



  return (
    
    <div className="container">
        
            <h1 style={{color:'blueviolet'}}>Hello Lets Go</h1>
            <ul/>
            <br/>
    {
      tours.map((tour)=>{

    return (<Tour key={tour.id} tour={tour} removeTour={removeTour}/>)
       
      })
    }
  </div>
  
    
  )
}

export default Tours