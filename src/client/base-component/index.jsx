import React from 'react'

class Base extends React.Component {
  render() {
    return(
      <div className="app-content">
      {this.props.children}
      </div>
    )
  }
}

export default Base
