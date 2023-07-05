import Home from "../content/home/Home.js";
import Tovars from "../content/tovars/Tovars.js";
import AddTovar from "../content/add/addTovar.js";
import BasketModal from "../content/basket/BasketModal.js";
import InfoCard from "../content/tovars/InfoCard.js";
import "./main.scss";


const Main = (props) => {
    let selected = props.selectedPage

    let componentToDisplay;

    switch(selected){
        case "Home":
            componentToDisplay = <Home />
            break;
        case "Tovars":
            componentToDisplay = <Tovars />
            break;
        case "AddTovar":
            componentToDisplay = <AddTovar />
            break;
        case "Basket":
            componentToDisplay = <BasketModal />
            break;
        case "InfoCard":
            componentToDisplay = <InfoCard />
            break;
        default:
            componentToDisplay = null;
    }
    return (<div className="main_info">{componentToDisplay}</div>)
}
export default Main;