describe('open vue-base', () => {
  it('works', () => {
    console.log('works');
  });

  it('open localhost:8081', () => {
    cy.visit('http://localhost:8081');
    cy.screenshot();
  });
});

describe('vue-base page tests', () => {
  beforeEach(() => {
    cy.title().should('eq', 'typescript-vue');
    cy.get('.count-view').as('view');
    cy.get('#count-button-incr').as('incr');
    cy.get('#count-button-decr').as('decr');
    cy.get('#count-button-reset').as('reset');
  });

  it('check element', () => {
    cy.get('@view').eq(0);

  });

  it('click button', () => {
    cy.get('@incr').click();
    cy.get('@view').contains(1);
    cy.get('@decr').click();
    cy.get('@view').contains(0);
    cy.get('@incr').click();
    cy.get('@incr').click();
    cy.get('@incr').click();
    cy.get('@incr').click();
    cy.get('@incr').click();
    cy.get('@incr').click();
    cy.get('@incr').click();
    cy.get('@incr').click();
    cy.get('@incr').click();
    cy.get('@incr').click();
    cy.get('@incr').click();
    cy.get('@view').contains(11);
    cy.get('@view').should('class', 'count-view red');
    cy.get('@reset').click();
    cy.get('@view').contains(0);
    cy.get('@view').should('class', 'count-view white');
    cy.get('@decr').click();
    cy.get('@view').contains(-1);
    cy.get('@view').should('class', 'count-view blue');
  });
});
