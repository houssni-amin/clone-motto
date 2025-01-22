import "./services.css"
import Header from "../../components/Header"
import blackLogo from "../../assets/darkLogo.svg"
import whiteAccount from "../../assets/clearAccount.svg"

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
    </main>
  )
}
