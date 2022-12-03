import { useState } from "react";

const SearchBox = ({ SetButtonValue }) => {
  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="srz" onSubmit={submitHandler}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="write your city name..."
      />
      <button onClick={()=>SetButtonValue(search)}>Search</button>
    </form>
  );
};

export default SearchBox;
