// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    getEl(identifier: string): Cypress.Chainable<JQuery<HTMLElement>>;
  }
}

Cypress.Commands.add('getEl', (identifier: string) => {
  return cy.get(`[data-testid="${identifier}"]`);
});
