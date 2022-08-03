import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate("/adminlogin");
  };

  const handleEventsClick = () => {
    navigate("/events");
  };

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        position: "absolute",
        width: "1620px",
        height: "59.6px",
        left: "150px",
        top: "55px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            fontFamily: "'Montserrat'",
            fontStyle: "normal",
            fontWeight: "800",
            fontSize: "28px",
            lineHeight: "34px",
            color: "#000000",
            width: "max-content",
          }}
        >
          Tru Charity
        </div>

        <div
          onClick={handleHomeClick}
          style={{
            fontFamily: "'Montserrat'",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "24px",
            lineHeight: "29px",
            color: "#FFFFFF",
            marginLeft: 80,
            width: "max-content",
            cursor: "pointer",
          }}
        >
          Home
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          onClick={handleEventsClick}
          style={{
            fontFamily: "'Montserrat'",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "24px",
            lineHeight: "29px",
            color: "#FFFFFF",
            cursor: "pointer",
            width: "max-content",
          }}
        >
          Events
        </div>

        <button
          style={{
            border: "2px solid #FFFFFF",
            color: "white",
            borderRadius: "15px",
            backgroundColor: "transparent",
            marginLeft: 100,
          }}
          onClick={handleAdminLogin}
        >
          Admin
        </button>
      </div>
    </div>
  );
};

export default Header;