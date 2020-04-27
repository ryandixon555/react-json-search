import React, { useState, useEffect } from "react";

import Information from './info-json'

export default function App() {
  const [searchTerm, setSearchTerm] = useState("Ghana");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => setSearchTerm(e.target.value);

  useEffect(() => {
    const results = Information.filter(data => data.keywords.includes(searchTerm));

    setSearchResults(results);

  }, [searchTerm]);

  return (
    <div className="App">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="search"
      />
      <p>Search by Keyword</p>
      <p>
        searchTerm:
        <br />
        {searchTerm}
      </p>
      <div className="available-data">
        <h1>Available Data</h1>
        <p>"id": 1,
    "name":"Samule",
    "age":25,
    "keywords": ["USA","England"]</p>

    <p>
    "id": 2,
    "name":"Sam",
    "age":19,
    "keywords": ["Ghana"]
    </p>

    <p>
    "id": 3,
    "name":"Mark",
    "age":17,
    "keywords": ["Africa","England"]
    </p>

    <p>
    "id": 4,
    "name":"Markus",
    "age":21,
    "keywords": ["Africa","England"]
    </p>

    <p>
    "id": 5,
    "name":"Markus",
    "age":29,
    "keywords": ["Africa","Nigeria"]
    </p>
      </div>
      <div className="results">
      <h1>Results</h1>
         <ul>
          {searchResults &&
            searchResults.map(item => <ul key={item.id} style={{border: "2px solid black", margin: "5px"}}>
              <li>{item.name}</li>
              <li>{item.age}</li>
            </ul>)}
        </ul>
      </div>
    </div>
  );
}
