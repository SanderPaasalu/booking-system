describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://localhost:8080/');
cy.get('.text-center > button').click();
cy.get('#email').click();
cy.get('#email').type('Admin');
cy.get('#password').click();
cy.get('#password').type('Password');
cy.get('.btn:nth-child(3)').click();
cy.get('#app > button:nth-child(2)').click();
cy.get('#nameEdit').click();
cy.get('#nameEdit').click();
cy.get('#nameEdit').type('test');
cy.get('#day').click();
cy.get('#day').type('2030-05-25');
cy.get('#start').click();
cy.get('#start').type('8:00');
cy.get('#end').type('9:00');
cy.get('#phoneEdit').click();
cy.get('#phoneEdit').type('55558888');
cy.get('#addEditModal .btn-primary').click();

  })
})