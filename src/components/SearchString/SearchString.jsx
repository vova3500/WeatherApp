import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { loadingWeather } from "../../redux/actions/weather";

import "./searchString.scss";

const SearchString = ({ loading }) => {
  const dispatch = useDispatch();
  const [inputSearch, setInputSearch] = useState(null);

  const hendleInputSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const hendleSearch = () => {
    dispatch(loadingWeather(inputSearch));
  };
  return (
    <div className="searchString">
      <input
        placeholder="Поиск по городам"
        type="text"
        onChange={hendleInputSearch}
      />
      <button disabled={loading} onClick={hendleSearch}>
        🔍
      </button>
    </div>
  );
};

export default SearchString;
