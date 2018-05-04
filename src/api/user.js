import { defaultUser } from '../reducers/userReducer';
import { AUTH_API_URL, LOGGED_IN_USER } from '../constants/api';

export const getLoggedInUser = (token) => {
  return fetch(`${AUTH_API_URL}/${LOGGED_IN_USER}`, {
    credentials: 'include',
    method: 'GET',
    mode: 'cors',
    headers: new Headers({'Authorization': token})
  })
  .then((response) => {
    if (!response.ok) {
      console.log('Error receiving user information', response);
      throw Error(response.json());
    }
    return response;
  })
  .then((x) => {
    return x.json();
  });
};

export const getLoggedInUserM = (token) => {
  return Promise.resolve({
    ...defaultUser,
    userName: 'Abhishek Jain'
  });
};
