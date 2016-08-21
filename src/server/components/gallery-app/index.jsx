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
          <link rel="stylesheet" href="https://miguhruiz.xyz/public/css/index.css" />
          <title>Image Gallery</title>
          </head>
          <body>
            <Header />
            <div className="react-app"></div>
            <Footer />
            <script type="application/javascript" src="/public/js/app.js" />
          </body>
      </html>
    )
  }
}

export default App
