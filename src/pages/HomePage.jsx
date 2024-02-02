import React from 'react';
import homePageImage from '../images/home-page-img.jpg';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <img src={homePageImage} alt="Stop war in Ukraine" />
    </div>
  );
};

export default HomePage;
