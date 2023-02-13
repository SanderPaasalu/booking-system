describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://localhost:8080/');
cy.get('.text-center > button').click();
cy.get('#password').click();
cy.get('#password').type('test');
cy.get('.btn-secondary:nth-child(2)').click();
cy.get('#password').click();
cy.get('#password').click();
cy.get('#password').type('{backspace}');
cy.get('#password').type('{backspace}');
cy.get('#password').type('{backspace}');
cy.get('#password').type('{backspace}');
cy.get('#email').click();
cy.get('#email').type('test');
cy.get('#loginModal form').click();
cy.get('.btn-secondary:nth-child(2)').click();
  })
})