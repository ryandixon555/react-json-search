import React, { useState, useEffect } from "react";

const data = [
  {
    id: "1",
    name: "rex",
    type: "dog",
    emoji: "🐶",
    keywords: ["dog", "friendly", "inteligent"]
  },
  {
    id: "2",
    name: "garfield",
    type: "cat",
    emoji: "🐱",
    keywords: ["cat", "independent"]
  },
  {
    id: "3",
    name: "foxy",
    type: "fox",
    emoji: "🦊",
    keywords: ["fox", "inteligent"]
  },
  { 
    id: "4", 
    name: "sushi", 
    type: "fish", 
    emoji: "🐟", 
    keywords: ["fishy"] }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("friendly");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => setSearchTerm(e.target.value);

  useEffect(() => {
    const results = data.filter(o => o.keywords.includes(searchTerm));

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
        <p>id: "1",
    name: "rex",
    type: "dog",
    emoji: "🐶",
    keywords: ["dog", "friendly", "inteligent"]</p>

    <p>
    id: "2",
    name: "garfield",
    type: "cat",
    emoji: "🐱",
    keywords: ["cat", "independent"]
    </p>

    <p>
    id: "3",
    name: "foxy",
    type: "fox",
    emoji: "🦊",
    keywords: ["fox", "inteligent"]
    </p>

    <p>
    id: "4", 
    name: "sushi", 
    type: "fish", 
    emoji: "🐟", 
    keywords: ["fishy"] 
    </p>
      </div>
      <div className="results">
      <h1>Results</h1>
         <ul>
          {searchResults &&
            searchResults.map(item => <ul key={item.id}>
              <li>{item.name}</li>
              <li>{item.type}</li>
              <li>{item.emoji}</li>
            </ul>)}
        </ul>
      </div>
    </div>
  );
}
