//get notes from api

//use the notes array 

//interate notes to make html representation

//render html representation to the dom
import {NoteAsHTML} from "./Note.js"
import {getNotes, useNotes, deleteNote} from "./NoteDataProvider.js"
// const notesContainer = document.querySelector(".notesContainer")
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container")
const notesContainer = document.querySelector(".notesContainer")

eventHub.addEventListener("noteStateChanged", () => NoteList()) 

export const NoteList = () => {
  getNotes()
    // .then(() => getCriminals())
    .then(getCriminals)
    .then(() => {
      const allNotes = useNotes()
      const allCriminals = useCriminals()
      render(allNotes, allCriminals)
    })
}


const render = (notesArray, criminalsArray) => {
  let notesHTMLRepresentations = ""
  for (const note of notesArray) {

    // Find the related criminal
    const relatedCriminal = criminalsArray.find(criminal => criminal.id === note.criminalId)
    // debugger
    notesHTMLRepresentations += NoteAsHTML(note, relatedCriminal)
  }
  notesContainer.innerHTML = `
              <h3>Case Notes</h3>
              ${notesHTMLRepresentations}
          `
}

eventHub.addEventListener("click", e => {
  if (e.target.id.startsWith("deleteNote--")) {
    const [prefix, id] = e.target.id.split("--")


    deleteNote(id).then(
      () => {
        const updatedNotes = useNotes()
        const criminals = useCriminals()
        render(updatedNotes, criminals)
      }
    )
  }//ends if funct
})//ends big eventhub funct

// export const NoteList = () => {
//   getNotes()
//   .then(getCriminals)
  
//   .then(() => {
//   const allNotes = useNotes()
//   const criminals = useCriminals()
//   //console.log("allNotes:", allNotes)
  
//   render(allNotes, criminals)
//   })
  
// }

// const render = (notesArray, criminalArray) => {
//   const contentTarget = document.querySelector(".notesContainer")
//   contentTarget.innerHTML = notesArray.map(note => {
//     const relatedCriminal = criminalArray.find(criminal => criminal.id === note.criminalId)
//     console.log(relatedCriminal)
//     return `
//         <section class="note">
//         <h4>Note about ${relatedCriminal.name}</h4>
//         <p>Date of Interview: ${note.dateOfInterview}</p>
//         <p>${note.note}</p>
//         <button id="deleteNote--${note.id}">Delete</button>
//         </section>
//     `
//   })
  
//   }

  //<p>Note recorded: ${note.timestamp}</p>