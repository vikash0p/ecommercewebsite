import { motion } from 'framer-motion'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { useGetAllProductQuery } from '../api/ProductApi'
import { selectAllTheme } from '../features/ModeSlice'
import './Product.css'



const Product = () => {
  const theme=useSelector(selectAllTheme)
const{data: shop, isLoading,isError}= useGetAllProductQuery({
 
})
const[filter,setFilter]=useState(shop)
console.log(filter)

const filterProduct=(cat)=>{
    const updatedList=shop.filter((x)=>x.category===cat);
    setFilter(updatedList)

}
  
if(isLoading) return <h1>Data Loading....</h1>
if(isError) return <h1>Show error{isError} </h1>
  return (
    <>
       <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className='text-center mt-4'style={{color: theme? "":"white"}} >Category</h1>
            <hr className='w-25 m-auto 'style={{color: theme? "":"white"}} />
            {/*-------------- button--------------------------- */}
            <div className=" text-center mt-4 " >
                    <button  style={{background:theme?"#ffc107":"gray",color:theme?"black":"white"}} className="btn px-4 py-1 m-3 " onClick={()=>setFilter(shop)} >All Product</button>
                    <button  style={{background:theme?"#ffc107":"gray",color:theme?"black":"white"}} className="btn px-4 py-1 m-3 " onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button  style={{background:theme?"#ffc107":"gray",color:theme?"black":"white"}} className="btn px-4 py-1 m-3 " onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button  style={{background:theme?"#ffc107":"gray",color:theme?"black":"white"}} className="btn px-4 py-1 m-3 " onClick={()=>filterProduct("jewelery")}>Jawelery</button>
                    <button  style={{background:theme?"#ffc107":"gray",color:theme?"black":"white"}} className="btn px-4 py-1 m-3 " onClick={()=>filterProduct("electronics")}>Electronic</button>
                </div>
           
          </div>
        </div>

        <div className="row">

        {
                    filter && filter.map((product)=>{
                        return(
                            <div className="col-10 col-md-3 mt-5 mb-2 m-auto"  key={product.id}>
                              
                             <motion.div className="card h-100 text-center p-4 border-warning" key={product.id}  whileHover={{ scale: 1.1,boxShadow:"0px 0px  8px #ffc107" }} transition={{ duration: 0.8 }} >
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

export default Product