import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import amazon from './img/amazon.svg';
import { Link } from 'react-router-dom';
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";


function Header() {

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    const [{ basket, user }, dispatch] = useStateValue()

    return (
        <div className='header'>
            <Link to="/">
            <img className='header__logo'
                 src={amazon} alt=""/>
            </Link>

            <div className='header__search'>
                <input type="text" className='header__searchInput'/>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
            <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign In'}</span>
                </div>
            </Link>

            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>

            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__BasketCount">
                        {basket?.length}
                    </span>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Header;