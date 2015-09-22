##Simple React Modal

##Install

`npm install simple-react-modal`

###Simple?

~~~js
<Modal show={this.state.show} onClose={this.close}>
  <div>hey, click outside of me to close me!</div>
</Modal>
~~~

##Transitions

CSS powered transitions!

In your css file have a transition for the opacity: `transition: 'opacity 1s ease-in'`, now all you do is add in the transition speed as a prop. In the css example I just gave, it's one second:

~~~js
<Modal show={this.state.show} onClose={this.close} transitionSpeed={1000}>
  <div>hey, click outside of me to close me!</div>
</Modal>
~~~

Now the component will open with your transition, and wait to hide until it finishes! Don't like transitions? Leave out the prop and everything works the same.

##Full Example

An incredibly simple modal dialog, because after writing [this post](http://reactjsnews.com/modals-in-react/), I found none of the ones listed let you easily overwrite the css!

~~~js
import Modal, {closeStyle} from 'simple-react-modal'

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
      className="test-class" //this will completely overwrite the default css completely
      style={{background: 'red'}} //overwrites the default background
      containerStyle={{background: 'blue'}} //changes styling on the inner content area
      containerClassName="test"
      closeOnOuterClick={true}
      show={this.state.show}
      onClose={this.close.bind(this)}>

      <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
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
- `containerClassName`: change the class on the containing div

- `containerStyle`: changes styles on the modal content area

Minimum required props would be `show` and `onClose`. You can optionally pull in `closeStyle` to use the default close button.

###Why this modal?

The big difference is that you can use the default style, overwrite just the things you want with the `style` or `containerStyle` props, or throw on a class name and completely style everything yourself.

Customizing the style via a css class is easy, to target the actual content area it will be `.your-class div`.
