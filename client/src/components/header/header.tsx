import React, { useState } from "react";
import styles from "./header.module.css";
import client from "../../feathers";
import Users from "../users/users";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const contentStyle = { background: "#000" };

  return (
    <div className={styles.header}>
      <span className={styles.header__title}>{title}</span>
      <button
        type="button"
        className={styles.header__button}
        onClick={async () => await client.logout()}
      >
        logout
      </button>

      <div className={styles.buttons__container}>
        <Popup
          trigger={
            <button type="button" className={styles.users__button}>
              View users
            </button>
          }
          {...{ contentStyle }}
          position="left bottom"
        >
          <div>
            <Users />
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Header;
