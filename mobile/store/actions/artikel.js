import * as actionTypes from './actionTypes';

export const getArtikelTerbaru = (page = 1) => {
  return {
    type: actionTypes.GET_ARTIKEL_TERBARU,
    page,
  };
};

export const getArtikelTerbaruSuccess = (data) => {
  return {
    type: actionTypes.GET_ARTIKEL_TERBARU_SUCCESS,
    data,
  };
};

export const getArtikelTerbaruFaild = (error) => {
  return {
    type: actionTypes.GET_ARTIKEL_TERBARU_FAILD,
    error,
  };
};
