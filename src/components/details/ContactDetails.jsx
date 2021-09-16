import React from "react";
import { useParams } from "react-router";
import { useContacts } from "../../context/ContactsContext";

function ContactDetails() {
  const { contacts } = useContacts();

  const { id } = useParams();
  const contactObject =
    contacts && contacts.find((contactObj) => contactObj.id === id);
  return (
    <div className="flex flex-col w-full justify-between bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex flex-wrap justify-center md:items-center md:flex-col" style={{height:"100vh"}}>
        <img
          src={contactObject && contactObject.avatar}
          alt={contactObject && contactObject.first_name}
          className="z-50 w-60 h-60 mt-40 md:mt-25 rounded-full"
        />
        <div className="text-3xl font-sans font-semibold">{`${contactObject?.first_name} ${contactObject?.last_name}`}</div>
        <div className="font-lg font-sans font-semibold mt-0 md:mt-4">
          {contactObject?.job_title}
        </div>
        <div className="flex flex-col mt-0 md:mt-4">
          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {contactObject?.company}
          </div>
          <div className="flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {contactObject?.email}
          </div>
          <div className="flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
              />
            </svg>
            {contactObject?.phone}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
