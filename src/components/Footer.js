import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllTheme } from '../features/ModeSlice'


const Footer = () => {
   const theme=useSelector(selectAllTheme)

  return (
    <footer>
            <div className="container-fluid " style={{background:theme? "#ffc107":"gray", color:theme?" ":"white"}}>
                <div className="row px-5 py-4  ">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 ">
                    <div className=" fs-3  fw-bolder  fst-italic " to="/product" >
                     <span className="text-primary  align-text-top">S</span>
                     <span className=" text-danger align-text-bottom">H</span>
                     <span className="text-success  align-text-top">O</span>
                     <span className=" text-dark align-text-bottom">W</span>
                     <span className=" text-primary align-text-top">F</span>
                     <span className="text-danger align-text-bottom">I</span>
                     <span className="text-success  align-text-top">T</span>
                       </div>
                       <h4 className='fw-bold'>contact</h4>
                        <h5 className='fw-bold'>Address: <span className='fs-6'>House No 23, mathura road ,faridabad</span> </h5>
                        <h5 className='fw-bold'>Phone: <span className='fs-6'>(+91)9990127407/8448925560</span> </h5>
                        <h4 className='fw-bold'>Follow Us</h4>
                        <div className="hstack fs-3 ">
                            <span><i className=" text-dark fa-brands px-1 fa-square-facebook"></i></span>
                            <span><i className=" text-dark fa-brands px-1 fa-square-twitter"></i></span>
                            <span><i className=" text-dark fa-brands px-1 fa-square-instagram"></i></span>
                            <span><i className=" text-dark fa-brands px-1 fa-square-youtube"></i></span>
                        </div>


                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-4 ">
                        <ul className='lead list-unstyled'>
                           <h4 className='fw-bold '>About</h4>
                            <li className=''>About Us</li>
                            <li className=''>Delivery Information</li>
                            <li className=''>Privacy Policy</li>
                            <li className=''>Terms & Condiitons</li>
                            <li className=''>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 my-4 ">
                    <ul className='lead list-unstyled'>
                           <h4 className='fw-bold '>MyAccount</h4>
                            <li className=''>Sign In</li>
                            <li className=''>View Cart</li>
                            <li className=''>My Wishlist</li>
                            <li className=''>Track order</li>
                            <li className=''>Help</li>
                        </ul>
                    </div>
                </div>
            </div>
    </footer>
  )
}

export default Footer