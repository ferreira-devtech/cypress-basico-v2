Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (firstName, lastName, email, textArea) => {
    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('#email').type(email)
    cy.get('#open-text-area').type(textArea)
    cy.get('button[type="submit"]').click()
})