import React from "react";
import styles from "./styles.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["link-group"]}>
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

      <a href="/">
        <img src="images/logo.png" alt="Logo" className={styles.logo} />
      </a>

      <div className={styles["link-group"]}>
        <div>
          <a className={styles.link} href="/">
            Home
          </a>
        </div>

        <div>
          <a className={styles.link} href="login">
            <div className="flex flex-row justify-center items-center gap-2">
              Login
              <img className={styles.icon} src="images/login-icon.png" />
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
