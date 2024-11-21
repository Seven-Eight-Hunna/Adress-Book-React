import React, { useEffect, useRef, useState } from "react";
import { UserBlock } from "./components/UserBlock/UserBlock";
import s from "./App.module.css";
import ContactList from "./components/ContactList/ContactList";
import { addContact, deleteContact, getContacts } from "./services/api";
import FilterComponent from "./components/FilterComponent/FilterComponent";
import ModalComponent from "./components/ModalComponent/ModalComponent";
import ContactDetails from "./components/ContactDetails/ContactDetails";

export const App = ({ onAdd }) => {
  const [contacts, setContacts] = useState({ data: [] });
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const ref = useRef(null);

  const [selectedContact, setSelectedContact] = useState(null);
  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  function ToggleModal() {
    setModal((prev) => !prev);
  }

  async function addContactRefresh(formdata) {
    try {
      await addContact(formdata);
      await fetchData();
    } catch (error) {
      console.error("Failed to add contact:", error);
    }
  }

  async function deleteContactRefresh(formdata) {
    try {
      await deleteContact(formdata);
      await fetchData();
    } catch (error) {
      console.error("Failed to add contact:", error);
    }
  }

  async function fetchData() {
    try {
      setContacts(await getContacts());
    } catch (error) {
      setError("Ошибка при загрузке данных");
      console.error("Ошибка:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  if (!contacts) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.container}>
      <UserBlock />
      <div className={s.center}>
        {" "}
        <FilterComponent modal={modal} ToggleModal={ToggleModal} />
        <ContactList
          selectedContact={selectedContact}
          contacts={contacts.data}
          setContacts={setContacts}
          onAdd={onAdd}
          handleSelectContact={handleSelectContact}
          deleteContactRefresh={deleteContactRefresh}
        />
        {modal && (
          <ModalComponent
            modal={modal}
            ToggleModal={ToggleModal}
            addContact={addContactRefresh}
          />
        )}
      </div>
    </div>
  );
};

export default App;
