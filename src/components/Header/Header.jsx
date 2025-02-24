import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images.jpeg";
import { headerData } from "../../data/data";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className={styles.head}>
        <img src={logo} />
        <ul className={styles.headdiv}>
          {headerData.map((item, ind) => (
            <Link to={item.link} key={ind}>
              <li key={ind}>{item.text}</li>
            </Link>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Header;
