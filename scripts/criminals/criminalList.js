import {getCriminals, useCriminals} from "./CriminalProvider.js"
import {criminalCard} from "./criminal.js"

export const CriminalList = () => {
  
  getCriminals().then( 
    () => {
      const criminalArray = useCriminals() 

      let buildCriminalList = ""
      for (const criminalOne of criminalArray) {
        buildCriminalList += criminalCard(criminalOne)
    
  criminalContainer.innerHTML = `
  <h3>Glassdale Criminals</h3>
  <section class="criminalList">
    ${buildCriminalList}
  </section>
  `
    }
  })
}

const criminalContainer = document.querySelector(".criminalsContainer")

const eventHub = document.querySelector(".container")

  

// Render ALL criminals initally
// export const CriminalList = () => {
//   getCriminals()
//       .then(() => {
//           const appStateCriminals = useCriminals()
//           render(appStateCriminals)
//       })
// }


eventHub.addEventListener("crimeSelected", event => {
    const criminalsArray = useCriminals()
    //console.log(criminalsArray)  
    const convictionsArray = useConvictions()

    const convictionThatWasChosen = convictionsArray.find(convictionObj => {
      return convictionObj.id === event.detail.crimeThatWasChosen
    })
  //console.log("convictionThatWasChose", convictionThatWasChosen)

  const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
    return criminalObj.conviction === convictionThatWasChosen.name
  })


  //console.log("filteredCriminalsArray", filteredCriminalsArray)

const render = () => {
  let buildCriminalList = ""
      for (const criminalOne of criminalArray) {
        buildCriminalList += criminalCard(criminalOne)
    }
  criminalContainer.innerHTML += `
  <h3>Glassdale Criminals</h3>
  <section class="criminalList">
    ${buildCriminalList}
  </section>
  `
}
})