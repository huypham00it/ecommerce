import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

import { useStateValue } from '../../ContextAPI/StateProvider';
import './Header.css';

const Header = () => {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="header">
        <div className="header__logo">
        
        <Link to="/" className="header__logoImage"></Link>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="nav__item">
              <span className="nav__itemLineOne">Hello, Guest</span>
              <span className="nav__itemLineOne">Sign In</span>
          </div>
        </Link>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineOne">Shop</span>
        </div>
        <Link to="/checkout">
          <div className="nav__itemBasket">
            <ShoppingCartIcon className="itemBasket"/>
            <span className="nav__itemLineOne nav__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header