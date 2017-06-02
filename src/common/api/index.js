import isoFetch from 'isomorphic-fetch';

export const getCarList = () =>{
  console.log(isoFetch);
  return isoFetch('https://s3.amazonaws.com/elasticbeanstalk-us-east-1-253941727413/interview/car.json')
    .then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then(response => response.json());
};
