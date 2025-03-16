import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Houses from "./pages/Houses";
import ExtraPage from "./pages/ExtraPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import Team from "./components/Team";
import ScrollToTop from "./ScrollToTop";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/extras" element={<ExtraPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
