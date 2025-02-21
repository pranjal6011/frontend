import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchForm}>
        <input type="text" placeholder="Title" className={styles.titleInput} />
        <input type="text" placeholder="Description" className={styles.descriptionInput} />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
