import $_              from 'jquery';
import _               from 'lodash';
import {wordSelector}  from '../../lib/vars';
import wordInitializer from './components/word-initializer';

export default class {
  constructor($ = $_) {
    let $parentEl = $(wordSelector);
    _.extend(this, {$parentEl});
  }
  
  linker(data, $ = $_) {
    let {$el} = this;
    let {used, word} = data;

    if(!used.length) {
      return wordInitializer(this, word);
    }
    
    $el.find('.letter-container').each((idx, el) => {
      let $letterWrapper = $(el);
      let $letter = $letterWrapper.find('.letter');
      let letter = word[idx];
      if(!$letter.text() && letter) {
        $letter.text(letter);
        $letterWrapper.addClass('show');
      }
    });
  }
}
