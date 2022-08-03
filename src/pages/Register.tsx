import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <div>
      <h2>Register</h2>
      <img src={avatar} alt={username} />
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="avatar link"
        onChange={(e) => setAvatar(e.target.value)}
      />
    </div>
  );
};

export default Register;
