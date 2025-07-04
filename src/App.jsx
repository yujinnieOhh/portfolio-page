import { useState } from "react";
import Profile from "./components/Profile/Profile.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import "./App.css";

function App() {
  const [lang, setLang] = useState("korean");

  return (
    <div>
      {/* 언어선택 UI */}
      <div>
        <button onClick={() => setLang("korean")}>한국어</button>
        <button onClick={() => setLang("english")}>English</button>
      </div>
      {/* 언어 상태를 props로 전달 */}
      <div className="main-container">
        <Contacts />
        <Profile lang={lang} />
        <Skills lang={lang} />
      </div>
    </div>
  );
}

export default App;
