import _     from 'lodash';
import jsdom from 'jsdom';
import path  from 'path';

let jquery = path.resolve(__dirname, '../../node_modules/jquery/dist/jquery.js');
let html = '<html><body><div id = "app"></div></body></html>';

export default function dom() {
  let {$} = dom;
  
  if($) {
    return Promise.resolve($);
  }
  
  return new Promise((resolve, reject) => {
    jsdom.env(html, [jquery], (err, window) => {
      if(err) {
        reject(err);
      }
      
      let {$} = window;
      _.extend(dom, {$});
      resolve($);
    });
  });
}
