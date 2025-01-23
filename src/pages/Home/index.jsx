import React, { useState } from "react"
import Header from "../../components/Header"
import blackLogo from "../../assets/darkLogo.svg"
import whiteLogo from "../../assets/clearLogo.svg"
import whiteAccount from "../../assets/clearAccount.svg"
import blackAccount from "../../assets/darkAccount.svg"
import Discover from "../../components/Discover"
import Rating from "../../components/Ratings/index"
import bikes from "../../data/bikes.json"
import ratings from "../../data/ratings.json"
import un from "../../assets/un.svg"
import deux from "../../assets/deux.svg"
import trois from "../../assets/trois.svg"
import topRight from "../../assets/topRight.avif"
import bottomLeft from "../../assets/bottomLeft.avif"
import hands from "../../assets/hands.svg"
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
      <Header
        backgroundHeaderDefault={"transparent"}
        backgroundHeaderScroll={"white"}
        linkColorDefault={"white"}
        linkColorScoll={"#113229"}
        logoMottodefault={whiteLogo}
        logoMottoScroll={blackLogo}
        subscribeBtnDefault={"white"}
        subscribeBtnScroll={"#f0c04a"}
        backgroundAccountDefault={"white"}
        backgroundAccountScroll={"#113229"}
        logoAccountDefault={blackAccount}
        logoAccountScroll={whiteAccount}
      />
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
        <h2>LA MEILLEURE MANIÈRE DE SE DÉPLACER EN VILLE.</h2>
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

      <div className="squareContainer">
        <div className="topSquare">
          <div className="topLeftSquare">
            <h2>VOTRE ABONNEMENT SUR MESURE</h2>
            <p>
              La liberté est entre vos mains : avec ou sans engagement.
              Choisissez une formule qui vous convient et profitez de tout ce
              dont vous avez besoin pour rouler.
            </p>
            <button>JE M'ABONNE</button>
          </div>
          <img src={topRight} alt="Vélos" />
        </div>

        <div className="bottomSquare">
          <img src={bottomLeft} alt="Vélos" />
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

      <div className="handsContainer">
        <img src={hands} alt="Mains" />
        <h2>UNE OPTION DE RACHAT RIEN QUE POUR VOUS</h2>
        <p>
          À la fin de chaque engagement vous aurez la possibilité de racheter
          votre vélo à un tarif préférentiel.
        </p>
        <button>JE M'ABONNE</button>
      </div>

      <div className="ratingsContainer">
        <h2>
          NOS UTILISATEURS <br /> LE DISENT MIEUX QUE NOUS
        </h2>
        <div className="ratingsContent">
          {ratings.map((rating, id) => (
            <Rating key={id} name={rating.name} text={rating.text} />
          ))}
        </div>
      </div>
    </main>
  )
}
