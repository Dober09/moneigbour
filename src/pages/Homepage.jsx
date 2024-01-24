import Card from "../components/Card";

import { data } from "../data/homepagedata";
import '../css/card.css'
import Button from "../components/Button";
const Homepage = () => {
    return (
        <div className="homepage">

            <div className="cards">
                {
                    data.map(item=>(
                        <Card key={item.id} description={item.description} image={item.image} title={item.title}/>
                    )
                    )
                }
            </div>
            <div className="connet">

            <Button text={"connect to your moneigbourhood"} type={"button"}/>
            <div>
                <a href="">Privatcy Policy</a> |
                <a href="">Member Agreement</a>
            </div>
            </div>

        </div>
    );
}

export default Homepage;
