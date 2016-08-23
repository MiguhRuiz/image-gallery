import React from 'react'
import { Link } from 'react-router'

import Image from '../image/index.jsx'

class ImageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }
  componentWillMount() {
    fetch('/api/')
      .then((response) => {
        return response.json()
      })
      .then((images) => {
        this.setState({data: images})
      })
  }
  render() {
    if(this.state.data.total_rows >= 1) {
      return(
        <section className="images">
          {
            this.state.data.rows.map((image) => {
              return <Image url={image.doc.image} key={image.doc._id} />
            })
          }
          <Link to="/new" activeClassName="active">
            <div className="flat-publish"><img src="/public/img/pen.png" className="icon-pen"/></div>
          </Link>
        </section>
      )
    } else {
      return(
        <h1> No hay imágenes disponibles. Inténtalo más tarde.</h1>
      )
    }
  }
}

export default ImageContainer
