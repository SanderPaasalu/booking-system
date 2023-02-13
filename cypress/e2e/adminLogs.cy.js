describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://localhost:8080/');
    cy.get('.text-center > button').click();
    cy.get('#email').click();
    cy.get('#email').type('Admin');
    cy.get('#password').type('Password');
    cy.get('#loginModal form').click();
    cy.get('.btn:nth-child(3)').click();
    cy.get('#app > button:nth-child(3)').click();
    cy.get('.modal-xl .btn').click();
  })
})