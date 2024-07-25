import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from "./Components/Layout/Header/Index.jsx";
import Footer from "./Components/Layout/Footer/Footer";

import HomePage from "./Components/Homepage/Index.jsx";
import SearchRooms from "./Components/SearchRooms/Index.jsx";
import RoomInfo from './Components/RoomDetails/RoomInfo.jsx'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SearchRooms" element={<SearchRooms />} />
          <Route path="/RoomInfo" element={<RoomInfo />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
