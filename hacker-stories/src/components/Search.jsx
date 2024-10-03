import * as React from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <br />
      <p>
        Search for <strong>{searchTerm}</strong>.
      </p>
    </>
  );
};

export default Search;
