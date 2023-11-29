import { useState } from "react";
import { UserContext, MediaContext } from "./Context/Contexts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Session from "./Session";
import "./App.css";

// what is the full scope of this context?
const userDetails = {
  sessionName: "Zoom_Workshop",
  userName: "",
  sessionPasscode: "",
  sessionKey: "",
  roleType: 0,
};

const mediaDetails = {
  cameras: [],
  speakers: [],
  mics: [],
  activeSpeaker: "",
  activeMic: "",
  activeCamera: "",
  videoOn: false,
  audioOn: false,
  audioStarted: false,
};

const App = () => {
  const [user, setUser] = useState(userDetails);
  const [media, setMedia] = useState(mediaDetails);
  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        <MediaContext.Provider value={[media, setMedia]}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Session" element={<Session />} />
            </Routes>
          </BrowserRouter>
        </MediaContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
