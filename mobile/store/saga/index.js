import {takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {getArtikelTerbaruSaga} from './artikel';

export function* artikelListener(action) {
  yield takeEvery(actionTypes.GET_ARTIKEL_TERBARU, getArtikelTerbaruSaga);
}
