import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import CreateEvent from "./pages/CreateEvent";
import AdminLogin from "./pages/AdminLogin";
import VeifyPage from "./pages/VeifyPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="createevent" element={<CreateEvent />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="verify" element={<VeifyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
