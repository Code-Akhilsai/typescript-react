import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const nav = useNavigate();

  const backend = import.meta.env.VITE_BACKEND_URL;

  const handleLogin = async () => {
    const response: any = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/login`,
      { email, password },
    );

    if (response.status !== 200) {
      return alert("Error");
    }

    nav("/dashboard");
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>login</button>
    </div>
  );
};

export default Home;
