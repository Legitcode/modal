import React from 'react'

export var modalClass = {
  position: 'fixed',
  'font-family': 'Arial, Helvetica, sans-serif',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: 'rgba(0, 0, 0, 0.8)',
  'z-index': 99999,
  opacity: 0,
  transition: 'opacity 400ms ease-in',
  opacity: 1,
  'pointer-events': 'auto',
}

export var containerClass = {
  width: '400px',
  position: 'relative',
  margin: '10% auto',
  padding: '5px 20px 13px 20px',
  background: '#fff',
}

export var closeClass = {
  background: '#606061',
  color: '#FFFFFF',
  'line-height': '25px',
  position: 'absolute',
  right: '-12px',
  'text-align': 'center',
  top: '-10px',
  width: '24px',
  'text-decoration': 'none',
  'font-weight': 'bold',
  borderRadius: '12px',
  boxDhadow: '1px 1px 3px #000',
  cursor: 'pointer'
}

export default class Modal extends React.Component{

  constructor(props){
    super()
    this.hideOnOuterClick = this.hideOnOuterClick.bind(this)
  }

  hideOnOuterClick(event){
    if(!this.props.closeOnOuterClick) return
    if(event.target.dataset.modal) this.props.onClose(event)
  }

  render(){
    if(!this.props.show) return null
    var modal = modalClass
    var container = containerClass

    if(this.props.className){
      modal = null
      container = null
    }

    return (
      <div {...this.props} style={Object.assign({},modal,this.props.style)} onClick={this.hideOnOuterClick} data-modal="true">
        <div style={Object.assign({},container,this.props.containerStyle)}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
