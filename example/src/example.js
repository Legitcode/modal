import React from 'react'
import Modal from 'simple-react-modal'

export default class App extends React.Component{

  constructor(){
    super()
    this.state = {}
  }

  show(){
    this.setState({show: true})
  }

  close(){
    this.setState({show: false})
  }

  render(){
    return (
      <div>
      <a onClick={this.show.bind(this)}>Open Modal</a>
        <Modal
        className="simple-modal-base test"
        closeOnOuterClick={true}
        show={this.state.show}
        onClose={this.close.bind(this)}>

        <a className="close" onClick={this.close.bind(this)}>X</a>
        <div>hey</div>

        </Modal>
      </div>
    )
  }
}
React.render(<App />, document.getElementById('app'));
