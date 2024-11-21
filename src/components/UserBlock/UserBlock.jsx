import React from "react";
import s from "./UserBlock.module.css";
import user__image from "./user-avatar.svg";
import date__image from "./date-image.svg";
import telephone__image from "./telephone-image.svg";

export const UserBlock = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h1>BitCamp</h1>
        <div className={s.user__login}>
          <img
            src={user__image}
            alt="Твоя Аввтарка"
            className={s.user__image}
            style={{ marginLeft: "30px" }}
          />
          <p style={{ marginLeft: "20px" }}>Seven-Eight Hunna</p>
          <p className="loggined__email" style={{ fontSize: "20px" }}>
            jgoat187@gmail.com
          </p>
        </div>
        <div className={s.user__info}>
          <div className={s.user__details}>
            <img src={date__image} alt="" /> <p>27.05.1999</p>
          </div>
          <div className={s.user__details}>
            <img src={telephone__image} alt="" /> <p>8-(924)-282-01-40</p>
          </div>
        </div>
      </div>
    </div>
  );
};
