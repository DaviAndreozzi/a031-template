import React from "react"
import aofhoa from "./Carro.css"
import car from "../img/a2.png"
import logo from "../img/logo.png"

function Carro(){
  return(
    <div>
      <h2>HB20</h2>
      <ul>
        <img src={car}/>
        <li>Cinza</li>
        <li>2020</li>
        <li>flex</li>
      </ul>
    </div>
  )
}

export default Carro;