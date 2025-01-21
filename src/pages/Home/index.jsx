import React, { useState } from "react"
import Discover from "../../components/Discover"
import bikes from "../../data/bikes.json"
import un from "../../assets/un.svg"
import deux from "../../assets/deux.svg"
import trois from "../../assets/trois.svg"
import "./home.css"

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextBike = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bikes.length)
  }

  const previousBike = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bikes.length - 1 : prevIndex - 1
    )
  }

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
          <p>À partir de 60€/mois</p>
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

      <div className="discoverContainer">
        <h3>
          DÉCOUVREZ NOS <br /> VÉLOS ÉLECTRIQUES
        </h3>

        <div className="carouselContainer">
          <button className="carouselButton prev" onClick={previousBike}>
            {"<"}
          </button>

          <div className="carousel">
            <div className="carouselItem prevItem">
              <Discover
                key={bikes[(currentIndex - 1 + bikes.length) % bikes.length].id}
                image={
                  bikes[(currentIndex - 1 + bikes.length) % bikes.length]
                    .picture
                }
                name={
                  bikes[(currentIndex - 1 + bikes.length) % bikes.length].name
                }
                text={
                  bikes[(currentIndex - 1 + bikes.length) % bikes.length].text
                }
              />
            </div>
            <div className="carouselItem centerItem">
              <Discover
                key={bikes[currentIndex].id}
                image={bikes[currentIndex].picture}
                name={bikes[currentIndex].name}
                text={bikes[currentIndex].text}
              />
            </div>
            <div className="carouselItem nextItem">
              <Discover
                key={bikes[(currentIndex + 1) % bikes.length].id}
                image={bikes[(currentIndex + 1) % bikes.length].picture}
                name={bikes[(currentIndex + 1) % bikes.length].name}
                text={bikes[(currentIndex + 1) % bikes.length].text}
              />
            </div>
          </div>

          <button className="carouselButton next" onClick={nextBike}>
            {">"}
          </button>
        </div>
        <div className="discoverText">
          <p>
            Le tout à partir de 60€/mois ou <br />
            <span>0€/mois avec le forfait mobilité durable.</span>
            <br />
            Vérifiez votre éligibilité auprès de votre employeur
          </p>
          <button>DÉCOUVRIR NOS VÉLOS</button>
        </div>
      </div>
    </main>
  )
}
