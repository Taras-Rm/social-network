import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

// хедерна компонента відображає логотип, і статус логування
const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://www.logo.wine/a/logo/PlayStation/PlayStation-Logo.wine.svg"
        alt="logo"></img>
      <div className={s.logining}>
        {props.isLogined ? (
          <div>
            <span>{props.login}</span>
            <button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login" className={s.login}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
