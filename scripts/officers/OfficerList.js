import {getOfficers, useOfficers} from "./OfficerProvider.js"

import {officerCard} from "./Officer.js"

export const OfficerList = () => {
  
  getOfficers().then( 
    () => {
      const officerContainer = document.querySelector(".officersContainer")
      const officerArray = useOfficers() 
      let buildOfficerList = ""
      for (const officer of officerArray) {
        buildOfficerList += officerCard(officer)
    }
  officerContainer.innerHTML += `<h2>Glassdale Officers</h2>${buildOfficerList}`
})
}