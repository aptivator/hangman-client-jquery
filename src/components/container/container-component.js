import './container.less';
import $             from 'jquery';
import {appSelector} from '../../lib/vars';
import containerTpl  from './container.tpl';

export default class {
  constructor() {
    let $el = $(containerTpl);
    $(appSelector).append($el);
  }
}
