import React from "react";

const SearchBox = ({ search, setSearch, weatherAPI }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="srz" onSubmit={submitHandler}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="City"
      />
      <button onClick={weatherAPI}>Search</button>
    </form>
  );
};

export default SearchBox;
