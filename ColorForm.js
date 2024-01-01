import React, { useState } from "react";
import AddColor from "./AddColor"
import ColorContext from "./ColorContext"
import { Link } from "react-router-dom"

const ColorForm = () =>{
    const [newColor, setNewColor] = useState("")
   
    const handleChange= (e) => {
        setNewColor(e.target.value) 
        console.log(e.target.value)
    }
    
// pass the handleSubmit data (setNewColor(e.target.value) to Colors.js) 
    return (
        <>
     <ColorContext.Provider value={{newColor, handleChange}}>
        <form onSubmit={handleChange} >
   
        <h3>{newColor}</h3>
        console.log({newColor})
            <input type="text" placeholder="color" value={newColor} onChange={handleChange}/>
            <button> <Link to="/colors/">Add New Color</Link></button> 
        </form> 
        </ColorContext.Provider>
        </>
    )
   
}


export default ColorForm