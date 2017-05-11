import _          from 'lodash';
import components from '../components/components';

export default $ => {
  _.each(components, Constructor => {
    let instance = new Constructor($);
    _.extend(Constructor, {instance});
  });
};
