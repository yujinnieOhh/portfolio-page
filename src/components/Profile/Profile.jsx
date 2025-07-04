import { korean, english } from "./Profile";

function Profile({ lang }) {
  const data = lang === "korean" ? korean[0] : english[0];

  return (
    <div className="about" style={{ display: "flex", flexDirection: "column" }}>
      <h2>{data.name}</h2>
      {data.desc.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

export default Profile;
