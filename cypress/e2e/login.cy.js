describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://localhost:8080/');
    cy.get('.text-center > button').click();
    cy.get('#email').click();
    cy.get('#email').type('test@test.ee');
    cy.get('#password').click();
    cy.get('#password').type('qwerty');
    cy.get('.btn:nth-child(3)').click();
  })
})