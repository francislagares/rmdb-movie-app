describe('Home', () => {
  it('shows the home page without crashing', () => {
    cy.visit('/');
    cy.findByRole('heading', { name: /welcome to next\.js!/i }).should('exist');
  });
});

const asModule = {};
export default asModule;
