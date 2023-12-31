import React, { useState } from "react";

const ColorForm = () =>{
    const [newColor, setNewColor] = useState("")
    const handleChange= (e) => {
        setNewColor(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setNewColor(e.target.value)
    }
    
    return (
        <form>
            <input type="text" placeholder= "color" value={newColor} onChange={handleChange}/>
            <button onClick={handleSubmit}>Add New Color</button>
        </form>
    )

}


export default ColorForm;