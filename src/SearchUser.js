import React, { useState } from 'react';
import axios from 'axios';
import UserProfile from './UserProfile';

const SearchUser = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/search/users?q=${query}`)
      .then((response) => {
        setResults(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter GitHub username" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {results.map((user) => (
        <UserProfile key={user.id} user={user} />
      ))}
    </div>
  );
};

export default SearchUser;
