import { UserContext } from "./Context/globalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Session from "./Session";
import "./App.css";

const App = () => {
  return (
    <div>
      <UserContext.Provider value={{}}>
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
