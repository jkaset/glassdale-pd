const eventHub = document.querySelector(".container")

// export const criminalCard = (criminal, facilityObj) => {
//   return `
//     <section class="criminal__card" id="criminal-${criminal.id}">
//       <h2>${criminal.name}</h2>
//       <p>Age: ${criminal.age}</p>
//       <p>Conviction: ${criminal.conviction}</p>
//       <p>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
//       <p>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
//       <p>Facilities: ${facilityObj.facilityName}</p>
//       <button id="associates--${criminal.id}">Associate Alibis</button>
     
//     </section>
//   `
// }

export const criminalCard = (criminalObject, facilities) => {
  return `
  <div class="criminal" id="criminal-${criminalObject.id}">
      <h4>${criminalObject.name}</h4>
      <div class="criminal__details">
          <p>Convicted for ${criminalObject.conviction}</p>
          <p>Arrested by ${criminalObject.arrestingOfficer}</p>
          <p>Incarcerated between:
              ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
              ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
          </p>
          <p>Age: ${criminalObject.age}</p>
          <div>
              <h4>Facilities</h4>
              <ul>
                  ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
              </ul>
          </div>
          <button id="associates--${criminalObject.id}">Show Associates</button>
      </div>
  </div>
  `
}

eventHub.addEventListener("click", (eventObj) => {
  
  //split id of alibi button
  const [prefix, criminalId] = eventObj.target.id.split("--")
  //console.log("button clicked", prefix, criminalId)
  //check if clicked button is alibi button
  if (eventObj.target.id.startsWith("associates--")){
  //console.log("button clicked", prefix, criminalId)
  //now it only console logs when button is clicked
  //NOW build a custom event
    const myCustomEvent = new CustomEvent("alibiButtonClicked", {
      detail: {
        criminalId: criminalId
      }
    })
    //dispatch event to eventHub so other modules can listen for eem
    eventHub.dispatchEvent(myCustomEvent)
  }
})

