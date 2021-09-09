context('Playground', () => {
  beforeEach(() => {
    cy.visit('https://earth-portal-sandbox.socialtables.com/')
  })
  
  it('Tests new Modal', { tags: 'newModal' }, () => {

    login("e2eUserEverythingOnSandbox@mailinator.com", "@llFlags0nSandbox");
    goToDiagram();

    cy.get(".new-diagram-name__button").click();
    cy.get(".new-settings-modal").first().should("exist");
    
    cy.wait(3000);

  })

  it('Tests old Modal', { tags: 'oldModal' }, () => {

    login("e2eUserProdFlagsOn@mailinator.com", "test123");
    goToDiagram();

    cy.get(".new-diagram-name__button").click();
    cy.get(".general-modal").first().should("exist");

    cy.wait(3000);
  })

  
  function login(userName, password) {
    cy.get("[type='email']")
    .type(userName);

    cy.get("#field-password")
    .type(password);

    cy.get(".sign-in__button")
    .click();

    cy.get(".sign-in__button", {timeout: 20000}).should("not.exist");
  }

  function goToDiagram() {
    cy.get(".events__content__table div[role=gridcell]", {timeout: 20000}).first().click();
    cy.get(".files__cards__card").first().click();
  }
  
})
