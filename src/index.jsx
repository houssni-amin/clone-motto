import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import "./style.css"

// Racine de l'application, où le rendu React commence
const root = ReactDOM.createRoot(document.getElementById("root"))

// Rendu de l'application
root.render(
  <React.StrictMode>
    {/* Utilisation du Router pour gérer les routes de l'application */}
    <Router>
      <Header />
      <div className="content-body">
        {/* Configuration des routes avec le composant Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
)
