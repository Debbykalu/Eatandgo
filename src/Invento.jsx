import Footer from "./invento_components/Footer"
import Heada from "./invento_components/Heada"
import Products from "./invento_components/Products"
import Create from "./invento_components/Create"
import './assets/app.css'

const Invento = () => {
  return (
    <div>
      <h1>Invento</h1>
      <Heada />
      <Create />
      <Products />
      <Footer />
      </div>
  )
}

export default Invento