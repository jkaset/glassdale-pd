import {getCriminals, useCriminals} from "./CriminalProvider.js"
import {criminalCard} from "./criminal.js"
// import {ConvictionSelect} from "../convictions/ConvictionSelect.js"
import {useConvictions} from "../convictions/ConvictionProvider.js"

export const CriminalList = () => {
  
  getCriminals().then( 
    () => {
      const criminalArray = useCriminals() 
      //render(criminalArray)
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

  const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
    return criminalObj.conviction === convictionThatWasChosen.name  
  })
  console.log(filteredCriminalsArray)

  render(filteredCriminalsArray)
  }
})


  //console.log("filteredCriminalsArray", filteredCriminalsArray)

const render = (criminalsArray) => {
  let buildCriminalList = ""
      for (const criminalOne of criminalsArray) {
        buildCriminalList += criminalCard(criminalOne)
    
  criminalContainer.innerHTML += `
  <h3>Glassdale Criminals</h3>
  <section class="criminalList">
    ${buildCriminalList}
  </section>
  `
  }
}  


  


// export const CriminalList = () => {
//   getCriminals()
//       .then(() => {
//           const appStateCriminals = useCriminals()
//           render(appStateCriminals)
//       })
// }

  

//Render ALL criminals initally

