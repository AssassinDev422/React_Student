import { API_URL, SCHOLARSHIPS, SCHOLARSHIPS_TOP3 } from '../constants/api';

export const getScholarships = (options) => {
  const { category, subcategory, order } = options;

  const categoryQuery = category ? `category=eq.${category}` : '';
  const subCategoryQuery = subcategory ? `subcategory=eq.${subcategory}` : '';
  const orderQuery = order ? `order=${order}` : '';

  return fetch(`${API_URL}/${SCHOLARSHIPS}?${categoryQuery}&${subCategoryQuery}&${orderQuery}&limit=50`, {
    credentials: 'include'
  }).then(x => {
    return x.json();
  });
};

export const getTop3Scholarships = () => {
  return fetch(`${API_URL}/${SCHOLARSHIPS_TOP3}`, {
    credentials: 'include'
  }).then(x => {
    return x.json();
  });
};
