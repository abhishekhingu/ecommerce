/** @format */

import React from 'react';
import {
  removeCartItem,
  addItem,
  removeItem,
} from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import './checkout-item.styles.scss';
const CheckoutItem = ({ item, dispatch }) => {
  const { imageUrl, name, quantity, price, id } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <div className='name'>{name}</div>
      <div className='quantity'>
        <div className='arrow' onClick={() => dispatch(removeItem(item))}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </div>
      <div className='price'>{price}</div>
      <div
        className='remove-button'
        onClick={() => {
          dispatch(removeCartItem(item));
        }}>
        &#10005;
      </div>
    </div>
  );
};

export default connect()(CheckoutItem);
