import Home from "../content/home/Home.js";
import Tovars from "../content/tovars/Tovars.js";
import AddTovar from "../content/add/addTovar.js";
import BasketModal from "../content/basket/BasketModal.js";
import InfoCard from "../content/tovars/InfoCard.js";

import "./main.scss";
import Registration from "../content/registration/Registration.js";
import SuccessRegistration from "../content/registration/SuccessRegistration.js";
import Login from "../content/login/Login.js";

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
        case "Registration":
            componentToDisplay = <Registration />;
            break;
        case "Login":
            componentToDisplay = <Login />
            break;
        case "SuccessRegistration":
            componentToDisplay = <SuccessRegistration />
            break;
        default:
            componentToDisplay = null;
    }
    return (<div className="main_info">{componentToDisplay}</div>)
}
export default Main;