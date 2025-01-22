import React, { useState, useEffect } from "react"
import "./header.css"

export default function Header({
  backgroundHeaderDefault,
  backgroundHeaderScroll,
  linkColorDefault,
  linkColorScoll,
  logoMottodefault,
  logoMottoScroll,
  subscribeBtnDefault,
  subscribeBtnScroll,
  logoAccountDefault,
  logoAccountScroll,
  backgroundAccountDefault,
  backgroundAccountScroll,
}) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      style={{
        backgroundColor: isScrolled
          ? backgroundHeaderScroll
          : backgroundHeaderDefault,
      }}
    >
      <div className="container">
        <a href="/">
          <img
            src={isScrolled ? logoMottoScroll : logoMottodefault}
            alt="Logo Motto"
          />
        </a>

        <div>
          <a
            className="link"
            href="/services"
            style={{ color: isScrolled ? linkColorScoll : linkColorDefault }}
          >
            SERVICES
          </a>
          <a
            className="link"
            href="/"
            onClick={(e) => e.preventDefault()}
            style={{ color: isScrolled ? linkColorScoll : linkColorDefault }}
          >
            E-BIKES
          </a>
          <a
            className="link"
            href="/"
            onClick={(e) => e.preventDefault()}
            style={{ color: isScrolled ? linkColorScoll : linkColorDefault }}
          >
            À PROPOS
          </a>
          <a
            className="link"
            href="/"
            onClick={(e) => e.preventDefault()}
            style={{ color: isScrolled ? linkColorScoll : linkColorDefault }}
          >
            BLOG
          </a>
        </div>
        <div className="btnHader">
          <button
            style={{
              backgroundColor: isScrolled
                ? subscribeBtnScroll
                : subscribeBtnDefault,
            }}
            className="subscribeBtn"
          >
            S'ABONNER
          </button>
          <img
            alt="logo account"
            className="logoAccount"
            src={isScrolled ? logoAccountScroll : logoAccountDefault}
            style={{
              backgroundColor: isScrolled
                ? backgroundAccountScroll
                : backgroundAccountDefault,
            }}
          />
        </div>
      </div>
    </header>
  )
}
