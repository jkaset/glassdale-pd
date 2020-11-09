//html converter

export const NoteAsHTML = (noteObj, criminalObj) => {
//convert obj to html
//return that HTML string
  return `
  <section class="note__card">
  <h3>Note:</h3>
  <p>Author: ${noteObj.author}</p>
  <p>Suspect: ${criminalObj.name}</p>
  <p>Note: ${noteObj.note}</p>
  <p>Date of Interview: ${noteObj.dateOfInterview}</p>
  <p>Timestamp: ${new Date(noteObj.timestamp).toLocaleDateString('en-US')}</p>
  <button id="deleteNote--${noteObj.id}">Delete</button>
</section>
  `
}
