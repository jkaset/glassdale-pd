import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import {saveNote} from "./NoteDataProvider.js"
//import use get

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


export const NoteForm = () => {
  return getCriminals()
  .then(() => {
    const criminalsArray = useCriminals()
    render(criminalsArray)
  })
}

const render = (criminalsCollection) => {
    
    contentTarget.innerHTML = `
        
        <input id="note--dateOfInterview" type="date"/>
        <input id="note--author" type="text" placeholder="Your name here"/>

        <input id="note--suspect" type="text" placeholder="Suspect name"/>

        

        <select class="dropdown" id="note--criminalSelect">
          <option value="0">Please select an criminal...</option>
          ${criminalsCollection.map(
            criminalObj => {
              
              return `<option value="${criminalObj.id}">${criminalObj.name}</option>`
            }
          ).join("")
        }
      </select>

        <textarea id="note--note" placeholder="Your note here"></textarea>

        <button id="saveNote">Save Note</button>
    `
}

eventHub.addEventListener("click", clickEvent =>{
  //console.log(clickEvent)
  if (clickEvent.target.id === "saveNote") {
    // Make a new object representation of a note
    //grab input values
    const timestamp = Date.now()
    const dateOfInterview = document.querySelector("#note--dateOfInterview").value
    const author = document.querySelector("#note--author").value
    const suspect = document.querySelector("#note--criminalSelect").value
    const note = document.querySelector("#note--note").value
    //make note object
    const newNote = {
      timestamp: timestamp,
      dateOfInterview: dateOfInterview, 
      author: author,
      criminalId: suspect,
      note: note,
    }
    //send object to database, api, json
    // const newNote = {
    //     // Key/value pairs here
    // }
    // Change API state and application state
    // 
    saveNote(newNote)
    location.reload()
}
})



//this was already here


// noteform function to call render function
// get crim then use crim and save criminalarray into a variable render(criminalArray)


// <select id="noteForm--criminal" class="criminalSelect">
        // <option value="${ criminal.id }">${ criminal.name }</option>
        // </select>