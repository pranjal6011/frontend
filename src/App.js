import React, { useState } from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import Header from "./Components/Header/Header";
import KnowledgeBase from "./Components/KnowledgeBase/KnowledgeBase";
import HistoricalTicket from "./Components/HistoricalTicket/HistoricalTicket";
import "./App.css"; // Import the CSS file for styling

const App = () => {
  const [searchData, setSearchData] = useState({ tickets: [] , resolution: {} });


  return (
    <div>
      <Header />
      <SearchBar setSearchData={setSearchData} />
      <hr />
      <div className="contentContainer">
        <HistoricalTicket tickets={searchData.tickets} />
        <KnowledgeBase resolution={searchData.resolution} />
      </div>
    </div>
  );
};

export default App;
