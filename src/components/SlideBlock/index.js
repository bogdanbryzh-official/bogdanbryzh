import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SlideBlock.module.scss";

const SlideBlock = ({ slideData }) => {
  const data = { ...slideData };
  let { title, icon, spin, text, backgroundImage, gradientColor } = data;

  if (!gradientColor) {
    gradientColor = "000000";
  }

  const gradientColor1 = `${gradientColor}a4`;
  const gradientColor2 = (parseInt(gradientColor1, 16) + 0x2f4beff6).toString(
    16
  );

  const cover = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",
  };
  const gradient = {
    backgroundImage: `linear-gradient(to top, #${gradientColor1}, #${gradientColor2})`,
  };
  const faIcon = <FontAwesomeIcon icon={icon} spin={spin} />;
  return (
    <div className={styles.cover} style={cover}>
      <div className={styles.gradient} style={gradient}>
        <div className={styles.wrap}>
          {title && (
            <h1 className={styles.header}>
              {faIcon} {title}
            </h1>
          )}
          {text && <p className={styles.descr}>{text}</p>}
        </div>
      </div>
    </div>
  );
};

export default SlideBlock;
