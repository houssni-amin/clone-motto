import "./ratings.css"
import star from "../../assets/star.svg"
import logoGoogle from "../../assets/logoGoogle.svg"

export default function Ratings({ name, text }) {
  return (
    <div className="ratingContainer">
      <div className="ratingContainerTop">
        <p className="nameCity">{name} | Paris</p>
        <img src={logoGoogle} alt="Logo Google" className="logoGoogle" />
      </div>

      <div>
        <img src={star} alt="Etoile" className="star" />
        <img src={star} alt="Etoile" className="star" />
        <img src={star} alt="Etoile" className="star" />
        <img src={star} alt="Etoile" className="star" />
        <img src={star} alt="Etoile" className="star" />
      </div>
      <p className="textRating">"{text}"</p>
    </div>
  )
}
