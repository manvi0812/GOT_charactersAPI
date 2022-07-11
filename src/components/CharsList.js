import React, { useState, useEffect } from 'react';

import Button from './Button';
import { charImgAddresses } from '../utils/ImgUrls';
import { cardBackground } from '../utils/cardUtils';

import { fetchCharacters } from '../redux/characterActions';
import { connect } from 'react-redux';

const CharsList = ({
  characterData,
  isLoading,
  currentPage,
  setCurrentPage,
  fetchCharacters,
  setSearchVal
}) => {
  const [characters, setCharacters] = useState([]);
  const pages = new Array(178).fill('');

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage, fetchCharacters]);

  useEffect(() => {
    let newArr = [],
      newObj = characterData;
    newArr = charImgAddresses.filter(page1 =>
      characterData.find(page2 => page1.name === page2.name)
    );

    if (newArr.length > 0) {
      newArr.forEach(item => {
        const index = characterData.findIndex(i => i.name === item.name);
        newObj[index] = { ...characterData[index], img: item.img };
      });
    }

    setCharacters([...newObj]);
  }, [characterData, currentPage]);

  const handleClick = index => {
    setCurrentPage(index);
    setCharacters([]);
    setSearchVal('');
  };

  const handlePagination = () => {
    return pages.map((_, i) => {
      return (
        <Button
          type='primary'
          text={i + 1}
          cssClassName='mb-5 mx-3'
          onClick={() => handleClick(i)}
        />
      );
    });
  };

  return (
    <>
      <div className='char-section__char-list my-5'>
        {isLoading ? (
          <div className='spinner-border text-warning' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        ) : (
          characters?.length > 0 &&
          characters.map((char, index) => {
            const cardStyle = cardBackground[Math.floor(Math.random() * cardBackground.length)];
            return (
              <div
                className='char-section__char-list--char-item'
                style={{ background: cardStyle.back }}
                key={index}>
                <div className='char-section__char-list--char-item--img-wrapper'>
                  {
                    <img
                      src={char.img ?? 'https://images6.alphacoders.com/866/866625.png'}
                      alt={char.img}
                    />
                  }
                  {char.name && <span style={{ background: cardStyle.border }}>{char.name}</span>}
                </div>
                <div className='char-section__char-list--char-item--body'>
                  <p>
                    Gender: <span>{char.gender}</span>
                  </p>
                  <p>
                    Culture: <span>{char.culture}</span>
                  </p>
                  {char.born && (
                    <p>
                      Born: <span>{char.born}</span>
                    </p>
                  )}
                  {char.died && (
                    <p>
                      Died: <span>{char.died}</span>
                    </p>
                  )}
                  <p>
                    Titles:
                    {char.titles.map(title => (
                      <>
                        <span> - {title}</span>
                        <br></br>
                      </>
                    ))}
                  </p>
                  <p>
                    Aliases:
                    {char.aliases.map(alias => (
                      <>
                        <span>- {alias}</span> <br></br>
                      </>
                    ))}
                  </p>
                  <p>
                    Tv series:
                    {char.tvSeries.map(season => (
                      <>
                        <span>- {season}</span> <br></br>
                      </>
                    ))}
                  </p>
                  <p>
                    Played by: <span className='actor-name'>{char.playedBy}</span>
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div>
        {handlePagination()}
        {/* <Button type='primary' text='Previous' cssClassName='mb-5 mx-3' onClick={handlePrevClick} />
        <Button type='primary' text='Next' cssClassName='mb-5' onClick={handleNextClick} /> */}
      </div>
    </>
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
    fetchCharacters: currentPage => dispatch(fetchCharacters(currentPage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharsList);
