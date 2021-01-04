import {put, select} from 'redux-saga/effects';

import {axios} from '../../utils/conection';
import * as actions from '../actions';

export function* getArtikelTerbaruSaga(action) {
  try {
    const data = yield select((state) => state.artikel.data);
    let meta = yield select((state) => state.artikel.additionalData);

    const response = yield axios.get(`/artikel/terbaru?page=${action.page}`);
    if (action.page !== 1) {
      response.data.data = data.concat(response.data.data);
    }

    yield put(actions.getArtikelSuccess(response.data));
  } catch (error) {
    console.log(error, 'saga terbaru');
    yield put(actions.getArtikelError('somethings went worng'));
  }
}

export function* getArtikelKategoriSaga(action) {
  try {
    yield put(actions.setTitle(action.judul));
    const data = yield select((state) => state.artikel.data);
    let meta = yield select((state) => state.artikel.additionalData);

    const response = yield axios.get(`/artikel/kategori?page=${action.page}`, {
      headers: {
        url: `${action.url}`,
      },
    });
    if (action.page !== 1) {
      response.data.data = data.concat(response.data.data);
    }

    yield put(actions.getArtikelSuccess(response.data));
  } catch (error) {
    console.log(error, 'saga kategori');
    yield put(actions.getArtikelError('somethings went worng'));
  }
}

export function* getArtikelCariSaga(action) {
  try {
    const data = yield select((state) => state.artikel.data);

    const response = yield axios.get(
      `artikel/cari?page=${action.page}&s=${action.keyword}`,
    );
    if (action.page !== 1) {
      response.data.data = data.concat(response.data.data);
    }

    yield put(actions.getArtikelSuccess(response.data));
  } catch (error) {
    console.log(error, 'saga cari');
    yield put(actions.getArtikelError('somethings went worng'));
  }
}

export function* getArtikelPenulisSaga(action) {
  try {
    const data = yield select((state) => state.artikel.data);

    const response = yield axios.get(`/artikel/penulis?page=${action.page}`, {
      headers: {
        url: action.link,
      },
    });
    if (action.page !== 1) {
      response.data.data.artikel = data.concat(response.data.data.artikel);
    }

    yield put(actions.getArtikelPenulisSuccess(response.data));
  } catch (error) {
    console.log(error, 'saga penulis');
    yield put(actions.getArtikelError('somethings went worng'));
  }
}
