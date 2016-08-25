import React from 'react'
import config from '../../../config'
import request from 'request-promise'

class uploadForm extends React.Component {
  uploadImage() {
    const r = new XMLHttpRequest()
    const d = new FormData()
    const e = document.getElementsByClassName('add-image')[0].files[0]
    var u

    d.append('image', e)

    r.open('POST', 'https://api.imgur.com/3/image/')
    r.setRequestHeader('Authorization', `Client-ID ${config.client}`)
    r.onreadystatechange = function () {
      if(r.status === 200 && r.readyState === 4) {
        let res = JSON.parse(r.responseText)
        u = `https://i.imgur.com/${res.data.id}.png`
        let a = { image: u }
        let opts = {
          method: 'POST',
          uri: 'http://localhost:3000/api',
          json: true,
          body: a
        }
        request(opts)
        window.location.pathname = '/'
      }
    }
    r.send(d)
  }
  render() {
    return(
      <div className="publish-form">
        <h1>Publicar una imagen</h1>
        <form>
          <input type="file" className="add-image" onChange={this.uploadImage} />
        </form>
      </div>
    )
  }
}

export default uploadForm
