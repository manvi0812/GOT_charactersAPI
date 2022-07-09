import React, { useState, useEffect } from 'react';
import { charImgAddresses } from '../utils/ImgUrls';

const DUMMY = [
  {
    url: 'https://www.anapioficeandfire.com/api/characters/181',
    name: 'John Snow',
    gender: 'Male',
    culture: 'Northmen',
    born: 'In 267 AC or later, at Winterfell',
    died: '',
    titles: ['First Ranger'],
    aliases: ['The Wolf Pup', 'Ben Stark'],
    father: '',
    mother: '',
    spouse: '',
    allegiances: ['https://www.anapioficeandfire.com/api/houses/362'],
    books: [
      'https://www.anapioficeandfire.com/api/books/1',
      'https://www.anapioficeandfire.com/api/books/2',
      'https://www.anapioficeandfire.com/api/books/3',
      'https://www.anapioficeandfire.com/api/books/5',
      'https://www.anapioficeandfire.com/api/books/8'
    ],
    povBooks: [],
    tvSeries: ['Season 1', 'Season 6'],
    playedBy: ['Joseph Mawle', 'Matteo Elezi']
  },
  {
    url: 'https://anapioficeandfire.com/api/characters/24',
    name: 'Tyrion Lannister',
    gender: 'Male',
    culture: '',
    born: '',
    died: '',
    titles: ['Septon'],
    aliases: [''],
    father: '',
    mother: '',
    spouse: '',
    allegiances: [],
    books: [
      'https://anapioficeandfire.com/api/books/5',
      'https://anapioficeandfire.com/api/books/8'
    ],
    povBooks: [],
    tvSeries: [''],
    playedBy: ['']
  },
  {
    url: 'https://anapioficeandfire.com/api/characters/24',
    name: '',
    gender: 'Male',
    culture: '',
    born: '',
    died: '',
    titles: ['Septon'],
    aliases: [''],
    father: '',
    mother: '',
    spouse: '',
    allegiances: [],
    books: [
      'https://anapioficeandfire.com/api/books/5',
      'https://anapioficeandfire.com/api/books/8'
    ],
    povBooks: [],
    tvSeries: [''],
    playedBy: ['']
  }
];

const cardBackground = [
  { back: '#A4BE82', border: 'rgba(206, 115, 115, 0.87)' },
  { back: '#C4BFD8', border: 'rgba(65, 49, 149, 0.87)' },
  { back: '#C4889F', border: 'rgba(204, 169, 46, 0.87)' },
  { back: '#FFF0D3', border: 'rgba(7, 34, 39, 0.87)' },
  { back: '#DBD282', border: 'rgba(28, 68, 63, 0.87)' },
  { back: '#B96363', border: 'rgba(193, 104, 22, 0.87)' },
  { back: '#9DCBCB', border: 'rgba(92, 30, 118, 0.87)' }
];

const CharsList = () => {
  const [characters, setCharacters] = useState(DUMMY);

  useEffect(() => {
    let newArr = [],
      newObj = characters;
    newArr = charImgAddresses.filter(page1 => characters.find(page2 => page1.name === page2.name));
    newArr.forEach(item => {
      const index = characters.findIndex(i => i.name === item.name);
      newObj[index] = { ...characters[index], img: item.img };
      setCharacters([...newObj]);
    });
  }, []);

  console.log(characters);

  return (
    <div className='char-section__char-list mt-5'>
      {characters.map(char => {
        const cardStyle = cardBackground[Math.floor(Math.random() * cardBackground.length)];
        console.log(cardStyle);
        return (
          <div
            className='char-section__char-list--char-item'
            style={{ background: cardStyle.back }}>
            <div className='char-section__char-list--char-item--img-wrapper'>
              {
                <img
                  src={char.img ?? 'https://images6.alphacoders.com/866/866625.png'}
                  alt={char.img}
                />
              }
              {char.name && <span style={{ background: cardStyle.border }}>{char.name}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharsList;
