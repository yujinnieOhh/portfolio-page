import { useState } from "react";
import styles from "./Contacts.module.css";
import profileImg from "../../assets/profileContact.png";

function Contacts() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={styles.contacts}>
      <div
        className={`${styles["flip-container"]}${
          flipped ? " " + styles.flipped : ""
        }`}
        onClick={() => setFlipped((prev) => !prev)}
      >
        <div className={styles.flipper}>
          <div className={styles.front}>
            <img
              src={profileImg}
              alt="profile image"
              className={styles["profile-img"]}
            />
          </div>
          <div className={styles.back}>
            <h3>Contacts</h3>
            <a href="mailto:yujinnieohh@gmail.com">yujinnieohh@gmail.com</a>
            <br />
            <a href="tel:+821041354179">+82 10 4135 4179</a>
            <br />
            <a
              href="https://www.instagram.com/yujinnieohh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
            <br />
            <a
              href="https://github.com/yujinnieOhh"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/yujin-oh-168516341/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
