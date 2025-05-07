import axios from "axios";
import { useEffect, useState } from 'react';
// import './App.css'

function App() {

  const[data,setData]=useState("");
    async function request(){
      try{
          const response=await await axios.get("http://localhost:3000/");
          setData(response.data);
      }catch(e){
        console.log(e);
      }
      
    }

    useEffect(()=>{
      request();
    },[]);

  return (
    <>
     {data}
    </>
  )
}

export default App
