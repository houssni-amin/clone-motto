import "./services.css"
import Header from "../../components/Header"
import blackLogo from "../../assets/darkLogo.svg"
import whiteAccount from "../../assets/clearAccount.svg"
import bikeTop from "../../assets/bikeTop.avif"

export default function Services() {
  return (
    <main className="servicesContainer">
      <Header
        backgroundHeaderDefault={"#f6fafd"}
        backgroundHeaderScroll={"white"}
        linkColorDefault={"#113229"}
        linkColorScoll={"#113229"}
        logoMottodefault={blackLogo}
        logoMottoScroll={blackLogo}
        subscribeBtnDefault={"white"}
        subscribeBtnScroll={"#f0c04a"}
        backgroundAccountDefault={"#113229"}
        backgroundAccountScroll={"#113229"}
        logoAccountDefault={whiteAccount}
        logoAccountScroll={whiteAccount}
      />

      <div className="firstServices">
        <h1>DÉCOUVREZ NOS SERVICES</h1>
        <p>
          Où que votre vélo vous emmène, nous vous accompagnons.
          <br /> Avec notre gamme de services, nos sommes là à tous les coins de
          rue.
        </p>
        <button>DÉCOUVRIR</button>
        <img src={bikeTop} alt="Vélo" />
      </div>
    </main>
  )
}
