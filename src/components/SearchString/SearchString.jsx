import React from "react";

import "./searchString.scss";

const SearchString = () => {
  return (
    <div className="searchString">
      <input placeholder="Поиск по городам" type="text" /> <div>🔍</div>
    </div>
  );
};

export default SearchString;
