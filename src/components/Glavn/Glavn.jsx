import React from "react";
import logo from "../../../public/vite.svg";
import styles from "./Glavn.module.css";
const Glavn = () => {
  return (
    <div className={styles.content}>
      <div className={styles.imag}>
        <img src={logo} />
      </div>
      <div>
        <h1>Кафедра 32</h1>
      </div>
      <div></div>
    </div>
  );
};

export default Glavn;
