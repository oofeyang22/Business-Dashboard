import React from 'react'
import './Activity.css'
import CreditCard from '../../imgs/credit-card.svg'
import Bill from '../../imgs/bill.svg'
import { CiMoneyBill } from "react-icons/ci";
import { RiBillLine } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
const Activity = () => {
  return (
    <div className='Activity'>

      <div className='horizon'>
        <div className='image'><CiMoneyBill size={20}/></div>
        <div >
          <p>Withdraw Earning</p>
          <p>12:40AM</p>
        </div>
        <div><p>$4,120</p></div>
      </div>
      <div className='horizon2'>
        <div className='image'><RiBillLine size={20}/></div>
        <div >
          <p>Paying Website tax</p>
          <p>10:20AM</p>
        </div>
        <div><p>$800</p></div>
      </div>
      <div className='horizon2'>
        <div className='image'><IoFastFoodOutline size={25}/></div>
        <div >
          <p>Fast Food Order</p>
          <p>10:20AM</p>
        </div>
        <div><p>$2000</p></div>
      </div>
    </div>
  )
}

export default Activity