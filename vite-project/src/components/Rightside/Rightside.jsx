import React from 'react'
import Activity from '../Activity/Activity'
import Categories from '../Categories/Categories'
import Summary from '../Summary/Summary'
import './Rightside.css'
const Rightside = () => {
  return (
    <div className='Rightside'>
        <div>
            <h3>Summary</h3>

            <Summary/>
        </div>
        <div>
            <h3 className='shift'>Activity<span className="left">See All</span></h3>
            <p style={{fontSize: "14px"}} className='duration'>Activity in the last two weeks.</p>

            <Activity/>
        </div>
        <div>
            <h3 style={{marginTop: "6rem"}}>Top Categories</h3>
            <Categories/>
        </div>

    </div>
  )
}

export default Rightside