import { property } from 'lodash/fp';

export const getUser = property('user.data');
export const getToken = property('user.token');
export const getScholarships = property('scholarships.all');
export const getTop3Scholarships = property('scholarships.top3');
export const getCategories = property('coreData.categories');
export const getSubcategories = property('coreData.subcategories');
export const getGenders = property('coreData.genders');

export const getUserName = ({ first_name, last_name }) => {
  return `${first_name || ''} ${last_name || ''}`;
};
