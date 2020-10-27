export const witnessCard = (witness) => {
  return `
    <section class="witness__card">
      <p>${witness.name}</p>
      <p>${witness.statements}</p>
    </section>
  `
}