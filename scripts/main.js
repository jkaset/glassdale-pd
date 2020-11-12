import { CriminalList } from "./criminals/criminalList.js"

import { ConvictionSelect } from "./convictions/ConvictionSelect.js"

import { OfficerList } from "./officers/OfficerList.js"

import { OfficerSelect } from "./officers/OfficerSelect.js"

import { NoteForm } from "./notes/NoteForm.js"
import { NoteList } from "./notes/NoteList.js"
import {createAlibiEventListener} from "./criminals/AlibiList.js"
import { renderWitnessButton } from "./witnesses/WitnessButton.js"
import "./witnesses/WitnessList.js"
import {renderFacilitiesButton} from "./facility/DisplayFacilitiesButton.js"
import './facility/FacilityList.js'
//import { FacilitiesList } from "./facility/FacilityList.js"

//FacilitiesList()

CriminalList()
ConvictionSelect()
OfficerList()
OfficerSelect()
NoteForm()
NoteList()
createAlibiEventListener()
//AlibiList()

renderWitnessButton()
renderFacilitiesButton()
