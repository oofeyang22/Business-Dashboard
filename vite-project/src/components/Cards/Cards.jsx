import "./Cards.css";
import { cardsData } from "../../Data/Data";
import Search from "../../imgs/sea.svg";
import Notifications from "../../imgs/note.svg"
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="column">
        <div className="row">
            <div><h1>Hi Feranmi!</h1></div>
            <div className="align">
                <span><img src={Search}/></span>
                <span><img src={Notifications}/></span>
            </div>
        </div>
        <div className="Cards">
            {cardsData.map((card, id) => {
                return (
                    <div className="parentContainer" key={id}>
                        <Card
                            title={card.title}
                            png={card.png}
                            color={card.color}
                            value={card.value}
                            series={card.series}
                        />
                    </div>
                );
            })}
        </div>
    </div>
    
  );
};

export default Cards;
