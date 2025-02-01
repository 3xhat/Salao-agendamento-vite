import React from 'react';
import classes from './Header.module.css'; // Importe o CSS Module

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Salão Beauty</h1>
      <nav className={classes.nav}>
        <a href="/" className={classes.navLink}>Home</a>
        <a href="/agendamentos" className={classes.navLink}>Agendamentos</a>
      </nav>
    </header>
  );
};

export default Header;