import React,{Fragment} from 'react';
import {Router,Route,Switch} from "react-router-dom"
import { createBrowserHistory } from 'history';
import Home from "../component/Home.jsx"
import Card from "../component/Card.jsx"
import CardLayer from "../component/CardLayer.jsx"
import Modal from "../component/Modal.jsx"

const history = createBrowserHistory();
const App = (props) => (
  <Router history={history}>
  <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/modal/:id" component={Modal} />
      </Switch>
  </div>
  </Router>
)

export default App

