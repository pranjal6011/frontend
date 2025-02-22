import React, { useState, useRef } from "react";
import styles from "./SearchBar.module.css";
import API_BASE_URL from "../../config/environment";

const SearchBar = ({ setSearchData }) => {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const descriptionInputRef = useRef(null);

  React.useEffect(() => {
    descriptionInputRef.current?.focus();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: description }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Extracting the text response
      const extractedText =
        data.res_kb.output.message.content?.[0].text || "No relevant data found.";
      console.log("Extracted text:", extractedText);
      const fetchedTickets = data.res_inc?.map(ticket => ({
        Created: ticket.Created,
        Number: ticket.Number,
        Title: ticket.Title,
        Priority: ticket.Priority,
        Category: ticket.Category,
        City: ticket.City,
        Merged_Subcategory: ticket.Merged_Subcategory,
        Merged_Thirdcategory: ticket.Merged_Thirdcategory,
        Merged_Country: ticket.Merged_Country,
        RequestedFor: ticket.RequestedFor, // Make sure this property exists in your data
        AssignedTo: ticket["Assigned to"], //  Handle the space in the property name
        AssignmentGroup: ticket["Assignment group"], // Handle space
        LegalEntity: ticket["Legal Entity"], // Handle space
        Description: ticket.Description,
      })) || [];
      setSearchData({
        tickets: fetchedTickets,  // Set the tickets array
        resolution: { text: extractedText } // Set the resolution text
      });
  

    } catch (error) {
      console.error("Error fetching data:", error);
      setSearchData("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
      // setDescription("");
      descriptionInputRef.current?.focus();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <input
          ref={descriptionInputRef}
          type="text"
          placeholder="Enter search query"
          className={styles.descriptionInput}
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
          disabled={loading}
        />
        <button type="submit" className={styles.searchButton} disabled={loading}>
          {loading ? <div className={styles.loader}></div> : "Search"}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;