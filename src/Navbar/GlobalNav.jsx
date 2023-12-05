import { Fragment, useState } from "react";
import './styles.css';
import MenuModal from "./MenuModal";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowWidth from "../useWindowWidth";

const GlobalNav = () => {
    const {width} = useWindowWidth();
    const [showMenu, setShowMenu] = useState(false);
    const menuExpandWidth = 780;
    const openMenu = () => {
        setShowMenu(true);
        document.body.style.overflow = 'hidden';
    }
    const closeMenu = () => {
        setShowMenu(false);
        document.body.style.overflow = 'auto';
    }

    console.log(width)
    return (
        <div className='global-nav'>
            <div className="global-navbar">
                {width > menuExpandWidth ? (
                    <Fragment>
                        <a className='global-nav-item' href="/">
                            Tech
                        </a>
                        <span className="global-nav-item global-nav-item-divider">/</span>
                        <a className='global-nav-item' href="/">
                            Reviews
                        </a>
                        <span className="global-nav-item global-nav-item-divider">/</span>
                        <a className='global-nav-item' href="/">
                            Sciece
                        </a>
                        <span className="global-nav-item global-nav-item-divider">/</span>
                        <a className='global-nav-item' href="/">
                            Entertainment
                        </a>
                        <span className="global-nav-item global-nav-item-divider">/</span>
                        <button className='global-nav-item' onClick={openMenu}>
                            More
                        <FontAwesomeIcon className='plus-minus-icon' icon={faPlus} />
                    </button>
                    </Fragment>  
                ) : (
                    <button className='global-nav-item' onClick={openMenu}>
                        Menu
                        <FontAwesomeIcon className='plus-minus-icon' icon={faPlus} />
                    </button>
                ) }
               
            </div>
            {showMenu && <MenuModal closeMenu={closeMenu}/>}
        </div>
    );
}

export default GlobalNav;