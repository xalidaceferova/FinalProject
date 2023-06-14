import React from 'react'
import "./About.scss"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
const About = () => {
  return (
   <>
  <section className='about'>

   <div className='about__img'>

        <div className='about__head'>
        <p>A FEW WORDS</p>
         <h1>About us</h1>
        </div>
   </div>
    
  </section>
  <section className='about__txt'>

      <div className='about__txt__left'>
         <div>
         <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
         </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><hr  />
      </div>
        
     <div className='about__txt__rigth'>
        
        <div className='rigth__words'>
           <h3>Cras ut ultricies risus. Etiam ac malesuada lectus. Sed congue nisi vitae lorem ullamcorper laoreet. In eget tellus mauris. Phasellus id ligula.</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eget enim eget tincidunt. In finibus nisi ex, eu interdum urna euismod sit amet. Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis. Curabitur tortor dolor, fringilla eu fringilla id, dignissim in urna. </p>
           <p>Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis. Curabitur tortor dolor, fringilla eu fringilla id.</p>
        </div>
     </div>
  </section>
  <section className='diana'>

     <div className='diana__img'>
     <img src="https://www.ocbeautymedspa.com/uploads/uploads-059ed8bcbaced59c6dfc89cd71524f66.jpg" alt="" />
     </div>
     <div className='diana__words'>
       <div>
       <p>ABOUT ME</p>
       <h3>Hi, I'm Diana!</h3>
       <h4>I'm a 32 years old women entrepreneur, living in Miami, Florida</h4>
       <p className='desc'>Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum finibus felis non massa commodo molestie at id justo. Quisque sollicitudin elit sit amet facilisis euismod. Fusce at arcu sed.</p>
       <p className='desc'>Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget.</p>

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

export default About