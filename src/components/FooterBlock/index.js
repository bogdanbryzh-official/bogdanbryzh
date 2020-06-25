import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faTelegramPlane,
  faTwitter,
  faVk,
  faGit,
  faBitbucket,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./FooterBlock.module.scss";

const socials = [
  { link: "https://twitter.com/BogdanBryzh", icon: faTwitter },
  { link: "https://instagram.com/bogdanbryzh", icon: faInstagram },
  { link: "https://t.me/bogdanbryzh", icon: faTelegramPlane },
  { link: "https://vk.com/bodzen", icon: faVk },
  { link: "https://github.com/bogdanbryzh-official", icon: faGit },
  { link: "https://bitbucket.org/bogdanbryzh/", icon: faBitbucket },
  { link: "https://gitlab.com/bogdan.bryzh", icon: faGitlab },
];

const FooterBlock = () => {
  return (
    <>
      <footer>
        <div className={styles.wrap}>
          <div className={styles.socialWidget}>
            {socials.map((net, index) => (
              <a href={net.link} key={index} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={net.icon} />
              </a>
            ))}
          </div>
          <div className={styles.copy}>
            <FontAwesomeIcon icon={faCopyright} />{" "}
            <code>bogdanbryzh, 2020</code>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterBlock;
