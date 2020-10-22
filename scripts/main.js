// import {getOfficers, useOfficers} from "./officers/OfficerProvider.js"
// getOfficers()
// .then(() => {
//   const officersArray = useOfficers()
//   console.log(officersArray)
// })

// import {getCriminals, useCriminals} from "./criminals/CriminalProvider.js"
// getCriminals()
// .then(() => {
//   const criminalArray = useCriminals()
//   console.log(criminalArray)
// })

import { CriminalList } from "./criminals/criminalList.js"

import { ConvictionSelect } from "./convictions/ConvictionSelect.js"

import { OfficerList } from "./officers/OfficerList.js"

import { OfficerSelect } from "./officers/OfficerSelect.js"

import { NoteForm } from "./notes/NoteForm.js"





CriminalList()
ConvictionSelect()
OfficerList()
OfficerSelect()
NoteForm()
