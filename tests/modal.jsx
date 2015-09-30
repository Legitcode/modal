import Test from 'legit-tests'
import { expect } from 'chai';

import Modal from '../src/simple-modal'

describe('Modal', () => {
  let close = () => {

  }

  it('should return nothing until clicked', () => {
    Test(<Modal show={false} onClose={close}>hey</Modal>)
    .test(({instance}) =>{
      expect(instance.innerHTML).to.be.equal(undefined)
    })
  });

  it('should show the modal', () => {
    Test(<Modal show={true} onClose={close}>hey</Modal>)
    .test(({instance}) =>{
      expect(React.findDOMNode(instance).innerHTML).to.match(/div/)
    })
  });

});
