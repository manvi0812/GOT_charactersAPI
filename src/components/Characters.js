import React, { useState, useEffect } from 'react';

import logo from '../assets/images/logo.jpg';

import Carousel from './Carousel';
import CharsList from './CharsList';

import Logo from './Logo';
import Search from './Search';

import {
  fetchOneCharacter,
  // fetchFilteredCharacters,
  fetchCharacters
} from '../redux/characterActions';
import { connect } from 'react-redux';

const Characters = ({ fetchOneCharacter, characterData, isLoading }) => {
  const [searchVal, setSearchVal] = useState('');
  // const [filters, setFilters] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [shoudSubmit, setShoudSubmit] = useState(false);

  useEffect(() => {
    if (shoudSubmit) {
      fetchOneCharacter(searchVal);
    }
  }, [fetchOneCharacter, searchVal, shoudSubmit]);

  return (
    <div className='char-section'>
      <Logo imageSrc={logo} />
      <Carousel /> {/* carousel component using Swiper library */}
      <div className='char-section__header my-5'>
        <h1>Characters</h1>
        <Search
          searchVal={searchVal}
          setSearchVal={setSearchVal}
          // filters={filters}
          // setFilters={setFilters}
          // shoudSubmit={shoudSubmit}
          setShoudSubmit={setShoudSubmit}
        />
      </div>
      <CharsList  // displaying all characters 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        characterData={characterData}
        isLoading={isLoading}
        setSearchVal={setSearchVal}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    characterData: state.characters,
    isLoading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOneCharacter: name => dispatch(fetchOneCharacter(name)),
    // fetchFilteredCharacters: (name, index) => dispatch(fetchFilteredCharacters(name, index)),
    fetchCharacters: currentPage => dispatch(fetchCharacters(currentPage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
