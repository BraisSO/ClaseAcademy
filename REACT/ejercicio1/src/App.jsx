import Card from "./assets/CardComponent/Card";
import Navegacion from "./assets/NavegacionComponent/Navegacion";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'


function App() {
  return (
    <div>
      <Navegacion/>
      <div className="globalContainer">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="globalContainer">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App
