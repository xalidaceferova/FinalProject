import React from 'react'
import "./Contact.scss"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import {Formik} from "formik"
import * as Yup from "yup"
const Contact = () => {
  return (
    <>
    
    <section className='about'>

   <div className='about__img2'>

        <div className='about__head'>
        <p>GET IN TOUCH</p>
         <h1>Message us</h1>
        </div>
   </div>
    
  </section>
  <section className='contact'>
     <div className='contact__left'>
      <div className='contact__left__txt'>
        <h3>Contact Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.</p>
        <div className='first__icon'>
          <LocationOnIcon />
          <span>123 Fifth Avenue, New York, NY 10160</span>
        </div>
        <div className='mailicon'>
          <MailIcon />
          <span>contact@info.com</span>
        </div>
        <div className='phoneicon'>
          <LocalPhoneIcon />
          <span>9-334-7565-9787</span>
        </div>
      </div>
     </div>

     <div className='contact__rigth'>
      <div className='inner__form'>
      <Formik
        initialValues={{
          name:"",
          lastname:"",
          email:"",
          message:""
        }}
        validationSchema={Yup.object({
          name:Yup.string().required("name is required!!!"),
          lastname:Yup.string().required("lastname is required!!!"),
          email:Yup.string().email().required("email is required!!!"),
          message:Yup.string().required("message is required!!!")
        })}
        onSubmit={(values)=>{
         console.log(values)
        }}
       >
          {({values,handleSubmit,handleChange,errors})=>(

             <form onSubmit={handleSubmit}>
                 

                 <label htmlFor="name" className='namelabel'>Name</label><br />
                <div className='namediv'>
                <div className='nameinner'>
                <input type="text" id='name' onChange={handleChange} value={values.name} className='name' placeholder='Name'/>
                {errors.name &&(<div className='eror'>{errors.name}</div>)} 
                </div>
               <div className='nameinner'>
                <input type="text" id='lastname' onChange={handleChange} value={values.lastname} className='name' placeholder='Lastname'/>
                {errors.lastname && (<div className='eror'>{errors.lastname}</div>)} </div>

                </div>

                
                <div className='emaildiv'>
                   <label htmlFor="email">Email</label><br />
                <input type="email" id='email' onChange={handleChange} value={values.email} placeholder='Email'/>
                {errors.email && (<div className='eror'>{errors.email}</div>)} 

                </div>

               <div className='messagediv'>

                <label htmlFor="message">Message</label>
               <input type="text" id='message' onChange={handleChange} value={values.message} placeholder='Message'/>
                {errors.message && (<div className='eror'>{errors.message}</div>)} 

               </div>
                



                <button type='submit' className='submit'>Submit</button>


             </form>
            

          )}


       </Formik>
         

      </div>

     </div>

  </section>
  <section className='map'>

    <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="1640"
    height="500"
    src="https://maps.googleapis.com/maps/api/js?client=google-maps-embed&amp;paint_origin=&amp;libraries=geometry,search&amp;v=3.exp&amp;language=en_US&amp;callback=onApiLoad">
</iframe>

  </section>
    
    </>
  )
}

export default Contact