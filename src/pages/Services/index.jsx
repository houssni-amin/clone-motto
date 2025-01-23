import "./services.css"
import Header from "../../components/Header"
import Rates from "../../components/Rates"
import rates from "../../data/rates.json"
import blackLogo from "../../assets/darkLogo.svg"
import whiteAccount from "../../assets/clearAccount.svg"
import bikeTop from "../../assets/bikeTop.avif"
import modelLeft from "../../assets/modelLeft.svg"
import modelCenter from "../../assets/modelCenter.svg"
import modelRight from "../../assets/modelRight.svg"
import servicestopRight from "../../assets/servicesTopRight.avif"
import servicesBottomLeft from "../../assets/servicesBottomLeft.avif"

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

      <div className="squareContainer">
        <div className="topSquare">
          <div className="topLeftSquare">
            <h2>UN ABONNEMENT POUR CHACUN</h2>
            <p>
              La liberté est entre vos mains : avec ou sans engagement.
              Choisissez une formule qui vous convient et profitez de tout ce
              dont vous avez besoin pour rouler.
            </p>
            <button>JE M'ABONNE</button>
          </div>
          <img src={servicestopRight} alt="Vélos" />
        </div>

        <div className="bottomSquare">
          <img src={servicesBottomLeft} alt="Vélos" />
          <div className="bottomRightSquare">
            <h2>FINANCÉ À 80% PAR VOTRE EMPLOYEUR</h2>
            <p>
              Vous pouvez bénéficier d'une enveloppe allant jusqu'à 800 euros
              par an pour financer votre abonnement Motto par votre employeur.
            </p>
            <button>JE M'ABONNE</button>
          </div>
        </div>
      </div>

      <div className="ratesContainer">
        <h2>COMPAREZ NOS TARIFS</h2>
        <p className="title">Découvrez et comparez nos prix</p>
        <div className="rates">
          <div className="infos">
            <div className="info">
              <p className="gras">Durée d'engagement</p>
              <p className="fin">Option d'achat</p>
            </div>
            <div className="border info">
              <p className="gras">Flex</p>
              <p className="fin">Rachat indisponible</p>
            </div>
            <div className="info">
              <p className="gras">Annuel</p>
              <p className="fin">Rachat en fin de contract</p>
            </div>
            <div className="border info">
              <p className="gras">18 mois</p>
              <p className="fin">Rachat en fin de contract</p>
            </div>
            <div className="info">
              <p className="gras">Disponibilité</p>
            </div>
          </div>
          {rates.map((rate) => (
            <Rates
              key={rate.id}
              name={rate.name}
              picture={rate.picture}
              infos={rate.infos}
              flex={rate.flex}
              indisponible={rate.indisponible}
              annuel={rate.annuel}
              firstFin={rate.firstFin}
              mois={rate.mois}
              secondFin={rate.secondFin}
              disponibilite={rate.disponibilite}
            />
          ))}
        </div>
        <button>JE M'ABONNE</button>
      </div>
    </main>
  )
}
