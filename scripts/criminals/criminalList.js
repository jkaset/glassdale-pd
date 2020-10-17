import {getCriminals, useCriminals} from "./CriminalProvider.js"
import {criminalCard} from "./criminal.js"

export const CriminalList = () => {
  
  getCriminals().then( 
    () => {
      const criminalContainer = document.querySelector(".criminalsContainer")
      const criminalArray = useCriminals() 
      let buildCriminalList = ""
      for (const criminalOne of criminalArray) {
        buildCriminalList += criminalCard(criminalOne)
    }
    
  
  
  criminalContainer.innerHTML += buildCriminalList
})
}

//console.log(criminalArray)
//return criminalArray
