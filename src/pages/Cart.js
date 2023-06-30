import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, removeAllCart, removeToCart, selectAllAmount, selectAllCart } from '../features/CartSlice'
import { selectAllTheme } from '../features/ModeSlice'

 
const Cart = () => {
    // const amount=useSelector((state)=>state.carts.cart.amount)
    const theme=useSelector(selectAllTheme)
 const carts= useSelector(selectAllCart)
 const dispatch=useDispatch()
  const handleRemove=(productId)=>{
      dispatch((removeToCart(productId)))
  }
  

  return (
    <>
      <div className="container-fluid" >
        <div className="row">
          <div className="col">
          <h1 className='text-center mt-4'> Cart Items </h1>
         <hr className='w-25 mx-auto' />
    <div>
        
        {
          carts && carts.map((cart)=>{
            return(
              <div  key={cart.id} className='d-flex flex-wrap align-content-around justify-content-between border border-warning mt-3 mb-3 px-5 align-items-center' >
                
                 <img src={cart.image} alt={cart.title} width="120px" height="120px" className='py-1' />
               
                 <h3 className='mx-0 mx-sm-3 '> {cart.title.substring(0,30)}</h3>
                 <h1 className='mt-3'>  <span>&#8377;</span> {cart.price} </h1>
                  <div> <button className="btn  px-5 mb-2 " onClick={()=>handleRemove(cart.id)}  style={{background:theme?"#ffc107":"gray",color:theme?"black":"white"}}>Remove</button></div>
              </div>
            )
          })
        }
    </div>
           
            <div className="row">
              
              <div className="d-grid">
                <hr />
                <button className="btn  mb-5 col-md-6 m-auto fs-5" onClick={()=>dispatch(removeAllCart())}  style={{background:theme?"#ffc107":"gray",color:theme?"black":"white"}} >Remove All Product</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart