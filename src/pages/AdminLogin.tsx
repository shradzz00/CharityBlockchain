import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";
import Header from "../components/Header";

const AdminLogin = () => {
  const [adminPass, setAdminPass] = useState("");
  const admin = useStore((state) => state.isAdmin);
  const setAdmin = useStore((state) => state.setAdmin);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (adminPass == "12345678") {
      setAdmin(true);
      navigate("/verify");
    }
  };

  useEffect(() => {
    if (admin) {
      navigate("/verify");
    }
  }, [admin]);

  return (
    <div
      style={{
        paddingTop: 200,
        width: "100vw",
        height: "calc(100vh - 200px)",
        background:
          "radial-gradient(96.39% 96.39% at 50% 3.61%, #6FB6B4 0%, rgba(111, 182, 180, 0.44) 100%)",
      }}
    >
      <Header />

      <div
        style={{
          width: "513px",
          height: "393px",
          margin: "auto",
          background: "#FFFFFF",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "15px",
          padding: 60,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontFamily: "'Montserrat'",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "34px",
            lineHeight: "41px",
            color: "#000000",
            textAlign: "left",
          }}
        >
          Admin Login
        </div>

        <input
          type="password"
          placeholder="Password"
          style={{
            background: "#FFFFFF",
            border: "2px solid #6FB6B4",
            borderRadius: "15px",
            padding: 24,
            marginTop: 42,
          }}
          value={adminPass}
          onChange={(e) => setAdminPass(e.target.value)}
        />

        <button
          className="buttonBase"
          style={{ marginTop: 42, padding: 20 }}
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
