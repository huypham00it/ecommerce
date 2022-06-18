import React from 'react'

import { useStateValue } from '../../ContextAPI/StateProvider';
import './Product.css';
import Image1 from '../../assets/image1.jpg';

const Product = ({id, title, image, price, rating}) => {

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    })
  }

  return (
    <div className="product">
        <div className="product__info">
            <p>Amazon Essentials Men's Regular-Fit Short-Sleeve Pocket Oxford Shirt</p>
            <p className="product__price">
                <small>$</small>
                <strong>30</strong>
            </p>
            <div className="product__rating">
              {Array(rating).fill().map((_, i) => (<span key={i}>⭐</span>))}
            </div>

        </div>
        <div className="product__image">
            <img src={Image1} alt="productimage" />
        </div>

        <button 
        onClick={addToBasket}
        >Add to Basket</button> 
    </div>
  )
}

export default Product