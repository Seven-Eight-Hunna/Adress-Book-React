import React, { useState } from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import s from "./FilterComponent.module.css";
import label__geometric from "./label-geometric.svg";
import add__contact from "./add-contact.svg";

const FilterComponent = ({ modal, ToggleModal, onAdd }) => {
  return (
    <div className={s.container}>
      <div className={s.filter__form}>
        <button className={s.filtered__search} type="submit">
          Search
        </button>
        <input type="text" placeholder="" className={s.filtered__holder} />
      </div>

      {/* Фильтрация по гендеру */}
      <div className={s.filtered__box}>
        <select className={s.filtered__select}>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>{" "}
        <img
          src={label__geometric}
          alt=""
          style={{ width: "15px", heigh: "17px" }}
        />
      </div>

      {/* Сортировка */}
      <div className={s.filtered__box}>
        <select className={s.filtered__select}>
          <option>Sort</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>{" "}
        <img
          src={label__geometric}
          alt=""
          style={{ width: "15px", heigh: "17px" }}
        />
      </div>

      <button onClick={ToggleModal} className={s.filtered__modal}>
        <img src={add__contact} alt="" />
        New Contact
      </button>
    </div>
  );
};

export default FilterComponent;
