import * as actionTypes from '../actions/actionTypes';

const initialState = {
  additionalData: null,
  data: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTIKEL_TERBARU:
      return {...state, loading: true};

    case actionTypes.GET_ARTIKEL_TERBARU_SUCCESS:
      return {
        ...state,
        data: action.data.data,
        additionalData: action.data.meta,
        loading: false,
      };

    case actionTypes.GET_ARTIKEL_TERBARU_FAILD:
      return {...state, loading: false, error: action.error};

    default:
      return state;
  }
};

export default reducer;
