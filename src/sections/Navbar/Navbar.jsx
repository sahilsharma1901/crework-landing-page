import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
        <h1 className={styles.logo}>Crework.</h1>
        <a href='/' className={styles.exploreButton}>Explore</a>
    </nav>
  );
}

export default Navbar;