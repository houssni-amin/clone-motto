import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Footer from "./components/Footer"
import "./style.css"

// Racine de l'application, où le rendu React commence
const root = ReactDOM.createRoot(document.getElementById("root"))

// Rendu de l'application
root.render(
  <React.StrictMode>
    {/* Utilisation du Router pour gérer les routes de l'application */}
    <Router>
      <div className="content-body">
        {/* Configuration des routes avec le composant Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
)
