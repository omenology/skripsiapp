import * as actionTypes from './actionTypes';

export const setTitle = (title) => {
  console.log('set', title);
  return {
    type: actionTypes.SET_TITTLE,
    title,
  };
};
