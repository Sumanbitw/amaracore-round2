

export const searchContacts = (contacts, search) => {
  console.log(contacts)
  let filteredContacts = [...contacts]
  filteredContacts = filteredContacts?.first_name.toLowerCase().includes(search?.toLowerCase())
  return filteredContacts;
};
