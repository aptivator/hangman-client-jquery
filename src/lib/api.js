import _          from 'lodash';
import superagent from 'superagent/superagent';
import {id, url}  from './api-configs';

export default ['new', 'play'].reduce((o, path) => {
  o[path] = (data = {}) => {
    data = _.extend(data, {id});
    return new Promise((resolve, reject) => {
      superagent.post(`${url}${path}`).send(data).end((err, res) => {
        if(err) {
          return reject(err);
        }
        resolve(res.body);
      });
    });
  };
  
  return o;  
}, {});
