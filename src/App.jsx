import { useState } from "react";
import { UserContext } from "./Context/Contexts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Session from "./Session";
import "./App.css";

// what is the full scope of this context?
const userDetails = {
  meetingDetails: {
    sessionName: "Zoom_Workshop",
    userName: "",
    sessionPasscode: "",
    sessionKey: "",
    roleType: 0,
  },
};

const App = () => {
  const [user, setUser] = useState(userDetails);
  const value = [user, setUser];
  // send notifiction context provider - provide sendNotification method
  return (
    <div>
      <UserContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Session" element={<Session />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
};

export default App;
