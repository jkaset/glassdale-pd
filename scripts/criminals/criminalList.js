import {getCriminals, useCriminals} from "./CriminalProvider.js"
import {criminalCard} from "./criminal.js"
import {useConvictions} from "../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"
import {getFacilities, useFacilities} from "../facility/FacilityProvider.js"
import {getCriminalFacilities, useCriminalFacilities} from "../facility/CriminalFacilityProvider.js"

import {FacilitesList} from "../facility/FacilityList.js"


const criminalsContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")



eventHub.addEventListener("crimeChosen", event => {
  if (event.detail.crimeThatWasChosen !== 0) {
    const criminalsArray = useCriminals()
    //console.log(criminalsArray)  
    const convictionsArray = useConvictions()
    //console.log(convictionsArray)

    const convictionThatWasChosen = convictionsArray.find(convictionObj => {
      return convictionObj.id === event.detail.crimeThatWasChosen
    })
  //console.log("convictionThatWasChosen", convictionThatWasChosen)

  const filteredCriminalsArray = criminalsArray.filter(criminalObj=> {
    return criminalObj.conviction === convictionThatWasChosen.name
  })
  //console.log(filteredCriminalsArray)

  render(filteredCriminalsArray)
  }
})
  //console.log("filteredCriminalsArray", filteredCriminalsArray)


eventHub.addEventListener("officerSelected", event => {
  // How can you access the officer name that was selected by the user?
  const officerName = event.detail.officerName

  // How can you get the criminals that were arrested by that officer?
  const criminals = useCriminals()
  const filteredArray = criminals.filter(
      criminalObject => {
          if (criminalObject.arrestingOfficer === officerName) {
              return true
          }
      })
      render(filteredArray)
})

// const render = (criminalsArray) => {
//   let criminalsHTMLRepresentations = ""
//   for (const criminal of criminalsArray) {

//     criminalsHTMLRepresentations += criminalCard(criminal)

//     criminalsContainer.innerHTML = `
//           <h3>Glassdale Criminals</h3>
//           <section class="criminalsList">
//             ${criminalsHTMLRepresentations}
//           </section>
//         `
//   }
// }

export const CriminalList = () => {
  // Kick off the fetching of both collections of data
  getFacilities()
      .then(getCriminalFacilities)
      .then(
          () => {
              // Pull in the data now that it has been fetched
              const facilities = useFacilities()
              const crimFac = useCriminalFacilities()
              const criminals = useCriminals()

              // Pass all three collections of data to render()
              render(criminals, facilities, crimFac)
          }
      )
}

const render = (criminalsToRender, allFacilities, allRelationships) => {
  // Step 1 - Iterate all criminals
  criminalsContainer.innerHTML = criminalsToRender.map(
      (criminalObject) => {
          // Step 2 - Filter all relationships to get only ones for this criminal
          const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

          // Step 3 - Convert the relationships to facilities with map()
          const facilities = facilityRelationshipsForThisCriminal.map(cf => {
              const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
              return matchingFacilityObject
          })

          // Must pass the matching facilities to the Criminal component
          return criminalCard(criminalObject, facilities)
      }
  ).join("")
}


