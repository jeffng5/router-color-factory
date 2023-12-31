import React from 'react'

import { useParams } from 'react-router-dom'

function SingleColor() {
    const params = useParams();
    const bodyStyle= {
        backgroundColor: `${params.color}` 
    }
    return (
   
    
    <body
    
    style= {bodyStyle}/>

        )



}

export default SingleColor