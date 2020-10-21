import {useOfficers, getOfficers} from "./OfficerProvider.js"

const officerContainer = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

export const OfficerSelect = () => {
  getOfficers()
  //console.log(OfficerSelect)
  .then(() => {
    const officersArray = useOfficers()
    render(officersArray)
    // console.log(officersArray)
  })
}

//console.log(OfficerSelect)

const render = officersCollection => {       
  officerContainer.innerHTML = `
      <select class="dropdown" id="officerSelect">
          <option value="0">Please select an officer...</option>
          ${officersCollection.map(
            officerObj => {
              
              return `<option value="${officerObj.name}">${officerObj.name}</option>`
            }
          ).join("")
        }
      </select>
  `
}

eventHub.addEventListener("change", changeEvent => {
  //console.log("change happend")
  if (changeEvent.target.id === "officerSelect") {
      const selectedOfficer = changeEvent.target.value

      const officerEvent = new CustomEvent("officerSelected", {
          detail: {
              officerName: selectedOfficer
          }
      })
      eventHub.dispatchEvent(officerEvent)
  }
})