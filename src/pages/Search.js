import React, { useContext } from "react";
import { AppContext } from "../components/appContext";

function Search() {
  const { state, updateState } = useContext(AppContext);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    updateState({ searchQuery: inputValue });
  };

  return (
    <div>
      <input className='SearchBar' value='Search' onSubmit={<Search />}>
      </input>
      <h1>{state.someValue}</h1>
    </div>
  );
}

export default Search;
