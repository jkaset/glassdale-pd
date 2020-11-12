export const Facility = (facilityObject, criminalsArray) => {
  return `
      <div class="facility">
        <h3>${facilityObject.facilityName}</h3>
        <p>Security Level: ${facilityObject.securityLevel}</p>
        <p>Capacity: ${facilityObject.capacity}</p>
        <div>
          <h5>Criminals</h5>
          <ul>
              ${criminalsArray.map(c => `<li>${c.name}</li>`).join("")}
          </ul>
        </div>
      </div>
  `
}