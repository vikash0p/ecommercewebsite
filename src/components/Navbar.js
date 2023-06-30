import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectAllCart } from '../features/CartSlice'
import { selectAllTheme, toggleTheme } from '../features/ModeSlice'
import './Navbar.css'


const Navbar = () => {
  const dispatch=useDispatch()
  const theme=useSelector(selectAllTheme)
  const carts=useSelector(selectAllCart)
  return (
    <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{background: theme? "#ffc107":"gray"}}>
        <div className="container-fluid">
    <NavLink className="navbar-brand fs-3  fw-bolder  fst-italic " to="/product" >
    <span className="text-primary  align-text-top">S</span>
    <span className=" text-danger align-text-bottom">H</span>
    <span className="text-success  align-text-top">O</span>
    <span className=" align-text-bottom">W</span>
    <span className=" text-primary align-text-top">F</span>
    <span className="text-danger align-text-bottom">I</span>
    <span className="text-success  align-text-top">T</span>
      </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link fs-4   active"  style={{color: theme? "":"white"}} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-4 " style={{color: theme? "":"white"}} to="/product">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-4 " style={{color: theme? "":"white"}} to="/blog">Blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-4 " style={{color: theme? "":"white"}} to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-4 " style={{color: theme? "":"white"}} to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-4 " style={{color: theme? "":"white"}} to="/cart">Cart</NavLink>
        </li>
      </ul>
      <div className="ms-auto d-flex gap-3 ">
        <span className='position-relative'>
        <i className="fa-sharp fa-solid fa-cart-shopping fs-3 text-info"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {carts.length}
          </span>
        </span>
      <div className="form-check form-switch">
        <input className="form-check-input " type="checkbox" id="flexSwitchCheckDefault" onChange={()=>dispatch(toggleTheme())} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {
            theme? <span><i className="fa-solid fa-sun"></i></span>:<span><i className="fa-solid fa-moon"></i></span>
          }
        </label>
      </div>
      </div>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar