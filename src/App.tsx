import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;