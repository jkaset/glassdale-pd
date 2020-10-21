/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
  getConvictions()
    .then(() => {
    const convictions = useConvictions()
    render(convictions)
    })
  }


const render = convictionsCollection => {       
  contentTarget.innerHTML = `
      <select class="dropdown" id="crimeSelect">
          <option value="0">Please select a crime...</option>
          ${convictionsCollection.map(
            convictionObj => {
              
              return `<option value="${convictionObj.id}">${convictionObj.name}</option>`
            }
          ).join("")
        }
      </select>
  `
}

eventHub.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "crimeSelect") {
    const customEvent = new CustomEvent("crimeChosen", {
      detail: {
        crimeThatWasChosen: parseInt(changeEvent.target.value)
      }
    })    
    eventHub.dispatchEvent(customEvent)
  }
})



