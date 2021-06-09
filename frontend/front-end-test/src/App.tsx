import React from 'react';
import logo from './assets/mansa-original.png';
import './App.css';
import Home, { HomeContainer } from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Router>
        <HomeContainer>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Profile'>{Profile}</Route>
        </Switch>
        </HomeContainer>
      </Router>
      {/* <Home/> */}
    </div>
  );
}

export default App;
