context('Playground', () => {
  beforeEach(() => {
    cy.visit('https://earth-portal-sandbox.socialtables.com/')
  })
  
  it('Tests new Modal', { tags: 'newModal' }, () => {

    cy.login("username1", "password1");
    goToDiagram();

    cy.get(".new-diagram-name__button").click();
    cy.get(".new-settings-modal").first().should("exist");
    
    cy.wait(3000);

  })

  it('Tests old Modal', { tags: 'oldModal' }, () => {

    login("username2", "password2");
    goToDiagram();

    cy.get(".new-diagram-name__button").click();
    cy.get(".general-modal").first().should("exist");

    cy.wait(3000);
  }) 
})
