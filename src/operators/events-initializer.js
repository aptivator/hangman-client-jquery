import $_         from 'jquery';
import api        from '../lib/api';
import dataLinker from './data-linker';

export default ($ = $_) => {
  let $container = $('.container');
  let $loading = $('.loading');
  let $overlay = $('.overlay');
  
  let dataHandler = (data, loadingTimeout) => {
    clearTimeout(loadingTimeout);
    $loading.addClass('hidden');
    $container.removeClass('screen');     
    dataLinker(data);    
  };
  
  let displayer = () => {
    setTimeout(() => {
      let index = methods.indexOf(displayer);
      methods.splice(index, 1);  
      $('#app').removeAttr('style');
      $overlay.one('transitionend', () => {
        $overlay.addClass('hidden');
      });
      $overlay.addClass('dissolve');
    }, 2000);
  };
  
  let methods = [dataHandler, displayer];
  
  $('.letter-control, .new-game').on('click', evt => {
    let $el = $(evt.target);
    let new_ = $el.hasClass('new-game');
    let method = new_ ? 'new' : 'play';
    let data = new_ ? {} : {letter: $el.text()};
    let loadingTimeout = setTimeout(() => {
      $loading.removeClass('hidden');
    }, 1000);
    
    $container.addClass('screen');
    
    api[method](data).then(data => {
      methods.forEach(method => method(data, loadingTimeout));         
    }, err => console.log(err));
  });
  
  $('.new-game').trigger('click');
};
