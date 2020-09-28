import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Demo4 from './demo4';
import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import Demo5 from './demo5';

function App() {
  return (
    <div className='App'>
      <Router>
        <ul>
          <li>
            <Link to='/demo1'>React HTTP POST Requests with Fetch</Link>
          </li>
          <li>
            <Link to='/demo2'>React HTTP GET Requests with Axios</Link>
          </li>
          <li>
            <Link to='/demo3'>TODOLIST</Link>
          </li>
          <li>
            <Link to='/demo4'>Table</Link>
          </li>
          <li>
            <Link to='/demo5'>Demo5</Link>
          </li>
        </ul>

        <Switch>
          <Route path='/demo1'>
            <Demo1 />
          </Route>
          <Route path='/demo2'>
            <Demo2 />
          </Route>
          <Route path='/demo3'>
            <Demo3 />
          </Route>
          <Route path='/demo4'>
            <Demo4 />
          </Route>
          <Route path='/demo5'>
            <Demo5 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
