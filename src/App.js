import React, { useState } from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import Header from "./Components/Header/Header";
import KnowledgeBase from "./Components/KnowledgeBase/KnowledgeBase";
import HistoricalTicket from "./Components/HistoricalTicket/HistoricalTicket";
import "./App.css"; // Import the CSS file for styling

const App = () => {
  const [searchData, setSearchData] = useState({ tickets: [], resolution: {} });
  const [language, setLanguage] = useState("en"); // Adding language state

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value); // Set the language on change
  };

  return (
    <div>
      <Header />
      {/* Language Dropdown */}
      <div>
        <label htmlFor="language-select">Choose Language: </label>
        <select id="language-select" value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          {/* Add more languages as needed */}
        </select>
      </div>
      
      <SearchBar setSearchData={setSearchData} language={language} />
      <hr />
      <div className="contentContainer">
        <HistoricalTicket tickets={searchData.tickets} language={language}/>
        <KnowledgeBase resolution={searchData.resolution} language={language}/>
      </div>
    </div>
  );
};

export default App;
