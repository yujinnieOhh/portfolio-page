import { useState } from "react";
import profileImg from "../assets/profileContact.png";

export default function Profile() {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className="profile-container inline-block w-[100px] my-10 mx-auto"
      style={{ perspective: 1000 }}
    >
      <div
        className={"flip w-full h-[200px] relative cursor-pointer"}
        style={{ perspective: 1000 }}
        onClick={() => setFlip((prev) => !prev)}
      >
        <div
          className={
            "flipper relative w-full h-full transition-transform duration-700"
          }
          style={{
            transformStyle: "preserve-3d",
            transitionDuration: "0.6s",
            transform: flip ? "rotateY(180deg)" : "none",
          }}
        >
          <div
            className="front absolute w-full h-full left-0 top-0 rounded-[5%] object-cover my-5 shrink-0"
            style={{
              backfaceVisibility: "hidden",
              zIndex: 2,
              background: "#fff",
            }}
          >
            <img
              src={profileImg}
              alt="click to see my contacts"
              className="w-full h-full rounded-[5%] object-cover block min-w-0 min-h-0"
            />
          </div>
          <div
            className="back absolute w-full h-full left-0 top-0 rounded-[16px] shadow-lg flex items-center justify-center flex-col min-w-0 bg-[#f8f8f8] z-10"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
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
