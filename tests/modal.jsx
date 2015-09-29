import Test from 'legit-tests'
import { expect } from 'chai';

import Modal from '../src/simple-modal'

describe('Modal', () => {
  let close = () => {

  }

  it('should return nothing until clicked', () => {
    Test(<Modal show={false} onClose={close}/>)
    .test(({instance}) =>{
      expect(instance.innerHTML).to.be.equal(undefined)
    })
  });

});
