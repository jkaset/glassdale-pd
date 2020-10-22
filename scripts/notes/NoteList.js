//get notes from api

//use the notes array 

//interate notes to make html representation

//render html representation to the dom
import {NoteAsHTML} from "./Note.js"
import {getNotes, useNotes} from "./NoteDataProvider.js"
const notesContainer = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList()) 

export const NoteList = () => {
  getNotes()
  .then(() => {
  const allNotes = useNotes()
  //console.log("allNotes:", allNotes)
  render(allNotes)
  })
}

const render = (notesArray) => {
  let notesHTMLRepresentations = ""
  for (const note of notesArray) {

    notesHTMLRepresentations += NoteAsHTML(note)
  }
    notesContainer.innerHTML = `  
            ${notesHTMLRepresentations}
          
        `
  }