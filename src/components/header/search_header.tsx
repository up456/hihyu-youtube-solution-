import React, { useRef, useState } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({
  onSubmit,
}: {
  onSubmit: (keyword: string) => void;
}) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(value);
  };

  const handleOnChange = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <header className={styles.header}>
      <ul className={styles.logoGroup}>
        <img src="/images/logo.png" className={styles.youtubeIcon} alt="logo" />
        <li className={styles.logoTitle}>Youtube</li>
      </ul>
      <form action="" className={styles.searchForm} onSubmit={handleOnSubmit}>
        <input
          value={value}
          onChange={handleOnChange}
          ref={inputRef}
          type="search"
          className={styles.searchInput}
          placeholder="Search..."
        />
        <button className={styles.searchBtn}>
          <img
            className={styles.searchImg}
            src="/images/search.png"
            alt="search"
          />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
