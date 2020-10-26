import {useWitnesses, getWitnesses} from "./WitnessProvider.js"
import {witnessCard} from "./Witness.js"

const witnessContainer = document.querySelector(".filters__witness")
const eventHub = document.querySelector(".container")




 

eventHub.addEventListener("click", clickEvent =>{
  //console.log(clickEvent)
  if (clickEvent.target.id === "witnessButton") {
    contentTarget.innerHTML += `

    `

}

