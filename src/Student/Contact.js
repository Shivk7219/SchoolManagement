import React from 'react';
import {useEffect,useState} from "react";

function Contact() {
  const [count,Setcount]=useState(0);
  useEffect(() => {
    setTimeout(()=>{
      Setcount((count)=>
      
        count+1);
      
    },1000)
  
  })

  return ( 
   
      <div>{count}</div>

  )
}

export default Contact