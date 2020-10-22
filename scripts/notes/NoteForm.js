import {saveNote} from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


//put even hub around form

const render = () => {
    contentTarget.innerHTML = `
        <input id="note--timestamp" type="">
        <input id="note--dateOfInterview" type="date"/>
        <input id="note--author" type="text" placeholder="Your name here"/>
        <input id="note--suspect" type="text" placeholder="Suspect name"/>
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
    const note = document.querySelector("#note--note")
    //make note object
    const newNote = {
      timestamp: timestamp,
      dateOfInterview: dateOfInterview.value, 
      author: author,
      suspect: suspect,
      note: note,
    }
    //send object to database, api, json
    // const newNote = {
    //     // Key/value pairs here
    // }
    // Change API state and application state
    // 
    saveNote(newNote)
}
})



//this was already here
export const NoteForm = () => {
    render()
}