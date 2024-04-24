import React, {useState} from 'react'
import './Sidebar.css'
import Logo from '../../imgs/chart-up 1.png'
//import { SidebarData } from '../../Data/Data'
import { sideBarData } from '../../Data/Data'
//import   UilSignOutAlt from '@iconscout/react-unicons'
//import Logout from '../../imgs/logout.svg'
import { motion } from "framer-motion";
//import Hamburger from '../../imgs/hamburger.png'
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpanded] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpanded(!expanded)}>
        <GiHamburgerMenu/>
        {/*<img src={Hamburger} />*/}
      </div>
      <motion.div className='Sidebar' variants={sidebarVariants}animate={window.innerWidth<=768?`${expanded}`:''} >
        <div class="border">
          <div className='logo'>
            <img src={Logo} alt="poster"/>
            <span>Money Crypt</span>
          </div>
          <div className='menu'>
            {sideBarData.map((item, index) =>{
              return(
              <div className={selected === index ? "menuItem active" : "menuItem"} key="index" onClick={() => setSelected(index)}>
                <item.icon/>
                {/*<img src={item.icon} alt="empty"/>*/}
                <span>{item.heading}</span>
              </div>
              )
            })}
          <div className='menuItem'>
            <FiLogOut/>
            {/*<img src={Logout}/>*/}
            <span class="log">Logout</span>
          </div>
        </div>
        </div>

      </motion.div>
    </>
    
  )
}

export default Sidebar
