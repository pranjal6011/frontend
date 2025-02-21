import React from 'react';
import logo from '../../images/logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="SAP Logo" className={styles.logo} />
      <h2>TicketWise</h2>
    </div>
  );
};

export default Header;
