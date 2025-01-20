import React from "react"
import "./footer.css"
import clearLogo from "../../assets/clearLogo.svg"
import logoInstagram from "../../assets/logoInstagram.png"
import logoLinkedin from "../../assets/logoLinkedin.png"
import logoFacebook from "../../assets/logoFacebook.png"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <img src={clearLogo} alt="Logo Motto" className="logoMotto" />
        <div className="aProposDeMotto content">
          <h3>À propos de Motto</h3>
          <a className="link" href="/">
            <span>À propos</span>
          </a>
          <a className="link" href="/">
            <span>On recrute</span>
          </a>
          <a className="link" href="/">
            <span>Blog</span>
          </a>
          <a className="link" href="/">
            <span>Carte cadeau 🎁</span>
          </a>
          <a className="link" href="/">
            <span>Boutique en ligne</span>
          </a>
        </div>
        <div className="serviceClient content">
          <h3>Service client</h3>
          <p>Lundi au Vendredi : 9h30 à 19h00</p>
        </div>
        <div className="notreService content">
          <h3>Notre service</h3>
          <a className="link" href="/">
            <span>Nos Vélos</span>
          </a>
          <a className="link" href="/">
            <span>Nos offres</span>
          </a>
        </div>
        <div className="aide content">
          <h3>Aide</h3>
          <a className="link" href="/">
            <span>FAQ</span>
          </a>
        </div>
        <div className="mentionsLegale content">
          <h3>Mention légales</h3>
          <a className="link" href="/">
            <span>Conditions générales</span>
          </a>
          <a className="link" href="/">
            <span>Politique de confidentialité</span>
          </a>
        </div>
        <div className="nousSuivre content">
          <h3>Nous suivre</h3>
          <div className="socialNetworks">
            <img
              src={logoInstagram}
              alt="logo Instagram"
              className="logoInstagram"
            />
            <img
              src={logoLinkedin}
              alt="logo Linkedin"
              className="logoLinkedin"
            />
            <img
              src={logoFacebook}
              alt="logo Facebook"
              className="logoFacebook"
            />
          </div>

          <p>Français &#x23F7;</p>
        </div>
      </div>
    </footer>
  )
}
