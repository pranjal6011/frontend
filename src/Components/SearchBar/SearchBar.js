import React, { useState, useRef } from "react";
import styles from "./SearchBar.module.css";
import API_BASE_URL from "../../config/environment";

const SearchBar = ({ setSearchData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const titleInputRef = useRef(null);

  React.useEffect(() => {
    titleInputRef.current?.focus();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/tickets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Data received:", data);
      setSearchData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setTitle("");
      setDescription("");
      titleInputRef.current?.focus();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <input
          ref={titleInputRef}
          type="text"
          placeholder="Title"
          className={styles.titleInput}
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className={styles.descriptionInput}
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className={styles.searchButton} disabled={loading}>
          Search {loading && <div className={styles.loader}></div>}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
