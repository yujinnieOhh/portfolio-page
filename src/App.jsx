import { useState } from "react";
import "./App.css";
import Profile from "./components/profile.jsx";

function App() {
  const [lang, setLang] = useState("korean");
  return (
    <div>
      {/* 언어선택 */}
      <div>
        <button onClick={() => setLang("korean")}>한국어</button>
        <button onClick={() => setLang("english")}>English</button>
      </div>
      <div className="main-container">
        <Profile />
      </div>
    </div>
  );
}

export default App;
