import React from "react";
import styles from "./styles.module.css";
import Dropdown from "./Dropdown";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.linkGroup}>
        <div>
          <a className={styles.link} href="news">
            Nowości
          </a>
        </div>

        <div>
          <a className={styles.link} href="projects">
            Nasze projekty
          </a>
        </div>
      </div>

      <a className={styles.logo} href="/">
        <img src="images/logo.png" alt="Logo" />
      </a>

      <div className={styles.linkGroup}>
        <div>
          <a className={styles.link} href="/">
            Home
          </a>
        </div>

        <div>
          <a className={styles.link} href="login">
            <div className="flex flex-row justify-center items-center gap-2">
              Login
              <img className={styles.loginIcon} src="images/login-icon.png" />
            </div>
          </a>
        </div>
      </div>

      <Dropdown />
    </nav>
  );
}

export default NavBar;
