import React from 'react'
import styles from './styles'

export default class Modal extends React.Component{

  constructor(props){
    super()
    this.hideOnOuterClick = this.hideOnOuterClick.bind(this)
  }

  hideOnOuterClick(event){
    if(this.props.closeOnOuterClick === false) return
    if(event.target.dataset.modal) this.props.onClose(event)
  }

  render(){
    if(!this.props.show) return null
    var modalStyle = Object.assign({},styles.modal,this.props.style)
    var containerStyle = Object.assign({},styles.container,this.props.containerStyle)

    //completely overwrite if they use a class
    if(this.props.className){
      modalStyle = this.props.style
      containerStyle = this.props.containerStyle
    }

    return (
      <div {...this.props} style={modalStyle} onClick={this.hideOnOuterClick} data-modal="true">
        <div style={containerStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export var closeStyle = styles.close
