import React, { useState, useEffect } from 'react';
import Autocomplete from 'react-autocomplete';

import submit from '../assets/images/submit.png';
// import close from '../assets/images/close.png';
import { charImgAddresses } from '../utils/ImgUrls';

const menuStyle = {
  top: '38em',
  minWidth: '403px',
  background: '#191b1bd9',
  zIndex: '200',
  height: '400px',
  overflow: 'auto',
  position: 'absolute',
  borderRadius: '22px',
  padding: '10px',
  cursor: 'pointer'
};

const Search = ({ searchVal, setSearchVal, setShoudSubmit }) => {
  // const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  // const genders = ['Female', 'Male', 'All'];

  // const handleFilters = event => {
  //   setFilters({ ...filters, [event.target.name]: event.target.value }); //gender, isAlive
  // };

  const handleSubmit = () => {
    searchVal === '' ? setShoudSubmit(false) : setShoudSubmit(true);
  };

  return (
    <div className='char-section__header__search-box'>
      <p className='char-section__header__search-box--subtext w-100 px-3'>
        Search your fav characters here.
      </p>
      <div className='d-flex'>
        <Autocomplete
          getItemValue={item => item.name}
          items={charImgAddresses} // some famous characters listed in the dropdown
          renderItem={item => <div>{item.name}</div>}
          menuStyle={menuStyle}
          value={searchVal || ''}
          onChange={e => setSearchVal(e.target.value)}
          onSelect={val => setSearchVal(val)}
          inputProps={{ placeholder: "Type a character's name..." }}
        />
        <img
          src={submit}
          alt='filter'
          className='char-section__header__search-box--filter-img'
          onClick={() => handleSubmit()}
        />
        {/* <div
          className='char-section__header__search-box--filter-modal'
          style={{ display: isFilterModalOpen ? 'flex' : 'none' }}>
          <img
            src={close}
            alt='close'
            className='char-section__header__search-box--filter-modal--close'
            onClick={() => setIsFilterModalOpen(false)}
          />
          <span>Gender</span>
          {genders.map(gender => (
            <div className='form-check' key={gender}>
              <input
                className='form-check-input'
                type='radio'
                name='gender'
                value={gender}
                onChange={e => handleFilters(e)}
              />
              <label className='form-check-label' htmlFor={gender}>
                {gender}
              </label>
            </div>
          ))}
          <div className='form-check'>
            <label className='form-check-label' htmlFor='alive'>
              Is Alive
            </label>
            <input
              className='form-check-input'
              type='checkbox'
              name='isAlive'
              value={filters?.isAlive ? false : true}
              onChange={e => handleFilters(e)}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Search;
