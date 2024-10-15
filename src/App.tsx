import React from "react";
import Header from "./components/Header/Header";
import GlobalStyles from "./GlobalStyles";
import Feed from "./components/pages/Feed/Feed";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Explore from "./components/pages/Explore/Explore";
import Discussions from "./components/pages/Discussions/Discussions";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header userIndex={2} />
      <Routes>
        <Route path="/" element={<Navigate to="/feed" />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/discussions" element={<Discussions />} />
      </Routes>
    </Router>
  );
};

export default App;
