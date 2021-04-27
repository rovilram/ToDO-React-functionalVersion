import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import NewTask from './components/NewTask/NewTask'


import { LoggedProvider } from './contexts/LoggedContext';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [logged, setLogged] = useState(false);
  const [action, setAction] = useState('');

  const actionLogin = () => {
    if (logged) toggleLogged();
    else {
      setAction('login');
    }
    //setLogged(!logged);
  };

  const toggleLogged = () => {
    console.log('ANTES TOGGLE', logged);
    setLogged(!logged);
    console.log('DESPUES TOGGLE', logged);
    setAction('');
  };

  const clearAction = () => {
    setAction('');
  };

  return (
    <div className="App">
      {console.log('RENDER', logged)}
      <LoggedProvider value={{ logged, toggleLogged }}>
        <Header actionLogin={actionLogin} />
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Main action={action} />
            </Route>
            <Route exact path="/newTask">
              <NewTask />
            </Route>
            <Route exact path="/login">
              <Login clearAction={clearAction} />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </LoggedProvider>
    </div>
  );
}

export default App;
