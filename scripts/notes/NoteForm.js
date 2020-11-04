import {saveNote} from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


//put even hub around form

const render = (criminalsCollection) => {
    contentTarget.innerHTML = `
        
        <input id="note--dateOfInterview" type="date"/>
        <input id="note--author" type="text" placeholder="Your name here"/>

        <input id="note--suspect" type="text" placeholder="Suspect name"/>

        

        <select class="dropdown" id="criminalSelect">
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
    const suspect = document.querySelector("#note--suspect").value
    const note = document.querySelector("#note--note").value
    //make note object
    const newNote = {
      timestamp: timestamp,
      dateOfInterview: dateOfInterview, 
      author: author,
      criminalId: selectedCriminalId,
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
export const NoteForm = () => {
    render()
}


// <select id="noteForm--criminal" class="criminalSelect">
        // <option value="${ criminal.id }">${ criminal.name }</option>
        // </select>