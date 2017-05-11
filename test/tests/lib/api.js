import {expect} from 'chai';
import uuid     from 'uuid/v4';
import api      from '../../../src/lib/api';

describe('api', function() {
  let id = uuid();
  this.timeout(30000);
  
  it('connects to /new', async () => {
    let result = await api.new({id});
    let {used} = result;
    expect(used.length).to.equal(0);
  });
  
  it('connects to /play', async () => {
    let result = await api.play({id, letter: 'a'});
    let {used} = result;
    expect(used).to.eql(['a']);
  });
});
