import React from 'react'

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
    return (
      <div {...this.props} onClick={this.hideOnOuterClick} data-modal="true">
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
