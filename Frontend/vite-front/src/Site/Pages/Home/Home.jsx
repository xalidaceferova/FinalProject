import React from 'react'
import "./Home.scss"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import { Link } from '@mui/material';
const Home = () => {
  return (
    <>
    <section className='home1'>

     <div className='home__img'>

     <div className='head__txt'>
      <div>
        <h1>The New Beauty Collection</h1>
        <p>This new collection brings with it the most exciting lorem ipsum dolor sit amet.</p>  
        <button className='homebtn'>Shop Now</button>  
          </div>
     </div>

     </div>

    </section>
    <section className='carusel'>

       <div className='container'>
         <OwlCarousel
          className='owl-theme'
          items="4"
          outoplay
          nav
          dots
          loop
         
         >

         <div className='item'>
             <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-005.png" alt="" />
         </div>
         <div className='item'>
             <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-002.png" alt="" />
         </div>
         <div className='item'>
             <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-003.png" alt="" />
         </div>
         <div className='item'>
             <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-008.png" alt="" />
         </div>
         <div className='item'>
             <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-006.png" alt="" />
         </div>
         <div className='item'>
             <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-005.png" alt="" />
         </div>
         <div className='item'>
             <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/logo-006.png" alt="" />
         </div>

         </OwlCarousel>

       </div>


    </section>
    <section className='best__products'>
        <div className='best__prodhead'>
          
          <div>
            <p>POPULAR PRODUCTS</p>
            <h2>Trending Now</h2>
          </div>
         
        </div>

      <div className='container'>
         <div className='row'>

         <div className='card col-lg-3 col-md-6 col-sm-12'>
           <div className='card__img'>
            <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-04-a-400x488.jpg" alt="" />
           </div>
           <div className='card__body'>
            <p>name</p>
            <p>price</p>
            <button>Add Wishlist</button>
           </div>
         </div>
        
         <div className='card col-lg-3 col-md-6 col-sm-12'>
           <div className='card__img'>
            <img src="https://images.faberlic.com/images/fl/TflGoods/sm/1001346871949_16826934592.jpg" alt="" />
           </div>
           <div className='card__body'>
            <p>name</p>
            <p>price</p>
            <button>Add Wishlist</button>
           </div>
         </div>
         <div className='card col-lg-3 col-md-6 col-sm-12'>
           <div className='card__img'>
            <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-04-a-400x488.jpg" alt="" />
           </div>
           <div className='card__body'>
            <p>name</p>
            <p>price</p>
            <button>Add Wishlist</button>
           </div>
         </div>
         <div className='card col-lg-3 col-md-6 col-sm-12'>
           <div className='card__img'>
            <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-04-a-400x488.jpg" alt="" />
           </div>
           <div className='card__body'>
            <p>name</p>
            <p>price</p>
            <button>Add Wishlist</button>
           </div>
         </div>
         <div className='card col-lg-3 col-md-6 col-sm-12'>
           <div className='card__img'>
            <img src="https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-04-a-400x488.jpg" alt="" />
           </div>
           <div className='card__body'>
            <p>name</p>
            <p>price</p>
            <button>Add Wishlist</button>
           </div>
         </div>
        

         </div>
         

      </div>
    </section>
    <section className='home2'>

     <div className='new__collec'>

     <div className='head__txt'>
      <div>
        <h1>The New Beauty Collection</h1>
        <p>This new collection brings with it the most exciting lorem ipsum dolor sit amet.</p>  
        <button className='homebtn'>Shop Now</button>  
          </div>
     </div>

     </div>

    </section>
    
    <section className='collections'>

      <div className='collec1 col-lg-6 col-md-12 col-sm-12'>
        <img src="https://faberlic.com/images/banners/Recommendations-2-08-2023-az.jpg" alt="" />
       
          <div>
          <h3>Awesome Makeup Kit Gift Sets</h3>
          <p>Find your unique style</p>
          <button className='homebtn'>Shop Now</button>
          </div>
        
      </div>
      <div className='collec1 col-lg-6 col-md-12 col-sm-12'>
        <img src="https://faberlic.com/images/banners/Middle-3-07-2023.jpg" alt="" />
        
          <div>
          <h3>Awesome Makeup Kit Gift Sets</h3>
          <p>Find your unique style</p>
          <button className='homebtn'>Shop Now</button>
          </div>
        
      </div>

    </section>
    <section className='why__choose'>

        <div className='fast1'>
          <p>Why Choose Us</p>
        </div>
        <div className='fast'>
           <div><LocalShippingIcon /> </div>
           <div className='fast__txt'>
             <h3>Fast Delivery</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.

</p>
           </div>
        </div>
        <div className='fast'>
           <div><ArrowCircleLeftIcon /> </div>
           <div className='fast__txt'>
             <h3>Fast Delivery</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.

</p>
           </div>
        </div>
        <div className='fast'>
         <div><ArrowCircleLeftIcon /> </div>
         <div className='fast__txt'>
             <h3>Fast Delivery</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.

</p>
           </div>
        </div>
    </section>
    </>
  )
}

export default Home