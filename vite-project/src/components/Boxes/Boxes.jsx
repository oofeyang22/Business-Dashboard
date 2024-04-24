import "./Boxes.css";
//import { cardsData } from "../../Data/Data";
//import Search from "../../imgs/sea.svg";
//import Notifications from "../../imgs/note.svg"

import Start from '../../imgs/Start.png'
import Graph from '../../imgs/bars.png'
import Bag from '../../imgs/bag.svg'

import { IoBagSharp } from "react-icons/io5";

const Boxes = () => {
  return (
    <div className="Boxcolumn">
        <div><h4>Marketplace</h4></div>
        <div className="Boxes">
            <div className="group1">
                <div className="box1">
                    <div>
                        <p style={{fontWeight: "bold"}}>Data Analytics Overview</p>
                        <p style={{fontSize: "12px"}}>See how your account grow <br/>and how you can boost it.</p>
                    </div>
                    <div className="img1">
                        <img src={Start}/>
                    </div>
                </div>
                <div className="box2">
                    <div>
                        <p style={{fontWeight: "bold"}}>Finance Flow</p>
                        <p style={{fontWeight: "thin"}}>$2350</p>
                        <p>April 2024</p>
                    </div>
                    <div className="img2">
                        <img src= {Graph} />
                    </div>
                </div>
            </div>
            <div className="group2">
                <div className="box3">
                    <div><p style= {{fontWeight: "bold"}}>Upgrade to pro</p></div>

                    <div className="img3"><IoBagSharp size={140} color="red"/></div>
                    <div>
                        <p style={{fontWeight: "BOLD"}}>$29 p/m</p>
                        <p>100% insurance for<br/> your goods</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Boxes;
