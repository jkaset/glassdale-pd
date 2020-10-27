// import {useWitnesses, getWitnesses} from "./WitnessProvider.js"
// import {witnessCard} from "./Witness.js"

const contentTarget = document.querySelector(".buttons__witnesses")
const eventHub = document.querySelector(".container")

export const renderWitnessButton = () => {
  
  contentTarget.innerHTML = `
    <button id="witness-display">Witness Statements</button>  
  `

}

eventHub.addEventListener("click", clickEvent => {
  //console.log("change happend")
  if (clickEvent.target.id === "witness-display") {
      const witnessButtonClicked = new CustomEvent("witnessClicked")

      eventHub.dispatchEvent(witnessButtonClicked)
  }
})


