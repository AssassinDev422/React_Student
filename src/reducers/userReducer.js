import {ACTION_TYPES} from '../constants/action-types';

const {LOGOUT, FETCH_LOGGED_IN_USER_SUCCESS} = ACTION_TYPES;

export const defaultUser = {
  first_name: 'Carla',
  last_name: 'Smith',
  user_email: 'csmith@gmail.com',
  location: 'Example Location, USA',
  university: 'Example University',
  degree: 'Example Degree'
};

const defaultState = {
  data: defaultUser,
  isFetching: false,
  token: null
};
export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_LOGGED_IN_USER_SUCCESS: {
      const user = action.payload.user;
      const loggedInUser = Array.isArray(user) ? user[0] : user;
      return {
        ...state,
        data: {
          ...state.data,
          ...loggedInUser
        },
        isFetching: false,
        token: action.payload.token
      };
    }
    case LOGOUT: {
      return defaultState;
    }
    default:
      return state;
  }
}
