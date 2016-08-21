import React from 'react'

class Image extends React.Component {
  render() {
    return(
      <article className="image">
        <img src={this.props.url} className="image-source" />
      </article>
    )
  }
}

export default Image
