import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./Header.scss"
const Header = () => {
  return (
   <>
   <nav>
   <div className='container'>
       <div className='row'>

       <div className='logo col-3'>
          <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-regular.png" alt="" />
        </div>
        <div className='menu col-6'>
          <ul>
            <li><Link className='list' to="/">Home</Link></li>
            <li><Link className='list' to="/shop">Shop</Link></li>
            <li><Link className='list' to="/makeup">Make up</Link></li>
            <li><Link className='list' to="/skincare">Skin care</Link></li>
            <li><Link className='list' to="/haircare">Hair care</Link></li>
            <li><Link className='list' to="/about">About</Link></li>
            <li><Link className='list' to="/contact">Contact</Link></li>
           
          </ul>
        </div>
        <div className='nav__icons col-3'>
          <div><PersonIcon  /></div>
          <div><ShoppingBagIcon /></div>
          <div><FavoriteBorderIcon /></div>
        </div>

       </div>
        
   </div>
   </nav>
   
   
   </>
  )
}

export default Header