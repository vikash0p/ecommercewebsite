import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../api/ProductApi'
import { addToCart } from '../features/CartSlice'
import { selectAllTheme } from '../features/ModeSlice'


const SingleProduct = () => {
  const dispatch=useDispatch()
 const theme= useSelector(selectAllTheme)
    const{paramId}=useParams()
  const{data:posts, isLoading}=useGetProductByIdQuery(paramId)
  if(isLoading) return <h1>Data Loading...</h1>
  const handleAdd =(posts)=>{
      dispatch(addToCart(posts))

  }
  return (
    <>
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-5 mb-5">
                        <img src={posts.image} alt={posts.title} width='300px' height='300px'className='img-fluid'  />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <h2> {posts.category}</h2>
                        <p className='lead'>{posts.title}</p>
                        <h1>  <span>&#8377;</span> {posts.price} </h1>
                        <h4>Rating {posts.rating.rate} </h4>
                        <span></span>
                        <span><i className="fa-sharp fa-solid fa-star text-warning"></i></span>
                        <span><i className="fa-sharp fa-solid fa-star text-warning"></i></span>
                        <span><i className="fa-sharp fa-solid fa-star text-warning"></i></span>
                        <span><i className="fa-sharp fa-solid fa-star text-warning"></i></span>
                        <span><i className="fa-sharp fa-solid fa-star"></i></span>
                        <h4 className='mt-3'>Stock : {posts.rating.count} </h4>
                       <p className="lead text-wrap">{posts.description} </p>
                    <button style={{background:theme?"#ffc107":"gray",color:theme?"black":"white"}} className="btn px-5 py-1 m-3 " onClick={()=>handleAdd(posts)}>Add to cart</button>
                    <NavLink to='/cart' style={{background:theme?"#ffc107":"gray",color:theme?"black":"white"}} className="btn px-5 py-1 m-3 " >Go to cart</NavLink>
                    <NavLink to='/product' style={{background:theme?"#ffc107":"gray",color:theme?"black":"white"}} className="btn px-5 py-1 m-3 " >Go to Product</NavLink>

                    </div>
                </div>
            </div>
    </>
  )
}

export default SingleProduct