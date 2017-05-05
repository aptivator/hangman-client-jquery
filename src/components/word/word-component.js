import './word.less';
import $                  from 'jquery';
import _                  from 'lodash';
import {wordSelector}     from '../../lib/vars';
import lettersInitializer from './parts/letters-initializer';

export default class {
  constructor() {
    let $parentEl = $(wordSelector);
    _.extend(this, {$parentEl});
  }
  
  linker(data) {
    let {$el} = this;
    let {used, word} = data;
    if(!used.length) {
      return lettersInitializer(this, word);
    }
    
    $el.find('span').each((idx, el) => {
      $(el).text(word[idx]);
    });
  }
}
