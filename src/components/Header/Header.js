import './Header.css';
import React, { useContext } from 'react';
import LoggedContext from '../../contexts/LoggedContext';

function Header(props) {
  const logged = useContext(LoggedContext);

  return (
    <header>
      <button onClick={props.actionLogin}>{logged.logged ? 'LOGOUT' : 'LOGIN'}</button>
      <h1>ToDo List</h1>
    </header>
  );
}

export default Header;
