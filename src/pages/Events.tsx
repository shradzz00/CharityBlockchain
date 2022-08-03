import { Button, Modal, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { api_listCharityEvents, api_sendDonation } from "../api/api";
import Header from "../components/Header";
import { weiToEth } from "../eth";

const EventItem = ({ event }: { event: any }) => {
  const [showPopup, setShowPopup] = useState(false);
  const closeModal = () => {
    setShowPopup(false);
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
        <div
          style={{
            fontFamily: "'Montserrat'",
            fontStyle: "italic",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#679E3C",
          }}
        >
          $ {weiToEth(event.money)}
        </div>
        <button
          onClick={() => setShowPopup(true)}
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
        >
          Fund It
        </button>
      </div>

      <Paymentpopup
        eventId={event.id}
        show={showPopup}
        closeModal={closeModal}
      />
    </div>
  );
};

const Paymentpopup = ({
  eventId,
  show,
  closeModal,
}: {
  eventId: number;
  show: boolean;
  closeModal: any;
}) => {
  const [amount, setAmount] = useState("");

  const handleDonation = async () => {
    await api_sendDonation(eventId, amount);
    closeModal();
    window.location.reload();
  };

  return (
    <Modal open={show} onClose={closeModal}>
      <Paper sx={{ width: 800, margin: "auto", marginTop: "20%", padding: 4 }}>
        <Typography variant="h4" textAlign="center">
          Donate
        </Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <br />
          <TextField
            variant="outlined"
            placeholder="Ammount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />
          <Button variant="contained" onClick={handleDonation}>
            Donate
          </Button>
        </div>
      </Paper>
    </Modal>
  );
};

const Events = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    api_listCharityEvents().then((result) =>
      setEvents(result.filter((item: any) => item.isVerified))
    );
  }, []);

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
            <EventItem key={item.id} event={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
