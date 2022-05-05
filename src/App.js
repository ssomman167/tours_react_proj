import { useEffect,useState } from "react"
import Loading from "./components/Loading"
import './App.css'
import Tours from "./components/Tours"

const url = 'https://course-api.com/react-tours-project'
function App() {

  const [loading,setLoading]=useState(true)
  const [tours,setTours]=useState([])

  const removeTour=(id)=>{

    setTours(tours.filter((tour)=>tour.id!==id))
    
        
  }
  
  const getData=async ()=>{
    setLoading(true)
    try{
      const data=await fetch(url)
      const response= await data.json()
      console.log(response)
      setTours(response)
      setLoading(false)
    }
    catch(err){
      console.log(err)
      setLoading(false)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  if(loading){
  return (
<Loading/>
  )
  }
  else{
  return(<>
  
  <Tours tours={tours} removeTour={removeTour}/>
  </>)
  }
}
export default App