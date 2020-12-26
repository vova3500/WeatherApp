import React from "react";

import Header from "./components/Header/Header";
import SearchString from "./components/SearchString/SearchString";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <SearchString />
      </div>
    </div>
  );
}

export default App;
