import React from "react";
import { LiaSearchSolid } from "react-icons/lia";

function SearchBox({ search, setSearch }) {
  return (
    <div className="flex items-center justify-center relative">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-gray-50 p-3 rounded-2xl outline-none text-xs pr-9"
      />
      <LiaSearchSolid className="w-5 h-5 absolute top-2.5 right-3" />
    </div>
  );
}

export default SearchBox;
