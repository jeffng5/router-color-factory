import React from 'react'
import "./App.css"

import { useParams } from 'react-router-dom'

function SingleColor() {
    const params = useParams();
 
    
    return (
   
   <>
    <body
    style= {{backgroundColor: `${params.color}`}}></body>
    

    
    </>
        )



}

export default SingleColor