import { useEffect, useRef, useState } from "react";
import Pill from "./Pill";

const SearchApp = () => {
  const [searchItem, setSearchItem] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());

  const inputRef = useRef(null);

  //   https://dummyjson.com/users/search?q=John

  useEffect(() => {
    const fetchUsers = () => {
      if (searchItem.trim() === "") {
        setSuggestion([]);
        return;
      }
      fetch(`https://dummyjson.com/users/search?q=${searchItem}`)
        .then((res) => res.json())
        .then((data) => setSuggestion(data))
        .catch((err) => console.log(err));
    };
    fetchUsers();
  }, [searchItem]);

  const handleSelectedUsers = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSelectedUserSet(new Set([...selectedUserSet, user.email]));
    setSearchItem("");
    setSuggestion([]);
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedUsers.length > 0
    ) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemoveUser(lastUser);
      setSuggestion([]);
    }
  };

  const handleRemoveUser = (user) => {
    const updatedUser = selectedUsers.filter(
      (selectedUser) => selectedUser.id != user.id
    );
    setSelectedUsers(updatedUser);
    const updatedEmails = new Set(selectedUserSet);
    updatedEmails.delete(user.email);
    setSelectedUserSet(updatedEmails);
  };

  return (
    <>
      <div className="user-search-container flex relative w-full">
        <div className="user-search-input flex flex-wrap w-full items-center gap-8 p-5 border border-slate-800 rounded-2xl">
          {/* Pills */}
          {selectedUsers.map((user) => {
            return (
              <Pill
                key={user.email}
                image={user.image}
                text={`${user.firstName} ${user.lastName} `}
                onClick={() => handleRemoveUser(user)}
              />
            );
          })}

          {/* Input field with search suggestion */}
          <div className="input w-full">
            <input
              ref={inputRef}
              className="w-full border-none outline-none h-5 p-1"
              type="text"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              placeholder="Search for users..."
              onKeyDown={handleKeyDown}
            />
            {/* search sugestions */}
            <ul className="suggestion-list max-h-[300px] overflow-y-scroll list-none p-0 m-0 absolute w-[30%] bg-slate-50 rounded-md shadow-lg">
              {suggestion?.users?.map((user, index) => {
                return !selectedUserSet.has(user.email) ? (
                  <li
                    onClick={() => handleSelectedUsers(user)}
                    key={user.email}
                    className="flex items-center p-2 hover:bg-gray-200 transition-colors duration-200"
                  >
                    <img
                      className="h-10 w-10 rounded-full mr-3"
                      src={user.image}
                      alt={`${user.firstName} ${user.lastName}`}
                    />
                    <span>
                      {user.firstName} {user.lastName}
                    </span>
                  </li>
                ) : (
                  <></>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchApp;
