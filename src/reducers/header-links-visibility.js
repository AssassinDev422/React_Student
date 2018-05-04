import {ACTION_TYPES} from '../constants/action-types';

const {TOGGLE_HEADER_LINKS_VISIBILITY, SET_HEADER_LINKS} = ACTION_TYPES;

export default function (isVisible = false, action) {
  switch (action.type) {
    case TOGGLE_HEADER_LINKS_VISIBILITY: {
      return !isVisible;
    }
    case SET_HEADER_LINKS: {
      return action.visibility;
    }
    default:
      return isVisible;
  }
}
