import React, { useState, useEffect } from "react"
import "./header.css"
import whiteLogo from "../../assets/clearLogo.svg"
import blackLogo from "../../assets/darkLogo.svg"
import darkAccount from "../../assets/darkAccount.svg"
import clearAccount from "../../assets/clearAccount.svg"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`${isScrolled ? "headerScrolled" : ""}`}>
      <div className="container">
        <img src={isScrolled ? blackLogo : whiteLogo} alt="Logo Motto" />
        <div>
          <a
            className={`link ${isScrolled ? "linkScrolled" : ""}`}
            href="/"
            onClick={(e) => e.preventDefault()}
          >
            SERVICES
          </a>
          <a
            className={`link ${isScrolled ? "linkScrolled" : ""}`}
            href="/"
            onClick={(e) => e.preventDefault()}
          >
            E-BIKES
          </a>
          <a
            className={`link ${isScrolled ? "linkScrolled" : ""}`}
            href="/"
            onClick={(e) => e.preventDefault()}
          >
            À PROPOS
          </a>
          <a
            className={`link ${isScrolled ? "linkScrolled" : ""}`}
            href="/"
            onClick={(e) => e.preventDefault()}
          >
            BLOG
          </a>
        </div>
        <div className="btnHader">
          <button
            className={`subscribeBtn 
              ${isScrolled ? "subscribeBtnScrolled" : ""}`}
          >
            S'ABONNER
          </button>
          <img
            src={isScrolled ? clearAccount : darkAccount}
            alt="logo account"
            className={`logoAccount 
              ${isScrolled ? "logoAccountScrolled" : ""}`}
          />
        </div>
      </div>
    </header>
  )
}
