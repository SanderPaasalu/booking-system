describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://localhost:8080/');
    cy.get('.text-center > button').click();
    cy.get('#email').click();
    cy.get('#email').type('Admin');
    cy.get('#password').click();
    cy.get('#email').click();
    cy.get('#password').click();
    cy.get('#password').type('Password');
    cy.get('.btn:nth-child(3)').click();
    cy.get('tr:nth-child(6) button:nth-child(3)').click();
  })
})