import React from 'react';

import logo from '../assets/images/logo.jpg';
import Carousel from './Carousel';
import CharsList from './CharsList';

import Logo from './Logo';
import Search from './Search';

const Characters = () => {
  return (
    <div className='char-section'>
      <Logo imageSrc={logo} />
      <Carousel /> {/* carousel component using Swiper library */}
      <div className='char-section__header my-5'>
        <h1>Characters</h1>
        <Search />
      </div>
      <CharsList />
    </div>
  );
};

export default Characters;
