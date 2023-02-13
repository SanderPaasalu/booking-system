describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://localhost:8080/');
    cy.get('.text-center > button').click();
    cy.get('#email').click();
    cy.get('#email').click();
    cy.get('#email').type('test@test.ee');
    cy.get('#loginModal form').click();
    cy.get('#password').click();
    cy.get('#password').type('qwerty');
    cy.get('.btn-secondary:nth-child(2)').click();
  })
})