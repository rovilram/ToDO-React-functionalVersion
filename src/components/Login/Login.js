import './Login.css';
import React, { useState, useContext } from 'react';
import LoggedConsumer from '../../contexts/LoggedContext';
import { Link } from 'react-router-dom';

function Login(props) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  const logged = useContext(LoggedConsumer);

  const userHandler = (e) => {
    setUser(e.target.value);
  };
  const passHandler = (e) => {
    setPass(e.target.value);
  };
  const logBtnHandler = (e) => {
    if (user === 'admin' && pass === '1234admin') {
      logged.toggleLogged();
    } else {
      e.preventDefault();
      setError('Error usuario / contraseña');
    }
  };
  return (
    <>
      <h2>LOGIN</h2>
      <div className="loginWrapper">
        <label htmlFor="userInput">Usuario: </label>
        <input type="text" id="userInput" onChange={userHandler} />
        <br />
        <label htmlFor="passInput">Contraseña: </label>
        <input type="text" id="passInput" onChange={passHandler} />
        <br/>
        <Link to="/" onClick={logBtnHandler} className="btn btn-primary">
          Login
        <br/> 
        </Link>
        <Link to="/">Cancelar</Link>
        {error && <div className="errorWrapper">{error}</div>}
      </div>
    </>
  );
}
export default Login;
