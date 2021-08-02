/** @format */

import React from 'react';
import Directory from '../../components/directory/directory.components';
import './homepage.styles.scss';
import HomePageContainer from './homepage.style';
const HomePage = () => (
  <HomePageContainer>
    <h1>Welcome to my Homepage</h1>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
