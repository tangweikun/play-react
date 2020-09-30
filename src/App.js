import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Demo4 from './pages/demo4';
import Demo1 from './pages/demo1';
import Demo2 from './pages/demo2';
import Demo3 from './pages/demo3';
import Demo5 from './pages/demo5';
import Demo6 from './pages/demo6';
import Demo7 from './pages/demo7';
import Demo8 from './pages/demo8';
import Demo9 from './pages/demo9';
import Demo10 from './pages/demo10';
import BasicLayout from './BasicLayout';

function App() {
  return (
    <div className='App'>
      <Router>
        <BasicLayout>
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
            <Route path='/demo6'>
              <Demo6 />
            </Route>
            <Route path='/demo7'>
              <Demo7 />
            </Route>
            <Route path='/demo8'>
              <Demo8 />
            </Route>
            <Route path='/demo9'>
              <Demo9 />
            </Route>
            <Route path='/demo10'>
              <Demo10 />
            </Route>
          </Switch>
        </BasicLayout>
      </Router>
    </div>
  );
}

export default App;
