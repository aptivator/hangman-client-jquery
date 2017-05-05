import $          from 'jquery';
import api        from '../lib/api';
import dataLinker from './data-linker';
import displayer  from './displayer';

export default () => {
  let $container = $('.container');
  let $loading = $('.loading');
  
  $('.letter-control, .new-game').on('click', evt => {
    let $el = $(evt.target);
    let new_ = $el.hasClass('new-game');
    let method = new_ ? 'new' : 'play';
    let data = new_ ? {} : {letter: $el.text()};
    let loadingTimeout = setTimeout(() => {
      $loading.removeClass('hidden');
    }, 500);
    
    $container.addClass('screen');
    
    api[method](data).then(data => {
      clearTimeout(loadingTimeout);
      $loading.addClass('hidden');
      $container.removeClass('screen');
      displayer();
      dataLinker(data);        
    }, err => console.log(err));
  });
  
  $('.new-game').trigger('click');
};
