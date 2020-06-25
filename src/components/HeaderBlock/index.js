import React from "react";
import styles from "./HeaderBlock.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const HeaderBlock = ({ links }) => {
  return (
    <header>
      <div className={styles.wrap}>
        <a href="/" className={styles.home}>
          <FontAwesomeIcon icon={faHome} />
        </a>
        <nav>
          {links.map((link, index) => {
            return (
              <a href={link.anchor} className={styles.nav} key={index}>
                {link.text}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default HeaderBlock;
