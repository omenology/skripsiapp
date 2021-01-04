import * as actionTypes from './actionTypes';

export const getArtikelTerbaru = (page = 1) => {
  return {
    type: actionTypes.GET_ARTIKEL_TERBARU,
    page,
  };
};

export const getArtikelKategori = (page, url, judul) => {
  return {
    type: actionTypes.GET_ARTIKEL_KATEGORI,
    page,
    url,
    judul,
  };
};

export const getArtikelCari = (page, keyword) => {
  return {
    type: actionTypes.GET_ARTIKEL_CARI,
    page,
    keyword,
  };
};

export const getArtikelPenulis = (page, link) => {
  return {
    type: actionTypes.GET_ARTIKEL_PENULIS,
    page,
    link,
  };
};

export const getArtikelPenulisSuccess = (data) => {
  return {
    type: actionTypes.GET_ARTIKEL_PENULIS_SUCCESS,
    data,
  };
};

export const getArtikelSuccess = (data) => {
  return {
    type: actionTypes.GET_ARTIKEL_SUCCESS,
    data,
  };
};

export const getArtikelError = (error) => {
  return {
    type: actionTypes.GET_ARTIKEL_EERROR,
    error,
  };
};
