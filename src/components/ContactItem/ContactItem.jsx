import React from "react";
import s from "./ContactItem.module.css";
import maleImage from "./man-logo.svg";
import femaleImage from "./women-logo.svg";

const ContactItem = ({ contact, onSelect }) => {
  console.log(onSelect);
  return (
    <li
      className={s.contact__item}
      onClick={() =>
        onSelect({
          ...contact,
          image: contact.image
            ? "https://std.bit-camp.ru/" + contact.image
            : contact.gender === "male"
            ? maleImage
            : femaleImage,
        })
      }
      style={{ cursor: "pointer" }}
    >
      <div className={s.contact__info}>
        <img
          className={s.contact__image}
          src={
            contact.image
              ? "https://std.bit-camp.ru/" + contact.image
              : contact.gender === "male"
              ? maleImage
              : femaleImage
          }
          alt={`${contact.name} ${contact.surname}`}
        />
        <div className={s.contact__block}>
          <div className={s.first__info}>
            <p style={{ fontSize: "20px" }}>
              {contact.name} {contact.surname}
            </p>
            <p> {contact.about}</p>
          </div>
          <div className={s.second__info}>
            <p> {contact.phone}</p>
            <div className={s.third__info}>
              <p>{contact.mail}</p>
              <p style={{ fontSize: "10px" }}>
                Date Of Create:{" "}
                {new Date(contact.creationDate).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </li>
  );
};

export default ContactItem;
