import React, { useState, useEffect } from 'react';
import './App.css';

import Information from './info-json';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
     const results = Information.filter(data =>
       data.name.toLowerCase().includes(searchTerm) 
     );

     setSearchResults(results);

   }, [searchTerm]);
 
   const CountryDetail = props => {
    const { name, age, country } = props;
    return (
      <>
        <p>{name}</p>
        <p>{age}</p>
        <p>{country}</p>
      </>
    );
  };

   return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        onChange={e => setSearchTerm(e.target.value)}
      />
      {searchResults.map((name, id) => (
        <CountryDetail key={id} {...name} />
      ))}
    </div>
  );
 }

export default App;