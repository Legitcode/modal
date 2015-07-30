import React from 'react'

export default class Modal extends React.Component{

  constructor(props){
    super()
    let closeOnOuterClick = true
    if(props.closeOnOuterClick === false) closeOnOuterClick = false

    this.state = {
      display: false,
      closeOnOuterClick
    }
    this.hide = this.hide.bind(this)
    this.hideOnOuterClick = this.hideOnOuterClick.bind(this)
  }

  hideOnOuterClick(event){
    if(!this.state.closeOnOuterClick) return

    if(event.target.dataset.modal) this.setState({display: 'none'})
  }

  hide(){
    this.setState({display: false})
  }

  show(){
    this.setState({display: true})
  }

  render(){
    if(!this.state.display) return null
    return (
      <div {...this.props} onClick={this.hideOnOuterClick} data-modal="true">
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
