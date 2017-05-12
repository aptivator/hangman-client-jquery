import hangerLess       from './hanger.less';
import $_               from 'jquery';
import _                from 'lodash';
import {hangerSelector} from '../../lib/vars';
import hangerTpl        from './hanger.tpl';

export default class {
  constructor($ = $_) {
    let $el = $(hangerTpl);
    let $head = $el.find('.head');
    let $person = $el.find('.person');
    let $hanger = $el.find('.hanger');
    $(hangerSelector).append($el);
    _.extend(this, {$el, $head, $person, $hanger});
  }
  
  linker(data, $ = $_) {
    let {$el, $head, $person, $hanger} = this;
    let {missed, correct, won, used} = data;
    
    if(!used.length) {
      $head.removeClass('smile frown').addClass('neutral');
      $person.removeClass('hung');
      $hanger.removeClass('hung');
      return $el.find('.missed').removeClass('missed');
    }
    
    if(used.length === 1) {
      $head.removeClass('neutral');
    }
    
    $el.find(`.part-${missed}`).addClass('missed');
    
    if(correct) {
      $head.addClass('smile').removeClass('frown');
    } else {
      $head.addClass('frown').removeClass('smile');
    }
    
    if(won === false) {
      $person.addClass('hung');
      $hanger.addClass('hung');
    } else if(won) {
      $person.find('.missed').removeClass('missed');
    }
  }
}
