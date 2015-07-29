import React from 'react'

export default class Slug extends React.Component{

  constructor(props){
    super()
    let closeOnOuterClick = true
    if(props.closeOnOuterClick === false) closeOnOuterClick = false

    this.state = {
      display: 'none',
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
    this.setState({display: 'none'})
  }

  show(){
    this.setState({display: 'block'})
  }

  render(){
    return (
      <div style={this.state} {...this.props} onClick={this.hideOnOuterClick} data-modal="true">
        <div style={this.state}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
