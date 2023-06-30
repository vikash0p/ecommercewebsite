import React from 'react'
import './Header.css'

import { useGetlimitProductQuery } from '../api/ProductApi'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAllTheme } from '../features/ModeSlice'
import { motion } from 'framer-motion'


const Header = () => {
  const{data:products,isLoading}=useGetlimitProductQuery()

  const theme=useSelector(selectAllTheme)

    if(isLoading) return <h1>Loading...</h1>
      
    
  return (
       <>
       <header>

       </header>

       <div className="container-fluid">
        <div className="row">
          <div className="col">
           <motion.div initial={{x:'-1000px'}} animate={{x:0}} transition={{duration: 1}} whileHover={{ scale: 1.1 }}>
           <h1 className='text-center mt-5 fs-1 fw-bolder'>JUST DO IT</h1>
              <hr className='w-25 mx-auto' />
              <h3 className='text-center col-6 mx-auto'>
              Nike has been your companion in happiness, both big and small, for over 50 years. Our roots are firmly grounded in india and with its people.
              </h3>
             
          </motion.div>
          <div className="d-flex  align-items-center  flex-wrap justify-content-center  mt-5">
                <hr className='w-25 d-sm-none d-md-block 	d-none d-sm-block' />
                <h1 className='  px-3  '>Tranding Product</h1>
                <hr className='w-25 d-sm-none d-md-block 	d-none d-sm-block' />
           </div>
            
              </div>
          
        </div>
      
       </div>
       
        <div className="container-fluid">
          <div className="row">
          {
                    products && products.map((product)=>{
                        return(
                            <div className="col-10 col-md-3 mt-5 mb-5 m-auto"  key={product.id}>
                              
                             <motion.div className="card h-100 text-center p-4 border-warning" key={product.id}  whileHover={{ scale: 1.1,boxShadow:"0px 0px  8px #ffc107" }}  transition={{ duration: 0.8 }}>
                              <img src={product.image} className="card-img-top" alt={product.title}  height={'300px'} />
                              <div className="card-body">
                                <h5 className="card-title">{product.title.substring(0,12)}</h5>
                                <h5 > <span>&#8377;</span> {product.price} </h5>
                                <NavLink  to={`/product/${product.id}`} className='btn px-5'  style={{background:theme?"#ffc107":"gray",color:theme?"black":"white"}}>Show</NavLink>
                                  
                              </div>
                            </motion.div>
                            </div>
                        )
                    })
                }
          </div>
        </div>
       

       </>
   
  )
}

export default Header