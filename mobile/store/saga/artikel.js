import {put, select} from 'redux-saga/effects';

import {axios} from '../../utils/conection';
import * as actions from '../actions';

export function* getArtikelTerbaruSaga(action) {
  try {
    const data = yield select((state) => state.artikel.data);
    let meta = yield select((state) => state.artikel.additionalData);

    const response = yield axios.get(`/artikel/terbaru?page=${action.page}`);

    response.data.data = data.concat(response.data.data);

    yield put(actions.getArtikelTerbaruSuccess(response.data));
  } catch (error) {
    console.log(error, 'saga');
    yield put(actions.getArtikelTerbaruFaild('somethings went worng'));
  }
}
