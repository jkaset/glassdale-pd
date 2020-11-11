
const contentTarget = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")

export const renderFacilitiesButton = () => {

  contentTarget.innerHTML = `
    <button id="display--facility-button">Facilities</button>
    `
}

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "display--facility-button") {
    //console.log("fac button clicked")
    const facButtonClicked = new CustomEvent("facButtonClicked")

    eventHub.dispatchEvent(facButtonClicked)
  }
})