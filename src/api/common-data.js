import { API_URL, CATEGORIES, SUBCATEGORIES, GENDER } from '../constants/api';

export const getCategories = () => {
  return fetch(`${API_URL}/${CATEGORIES}?order=category.asc`, {
    credentials: 'include'
  }).then(x => {
    return x.json();
  });
};

export const getSubCategories = () => {
  return fetch(`${API_URL}/${SUBCATEGORIES}?order=subcategory.asc`, {
    credentials: 'include'
  }).then(x => {
    return x.json();
  });
};

export const getGenders = () => {
  return fetch(`${API_URL}/${GENDER}`, {
    credentials: 'include'
  }).then(x => {
    return x.json();
  });
};
