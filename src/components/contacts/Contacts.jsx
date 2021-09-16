import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useContacts } from "../../context/ContactsContext";

function Contacts() {
  const { contacts } = useContacts();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full justify-between bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="mt-36">
        {contacts &&
          contacts.map((contactObj) => (
            <div
              key={contactObj.id}
              onClick={() => navigate(`/${contactObj.id}`)}
              className="flex gap-4 h-20 items-center cursor-pointer justify-start md:justify-between w-auto md:w-4/5 md:mx-auto pl-4  hover:bg-gray-200 rounded-sm hover:rounded-lg border-0 hover:border-4 hover:text-gray-900"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={contactObj.avatar}
                  alt={contactObj.first_name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="hidden md:flex text-xl font-sans font-medium">{`${contactObj.first_name} ${contactObj.last_name} `}</div>
              </div>
              <div className="hidden md:flex text-xl font-sans font-medium">
                {contactObj.email}
              </div>
              <div className="text-xl font-sans font-medium pr-4">
                {contactObj.phone}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Contacts;
