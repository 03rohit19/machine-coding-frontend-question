import React from "react";
import MenuList from "./MenuList";

const TreeView = ({ menus = [] }) => {
  return (
    <>
      <div className="parent-tree">
        <MenuList list={menus} />
      </div>
    </>
  );
};

export default TreeView;
