import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import Header from "./Component/Header.jsx";
import Nav from "./Component/Nav.jsx";
import Footer from "./Component/Footer.jsx";
import Admin from "./Admin/Admin.jsx";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Footer />
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
