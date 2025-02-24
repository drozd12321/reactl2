import React from "react";
import styles from "./Menu.module.css";
import { menuData } from "../../data/data";
const Menu = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Меню</h2>
      <div className={styles.menu}>
        {menuData.map((item, ind) => (
          <div key={ind} className={styles.inf}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
