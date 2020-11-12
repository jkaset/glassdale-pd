import {getFacilities, useFacilities} from "./FacilityProvider.js"
import {Facility} from "./Facility.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js";

const facilitiesContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

let facilities = []
let crimFac = []
let criminals = []

eventHub.addEventListener("facButtonClicked", () => {
  console.log("I hear click")
  FacilityList()
})

const FacilityList = () => {

  getFacilities()
    .then(getCriminalFacilities)
    .then(getCriminals)
    .then(() => {
      facilities = useFacilities()
      crimFac = useCriminalFacilities()
      criminals = useCriminals()

      render()
    })

}

const render = () => {
  facilitiesContainer.innerHTML = `
          <h3>Glassdale Facilities</h3>
          <section class="facilitiesList">
            ${facilities.map(facility => {
    const criminalRelationshipsForThisFacility = crimFac.filter(cf => cf.facilityId === facility.id)
    const criminalsAtThisFacility = criminalRelationshipsForThisFacility.map(cf => {
      const matchingCriminalObj = criminals.find(criminal => criminal.id === cf.criminalId)
      return matchingCriminalObj
    })
    return Facility(facility, criminalsAtThisFacility)
  }).join("")
    }
          </section>
        `
}

// eventHub.addEventListener("facButtonClicked", () => {
//   render(FacilitiesList())
//   console.log("Heard that user clicked the fac button")
// })


// export const FacilitiesList = () => {
//   getFacilities()
//     .then(() => {
//       const facilityArray = useFacilities()
//       render(facilityArray)
//     })
// }

// const render = (facilitiesArray) => {
//   let facilitiesHTML = ""
//   for (const facility of facilitiesArray) {
//   facilitiesHTML += Facility(facility)

//     facilitiesContainer.innerHTML = `
//       <h3>Glassdale Facilities</h3>
//       <section class="facilitiesList">
//         ${facilitiesHTML}
//       </section>
//     `
//   }
// }