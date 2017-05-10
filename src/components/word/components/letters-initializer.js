import $       from 'jquery';
import _       from 'lodash';
import wordTpl from '../tpl/word-tpl';

export default (instance, word) => {
  let {$el, $parentEl} = instance;
  let tpl = wordTpl({word});

  if($el) {
    $el.remove();
  }
  
  $el = $(tpl);
  $parentEl.append($el);
  setTimeout(() => $parentEl.addClass('active'), 100);
  _.extend(instance, {$el});  
};
