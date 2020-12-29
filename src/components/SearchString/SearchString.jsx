import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { loadingWeather } from "../../redux/actions/weather";

import "./searchString.scss";

const SearchString = () => {
  const dispatch = useDispatch();
  const [inputSearch, setInputSearch] = useState(null);

  const hendleInputSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const hendleSearch = () => {
    if (inputSearch) {
      dispatch(loadingWeather(inputSearch));
    } else {
      alert("Введите город");
    }
  };
  return (
    <div className="searchString">
      <input
        placeholder="Поиск по городам"
        type="text"
        onChange={hendleInputSearch}
      />
      <div onClick={hendleSearch}>🔍</div>
    </div>
  );
};

export default SearchString;
