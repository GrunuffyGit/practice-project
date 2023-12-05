import { Fragment, useState } from "react";
import SubCategoryList from "./SubCategoryList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const buttonLists = {
    Tech: [
        "ALL TECH",
        "AMAZON",
        "APPLE",
        "FACEBOOK"
    ],
    Reviews: [
        "ALL REVIEWS",
        "BUYING GUIDES",
        "DEALS",
        "GIFT GUIDE",
        "LAPTOPS",
    ],
    Science: [
        "ALL SCIENCE",
        "SPACE",
        "ENERGY",
        "ENVIRONMENT",
        "HEALTH",
        "COVID-19",
    ],
    Entertainment: [
       "ALL ENTERTAINMENT",
        "GAMES",
        "TV SHOWS",
        "MOVIES",
        "AUDIO"
    ],
    Cars: [
        "ALL CARS",
        "ELECTRIC CARS",
        "AUTONOMOUS CARS",
        "RIDE-SHARING",
        "SCOOTERS",
        "OTHER TRANSPORTATION"
    ],
}

const MenuItem = ({
    itemName
}) => {
    const [showSubCategories, setShowSubCategories] = useState(false);
    const onClick = () => {
        showSubCategories? setShowSubCategories(false) : setShowSubCategories(true);
    };
    return (
        <li className="menu-item">
            {buttonLists[itemName] ? (
                <Fragment>
                    <button onClick={onClick} className="menu-button">
                        <span>{itemName}</span>
                        <FontAwesomeIcon className='plus-minus-icon text-teal' icon={showSubCategories ? faMinus : faPlus} />
                    </button>
                    {showSubCategories && <SubCategoryList list={buttonLists[itemName]}/>}
                </Fragment>
            ) : 
                itemName
             }
        </li>
        
        
    )
};

export default MenuItem;