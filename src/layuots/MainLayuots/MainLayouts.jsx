import React from "react";
import styles from "./MainLayouts.module.css";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
const MainLayouts = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.men}>
        <Menu />
        <div className={styles.chld}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayouts;
