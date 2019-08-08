import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import TodosList from './components/todos-list.component';
import EditToDO from './components/edit-todo.component';
import CreateToDo from './components/create-todo.component';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>

          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to='/' className='navbar-brand'>New Laser</Link>
           
            <div className=' nav-collapse'>
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                  <Link to='/' className='nav-link'>Всі процедури</Link>
                </li>
                <li className='navbar-item'>
                  <Link to='/create' className='nav-link'>Створити процедуру</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path='/' exact component={TodosList} />
          <Route path='/edit/:id' exact component={EditToDO} />
          <Route path='/create' exact component={CreateToDo} />
        </div>

      </Router>

    );
  }

}


