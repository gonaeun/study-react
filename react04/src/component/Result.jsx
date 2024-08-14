import React from 'react'
import { useContext } from 'react';
import { ColorContext } from '../App'

const Result = () => {
    const shareData = useContext(ColorContext);

    let myStyle ={width:"100px", height:"100px", display:"inline-block"}

  return (
    <div style={{...myStyle, backgroundColor:shareData.state}}></div>
  )
}

export default Result