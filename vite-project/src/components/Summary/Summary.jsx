import React from 'react'
import Positive from "../../imgs/bleach.svg"
import Negative from "../../imgs/down.svg"
import './Summary.css'
import { TbTriangleFilled } from "react-icons/tb";
import { TbTriangleInvertedFilled } from "react-icons/tb";

const Summary = () => {
  return (
    <div className='Summary'>
      <div>
        <p style={{fontSize: "12px"}}>Your Balance</p>
        <p style={{fontWeight: "bold", fontSize: "20px"}}>$10,362</p>
      </div>
      <div class="span">
        <p style={{fontSize: "12px"}}><span><TbTriangleFilled color= "green"/></span>$3,250</p>
        <p style={{fontSize: "12px"}}><span><TbTriangleInvertedFilled color= "red"/></span>$1,020</p>
      </div>
    </div>
  )
}

export default Summary