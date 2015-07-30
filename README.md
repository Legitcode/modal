##Simple React Modal

##Install

`npm install simple-react-modal`

##Example

An incredibly simple modal dialog, because after writing [this post](http://reactjsnews.com/modals-in-react/), I found none of the ones listed let you easily overwrite the css!

~~~js
import Modal from 'simple-react-modal'
import 'simple-react-modal/dist/modal' //import the base css

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
~~~

###props

- `closeOnOuterClick`: If someone clicks outside of the modal when it's in focus, should it close? You choose. (bool)
- `show`: true or false
- `onClose`: when the modal is sending the close event (only happens is `closeOnOuterClick` is true)

Everything else will be merged and you're free to apply any props you want. Minimum required props would be `show` and probably a className.

You have the option to call `this.refs.modal.show()` and `hide()` similar to other modals out there in react.
The big difference is that you can require the css from 'simple-react-modal/dist/modal' and easily add other classes that make it look however you like.
Customizing the style is easy, to target the actual content area it will be `.your-class div`.
