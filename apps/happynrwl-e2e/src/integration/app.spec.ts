describe('happynrwl', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.getEl('welcometitle').contains('Nx loves Cypress');
  });
});
