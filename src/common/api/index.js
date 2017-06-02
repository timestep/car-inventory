import isoFetch from 'isomorphic-fetch';

const apiCall = isoFetch('http://localhost:1337/');

export const getCarList = () => {
  return apiCall.then(response => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  });
};
