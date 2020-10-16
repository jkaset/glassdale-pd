export const criminalCard = (criminal) => {
  return `
    <section class="criminal__card">
      <h2>${criminal.name}</h2>
      <p>Age: ${criminal.age}</p>
      <p>Conviction: ${criminal.conviction}</p>
      <p>Dates of incarceration: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')} - ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
    </section>
  `
}

