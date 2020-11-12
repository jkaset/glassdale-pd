import {getWitnesses, useWitnesses} from "./WitnessProvider.js"
import {witnessCard} from "./Witness.js"

const eventHub = document.querySelector(".container")
const witnessContainer = document.querySelector(".criminalsContainer")

eventHub.addEventListener("witnessClicked", () => {
// console.log("Heard that user clicked the witness statements button")

WitnessesList()
})

const WitnessesList = () => {
  getWitnesses()
  .then(
    () => {
    const witnessesArray = useWitnesses()
    render(witnessesArray)
  })
  
  
}

const render = (witnessesArray) => {
  let witnessHTML = ""
  for (const witness of witnessesArray) {
    witnessHTML += witnessCard(witness)
    witnessContainer.innerHTML = `
    <section>
    <h3>Witness Statements</h3>
    ${witnessHTML}
    </section>
    `
  }
}