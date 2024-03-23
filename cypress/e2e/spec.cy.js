describe(`Rock Paper Scissors Game Test`, () => {
  it(`types name, selects choice, and verifies history log`, () => {

    cy.visit(`file:///C:/Users/tadpo/OneDrive/Documents/College/Web%20Game%20Development/Tooling%20Lab/Tooling-Lab/index.html`)
 
    const playerName = `Sydney Schalk`;
    cy.get(`input[name="player-name"]`).type(playerName)
    

    const selectedChoice = `rock`;
    cy.get(`select[name="player-choice"]`).select(selectedChoice)

    cy.get(`button[name="play-button"]`).click()

    cy.get(`.history-log li`).should(`have.length.at.least`, 1)
      .first().should(`contain.text`, `${playerName} chose ${selectedChoice}`)
  })
})
