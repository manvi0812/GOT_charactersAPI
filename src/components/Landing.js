import React from 'react';

import logo from '../assets/images/logo.jpg';

import { Link } from 'react-router-dom';
import Logo from './Logo';

const Landing = () => {
  return (
    <div className='App'>
      <Logo imageSrc={logo} />
      <main className='App-main'>
        <Link to='/characters' className=''>
          Click to find out the history of GOT Characters
        </Link>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/TZE9gVF1QbA?autoplay=1'
          title='GOT'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
        />
      </main>
    </div>
  );
};

export default Landing;
