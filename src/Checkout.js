import React from 'react';

import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import './Checkout.css';


const Checkout = () => {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        {(basket.length > 0) && 
            <div className="checkout__title">
              <h2>Shopping Cart</h2>
              <h4>Price</h4>
            </div> 
        }
        {(!basket.length) && 
          <h2 className="no-products">No products in basket</h2>
        }
        {basket.map((item,i) => {
          const {id, title, price, image, rating} = item;

          return <CheckoutProduct
            key={i}
            id={id}
            title={title}
            price={price}
            image={image}
            rating={rating}
          />
        })}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout