import React from 'react';
import styles from './header.module.css';

const Header = () => (
  <header>
    <ul className={styles.logoGroup}>
      <li className={styles.youtubeIcon}>
        <i className="fa-brands fa-youtube"></i>
      </li>
      <li className={styles.logoTitle}>Youtube</li>
    </ul>
    <form action="" className={styles.searchForm}>
      <input type="search" className={styles.searchInput} />
      <button className={styles.searchBtn}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  </header>
);

export default Header;
