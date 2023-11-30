import { useState } from "react";
import { UserContext, DeviceContext } from "./Context/Contexts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Session from "./Session";
import "./App.css";

const App = () => {
  const userInfo = {
    topic: "Zoom_Workshop",
    roleType: 1,
    userName: '',
    passcode: '',
    JWT: ''
  }
  const [user, setUser] = useState(userInfo)
  const [selectedCamera, setSelectedCamera] = useState("");
  const [selectedSpeaker, setSelectedSpeaker] = useState("");
  const [selectedMic, setSelectedMic] = useState("");
  const [videoOn, setVideoOn] = useState(true);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <DeviceContext.Provider
          value={{
            selectedCamera,
            selectedSpeaker,
            selectedMic,
            videoOn,
            setSelectedCamera,
            setSelectedSpeaker,
            setSelectedMic,
            setVideoOn,
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Session" element={<Session />} />
            </Routes>
          </BrowserRouter>
        </DeviceContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
