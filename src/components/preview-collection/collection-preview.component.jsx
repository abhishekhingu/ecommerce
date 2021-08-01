/** @format */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopItems } from '../../redux/shop/shop.selector';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';
export default function CollectionPreview({ title, items }) {
  console.log(title);
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
