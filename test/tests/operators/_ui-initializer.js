import {expect}      from 'chai';
import components    from '../../../src/components/components';
import uiInitializer from '../../../src/operators/ui-initializer';
import dom           from '../../helpers/dom';

describe('ui initializer', function() {
  this.timeout(30000);
  
  it('initializes ui components', async () => {
    let $ = await dom(true);
    uiInitializer($);
    components.forEach(component => expect(component.instance).to.be.ok);
  });
});
