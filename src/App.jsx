import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Donate from "./pages/Donate";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import SponsorshipOpportunities from "./pages/Sponsorship Opportunities";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsorship" element={<Navigate to="/sponsorship-opportunities" replace />} />
        <Route path="/sponsorship-opportunities" element={<SponsorshipOpportunities />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
