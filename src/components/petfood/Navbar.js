import React from 'react';
import '../Style/navbar.css';

const Navbar = ({size, setShow}) => {
  return (
    <nav class="navSH">
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                Pet Med & Food 
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar