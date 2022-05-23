import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import FlashMessage from '../flashMessage/FlashMessage';
import Navbar from '../navbar/Navbar';
import Bounce from 'react-reveal/Bounce';

function Header() {
  const [{basket} ]= useStateValue();

  return (
    <div className='header__container'>
    <Bounce top>
        <FlashMessage />
    </Bounce>
      <div className='header'>
        <Link to="/">
          <img 
            src='./images/logo.png' 
            alt='' 
            className='header__logo'
          />
        </Link>
                <div 
              className='header__search'>
                <input 
                  className='header__searchInput'  
                  type="text" placeholder='Search for products, brands or categories...'/>
                  <SearchIcon 
                    className="header__searchIcon" />
          </div>

          <div className='header__nav'>
                  <Link to="/login">
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Hello Guest </span>
                          <span className='header__optionLineTwo'>Sign In </span>
                    </div>
                  </Link>
              {/* <div className='header__option'>
                  <span className='header__optionLineOne'>Returns </span>
                  <span className='header__optionLineTwo'>& Orders</span>
                </div>
                <div className='header__option'>
                  <span className='header__optionLineOne'>Your </span>
                  <span className='header__optionLineTwo'>Prime </span>
                </div> */}
                <Link to="/checkout">
                  <div className='header__optionBasket'>
                      <ShoppingCartOutlined />
                      <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                  </div>
                </Link>

          </div>
      </div>
      <Navbar />
    </div>
  )
}

export default Header