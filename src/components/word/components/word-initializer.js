import async_             from 'async';
import duration_          from '../lib/duration';
import lettersInitializer from './letters-initializer';

export default (instance, word) => {
  let {$el, $parentEl} = instance;
  
  async_.series([
    done => {
      if($el) {
        let $letterWrappers = $el.find('.letter-wrapper');
        let $letters = $letterWrappers.find('.letter:not(:empty)');
        if($letters.length) {
          let duration = duration_($letters.eq(0)) + 200;
          setTimeout(() => done(), duration);
          return $letterWrappers.removeClass('show');
        }
      }
      
      done();
    },
    
    done => {
      if($parentEl.hasClass('active')) {
        let duration = duration_($parentEl);
        setTimeout(() => done(), duration);
        return $parentEl.removeClass('active');
      }
      
      done();
    }
  ], err => {
    if(err) {
      throw err;
    }
    
    lettersInitializer(instance, word);
  });  
};
