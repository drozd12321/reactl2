import React from "react";
import styles from "./Home.module.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
const Home = () => {
  return (
    <div className={styles.app}>
      <div>
        <Header />
        <Menu />
      </div>
    </div>
  );
};

export default Home;
