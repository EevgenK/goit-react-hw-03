import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import "modern-normalize";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) ?? [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]
  );
  const [search, setSearch] = useState("");
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const filteredContacts = contacts.filter(({ name, number }) => {
    return name.toLowerCase().includes(search) || number.includes(search);
  });

  const addContact = (name, number) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { id: nanoid(), name, number }];
    });
  };
  const removeContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };
  return (
    <section>
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox value={search} search={setSearch} />
        <ContactList
          deleteContact={removeContact}
          contacts={!search ? contacts : filteredContacts}
        />
      </div>
    </section>
  );
}

export default App;
