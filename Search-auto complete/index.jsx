import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

// Fetch data function
const fetchData = async (setData, setLoading, setError) => {
  setLoading(true);
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    if (data && data.users && data.users.length) {
      setData(data.users.map((userItem) => userItem.firstName)); // Set first names of users
    }
  } catch (error) {
    console.log(error);
    setError(error.message);
  } finally {
    setLoading(false); // Ensure loading stops even if there is an error
  }
};

// Handle change function
const handleChange = (
  e,
  setSearchParam,
  setFilteredUsers,
  setShowDropDown,
  users
) => {
  const value = e.target.value.toLowerCase(); // Get the input value and convert to lowercase
  setSearchParam(value); // Update searchParam state with input value

  if (value.length > 1) {
    // Only filter if more than 1 character
    const filteredData =
      users && users.length
        ? users.filter((item) => item.toLowerCase().includes(value)) // Filter users array
        : [];
    setFilteredUsers(filteredData); // Set the filtered users
    setShowDropDown(true); // Show dropdown
  } else {
    setFilteredUsers([]); // Reset filtered users if input length <= 1
    setShowDropDown(false); // Hide dropdown
  }
};

// Handle click search items
const handleClick = (e, setSearchParam, setShowDropDown) => {
  setShowDropDown(false);
  setSearchParam(e.target.value);
};

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); // Holds the user data
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState(""); // Corrected typo (was serachParam)
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]); // Filtered users for the dropdown

  useEffect(() => {
    fetchData(setData, setLoading, setError); // Fetch user data on mount
  }, []);

  return (
    <div className="relative w-80 mx-auto mt-10">
      <input
        value={searchParam}
        type="text"
        name="search-users"
        placeholder="Search users here..."
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) =>
          handleChange(
            e,
            setSearchParam,
            setFilteredUsers,
            setShowDropDown,
            data
          )
        }
      />

      {/* Show suggestions dropdown if showDropDown is true */}
      {showDropDown && (
        <Suggestion
          data={filteredUsers}
          handleClick={(e) => handleClick(e, setSearchParam, setShowDropDown)}
        />
      )}

      {/* Loading and error messages */}
      {loading && <p className="text-blue-500 mt-2">Loading...</p>}
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
    </div>
  );
};

export default SearchAutoComplete;
