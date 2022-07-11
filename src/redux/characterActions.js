import axios from 'axios';
import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE
} from './characterTypes';

export const fetchCharacters = pageIndex => {
  return dispatch => {
    dispatch(fetchCharactersRequest());
    axios
      .get(`https://www.anapioficeandfire.com/api/characters?page=${pageIndex}&pageSize=12`)
      .then(response => {
        // response.data is the characters
        const characters = response.data;
        dispatch(fetchCharactersSuccess(characters));
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchCharactersFailure(error.message));
      });
  };
};

export const fetchOneCharacter = name => {
  return dispatch => {
    dispatch(fetchCharactersRequest());
    axios
      .get(`https://www.anapioficeandfire.com/api/characters/?name=${name}`)
      .then(response => {
        // response.data is the characters
        const character = response.data;
        dispatch(fetchCharactersSuccess(character));
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchCharactersFailure(error.message));
      });
  };
};

// export const fetchFilteredCharacters = (gender, pageIndex) => {
//   return dispatch => {
//     dispatch(fetchCharactersRequest());
//     axios
//       .get(
//         `https://www.anapioficeandfire.com/api/characters/?page=${pageIndex}&pageSize=12&gender=${gender}`
//       )
//       .then(response => {
//         // response.data is the characters
//         const character = response.data;
//         dispatch(fetchCharactersSuccess(character));
//       })
//       .catch(error => {
//         // error.message is the error message
//         dispatch(fetchCharactersFailure(error.message));
//       });
//   };
// };

export const fetchCharactersRequest = () => {
  return {
    type: FETCH_CHARACTERS_REQUEST
  };
};

export const fetchCharactersSuccess = characters => {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters
  };
};

export const fetchCharactersFailure = error => {
  return {
    type: FETCH_CHARACTERS_FAILURE,
    payload: error
  };
};
