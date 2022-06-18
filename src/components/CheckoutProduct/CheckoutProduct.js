import React from "react";

import "./CheckoutProduct.css";
import { useStateValue } from '../../ContextAPI/StateProvider';

const CheckoutProduct = ({id, title, price, image, rating }) => {
  const [{basket}, dispatch] = useStateValue();

  const removeToBasket = () => {
    dispatch({
      type: 'REMOVE_TO_BASKET',
      item: {
        id, title, price, image, rating
      }
    })
  }

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__image">
        <img src="https://m.media-amazon.com/images/I/81I79gsfLnL._AC_AA180_.jpg" alt="hat" />
      </div>

      <div className="checkoutProduct__info">
        <h3 className="checkoutProduct__title">Callaway Golf 2022 Stitch Magnet Adjustable Hat, Adjustable Size, Charcoal Color</h3>
        <div className="checkoutProduct__rating">
            {Array(rating)
            .fill()
            .map((_, i) => <p key={i}>⭐</p>)
            }
        </div>
        <button
          onClick={removeToBasket}
        >Remove from Basket</button>
      </div>

      <div className="checkoutProduct__price">
        <h3>${price}</h3>
      </div>
    </div>
  );
};

export default CheckoutProduct;
