import * as actionTypes from '../actions/actionTypes';

const initialState = {
  title: '',
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
