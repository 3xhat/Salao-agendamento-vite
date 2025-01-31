// src/components/Header/Header.tsx
     import React from 'react';
     import styles from './Header.module.css';

     interface HeaderProps {
       title: string;
     }

     const Header: React.FC<HeaderProps> = ({ title }) => {
       return (
         <header className={styles.header}>
           <h1>{title}</h1>
           <nav className={styles.navLinks}>
             <a href="/">Home</a>
             <a href="/agendamentos">Agendamentos</a>
           </nav>
         </header>
       );
     };

     export default Header;