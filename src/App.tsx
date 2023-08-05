import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <>
        <NavBar/>
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