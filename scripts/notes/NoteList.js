//get notes from api

//use the notes array 

//interate notes to make html representation

//render html representation to the dom
import {NoteAsHTML} from "./Note.js"
import {getNotes, useNotes} from "./NoteDataProvider.js"
const notesContainer = document.querySelector(".notesContainer")
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList()) 

export const NoteList = () => {
  getNotes()
  .then(getCriminals)
  .then(() => {
  const allNotes = useNotes()
  const criminals = useCriminals()
  //console.log("allNotes:", allNotes)
  render(allNotes, criminals)
  })
}

const render = (notesArray, criminalArray) => {
  
  contentTarget.innerHTML = notesArray.map(note => {
    const relatedCriminal = criminalArray.find(criminal => criminal.id === note.criminalId)
  })
   
  return `
      <section class="note">
      <h2>Note about ${relatedCriminal.name}</h2>
      ${note.noteText}
      </section>
  `
  }