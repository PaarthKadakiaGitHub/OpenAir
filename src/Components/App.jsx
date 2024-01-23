import './App.css'
// import { Tilt } from "react-tilt";
import React, { useEffect, useState, useRef } from 'react';

import { motion } from "framer-motion";
import img from './The-Monocot-Studio-Evelyn-Residences-9.jpg'
import img2 from './plain-black-background-02fh7564l8qq4m6d.jpg'
import img3 from './quote2.jpg'
import img4 from './quote3.jpg'
import img5 from './quote4.jpg'
import emailjs from '@emailjs/browser'


// 
// 
// 
function App() {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_a17ht0q',
        'template_6p32wdr',
        {
          from_name: form.name,
          to_name: "Paarth Kadakia",
          from_email: form.email,
          to_email: "paarth.kadakia24@gmail.com",
          message: form.message,
        },
        'DDSC7nnv8ziFOP5C9'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
   
    <body className='navbar'>
      
      <div class="custom-shape-divider-top-1705389671">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
    <header className='header'>

        <a className='logo'>Open Air Services</a>
            <div>
            <a href="#"> Contact</a>
            <a href="#">About</a>
            <a href="#"> Hours</a>

            </div>
    </header>
    
    <div className="estimate">
    <section className='container'>
      <form action="#" className="form"
      ref={formRef}
      onSubmit={handleSubmit}>
      <header className='header2' >Get An Estimate! We clean houses at an affordable rate</header>

        <div className="input-box">
          <label>Name</label>
        <input placeholder='Name'></input>
        </div>
        <div className="input-box">
        <label>Email</label>

        <input placeholder='Email'></input>
        </div>
        <div className="input-box">
        <label>Location</label>

        <input placeholder='Location'></input>
        </div>
        <div className="input-box">
        <label>Message</label>

        <textarea className='message' placeholder='Message'></textarea>
        </div>
        </form>
    
    </section>
    <div>
    
      <div className='estimate'>
      
      <a>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <img className="asdf" src={img} alt="Italian Trulli" />
        </motion.div>

        </a>

    </div> 
    </div>

    </div>
    <div className="estimate4">

    <div>
      <a>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <img className="asdf2" src={img} alt="Italian Trulli" />
        </motion.div>
      </a>
    
    </div> 
    
    </div>
    

    <div className="spacer layer1"></div>

    <div className='estimate2'>
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}

>
      <section className='container3'>
    <header className='header2'>Local Mississauga Cleaning Services</header>
    <p>
    Welcome to Open Air Services, your trusted partner for professional cleaning services in Mississauga. With years of experience, we take pride in delivering exceptional cleaning solutions tailored to your needs.

    Our dedicated team is committed to providing the highest quality service, ensuring your home is not just cleaned, but revitalized. We understand the importance of a clean and healthy living space, and we guarantee some of the lowest rates in the industry without compromising on quality.

    Whether you need a one-time deep cleaning or regular maintenance, we've got you covered. Experience the difference with Open Air Services, where cleanliness meets affordability.

    Contact us today to schedule your cleaning service and discover the joy of coming home to a fresh, spotless environment.
  </p>

    </section>
    </motion.div>
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}>
    <div className="estimate2">
    
  
    <section className="container2">     
    <header className='header2'>hours of operation</header>
    <p>Sunday 12pm-12am</p>
    <p>Monday 12pm-12am</p>
    <p>Tuesday 12pm-12am</p>
    <p>Wednesday 12pm-12am</p>
    <p>Thursday 12pm-12am</p>
    <p>Friday 12pm-12am</p>
    <p>Saturday 12pm-12am</p>

  </section>

  </div>
  </motion.div>

  
    </div>

    <div className="estimate5">

    <section className="container2">     
    <header className='header2'>hours of operation</header>
    <p>Sunday 12pm-12am</p>
    <p>Monday 12pm-12am</p>
    <p>Tuesday 12pm-12am</p>
    <p>Wednesday 12pm-12am</p>
    <p>Thursday 12pm-12am</p>
    <p>Friday 12pm-12am</p>
    <p>Saturday 12pm-12am</p>

  </section>

  </div>

    <div className="estimate2">

    <div class="slider-frame">
            <div class="slide-images">
                    <div className="img-container">
                        <img className='reviews' src={img3}/>
                    </div>
                    <div className="img-container">
                    <img className='reviews' src={img4}/>

                    </div>
                    <div className="img-container">
                    <img className='reviews' src={img5}/>

                    </div>
            </div>
        </div>
        
        </div>
      
    </body>

    
  );
}

export default App;
