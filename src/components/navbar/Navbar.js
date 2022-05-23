import { MenuOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navebar'>
        <div className='navbar__items'>
            <Link to='/all-categories' className='navbar__link'>
                <div className='navbar__item'>All Categories <MenuOutlined /> </div>
            </Link>
            <Link to='/electronics'  className='navbar__link'>
                <div className='navbar__item'>Electronics</div>
            </Link>
            <Link to='/fashions'  className='navbar__link'>
                <div className='navbar__item'>Fashions</div>
            </Link>
            <Link to='/phones-tablet'  className='navbar__link'>
                <div className='navbar__item'>Phones & Tablets</div>
            </Link>
            <Link to='/home-kitchen'  className='navbar__link'>
                <div className='navbar__item'>Home & Kitchen</div>
            </Link>
            <Link to='/baby-care'  className='navbar__link'>
                <div className='navbar__item'>Baby Care</div>
            </Link>
            <Link to='/other-categories'  className='navbar__link'>
                <div className='navbar__item'>Others</div>
            </Link>
        </div>

    </div>
  )
}

export default Navbar