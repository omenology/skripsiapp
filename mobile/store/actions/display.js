import * as actionTypes from './actionTypes';

export const setTitle = (title) => {
  return {
    type: actionTypes.SET_TITTLE,
    title,
  };
};