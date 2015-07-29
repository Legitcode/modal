import React from 'react'
import Modal from 'simple-react-modal'

export default class App extends React.Component{

  show(){
    this.refs.modal.show()
  }

  render(){
    return (
      <div>
      <a onClick={this.show.bind(this)}>Open Modal</a>
        <Modal ref="modal"
        className="simple-modal-base test"
        closeOnOuterClick={false}>

        <a className="close" onClick={()=>{this.refs.modal.hide()}}>X</a>
        <div>hey</div>

        </Modal>
      </div>
    )
  }
}
React.render(<App />, document.getElementById('app'));
