context('Playground', () => {
  beforeEach(() => {
    cy.visit('https://earth-portal-sandbox.socialtables.com/')
  })
  
  it('ST Login and go to a diagram', () => {
    const userName = "your email address";
    const password  = "your password";

    cy.login(userName, password);
    cy.goToDiagram();
  })
})
