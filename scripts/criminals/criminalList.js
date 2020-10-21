import {getCriminals, useCriminals} from "./CriminalProvider.js"
import {criminalCard} from "./criminal.js"
import {useConvictions} from "../convictions/ConvictionProvider.js"

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

//         buildCriminalList += criminalCard(criminalOne)
//   
//   criminalsContainer.innerHTML += `
//   <h3>Glassdale Criminals</h3>
//   <section class="criminalList">
//     ${buildCriminalList}
//   </section>
//   `
//   }
// }  


  


// export const CriminalList = () => {
//   getCriminals()
//       .then(() => {
//           const appStateCriminals = useCriminals()
//           render(appStateCriminals)
//       })
// }

  

//Render ALL criminals initally

