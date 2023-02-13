describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://localhost:8080/');
cy.get('.text-center > button').click();
cy.get('#email').click();
cy.get('#email').type('testyte');
cy.get('#loginModal form').click();
cy.get('#password').click();
cy.get('#password').type('qwertyte');
cy.get('.btn:nth-child(3)').click();
cy.get('#email').click();
cy.get('#email').type('test@test.ee');
cy.get('.btn:nth-child(3)').click();
cy.get('#email').click();
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#email').type('{backspace}');
cy.get('#password').click();
cy.get('#password').type('test');
cy.get('.btn:nth-child(3)').click();
cy.get('#loginModal .btn-close').click();
  })
})