// creates array of alibis for one criminal and shows it in a list
import {useCriminals} from "./CriminalProvider.js"
const eventHub = document.querySelector(".container")

export const createAlibiEventListener = () => {
eventHub.addEventListener("alibiButtonClicked", (eventObj) => {
  //show alibis for selected criminal
  //console.log(eventObj.details.criminalId)
  //find one criminal whose id matches the criminalId sent in event, store in variable. It's an array so use the array method find. p.s. Find takes a function as its argument
  const arrayOfCriminals = useCriminals()
  
  const foundCriminal = arrayOfCriminals.find((criminal)  => { return criminal.id === parseInt(eventObj.detail.criminalId)
  }) 
  console.log("found the criminal", foundCriminal)
  //puts info into display
  //create array to store alibi list 
  // const alibisForFoundCriminal = foundCriminal.known_associates

  AlibiList(foundCriminal)

})

}

const AlibiList = (criminal) => {
  render(criminal)
}
//function adds alibis to the criminal card in DOM
const render = (criminal) => {
  const contentTarget = document.querySelector(`#criminal-${criminal.id}`)
  contentTarget.innerHTML += `
  <div class="alibi__list">
    ${criminal.known_associates.map(alibiObj => {
      return `
      <p>${alibiObj.name}</p>
      <p>${alibiObj.alibi}</p>
      `
    }).join("")}
  </div>
  `
  }
  