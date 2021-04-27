import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { LoggedProvider } from './contexts/LoggedContext';
import React, { useState } from 'react';

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
    console.log("DESPUES TOGGLE", logged)
    setAction('');
  };

  const clearAction = () => {
    setAction('');
  };

  return (
    <div className="App">
      {console.log("RENDER", logged)}
      <LoggedProvider value={{ logged, toggleLogged }}>
        <Header actionLogin={actionLogin} />
        <Main action={action} clearAction={clearAction}  />
        <Footer />
      </LoggedProvider>
    </div>
  );
}

export default App;
