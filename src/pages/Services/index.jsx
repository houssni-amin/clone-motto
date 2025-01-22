import "./services.css"
import Header from "../../components/Header"
import blackLogo from "../../assets/darkLogo.svg"
import whiteAccount from "../../assets/clearAccount.svg"
import bikeTop from "../../assets/bikeTop.avif"
import modelLeft from "../../assets/modelLeft.svg"
import modelCenter from "../../assets/modelCenter.svg"
import modelRight from "../../assets/modelRight.svg"

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

      <div className="secondServices">
        <h2>
          DES SERVICES PENSÉS
          <br />
          POUR VOTRE TRANQUILITÉD'ESPRIT
        </h2>
        <p>Disponibles pour tous nos modèles</p>
        <div className="modelsContainer">
          <div className="model">
            <img src={modelLeft} alt="" />
            <h3>
              ASSURANCE CONTRE
              <br /> LE VOL
            </h3>
            <p>
              Roulez l'esprit tranquille avec notre assurance <br />
              contre le vol
            </p>
          </div>
          <div className="model">
            <img src={modelCenter} alt="" />
            <h3>
              MAINTENANCE & <br />
              RÉPARATIONS
            </h3>
            <p>
              Accéder à notre réseau de partenaires à domicile pour vous
              simplifier la vie
            </p>
          </div>
          <div className="model">
            <img src={modelRight} alt="" />
            <h3>TRACEUR & ÉQUIPE DE RECHERCHE</h3>
            <p>
              Localisation en cas de vol grâce à notre traceur intégré et notre
              équipe dédiée
            </p>
          </div>
        </div>
        <button>COMPARER NOS OFFRES</button>
      </div>
    </main>
  )
}
