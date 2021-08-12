import { useRef } from "react";
import {  useState } from "react";

export function UseTimeout2() {
    const [start, setStart] = useState(0)
    const [min,setMin]=useState(0)
    const CounterRef=useRef()

  const start1=() => {
    
    CounterRef.current = setInterval(function () {
                setStart(function (prevCounter) {
                    
                    return Number(prevCounter) + 1
                })
        
                    
                        
                       
                            
               
            }, 1000)
    }
    
    const stop = () => {
        clearInterval(CounterRef.current)
    }
    const reset = () => {
        setStart(0)
         clearInterval(CounterRef.current)
        
    }


  


    
    return {
        min,
        start,
        stop,
        reset,
        start1
  }
}