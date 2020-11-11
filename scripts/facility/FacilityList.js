import {getFacilities, useFacilities} from "./FacilityProvider.js"
import {Facility} from "./Facility.js"

const facilitiesContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("facButtonClicked", () => {
  // console.log("Heard that user clicked the witness statements button")
  FacilitesList()
})

export const FacilitesList = () => {
  getFacilities()
    .then(() => {
      const facilityArray = useFacilities()
      renderFacilities(facilityArray)
    })
}

const renderFacilities = (facilitiesArray) => {
  let facilitiesHTML = ""
  for (const facility of facilitiesArray) {
    facilitiesHTML += Facility(facility)

    facilitiesContainer.innerHTML = `
      <h3>Glassdale Facilities</h3>
      <section class="facilitiesList">
        ${facilitiesHTML}
      </section>
    `
  }
}