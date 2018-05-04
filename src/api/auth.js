// @flow
import { AUTH_API_URL, FACEBOOK_SIGNUP } from '../constants/api';

export const facebookLogin = (code: string): Promise<Object> => {
  let body = {
    code: code
  };

  if (process.env.NODE_ENV !== 'production') {
    body = {
      ...body,
      dev: 'jv%^76GH(asjkas@&&90khhhj'
    };
  }

  console.log('body', body);
  console.log('code', code);

  return fetch(`${AUTH_API_URL}/${FACEBOOK_SIGNUP}`, {
    credentials: 'include',
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(body)
  }).then((x) => {
    return x.json();
  }).catch(e => {
    return e;
  });
};

export const facebookLoginM = () => {
  return Promise.resolve({
    token: 'token123'
  });
};

