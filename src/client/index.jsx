import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Base from './base-component/index.jsx'
import ImageContainer from './image-container/index.jsx'
import ImageForm from './upload-form/index.jsx'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Base}>
      <IndexRoute component={ImageContainer} />
      <Route path="/new" component={ImageForm} />
    </Route>
  </Router>
), document.getElementsByClassName('react-app')[0])
