import containerLess from './container.less';
import $_            from 'jquery';
import {appSelector} from '../../lib/vars';
import containerTpl  from './container.tpl';

export default class {
  constructor($ = $_) {
    let $el = $(containerTpl);
    $(appSelector).append($el);
  }
}
