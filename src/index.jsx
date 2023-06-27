import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/Assets/Style/index.scss";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Error from "./Pages/Error/error";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Properties from "./Pages/Properties/properties";


const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Je crée une route dynamique pour afficher chacun des logements. Nous utiliseronts le hook useparams pour récupérer ces paramètres  */}
        <Route path="/properties/:id" element={<Properties />} />
        <Route path="/about" element={<About />} />
        {/* Je crée une route pour capturer toutes les routes qui ne sont pas mentionnées ci-dessus. Elles conduiront à ma page d'erreur */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
