import {getCriminals, useCriminals} from "./CriminalProvider.js"
import {criminalCard} from "./criminal.js"
import {useConvictions} from "../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"

const criminalsContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

export const CriminalList = () => {
  
  getCriminals().then( 
    () => {
      const criminalArray = useCriminals() 
      render(criminalArray)
  })
}

eventHub.addEventListener("crimeChosen", event => {
  if (event.detail.crimeThatWasChosen !== 0) {
    const criminalsArray = useCriminals()
    //console.log(criminalsArray)  
    const convictionsArray = useConvictions()
    //console.log(convictionsArray)
    //const matchingCriminals = criminalsArray

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

const render = (criminalsArray) => {
  let criminalsHTMLRepresentations = ""
  for (const criminal of criminalsArray) {

    criminalsHTMLRepresentations += criminalCard(criminal)

    criminalsContainer.innerHTML = `  
            ${criminalsHTMLRepresentations}
          
        `
  }
  }

//   eventHub.addEventListener("officerSelected", event => {
    
//     const selectedOfficerName = event.detail.officerName
//     const criminalsArray = useCriminals()

//     const filteredArrayOfCriminals = criminalsArray.filter(
//       criminalObject => {
//       return criminalObject.arrestingOfficer === selectedOfficerName
//       //console.log(filteredArrayOfCriminals)
//     }
//     )
//     render(filteredArrayOfCriminals)
// })

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