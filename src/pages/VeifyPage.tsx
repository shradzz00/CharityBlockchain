import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api_listCharityEvents, api_verify } from "../api/api";
import Header from "../components/Header";
import { useStore } from "../store";

const EventItem = ({ event, loadEvents }: { event: any; loadEvents: any }) => {
  const handleVerify = async () => {
    await api_verify(event.id);
    loadEvents();
  };

  return (
    <div
      style={{
        width: 300,
        height: 477,
        background: "#FFFFFF",
        borderRadius: "15px",
        padding: 18,
      }}
    >
      <div style={{ height: 280, borderRadius: 13 }}>
        <img
          src={event.imageUri}
          alt="my image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 13,
          }}
        />
      </div>

      <div
        style={{
          background: "#FFFFFF",
          border: "3px solid #6FB6B4",
          borderRadius: "10px",
          padding: 18,
          fontFamily: "'Montserrat'",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "24px",
          color: "#565656",
          position: "relative",
          top: -40,
          width: "60%",
          margin: "auto",
        }}
      >
        {event.name}
      </div>

      <div
        style={{
          fontFamily: "'Montserrat'",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "20px",
          color: "rgba(0, 0, 0, 0.54)",
          textAlign: "left",
        }}
      >
        {event.description}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 8,
          alignItems: "center",
        }}
      >
        <button
          className="buttonBase"
          style={{
            fontFamily: "'Montserrat'",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#FFFFFF",
            padding: 14,
          }}
          onClick={handleVerify}
        >
          Approve
        </button>
      </div>
    </div>
  );
};

const VeifyPage = () => {
  const [events, setEvents] = useState<any[]>([]);
  const admin = useStore((state) => state.isAdmin);
  const navigate = useNavigate();

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = () => {
    api_listCharityEvents().then((result) =>
      setEvents(result.filter((item: any) => !item.isVerified))
    );
  };

  useEffect(() => {
    if (!admin) {
      navigate("/adminlogin");
    }
  }, [admin]);

  return (
    <div
      style={{
        paddingTop: 150,
        width: "100vw",
        minHeight: "calc(100vh - 150px)",
        background:
          "radial-gradient(96.39% 96.39% at 50% 3.61%, #6FB6B4 0%, rgba(111, 182, 180, 0.44) 100%)",
      }}
    >
      <Header />
      <div style={{ width: 1059, margin: "auto" }}>
        <div
          style={{
            fontFamily: "'Montserrat'",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "40px",
            lineHeight: "49px",
            color: "#FFFFFF",
            textAlign: "left",
          }}
        >
          Charities
        </div>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.38)",
            height: 2,
            marginBottom: 36,
          }}
        />

        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
          {events.map((item) => (
            <EventItem key={item.id} event={item} loadEvents={loadEvents} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VeifyPage;
