import _          from 'lodash';
import components from '../components/linking-components';

export default data => {
  _.each(components, Constructor => {
    Constructor.instance.linker(data);
  });
};
