Cypress.Commands.add('login', (userName, password) => { 
    cy.get("[type='email']")
        .type(userName);

    cy.get("#field-password")
        .type(password);

    cy.get(".sign-in__button")
        .click();

    cy.get(".sign-in__button", {timeout: 20000}).should("not.exist");
 })


 Cypress.Commands.add('goToDiagram', () => { 
    cy.get(".events__content__table div[role=gridcell]", {timeout: 20000}).first().click();
    cy.get(".files__cards__card").first().click();
 })
