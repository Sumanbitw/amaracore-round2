import React from "react";
import useDarkMode from "../../darkMode/darkMode";
import ContactInfo from "./ContactInfo";

function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <section className="border-b-2 fixed w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="flex flex-wrap justify-between items-center h-auto p-4 z-50">
        <div className="flex justify-evenly items-center">
          <img
            src="https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png"
            alt=""
            className="h-10 w-10"
          />
          <div className="ml-4 text-3xl font-semibold font-sans">Contacts</div>
        </div>
        <div className="hidden md:flex gap-2 items-center relative"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <button
          className="text-2xl font-semibold font-sans cursor-pointer"
          onClick={() => setTheme(colorTheme)}
        >
          {colorTheme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
      </nav>
      <ContactInfo />
    </section>
  );
}

export default Navbar;
