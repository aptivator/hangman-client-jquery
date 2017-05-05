import './letter-controls.less';
import $                        from 'jquery';
import _                        from 'lodash';
import {letterControlsSelector} from '../../lib/vars';
import letterControlsTpl        from './tpl/letter-controls-tpl';

export default class {
  constructor() {
    let $el = $(letterControlsTpl());
    $(letterControlsSelector).append($el);
    _.extend(this, {$el});
  }
  
  linker(data) {
    let {$el} = this;
    let {used, won} = data;
    
    if(!used.length) {
      $el.removeClass('screen');
      return $el.find('.picked').removeClass('picked');
    }
    
    if(won !== null) {
      $el.addClass('screen');
    }
    
    let last = _.last(used);
    
    $el.find(`.${last}`).addClass('picked');
  }
}
