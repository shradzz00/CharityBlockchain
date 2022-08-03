import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api_addCharityEvent } from "../api/api";
import Header from "../components/Header";

const CreateEvent = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [imageUri, setImageUri] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await api_addCharityEvent(name, desc, imageUri);
    navigate("/events");
  };

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
          height: "560px",
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
          Create an Event
        </div>

        <input
          placeholder="Event Name"
          style={{
            background: "#FFFFFF",
            border: "2px solid #6FB6B4",
            borderRadius: "15px",
            padding: 24,
            marginTop: 42,
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Event Description & Contact Info"
          style={{
            background: "#FFFFFF",
            border: "2px solid #6FB6B4",
            borderRadius: "15px",
            padding: 24,
            marginTop: 42,
          }}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <input
          placeholder="Image Url"
          style={{
            background: "#FFFFFF",
            border: "2px solid #6FB6B4",
            borderRadius: "15px",
            padding: 24,
            marginTop: 42,
          }}
          value={imageUri}
          onChange={(e) => setImageUri(e.target.value)}
        />

        <button
          className="buttonBase"
          style={{ marginTop: 42, padding: 20 }}
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateEvent;
