// ContactList.jsx
import React, { useEffect, useState } from "react";
import ContactItem from "../ContactItem/ContactItem";

import s from "./ContactList.module.css";
import { getContacts } from "../../services/api";
import ContactDetails from "../ContactDetails/ContactDetails";

const ContactList = ({
  contacts,
  onAdd,
  handleSelectContact,
  selectedContact,
  getGenderImage,
  deleteContactRefresh,
}) => {
  return (
    <div className={s.container}>
      <div className={s.list__block}>
        <ul className={s.contact__list}>
          {contacts.map((contact) => (
            <ContactItem
              onAdd={onAdd}
              key={contact.id}
              contact={contact}
              onSelect={handleSelectContact}
            />
          ))}
        </ul>
      </div>

      <div className={s.details__block}>
        <ContactDetails
          contact={selectedContact}
          getGenderImage={getGenderImage}
          deleteContact={deleteContactRefresh}
        />
      </div>
    </div>
  );
};

export default ContactList;
