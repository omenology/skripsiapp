import * as actionTypes from '../actions/actionTypes';

const initialState = {
  title: 'Terbaru',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TITTLE:
      return {...state, title: action.title};

    default:
      return state;
  }
};

export default reducer;
