"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.dropdownBtn} onClick={handleOpen}>
        <img src="images/dropdown-icon.png" alt="dropdown" />
      </div>

      <div
        className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ""}`}
      >
        <div className={styles.dropdownHeader}>
          <span>Menu</span>

          <div className={styles.dropdownCloseBtn} onClick={handleClose}>
            <img src="images/close-icon.png" alt="close dropdown" />
          </div>
        </div>

        <div className={styles.dropdownList}>
          <a className={styles.link} href="/">
            <span>Strona główna</span>
          </a>

          <a className={styles.link} href="news">
            <span>Nowości</span>
          </a>

          <a className={styles.link} href="projects">
            <span>Nasze projekty</span>
          </a>

          <div>
            <a className={styles.link} href="login">
              <div className="w-full flex flex-row items-center gap-2">
                Login
                <img className={styles.loginIcon} src="images/login-icon.png" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`${styles.dropdownOverlay} ${isOpen ? styles.dropdownOverlayOpen : ""}`}
        onClick={handleClose}
      />
    </>
  );
}

export default Dropdown;
