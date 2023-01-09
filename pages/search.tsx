import { useState, KeyboardEvent, ChangeEvent } from "react";

const Search = () => {
  const [userQuery, setUserQuery] = useState("");

  const updateUserQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setUserQuery(event.target.value);
    console.log("userQuery", userQuery);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      searchQuery();
    }
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };

  return (
    <div className="form">
      <input
        value={userQuery}
        onChange={updateUserQuery}
        onKeyDown={handleKeyPress}
      />
      <button onClick={searchQuery}>Search</button>
    </div>
  );
};
export default Search;
