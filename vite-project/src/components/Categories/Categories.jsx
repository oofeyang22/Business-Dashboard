import Shoe from "../../imgs/running-shoe.svg"
import Accessories from '../../imgs/accessories.svg'
import './Categories.css'
import { IoFootstepsSharp } from "react-icons/io5";
import { GiDropEarrings } from "react-icons/gi";
const Categories = () => {
  return (
    <div className='Categories'>
      <div><p>Explore your top categories and keep <br/> shopping with cashback</p></div>
      <div className="Row">
        <div className="Col1">
          <div><IoFootstepsSharp size={30} color="brown"/></div>
          <div>Footwear</div>
          <div>18941 units</div>
        </div>
        <div className="Col2">
          <div><GiDropEarrings size={30} color="blue"/></div>
          <div>Accessories</div>
          <div>25041 units</div>
        </div>
      </div>
    </div>
  )
}

export default Categories