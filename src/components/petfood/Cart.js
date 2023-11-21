import React,{useState} from 'react';
import { useEffect } from 'react';
import '../Style/cart.css';

const Cart = ({cart, setCart, handleChange}) => {
    const [pricePerUnit, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.pricePerUnit
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
       
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.image} alt='image2' />
                        <p>{item.title}</p>
                        <p>Price - {item.fp}Rs</p>
                        
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs - {pricePerUnit}</span>
            <span><button class="buy">Buy Now</button>
            </span>
        </div>
    </article>
  )
}

export default Cart;