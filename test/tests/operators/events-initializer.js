import {expect}          from 'chai';
import eventsInitializer from '../../../src/operators/events-initializer';
import dom               from '../../helpers/dom';
import pause             from '../../helpers/pause';

describe('events initializer', function() {
  this.timeout(30000);
  
  it('initializes events', async () => {
    let {$} = dom;
    eventsInitializer($);
    await pause(0);
    let hasScreen = $('.container').hasClass('screen');
    let hiddenOverlay = $('.overlay').hasClass('hide');
    expect(hasScreen).to.be.ok;
    expect(hiddenOverlay).to.be.false;
  });
});
