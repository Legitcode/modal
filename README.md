##Simple React Modal

##Install

`npm install simple-react-modal`

###Simple?

~~~js
<Modal show={this.state.show}>
  <div>hey, click outside of me to close me!</div>
</Modal>
~~~

##Full Example

An incredibly simple modal dialog, because after writing [this post](http://reactjsnews.com/modals-in-react/), I found none of the ones listed let you easily overwrite the css!

~~~js
import Modal, {closeClass} from 'simple-react-modal'

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
      className="test-class" //this will completely overwrite the default css
      closeOnOuterClick={true}
      show={this.state.show}
      onClose={this.close.bind(this)}>

      <a style={closeClass} onClick={this.close.bind(this)}>X</a>
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
- `className`: this will allow you to completely change the default css located in the component.

Everything else will be merged and you're free to apply any props you want. Minimum required props would be `show`. You can optionally pull in `modalClass` and merge any styles with it and set the style prop on the modal.

The big difference is that you can require the css from 'simple-react-modal/dist/modal' and easily add other classes that make it look however you like.
Customizing the style is easy, to target the actual content area it will be `.your-class div`.
