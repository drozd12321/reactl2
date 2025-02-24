import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images.jpeg";
import { headerData } from "../../data/data";
const Header = () => {
  return (
    <>
      <header className={styles.head}>
        <img src={logo} />
        <ul className={styles.headdiv}>
          {headerData.map((item, ind) => (
            <li key={ind}>{item}</li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Header;
