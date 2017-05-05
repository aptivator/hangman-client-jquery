import $ from 'jquery';
import _ from 'lodash';

export default _.once(() => $('body').removeAttr('style'));
