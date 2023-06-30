
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectAllTheme } from '../features/ModeSlice'
import './Contact.css'


const Contact = () => {
  const theme=useSelector(selectAllTheme)

 
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className='text-center mt-3 ' >Contact Us</h1>
              <hr className='w-25 mx-auto' />
             
          </div>
        </div>
         {/* --------------------------------------images------------------------------------------ */}
         <section className="row align-items-center">
          <div className="col">
            
             <div  className=' text-center  align-items-center'>
             <h1 >
                <span className='fw-bolder ' >Happy Holidays!</span>
                Dont't miss our sale!
              </h1>
              <h1>Up to #-% off on all Products and membership packages</h1>
              <NavLink to='/product' className="btn  px-5 fs-5" style={{background:theme?"#ffc107":"gray",color:theme?"black":"white"}}>Check Out Now</NavLink>
             </div>
           
          </div>
         </section>
      </div>
            {/*------------------------------ second section start(contact number) ------------------*/}
            <div className="container-fluid my-5" >
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6  ">
                <form className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">Email</label>
                      <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputPassword4" className="form-label">Password</label>
                      <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputAddress" className="form-label">Address</label>
                      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                      <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputCity" className="form-label">City</label>
                      <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputState" className="form-label">State</label>
                      <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputZip" className="form-label">Zip</label>
                      <input type="text" className="form-control" id="inputZip"/>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input " type="checkbox" id="gridCheck"  />
                        <label className="form-check-label " htmlFor="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn  px-5 fs-5 fw-bolder " style={{background:theme?"#ffc107":"gray",color:theme?"black":"white"}}>Sign in</button>
                    </div>
                  </form>
                     </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <h2>Need to get in touch? No problem! You can use our contact form to send us a message.</h2>
                  <ul>
                    <li className='fs-4'>Need a support? Check our available  <NavLink to='' className='text-decoration-none'>Support Option</NavLink> </li>
                    <li className='fs-4'>Want to remove the back links to BootstrapMade? Check our available <NavLink to='' className='text-decoration-none'>Licensing Option</NavLink> </li>
                  </ul>
                </div>
              </div>
            </div>
              {/*------------------------------ third section start(contact number) ------------------*/}
              <div className="container">
                <div className="row">
                  <div className="col my-3 p-5 text-center" style={{background:"#FFEE63"}}>
                      <h2 className='fw-bolder'>Join Our Newsletter</h2>
                      <p>Subscribe to our newsletter to receive emails about new template releases and updates</p>
                      <div type='email' className="form-control text-start">Enter Your Email</div>
                      <button className="btn  px-5 mt-3 fs-5 fw-bold" style={{background:theme?"#ffc107":"gray",color:theme?"black":"white"}}>Subscribe</button>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Contact