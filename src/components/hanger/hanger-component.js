import './hanger.less';
import $                from 'jquery';
import _                from 'lodash';
import {hangerSelector} from '../../lib/vars';
import hangerTpl        from './hanger.tpl';

export default class {
  constructor() {
    let $el = $(hangerTpl);
    let $mouth = $el.find('.mouth');
    let $person = $el.find('.person');
    let $hanger = $el.find('.hanger');
    $(hangerSelector).append($el);
    _.extend(this, {$el, $mouth, $person, $hanger});
  }
  
  linker(data) {
    let {$el, $mouth, $person, $hanger} = this;
    let {missed, correct, won} = data;
    
    if(!missed) {
      $mouth.removeClass('smile');
      $person.removeClass('hung');
      $hanger.removeClass('hung');
      return $el.find('.missed').removeClass('missed');
    }
    
    $el.find(`.part-${missed}`).addClass('missed');
    
    $mouth[(correct ? 'add' : 'remove') + 'Class']('smile');
    
    if(won === false) {
      $person.addClass('hung');
      $hanger.addClass('hung');
    }
  }
}
