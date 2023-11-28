import { UserContext } from "./Context/Contexts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Session from "./Session";
import "./App.css";

// what is the full scope of this context?
const userDetails = {
  topic: "Zoom_Workshop",
  name: "",
  password: "",
  roleType: 1 || 0,
};

const App = () => {
  return (
    <div>
      <UserContext.Provider value={userDetails}>
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
