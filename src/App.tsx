// import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "/Users/adamchaplin/3vue/src/pages/home/HomePage.tsx";

import TopNav from "./components/navigation/TopNav.tsx";

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* Top Navigation Bar */}
        <TopNav />

        {/* Main Content Area */}
        <div className="content">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/story"
              element={
                <div>
                  The product story(creator, intent, reason, history) would live
                  on a page here
                </div>
              }
            />
            <Route
              path="/pricing"
              element={
                <div>
                  Product pricing content would live on a page component here
                </div>
              }
            />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
