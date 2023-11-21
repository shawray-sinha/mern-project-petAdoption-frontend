import React from 'react';
import list from './data';
import '../Style/Shop.css';
import Cards from './Cards';

const Shop = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Shop;