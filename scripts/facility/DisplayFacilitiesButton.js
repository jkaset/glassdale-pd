
const contentTarget = document.querySelector(".facility__button")

export const renderFacilitiesButton = () => {

  contentTarget.innerHTML = `
    <button id="display--criminalsByFacility-button">Facilities</button>
    `
}