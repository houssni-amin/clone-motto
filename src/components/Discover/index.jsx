import "./discover.css"

export default function Discover({ image, name, text }) {
  return (
    <div className="discoverContent">
      <img src={image} alt="Vélo" className="bikePicture" />
      <p className="bikeName">{name}</p>
      <p className="bikeText">{text}</p>
      <div className="borderRound">
        <div className="blackRound"></div>
      </div>
    </div>
  )
}
