import React, { useEffect } from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  useEffect(() => {
    console.log("list", list);
  }, [list]);

  return (
    <ul className="menu-list p-4 bg-gray-100 rounded-md shadow-md space-y-4">
      {list && list.length
        ? list.map((listItem, index) => (
            <MenuItem key={listItem.id} item={listItem}></MenuItem>
          ))
        : null}
    </ul>
  );
};

export default MenuList;
