import {takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
  getArtikelTerbaruSaga,
  getArtikelKategoriSaga,
  getArtikelCariSaga,
  getArtikelPenulisSaga,
} from './artikel';

export function* artikelListener(action) {
  yield takeEvery(actionTypes.GET_ARTIKEL_TERBARU, getArtikelTerbaruSaga);
  yield takeEvery(actionTypes.GET_ARTIKEL_KATEGORI, getArtikelKategoriSaga);
  yield takeEvery(actionTypes.GET_ARTIKEL_CARI, getArtikelCariSaga);
  yield takeEvery(actionTypes.GET_ARTIKEL_PENULIS, getArtikelPenulisSaga);
}
