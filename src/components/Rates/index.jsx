import "./rates.css"

export default function Rates({
  name,
  picture,
  infos,
  flex,
  indiponible,
  annuel,
  firstFin,
  mois,
  secondFin,
  disponibilite,
}) {
  return (
    <div className="rateContainer">
      <div className="first">
        <h4>{name}</h4>
        <img src={picture} alt="ok" />
        <p>{infos}</p>
      </div>
      <div className="second">
        <p className="flexOne">
          {flex}
          <span>/mois</span>
        </p>
        <p className="flexTwo">{indiponible}</p>
      </div>
      <div className="third">
        <p className="annuelOne">
          {annuel}
          <span>/mois</span>
        </p>
        <p className="annuelTwo">{firstFin}</p>
      </div>
      <div className="fourth">
        <p className="moisOne">
          {mois}
          <span>/mois</span>
        </p>
        <p className="moisTwo">{secondFin}</p>
      </div>
      <div className="fifth">
        <p>{disponibilite}</p>
      </div>
    </div>
  )
}
