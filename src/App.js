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

/** 
 * 
 * Migraci[on de DB]
import { useEffect } from "react";
import { seedPortfolio } from "./migrations/seedPortfolio";

function App() {
  useEffect(() => {
    seedPortfolio();
  }, []);

  return <h1>Migrando portfolio…</h1>;
}

export default App;
*/
