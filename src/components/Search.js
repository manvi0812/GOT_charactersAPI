import React, { useState } from 'react';

import filterImg from '../assets/images/filter.png';

const Search = () => {
  const [searchVal, setSearchVal] = useState('');

  const handleSearch = value => {
    setSearchVal(value);
  };

  return (
    <div className='char-section__header__search-box'>
      <p className='char-section__header__search-box--subtext w-100 px-3'>
        Search your fav characters here.
      </p>
      <div className='d-flex'>
        <input
          type='text'
          className='char-section__header__search-box--input mx-2'
          value={searchVal}
          placeholder='Type name...'
          onChange={e => handleSearch(e.target.value)}
        />
        <img
          src={filterImg}
          alt='filter'
          className='char-section__header__search-box--filter-img'
        />
      </div>
    </div>
  );
};

export default Search;
