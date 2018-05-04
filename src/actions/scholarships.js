import { ACTION_TYPES } from '../constants/action-types';

const { FETCH_SCHOLARSHIPS_SUCCESS, FETCH_SCHOLARSHIPS, FETCH_TOP3_SCHOLARSHIPS_SUCCESS } = ACTION_TYPES;

export const fetchScholarshipsSuccess = (scholarships) => {
  return {
    type: FETCH_SCHOLARSHIPS_SUCCESS,
    payload: scholarships
  };
};

export const fetchScholarships = (options) => {
  return {
    type: FETCH_SCHOLARSHIPS,
    options
  };
};

export const fetchTop3ScholarshipsSuccess = (scholarships) => {
  return {
    type: FETCH_TOP3_SCHOLARSHIPS_SUCCESS,
    payload: scholarships
  };
};
