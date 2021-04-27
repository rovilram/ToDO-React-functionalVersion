import './Nav.css';
import React, { useContext } from 'react';
import LoggedConsumer from '../../contexts/LoggedContext';
import { Link } from 'react-router-dom';

function Footer(props) {
  const logged = useContext(LoggedConsumer);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Tareas</Link>
        </li>
        <li>
          {logged.logged ? (
            <Link onClick={logged.toggleLogged} to="/">
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li>
          <Link to="/newtask">Nueva Tarea</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
