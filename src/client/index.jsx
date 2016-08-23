import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import ImageContainer from './image-container/index.jsx'
import ImageForm from './upload-form/index.jsx'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={ImageContainer}>
      <Route path="/new" component={ImageForm} />
    </Route>
  </Router>
), document.getElementsByClassName('react-app')[0])
