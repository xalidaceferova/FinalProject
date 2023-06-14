import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.scss"
const Footer = () => {
  return (
    <>
    <footer>
     
    <div className='foottop container'>
    <div className='row'>
    <div className='col-4'>
  <img src="https://websitedemos.net/be-bold-beauty-store-02/wp-content/uploads/sites/1117/2022/08/logo-regular.png" alt="" />
</div>

 <div className='footlist1 col-3'>
  <ul>
 
      <li><Link className='list' to="/shop">Shop</Link></li>
      <li><Link className='list' to="/makeup">Make up</Link></li>
      <li><Link className='list' to="/skincare">Skin care</Link></li>
      <li><Link className='list' to="/haircare">Hair care</Link></li>
      <li><Link className='list' to="/about">About</Link></li>
      <li><Link className='list' to="/contact">Contact</Link></li>

  </ul>
 </div>
<div className='footlist2 col-3'>
  <ul className='list2'>
    <li>Refund Policy</li>
    <li>Terms and Conditions</li>
    <li>FAQ</li>
    <li>Privacy Policy</li>
  </ul>
</div>
<div className='foot__icons col-2'>
 <FacebookIcon className='face' />
 <TwitterIcon className='face' />
 <InstagramIcon className='face' />
</div>


</div>
</div>
    
     
   <div className='container'>

   
      <p className='footend'>Copyright © 2023 Be Bold | Powered by Be Bold</p>

    
   </div>

    </footer>
    
    </>
  )
}

export default Footer