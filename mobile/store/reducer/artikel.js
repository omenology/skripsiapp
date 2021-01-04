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
      return {
        ...state,
        data: action.page == 1 ? [] : state.data,
        loading: true,
      };

    case actionTypes.GET_ARTIKEL_KATEGORI:
      return {
        ...state,
        data: action.page == 1 ? [] : state.data,
        loading: true,
      };

    case actionTypes.GET_ARTIKEL_CARI:
      return {
        ...state,
        data: action.page == 1 ? [] : state.data,
        loading: true,
      };

    case actionTypes.GET_ARTIKEL_PENULIS:
      return {
        ...state,
        data: action.page == 1 ? [] : state.data,
        loading: true,
      };

    case actionTypes.GET_ARTIKEL_PENULIS_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        data: action.data.data.artikel,
        additionalData: action.data.data.profile,
        loading: false,
      };

    case actionTypes.GET_ARTIKEL_SUCCESS:
      return {
        ...state,
        data: action.data.data,
        additionalData: action.data.meta,
        loading: false,
      };

    case actionTypes.GET_ARTIKEL_EERROR:
      return {...state, loading: false, error: action.error};

    default:
      return state;
  }
};

export default reducer;
