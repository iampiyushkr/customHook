import { useState } from "react"

export function UsemergeState() {
    const [state,setState]=useState([])
   
    const newState = (value) => {
        setState([...state,value])
        console.log(state)
    }
   
    return {
        state,
        newState
        
    }
}