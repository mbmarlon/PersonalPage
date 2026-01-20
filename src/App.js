import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import "./styles.css";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import Admin from "./admin/Admin";

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {/* 🌍 SOLO EN PORTAFOLIO */}
      {!isAdmin && <Header />}
      {!isAdmin && <Nav />}

      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>

      {!isAdmin && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
