import React, { useContext } from  'react';
import ColorForm from './ColorForm'
import { Link } from "react-router-dom"
import ColorContext from "./ColorContext"

const AddColor = () => {
    // const {color, handleChange} = useContext(ColorContext)
      
    return (
        <>
        
        <Link to = "/colors/new/">Go to Add Color Page</Link>
        </>
    )


}



export default AddColor