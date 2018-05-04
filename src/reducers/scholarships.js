import {ACTION_TYPES} from '../constants/action-types';

const {FETCH_SCHOLARSHIPS_SUCCESS, FETCH_TOP3_SCHOLARSHIPS_SUCCESS} = ACTION_TYPES;

const defaultState = {
  all: [],
  top3: []
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_SCHOLARSHIPS_SUCCESS: {
      return {
        ...state,
        all: action.payload
      };
    }
    case FETCH_TOP3_SCHOLARSHIPS_SUCCESS: {
      return {
        ...state,
        top3: action.payload
      };
    }
    default:
      return state;
  }
}
