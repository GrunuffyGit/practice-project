import { useState } from "react";
import MenuItem from "./MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

const MenuModal = ({closeMenu}) => {
    const [searchVal, setSearchVal] = useState('');
    const [fadeOut, setFadeOut] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(`Searching this value ${searchVal}`);
    }
    const closeMenuAfterFade = () => {
        if (fadeOut) {
            closeMenu();
        }
    }

    return (
        <div className="menu-modal">
            <div 
                className={`menu-modal-content ${fadeOut? 'menu-modal-content-slide-out':'menu-modal-content-slide-in'}`}
                onAnimationEnd={closeMenuAfterFade}
            >
                <div className="menu-modal-header">
                    <form className="search-bar" onSubmit={onSubmit}>
                        <input
                            className="search-bar-input"
                            type="text"
                            placeholder="search..."
                            onChange={(e)=>{
                                setSearchVal(e.target.value);
                            }}
                            
                        >
                        </input>
                        <button className="search-icon text-teal" type="submit">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </form>
                    <button className="close-button-icon text-teal" onClick={ () => {setFadeOut(true)}}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <ul className="menu-list">
                    <MenuItem itemName='Home'/>
                    <MenuItem itemName='Tech'/>
                    <MenuItem itemName='Reviews'/>
                    <MenuItem itemName='Science'/>
                    <MenuItem itemName='Entertainment'/>
                    <MenuItem itemName='Cars'/>
                </ul>
            </div>
        </div>
    );
}

export default MenuModal;