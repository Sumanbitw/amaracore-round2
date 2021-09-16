import axios from "axios";
import { useEffect } from "react";
import { Routes, Route } from "react-router";
// import "./App.css";
import Contacts from "./components/contacts/Contacts";
import ContactDetails from "./components/details/ContactDetails";
import Navbar from "./components/navbar/Navbar";
import { useContacts } from "./context/ContactsContext";

function App() {
  const {setContacts} = useContacts()
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
  }, [setContacts]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/:id" element={<ContactDetails />} />
      </Routes>
    </div>
  );
}

export default App;
