import $          from 'jquery';
import api        from '../lib/api';
import dataLinker from './data-linker';

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
    }, 1000);
    
    let dataHandler = data => {
      clearTimeout(loadingTimeout);
      $loading.addClass('hidden');
      $container.removeClass('screen');     
      dataLinker(data);
    };
    
    let oncer = () => {
      setTimeout(() => {
        let index = methods.indexOf(oncer);
        $('#app').removeAttr('style');
        $('.overlay').addClass('dissolve');
        methods.splice(index, 1);
      }, 2000);
    };
    
    let methods = [dataHandler, oncer];
    
    $container.addClass('screen');
    
    api[method](data).then(data => {
      methods.forEach(method => method(data));         
    }, err => console.log(err));
  });
  
  $('.new-game').trigger('click');
};
