import React from 'react'

import Header from '../header/index.jsx'
import Footer from '../footer/index.jsx'
class App extends React.Component {
  render() {
    return(
      <html lang="es_ES">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="/public/css/app.css" />
          <title>Image Gallery</title>
          </head>
          <body>
            <Header />
            <div className="react-app"></div>
            <a href="/new">
              <div className="flat-publish"><img src="/public/img/pen.png" className="icon-pen"/></div>
            </a>
            <Footer />
            <script type="application/javascript" src="/public/js/app.js" />
          </body>
      </html>
    )
  }
}

export default App
