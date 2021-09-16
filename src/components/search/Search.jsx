import React, { useState } from "react";
import { useContacts } from "../../context/ContactsContext";
import { searchContacts } from "../../utils/serachUtil";
// import { useContacts } from "../../context/ContactsContext";
// import { searchContacts } from "../../utils/serachUtil";

function Search() {
  const {serach, setSearch} = useContacts()
  const {contacts} = useContacts()
  console.log(contacts)
  // console.log(searchContacts(contacts, serach))
  return (
    <div>
      <input
        className=" md:flex md:w-96 text-center h-12 border-md bg-gray-300 bg-opacity-25 text-lg font-semibold "
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
