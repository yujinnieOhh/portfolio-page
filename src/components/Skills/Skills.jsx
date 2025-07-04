import { useState } from "react";
import { english, korean } from "./Skills";
import styles from "./Skills.module.css";

function Skills({ lang }) {
  const [selected, setSelected] = useState("kor");

  const skillList = lang === "korean" ? korean : english;
  const describe = skillList.find((d) => d.id === selected);
  const contents = describe?.contents || ["설명이 없습니다."];
  const languageButtons = skillList.filter((item) => item.subId === "language");
  const skillButtons = skillList.filter((item) => item.subId === "skill");

  return (
    <div
      style={{ display: "flex", flexDirection: "row", fontFamily: "Fira Code" }}
    >
      {/* 항목 선택 버튼 */}
      <div className={styles.skillsButton}>
        <div className={styles.buttonGroup}>
          <strong>📂 Languages</strong>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {languageButtons.map((skillItem) => (
              <button
                key={skillItem.id}
                onClick={() => setSelected(skillItem.id)}
              >
                {skillItem.id}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <strong>📂 Skills</strong>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {skillButtons.map((skillItem) => (
              <button
                key={skillItem.id}
                onClick={() => setSelected(skillItem.id)}
              >
                {skillItem.id}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* 내용 표시 */}
      <div
        style={{
          display: "flex",
          background: "#fafafa",
          color: "#333333",
          borderRadius: 8,
        }}
      >
        <pre
          style={{
            margin: 0,
            padding: "8px 12px",
            background: "#fafafa",
            color: "#888",
          }}
        >
          {contents.map((_, idx) => (
            <div key={idx}>{idx + 1}</div>
          ))}
        </pre>
        {/* 텍스트 내용 */}
        <pre style={{ margin: 0, padding: "8px 12px" }}>
          {contents.map((contents, idx) => (
            <div key={idx}>{contents}</div>
          ))}
        </pre>
      </div>
    </div>
  );
}

export default Skills;
