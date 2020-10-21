import {useOfficers, getOfficers} from "./OfficerProvider.js"

const contentTarget = document.querySelector(".filters__officer")

export const OfficerSelect = () => {
  getOfficers()
  //console.log(OfficerSelect)
  .then(() => {
    const officers = useOfficers()
    render(officers)
    //console.log(officers)
  })
}

//console.log(OfficerSelect)

const render = officersCollection => {       
  contentTarget.innerHTML = `
      <select class="dropdown" id="officerSelect">
          <option value="0">Please select an officer...</option>
          ${officersCollection.map(
            officerObj => {
              
              return `<option value="${officerObj.id}">${officerObj.name}</option>`
            }
          ).join("")
        }
      </select>
  `
}

// eventHub.addEventListener("change", changeEvent => {
//   if (changeEvent.target.id === "officerSelect") {
//       // Get the name of the selected officer
//       const selectedOfficer = changeEvent.target.value

//       // Define a custom event
//       const customEvent = new CustomEvent("officerSelected", {
//           detail: {
//               officer: selectedOfficer
//           }
//       })

//       // Dispatch event to event hub
//       eventHub.dispatchEvent(customEvent)
//   }
// })