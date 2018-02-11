import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import SignUpPage from '../SignUp';


import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';

import '../../../styles/main.scss';

const App = () =>
  <Router>
    <div className="app">
      <Navigation />

      <hr/>

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />

      <hr/>
    </div>
  </Router>
export default withAuthentication(App);

// import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Home from './common/HomePage';
// import About from './common/AboutPage';

// class App extends Component {
//    render() {
//       return (
//          <Router>
//             <div>
//                <ul>
//                   <li><Link to={'/'}>Home</Link></li>
//                   <li><Link to={'/about'}>About</Link></li>
//                </ul>
//                <hr />
               
//                <Switch>
//                   <Route exact path='/' component={Home} />
//                   <Route exact path='/about' component={About} />
//                </Switch>
//             </div>
//          </Router>
//       );
//    }
// }
// export default App;

// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { addTodo } from '../actions/actions'

// import AddTodo from './common/AddTodo.js'
// import TodoList from './common/TodoList.js'

// class App extends Component {
//    render() {
//       const { dispatch, visibleTodos } = this.props
      
//       return (
//          <div>
//             <AddTodo onAddClick = {text => dispatch(addTodo(text))} />
//             <TodoList todos = {visibleTodos}/>
//          </div>
//       )
//    }
// }
// function select(state) {
//    return {
//       visibleTodos: state.todos
//    }
// }
// export default connect(select)(App);