import React from 'react'
import config from '../../../config'
class uploadForm extends React.Component {
  uploadImage() {
    const r = new XMLHttpRequest()
    const d = new FormData()
    const e = document.getElementsByClassName('add-image')[0].files[0]
    var u

    d.append('image', e)

    function uploadServer(l) {
      r.open('POST', '/api')
      r.setRequestHeader('Content-Type', 'application/json')
      r.onreadystatechange = function () {
        if(r.status === 200 && r.readyState === 4) {
          let res = JSON.parse(r.responseText)
          console.log(res)
        }
      }
      r.send({
        "image": l
      })
    }

    r.open('POST', 'https://api.imgur.com/3/image/')
    r.setRequestHeader('Authorization', `Client-ID ${config.client}`)
    r.onreadystatechange = function () {
      if(r.status === 200 && r.readyState === 4) {
        let res = JSON.parse(r.responseText)
        u = `https://i.imgur.com/${res.data.id}.png`
        uploadServer(u)
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
