import React from 'react';
import logo from './assets/mansa-original.png';
import './App.css';
import Home, { Container } from './pages/Home';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Transactions from './pages/Transactions';
import useRandomAPI from './hooks/useRandomAPI';

export const UserContext = React.createContext({});

function App() {
  // Fetching  personal information
  const userData = useRandomAPI()[0];
  return (
    <UserContext.Provider value={userData}>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
          <Container>
          <Navbar/>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/accounts' />
            </Route>
            <Route path='/accounts' component={Home} exact/>
            <Route path='/profile' component={Profile}/>
            <Route path='/accounts/:accountId' component={Transactions}/>
          </Switch>
          </Container>
    </div>
    </UserContext.Provider>
  );
}

export default App;
