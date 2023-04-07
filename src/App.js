import React from 'react';
import './App.css';
import SearchUser from './SearchUser';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Github User Search</h1>
      </header>
      <SearchUser />
    </div>
  );
};

export default App;
