/** @format */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import {
  firestore,
  covertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';
import { ShopActionTypes } from '../../redux/shop/shop.types';
import WithSpinner from '../../components/withSpinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = covertCollectionSnapshotToMap(snapshot);
      dispatch({
        type: ShopActionTypes.UPDATE_COLLECTIONS,
        payload: collectionMap,
      });
      setLoading(false);
    });
  });
  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
        )}></Route>
      <Route
        exact
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};
export default ShopPage;
