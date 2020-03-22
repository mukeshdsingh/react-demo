import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UsersComponent from './component/Users';
import ContactComponent from './component/Contact';
import Notfound from './component/Notfound';
import CustomNavbar from './component/Navbar';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <CustomNavbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users/:id" component={UsersComponent} />
        <Route path="/contact" component={ContactComponent} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
