context('Playground', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/').debug();
  })
  
  it('Google search Cypress', () => {
    cy.get("input[name=q]")
      .type("cypress");
  
    cy.get("input[name=q]")
      .type('{enter}');
  })
})
