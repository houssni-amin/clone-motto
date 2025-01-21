import React from "react"
import Discover from "../../components/Discover"
import bikes from "../../data/bikes.json"
import "./home.css"
import un from "../../assets/un.svg"
import deux from "../../assets/deux.svg"
import trois from "../../assets/trois.svg"

export default function Home() {
  return (
    <main>
      <div className="homeStart">
        <video
          autoPlay
          loop
          muted
          src="https://cdn.sanity.io/files/j09u7mpp/production/3be36417fd57d48e21266575c8e350f46197b32d.mp4"
        ></video>
        <div className="homeTitle">
          <h1>
            VOTRE VÉLO ÉLECTRIQUE
            <br />
            EN ABONNEMENT
          </h1>
          <p>À partir de 60€/mois </p>
          <button>DÉCOUVRIR NOS OFFRES</button>
        </div>
      </div>
      <div className="orderContainer">
        <h2>LA MEILLEURE MANIÈRE DE SE DEPLACER EN VILLE.</h2>
        <div className="orderFlex">
          <div className="orderContent">
            <img src={un} alt="1" className="number" />
            <h3>
              JE CHOISIS MON VÉLO
              <br />
              ÉLECTRIQUE
            </h3>

            <p>Parmi tous nos modèles disponibles</p>
          </div>
          <div className="orderContent">
            <img src={deux} alt="2" className="number" />
            <h3>
              JE CHOISIS MON
              <br />
              ABONNEMENT
            </h3>

            <p>Assurance vol, traceur GPS, réparations à domicile...</p>
          </div>
          <div className="orderContent">
            <img src={trois} alt="3" className="number" />
            <h3>
              JE RÉCUPÈRE MON VÉLO
              <br />
              SOUS 72H
            </h3>

            <p>Récupérer votre vélo sous 72h et profitez</p>
          </div>
        </div>

        <button>JE M'ABONNE</button>
      </div>
    </main>
  )
}
