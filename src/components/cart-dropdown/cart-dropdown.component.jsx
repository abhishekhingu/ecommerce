/** @format */

import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import './cart-dropdown.styles.scss';
import {
  selectCartHidden,
  selectCartItems,
} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      {cartItems.length ? (
        <div className='cart-items'>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push('/checkout');
        }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
