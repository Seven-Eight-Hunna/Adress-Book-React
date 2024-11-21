import React, { useRef } from "react";
import { deleteContact } from "../../services/api";
import s from "./ContactDetails.module.css";
import telephone from "./telephone-logo.svg";
import mail from "./mail-logo.svg";

const ContactDetails = ({ contact, setContacts }) => {
  if (!contact) {
    return null; // Если контакт не выбран, ничего не показываем
  }

  return (
    <div className={s.container}>
      <div className={s.first__info}>
        {" "}
        <img src={contact.image} width="112px" height="90px" alt="" />
        <h2>
          {contact.name} {contact.surname}
        </h2>{" "}
        <p className={s.first__style}>{contact.about}</p>{" "}
      </div>
      <div className={s.second__info}>
        <button
          className={s.delete__button}
          onClick={() => deleteContact(contact.id)}
        >
          Delete Contact
        </button>
        <div className={s.item__info}>
          <p className={s.first__style}>
            Phone Number: <p className={s.second__style}>{contact.phone}</p>
          </p>
          <button
            style={{
              border: "none",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <img src={telephone} alt="" />
          </button>
        </div>
        <div className={s.item__info}>
          <p className={s.first__style}>
            Email Address: <p className={s.second__style}>{contact.mail}</p>
          </p>
          <button
            style={{
              border: "none",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <img src={mail} alt="" />
          </button>
        </div>

        <p className={s.first__style}>
          Date Of Create:{" "}
          <p className={s.second__style}>
            {new Date(contact.creationDate).toLocaleString()}
          </p>{" "}
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
