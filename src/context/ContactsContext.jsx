import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ContactDetails = createContext()

export default function Contacts({children}){
  const [contacts, setContacts] = useState()
  const [search, setSearch] = useState("")


  useEffect(() => {
    (async function fetchData() {
      try {
        const result = await axios.get(
          "https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts"
        );
        setContacts(result.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return(
    <ContactDetails.Provider value={{contacts, search, setSearch}}>
      {children}
    </ContactDetails.Provider>
  )
}

export function useContacts(){
  return useContext(ContactDetails)
}