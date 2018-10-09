describe('vue-base', () => {
  it('works', () => {
    console.log('works');
  });

  it('open localhost:8081', () => {
    cy.visit('http://localhost:8080');
    cy.screenshot();
    cy.title().should('eq', 'typescript-vue');
  });
});
