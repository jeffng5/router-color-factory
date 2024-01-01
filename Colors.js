import React, { useContext } from 'react'
import './App.css';
import { Link, useParams } from 'react-router-dom'
import ColorForm from "./ColorForm"
import AddColor from "./AddColor"
import ColorContext from "./ColorContext"



function Colors() {

    const params = useParams();
    // const { color, handleChange } = useContext(ColorContext)
      

    return (
    
    
    <div>
    <Link to= ":red">
    <h1 className= 'red'>Red</h1></Link>
    <Link to=":orange">
    <h1 className= "orange">Orange</h1></Link>
    <Link to=":yellow">
    <h1 className= "yellow">Yellow</h1></Link>
    <Link to=":green">
    <h1 className= "green">Green</h1></Link>
    <Link to=":blue">
    <h1 className= "blue">Blue</h1></Link>
    <Link to=":indigo">
    <h1 className= "indigo">Indigo</h1></Link>
    <Link to=":purple">
    <h1 className= "purple">Purple</h1></Link>
    <Link to= ':{color}'></Link>
    {/* <h1>{color}</h1> */}

    <AddColor/>
</div>

)

}

export default Colors