import React from 'react'
import './About.css'
import men from '../images/men.jpg'

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <img src={men} alt="images" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6  align-self-center ">

                <div className="">
                <h1 className='fw-bold mt-5'>About Our Store</h1>
            <p className="lead">
            A great About Us page helps builds trust between you and your customers. The more content you provide about you and your business, the more confident people will be when purchasing from your store.
            </p>
                </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About